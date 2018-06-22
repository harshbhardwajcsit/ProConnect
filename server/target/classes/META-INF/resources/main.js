(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/app.component.css":
/*!************************************!*\
  !*** ../src/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n\n<!-- jQuery library -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\n<!-- Latest compiled JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\">\n</script>\n<script src=\"https://apis.google.com/js/client:platform.js?onload=start\" async defer>\n</script>\n<!-- Page styles -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.min.css\">\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/css/content.css\">\n</html>\n"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Proppler';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.material.module.ts":
/*!*****************************************!*\
  !*** ../src/app/app.material.module.ts ***!
  \*****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "../src/app/components/header/header.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.material.module */ "../src/app/app.material.module.ts");
/* harmony import */ var _services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/fetchCategoriesService/fetch-experiment-categories.service */ "../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_experiments_name_experiments_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experiments-name/experiments-name.component */ "../src/app/components/experiments-name/experiments-name.component.ts");
/* harmony import */ var _services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/fetchExperimentsWithTag/fetch-experiments-with-tag.service */ "../src/app/services/fetchExperimentsWithTag/fetch-experiments-with-tag.service.ts");
/* harmony import */ var _components_add_new_account_for_user_add_new_account_for_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-new-account-for-user/add-new-account-for-user.component */ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.ts");
/* harmony import */ var _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login-user/login-user.component */ "../src/app/components/login-user/login-user.component.ts");
/* harmony import */ var _components_experiments_add_exp_add_exp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/experiments/add-exp/add-exp.component */ "../src/app/components/experiments/add-exp/add-exp.component.ts");
/* harmony import */ var _components_experiments_edit_exp_edit_exp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/experiments/edit-exp/edit-exp.component */ "../src/app/components/experiments/edit-exp/edit-exp.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-bootstrap-md */ "../node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _services_loginService_login_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/loginService/login-service.service */ "../src/app/services/loginService/login-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_experiments_name_experiments_name_component__WEBPACK_IMPORTED_MODULE_9__["ExperimentsNameComponent"],
                _components_add_new_account_for_user_add_new_account_for_user_component__WEBPACK_IMPORTED_MODULE_11__["AddNewAccountForUserComponent"],
                _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_12__["LoginUserComponent"],
                _components_experiments_add_exp_add_exp_component__WEBPACK_IMPORTED_MODULE_13__["AddExpComponent"],
                _components_experiments_edit_exp_edit_exp_component__WEBPACK_IMPORTED_MODULE_14__["EditExpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
                    },
                    {
                        path: 'dashboard',
                        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
                    },
                    {
                        path: 'experiments',
                        component: _components_experiments_name_experiments_name_component__WEBPACK_IMPORTED_MODULE_9__["ExperimentsNameComponent"]
                    },
                    {
                        path: 'create-account',
                        component: _components_experiments_name_experiments_name_component__WEBPACK_IMPORTED_MODULE_9__["ExperimentsNameComponent"]
                    },
                    {
                        path: 'add-experiment',
                        component: _components_experiments_add_exp_add_exp_component__WEBPACK_IMPORTED_MODULE_13__["AddExpComponent"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_7__["FetchExperimentCategoriesService"], _services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_10__["FetchExperimentsWithTagService"], _services_loginService_login_service_service__WEBPACK_IMPORTED_MODULE_18__["LoginServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.css":
/*!*********************************************************************************************!*\
  !*** ../src/app/components/add-new-account-for-user/add-new-account-for-user.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.html":
/*!**********************************************************************************************!*\
  !*** ../src/app/components/add-new-account-for-user/add-new-account-for-user.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.ts":
/*!********************************************************************************************!*\
  !*** ../src/app/components/add-new-account-for-user/add-new-account-for-user.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddNewAccountForUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAccountForUserComponent", function() { return AddNewAccountForUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddNewAccountForUserComponent = /** @class */ (function () {
    function AddNewAccountForUserComponent() {
    }
    AddNewAccountForUserComponent.prototype.ngOnInit = function () {
    };
    AddNewAccountForUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-account-for-user',
            template: __webpack_require__(/*! ./add-new-account-for-user.component.html */ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.html"),
            styles: [__webpack_require__(/*! ./add-new-account-for-user.component.css */ "../src/app/components/add-new-account-for-user/add-new-account-for-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddNewAccountForUserComponent);
    return AddNewAccountForUserComponent;
}());



/***/ }),

/***/ "../src/app/components/dashboard/dashboard.component.css":
/*!***************************************************************!*\
  !*** ../src/app/components/dashboard/dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.actionCategory{*/\r\n  /*margin-bottom: 0px;*/\r\n  /*color: green;*/\r\n  /*font-size: 16px;*/\r\n  /*}*/\r\n  /*.container {*/\r\n  /*background: lightyellow;*/\r\n  /*width: 500px;*/\r\n  /*}*/\r\n  /*.new {*/\r\n  /*background: lightblue;*/\r\n  /*width: 100px;*/\r\n  /*}*/\r\n  /**\r\n * Copyright 2015 Google Inc. All Rights Reserved.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n  body {\r\n  margin: 0;\r\n}\r\n  /* Disable ugly boxes around images in IE10 */\r\n  a img{\r\n  border: 0px;\r\n}\r\n  ::-moz-selection {\r\n  background-color: #6ab344;\r\n  color: #fff;\r\n}\r\n  ::selection {\r\n  background-color: #6ab344;\r\n  color: #fff;\r\n}\r\n  .android-search-box .mdl-textfield__input {\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n  .android-header .mdl-menu__container {\r\n  z-index: 50;\r\n  margin: 0 !important;\r\n}\r\n  .mdl-textfield--expandable {\r\n  width: auto;\r\n}\r\n  .android-fab {\r\n  position: absolute;\r\n  right: 20%;\r\n  bottom: -26px;\r\n  z-index: 3;\r\n  background: #64ffda !important;\r\n  color: black !important;\r\n}\r\n  .android-mobile-title {\r\n  display: none !important;\r\n}\r\n  .android-logo-image {\r\n  height: 28px;\r\n  width: 140px;\r\n}\r\n  .android-header {\r\n  overflow: visible;\r\n  background-color: white;\r\n}\r\n  .android-header .material-icons {\r\n  color: #767777 !important;\r\n}\r\n  .android-header .mdl-layout__drawer-button {\r\n  background: transparent;\r\n  color: #767777;\r\n}\r\n  .android-header .mdl-navigation__link {\r\n  color: #757575;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n  .android-navigation-container {\r\n  /* Simple hack to make the overflow happen to the left instead... */\r\n  direction: rtl;\r\n  order: 1;\r\n  width: 500px;\r\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),\r\n  width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n  .android-navigation {\r\n  /* ... and now make sure the content is actually LTR */\r\n  direction: ltr;\r\n  justify-content: flex-end;\r\n  width: 800px;\r\n}\r\n  .android-search-box.is-focused + .android-navigation-container {\r\n  opacity: 0;\r\n  width: 100px;\r\n}\r\n  .android-navigation .mdl-navigation__link {\r\n  display: inline-block;\r\n  height: 60px;\r\n  line-height: 68px;\r\n  background-color: transparent !important;\r\n  border-bottom: 4px solid transparent;\r\n}\r\n  .android-navigation .mdl-navigation__link:hover {\r\n  border-bottom: 4px solid #8bc34a;\r\n}\r\n  .android-search-box {\r\n  order: 2;\r\n  margin-left: 16px;\r\n  margin-right: 16px;\r\n}\r\n  .android-more-button {\r\n  order: 3;\r\n}\r\n  .android-drawer {\r\n  border-right: none;\r\n}\r\n  .android-drawer-separator {\r\n  height: 1px;\r\n  background-color: #dcdcdc;\r\n  margin: 8px 0;\r\n}\r\n  .android-drawer .mdl-navigation__link.mdl-navigation__link {\r\n  font-size: 14px;\r\n  color: #757575;\r\n}\r\n  .android-drawer span.mdl-navigation__link.mdl-navigation__link {\r\n  color: #8bc34a;\r\n}\r\n  .android-drawer .mdl-layout-title {\r\n  position: relative;\r\n  background: #6ab344;\r\n  height: 160px;\r\n}\r\n  .android-drawer .android-logo-image {\r\n  position: absolute;\r\n  bottom: 16px;\r\n}\r\n  .android-be-together-section {\r\n  position: relative;\r\n  height: 800px;\r\n  width: auto;\r\n  background-color: #f3f3f3;\r\n  background-size: cover;\r\n}\r\n  .logo-font {\r\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\r\n  line-height: 1;\r\n  color: #767777;\r\n  font-weight: 500;\r\n}\r\n  .android-slogan {\r\n  font-size: 60px;\r\n  padding-top: 160px;\r\n}\r\n  .android-sub-slogan {\r\n  font-size: 21px;\r\n  padding-top: 24px;\r\n}\r\n  .android-create-character {\r\n  font-size: 21px;\r\n  padding-top: 400px;\r\n}\r\n  .android-create-character a {\r\n  text-decoration: none;\r\n  color: #767777;\r\n  font-weight: 300;\r\n}\r\n  .android-screen-section {\r\n  position: relative;\r\n  padding-top: 60px;\r\n  padding-bottom: 80px;\r\n}\r\n  .android-screens {\r\n  text-align: right;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow-x: auto;\r\n}\r\n  .android-screen {\r\n  text-align: center;\r\n}\r\n  .android-screen .android-link {\r\n  margin-top: 16px;\r\n  display: block;\r\n  z-index: 2;\r\n}\r\n  .android-image-link {\r\n  text-decoration: none;\r\n}\r\n  .android-wear {\r\n  display: inline-block;\r\n  width: 160px;\r\n  margin-right: 32px;\r\n}\r\n  .android-wear .android-screen-image {\r\n  width: 40%;\r\n  z-index: 1;\r\n}\r\n  .android-phone {\r\n  display: inline-block;\r\n  width: 64px;\r\n  margin-right: 48px;\r\n}\r\n  .android-phone .android-screen-image {\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n  .android-tablet {\r\n  display: inline-block;\r\n  width: 110px;\r\n  margin-right: 64px;\r\n}\r\n  .android-tablet .android-screen-image {\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n  .android-tablet .android-link {\r\n  display: block;\r\n  z-index: 2;\r\n}\r\n  .android-tv {\r\n  display: inline-block;\r\n  width: 300px;\r\n  margin-right: 80px;\r\n}\r\n  .android-tv .android-screen-image {\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n  .android-auto {\r\n  display: inline-block;\r\n  width: 300px;\r\n  overflow: hidden;\r\n}\r\n  .android-auto .android-screen-image {\r\n  display: block;\r\n  height: 300px;\r\n  z-index: 1;\r\n}\r\n  .android-wear-section {\r\n  position: relative;\r\n  background-size: cover;\r\n  height: 500px;\r\n}\r\n  .android-wear-band {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #37474f;\r\n}\r\n  .android-wear-band-text {\r\n  max-width: 800px;\r\n  margin-left: 25%;\r\n  padding: 24px;\r\n  text-align: left;\r\n  color: white;\r\n}\r\n  .android-wear-band-text p {\r\n  padding-top: 8px;\r\n}\r\n  .android-link {\r\n  text-decoration: none;\r\n  color: #8bc34a !important;\r\n}\r\n  .android-link:hover {\r\n  color: #7cb342 !important;\r\n}\r\n  .android-link .material-icons {\r\n  position: relative;\r\n  top: -1px;\r\n  vertical-align: middle;\r\n}\r\n  .android-alt-link {\r\n  text-decoration: none;\r\n  color: #64ffda !important;\r\n  font-size: 16px;\r\n}\r\n  .android-alt-link:hover {\r\n  color: #00bfa5 !important;\r\n}\r\n  .android-alt-link .material-icons {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n  .android-customized-section {\r\n  text-align: center;\r\n}\r\n  .android-customized-section-text {\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 80px 16px 0 16px;\r\n}\r\n  .android-customized-section-text p {\r\n  padding-top: 16px;\r\n}\r\n  .android-customized-section-image {\r\n\r\n  background-size: cover;\r\n  height: 400px;\r\n}\r\n  .android-more-section {\r\n  padding: 80px 0;\r\n  max-width: 1044px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n  .android-more-section .android-section-title {\r\n  margin-left: 12px;\r\n  padding-bottom: 24px;\r\n}\r\n  .android-card-container {\r\n}\r\n  .android-card-container .mdl-card__media {\r\n  overflow: hidden;\r\n  background: transparent;\r\n}\r\n  .android-card-container .mdl-card__media img {\r\n  width: 100%;\r\n}\r\n  .android-card-container .mdl-card__title {\r\n  background: transparent;\r\n  height: auto;\r\n}\r\n  .android-card-container .mdl-card__title-text {\r\n  color: black;\r\n  height: auto;\r\n}\r\n  .android-card-container .mdl-card__supporting-text {\r\n  height: auto;\r\n  color: black;\r\n  padding-bottom: 56px;\r\n}\r\n  .android-card-container .mdl-card__actions {\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n  .android-card-container .mdl-card__actions a {\r\n  border-top: none;\r\n  font-size: 16px;\r\n}\r\n  .android-footer {\r\n  background-color: #37474f;\r\n  position: relative;\r\n}\r\n  .android-footer a:hover {\r\n  color: #8bc34a;\r\n}\r\n  .android-footer .mdl-mega-footer--top-section::after {\r\n  border-bottom: none;\r\n}\r\n  .android-footer .mdl-mega-footer--middle-section::after {\r\n  border-bottom: none;\r\n}\r\n  .android-footer .mdl-mega-footer--bottom-section {\r\n  position: relative;\r\n}\r\n  .android-footer .mdl-mega-footer--bottom-section a {\r\n  margin-right: 2em;\r\n}\r\n  .android-footer .mdl-mega-footer--right-section a .material-icons {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n  .android-link-menu:hover {\r\n  cursor: pointer;\r\n}\r\n  /**** Mobile layout ****/\r\n  @media (max-width: 900px) {\r\n  .android-navigation-container {\r\n    display: none;\r\n  }\r\n\r\n  .android-title {\r\n    display: none !important;\r\n  }\r\n\r\n  .android-mobile-title {\r\n    display: block !important;\r\n    position: absolute;\r\n    left: calc(50% - 70px);\r\n    top: 12px;\r\n    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  }\r\n\r\n  /* WebViews in iOS 9 break the \"~\" operator, and WebViews in OS X 10.10 break\r\n     consecutive \"+\" operators in some cases. Therefore, we need to use both\r\n     here to cover all the bases. */\r\n  .android.android-search-box.is-focused ~ .android-mobile-title,\r\n  .android-search-box.is-focused + .android-navigation-container + .android-mobile-title {\r\n    opacity: 0;\r\n  }\r\n\r\n  .android-more-button {\r\n    display: none;\r\n  }\r\n\r\n  .android-search-box.is-focused {\r\n    width: calc(100% - 48px);\r\n  }\r\n\r\n  .android-search-box .mdl-textfield__expandable-holder {\r\n    width: 100%;\r\n  }\r\n\r\n  .android-be-together-section {\r\n    height: 350px;\r\n  }\r\n\r\n  .android-slogan {\r\n    font-size: 26px;\r\n    margin: 0 16px;\r\n    padding-top: 24px;\r\n  }\r\n\r\n  .android-sub-slogan {\r\n    font-size: 16px;\r\n    margin: 0 16px;\r\n    padding-top: 8px;\r\n  }\r\n\r\n  .android-create-character {\r\n    padding-top: 200px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .android-create-character img {\r\n    height: 12px;\r\n  }\r\n\r\n  .android-fab {\r\n    display: none;\r\n  }\r\n\r\n  .android-wear-band-text {\r\n    margin-left: 0;\r\n    padding: 16px;\r\n  }\r\n\r\n  .android-footer .mdl-mega-footer--bottom-section {\r\n    display: none;\r\n  }\r\n\r\n  .awesomeSlider{\r\n\r\n  }\r\n}\r\n"

/***/ }),

/***/ "../src/app/components/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ../src/app/components/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let category of experimentCategories\">-->\r\n<!--<mat-grid-list cols=\"3\" rowHeight=\"2:1\">-->\r\n  <!--<mat-grid-tile>-->\r\n  <!--<mat-card>-->\r\n  <!--<mat-card-content>-->\r\n  <!--{{category.displayName}}-->\r\n  <!--</mat-card-content>-->\r\n\r\n  <!--<div class=\"mdl-card__actions\">-->\r\n    <!--<a class=\"actionCategory\"  (click)=\"getProjectsList(category.tag)\">-->\r\n      <!--Explore-->\r\n    <!--</a>-->\r\n  <!--</div>-->\r\n<!--</mat-card>-->\r\n  <!--</mat-grid-tile>-->\r\n<!--</mat-grid-list>-->\r\n<!--</div>-->\r\n\r\n<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0\">\r\n</head>\r\n<body>\r\n  <!--/.Carousel Wrapper-->\r\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <div class=\"android-content mdl-layout__content\">\r\n\r\n    <div class=\"android-wear-section\">\r\n      <div class=\"android-wear-band\">\r\n        <div class=\"android-wear-band-text\">\r\n          <div class=\"mdl-typography--display-2 mdl-typography--font-thin\">The best that you can develop</div>\r\n          <p class=\"mdl-typography--headline mdl-typography--font-thin\">\r\n            Propeller is the common platform to share awesome & different ideas, Collaborate and keep watch what your's peer is doing.\r\n          </p>\r\n          <p>\r\n            <a class=\"mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link\" href=\"\">\r\n              See what's going trending here&nbsp;<i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"android-more-section\">\r\n      <div class=\"android-section-title mdl-typography--display-1-color-contrast\" align=\"center\">Experiments</div>\r\n      <div class=\"android-card-container mdl-grid\">\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Augment reality & Virtual reality</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Augment reality & Virtual reality</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Artificial Intelligence & Machine Learning</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Artificial Intelligence & Machine Learning</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Art & Culture Experiments</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Art & Culture Experiments</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Java Experiments</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Java Experiments</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Full stack</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Full stack</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">FrontEnd</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Frontend</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Internet of things</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Internet of things</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n             Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Electrical & Electronics </h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Electrical & Electronics</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">C/C++</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">C/C++</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\r\n          <div class=\"mdl-card__media\">\r\n            <img src=\"\">\r\n          </div>\r\n          <div class=\"mdl-card__title\">\r\n            <h4 class=\"mdl-card__title-text\">Data structure & Algorithms</h4>\r\n          </div>\r\n          <div class=\"mdl-card__supporting-text\">\r\n            <span class=\"mdl-typography--font-light mdl-typography--subhead\">Data structure & Algorithms</span>\r\n          </div>\r\n          <div class=\"mdl-card__actions\">\r\n            <a class=\"android-link mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"\">\r\n              Explore\r\n              <i class=\"material-icons\">chevron_right</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"android-footer mdl-mega-footer\">\r\n      <div class=\"mdl-mega-footer--top-section\">\r\n        <div class=\"mdl-mega-footer--right-section\">\r\n          <a class=\"mdl-typography--font-light\" href=\"#top\">\r\n            Back to Top\r\n            <i class=\"material-icons\">expand_less</i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mdl-mega-footer--middle-section\">\r\n        <p class=\"mdl-typography--font-light\">Propeller: © 2018, All rights reserved</p>\r\n        <!--<p class=\"mdl-typography&#45;&#45;font-light\">Some features and devices may not be available in all areas</p>-->\r\n      </div>\r\n\r\n      <div class=\"mdl-mega-footer--bottom-section\">\r\n        <a class=\"android-link android-link-menu mdl-typography--font-light\" id=\"version-dropdown\">\r\n          About\r\n        </a>\r\n        <a class=\"android-link android-link-menu mdl-typography--font-light\" id=\"developers-dropdown\">\r\n          Meet Developers\r\n        </a>\r\n        <a class=\"android-link mdl-typography--font-light\" href=\"\">Our Objective</a>\r\n        <a class=\"android-link mdl-typography--font-light\" href=\"\">Privacy Policy</a>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../src/app/components/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ../src/app/components/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetchCategoriesService/fetch-experiment-categories.service */ "../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetchExperimentsWithTag/fetch-experiments-with-tag.service */ "../src/app/services/fetchExperimentsWithTag/fetch-experiments-with-tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fetchExperimentCategoriesService, router, fetchExperimentsWithTagService) {
        this.fetchExperimentCategoriesService = fetchExperimentCategoriesService;
        this.router = router;
        this.fetchExperimentsWithTagService = fetchExperimentsWithTagService;
        this.experimentCategories = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchExperimentCategoriesService.fetchCategories().subscribe(function (responseData) {
            console.log("responseData", responseData);
            _this.experimentCategories = responseData;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.getProjectsList = function (tag) {
        this.fetchExperimentsWithTagService.currentExperimentTag = tag;
        this.router.navigateByUrl("/experiments", tag);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_1__["FetchExperimentCategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_3__["FetchExperimentsWithTagService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../src/app/components/experiments-name/experiments-name.component.css":
/*!*****************************************************************************!*\
  !*** ../src/app/components/experiments-name/experiments-name.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardsGridrid {\r\n  flex-wrap:wrap;\r\n  width:100px;\r\n}\r\n"

/***/ }),

/***/ "../src/app/components/experiments-name/experiments-name.component.html":
/*!******************************************************************************!*\
  !*** ../src/app/components/experiments-name/experiments-name.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"cardsGrid\" *ngFor=\"let experiment of experiments\">\n  <mat-card>\n    <mat-card-title>\n      {{experiment.title}}\n    </mat-card-title>\n    <mat-card-content>\n      {{experiment.description}}\n    </mat-card-content>\n  </mat-card>\n\n</div>\n</html>\n"

/***/ }),

/***/ "../src/app/components/experiments-name/experiments-name.component.ts":
/*!****************************************************************************!*\
  !*** ../src/app/components/experiments-name/experiments-name.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExperimentsNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsNameComponent", function() { return ExperimentsNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetchExperimentsWithTag/fetch-experiments-with-tag.service */ "../src/app/services/fetchExperimentsWithTag/fetch-experiments-with-tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperimentsNameComponent = /** @class */ (function () {
    function ExperimentsNameComponent(fetchExperimentsWithTagService) {
        this.fetchExperimentsWithTagService = fetchExperimentsWithTagService;
        this.currentExperimentTag = '';
        this.experiments = [];
    }
    ExperimentsNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentExperimentTag = this.fetchExperimentsWithTagService.currentExperimentTag;
        console.log(this.currentExperimentTag);
        this.fetchExperimentsWithTagService.getExperimentsWithTag().subscribe(function (responseData) {
            console.log("projects with tag", responseData);
            _this.experiments = responseData;
        }, function (err) {
            console.log(err);
        });
    };
    ExperimentsNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiments-name',
            template: __webpack_require__(/*! ./experiments-name.component.html */ "../src/app/components/experiments-name/experiments-name.component.html"),
            styles: [__webpack_require__(/*! ./experiments-name.component.css */ "../src/app/components/experiments-name/experiments-name.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetchExperimentsWithTag_fetch_experiments_with_tag_service__WEBPACK_IMPORTED_MODULE_1__["FetchExperimentsWithTagService"]])
    ], ExperimentsNameComponent);
    return ExperimentsNameComponent;
}());



