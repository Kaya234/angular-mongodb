import { MONGODB_URI } from "./key.js";
import Express from "express";
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import cors from "cors";


let app = Express();
app.use(cors())

const connection = MONGODB_URI;

let db;

app.listen(5038,()=>{
    MongoClient.connect(connection, (error, client) =>{
        db = client.db('course-database');
        console.log('Mongo db connected');
    });
})

app.get('/courses', async (req, res) => {
    let result = await db.collection('courses').find({}).toArray();
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

app.get('/courses/:id', async (req, res) => {
    let collection = await db.collection("courses");
    let query = {_id: ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})
