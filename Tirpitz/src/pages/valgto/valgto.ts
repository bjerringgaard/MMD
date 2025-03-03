import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BoxtoPage} from "../boxto/boxto";
import {BoxtrePage} from "../boxtre/boxtre";
import {HomePage} from "../home/home";

/**
 * Generated class for the ValgtoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valgto',
  templateUrl: 'valgto.html',
})
export class ValgtoPage {

  hideme_1: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hide_1() {
    this.hideme_1 = !this.hideme_1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValgtoPage');
  }

  goToBoxtre() {
    this.navCtrl.setRoot(BoxtrePage);
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
