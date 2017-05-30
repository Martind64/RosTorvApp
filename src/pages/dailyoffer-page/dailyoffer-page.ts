import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the DailyofferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dailyoffer-page',
  templateUrl: 'dailyoffer-page.html',
})
export class DailyofferPage {

	public dailyOffer;
	public selectedStore;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.getStore();
  		let storeId = this.navParams.get('storeId');
  		console.log(storeId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyofferPage');
  }

// getDailyOffer(){
//   	this.http.get('http://rostorv.mhdelfs.com/api/v1/store')
//   	.subscribe(data => this.dailyOffer = data.json());
//   	}

	// Get the store 
  	getStore(){
  		let storeId = this.navParams.get('storeId');
  		this.http.get('http://rostorv.mhdelfs.com/api/v1/store/' + storeId)
	  	.subscribe(data => this.selectedStore = data.json());
  		console.log("id:" + storeId);
  	}

    getDailyOffer(){
      
    }

  	log(){
  		console.log(this.dailyOffer);
  		console.log(this.selectedStore);
  	}



}
