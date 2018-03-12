import { Component } from '@angular/core';
import { Jogo } from './../../models/jogo';

@Component({
    selector: 'cadastro-page',
    templateUrl: 'cadastro.html'
    //styleUrls: ['cadastro.scss']
})
export class Cadastro {

    public jogo: Jogo;

    constructor() {
        
        this.jogo = new Jogo();

    }

}