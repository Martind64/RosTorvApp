import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

	// Used to send positions of each button
	public clues = [];

	public completedClues = [];
	public currentLevel:any;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
	// let alert = this.alertCtrl.create({

 //      subTitle: this.currentLevel,
 //      buttons: ['OK']
 //    });
 //    alert.present();	
 	// this.clues = JSON.parse(sessionStorage.getItem('clue'));

    this.currentLevel = JSON.parse(sessionStorage.getItem('level'));
  	this.fillClues();
  }

  startGame(){

  }

  goToMap(lat, lng){
  	this.navCtrl.push(MapsPage, {lat: lat, lng: lng});
    // console.log(this.currentLevel.lvl);
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
