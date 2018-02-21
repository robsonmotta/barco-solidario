import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-patient-view',
  templateUrl: 'patient-view.html',
})
export class PatientViewPage {
  title: string;
  patient: any;
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
  queixa: string;
  isda: string;
  pessoal_verminose: string;
  pessoal_dm: string;
  pessoal_has: string;
  pessoal_cancer: string;
  pessoal_tb: string;
  pessoal_avc: string;
  pessoal_alcool: string;
  pessoal_cigarro: string;
  pessoal_drogas: string;
  pessoal_alergias: string;
  pessoal_outros: string;
  pessoal_cirurgias_previas: string;
  familiar_verminose: string;
  familiar_dm: string;
  familiar_has: string;
  familiar_cancer: string;
  familiar_tb: string;
  familiar_avc: string;
  familiar_alergias: string;
  familiar_outros: string;
  exame_fisico_geral_beg: string;
  exame_fisico_geral_reg: string;
  exame_fisico_geral_meg: string;
  exame_fisico_geral_corado: string;
  exame_fisico_geral_descorado: string;
  exame_fisico_geral_descorado_qtd: string;
  exame_fisico_geral_hidratado: string;
  exame_fisico_geral_desidratado: string;
  exame_fisico_geral_desidratado_qtd: string;
  exame_fisico_geral_eupneico: string;
  exame_fisico_geral_dispneico: string;
  exame_fisico_geral_taquipneico: string;
  exame_fisico_geral_acianotico: string;
  exame_fisico_geral_cianose_periferica: string;
  exame_fisico_geral_cianose_central: string;
  exame_fisico_geral_anicterico: string;
  exame_fisico_geral_icterico: string;
  exame_fisico_geral_icterico_grau: string;
  exame_fisico_geral_afebril: string;
  exame_fisico_geral_febril: string;
  exame_fisico_geral_febril_qtd: string;
  exame_fisico_especifico_neuro: string;
  exame_fisico_especifico_ac: string;
  exame_fisico_especifico_fc: string;
  exame_fisico_especifico_pa: string;
  exame_fisico_especifico_ap: string;
  exame_fisico_especifico_fr: string;
  exame_fisico_especifico_abdomen: string;
  exame_fisico_especifico_genitourinario: string;
  exame_fisico_especifico_pele: string;
  conduta: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
    this.patient = this.navParams.data.patient || { };
    this.data = this.patient.data;
    this.responsavel = this.patient.responsavel;
    this.equipe = this.patient.equipe;
    this.nome = this.patient.nome;
    this.idade = this.patient.idade;
    this.genero = this.patient.genero;
    this.cor = this.patient.cor;
    this.profissao = this.patient.profissao;
    this.natural_de = this.patient.natural_de;
    this.procedente_de = this.patient.procedente_de;
    this.queixa = this.patient.queixa;
    this.isda = this.patient.isda;
    this.pessoal_verminose = this.patient.pessoal_verminose;
    this.pessoal_dm = this.patient.pessoal_dm;
    this.pessoal_has = this.patient.pessoal_has;
    this.pessoal_cancer = this.patient.pessoal_cancer;
    this.pessoal_tb = this.patient.pessoal_tb;
    this.pessoal_avc = this.patient.pessoal_avc;
    this.pessoal_alcool = this.patient.pessoal_alcool;
    this.pessoal_cigarro = this.patient.pessoal_cigarro;
    this.pessoal_drogas = this.patient.pessoal_drogas;
    this.pessoal_alergias = this.patient.pessoal_alergias;
    this.pessoal_outros = this.patient.pessoal_outros;
    this.pessoal_cirurgias_previas = this.patient.pessoal_cirurgias_previas;
    this.familiar_verminose = this.patient.familiar_verminose;
    this.familiar_dm = this.patient.familiar_dm;
    this.familiar_has = this.patient.familiar_has;
    this.familiar_cancer = this.patient.familiar_cancer;
    this.familiar_tb = this.patient.familiar_tb;
    this.familiar_avc = this.patient.familiar_avc;
    this.familiar_alergias = this.patient.familiar_alergias;
    this.familiar_outros = this.patient.familiar_outros;
    this.exame_fisico_geral_beg = this.patient.exame_fisico_geral_beg;
    this.exame_fisico_geral_reg = this.patient.exame_fisico_geral_reg;
    this.exame_fisico_geral_meg = this.patient.exame_fisico_geral_meg;
    this.exame_fisico_geral_corado = this.patient.exame_fisico_geral_corado;
    this.exame_fisico_geral_descorado = this.patient.exame_fisico_geral_descorado;
    this.exame_fisico_geral_descorado_qtd = this.patient.exame_fisico_geral_descorado_qtd;
    this.exame_fisico_geral_hidratado = this.patient.exame_fisico_geral_hidratado;
    this.exame_fisico_geral_desidratado = this.patient.exame_fisico_geral_desidratado;
    this.exame_fisico_geral_desidratado_qtd = this.patient.exame_fisico_geral_desidratado_qtd;
    this.exame_fisico_geral_eupneico = this.patient.exame_fisico_geral_eupneico;
    this.exame_fisico_geral_dispneico = this.patient.exame_fisico_geral_dispneico;
    this.exame_fisico_geral_taquipneico = this.patient.exame_fisico_geral_taquipneico;
    this.exame_fisico_geral_acianotico = this.patient.exame_fisico_geral_acianotico;
    this.exame_fisico_geral_cianose_periferica = this.patient.exame_fisico_geral_cianose_periferica;
    this.exame_fisico_geral_cianose_central = this.patient.exame_fisico_geral_cianose_central;
    this.exame_fisico_geral_anicterico = this.patient.exame_fisico_geral_anicterico;
    this.exame_fisico_geral_icterico = this.patient.exame_fisico_geral_icterico;
    this.exame_fisico_geral_icterico_grau = this.patient.exame_fisico_geral_icterico_grau;
    this.exame_fisico_geral_afebril = this.patient.exame_fisico_geral_afebril;
    this.exame_fisico_geral_febril = this.patient.exame_fisico_geral_febril;
    this.exame_fisico_geral_febril_qtd = this.patient.exame_fisico_geral_febril_qtd;
    this.exame_fisico_especifico_neuro = this.patient.exame_fisico_especifico_neuro;
    this.exame_fisico_especifico_ac = this.patient.exame_fisico_especifico_ac;
    this.exame_fisico_especifico_fc = this.patient.exame_fisico_especifico_fc;
    this.exame_fisico_especifico_pa = this.patient.exame_fisico_especifico_pa;
    this.exame_fisico_especifico_ap = this.patient.exame_fisico_especifico_ap;
    this.exame_fisico_especifico_fr = this.patient.exame_fisico_especifico_fr;
    this.exame_fisico_especifico_abdomen = this.patient.exame_fisico_especifico_abdomen;
    this.exame_fisico_especifico_genitourinario = this.patient.exame_fisico_especifico_genitourinario;
    this.exame_fisico_especifico_pele = this.patient.exame_fisico_especifico_pele;
    this.conduta = this.patient.conduta;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientViewPage');
  }

}
