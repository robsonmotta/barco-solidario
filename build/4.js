webpackJsonp([4],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOdontoViewPageModule", function() { return PatientOdontoViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_odonto_view__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientOdontoViewPageModule = (function () {
    function PatientOdontoViewPageModule() {
    }
    PatientOdontoViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_odonto_view__["a" /* PatientOdontoViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_odonto_view__["a" /* PatientOdontoViewPage */]),
            ],
        })
    ], PatientOdontoViewPageModule);
    return PatientOdontoViewPageModule;
}());

//# sourceMappingURL=patient-odonto-view.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOdontoViewPage; });
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


var PatientOdontoViewPage = (function () {
    function PatientOdontoViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patientOdonto = this.navParams.data.patientOdonto || {};
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
    PatientOdontoViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientOdontoViewPage');
    };
    PatientOdontoViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-odonto-view',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto-view/patient-odonto-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Atendimento: Odonto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    Data\n    <br>\n    {{ data }}\n    <br><br>\n\n    Responsável\n    <br>\n    {{ responsavel }}\n    <br><br>\n\n    Equipe\n    <br>\n    {{ equipe }}\n    <br><br>\n\n    Nome\n    <br>\n    {{ nome }}\n    <br><br>\n\n    Idade\n    <br>\n    {{ idade }}\n    <br><br>\n\n    Sexo\n    <br>\n    {{ genero }}\n    <br><br>\n\n    Cor\n    <br>\n    {{ cor }}\n    <br><br>\n\n    Profissão\n    <br>\n    {{ profissao }}\n    <br><br>\n\n    Natural de\n    <br>\n    {{ natural_de }}\n    <br><br>\n\n    Procedente de\n    <br>\n    {{ procedente_de }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    55\n    <br>\n    {{ situacao_55 }}\n    <br><br>\n\n    54\n    <br>\n    {{ situacao_54 }}\n    <br><br>\n\n    53\n    <br>\n    {{ situacao_53 }}\n    <br><br>\n\n    52\n    <br>\n    {{ situacao_52 }}\n    <br><br>\n\n    51\n    <br>\n    {{ situacao_51 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    61\n    <br>\n    {{ situacao_61 }}\n    <br><br>\n\n    62\n    <br>\n    {{ situacao_62 }}\n    <br><br>\n\n    63\n    <br>\n    {{ situacao_63 }}\n    <br><br>\n\n    64\n    <br>\n    {{ situacao_64 }}\n    <br><br>\n\n    65\n    <br>\n    {{ situacao_65 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    18\n    <br>\n    {{ situacao_18 }}\n    <br><br>\n\n    17\n    <br>\n    {{ situacao_17 }}\n    <br><br>\n\n    16\n    <br>\n    {{ situacao_16 }}\n    <br><br>\n\n    15\n    <br>\n    {{ situacao_15 }}\n    <br><br>\n\n    14\n    <br>\n    {{ situacao_14 }}\n    <br><br>\n\n    13\n    <br>\n    {{ situacao_13 }}\n    <br><br>\n\n    12\n    <br>\n    {{ situacao_12 }}\n    <br><br>\n\n    11\n    <br>\n    {{ situacao_11 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    21\n    <br>\n    {{ situacao_21 }}\n    <br><br>\n\n    22\n    <br>\n    {{ situacao_22 }}\n    <br><br>\n\n    23\n    <br>\n    {{ situacao_23 }}\n    <br><br>\n\n    24\n    <br>\n    {{ situacao_24 }}\n    <br><br>\n\n    25\n    <br>\n    {{ situacao_25 }}\n    <br><br>\n\n    26\n    <br>\n    {{ situacao_26 }}\n    <br><br>\n\n    27\n    <br>\n    {{ situacao_27 }}\n    <br><br>\n\n    28\n    <br>\n    {{ situacao_28 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    48\n    <br>\n    {{ situacao_48 }}\n    <br><br>\n\n    47\n    <br>\n    {{ situacao_47 }}\n    <br><br>\n\n    46\n    <br>\n    {{ situacao_46 }}\n    <br><br>\n\n    45\n    <br>\n    {{ situacao_45 }}\n    <br><br>\n\n    44\n    <br>\n    {{ situacao_44 }}\n    <br><br>\n\n    43\n    <br>\n    {{ situacao_43 }}\n    <br><br>\n\n    42\n    <br>\n    {{ situacao_42 }}\n    <br><br>\n\n    41\n    <br>\n    {{ situacao_41 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    31\n    <br>\n    {{ situacao_31 }}\n    <br><br>\n\n    32\n    <br>\n    {{ situacao_32 }}\n    <br><br>\n\n    33\n    <br>\n    {{ situacao_33 }}\n    <br><br>\n\n    34\n    <br>\n    {{ situacao_34 }}\n    <br><br>\n\n    35\n    <br>\n    {{ situacao_35 }}\n    <br><br>\n\n    36\n    <br>\n    {{ situacao_36 }}\n    <br><br>\n\n    37\n    <br>\n    {{ situacao_37 }}\n    <br><br>\n\n    38\n    <br>\n    {{ situacao_38 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    85\n    <br>\n    {{ situacao_85 }}\n    <br><br>\n\n    84\n    <br>\n    {{ situacao_84 }}\n    <br><br>\n\n    83\n    <br>\n    {{ situacao_83 }}\n    <br><br>\n\n    82\n    <br>\n    {{ situacao_82 }}\n    <br><br>\n\n    81\n    <br>\n    {{ situacao_81 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    71\n    <br>\n    {{ situacao_71 }}\n    <br><br>\n\n    72\n    <br>\n    {{ situacao_72 }}\n    <br><br>\n\n    73\n    <br>\n    {{ situacao_73 }}\n    <br><br>\n\n    74\n    <br>\n    {{ situacao_74 }}\n    <br><br>\n\n    75\n    <br>\n    {{ situacao_75 }}\n    <br><br>\n\n\n    <br><br><br><br>\n\n\n    Está em tratamento médico?\n    <br>\n    {{ tratamento_medico }}\n    <br><br>\n\n\n    Está tomando algum medicamento?\n    <br>\n    {{ tomando_medicamento }}\n    <br><br>\n\n\n    Já teve alguma doença? (hepatite, chagas, sífilis, febre reumática, câncer, HIV, etc.)\n    <br>\n    {{ teve_doenca }}\n    <br><br>\n\n\n    É diabético?\n    <br>\n    {{ diabetico }}\n    <br><br>\n\n\n    Sofre de alguma doença do coração?\n    <br>\n    {{ doenca_coracao }}\n    <br><br>\n\n\n    É hipertenso?\n    <br>\n    {{ hipertenso }}\n    <br><br>\n\n\n    É hemofílico?\n    <br>\n    {{ hemofilico }}\n    <br><br>\n\n\n    Pés incham com facilidade?\n    <br>\n    {{ pes_incham }}\n    <br><br>\n\n\n    Tem tosse persistente?\n    <br>\n    {{ tosse_persistente }}\n    <br><br>\n\n\n    Algum tipo de alergia?\n    <br>\n    {{ alergia }}\n    <br><br>\n\n\n    Quando se fere, demora para cicatrizar?\n    <br>\n    {{ demora_cicatrizar }}\n    <br><br>\n\n\n    Já foi submetido a anestesia para tratamento odontológico?\n    <br>\n    {{ anestesia_tratamento_odontologico }}\n    <br><br>\n\n\n    Já teve hemorragia?\n    <br>\n    {{ teve_hemorragia }}\n    <br><br>\n\n\n    Tem algum vício?\n    <br>\n    {{ tem_vicio }}\n    <br><br>\n\n\n    Está grávida?\n    <br>\n    {{ esta_gravida }}\n    <br><br>\n\n\n    Sofre de epilepsia?\n    <br>\n    {{ sofre_epilepsia }}\n    <br><br>\n\n    Tem algo a declarar a respeito de sua saúde que não foi perguntado neste questionário? Em caso afirmativo, qual?\n    <br>\n    {{ declaracao }}\n    <br><br>\n\n    <br><br>\n\n    Tratamento\n    <br>\n    {{ tratamento }}\n    <br><br>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto-view/patient-odonto-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PatientOdontoViewPage);
    return PatientOdontoViewPage;
}());

//# sourceMappingURL=patient-odonto-view.js.map

/***/ })

});
//# sourceMappingURL=4.js.map