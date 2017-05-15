import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { CourseListModule } from '../pages/course-list/course-list.module';

@NgModule({
    declarations: [
        MyApp,
        HomeModule,
        CourseListModule],
    imports: [
        BrowserModule,  // New in ionic 3
        HttpModule,  // New in ionic 3
        IonicModule.forRoot(MyApp),
        IonicPageModule.forChild(HomeModule),
        IonicPageModule.forChild(CourseListModule)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomeModule,
        CourseListModule],
    providers: [
        StatusBar,
        SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
