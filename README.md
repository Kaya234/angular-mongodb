# Courses Demo Page (Angular + Node.js + Mongo DB)

### **Link to the demo page:** https://kaya234.github.io/angular-mongodb

### **Link to the API:** https://far-lava-calendula.glitch.me/courses


Courses Demo Page project showcases a simple yet effective course management system using **Angular** for the **front-end** and **Node.js** and **Mongo DB** for the **back-end**.\
It provides an intuitive interface to browse through a collection of courses, filter them based on specific category, and search for relevant ones based on name or category. Each course listing includes a brief details, thumbnail, and a button to view more information.

## Key Features:

**Course Overview:** A dynamic grid displays an overview of available courses, including their titles, thumbnails, and button to view more information.

**Filtering:** Users can filter courses based on category.

**Search:** A search bar allows users to quickly locate courses matching specific category or name.

**Course Details:** Clicking on a course button displays course detail with information, including a title, comprehensive description, location and capacity.

## Technical Stack:

**Front-end:** Angular

**Back-end:** Node.js + Mongo DB

**Data Modeling:** Courses are represented as documents inside courses collection containing with relevant details such as title, description, thumbnail path, category, capcity, city.

## Available Scripts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### `npm run api`

Runs the API for the development enviroment.\
Open [http://localhost:5038/courses](http://localhost:5038/courses) to view the json in the browser. 
You need to create your own Mongo DB database with the same structure and you need to create your own connection to the database to be able run database localy.


### `ng serve`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run run-all`

Runs the app and API at the same time in the development mode.


### `ng build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
