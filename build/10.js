webpackJsonp([10],{

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPageModule", function() { return ChildPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChildPageModule = (function () {
    function ChildPageModule() {
    }
    ChildPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__child__["a" /* ChildPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__child__["a" /* ChildPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__child__["a" /* ChildPage */]
            ],
        })
    ], ChildPageModule);
    return ChildPageModule;
}());

//# sourceMappingURL=child.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_child_child__ = __webpack_require__(339);
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
 * Generated class for the ChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChildPage = (function () {
    function ChildPage(toast, provider, navCtrl, navParams) {
        this.toast = toast;
        this.provider = provider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.children = this.provider.getAll();
    }
    ChildPage.prototype.newChild = function () {
        this.navCtrl.push('ChildEditPage');
    };
    ChildPage.prototype.editChild = function (child) {
        this.navCtrl.push('ChildEditPage', { child: child });
    };
    ChildPage.prototype.viewChild = function (child) {
        this.navCtrl.push('ChildViewPage', { child: child });
    };
    ChildPage.prototype.removeChild = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Registro de criança removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o registro do criança.', duration: 3000 }).present();
            });
        }
    };
    ChildPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-child',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child/child.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Cadastro: Crianças\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let child of children | async">\n      <ion-item (click)="viewChild(child)">\n        <h1>{{ child.nome }}</h1>\n        <p>{{ child.data }} - {{ child.responsavel }} ({{ child.equipe }})</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editChild(child)" style="width: 60px;">\n          <ion-icon name="create" style="font-size: 24px;"></ion-icon>\n        </button>\n        <!--\n        <button ion-button color="danger" (click)="removeChild(child.key)" style="width: 60px;">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n         -->\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="newChild()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/child/child.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_child_child__["a" /* ChildProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], ChildPage);
    return ChildPage;
}());

//# sourceMappingURL=child.js.map

/***/ })

});
//# sourceMappingURL=10.js.map