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
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
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
        var error_msg = error.message;
        if (error.code == "auth/wrong-password") {
          error_msg = "Senha inválida"
        } else if (error.code == "auth/invalid-email") {
          error_msg = "Usuário não cadastrado"
        } else if (error.code == "auth/too-many-requests") {
          error_msg = "Você foi bloqueado por ter feito muitas tentativas. Aguarde alguns segundos."
        }
        this.toast.create({
          message: error_msg,
          duration: 3000
        }).present();
        console.log(error);
      });
    } catch (e) {
      this.toast.create({
        message: 'Todos os campos precisam ser preenchidos.',
        duration: 3000
      }).present();
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
