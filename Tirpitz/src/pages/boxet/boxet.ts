import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValgetPage} from "../valget/valget";

/**
 * Generated class for the BoxetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boxet',
  templateUrl: 'boxet.html',
})
export class BoxetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoxetPage');
  }

  goToValget() {
    this.navCtrl.setRoot(ValgetPage);
  }

}
