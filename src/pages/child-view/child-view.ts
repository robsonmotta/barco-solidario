import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-child-view',
  templateUrl: 'child-view.html',
})
export class ChildViewPage {
  title: string;
  child: any;
  data: string;
  responsavel: string;
  equipe: string;
  nome: string;
  idade: string;
  genero: string;
  natural_de: string;
  procedente_de: string;
  cor_preferida: string;
  escola: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
    this.child = this.navParams.data.child || { };
    this.data = this.child.data;
    this.responsavel = this.child.responsavel;
    this.equipe = this.child.equipe;
    this.nome = this.child.nome;
    this.idade = this.child.idade;
    this.genero = this.child.genero;
    this.natural_de = this.child.natural_de;
    this.procedente_de = this.child.procedente_de;
    this.cor_preferida = this.child.cor_preferida;
    this.escola = this.child.escola;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildViewPage');
  }

}
