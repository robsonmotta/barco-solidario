webpackJsonp([2],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientViewPageModule", function() { return PatientViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_view__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientViewPageModule = (function () {
    function PatientViewPageModule() {
    }
    PatientViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_view__["a" /* PatientViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_view__["a" /* PatientViewPage */]),
            ],
        })
    ], PatientViewPageModule);
    return PatientViewPageModule;
}());

//# sourceMappingURL=patient-view.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientViewPage = (function () {
    function PatientViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patient = this.navParams.data.patient || {};
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
    PatientViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientViewPage');
    };
    PatientViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-view',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-view/patient-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Atendimento: Médico</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    Data:\n    <br>\n    {{ data }}\n    <br><br>\n\n    Responsável:\n    <br>\n    {{ responsavel }}\n    <br><br>\n\n    Equipe:\n    <br>\n    {{ equipe }}\n    <br><br>\n\n    Nome:\n    <br>\n    {{ nome }}\n    <br><br>\n\n    Idade:\n    <br>\n    {{ idade }}\n    <br><br>\n\n    Gênero:\n    <br>\n    {{ genero }}\n    <br><br>\n\n    Cor:\n    <br>\n    {{ cor }}\n    <br><br>\n\n    Profissão:\n    <br>\n    {{ profissao }}\n    <br><br>\n\n    Natural de:\n    <br>\n    {{ natural_de }}\n    <br><br>\n\n    Procedente de:\n    <br>\n    {{ procedente_de }}\n    <br><br>\n\n    <br><br>\n\n    Queixa e duração\n    <br>\n    {{ queixa }}\n    <br><br>\n\n    <br><br>\n\n    ISDA geral e específico:\n    <br>\n    {{ isda }}\n    <br><br>\n\n    <br><br>\n    Antecedentes\n    <br><br>\n\n    <br><br>\n    1. Pessoal\n    <br><br>\n\n    Verminose:\n    <br>\n    {{ pessoal_verminose }}\n    <br><br>\n\n    DM:\n    <br>\n    {{ pessoal_dm }}\n    <br><br>\n\n    HAS:\n    <br>\n    {{ pessoal_has }}\n    <br><br>\n\n    Câncer:\n    <br>\n    {{ pessoal_cancer }}\n    <br><br>\n\n    TB:\n    <br>\n    {{ pessoal_tb }}\n    <br><br>\n\n    AVC:\n    <br>\n    {{ pessoal_avc }}\n    <br><br>\n\n    Álcool:\n    <br>\n    {{ pessoal_alcool }}\n    <br><br>\n\n    Cigarro:\n    <br>\n    {{ pessoal_cigarro }}\n    <br><br>\n\n    Drogas:\n    <br>\n    {{ pessoal_drogas }}\n    <br><br>\n\n    Alergias:\n    <br>\n    {{ pessoal_alergias }}\n    <br><br>\n\n    Outros:\n    <br>\n    {{ pessoal_outros }}\n    <br><br>\n\n    Cirurgias prévias:\n    <br>\n    {{ pessoal_cirurgias_previas }}\n    <br><br>\n\n    <br><br>\n    2. Familiar\n    <br><br>\n\n    Verminose:\n    <br>\n    {{ familiar_verminose }}\n    <br><br>\n\n    DM:\n    <br>\n    {{ familiar_dm }}\n    <br><br>\n\n    HAS:\n    <br>\n    {{ familiar_has }}\n    <br><br>\n\n    Câncer:\n    <br>\n    {{ familiar_cancer }}\n    <br><br>\n\n    TB:\n    <br>\n    {{ familiar_tb }}\n    <br><br>\n\n    AVC:\n    <br>\n    {{ familiar_avc }}\n    <br><br>\n\n    Alergias:\n    <br>\n    {{ familiar_alergias }}\n    <br><br>\n\n    Outros:\n    <br>\n    {{ familiar_outros }}\n    <br><br>\n\n    <br><br>\n    Exame físico\n    <br><br>\n\n    <br><br>\n    Geral\n    <br><br>\n\n    BEG:\n    <br>\n    {{ exame_fisico_geral_beg }}\n    <br><br>\n\n    REG:\n    <br>\n    {{ exame_fisico_geral_reg }}\n    <br><br>\n\n    MEG:\n    <br>\n    {{ exame_fisico_geral_meg }}\n    <br><br>\n\n    Corado:\n    <br>\n    {{ exame_fisico_geral_corado }}\n    <br><br>\n\n    Descorado:\n    <br>\n    {{ exame_fisico_geral_descorado }}\n    <br><br>\n\n    Descorado informação (/+4):\n    <br>\n    {{ exame_fisico_geral_descorado_qtd }}\n    <br><br>\n\n    Hidratado:\n    <br>\n    {{ exame_fisico_geral_hidratado }}\n    <br><br>\n\n    Desidratado:\n    <br>\n    {{ exame_fisico_geral_desidratado }}\n    <br><br>\n\n    Desidratado informação (/+4):\n    <br>\n    {{ exame_fisico_geral_desidratado_qtd }}\n    <br><br>\n\n    Eupneico:\n    <br>\n    {{ exame_fisico_geral_eupneico }}\n    <br><br>\n\n    Dispneico:\n    <br>\n    {{ exame_fisico_geral_dispneico }}\n    <br><br>\n\n    Taquipneico:\n    <br>\n    {{ exame_fisico_geral_taquipneico }}\n    <br><br>\n\n    Acianótico:\n    <br>\n    {{ exame_fisico_geral_acianotico }}\n    <br><br>\n\n    Cianose periférica:\n    <br>\n    {{ exame_fisico_geral_cianose_periferica }}\n    <br><br>\n\n    Cianose central:\n    <br>\n    {{ exame_fisico_geral_cianose_central }}\n    <br><br>\n\n    Anictérico:\n    <br>\n    {{ exame_fisico_geral_anicterico }}\n    <br><br>\n\n    Ictérico:\n    <br>\n    {{ exame_fisico_geral_icterico }}\n    <br><br>\n\n    Ictérico informação\n    <br>\n    {{ exame_fisico_geral_icterico_grau }}\n    <br><br>\n\n    Afebril:\n    <br>\n    {{ exame_fisico_geral_afebril }}\n    <br><br>\n\n    Febril:\n    <br>\n    {{ exame_fisico_geral_febril }}\n    <br><br>\n\n    Febril informação\n    <br>\n    {{ exame_fisico_geral_febril_qtd }}\n    <br><br>\n\n    <br><br>\n    Específico\n    <br><br>\n\n    Neuro:\n    <br>\n    {{ exame_fisico_especifico_neuro }}\n    <br><br>\n\n    AC:\n    <br>\n    {{ exame_fisico_especifico_ac }}\n    <br><br>\n\n    FC (bpm):\n    <br>\n    {{ exame_fisico_especifico_fc }}\n    <br><br>\n\n    PA (_ x _ mmHg):\n    <br>\n    {{ exame_fisico_especifico_pa }}\n    <br><br>\n\n    AP:\n    <br>\n    {{ exame_fisico_especifico_ap }}\n    <br><br>\n\n    FR (bpm):\n    <br>\n    {{ exame_fisico_especifico_fr }}\n    <br><br>\n\n    Abdômen:\n    <br>\n    {{ exame_fisico_especifico_abdomen }}\n    <br><br>\n\n    Genitourinário:\n    <br>\n    {{ exame_fisico_especifico_genitourinario }}\n    <br><br>\n\n    Pele:\n    <br>\n    {{ exame_fisico_especifico_pele }}\n    <br><br>\n\n    <br><br>\n\n    Conduta:\n    <br>\n    {{ conduta }}\n    <br><br>\n\n    <br><br>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-view/patient-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PatientViewPage);
    return PatientViewPage;
}());

//# sourceMappingURL=patient-view.js.map

/***/ })

});
//# sourceMappingURL=2.js.map