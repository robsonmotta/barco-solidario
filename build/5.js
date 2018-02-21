webpackJsonp([5],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOdontoEditPageModule", function() { return PatientOdontoEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_odonto_edit__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientOdontoEditPageModule = (function () {
    function PatientOdontoEditPageModule() {
    }
    PatientOdontoEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_odonto_edit__["a" /* PatientOdontoEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_odonto_edit__["a" /* PatientOdontoEditPage */]),
            ],
        })
    ], PatientOdontoEditPageModule);
    return PatientOdontoEditPageModule;
}());

//# sourceMappingURL=patient-odonto-edit.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOdontoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_patient_odonto_patient_odonto__ = __webpack_require__(341);
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




var PatientOdontoEditPage = (function () {
    function PatientOdontoEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.patientOdonto = this.navParams.data.patientOdonto || {};
        this.createForm();
        this.setupPageTitle();
    }
    PatientOdontoEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.patientOdonto ? 'Alterando atendimento' : 'Novo atendimento';
    };
    PatientOdontoEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.patientOdonto.key],
            data: [this.patientOdonto.data, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            responsavel: [this.patientOdonto.responsavel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            equipe: [this.patientOdonto.equipe, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nome: [this.patientOdonto.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
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
    };
    PatientOdontoEditPage.prototype.onSubmit = function () {
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
    PatientOdontoEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-patient-odonto-edit',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto-edit/patient-odonto-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}: Odonto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Data*</ion-label>\n      <ion-input type="date" formControlName="data"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.data.valid && (form.controls.data.dirty || form.controls.data.touched)" color="danger">\n      <div [hidden]="!form.controls.data.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Responsável*</ion-label>\n      <ion-input type="text" formControlName="responsavel"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.responsavel.valid && (form.controls.responsavel.dirty || form.controls.responsavel.touched)" color="danger">\n      <div [hidden]="!form.controls.responsavel.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Equipe*</ion-label>\n      <ion-input type="text" formControlName="equipe"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.equipe.valid && (form.controls.equipe.dirty || form.controls.equipe.touched)" color="danger">\n      <div [hidden]="!form.controls.equipe.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <br><br>\n    <ion-title>Identificação</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input type="text" formControlName="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Idade</ion-label>\n      <ion-input type="text" formControlName="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Sexo</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="genero">\n      <ion-item>\n        <ion-label>Feminino</ion-label>\n        <ion-radio value="feminino"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Masculino</ion-label>\n        <ion-radio value="masculino"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Cor</ion-label>\n      <ion-input type="text" formControlName="cor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Profissão</ion-label>\n      <ion-input type="text" formControlName="profissao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Natural de</ion-label>\n      <ion-input type="text" formControlName="natural_de"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Procedente de</ion-label>\n      <ion-input type="text" formControlName="procedente_de"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>55</ion-label>\n      <ion-input type="text" formControlName="situacao_55"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>54</ion-label>\n      <ion-input type="text" formControlName="situacao_54"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>53</ion-label>\n      <ion-input type="text" formControlName="situacao_53"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>52</ion-label>\n      <ion-input type="text" formControlName="situacao_52"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>51</ion-label>\n      <ion-input type="text" formControlName="situacao_51"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>61</ion-label>\n      <ion-input type="text" formControlName="situacao_61"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>62</ion-label>\n      <ion-input type="text" formControlName="situacao_62"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>63</ion-label>\n      <ion-input type="text" formControlName="situacao_63"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>64</ion-label>\n      <ion-input type="text" formControlName="situacao_64"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>65</ion-label>\n      <ion-input type="text" formControlName="situacao_65"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>18</ion-label>\n      <ion-input type="text" formControlName="situacao_18"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>17</ion-label>\n      <ion-input type="text" formControlName="situacao_17"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>16</ion-label>\n      <ion-input type="text" formControlName="situacao_16"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>15</ion-label>\n      <ion-input type="text" formControlName="situacao_15"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>14</ion-label>\n      <ion-input type="text" formControlName="situacao_14"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>13</ion-label>\n      <ion-input type="text" formControlName="situacao_13"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>12</ion-label>\n      <ion-input type="text" formControlName="situacao_12"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>11</ion-label>\n      <ion-input type="text" formControlName="situacao_11"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>21</ion-label>\n      <ion-input type="text" formControlName="situacao_21"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>22</ion-label>\n      <ion-input type="text" formControlName="situacao_22"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>23</ion-label>\n      <ion-input type="text" formControlName="situacao_23"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>24</ion-label>\n      <ion-input type="text" formControlName="situacao_24"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>25</ion-label>\n      <ion-input type="text" formControlName="situacao_25"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>26</ion-label>\n      <ion-input type="text" formControlName="situacao_26"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>27</ion-label>\n      <ion-input type="text" formControlName="situacao_27"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>28</ion-label>\n      <ion-input type="text" formControlName="situacao_28"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>48</ion-label>\n      <ion-input type="text" formControlName="situacao_48"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>47</ion-label>\n      <ion-input type="text" formControlName="situacao_47"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>46</ion-label>\n      <ion-input type="text" formControlName="situacao_46"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>45</ion-label>\n      <ion-input type="text" formControlName="situacao_45"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>44</ion-label>\n      <ion-input type="text" formControlName="situacao_44"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>43</ion-label>\n      <ion-input type="text" formControlName="situacao_43"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>42</ion-label>\n      <ion-input type="text" formControlName="situacao_42"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>41</ion-label>\n      <ion-input type="text" formControlName="situacao_41"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>31</ion-label>\n      <ion-input type="text" formControlName="situacao_31"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>32</ion-label>\n      <ion-input type="text" formControlName="situacao_32"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>33</ion-label>\n      <ion-input type="text" formControlName="situacao_33"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>34</ion-label>\n      <ion-input type="text" formControlName="situacao_34"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>35</ion-label>\n      <ion-input type="text" formControlName="situacao_35"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>36</ion-label>\n      <ion-input type="text" formControlName="situacao_36"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>37</ion-label>\n      <ion-input type="text" formControlName="situacao_37"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>38</ion-label>\n      <ion-input type="text" formControlName="situacao_38"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>85</ion-label>\n      <ion-input type="text" formControlName="situacao_85"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>84</ion-label>\n      <ion-input type="text" formControlName="situacao_84"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>83</ion-label>\n      <ion-input type="text" formControlName="situacao_83"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>82</ion-label>\n      <ion-input type="text" formControlName="situacao_82"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>81</ion-label>\n      <ion-input type="text" formControlName="situacao_81"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>71</ion-label>\n      <ion-input type="text" formControlName="situacao_71"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>72</ion-label>\n      <ion-input type="text" formControlName="situacao_72"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>73</ion-label>\n      <ion-input type="text" formControlName="situacao_73"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>74</ion-label>\n      <ion-input type="text" formControlName="situacao_74"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>75</ion-label>\n      <ion-input type="text" formControlName="situacao_75"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>Está em tratamento médico?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="tratamento_medico">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Está tomando algum medicamento?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="tomando_medicamento">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Já teve alguma doença? (hepatite, chagas, sífilis, febre reumática, câncer, HIV, etc.)</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="teve_doenca">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>É diabético?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="diabetico">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Sofre de alguma doença do coração?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="doenca_coracao">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>É hipertenso?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="hipertenso">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>É hemofílico?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="hemofilico">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Pés incham com facilidade?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="pes_incham">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Tem tosse persistente?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="tosse_persistente">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Algum tipo de alergia?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="alergia">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Quando se fere, demora para cicatrizar?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="demora_cicatrizar">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Já foi submetido a anestesia para tratamento odontológico?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="anestesia_tratamento_odontologico">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Já teve hemorragia?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="teve_hemorragia">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Tem algum vício?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="tem_vicio">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Está grávida?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="esta_gravida">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Sofre de epilepsia?</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="sofre_epilepsia">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Tem algo a declarar a respeito de sua saúde que não foi perguntado neste questionário? Em caso afirmativo, qual?</ion-label>\n      <ion-input type="text" formControlName="declaracao"></ion-input>\n    </ion-item>\n\n    <br><br><br><br>\n\n    <ion-item>\n      <ion-label stacked>Tratamento</ion-label>\n      <ion-input type="text" formControlName="tratamento"></ion-input>\n    </ion-item>\n\n    <br><br>\n\n\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto-edit/patient-odonto-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_patient_odonto_patient_odonto__["a" /* PatientOdontoProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], PatientOdontoEditPage);
    return PatientOdontoEditPage;
}());

//# sourceMappingURL=patient-odonto-edit.js.map

/***/ })

});
//# sourceMappingURL=5.js.map