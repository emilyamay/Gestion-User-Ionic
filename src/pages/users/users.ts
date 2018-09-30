import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth'; 
import { AddPage } from '../add/add';
//import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
 // persons : FirebaseListObservable<any>;
    email: string;
  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email=fire.auth.currentUser.email;
   // this.persons = db.list('/people')
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  
  goAdd(){
    this.navCtrl.push(AddPage);
} 

}
