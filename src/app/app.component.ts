import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoryPage } from '../pages/category-page/category-page';
import { ShopsPage } from '../pages/shops-page/shops-page';
import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps-page/maps-page';
import { EventsPage } from '../pages/events-page/events-page';
import { TreasurehuntPage } from '../pages/treasurehunt-page/treasurehunt-page';
import { StorePage } from '../pages/store-page/store-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StorePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  getStores(){
    
  }
}

