webpackJsonp([13],{

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/child-edit/child-edit.module": [
		535,
		12
	],
	"../pages/child-view/child-view.module": [
		536,
		11
	],
	"../pages/child/child.module": [
		537,
		10
	],
	"../pages/contact-edit/contact-edit.module": [
		538,
		9
	],
	"../pages/home/home.module": [
		539,
		8
	],
	"../pages/login/login.module": [
		540,
		7
	],
	"../pages/patient-edit/patient-edit.module": [
		541,
		6
	],
	"../pages/patient-odonto-edit/patient-odonto-edit.module": [
		542,
		5
	],
	"../pages/patient-odonto-view/patient-odonto-view.module": [
		543,
		4
	],
	"../pages/patient-odonto/patient-odonto.module": [
		544,
		3
	],
	"../pages/patient-view/patient-view.module": [
		545,
		2
	],
	"../pages/patient/patient.module": [
		546,
		1
	],
	"../pages/register/register.module": [
		547,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildProvider = (function () {
    function ChildProvider(afs) {
        this.afs = afs;
        this.PATH = 'child/';
    }
    ChildProvider.prototype.getAll = function () {
        this.childCollectionRef = this.afs.collection(this.PATH, function (ref) { return ref.orderBy('nome'); });
        return this.childCollectionRef.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.key = a.payload.doc.id;
                return data;
            });
        });
    };
    //  get(key: string) {
    //    return this.afs.object(this.PATH + key).snapshotChanges()
    //      .map(c => {
    //        return { key: c.key, ...c.payload.val() };
    //      });
    //  }
    ChildProvider.prototype.save = function (child) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (child.key) {
                _this.childCollectionRef.doc(child.key).update({
                    key: "",
                    responsavel: child.responsavel,
                    equipe: child.equipe,
                    data: child.data,
                    nome: child.nome,
                    idade: child.idade,
                    genero: child.genero,
                    natural_de: child.natural_de,
                    procedente_de: child.procedente_de,
                    escola: child.escola,
                    cor_preferida: child.cor_preferida,
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.childCollectionRef.add({
                    key: "",
                    responsavel: child.responsavel,
                    equipe: child.equipe,
                    data: child.data,
                    nome: child.nome,
                    idade: child.idade,
                    genero: child.genero,
                    natural_de: child.natural_de,
                    procedente_de: child.procedente_de,
                    escola: child.escola,
                    cor_preferida: child.cor_preferida,
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    ChildProvider.prototype.remove = function (key) {
        return this.childCollectionRef.doc(key).delete();
    };
    ChildProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ChildProvider);
    return ChildProvider;
}());

//# sourceMappingURL=child.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientProvider = (function () {
    function PatientProvider(afs) {
        this.afs = afs;
        this.PATH = 'patient/';
    }
    PatientProvider.prototype.getAll = function () {
        this.patientCollectionRef = this.afs.collection(this.PATH, function (ref) { return ref.orderBy('nome'); });
        return this.patientCollectionRef.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.key = a.payload.doc.id;
                return data;
            });
        });
    };
    //  get(key: string) {
    //    return this.afs.object(this.PATH + key).snapshotChanges()
    //      .map(c => {
    //        return { key: c.key, ...c.payload.val() };
    //      });
    //  }
    PatientProvider.prototype.save = function (patient) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (patient.key) {
                _this.patientCollectionRef.doc(patient.key).update({
                    key: "",
                    responsavel: patient.responsavel,
                    equipe: patient.equipe,
                    data: patient.data,
                    nome: patient.nome,
                    idade: patient.idade,
                    genero: patient.genero,
                    cor: patient.cor,
                    profissao: patient.profissao,
                    natural_de: patient.natural_de,
                    procedente_de: patient.procedente_de,
                    queixa: patient.queixa,
                    isda: patient.isda,
                    pessoal_verminose: patient.pessoal_verminose,
                    pessoal_dm: patient.pessoal_dm,
                    pessoal_has: patient.pessoal_has,
                    pessoal_cancer: patient.pessoal_cancer,
                    pessoal_tb: patient.pessoal_tb,
                    pessoal_avc: patient.pessoal_avc,
                    pessoal_alcool: patient.pessoal_alcool,
                    pessoal_cigarro: patient.pessoal_cigarro,
                    pessoal_drogas: patient.pessoal_drogas,
                    pessoal_alergias: patient.pessoal_alergias,
                    pessoal_outros: patient.pessoal_outros,
                    pessoal_cirurgias_previas: patient.pessoal_cirurgias_previas,
                    familiar_verminose: patient.familiar_verminose,
                    familiar_dm: patient.familiar_dm,
                    familiar_has: patient.familiar_has,
                    familiar_cancer: patient.familiar_cancer,
                    familiar_tb: patient.familiar_tb,
                    familiar_avc: patient.familiar_avc,
                    familiar_alergias: patient.familiar_alergias,
                    familiar_outros: patient.familiar_outros,
                    exame_fisico_geral_beg: patient.exame_fisico_geral_beg,
                    exame_fisico_geral_reg: patient.exame_fisico_geral_reg,
                    exame_fisico_geral_meg: patient.exame_fisico_geral_meg,
                    exame_fisico_geral_corado: patient.exame_fisico_geral_corado,
                    exame_fisico_geral_descorado: patient.exame_fisico_geral_descorado,
                    exame_fisico_geral_descorado_qtd: patient.exame_fisico_geral_descorado_qtd,
                    exame_fisico_geral_hidratado: patient.exame_fisico_geral_hidratado,
                    exame_fisico_geral_desidratado: patient.exame_fisico_geral_desidratado,
                    exame_fisico_geral_desidratado_qtd: patient.exame_fisico_geral_desidratado_qtd,
                    exame_fisico_geral_eupneico: patient.exame_fisico_geral_eupneico,
                    exame_fisico_geral_dispneico: patient.exame_fisico_geral_dispneico,
                    exame_fisico_geral_taquipneico: patient.exame_fisico_geral_taquipneico,
                    exame_fisico_geral_acianotico: patient.exame_fisico_geral_acianotico,
                    exame_fisico_geral_cianose_periferica: patient.exame_fisico_geral_cianose_periferica,
                    exame_fisico_geral_cianose_central: patient.exame_fisico_geral_cianose_central,
                    exame_fisico_geral_anicterico: patient.exame_fisico_geral_anicterico,
                    exame_fisico_geral_icterico: patient.exame_fisico_geral_icterico,
                    exame_fisico_geral_icterico_grau: patient.exame_fisico_geral_icterico_grau,
                    exame_fisico_geral_afebril: patient.exame_fisico_geral_afebril,
                    exame_fisico_geral_febril: patient.exame_fisico_geral_febril,
                    exame_fisico_geral_febril_qtd: patient.exame_fisico_geral_febril_qtd,
                    exame_fisico_especifico_neuro: patient.exame_fisico_especifico_neuro,
                    exame_fisico_especifico_ac: patient.exame_fisico_especifico_ac,
                    exame_fisico_especifico_fc: patient.exame_fisico_especifico_fc,
                    exame_fisico_especifico_pa: patient.exame_fisico_especifico_pa,
                    exame_fisico_especifico_ap: patient.exame_fisico_especifico_ap,
                    exame_fisico_especifico_fr: patient.exame_fisico_especifico_fr,
                    exame_fisico_especifico_abdomen: patient.exame_fisico_especifico_abdomen,
                    exame_fisico_especifico_genitourinario: patient.exame_fisico_especifico_genitourinario,
                    exame_fisico_especifico_pele: patient.exame_fisico_especifico_pele,
                    conduta: patient.conduta
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.patientCollectionRef.add({
                    key: "",
                    responsavel: patient.responsavel,
                    equipe: patient.equipe,
                    data: patient.data,
                    nome: patient.nome,
                    idade: patient.idade,
                    genero: patient.genero,
                    cor: patient.cor,
                    profissao: patient.profissao,
                    natural_de: patient.natural_de,
                    procedente_de: patient.procedente_de,
                    queixa: patient.queixa,
                    isda: patient.isda,
                    pessoal_verminose: patient.pessoal_verminose,
                    pessoal_dm: patient.pessoal_dm,
                    pessoal_has: patient.pessoal_has,
                    pessoal_cancer: patient.pessoal_cancer,
                    pessoal_tb: patient.pessoal_tb,
                    pessoal_avc: patient.pessoal_avc,
                    pessoal_alcool: patient.pessoal_alcool,
                    pessoal_cigarro: patient.pessoal_cigarro,
                    pessoal_drogas: patient.pessoal_drogas,
                    pessoal_alergias: patient.pessoal_alergias,
                    pessoal_outros: patient.pessoal_outros,
                    pessoal_cirurgias_previas: patient.pessoal_cirurgias_previas,
                    familiar_verminose: patient.familiar_verminose,
                    familiar_dm: patient.familiar_dm,
                    familiar_has: patient.familiar_has,
                    familiar_cancer: patient.familiar_cancer,
                    familiar_tb: patient.familiar_tb,
                    familiar_avc: patient.familiar_avc,
                    familiar_alergias: patient.familiar_alergias,
                    familiar_outros: patient.familiar_outros,
                    exame_fisico_geral_beg: patient.exame_fisico_geral_beg,
                    exame_fisico_geral_reg: patient.exame_fisico_geral_reg,
                    exame_fisico_geral_meg: patient.exame_fisico_geral_meg,
                    exame_fisico_geral_corado: patient.exame_fisico_geral_corado,
                    exame_fisico_geral_descorado: patient.exame_fisico_geral_descorado,
                    exame_fisico_geral_descorado_qtd: patient.exame_fisico_geral_descorado_qtd,
                    exame_fisico_geral_hidratado: patient.exame_fisico_geral_hidratado,
                    exame_fisico_geral_desidratado: patient.exame_fisico_geral_desidratado,
                    exame_fisico_geral_desidratado_qtd: patient.exame_fisico_geral_desidratado_qtd,
                    exame_fisico_geral_eupneico: patient.exame_fisico_geral_eupneico,
                    exame_fisico_geral_dispneico: patient.exame_fisico_geral_dispneico,
                    exame_fisico_geral_taquipneico: patient.exame_fisico_geral_taquipneico,
                    exame_fisico_geral_acianotico: patient.exame_fisico_geral_acianotico,
                    exame_fisico_geral_cianose_periferica: patient.exame_fisico_geral_cianose_periferica,
                    exame_fisico_geral_cianose_central: patient.exame_fisico_geral_cianose_central,
                    exame_fisico_geral_anicterico: patient.exame_fisico_geral_anicterico,
                    exame_fisico_geral_icterico: patient.exame_fisico_geral_icterico,
                    exame_fisico_geral_icterico_grau: patient.exame_fisico_geral_icterico_grau,
                    exame_fisico_geral_afebril: patient.exame_fisico_geral_afebril,
                    exame_fisico_geral_febril: patient.exame_fisico_geral_febril,
                    exame_fisico_geral_febril_qtd: patient.exame_fisico_geral_febril_qtd,
                    exame_fisico_especifico_neuro: patient.exame_fisico_especifico_neuro,
                    exame_fisico_especifico_ac: patient.exame_fisico_especifico_ac,
                    exame_fisico_especifico_fc: patient.exame_fisico_especifico_fc,
                    exame_fisico_especifico_pa: patient.exame_fisico_especifico_pa,
                    exame_fisico_especifico_ap: patient.exame_fisico_especifico_ap,
                    exame_fisico_especifico_fr: patient.exame_fisico_especifico_fr,
                    exame_fisico_especifico_abdomen: patient.exame_fisico_especifico_abdomen,
                    exame_fisico_especifico_genitourinario: patient.exame_fisico_especifico_genitourinario,
                    exame_fisico_especifico_pele: patient.exame_fisico_especifico_pele,
                    conduta: patient.conduta
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    PatientProvider.prototype.remove = function (key) {
        return this.patientCollectionRef.doc(key).delete();
    };
    PatientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PatientProvider);
    return PatientProvider;
}());

//# sourceMappingURL=patient.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOdontoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientOdontoProvider = (function () {
    function PatientOdontoProvider(afs) {
        this.afs = afs;
        this.PATH = 'patientOdonto/';
    }
    PatientOdontoProvider.prototype.getAll = function () {
        this.patientOdontoCollectionRef = this.afs.collection(this.PATH, function (ref) { return ref.orderBy('nome'); });
        return this.patientOdontoCollectionRef.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.key = a.payload.doc.id;
                return data;
            });
        });
    };
    //  get(key: string) {
    //    return this.afs.object(this.PATH + key).snapshotChanges()
    //      .map(c => {
    //        return { key: c.key, ...c.payload.val() };
    //      });
    //  }
    PatientOdontoProvider.prototype.save = function (patientOdonto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (patientOdonto.key) {
                _this.patientOdontoCollectionRef.doc(patientOdonto.key).update({
                    key: "",
                    responsavel: patientOdonto.responsavel,
                    equipe: patientOdonto.equipe,
                    data: patientOdonto.data,
                    nome: patientOdonto.nome,
                    idade: patientOdonto.idade,
                    genero: patientOdonto.genero,
                    cor: patientOdonto.cor,
                    profissao: patientOdonto.profissao,
                    natural_de: patientOdonto.natural_de,
                    procedente_de: patientOdonto.procedente_de,
                    tratamento_medico: patientOdonto.tratamento_medico,
                    tomando_medicamento: patientOdonto.tomando_medicamento,
                    teve_doenca: patientOdonto.teve_doenca,
                    doenca_coracao: patientOdonto.doenca_coracao,
                    diabetico: patientOdonto.diabetico,
                    hipertenso: patientOdonto.hipertenso,
                    hemofilico: patientOdonto.hemofilico,
                    pes_incham: patientOdonto.pes_incham,
                    tosse_persistente: patientOdonto.tosse_persistente,
                    alergia: patientOdonto.alergia,
                    demora_cicatrizar: patientOdonto.demora_cicatrizar,
                    anestesia_tratamento_odontologico: patientOdonto.anestesia_tratamento_odontologico,
                    teve_hemorragia: patientOdonto.teve_hemorragia,
                    tem_vicio: patientOdonto.tem_vicio,
                    esta_gravida: patientOdonto.esta_gravida,
                    sofre_epilepsia: patientOdonto.sofre_epilepsia,
                    declaracao: patientOdonto.declaracao,
                    situacao_55: patientOdonto.situacao_55,
                    situacao_54: patientOdonto.situacao_54,
                    situacao_53: patientOdonto.situacao_53,
                    situacao_52: patientOdonto.situacao_52,
                    situacao_51: patientOdonto.situacao_51,
                    situacao_61: patientOdonto.situacao_61,
                    situacao_62: patientOdonto.situacao_62,
                    situacao_63: patientOdonto.situacao_63,
                    situacao_64: patientOdonto.situacao_64,
                    situacao_65: patientOdonto.situacao_65,
                    situacao_18: patientOdonto.situacao_18,
                    situacao_17: patientOdonto.situacao_17,
                    situacao_16: patientOdonto.situacao_16,
                    situacao_15: patientOdonto.situacao_15,
                    situacao_14: patientOdonto.situacao_14,
                    situacao_13: patientOdonto.situacao_13,
                    situacao_12: patientOdonto.situacao_12,
                    situacao_11: patientOdonto.situacao_11,
                    situacao_21: patientOdonto.situacao_21,
                    situacao_22: patientOdonto.situacao_22,
                    situacao_23: patientOdonto.situacao_23,
                    situacao_24: patientOdonto.situacao_24,
                    situacao_25: patientOdonto.situacao_25,
                    situacao_26: patientOdonto.situacao_26,
                    situacao_27: patientOdonto.situacao_27,
                    situacao_28: patientOdonto.situacao_28,
                    situacao_48: patientOdonto.situacao_48,
                    situacao_47: patientOdonto.situacao_47,
                    situacao_46: patientOdonto.situacao_46,
                    situacao_45: patientOdonto.situacao_45,
                    situacao_44: patientOdonto.situacao_44,
                    situacao_43: patientOdonto.situacao_43,
                    situacao_42: patientOdonto.situacao_42,
                    situacao_41: patientOdonto.situacao_41,
                    situacao_31: patientOdonto.situacao_31,
                    situacao_32: patientOdonto.situacao_32,
                    situacao_33: patientOdonto.situacao_33,
                    situacao_34: patientOdonto.situacao_34,
                    situacao_35: patientOdonto.situacao_35,
                    situacao_36: patientOdonto.situacao_36,
                    situacao_37: patientOdonto.situacao_37,
                    situacao_38: patientOdonto.situacao_38,
                    situacao_85: patientOdonto.situacao_85,
                    situacao_84: patientOdonto.situacao_84,
                    situacao_83: patientOdonto.situacao_83,
                    situacao_82: patientOdonto.situacao_82,
                    situacao_81: patientOdonto.situacao_81,
                    situacao_71: patientOdonto.situacao_71,
                    situacao_72: patientOdonto.situacao_72,
                    situacao_73: patientOdonto.situacao_73,
                    situacao_74: patientOdonto.situacao_74,
                    situacao_75: patientOdonto.situacao_75,
                    tratamento: patientOdonto.tratamento,
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.patientOdontoCollectionRef.add({
                    key: "",
                    responsavel: patientOdonto.responsavel,
                    equipe: patientOdonto.equipe,
                    data: patientOdonto.data,
                    nome: patientOdonto.nome,
                    idade: patientOdonto.idade,
                    genero: patientOdonto.genero,
                    cor: patientOdonto.cor,
                    profissao: patientOdonto.profissao,
                    natural_de: patientOdonto.natural_de,
                    procedente_de: patientOdonto.procedente_de,
                    tratamento_medico: patientOdonto.tratamento_medico,
                    tomando_medicamento: patientOdonto.tomando_medicamento,
                    teve_doenca: patientOdonto.teve_doenca,
                    doenca_coracao: patientOdonto.doenca_coracao,
                    diabetico: patientOdonto.diabetico,
                    hipertenso: patientOdonto.hipertenso,
                    hemofilico: patientOdonto.hemofilico,
                    pes_incham: patientOdonto.pes_incham,
                    tosse_persistente: patientOdonto.tosse_persistente,
                    alergia: patientOdonto.alergia,
                    demora_cicatrizar: patientOdonto.demora_cicatrizar,
                    anestesia_tratamento_odontologico: patientOdonto.anestesia_tratamento_odontologico,
                    teve_hemorragia: patientOdonto.teve_hemorragia,
                    tem_vicio: patientOdonto.tem_vicio,
                    esta_gravida: patientOdonto.esta_gravida,
                    sofre_epilepsia: patientOdonto.sofre_epilepsia,
                    declaracao: patientOdonto.declaracao,
                    situacao_55: patientOdonto.situacao_55,
                    situacao_54: patientOdonto.situacao_54,
                    situacao_53: patientOdonto.situacao_53,
                    situacao_52: patientOdonto.situacao_52,
                    situacao_51: patientOdonto.situacao_51,
                    situacao_61: patientOdonto.situacao_61,
                    situacao_62: patientOdonto.situacao_62,
                    situacao_63: patientOdonto.situacao_63,
                    situacao_64: patientOdonto.situacao_64,
                    situacao_65: patientOdonto.situacao_65,
                    situacao_18: patientOdonto.situacao_18,
                    situacao_17: patientOdonto.situacao_17,
                    situacao_16: patientOdonto.situacao_16,
                    situacao_15: patientOdonto.situacao_15,
                    situacao_14: patientOdonto.situacao_14,
                    situacao_13: patientOdonto.situacao_13,
                    situacao_12: patientOdonto.situacao_12,
                    situacao_11: patientOdonto.situacao_11,
                    situacao_21: patientOdonto.situacao_21,
                    situacao_22: patientOdonto.situacao_22,
                    situacao_23: patientOdonto.situacao_23,
                    situacao_24: patientOdonto.situacao_24,
                    situacao_25: patientOdonto.situacao_25,
                    situacao_26: patientOdonto.situacao_26,
                    situacao_27: patientOdonto.situacao_27,
                    situacao_28: patientOdonto.situacao_28,
                    situacao_48: patientOdonto.situacao_48,
                    situacao_47: patientOdonto.situacao_47,
                    situacao_46: patientOdonto.situacao_46,
                    situacao_45: patientOdonto.situacao_45,
                    situacao_44: patientOdonto.situacao_44,
                    situacao_43: patientOdonto.situacao_43,
                    situacao_42: patientOdonto.situacao_42,
                    situacao_41: patientOdonto.situacao_41,
                    situacao_31: patientOdonto.situacao_31,
                    situacao_32: patientOdonto.situacao_32,
                    situacao_33: patientOdonto.situacao_33,
                    situacao_34: patientOdonto.situacao_34,
                    situacao_35: patientOdonto.situacao_35,
                    situacao_36: patientOdonto.situacao_36,
                    situacao_37: patientOdonto.situacao_37,
                    situacao_38: patientOdonto.situacao_38,
                    situacao_85: patientOdonto.situacao_85,
                    situacao_84: patientOdonto.situacao_84,
                    situacao_83: patientOdonto.situacao_83,
                    situacao_82: patientOdonto.situacao_82,
                    situacao_81: patientOdonto.situacao_81,
                    situacao_71: patientOdonto.situacao_71,
                    situacao_72: patientOdonto.situacao_72,
                    situacao_73: patientOdonto.situacao_73,
                    situacao_74: patientOdonto.situacao_74,
                    situacao_75: patientOdonto.situacao_75,
                    tratamento: patientOdonto.tratamento,
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    PatientOdontoProvider.prototype.remove = function (key) {
        return this.patientOdontoCollectionRef.doc(key).delete();
    };
    PatientOdontoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PatientOdontoProvider);
    return PatientOdontoProvider;
}());

//# sourceMappingURL=patient-odonto.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(257);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactProvider = (function () {
    function ContactProvider(db) {
        this.db = db;
        this.PATH = 'contacts/';
    }
    ContactProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    ContactProvider.prototype.save = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (contact.key) {
                _this.db.list(_this.PATH)
                    .update(contact.key, { name: contact.name, tel: contact.tel })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: contact.name, tel: contact.tel })
                    .then(function () { return resolve(); });
            }
        });
    };
    ContactProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_contact_contact__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_patient_patient__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_patient_odonto_patient_odonto__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_child_child__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/child-edit/child-edit.module#ChildEditPageModule', name: 'ChildEditPage', segment: 'child-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/child-view/child-view.module#ChildViewPageModule', name: 'ChildViewPage', segment: 'child-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/child/child.module#ChildPageModule', name: 'ChildPage', segment: 'child', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-edit/contact-edit.module#ContactEditPageModule', name: 'ContactEditPage', segment: 'contact-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-edit/patient-edit.module#PatientEditPageModule', name: 'PatientEditPage', segment: 'patient-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-odonto-edit/patient-odonto-edit.module#PatientOdontoEditPageModule', name: 'PatientOdontoEditPage', segment: 'patient-odonto-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-odonto-view/patient-odonto-view.module#PatientOdontoViewPageModule', name: 'PatientOdontoViewPage', segment: 'patient-odonto-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-odonto/patient-odonto.module#PatientOdontoPageModule', name: 'PatientOdontoPage', segment: 'patient-odonto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-view/patient-view.module#PatientViewPageModule', name: 'PatientViewPage', segment: 'patient-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient/patient.module#PatientPageModule', name: 'PatientPage', segment: 'patient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyC0SKtuss4QtLKzndxI_LjqqS3lK14afqM",
                    authDomain: "barco-solidario.firebaseapp.com",
                    databaseURL: "https://barco-solidario.firebaseio.com",
                    projectId: "barco-solidario",
                    storageBucket: "barco-solidario.appspot.com",
                    messagingSenderId: "813814174017"
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_contact_contact__["a" /* ContactProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_patient_patient__["a" /* PatientProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_patient_odonto_patient_odonto__["a" /* PatientOdontoProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_child_child__["a" /* ChildProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map