/***/ }),

/***/ "../src/app/components/experiments/add-exp/add-exp.component.css":
/*!***********************************************************************!*\
  !*** ../src/app/components/experiments/add-exp/add-exp.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exp-form {\r\n  width: 100%;\r\n}\r\n.recommendations{\r\n  position: relative;\r\n  padding: 50px;\r\n}\r\n.mat-card{\r\n  color: aliceblue;\r\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n  display: block;\r\n  position: relative;\r\n  padding: 36px;\r\n  border-radius: 2px;\r\n}\r\n.full-width {\r\n  width: 100%;\r\n}\r\ntable {\r\n  width: 550px;\r\n}\r\nth {\r\n  text-align: left;\r\n}\r\ntd, th {\r\n  padding-left: 15px;\r\n}\r\n.classificationSelection{\r\n  margin-top: 15px;\r\n}\r\n.classificationSelection label {\r\n  padding: 5px;\r\n}\r\n.classificationCtrl {\r\n  display: flex;\r\n  flex-flow: row-reverse;\r\n}\r\n.classificationCtrl button {\r\n  margin: 5px;\r\n}\r\n.mat-dialog-container {\r\n  height: 100px;\r\n}\r\n.mat-dialog-actions{\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  outline-color: initial;\r\n  outline-style: initial;\r\n  outline-width: 0px;\r\n  border: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  text-decoration: none;\r\n  vertical-align: baseline;\r\n  text-align: center;\r\n  margin: 31px;\r\n  min-width: 149px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n  border-radius: 2px;\r\n  overflow: visible;\r\n}\r\n"

/***/ }),

