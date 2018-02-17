import { PatientProvider } from './../../providers/patient/patient';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-patient-edit',
  templateUrl: 'patient-edit.html',
})
export class PatientEditPage {
  title: string;
  form: FormGroup;
  patient: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: PatientProvider,
    private toast: ToastController) {

    // maneira 1
    this.patient = this.navParams.data.patient || { };
    this.createForm();

    // // maneira 2
    // this.patient = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();

    //     this.patient = c;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.patient ? 'Alterando atendimento' : 'Novo atendimento';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.patient.key],
      responsavel: [this.patient.responsavel, Validators.required],
      equipe: [this.patient.equipe, Validators.required],
      data: [this.patient.data, Validators.required],

      nome: [this.patient.nome, Validators.required],
      idade: [this.patient.idade],
      genero: [this.patient.genero],
      cor: [this.patient.cor],
      profissao: [this.patient.profissao],
      natural_de: [this.patient.natural_de],
      procedente_de: [this.patient.procedente_de],

      queixa: [this.patient.queixa],
      isda: [this.patient.isda],

      pessoal_verminose: [this.patient.pessoal_verminose],
      pessoal_dm: [this.patient.pessoal_dm],
      pessoal_has: [this.patient.pessoal_has],
      pessoal_cancer: [this.patient.pessoal_cancer],
      pessoal_tb: [this.patient.pessoal_tb],
      pessoal_avc: [this.patient.pessoal_avc],
      pessoal_alcool: [this.patient.pessoal_alcool],
      pessoal_cigarro: [this.patient.pessoal_cigarro],
      pessoal_drogas: [this.patient.pessoal_drogas],
      pessoal_alergias: [this.patient.pessoal_alergias],
      pessoal_outros: [this.patient.pessoal_outros],
      pessoal_cirurgias_previas: [this.patient.pessoal_cirurgias_previas],

      familiar_verminose: [this.patient.familiar_verminose],
      familiar_dm: [this.patient.familiar_dm],
      familiar_has: [this.patient.familiar_has],
      familiar_cancer: [this.patient.familiar_cancer],
      familiar_tb: [this.patient.familiar_tb],
      familiar_avc: [this.patient.familiar_avc],
      familiar_alergias: [this.patient.familiar_alergias],
      familiar_outros: [this.patient.familiar_outros],

      exame_fisico_geral_beg: [this.patient.exame_fisico_geral_beg],
      exame_fisico_geral_reg: [this.patient.exame_fisico_geral_reg],
      exame_fisico_geral_meg: [this.patient.exame_fisico_geral_meg],
      exame_fisico_geral_corado: [this.patient.exame_fisico_geral_corado],
      exame_fisico_geral_descorado: [this.patient.exame_fisico_geral_descorado],
      exame_fisico_geral_descorado_qtd: [this.patient.exame_fisico_geral_descorado_qtd],
      exame_fisico_geral_hidratado: [this.patient.exame_fisico_geral_hidratado],
      exame_fisico_geral_desidratado: [this.patient.exame_fisico_geral_desidratado],
      exame_fisico_geral_desidratado_qtd: [this.patient.exame_fisico_geral_desidratado_qtd],
      exame_fisico_geral_eupneico: [this.patient.exame_fisico_geral_eupneico],
      exame_fisico_geral_dispneico: [this.patient.exame_fisico_geral_dispneico],
      exame_fisico_geral_taquipneico: [this.patient.exame_fisico_geral_taquipneico],
      exame_fisico_geral_acianotico: [this.patient.exame_fisico_geral_acianotico],
      exame_fisico_geral_cianose_periferica: [this.patient.exame_fisico_geral_cianose_periferica],
      exame_fisico_geral_cianose_central: [this.patient.exame_fisico_geral_cianose_central],
      exame_fisico_geral_anicterico: [this.patient.exame_fisico_geral_anicterico],
      exame_fisico_geral_icterico: [this.patient.exame_fisico_geral_icterico],
      exame_fisico_geral_icterico_grau: [this.patient.exame_fisico_geral_icterico_grau],
      exame_fisico_geral_afebril: [this.patient.exame_fisico_geral_afebril],
      exame_fisico_geral_febril: [this.patient.exame_fisico_geral_febril],
      exame_fisico_geral_febril_qtd: [this.patient.exame_fisico_geral_febril_qtd],

      exame_fisico_especifico_neuro: [this.patient.exame_fisico_especifico_neuro],
      exame_fisico_especifico_ac: [this.patient.exame_fisico_especifico_ac],
      exame_fisico_especifico_fc: [this.patient.exame_fisico_especifico_fc],
      exame_fisico_especifico_pa: [this.patient.exame_fisico_especifico_pa],
      exame_fisico_especifico_ap: [this.patient.exame_fisico_especifico_ap],
      exame_fisico_especifico_fr: [this.patient.exame_fisico_especifico_fr],
      exame_fisico_especifico_abdomen: [this.patient.exame_fisico_especifico_abdomen],
      exame_fisico_especifico_genitourinario: [this.patient.exame_fisico_especifico_genitourinario],
      exame_fisico_especifico_pele: [this.patient.exame_fisico_especifico_pele],

      conduta: [this.patient.conduta],

    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.navCtrl.pop();
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Atendimento salvo com sucesso.', duration: 3000 }).present();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o atendimento.', duration: 3000 }).present();
          console.log(e);
        })
    }
  }
}
