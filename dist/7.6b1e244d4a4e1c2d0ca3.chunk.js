webpackJsonp([7],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(254),
  /* scopeId */
  "data-v-ff3e55de",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/themeManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] themeManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff3e55de", Component.options)
  } else {
    hotAPI.reload("data-v-ff3e55de", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_network_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
//
//
//
//
//
//
//
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
            uid: '',
            productNumber: '',
            modal1: false,
            columns: [{
                title: '名称',
                key: 'name'
            }, {
                title: '概述',
                key: 'briefInfo'
            }, {
                title: '最新修改时间',
                key: 'updateDate'

            }, {
                title: '排序',
                key: 'sortAction',
                width: 75,
                align: 'center',
                render: (h, params) => {
                    return h('div', [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.sortTheme(params);
                            }
                        }
                    }, '置顶')]);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.modfifyProduct(params);
                            }
                        }
                    }, '修改'), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.deleteProduct(params);
                            }
                        }
                    }, '删除')]);
                }
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
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getThemelist().then(data => {

                data.forEach(obj => {
                    let dict = {
                        name: obj.attributes.name,
                        briefInfo: obj.attributes.brief,
                        updateDate: __WEBPACK_IMPORTED_MODULE_1_moment___default()(obj.updatedAt.toISOString()).format('LLLL'),
                        onlyId: obj.id
                    };
                    _self.dataArray.push(dict);
                });
            }, error => {
                _self.$Message.error('获取数据失败');
            });
        },
        //修改
        modfifyProduct(params) {
            //  this.$Message.error('您没有权限')
            // return
            let productId = params.row.onlyId;

            this.$router.push({ name: 'theme', params: { 'productId': productId } });
        },
        //删除
        deleteProduct(params) {

            this.modal1 = true;
            this.productNumber = params.row.onlyId;
            this.uid = params.row.onlyId;
        },
        //置顶
        sortTheme(params) {
            var _self = this;
            let uid = params.row.onlyId;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].setFirstTheme(uid).then(data => {
                _self.$Message.success('置顶成功');
            }, error => {
                _self.$Message.error('置顶失败');
            });
        },
        removeProdcut(uid) {
            this.$Message.error('您没有权限');
            return;
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].deleteProductWithId(this.uid, () => {

                _self.configData();
            });
        }
    }

});

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 254:
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
  }), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "删除操作"
    },
    on: {
      "on-ok": _vm.removeProdcut
    },
    model: {
      value: (_vm.modal1),
      callback: function($$v) {
        _vm.modal1 = $$v
      },
      expression: "modal1"
    }
  }, [_c('p', [_vm._v("确认将编号为" + _vm._s(_vm.productNumber) + "的产品删除吗")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ff3e55de", module.exports)
  }
}

/***/ })

});