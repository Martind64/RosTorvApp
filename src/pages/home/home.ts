import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events-page/events-page';

import { CategoryPage } from '../category-page/category-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public eventsPage=EventsPage;
public categoriesPage=CategoryPage;


  constructor(public navCtrl: NavController) { }
  	eventPage(){
  		this.navCtrl.push(EventsPage);
  	}
  	categoryPage() {
  		this.navCtrl.push(CategoryPage);
  	}

  }