import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildPage } from './child';

@NgModule({
  declarations: [
    ChildPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildPage),
  ],
  exports: [
    ChildPage
  ],
})
export class ChildPageModule {}
