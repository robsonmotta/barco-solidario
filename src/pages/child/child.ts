import { ChildProvider } from './../../providers/child/child';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {
  children: Observable<any>;

  constructor(private toast: ToastController, private provider: ChildProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.children = this.provider.getAll();
  }

  newChild() {
    this.navCtrl.push('ChildEditPage');
  }

  editChild(child: any) {
    this.navCtrl.push('ChildEditPage', { child: child });
  }

  viewChild(child: any) {
    this.navCtrl.push('ChildViewPage', { child: child });
  }

  removeChild(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Registro de criança removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o registro do criança.', duration: 3000 }).present();
        });
    }
  }

}
