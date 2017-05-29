import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DailyofferPage } from '../dailyoffer-page/dailyoffer-page';

/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-store-page',
  templateUrl: 'store-page.html',
})
export class StorePage {

	public stores = [];
	public finalStores = [];

 	searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.getStores();
  }


  	// Set finalStores array
  	// Used to set the values of the search without having to make constant API calls
	initializestores() {
	    this.finalStores = this.stores;
	 }

	 // Get the stores from the API
  getStores(){
  	if (this.finalStores[0] == null) {
	  	this.http.get('http://rostorv.mhdelfs.com/api/v1/store')
	  	.subscribe(data => this.finalStores = data.json());
  	}

  	this.http.get('http://rostorv.mhdelfs.com/api/v1/store')
  	.subscribe(data => this.stores = data.json());
  	}

    searchStores(ev: any) {
	// Loop over the array to remove the underscore from the names
	// Should have been set in the getStores method, but asynchronius http request calls prevents it from working
	let i = 0;
  	for(let store of this.stores){
  		this.stores[i].name = this.stores[i].name.replace(/[_]/g, ' ');
  		i++;
  	}

    // Reset items back to all of the items
    this.initializestores();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.finalStores = this.finalStores.filter((store) => {
        return (store.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  dailyOffer(storeId:number){
    this.navCtrl.push(DailyofferPage, {storeId: storeId});
  }

}
