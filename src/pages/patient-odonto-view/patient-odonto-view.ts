import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-patient-odonto-view',
  templateUrl: 'patient-odonto-view.html',
})
export class PatientOdontoViewPage {
  title: string;
  patientOdonto: any;
  data: string;
  responsavel: string;
  equipe: string;
  nome: string;
  idade: string;
  genero: string;
  cor: string;
  profissao: string;
  natural_de: string;
  procedente_de: string;
  situacao_55: string;
  situacao_54: string;
  situacao_53: string;
  situacao_52: string;
  situacao_51: string;
  situacao_61: string;
  situacao_62: string;
  situacao_63: string;
  situacao_64: string;
  situacao_65: string;
  situacao_18: string;
  situacao_17: string;
  situacao_16: string;
  situacao_15: string;
  situacao_14: string;
  situacao_13: string;
  situacao_12: string;
  situacao_11: string;
  situacao_21: string;
  situacao_22: string;
  situacao_23: string;
  situacao_24: string;
  situacao_25: string;
  situacao_26: string;
  situacao_27: string;
  situacao_28: string;
  situacao_48: string;
  situacao_47: string;
  situacao_46: string;
  situacao_45: string;
  situacao_44: string;
  situacao_43: string;
  situacao_42: string;
  situacao_41: string;
  situacao_31: string;
  situacao_32: string;
  situacao_33: string;
  situacao_34: string;
  situacao_35: string;
  situacao_36: string;
  situacao_37: string;
  situacao_38: string;
  situacao_85: string;
  situacao_84: string;
  situacao_83: string;
  situacao_82: string;
  situacao_81: string;
  situacao_71: string;
  situacao_72: string;
  situacao_73: string;
  situacao_74: string;
  situacao_75: string;
  tratamento_medico: string;
  tomando_medicamento: string;
  teve_doenca: string;
  diabetico: string;
  doenca_coracao: string;
  hipertenso: string;
  hemofilico: string;
  pes_incham: string;
  tosse_persistente: string;
  alergia: string;
  demora_cicatrizar: string;
  anestesia_tratamento_odontologico: string;
  teve_hemorragia: string;
  tem_vicio: string;
  esta_gravida: string;
  sofre_epilepsia: string;
  declaracao: string;
  tratamento: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
    this.patientOdonto = this.navParams.data.patientOdonto || { };
    this.data = this.patientOdonto.data;
    this.responsavel = this.patientOdonto.responsavel;
    this.equipe = this.patientOdonto.equipe;
    this.nome = this.patientOdonto.nome;
    this.idade = this.patientOdonto.idade;
    this.genero = this.patientOdonto.genero;
    this.cor = this.patientOdonto.cor;
    this.profissao = this.patientOdonto.profissao;
    this.natural_de = this.patientOdonto.natural_de;
    this.procedente_de = this.patientOdonto.procedente_de;
    this.situacao_55 = this.patientOdonto.situacao_55;
    this.situacao_54 = this.patientOdonto.situacao_54;
    this.situacao_53 = this.patientOdonto.situacao_53;
    this.situacao_52 = this.patientOdonto.situacao_52;
    this.situacao_51 = this.patientOdonto.situacao_51;
    this.situacao_61 = this.patientOdonto.situacao_61;
    this.situacao_62 = this.patientOdonto.situacao_62;
    this.situacao_63 = this.patientOdonto.situacao_63;
    this.situacao_64 = this.patientOdonto.situacao_64;
    this.situacao_65 = this.patientOdonto.situacao_65;
    this.situacao_18 = this.patientOdonto.situacao_18;
    this.situacao_17 = this.patientOdonto.situacao_17;
    this.situacao_16 = this.patientOdonto.situacao_16;
    this.situacao_15 = this.patientOdonto.situacao_15;
    this.situacao_14 = this.patientOdonto.situacao_14;
    this.situacao_13 = this.patientOdonto.situacao_13;
    this.situacao_12 = this.patientOdonto.situacao_12;
    this.situacao_11 = this.patientOdonto.situacao_11;
    this.situacao_21 = this.patientOdonto.situacao_21;
    this.situacao_22 = this.patientOdonto.situacao_22;
    this.situacao_23 = this.patientOdonto.situacao_23;
    this.situacao_24 = this.patientOdonto.situacao_24;
    this.situacao_25 = this.patientOdonto.situacao_25;
    this.situacao_26 = this.patientOdonto.situacao_26;
    this.situacao_27 = this.patientOdonto.situacao_27;
    this.situacao_28 = this.patientOdonto.situacao_28;
    this.situacao_48 = this.patientOdonto.situacao_48;
    this.situacao_47 = this.patientOdonto.situacao_47;
    this.situacao_46 = this.patientOdonto.situacao_46;
    this.situacao_45 = this.patientOdonto.situacao_45;
    this.situacao_44 = this.patientOdonto.situacao_44;
    this.situacao_43 = this.patientOdonto.situacao_43;
    this.situacao_42 = this.patientOdonto.situacao_42;
    this.situacao_41 = this.patientOdonto.situacao_41;
    this.situacao_31 = this.patientOdonto.situacao_31;
    this.situacao_32 = this.patientOdonto.situacao_32;
    this.situacao_33 = this.patientOdonto.situacao_33;
    this.situacao_34 = this.patientOdonto.situacao_34;
    this.situacao_35 = this.patientOdonto.situacao_35;
    this.situacao_36 = this.patientOdonto.situacao_36;
    this.situacao_37 = this.patientOdonto.situacao_37;
    this.situacao_38 = this.patientOdonto.situacao_38;
    this.situacao_85 = this.patientOdonto.situacao_85;
    this.situacao_84 = this.patientOdonto.situacao_84;
    this.situacao_83 = this.patientOdonto.situacao_83;
    this.situacao_82 = this.patientOdonto.situacao_82;
    this.situacao_81 = this.patientOdonto.situacao_81;
    this.situacao_71 = this.patientOdonto.situacao_71;
    this.situacao_72 = this.patientOdonto.situacao_72;
    this.situacao_73 = this.patientOdonto.situacao_73;
    this.situacao_74 = this.patientOdonto.situacao_74;
    this.situacao_75 = this.patientOdonto.situacao_75;
    this.tratamento_medico = this.patientOdonto.tratamento_medico;
    this.tomando_medicamento = this.patientOdonto.tomando_medicamento;
    this.teve_doenca = this.patientOdonto.teve_doenca;
    this.diabetico = this.patientOdonto.diabetico;
    this.doenca_coracao = this.patientOdonto.doenca_coracao;
    this.hipertenso = this.patientOdonto.hipertenso;
    this.hemofilico = this.patientOdonto.hemofilico;
    this.pes_incham = this.patientOdonto.pes_incham;
    this.tosse_persistente = this.patientOdonto.tosse_persistente;
    this.alergia = this.patientOdonto.alergia;
    this.demora_cicatrizar = this.patientOdonto.demora_cicatrizar;
    this.anestesia_tratamento_odontologico = this.patientOdonto.anestesia_tratamento_odontologico;
    this.teve_hemorragia = this.patientOdonto.teve_hemorragia;
    this.tem_vicio = this.patientOdonto.tem_vicio;
    this.esta_gravida = this.patientOdonto.esta_gravida;
    this.sofre_epilepsia = this.patientOdonto.sofre_epilepsia;
    this.declaracao = this.patientOdonto.declaracao;
    this.tratamento = this.patientOdonto.tratamento;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientOdontoViewPage');
  }

}
