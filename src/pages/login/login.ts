import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        if(user.emailVerified) {
          this.navCtrl.push('HomePage');
        } else {
          user.sendEmailVerification()
          .then((res) => {
            this.toast.create({
              message: 'Usuário com e-mail ainda não verificado, reenviamos um e-mail de validação.',
              duration: 3000
            }).present();
          }, error => {
            console.log(error);
            this.toast.create({
              message: 'Erro para reenviar email.',
              duration: 3000
            }).present();
          });
        };
      }, error => {
        this.toast.create({
          message: 'Usuário ainda não cadastrado.',
          duration: 3000
        }).present();
      });
    } catch (e) {
      console.log("Ocorreu um erro ao tentar fazer login.");
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
