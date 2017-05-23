import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInfoPage } from './event-info-page';

@NgModule({
  declarations: [
    EventInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventInfoPage),
  ],
  exports: [
    EventInfoPage
  ]
})
export class EventInfoPageModule {}
