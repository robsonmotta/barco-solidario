import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

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

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          res.sendEmailVerification();
          this.toast.create({
            message: 'Uma mensagem de validação foi enviada para seu e-mail.',
            duration: 3000
          }).present();
        }, error => {
          this.toast.create({
            message: 'Todos os campos devem ser preenchidos corretamente. ' + error.message,
            duration: 3000
          }).present();
          console.log(error);
        });
    } catch (error) {
        this.toast.create({
          message: 'Todos os campos devem ser preenchidos corretamente. ' + error.message,
          duration: 3000
        }).present();
        console.error(error);
    }
  }

}
