import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyofferPage } from './dailyoffer-page';

@NgModule({
  declarations: [
    DailyofferPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyofferPage),
  ],
  exports: [
    DailyofferPage
  ]
})
export class DailyofferPageModule {}
