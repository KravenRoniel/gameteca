import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Cadastro } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  abrirCadastro() {
    this.navCtrl.push(Cadastro)
  }

}