/***/ "../src/app/components/experiments/add-exp/add-exp.component.html":
/*!************************************************************************!*\
  !*** ../src/app/components/experiments/add-exp/add-exp.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title align=\"center\">*New Experiment</h3>\r\n<div class=\"recommendations\">\r\n  <p> <b>Innovation. </b>  This world is looking for the great things you have develop, so build products not just projects.</p>\r\n  <p> <b>Open-source.</b> Open-sourcing your experiment, can inspire other coders.</p>\r\n  <p> <b>Amaze Us.   </b>Community is activily looking for what amazing you are developing</p>\r\n</div>\r\n<mat-card class=\"exp-card\">\r\n  <form class=\"exp-form\">\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"title\" required placeholder=\"Title of Experiment\"\r\n               name=\"title\">\r\n        <!--<mat-error>Already in system. Use new Title</mat-error>-->\r\n        <!--<mat-hint>Available</mat-hint>-->\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"description\" required placeholder=\"Description of Experiment\"\r\n               name=\"description\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field class=\"full-group\">\r\n        <mat-select class=\"form-control\" id=\"Catergory\"  placeholder=\"Choose Catergory\" name=\"Catergory\" >\r\n          <mat-option *ngFor=\"let category of experimentCategories\" value=\"{{category.displayName}}\">\r\n            {{category.displayName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"my-story\" required placeholder=\"What's your project story\"\r\n               name=\"my-story\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"project-url\" required placeholder=\"URL\"\r\n               name=\"project-url\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"youtube-url\" required placeholder=\"Youtube Link\"\r\n               name=\"project-url\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"repository\" required placeholder=\"Source code\"\r\n               name=\"repository\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"full-group\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"screenshots\" required placeholder=\"Screen shots\"\r\n               name=\"screenshots\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-dialog-actions>\r\n      <button type=\"button\" mat-button color=\"primary\">\r\n        Save\r\n      </button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "../src/app/components/experiments/add-exp/add-exp.component.ts":
/*!**********************************************************************!*\
  !*** ../src/app/components/experiments/add-exp/add-exp.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpComponent", function() { return AddExpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fetchCategoriesService/fetch-experiment-categories.service */ "../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddExpComponent = /** @class */ (function () {
    function AddExpComponent(fetchExperimentCategoriesService) {
        this.fetchExperimentCategoriesService = fetchExperimentCategoriesService;
        this.experimentCategories = [];
    }
    AddExpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchExperimentCategoriesService.fetchCategories().subscribe(function (responseData) {
            _this.experimentCategories = responseData;
            console.log(_this.experimentCategories);
        });
    };
    AddExpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-exp',
            template: __webpack_require__(/*! ./add-exp.component.html */ "../src/app/components/experiments/add-exp/add-exp.component.html"),
            styles: [__webpack_require__(/*! ./add-exp.component.css */ "../src/app/components/experiments/add-exp/add-exp.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_1__["FetchExperimentCategoriesService"]])
    ], AddExpComponent);
    return AddExpComponent;
}());



