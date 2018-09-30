import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


import { AngularFireAuth } from 'angularfire2/auth';
//import { FirebaseListObservable } from 'angularfire2/database';

import { UsersPage } from '../users/users';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  

  //personList: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    //this.personList = db.list('/person');

  }
  /*createPerson(name, lname, age) {
    this.personList.push({
      name: name,
      lname: lname,
      age: age,
    }).then(newPerson => {
      this.navCtrl.push(UsersPage);
    }, error => { console.log(error); });

  }*/
  

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }*/

  

}
