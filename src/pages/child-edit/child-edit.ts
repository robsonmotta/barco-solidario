import { ChildProvider } from './../../providers/child/child';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-child-edit',
  templateUrl: 'child-edit.html',
})
export class ChildEditPage {
  title: string;
  form: FormGroup;
  child: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ChildProvider,
    private toast: ToastController) {

    this.child = this.navParams.data.child || { };
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.child ? 'Alterando atendimento' : 'Novo atendimento';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.child.key],
      responsavel: [this.child.responsavel, Validators.required],
      equipe: [this.child.equipe, Validators.required],
      data: [this.child.data, Validators.required],

      nome: [this.child.nome, Validators.required],
      idade: [this.child.idade],
      genero: [this.child.genero],
      natural_de: [this.child.natural_de],
      procedente_de: [this.child.procedente_de],
      escola: [this.child.escola],
      cor_preferida: [this.child.cor_preferida],

    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.navCtrl.pop();
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Cadastro de criança salvo com sucesso.', duration: 3000 }).present();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o cadastro de criança.', duration: 3000 }).present();
          console.log(e);
        })
    }
  }
}
