import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from '../../components/courses/shared/course.service';

@Component({
    selector: 'page-course-list',
    templateUrl: 'course-list.html'})

export class CourseListModule {

    public courses: Array<Object>;
    public courseService: CourseService;
    public navCtrl: NavController;
    private id: number;

    constructor(courseService: CourseService, navCtrl: NavController) {
        this.courseService = courseService;
        this.courses = this.courseService.getCourses();
        this.navCtrl = navCtrl;
    }

    public goToCourse(id: number): void {
        this.id = id;
        //this.navCtrl.push(Course, { 'id': this.id });
    }
}