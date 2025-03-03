import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValgetPage} from "../valget/valget";
import {ValgtrePage} from "../valgtre/valgtre";

/**
 * Generated class for the BoxtrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boxtre',
  templateUrl: 'boxtre.html',
})
export class BoxtrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoxtrePage');
  }

  goToValgtre() {
    this.navCtrl.setRoot(ValgtrePage);
  }

}
