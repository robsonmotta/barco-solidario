import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientOdontoPage } from './patient-odonto';

@NgModule({
  declarations: [
    PatientOdontoPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientOdontoPage),
  ],
  exports: [
    PatientOdontoPage
  ],
})
export class PatientOdontoPageModule {}
