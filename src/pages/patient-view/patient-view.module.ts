import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientViewPage } from './patient-view';

@NgModule({
  declarations: [
    PatientViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientViewPage),
  ],
})
export class PatientViewPageModule {}
