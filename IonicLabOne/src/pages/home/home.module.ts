import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseListModule } from '../course-list/course-list.module';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'})

export class HomeModule {

    private navCtrl: NavController;

    constructor(navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }

    public goToCourses(): void {
        //this.navCtrl.push(Courses);
    }
}