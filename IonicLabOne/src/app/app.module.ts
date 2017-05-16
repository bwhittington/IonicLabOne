import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp],
    imports: [
        BrowserModule,  // New in ionic 3
        IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp],
    providers: [
        StatusBar,
        SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
