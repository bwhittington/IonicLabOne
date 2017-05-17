import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentService } from '../../components/students/shared/student.service';

@IonicPage()
@Component({
    selector: 'page-students',
    templateUrl: 'students.html',
    providers: [StudentService]
})

export class StudentsPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Intructors');
    }
}