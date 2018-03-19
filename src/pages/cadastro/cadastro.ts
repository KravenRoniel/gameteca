import { Component } from '@angular/core';
import { Jogo } from './../../models/jogo';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'cadastro-page',
    templateUrl: 'cadastro.html'
    //styleUrls: ['cadastro.scss']
})
export class Cadastro {

    public jogo: Jogo;
    public onCallback: any;
    public edicao = false;

    constructor(public navParams: NavParams,
                public navCtrl: NavController) {
        
        this.onCallback = this.navParams.get('callback');
        this.jogo = this.navParams.get('jogo');

        // verifica se veio o parametro jogo,
        // se veio, é porque, é uma alteração
        if (this.jogo == null){
            this.jogo = new Jogo();
        }else{
            this.edicao = true;
        }
    }

    salvar(jogoSalvar: Jogo){
        console.log(jogoSalvar);

        this.onCallback(jogoSalvar);
        this.navCtrl.pop()
    }
}