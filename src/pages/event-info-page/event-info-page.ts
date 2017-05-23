import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Event } from '../../models/Event';
/**
 * Generated class for the EventInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-info-page',
  templateUrl: 'event-info-page.html',
})
export class EventInfoPage {

  public id = this.navParams.get('id');
  public name = this.navParams.get('name');
  public description = this.navParams.get('description');
  public start_date = this.navParams.get('start_date');
  public end_date = this.navParams.get('end_date');
  public imgPath = this.navParams.get('img_path');

  public event = new Event(this.id, this.name, this.description, this.start_date, this.end_date, this.imgPath);

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	console.log(this.imgPath);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }


}
