import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BoxtoPage} from "../boxto/boxto";
import {BoxfirePage} from "../boxfire/boxfire";
import {HomePage} from "../home/home";

/**
 * Generated class for the ValgtrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valgtre',
  templateUrl: 'valgtre.html',
})
export class ValgtrePage {

  hideme_1: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hide_1() {
    this.hideme_1 = !this.hideme_1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValgtrePage');
  }

  goToBoxfire() {
    this.navCtrl.setRoot(BoxfirePage);
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
