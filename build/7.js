webpackJsonp([7],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        if (typeof (Storage) !== "undefined") {
            var logged_user = localStorage.getItem("email");
            if (logged_user !== "undefined" && logged_user !== null) {
                this.user = { email: logged_user, password: "" };
                this.navCtrl.setRoot('HomePage');
            }
        }
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                        .then(function (user) {
                        if (user.emailVerified) {
                            if (typeof (Storage) !== "undefined") {
                                localStorage.setItem("email", user.email);
                            }
                            ;
                            _this.navCtrl.setRoot('HomePage');
                        }
                        else {
                            user.sendEmailVerification()
                                .then(function (res) {
                                _this.toast.create({
                                    message: 'Usuário com e-mail ainda não verificado, reenviamos um e-mail de validação.',
                                    duration: 3000
                                }).present();
                            }, function (error) {
                                console.log(error);
                                _this.toast.create({
                                    message: 'Erro para reenviar email.',
                                    duration: 3000
                                }).present();
                            });
                        }
                        ;
                    }, function (error) {
                        var error_msg = error.message;
                        if (error.code == "auth/wrong-password") {
                            error_msg = "Senha inválida";
                        }
                        else if (error.code == "auth/invalid-email") {
                            error_msg = "E-mail inválido";
                        }
                        else if (error.code == "auth/too-many-requests") {
                            error_msg = "Você foi bloqueado por ter feito muitas tentativas. Aguarde alguns segundos";
                        }
                        else if (error.code == "auth/user-not-found") {
                            error_msg = "Usuário não cadastrado";
                        }
                        _this.toast.create({
                            message: error_msg,
                            duration: 3000
                        }).present();
                        console.log(error);
                    });
                }
                catch (e) {
                    this.toast.create({
                        message: 'Todos os campos precisam ser preenchidos.',
                        duration: 3000
                    }).present();
                }
                return [2 /*return*/];
            });
        });
    };
    //  register() {
    //    this.navCtrl.push('RegisterPage');
    //  }
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (res) {
                        res.sendEmailVerification();
                        _this.toast.create({
                            message: 'Uma mensagem de validação foi enviada para seu e-mail.',
                            duration: 3000
                        }).present();
                    }, function (error) {
                        var error_msg = error.message;
                        if (error.code == "auth/weak-password") {
                            error_msg = "Senha precisa de ao menos 6 caracteres.";
                        }
                        else if (error.code == "auth/invalid-email") {
                            error_msg = "E-mail inválido";
                        }
                        else if (error.code == "auth/email-already-in-use") {
                            error_msg = "E-mail já cadastrado.";
                        }
                        _this.toast.create({
                            message: error_msg,
                            duration: 3000
                        }).present();
                        console.log(error);
                    });
                }
                catch (error) {
                    this.toast.create({
                        message: 'Todos os campos devem ser preenchidos corretamente. ' + error.message,
                        duration: 3000
                    }).present();
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.forgot = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.afAuth.auth.sendPasswordResetEmail(user.email)
                        .then(function (res) {
                        _this.toast.create({
                            message: 'Uma mensagem de nova senha foi enviada para seu e-mail.',
                            duration: 3000
                        }).present();
                    }, function (error) {
                        var error_msg = error.message;
                        if (error.code == "auth/invalid-email") {
                            error_msg = "E-mail inválido";
                        }
                        else if (error.code == "auth/user-not-found") {
                            error_msg = "E-mail não cadastrado.";
                        }
                        _this.toast.create({
                            message: error_msg,
                            duration: 3000
                        }).present();
                        console.log(error);
                    });
                }
                catch (error) {
                    this.toast.create({
                        message: 'Todos os campos devem ser preenchidos corretamente. ' + error.message,
                        duration: 3000
                    }).present();
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <br>\n  <button ion-button (click)="login(user)">Login</button>\n  <br><br>\n  <button ion-button color="light" (click)="register(user)">Registrar</button>\n  <br><br>\n  <button ion-button color="light" (click)="forgot(user)">Esqueci a senha</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robson/Projects/github/barco-solidario/barco-solidario/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map