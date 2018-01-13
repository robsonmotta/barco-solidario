import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  contacts: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private provider: ContactProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.contacts = this.provider.getAll();
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      console.log(data);
      console.log(data.email);
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Bem vindo, ' + data.email,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Ocorreu um erro no login, tente novamente.',
          duration: 3000
        }).present();
      }
    })
  }

  newContact() {
    this.navCtrl.push('ContactEditPage');
  }

  editContact(contact: any) {
    // Maneira 1
    this.navCtrl.push('ContactEditPage', { contact: contact });

    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
