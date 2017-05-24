import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps-page/maps-page';

/**
 * Generated class for the TreasurehuntPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-treasurehunt-page',
  templateUrl: 'treasurehunt-page.html',
})
export class TreasurehuntPage {

	public sentence = [];
	public clues = [];
	public completedClues = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fillClues();
  }

  startGame(){

  }

  goToMap(lat, lng){
  	this.navCtrl.push(MapsPage, {lat: lat, lng: lng});
  }

  fillClues(){
  	this.clues = [
		['55.642038', '12.098627'],
		['55.642111', '12.100001'],
		['55.641839', '12.100559'],
		['55.641378', '12.099014']
  	];
  }





}
