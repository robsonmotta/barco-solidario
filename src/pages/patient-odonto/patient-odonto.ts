import { PatientOdontoProvider } from './../../providers/patient-odonto/patient-odonto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

/**
 * Generated class for the PatientOdontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-odonto',
  templateUrl: 'patient-odonto.html',
})
export class PatientOdontoPage {
  patientsOdonto: Observable<any>;

  constructor(private toast: ToastController, private provider: PatientOdontoProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.patientsOdonto = this.provider.getAll();
  }

  newPatientOdonto() {
    this.navCtrl.push('PatientOdontoEditPage');
  }

  editPatientOdonto(patientOdonto: any) {
    // Maneira 1
    this.navCtrl.push('PatientOdontoEditPage', { patientOdonto: patientOdonto });
      // Maneira 2
    // this.navCtrl.push('PatientOdontoEditPage', { key: patientOdonto.key });
  }

  removePatientOdonto(key: string) {
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
