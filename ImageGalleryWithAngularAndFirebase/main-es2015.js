(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/image-list/image-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/image-list/image-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"imageList\">\n    <tr *ngFor=\"let i of rowIndexArray\">\n      <td>\n        <div class=\"imagebox\" *ngIf=\"i==0\">\n          <a routerLink=\"/image/upload\">\n            <img src=\"assets/img/new_image.jpg\" class=\"img-fluid\">\n            <span class=\"imagebox-desc\">Insert New Image</span></a>\n        </div>\n        <div class=\"imagebox\" *ngIf=\"i!=0\">\n          <img [src]=\"imageList[3*i-1].imageUrl\" class=\"img-fluid\">\n          <span class=\"imagebox-desc\">{{imageList[3*i-1].caption}}</span>\n        </div>\n      </td>\n      <td *ngIf=\"imageList[3*i]\">\n        <div class=\"imagebox\">\n          <img [src]=\"imageList[3*i].imageUrl\" class=\"img-fluid\">\n          <span class=\"imagebox-desc\">{{imageList[3*i].caption}}</span>\n        </div>\n      </td>\n      <td *ngIf=\"imageList[3*i+1]\">\n        <div class=\"imagebox\">\n          <img [src]=\"imageList[3*i+1].imageUrl\" class=\"img-fluid\">\n          <span class=\"imagebox-desc\">{{imageList[3*i+1].caption}}</span>\n        </div>\n      </td>\n    </tr>\n  </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/image/image.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/image/image.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width:25rem\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"formTemplate\" (submit)=\"onSubmit(formTemplate.value)\">\n        <div class=\"text-center\">\n          <img [src]=\"imgSrc\" width=\"350px\" height=\"250px\" (click)=\"fileUploader.click()\">\n        </div>\n        <div class=\"form-group\">\n          <label>Select file to upload</label>\n          <input type=\"file\" accept=\"image/*\" class=\"form-control\" #fileUploader formControlName=\"imageUrl\"\n            (change)=\"showPreview($event)\">\n          <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.imageUrl.errors?.required\">This field is required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Caption\">\n          <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.caption.errors?.required\">This field is required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <select formControlName=\"category\" class=\"form-control\">\n            <option value=\"Animal\">Animal</option>\n            <option value=\"Vehicle\">Vehicle</option>\n            <option value=\"Bird\">Bird</option>\n          </select>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <a routerLink=\"/image/list\" class=\"btn btn-primary btn-block float-right\">Go To Gallery</a>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <button type=\"submit\" class=\"btn btn-success btn-block float-right\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/images.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/images.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <blockquote class=\"blockquote\">\n        <p class=\"mb-0 h3 display-4\">Image Gallery</p>\n        <footer class=\"blockquote-footer\">with <cite title=\"Source Title\">Firebase Storage</cite> and <cite\n            title=\"Source Title\">Angular 7</cite></footer>\n      </blockquote>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/image/image.component */ "./src/app/images/image/image.component.ts");
/* harmony import */ var _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/image-list/image-list.component */ "./src/app/images/image-list/image-list.component.ts");






const routes = [
    { path: '', redirectTo: 'image/upload', pathMatch: 'full' },
    {
        path: 'image', component: _images_images_component__WEBPACK_IMPORTED_MODULE_3__["ImagesComponent"], children: [
            { path: 'upload', component: _images_image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"] },
            { path: 'list', component: _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ImageGalleryWithAngularAndFirebase';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npm-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/image/image.component */ "./src/app/images/image/image.component.ts");
/* harmony import */ var _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/image-list/image-list.component */ "./src/app/images/image-list/image-list.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _images_images_component__WEBPACK_IMPORTED_MODULE_8__["ImagesComponent"],
            _images_image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
            _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_10__["ImageListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/images/image-list/image-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/images/image-list/image-list.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/image.service */ "./src/app/shared/image.service.ts");



let ImageListComponent = class ImageListComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.imageDetailList.snapshotChanges().subscribe(list => {
            this.imageList = list.map(item => { return item.payload.val(); });
            this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length + 1) / 3)).keys());
        });
    }
};
ImageListComponent.ctorParameters = () => [
    { type: src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npm-image-list',
        template: __webpack_require__(/*! raw-loader!./image-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/image-list/image-list.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], ImageListComponent);



/***/ }),

/***/ "./src/app/images/image/image.component.ts":
/*!*************************************************!*\
  !*** ./src/app/images/image/image.component.ts ***!
  \*************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ImageComponent = class ImageComponent {
    constructor(storage, service) {
        this.storage = storage;
        this.service = service;
        this.selectedImage = null;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.resetForm();
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.imgSrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = 'assets/img/image_placeholder.jpg';
            this.selectedImage = null;
        }
    }
    onSubmit(formValue) {
        this.isSubmitted = true;
        if (this.formTemplate.valid) {
            var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    formValue['imageUrl'] = url;
                    this.service.insertImageDetails(formValue);
                    this.resetForm();
                });
            })).subscribe();
        }
    }
    get formControls() {
        return this.formTemplate['controls'];
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            caption: '',
            imageUrl: '',
            category: 'Animal'
        });
        this.imgSrc = 'assets/img/image_placeholder.jpg';
        this.selectedImage = null;
        this.isSubmitted = false;
    }
};
ImageComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }
];
ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npm-image',
        template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/image/image.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]])
], ImageComponent);



/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");



let ImagesComponent = class ImagesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getImageDetailList();
    }
};
ImagesComponent.ctorParameters = () => [
    { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npm-images',
        template: __webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/images.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], ImagesComponent);



/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");



let ImageService = class ImageService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    getImageDetailList() {
        this.imageDetailList = this.firebase.list('imageDetails');
    }
    insertImageDetails(imageDetails) {
        this.imageDetailList.push(imageDetails);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], ImageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC-xZAVz_5kH3wmYTcaZGMdZp_Ep6TlpeY",
        authDomain: "angular-image-gallery-924d7.firebaseapp.com",
        databaseURL: "https://angular-image-gallery-924d7.firebaseio.com",
        projectId: "angular-image-gallery-924d7",
        storageBucket: "angular-image-gallery-924d7.appspot.com",
        messagingSenderId: "645914524499",
        appId: "1:645914524499:web:5886fb060a715e6a127fa6",
        measurementId: "G-MZF0VRYT5T"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\newtechnosaved\angularidentiycore2\UserAsp.NetAngular11\ImageGalleryWithAngularAndFirebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map