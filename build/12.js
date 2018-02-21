webpackJsonp([12],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildEditPageModule", function() { return ChildEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_edit__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChildEditPageModule = (function () {
    function ChildEditPageModule() {
    }
    ChildEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__child_edit__["a" /* ChildEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__child_edit__["a" /* ChildEditPage */]),
            ],
        })
    ], ChildEditPageModule);
    return ChildEditPageModule;
}());

//# sourceMappingURL=child-edit.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_child_child__ = __webpack_require__(339);
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




var ChildEditPage = (function () {
    function ChildEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.child = this.navParams.data.child || {};
        this.createForm();
        this.setupPageTitle();
    }
    ChildEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.child ? 'Alterando atendimento' : 'Novo atendimento';
    };
    ChildEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.child.key],
            responsavel: [this.child.responsavel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            equipe: [this.child.equipe, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            data: [this.child.data, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nome: [this.child.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            idade: [this.child.idade],
            genero: [this.child.genero],
            natural_de: [this.child.natural_de],
            procedente_de: [this.child.procedente_de],
            escola: [this.child.escola],
            cor_preferida: [this.child.cor_preferida],
        });
    };
    ChildEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.navCtrl.pop();
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Cadastro de criança salvo com sucesso.', duration: 3000 }).present();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o cadastro de criança.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    ChildEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-child-edit',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child-edit/child-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}: Criança</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Data*</ion-label>\n      <ion-input type="date" formControlName="data"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.data.valid && (form.controls.data.dirty || form.controls.data.touched)" color="danger">\n      <div [hidden]="!form.controls.data.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Responsável*</ion-label>\n      <ion-input type="text" formControlName="responsavel"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.responsavel.valid && (form.controls.responsavel.dirty || form.controls.responsavel.touched)" color="danger">\n      <div [hidden]="!form.controls.responsavel.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Equipe*</ion-label>\n      <ion-input type="text" formControlName="equipe"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.equipe.valid && (form.controls.equipe.dirty || form.controls.equipe.touched)" color="danger">\n      <div [hidden]="!form.controls.equipe.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <br><br>\n    <ion-title>Identificação</ion-title>\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input type="text" formControlName="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Idade</ion-label>\n      <ion-input type="text" formControlName="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Sexo</ion-label>\n    </ion-item>\n    <ion-list radio-group formControlName="genero">\n      <ion-item>\n        <ion-label>Feminino</ion-label>\n        <ion-radio value="feminino"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Masculino</ion-label>\n        <ion-radio value="masculino"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label stacked>Natural de</ion-label>\n      <ion-input type="text" formControlName="natural_de"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Procedente de</ion-label>\n      <ion-input type="text" formControlName="procedente_de"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Escola</ion-label>\n      <ion-input type="text" formControlName="escola"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cor preferida</ion-label>\n      <ion-input type="text" formControlName="cor_preferida"></ion-input>\n    </ion-item>\n\n    <br><br>\n\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child-edit/child-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_child_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ChildEditPage);
    return ChildEditPage;
}());

//# sourceMappingURL=child-edit.js.map

/***/ })

});
//# sourceMappingURL=12.js.map