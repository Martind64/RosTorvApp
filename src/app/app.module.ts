import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShopsPage } from '../pages/shops-page/shops-page';
import { CategoryPage } from '../pages/category-page/category-page';
import { MapsPage } from '../pages/maps-page/maps-page';
import { Geolocation } from '@ionic-native/geolocation';
import { EventsPage} from '../pages/events-page/events-page';
import { EventInfoPage } from '../pages/event-info-page/event-info-page';
import { TreasurehuntPage } from '../pages/treasurehunt-page/treasurehunt-page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorePage } from '../pages/store-page/store-page';
import { Formatstore } from '../pipes/formatstore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShopsPage,
    CategoryPage,
    MapsPage,
    EventsPage,
    EventInfoPage,
    TreasurehuntPage,
    StorePage,
    Formatstore,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShopsPage,
    CategoryPage,
    MapsPage,
    EventsPage,
    EventInfoPage,
    TreasurehuntPage,
    StorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
