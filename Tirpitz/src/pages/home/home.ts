import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BoxetPage} from "../boxet/boxet";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToBoxet() {
    this.navCtrl.setRoot(BoxetPage);
  }

}
