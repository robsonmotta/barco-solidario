webpackJsonp([11],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildViewPageModule", function() { return ChildViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_view__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChildViewPageModule = (function () {
    function ChildViewPageModule() {
    }
    ChildViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__child_view__["a" /* ChildViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__child_view__["a" /* ChildViewPage */]),
            ],
        })
    ], ChildViewPageModule);
    return ChildViewPageModule;
}());

//# sourceMappingURL=child-view.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildViewPage; });
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


var ChildViewPage = (function () {
    function ChildViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.child = this.navParams.data.child || {};
        this.data = this.child.data;
        this.responsavel = this.child.responsavel;
        this.equipe = this.child.equipe;
        this.nome = this.child.nome;
        this.idade = this.child.idade;
        this.genero = this.child.genero;
        this.natural_de = this.child.natural_de;
        this.procedente_de = this.child.procedente_de;
        this.cor_preferida = this.child.cor_preferida;
        this.escola = this.child.escola;
    }
    ChildViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildViewPage');
    };
    ChildViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-child-view',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child-view/child-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Cadastro: Criança</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    Data:\n    <br>\n    {{ data }}\n    <br><br>\n\n    Responsável:\n    <br>\n    {{ responsavel }}\n    <br><br>\n\n    Equipe:\n    <br>\n    {{ equipe }}\n    <br><br>\n\n    Nome:\n    <br>\n    {{ nome }}\n    <br><br>\n\n    Idade:\n    <br>\n    {{ idade }}\n    <br><br>\n\n    Gênero:\n    <br>\n    {{ genero }}\n    <br><br>\n\n    Natural de:\n    <br>\n    {{ natural_de }}\n    <br><br>\n\n    Procedente de:\n    <br>\n    {{ procedente_de }}\n    <br><br>\n\n    Cor preferida:\n    <br>\n    {{ cor_preferida }}\n    <br><br>\n\n    Escola:\n    <br>\n    {{ escola }}\n    <br><br>\n\n    <br><br>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child-view/child-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChildViewPage);
    return ChildViewPage;
}());

//# sourceMappingURL=child-view.js.map

/***/ })

});
//# sourceMappingURL=11.js.map