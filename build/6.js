webpackJsonp([6],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientEditPageModule", function() { return PatientEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_edit__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientEditPageModule = (function () {
    function PatientEditPageModule() {
    }
    PatientEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_edit__["a" /* PatientEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_edit__["a" /* PatientEditPage */]),
            ],
        })
    ], PatientEditPageModule);
    return PatientEditPageModule;
}());

//# sourceMappingURL=patient-edit.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_patient_patient__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientEditPage = (function () {
    function PatientEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.patient = this.navParams.data.patient || {};
        this.createForm();
        this.setupPageTitle();
    }
    PatientEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.patient ? 'Alterando atendimento' : 'Novo atendimento';
    };
    PatientEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.patient.key],
            responsavel: [this.patient.responsavel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            equipe: [this.patient.equipe, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            data: [this.patient.data, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nome: [this.patient.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
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
    };
    PatientEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.navCtrl.pop();
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Atendimento salvo com sucesso.', duration: 3000 }).present();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o atendimento.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    PatientEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-patient-edit',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-edit/patient-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}: Médico</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Data*</ion-label>\n      <ion-input type="date" formControlName="data"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.data.valid && (form.controls.data.dirty || form.controls.data.touched)" color="danger">\n      <div [hidden]="!form.controls.data.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Responsável*</ion-label>\n      <ion-input type="text" formControlName="responsavel"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.responsavel.valid && (form.controls.responsavel.dirty || form.controls.responsavel.touched)" color="danger">\n      <div [hidden]="!form.controls.responsavel.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Equipe*</ion-label>\n      <ion-input type="text" formControlName="equipe"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.equipe.valid && (form.controls.equipe.dirty || form.controls.equipe.touched)" color="danger">\n      <div [hidden]="!form.controls.equipe.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <br><br>\n    <ion-title>Identificação</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input type="text" formControlName="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Idade</ion-label>\n      <ion-input type="text" formControlName="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Sexo</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="genero">\n      <ion-item>\n        <ion-label>Feminino</ion-label>\n        <ion-radio value="feminino"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Masculino</ion-label>\n        <ion-radio value="masculino"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Cor</ion-label>\n      <ion-input type="text" formControlName="cor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Profissão</ion-label>\n      <ion-input type="text" formControlName="profissao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Natural de</ion-label>\n      <ion-input type="text" formControlName="natural_de"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Procedente de</ion-label>\n      <ion-input type="text" formControlName="procedente_de"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>Queixa e duração</ion-title>\n    <ion-item>\n      <ion-input type="text" formControlName="queixa"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>ISDA geral e específico</ion-title>\n    <ion-item>\n      <ion-input type="text" formControlName="isda"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>Antecedentes</ion-title>\n\n    <br><br><br><br>\n    <ion-title>1. Pessoal</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Verminose</ion-label>\n      <ion-checkbox formControlName="pessoal_verminose"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>DM</ion-label>\n      <ion-checkbox formControlName="pessoal_dm"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>HAS</ion-label>\n      <ion-checkbox formControlName="pessoal_has"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Câncer</ion-label>\n      <ion-checkbox formControlName="pessoal_cancer"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>TB</ion-label>\n      <ion-checkbox formControlName="pessoal_tb"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>AVC</ion-label>\n      <ion-checkbox formControlName="pessoal_avc"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Álcool</ion-label>\n      <ion-checkbox formControlName="pessoal_alcool"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cigarro</ion-label>\n      <ion-checkbox formControlName="pessoal_cigarro"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Drogas</ion-label>\n      <ion-checkbox formControlName="pessoal_drogas"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Alergias</ion-label>\n      <ion-input type="text" formControlName="pessoal_alergias"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Outros</ion-label>\n      <ion-input type="text" formControlName="pessoal_outros"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cirurgias prévias</ion-label>\n      <ion-input type="text" formControlName="pessoal_cirurgias_previas"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>2. Familiar</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Verminose</ion-label>\n      <ion-checkbox formControlName="familiar_verminose"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>DM</ion-label>\n      <ion-checkbox formControlName="familiar_dm"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>HAS</ion-label>\n      <ion-checkbox formControlName="familiar_has"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Câncer</ion-label>\n      <ion-checkbox formControlName="familiar_cancer"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>TB</ion-label>\n      <ion-checkbox formControlName="familiar_tb"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>AVC</ion-label>\n      <ion-checkbox formControlName="familiar_avc"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Alergias</ion-label>\n      <ion-input type="text" formControlName="familiar_alergias"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Outros</ion-label>\n      <ion-input type="text" formControlName="familiar_outros"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>Exame físico</ion-title>\n\n    <br><br><br><br>\n    <ion-title>Geral</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>BEG</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_beg"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>REG</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_reg"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>MEG</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_meg"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Corado</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_corado"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descorado</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_descorado"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descorado informação (/+4)</ion-label>\n      <ion-input formControlName="exame_fisico_geral_descorado_qtd"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Hidratado</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_hidratado"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Desidratado</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_desidratado"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Desidratado informação (/+4)</ion-label>\n      <ion-input formControlName="exame_fisico_geral_desidratado_qtd"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Eupneico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_eupneico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Dispneico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_dispneico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Taquipneico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_taquipneico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Acianótico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_acianotico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cianose periférica</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_cianose_periferica"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cianose central</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_cianose_central"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Anictérico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_anicterico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Ictérico</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_icterico"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Ictérico informação</ion-label>\n      <ion-input formControlName="exame_fisico_geral_icterico_grau"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Afebril</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_afebril"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Febril</ion-label>\n      <ion-checkbox formControlName="exame_fisico_geral_febril"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Febril informação</ion-label>\n      <ion-input formControlName="exame_fisico_geral_febril_qtd"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>Específico</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Neuro</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_neuro"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>AC</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_ac"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>FC (bpm)</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_fc"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>PA ( _ x _ mmHg)</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_pa"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>AP</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_ap"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>FR (bpm)</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_fr"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Abdômen</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_abdomen"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Genitourinário</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_genitourinario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Pele</ion-label>\n      <ion-input type="text" formControlName="exame_fisico_especifico_pele"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n    <ion-title>Conduta</ion-title>\n    <ion-item>\n      <ion-input type="text" formControlName="conduta"></ion-input>\n    </ion-item>\n\n    <br><br>\n\n\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-edit/patient-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_patient_patient__["a" /* PatientProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], PatientEditPage);
    return PatientEditPage;
}());

//# sourceMappingURL=patient-edit.js.map

/***/ })

});
//# sourceMappingURL=6.js.map