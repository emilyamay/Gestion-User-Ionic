import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController ,} from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { database } from '../../../node_modules/firebase';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username:string;
  password:string;
  Rpassword:string;
  
    register():void
    {
          this.fire.auth.createUserWithEmailAndPassword(this.username.toString(),this.password.toString())
          .then(data =>{console.log('go data ',data);
          this.alert('Votre compte est enregistrè avec succès');
          this.navCtrl.setRoot(HomePage);
        })
        .catch(error =>{console.log('go data ',error);
        this.alert(error.message);
        

        });
        console.log('would register user with',this.username.toString(),this.password.toString());
  }
   
  constructor(private alertCtrl:AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  alert(message: string){

    this.alertCtrl.create({
        title: 'Information !',
        subTitle: message,
        buttons: ['ok']
    }).present();
  
  
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  

}
