import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { ShopsPage } from '../pages/shops-page/shops-page';
import { CategoryPage } from '../pages/category-page/category-page';
import { MapsPage } from '../pages/maps-page/maps-page';
import { Geolocation } from '@ionic-native/geolocation';
=======
import { EventsPage} from '../pages/events-page/events-page';
import { EventInfoPage } from '../pages/event-info-page/event-info-page';
>>>>>>> origin/Design

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ShopsPage,
    CategoryPage,
    MapsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
=======
    EventsPage,
    EventInfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
>>>>>>> origin/Design
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ShopsPage,
    CategoryPage,
    MapsPage,
=======
    EventsPage,
    EventInfoPage
>>>>>>> origin/Design
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
