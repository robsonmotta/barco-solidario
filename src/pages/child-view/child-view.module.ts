import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildViewPage } from './child-view';

@NgModule({
  declarations: [
    ChildViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildViewPage),
  ],
})
export class ChildViewPageModule {}
