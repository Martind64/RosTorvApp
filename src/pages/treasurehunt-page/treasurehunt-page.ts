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

	public completedClues:any;
	public currentLevel:any;
  public clue:any;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.setLevel();
    this.getClues();
    this.fillClues();

    // let clue = this.navParams.get('clue');

    // let alert = this.alertCtrl.create({

    //     subTitle: this.currentLevel.lvl,
    //     buttons: ['OK']
    //   });
    //   alert.present();  

    //  this.completedClues = JSON.parse(sessionStorage.getItem('clues'));
    // if (this.completedClues === null) {
    //   this.completedClues = {clue1: null, clue2: null, clue3: null, clue4: null};
    // }

  	// let alert = this.alertCtrl.create({

   //      subTitle: this.completedClues.clue1 + this.completedClues.clue2 + this.completedClues.clue3 + this.completedClues.clue4,
   //      buttons: ['OK']
   //    });
   //    alert.present();	
   	// this.clues = JSON.parse(sessionStorage.getItem('clue'));

  }



  startGame(){

  }

  goToMap(lat, lng){
  	this.navCtrl.push(MapsPage, {lat: lat, lng: lng});
  }

  // Make an array with the coordinates for the clues
  fillClues(){
  	this.clues = [
		['55.642038', '12.098627'],
		['55.642111', '12.100001'],
		['55.641839', '12.100559'],
		['55.641378', '12.099014']
  	];
  }


  getClues(){

      this.clue = this.navParams.get('clue');

      // If no clue has been send, end the method
      if (!this.clue) {
        return;
      }

      // Set completed clues to the clues object in session storage
      this.completedClues = JSON.parse(sessionStorage.getItem('clues'));

      // If the clues object in session is empty set completedClues to be an object;
      if (!this.completedClues) {
          this.completedClues = {};
      }

        if (this.completedClues.clue1 == null) {
          this.completedClues.clue1 = this.clue;
        }else if(this.completedClues.clue2 == null){
          this.completedClues.clue2 = this.clue;
        }else if(this.completedClues.clue3 == null){
          this.completedClues.clue3 = this.clue;
        }else if(this.completedClues.clue4 == null){
          this.completedClues.clue4 = this.clue;
        }
        sessionStorage.setItem('clues', JSON.stringify(this.completedClues));
  }


    // Set the level of the game
  setLevel(){

    // Set the current lvl property to the level of the storage so it can be incremented
    this.currentLevel = JSON.parse(sessionStorage.getItem('level'));

    if (!this.currentLevel) {
      this.currentLevel = {lvl: null};
    }

    // set the session storage to hold the current lvl of the game
    if (this.currentLevel.lvl === null) {
      sessionStorage.setItem('level', JSON.stringify({lvl: '1'}));
    }else if(this.currentLevel.lvl === '1'){
      sessionStorage.setItem('level', JSON.stringify({lvl: '2'}));
    }else if(this.currentLevel.lvl === '2'){
      sessionStorage.setItem('level', JSON.stringify({lvl: '3'}));
    }else if(this.currentLevel.lvl === '3'){
      sessionStorage.setItem('level', JSON.stringify({lvl: '4'}));
    }else if (this.currentLevel.lvl === '4') {
       sessionStorage.setItem('level', JSON.stringify({lvl: 'complete'}));
    }

    // Set the current lvl of the game
    this.currentLevel = JSON.parse(sessionStorage.getItem('level'));

  }

}
