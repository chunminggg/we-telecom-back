webpackJsonp([8],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/reserveList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reserveList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3491a406", Component.options)
  } else {
    hotAPI.reload("data-v-3491a406", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_network_js__ = __webpack_require__(8);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            columns: [{
                title: '客户名称',
                key: 'name'
            }, {
                title: '预定人数',
                key: 'peopleCount'
            }, {
                title: '电话',
                key: 'phoneNumber'
            }, {
                title: '提交时间',
                key: 'createdAt'
            }, {
                title: '产品编号',
                key: 'productNumber'

            }, {
                title: '产品名称',
                key: 'productName'
            }],
            dataArray: []

        };
    },
    created() {
        var _self = this;
        __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getUnReserveList(data => {
            if (data.length) _self.dataArray = data;
        }, error => {});
    },
    methods: {}
});

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('Table', {
    attrs: {
      "height": "500",
      "columns": _vm.columns,
      "data": _vm.dataArray
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3491a406", module.exports)
  }
}

/***/ })

});