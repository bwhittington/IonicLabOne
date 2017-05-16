import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoursesPage } from '../courses/courses';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    public goToCourses(): void {
        this.navCtrl.push("CoursesPage");
    }

    public goToInstructors(): void {
        this.navCtrl.push("InstructorsPage");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

}
