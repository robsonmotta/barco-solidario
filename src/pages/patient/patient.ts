// import { ContactProvider } from './../../providers/contact/contact';
import { PatientProvider } from './../../providers/patient/patient';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  patients: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private provider: PatientProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.patients = this.provider.getAll();
  }

  newPatient() {
    this.navCtrl.push('PatientEditPage');
  }

  editPatient(patient: any) {
    // Maneira 1
    this.navCtrl.push('PatientEditPage', { patient: patient });
      // Maneira 2
    // this.navCtrl.push('PatientEditPage', { key: patient.key });
  }

  removePatient(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Registro de paciente removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o registro do paciente.', duration: 3000 }).present();
        });
    }
  }

}
