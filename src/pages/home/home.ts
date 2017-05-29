import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events-page/events-page';
import { StorePage } from '../store-page/store-page';
import { CategoryPage } from '../category-page/category-page';
import { TreasurehuntPage } from '../treasurehunt-page/treasurehunt-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public eventsPage = EventsPage;
public categoriesPage = CategoryPage;
public storePage = StorePage;
public treasurehuntPage = TreasurehuntPage;


  constructor(public navCtrl: NavController) { }
  	eventPage(){
  		this.navCtrl.push(EventsPage);
  	}
  	categoryPage() {
  		this.navCtrl.push(CategoryPage);
  	}

  }