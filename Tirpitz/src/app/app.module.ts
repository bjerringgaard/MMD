import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BoxetPage} from "../pages/boxet/boxet";
import {BoxtoPage} from "../pages/boxto/boxto";
import {BoxtrePage} from "../pages/boxtre/boxtre";
import {BoxfirePage} from "../pages/boxfire/boxfire";
import {ValgetPage} from "../pages/valget/valget";
import {ValgtoPage} from "../pages/valgto/valgto";
import {ValgtrePage} from "../pages/valgtre/valgtre";
import {ValgfirePage} from "../pages/valgfire/valgfire";
import {FinishedPage} from "../pages/finished/finished";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BoxetPage,
    ValgetPage,
    BoxtoPage,
    ValgtoPage,
    BoxtrePage,
    ValgtrePage,
    BoxfirePage,
    ValgfirePage,
    FinishedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BoxetPage,
    ValgetPage,
    BoxtoPage,
    ValgtoPage,
    BoxtrePage,
    ValgtrePage,
    BoxfirePage,
    ValgfirePage,
    FinishedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
