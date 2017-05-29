import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopsPage } from '../shops-page/shops-page';


/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-page',
  templateUrl: 'category-page.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
 	shopsPage(category:string){
 		this.navCtrl.push(ShopsPage, {name:category});
 	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
