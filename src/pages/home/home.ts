import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events-page/events-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public eventsPage=EventsPage;


  constructor(public navCtrl: NavController) { }
  	eventPage(){
  		this.navCtrl.push(EventsPage);
  	}

  }


