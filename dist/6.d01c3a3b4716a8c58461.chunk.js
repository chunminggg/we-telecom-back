webpackJsonp([6],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(219),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  "data-v-0dc71dcb",
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/users.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] users.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dc71dcb", Component.options)
  } else {
    hotAPI.reload("data-v-0dc71dcb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_network_js__ = __webpack_require__(8);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            columns: [{
                title: '微信昵称',
                key: 'nickName'
            }, {
                title: '手机号',
                key: 'mobilePhoneNumber'
            }, {
                title: '加入时间',
                key: 'createdAt',
                sortable: true
            }, {
                title: '上次登录时间',
                key: 'updatedAt',
                sortable: true

            }],
            dataArray: []
        };
    },
    created() {
        this.configData();
    },
    methods: {
        configData() {
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getUsers(data => {
                _self.dataArray = data;
            }, error => {});
        }
    }
});

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('Table', {
    attrs: {
      "columns": _vm.columns,
      "data": _vm.dataArray
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0dc71dcb", module.exports)
  }
}

/***/ })

});