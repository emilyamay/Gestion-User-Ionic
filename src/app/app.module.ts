import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { UsersPage } from '../pages/users/users';
import { AddPage } from '../pages/add/add';



import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
 import { IonicStorageModule } from '@ionic/storage';

import { Storage } from '@ionic/storage';



//
const firebaseAuth={
  apiKey: "AIzaSyDjzSFa662FvIMcJ4FR6GTeSWPeUhrNvx8",
  authDomain: "ionicprojet1.firebaseapp.com",
  databaseURL: "https://ionicprojet1.firebaseio.com",
  projectId: "ionicprojet1",
  storageBucket: "ionicprojet1.appspot.com",
  messagingSenderId: "980471151198"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    UsersPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule ,
     AngularFireDatabaseModule 
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    UsersPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
