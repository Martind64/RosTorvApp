import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Store } from '../../models/Store';

/**
 * Generated class for the ShopsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shops-page',
  templateUrl: 'shops-page.html',
})
export class ShopsPage {

  public stores:Array<Store> = new Array<Store>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
      this.getStores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopsPage');
  }

    public getStores(){
	    this.http.get("http://localhost:8000/api/v1/store")
	    .subscribe(stores => this.stores = stores.json());
  }
}
