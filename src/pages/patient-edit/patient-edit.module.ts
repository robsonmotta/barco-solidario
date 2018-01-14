import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientEditPage } from './patient-edit';

@NgModule({
  declarations: [
    PatientEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientEditPage),
  ],
})
export class PatientEditPageModule {}
