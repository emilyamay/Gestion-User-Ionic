import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController,AlertController,NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UsersPage } from '../users/users';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild('username') username;
 // @ViewChild('password') password;

 alert(message: string){

  this.alertCtrl.create({
      title: 'Information !',
      subTitle: message,
      buttons: ['ok']
  }).present();


 }

 username:string;
 password:string;
  Login():void{
    console.log('would sign user with',this.username.toString(),this.password.toString());
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.username,this.password)
    .then(data=>{
      console.log('got some data',this.fire.auth.currentUser);
      this.alert('Bienvenu chez-vous');
      this.navCtrl.setRoot(UsersPage);

    })
    .catch(error =>{
      console.log('got an error',error);
      this.alert(error.message);

    })
    
  

  
  }

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController) {

  }
  
  goRegister(){

    this.navCtrl.push(RegisterPage);
  }


}
