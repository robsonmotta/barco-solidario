import { PatientOdontoProvider } from './../../providers/patient-odonto/patient-odonto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-patient-odonto-edit',
  templateUrl: 'patient-odonto-edit.html',
})
export class PatientOdontoEditPage {
  title: string;
  form: FormGroup;
  patientOdonto: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: PatientOdontoProvider,
    private toast: ToastController) {

    this.patientOdonto = this.navParams.data.patientOdonto || { };
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.patientOdonto ? 'Alterando atendimento' : 'Novo atendimento';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.patientOdonto.key],

      data: [this.patientOdonto.data, Validators.required],
      responsavel: [this.patientOdonto.responsavel, Validators.required],
      equipe: [this.patientOdonto.equipe, Validators.required],

      nome: [this.patientOdonto.nome, Validators.required],
      idade: [this.patientOdonto.idade],
      genero: [this.patientOdonto.genero],
      cor: [this.patientOdonto.cor],
      profissao: [this.patientOdonto.profissao],
      natural_de: [this.patientOdonto.natural_de],
      procedente_de: [this.patientOdonto.procedente_de],

      tratamento_medico: [this.patientOdonto.tratamento_medico],
      tomando_medicamento: [this.patientOdonto.tomando_medicamento],
      teve_doenca: [this.patientOdonto.teve_doenca],
      doenca_coracao: [this.patientOdonto.doenca_coracao],
      diabetico: [this.patientOdonto.diabetico],
      hipertenso: [this.patientOdonto.hipertenso],
      hemofilico: [this.patientOdonto.hemofilico],
      pes_incham: [this.patientOdonto.pes_incham],
      tosse_persistente: [this.patientOdonto.tosse_persistente],
      alergia: [this.patientOdonto.alergia],
      demora_cicatrizar: [this.patientOdonto.demora_cicatrizar],
      anestesia_tratamento_odontologico: [this.patientOdonto.anestesia_tratamento_odontologico],
      teve_hemorragia: [this.patientOdonto.teve_hemorragia],
      tem_vicio: [this.patientOdonto.tem_vicio],
      esta_gravida: [this.patientOdonto.esta_gravida],
      sofre_epilepsia: [this.patientOdonto.sofre_epilepsia],
      declaracao: [this.patientOdonto.declaracao],

      situacao_55: [this.patientOdonto.situacao_55],
      situacao_54: [this.patientOdonto.situacao_54],
      situacao_53: [this.patientOdonto.situacao_53],
      situacao_52: [this.patientOdonto.situacao_52],
      situacao_51: [this.patientOdonto.situacao_51],
      situacao_61: [this.patientOdonto.situacao_61],
      situacao_62: [this.patientOdonto.situacao_62],
      situacao_63: [this.patientOdonto.situacao_63],
      situacao_64: [this.patientOdonto.situacao_64],
      situacao_65: [this.patientOdonto.situacao_65],
      situacao_18: [this.patientOdonto.situacao_18],
      situacao_17: [this.patientOdonto.situacao_17],
      situacao_16: [this.patientOdonto.situacao_16],
      situacao_15: [this.patientOdonto.situacao_15],
      situacao_14: [this.patientOdonto.situacao_14],
      situacao_13: [this.patientOdonto.situacao_13],
      situacao_12: [this.patientOdonto.situacao_12],
      situacao_11: [this.patientOdonto.situacao_11],
      situacao_21: [this.patientOdonto.situacao_21],
      situacao_22: [this.patientOdonto.situacao_22],
      situacao_23: [this.patientOdonto.situacao_23],
      situacao_24: [this.patientOdonto.situacao_24],
      situacao_25: [this.patientOdonto.situacao_25],
      situacao_26: [this.patientOdonto.situacao_26],
      situacao_27: [this.patientOdonto.situacao_27],
      situacao_28: [this.patientOdonto.situacao_28],
      situacao_48: [this.patientOdonto.situacao_48],
      situacao_47: [this.patientOdonto.situacao_47],
      situacao_46: [this.patientOdonto.situacao_46],
      situacao_45: [this.patientOdonto.situacao_45],
      situacao_44: [this.patientOdonto.situacao_44],
      situacao_43: [this.patientOdonto.situacao_43],
      situacao_42: [this.patientOdonto.situacao_42],
      situacao_41: [this.patientOdonto.situacao_41],
      situacao_31: [this.patientOdonto.situacao_31],
      situacao_32: [this.patientOdonto.situacao_32],
      situacao_33: [this.patientOdonto.situacao_33],
      situacao_34: [this.patientOdonto.situacao_34],
      situacao_35: [this.patientOdonto.situacao_35],
      situacao_36: [this.patientOdonto.situacao_36],
      situacao_37: [this.patientOdonto.situacao_37],
      situacao_38: [this.patientOdonto.situacao_38],
      situacao_85: [this.patientOdonto.situacao_85],
      situacao_84: [this.patientOdonto.situacao_84],
      situacao_83: [this.patientOdonto.situacao_83],
      situacao_82: [this.patientOdonto.situacao_82],
      situacao_81: [this.patientOdonto.situacao_81],
      situacao_71: [this.patientOdonto.situacao_71],
      situacao_72: [this.patientOdonto.situacao_72],
      situacao_73: [this.patientOdonto.situacao_73],
      situacao_74: [this.patientOdonto.situacao_74],
      situacao_75: [this.patientOdonto.situacao_75],

      tratamento: [this.patientOdonto.tratamento],
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
