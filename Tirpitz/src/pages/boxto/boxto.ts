import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValgetPage} from "../valget/valget";
import {ValgtoPage} from "../valgto/valgto";

/**
 * Generated class for the BoxtoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boxto',
  templateUrl: 'boxto.html',
})
export class BoxtoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoxtoPage');
  }

  goToValgto() {
    this.navCtrl.setRoot(ValgtoPage);
  }

}
