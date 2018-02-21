import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientOdontoViewPage } from './patient-odonto-view';

@NgModule({
  declarations: [
    PatientOdontoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientOdontoViewPage),
  ],
})
export class PatientOdontoViewPageModule {}
