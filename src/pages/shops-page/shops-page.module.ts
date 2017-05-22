import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopsPage } from './shops-page';

@NgModule({
  declarations: [
    ShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopsPage),
  ],
  exports: [
    ShopsPage
  ]
})
export class ShopsPageModule {}
