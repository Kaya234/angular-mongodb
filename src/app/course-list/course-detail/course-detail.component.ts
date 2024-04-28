import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  course!: Course;

  constructor(public coursesService: CoursesService, public router: Router, public actRoute: ActivatedRoute){  }
  ngOnInit(): void {

    const _id: string | null = this.actRoute.snapshot.paramMap.get('id');

  if ( typeof _id === 'string') {
    this.subscription = this.coursesService.getCourse(_id!).subscribe(data => this.course = data);
  }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
