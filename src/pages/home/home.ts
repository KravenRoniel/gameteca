import { Cadastro } from './../cadastro/cadastro';
import { Jogo } from './../../models/jogo';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaJogos: Array<Jogo> = [];
  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {
  }

  abrirCadastro(item: Jogo) {
    // Variável "me" criada para referenciar a classe home
    // dentro da função callback
    let me = this;
    // função callback, criada para ser executada no
    // método de salvar da classe Cadastro
    let onCallBack = (jogo: Jogo) => {
      let existe = false;
      for (let i=0; i < this.listaJogos.length; i++){
        if (this.listaJogos[i].codigo == jogo.codigo){
          this.listaJogos[i] = jogo;
          existe = true;
        }
      }
      if (!existe) me.listaJogos.push(jogo);
    }
    // Ao chamar a tela de Cadastro, é passada
    // a função callback por parâmetro
    this.navCtrl.push(Cadastro, {jogo: item, callback: onCallBack})
  }

  apagarItem(posicao: number){
    this.listaJogos.splice(posicao, 1);
  }

}