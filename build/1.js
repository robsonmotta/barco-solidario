webpackJsonp([1],{

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageModule", function() { return PatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientPageModule = (function () {
    function PatientPageModule() {
    }
    PatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* PatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient__["a" /* PatientPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* PatientPage */]
            ],
        })
    ], PatientPageModule);
    return PatientPageModule;
}());

//# sourceMappingURL=patient.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_patient_patient__ = __webpack_require__(340);
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
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientPage = (function () {
    function PatientPage(toast, provider, navCtrl, navParams) {
        this.toast = toast;
        this.provider = provider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patients = this.provider.getAll();
    }
    PatientPage.prototype.newPatient = function () {
        this.navCtrl.push('PatientEditPage');
    };
    PatientPage.prototype.editPatient = function (patient) {
        this.navCtrl.push('PatientEditPage', { patient: patient });
    };
    PatientPage.prototype.viewPatient = function (patient) {
        this.navCtrl.push('PatientViewPage', { patient: patient });
    };
    PatientPage.prototype.removePatient = function (key) {
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
    PatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-patient',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient/patient.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Atendimentos: Médico\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let patient of patients | async">\n      <ion-item (click)="viewPatient(patient)">\n        <h1>{{ patient.nome }}</h1>\n        <p>{{ patient.data }} - {{ patient.responsavel }} ({{ patient.equipe }})</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editPatient(patient)" style="width: 60px;">\n          <ion-icon name="create" style="font-size: 24px;"></ion-icon>\n        </button>\n        <!--\n        <button ion-button color="danger" (click)="removePatient(patient.key)" style="width: 60px;">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n         -->\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="newPatient()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/patient/patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_patient_patient__["a" /* PatientProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], PatientPage);
    return PatientPage;
}());

//# sourceMappingURL=patient.js.map

/***/ })

});
//# sourceMappingURL=1.js.map