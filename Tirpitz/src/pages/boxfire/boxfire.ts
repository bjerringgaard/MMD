import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValgtrePage} from "../valgtre/valgtre";
import {ValgfirePage} from "../valgfire/valgfire";

/**
 * Generated class for the BoxfirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boxfire',
  templateUrl: 'boxfire.html',
})
export class BoxfirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoxfirePage');
  }

  goToValgfire() {
    this.navCtrl.setRoot(ValgfirePage);
  }

}
