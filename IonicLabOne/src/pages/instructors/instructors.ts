import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InstructorService } from '../../components/instructors/shared/instructor.service';

@IonicPage()
@Component({
    selector: 'page-instructors',
    templateUrl: 'instructors.html',
    providers: [InstructorService]
})

export class InstructorsPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Intructors');
    }
}