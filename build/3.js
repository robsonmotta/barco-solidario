webpackJsonp([3],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOdontoPageModule", function() { return PatientOdontoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_odonto__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientOdontoPageModule = (function () {
    function PatientOdontoPageModule() {
    }
    PatientOdontoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_odonto__["a" /* PatientOdontoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_odonto__["a" /* PatientOdontoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__patient_odonto__["a" /* PatientOdontoPage */]
            ],
        })
    ], PatientOdontoPageModule);
    return PatientOdontoPageModule;
}());

//# sourceMappingURL=patient-odonto.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOdontoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_patient_odonto_patient_odonto__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PatientOdontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientOdontoPage = (function () {
    function PatientOdontoPage(toast, provider, navCtrl, navParams) {
        this.toast = toast;
        this.provider = provider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patientsOdonto = this.provider.getAll();
    }
    PatientOdontoPage.prototype.newPatientOdonto = function () {
        this.navCtrl.push('PatientOdontoEditPage');
    };
    PatientOdontoPage.prototype.editPatientOdonto = function (patientOdonto) {
        this.navCtrl.push('PatientOdontoEditPage', { patientOdonto: patientOdonto });
    };
    PatientOdontoPage.prototype.viewPatientOdonto = function (patientOdonto) {
        this.navCtrl.push('PatientOdontoViewPage', { patientOdonto: patientOdonto });
    };
    PatientOdontoPage.prototype.removePatientOdonto = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Registro de paciente removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o registro do paciente.', duration: 3000 }).present();
            });
        }
    };
    PatientOdontoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-patient-odonto',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto/patient-odonto.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Atendimentos: Odonto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let patientOdonto of patientsOdonto | async">\n      <ion-item (click)="viewPatientOdonto(patientOdonto)">\n        <h1>{{ patientOdonto.nome }}</h1>\n        <p>{{ patientOdonto.data }} - {{ patientOdonto.responsavel }} ({{ patientOdonto.equipe }})</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editPatientOdonto(patientOdonto)" style="width: 60px;">\n          <ion-icon name="create" style="font-size: 24px;"></ion-icon>\n        </button>\n        <!--\n        <button ion-button color="danger" (click)="removePatient(patientOdonto.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n         -->\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="newPatientOdonto()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient-odonto/patient-odonto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_patient_odonto_patient_odonto__["a" /* PatientOdontoProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], PatientOdontoPage);
    return PatientOdontoPage;
}());

//# sourceMappingURL=patient-odonto.js.map

/***/ })

});
//# sourceMappingURL=3.js.map