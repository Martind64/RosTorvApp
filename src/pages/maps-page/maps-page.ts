import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TreasurehuntPage } from '../treasurehunt-page/treasurehunt-page';
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

  @ViewChild('map') 
  mapElement: ElementRef;
  map: any;
  public clues:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoLocation:Geolocation, private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController) {
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
    }

    	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  	}, (err)=> {
  		console.log(err);
  	});

  }

    addInfoWindow(marker, content?){
      let infoWindow;

      // If content haven't been passed, don't put it in the infowindow
        if (content) {
          infoWindow = new google.maps.InfoWindow({
          content: content
        });
        }else{
            infoWindow = new google.maps.InfoWindow({
        });
        }

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
     
    }

      // Add Marker to the map with your current position
      // async is to delay the function so the dot with always show
      async addMarker(){
        await this.delay(1000);
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

    // Used to reload map and set location again
    newMap(){
      // this.loadMap();
      // this.addMarker();
      this.setClueMarker();
    }

    // Delays a function a given number of MS
    delay(ms: number) {
      return new Promise<void>(function(resolve) {
          setTimeout(resolve, ms);
    });
  }

  setClueMarker(){
    // google.maps.event.addListenerOnce('bounds_changed', () => {});
    let lat = this.navParams.get('lat');
    let lng = this.navParams.get('lng');
    let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: {lat: lat, lng: lng}
            });     
            let content = "<h4>Find mig!</h4>";          
       
          this.addInfoWindow(marker, content);
  }

  scanBarcode(){

    this.barcodeScanner.scan().then((data) => {

      let dataArray = data.text.split(',');

      // Get the current level to determine whether or not the right clue was passed
      let currentLevel = JSON.parse(sessionStorage.getItem('level'));

      // If the clue lvl doesn't fit current level, throw an alert
      if (currentLevel.lvl !== dataArray[0]) {
            let alert = this.alertCtrl.create({
            title: 'Hovsa',
            subTitle: 'Det sport var vist ikke det du ledte efter',
            buttons: ['OK']
      });
            return alert.present();
      }

      this.navCtrl.setRoot(TreasurehuntPage, {clueNumber: dataArray[0], clue: dataArray[1]});
  });
  }


}
