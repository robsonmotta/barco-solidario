import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientOdontoEditPage } from './patient-odonto-edit';

@NgModule({
  declarations: [
    PatientOdontoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientOdontoEditPage),
  ],
})
export class PatientOdontoEditPageModule {}
