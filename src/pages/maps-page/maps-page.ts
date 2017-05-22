import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-maps-page',
  templateUrl: 'maps-page.html',
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoLocation:Geolocation) {
  }

  ionViewDidLoad() {
  	this.loadMap();
  }

  loadMap(){
  	this.geoLocation.getCurrentPosition().then((position) => {

	    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	 
	    let mapOptions = {
	      center: latLng,
	      zoom: 18,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  	}, (err)=> {
  		console.log(err);
  	});
 
  }

}
