import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseService } from '../../components/courses/shared/course.service';

@IonicPage()
@Component({
    selector: 'page-courses',
    templateUrl: 'courses.html',
    providers: [CourseService]
})

export class CoursesPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Courses');
    }
}