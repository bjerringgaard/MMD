import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BoxtoPage} from "../boxto/boxto";
import {HomePage} from "../home/home";

/**
 * Generated class for the ValgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valget',
  templateUrl: 'valget.html',
})
export class ValgetPage {

  hideme_1: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hide_1() {
    this.hideme_1 = !this.hideme_1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValgetPage');
  }

  goToBoxto() {
    this.navCtrl.setRoot(BoxtoPage);
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
