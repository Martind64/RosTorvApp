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
      this.addMarker();
    
  }

  loadMap(){
  	this.geoLocation.getCurrentPosition().then((position) => {

	    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	     
	    let mapOptions = {
	      center: latLng,
        disableDefaultUI: true,
	      zoom: 18,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,

    }
    	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  	}, (err)=> {
  		console.log(err);
  	});
  }

    addInfoWindow(marker){
 
      let infoWindow = new google.maps.InfoWindow({
      });
     
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
     
    }

      addMarker(){
         this.geoLocation.getCurrentPosition().then((position) => {
            let marker = new google.maps.Marker({
              clickable: false,
              icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                        new google.maps.Size(22,22),
                                                        new google.maps.Point(0,18),
                                                        new google.maps.Point(11,11)),
              shadow: null,
              zIndex: 999,
              map: this.map,
              position: {lat: position.coords.latitude, lng: position.coords.longitude}
            });     
           
        this.addInfoWindow(marker);
         });
    }  

    //   addMarker(){
    //      this.geoLocation.getCurrentPosition().then((position) => {
    //     let marker = new google.maps.Marker({
    //       map: this.map,
    //       animation: google.maps.Animation.DROP,
    //       position: {lat: position.coords.latitude, lng: position.coords.longitude}
    //     });     
    //     let content = "<h4>Information!</h4>";          
       
    //     this.addInfoWindow(marker, content);
    //      });
    // }

}
