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
      responsible: [this.patient.responsible, Validators.required],
      responsible_team: [this.patient.responsible_team],
      date: [this.patient.date, Validators.required],

      name: [this.patient.name, Validators.required],
      age: [this.patient.age],
      gender: [this.patient.gender],
      skin_color: [this.patient.skin_color],
      occupation: [this.patient.occupation],
      born_at: [this.patient.born_at],
      came_from: [this.patient.came_from],

      complaint: [this.patient.complaint],
      isda: [this.patient.isda],

      personal_worm_infestation: [this.patient.personal_worm_infestation],
      personal_dm: [this.patient.personal_dm],
      personal_sah: [this.patient.personal_sah],
      personal_cancer: [this.patient.personal_cancer],
      personal_tuberculosis: [this.patient.personal_tuberculosis],
      personal_stroke: [this.patient.personal_stroke],
      personal_alcohol: [this.patient.personal_alcohol],
      personal_cigarette: [this.patient.personal_cigar],
      personal_drug: [this.patient.personal_drug],
      personal_allergy: [this.patient.personal_allergy],
      personal_other: [this.patient.personal_other],
      personal_previous_surgery: [this.patient.personal_previous_surgery],

      family_worm_infestation: [this.patient.family_worm_infestation],
      family_dm: [this.patient.family_dm],
      family_sah: [this.patient.family_sah],
      family_cancer: [this.patient.family_cancer],
      family_tuberculosis: [this.patient.family_tuberculosis],
      family_stroke: [this.patient.family_stroke],
      family_allergy: [this.patient.family_allergy],
      family_other: [this.patient.family_other],

      exam_general_beg: [this.patient.exam_general_beg],
      exam_general_reg: [this.patient.exam_general_reg],
      exam_general_meg: [this.patient.exam_general_meg],
      exam_general_corado: [this.patient.exam_general_corado],
      exam_general_descorado: [this.patient.exam_general_descorado],
      exam_general_descorado_qtd: [this.patient.exam_general_descorado_qtd],
      exam_general_hidratado: [this.patient.exam_general_hidratado],
      exam_general_hidratado_qtd: [this.patient.exam_general_hidratado_qtd],
      exam_general_eupneico: [this.patient.exam_general_eupneico],
      exam_general_dispneico: [this.patient.exam_general_dispneico],
      exam_general_taquipneico: [this.patient.exam_general_taquipneico],
      exam_general_acianotico: [this.patient.exam_general_acianotico],
      exam_general_cianose_periferica: [this.patient.exam_general_cianose_periferica],
      exam_general_cianose_central: [this.patient.exam_general_cianose_central],
      exam_general_anicterico: [this.patient.exam_general_anicterico],
      exam_general_icterico: [this.patient.exam_general_icterico],
      exam_general_icterico_grau: [this.patient.exam_general_icterico_grau],
      exam_general_afebril: [this.patient.exam_general_afebril],
      exam_general_febril: [this.patient.exam_general_febril],
      exam_general_febril_qtd: [this.patient.exam_general_febril_qtd],

      exam_specific_neuro: [this.patient.exam_specific_neuro],
      exam_specific_ac: [this.patient.exam_specific_ac],
      exam_specific_fc: [this.patient.exam_specific_fc],
      exam_specific_pa: [this.patient.exam_specific_pa],
      exam_specific_ap: [this.patient.exam_specific_ap],
      exam_specific_fr: [this.patient.exam_specific_fr],
      exam_specific_abdomen: [this.patient.exam_specific_abdomen],
      exam_specific_genitourinario: [this.patient.exam_specific_genitourinario],
      exam_specific_pele: [this.patient.exam_specific_pele],

      conduta: [this.patient.conduta],

    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Atendimento salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o atendimento.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
