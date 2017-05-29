import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Store } from '../../models/Store';
import { CategoryPage } from '../category-page/category-page';
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

  public stores = [];
  public category:string;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.setStores(this.navParams.get('name'));
    console.log('category')
  }

    public setStores(store:string){

          switch (store) {
            case "elektronik":
              this.stores = ['Fona', 'GameStop', 'MobileTec', 'Telia']
              this.category = "Elektronik";
              break;
             case "Mad":
             this.stores = ['Burger King', 'Sunset', 'Joe and the Juice', 'Flammen', 'Baresso', 'Café Vivaldi', 'Nachos', 'Ristorante La Rustica', 'The Spot Cafe', 'Zhiki Sushi']
             this.category = "Mad";
             break;
             case "Sport":
             this.stores = ['Fitness DK', 'SportsMaster', 'Sport 24']
             this.category = "sport";
             break;
             case "Dagligdagsvare":
             this.stores = ['Føtex', 'Frellsen', 'Tiger', 'Roskilde Vin']
             this.category = "DaligdagsVare";
             break;
             case "BoligLivstil":
             this.stores = ['Bolia', 'Imerco', 'Søsterne Grene', 'Flying Tiger Copenhagen', 'Le Creuset']
             this.category = "Bolig Livstil";
             break;
             case "Tøj":
             this.stores = ['H&M', 'Kings And Queens', 'Tøjexperten', 'Luciano Grosso', 'Mr. Møllebach', 'No8', 'Sams', 'Samsøe Samsøe', 'Suitmeup', 'Superdry', 'Trendstar']
             this.category ="Herre Tøj";
             break;
             case "Damemode":
             this.stores = ['Bonde Boutique', 'By Mo', 'Companys', 'Copenhagen Luxe', 'Deres', 'Esprit', 'H&M', 'Hunkemôller', 'Kings & Queens', 'Message', 'Only', 'Pieces', 'Samsøe & Samsøe', 'Schack & Thorsten', 'Solo', 'Superdry', 'Trendstar', 'Triumph', 'Vila']
             this.category = "Dame Mode";
             break;
             case "SkønhedSundhed":
             this.stores = ['Apoteket RO’s Torv', 'Beauty by Boozt.com', 'Matas', 'Nice Thai Massage', 'Normal', 'Queens Nails', 'Salon Unique']
             this.category = "Skønhed & Sunhed";
             break;
             default:
              console.log("Shit happend!")
              break;
          }
    }

}