/***/ }),

/***/ "../src/app/components/experiments/edit-exp/edit-exp.component.css":
/*!*************************************************************************!*\
  !*** ../src/app/components/experiments/edit-exp/edit-exp.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../src/app/components/experiments/edit-exp/edit-exp.component.html":
/*!**************************************************************************!*\
  !*** ../src/app/components/experiments/edit-exp/edit-exp.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-exp works!\n</p>\n"

/***/ }),

/***/ "../src/app/components/experiments/edit-exp/edit-exp.component.ts":
/*!************************************************************************!*\
  !*** ../src/app/components/experiments/edit-exp/edit-exp.component.ts ***!
  \************************************************************************/
/*! exports provided: EditExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpComponent", function() { return EditExpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditExpComponent = /** @class */ (function () {
    function EditExpComponent() {
    }
    EditExpComponent.prototype.ngOnInit = function () {
    };
    EditExpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-exp',
            template: __webpack_require__(/*! ./edit-exp.component.html */ "../src/app/components/experiments/edit-exp/edit-exp.component.html"),
            styles: [__webpack_require__(/*! ./edit-exp.component.css */ "../src/app/components/experiments/edit-exp/edit-exp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditExpComponent);
    return EditExpComponent;
}());



/***/ }),

/***/ "../src/app/components/header/header.component.css":
/*!*********************************************************!*\
  !*** ../src/app/components/header/header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: #37474f;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  padding: 0 16px;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n}\r\n\r\n.title {\r\n  color: white;\r\n  font-size: 1.92rem;\r\n  line-height: 225%;\r\n  margin: 1.946667rem 0 1.168rem 0;\r\n\r\n}\r\n\r\n.example-icon {\r\n  color: white;\r\n  padding: 0 14px;\r\n  font-size: 36px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.addExperiment{\r\n  color: #64ffda !important;\r\n  font-size: 19px;\r\n  line-height: 225%;\r\n  margin: 0.946667rem 125px 1.168rem 0;\r\n}\r\n\r\n.signIn{\r\n  padding-right: 12px;\r\n  color: white;\r\n  font-size: 0.92rem;\r\n  line-height: 225%;\r\n  margin: 0.946667rem 1.168rem 1.168rem 0;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "../src/app/components/header/header.component.html":
/*!**********************************************************!*\
  !*** ../src/app/components/header/header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n<mat-toolbar-row>\n  <span class=\"title\">{{title}}</span>\n  <span class=\"example-spacer\"></span>\n  <div class=\"categorySelect\">\n    <select *ngFor=\"let category of experimentCategories\">\n      <option value=\"\">{{category.displayName}}<option>\n    </select>\n\n  </div>\n  <mat-button class=\"addExperiment\" (click)=\"addNewExperiment()\">\n    Submit Experiment\n  </mat-button>\n  <mat-button class=\"signIn\" (click)=\"userSignIn()\">\n    Sign in\n  </mat-button>\n</mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "../src/app/components/header/header.component.ts":
/*!********************************************************!*\
  !*** ../src/app/components/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loginService_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loginService/login-service.service */ "../src/app/services/loginService/login-service.service.ts");
