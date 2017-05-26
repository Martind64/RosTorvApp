import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Event } from '../../models/Event';
import { EventInfoPage } from '../event-info-page/event-info-page';
/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events-page',
  templateUrl: 'events-page.html',
})
export class EventsPage {


	  public eventsinfoPage=EventInfoPage;

	  public events:Array<Event> = new Array<Event>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	 this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

    public getEvents(){
	    this.http.get("http://rostorv.mhdelfs.com/api/v1/event")
	    .subscribe(events => this.events = events.json());
	    // console.log(this.events);
  }
  	public selectedEvent:Event;



  	eventinfoPage(event:Event)
  	{
  		this.navCtrl.push(EventInfoPage, event);
  	}
}
