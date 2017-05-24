import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreasurehuntPage } from './treasurehunt-page';

@NgModule({
  declarations: [
    TreasurehuntPage,
  ],
  imports: [
    IonicPageModule.forChild(TreasurehuntPage),
  ],
  exports: [
    TreasurehuntPage
  ]
})
export class TreasurehuntPageModule {}