/* harmony import */ var _services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fetchCategoriesService/fetch-experiment-categories.service */ "../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, loginService, fetchExperimentCategoriesService) {
        this.router = router;
        this.loginService = loginService;
        this.fetchExperimentCategoriesService = fetchExperimentCategoriesService;
        this.title = "Propeller";
        this.experimentCategories = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchExperimentCategoriesService.fetchCategories().subscribe(function (responseData) {
            _this.experimentCategories = responseData;
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.goHome = function () {
        this.router.navigateByUrl('/');
    };
    HeaderComponent.prototype.userSignIn = function () {
        this.loginService.userLogin().subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.addNewExperiment = function () {
        this.router.navigate(['/', 'add-experiment']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "../src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_loginService_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _services_fetchCategoriesService_fetch_experiment_categories_service__WEBPACK_IMPORTED_MODULE_3__["FetchExperimentCategoriesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../src/app/components/login-user/login-user.component.css":
/*!*****************************************************************!*\
  !*** ../src/app/components/login-user/login-user.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../src/app/components/login-user/login-user.component.html":
/*!******************************************************************!*\
  !*** ../src/app/components/login-user/login-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login-user works!\n</p>\n"

/***/ }),

/***/ "../src/app/components/login-user/login-user.component.ts":
/*!****************************************************************!*\
  !*** ../src/app/components/login-user/login-user.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginUserComponent = /** @class */ (function () {
    function LoginUserComponent() {
    }
    LoginUserComponent.prototype.ngOnInit = function () {
    };
    LoginUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-user',
            template: __webpack_require__(/*! ./login-user.component.html */ "../src/app/components/login-user/login-user.component.html"),
            styles: [__webpack_require__(/*! ./login-user.component.css */ "../src/app/components/login-user/login-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginUserComponent);
    return LoginUserComponent;
}());



/***/ }),

/***/ "../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts":
/*!*****************************************************************************************!*\
  !*** ../src/app/services/fetchCategoriesService/fetch-experiment-categories.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: FetchExperimentCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchExperimentCategoriesService", function() { return FetchExperimentCategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchExperimentCategoriesService = /** @class */ (function () {
    function FetchExperimentCategoriesService(http, router) {
        this.http = http;
        this.router = router;
    }
    FetchExperimentCategoriesService.prototype.fetchCategories = function () {
        return this.http.get('api/dashboard/category');
    };
    FetchExperimentCategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FetchExperimentCategoriesService);
    return FetchExperimentCategoriesService;
}());



/***/ }),

/***/ "../src/app/services/fetchExperimentsWithTag/fetch-experiments-with-tag.service.ts":
/*!*****************************************************************************************!*\
  !*** ../src/app/services/fetchExperimentsWithTag/fetch-experiments-with-tag.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: FetchExperimentsWithTagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchExperimentsWithTagService", function() { return FetchExperimentsWithTagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchExperimentsWithTagService = /** @class */ (function () {
    function FetchExperimentsWithTagService(http, router) {
        this.http = http;
        this.router = router;
        this.currentExperimentTag = '';
    }
    FetchExperimentsWithTagService.prototype.getExperimentsWithTag = function () {
        return this.http.get("api/projects/" + this.currentExperimentTag);
    };
    FetchExperimentsWithTagService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FetchExperimentsWithTagService);
    return FetchExperimentsWithTagService;
}());



/***/ }),

/***/ "../src/app/services/loginService/login-service.service.ts":
/*!*****************************************************************!*\
  !*** ../src/app/services/loginService/login-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(http) {
        this.http = http;
    }
    LoginServiceService.prototype.userLogin = function () {
        return this.http.get("api/login/gmail");
    };
    LoginServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginServiceService);
    return LoginServiceService;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\codebasePTC\demo\client\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map