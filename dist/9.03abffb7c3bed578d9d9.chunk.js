webpackJsonp([9],{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  "data-v-16a33ae0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/productStatis.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] productStatis.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16a33ae0", Component.options)
  } else {
    hotAPI.reload("data-v-16a33ae0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
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
            //显示类型过滤
            showTypeSelected: 0,
            showTypes: [{ label: '全部', value: 0 }],
            columns: [{
                title: '名称',
                key: 'name'
            }, {
                title: '点击次数',
                key: 'countNumber'
            }, {
                title: '编号',
                key: 'onleyId'
            }, {
                title: '价格',
                key: 'price'
            }, {
                title: '排序',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.setFirst(params);
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
                        style: {},
                        on: {
                            click: () => {
                                this.modfifyProduct(params);
                            }
                        }
                    }, '修改')]);
                }
            }],
            dataArray: []
        };
    },
    created() {
        this.configData();
        this.congfigChooseType();
    },
    methods: {
        configData() {
            var _self = this;

            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getProductList(data => {
                _self.dataArray = data;
            }, error => {
                _self.$Message.error('获取数据失败请重试');
            });
        },
        congfigChooseType() {
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getThemelist().then(data => {
                if (data.length) {
                    _self.showTypes = [{ label: '全部', value: 0 }];
                    // _self.showTypes.push({ label: '全部', value: 0 })
                    // _self.showTypeSelected = 0
                    data.forEach(obj => {
                        _self.showTypes.push({ label: obj.attributes.name, value: obj.attributes.type });
                    });
                }
            });
        },
        //修改
        modfifyProduct(params) {
            let productId = params.row.uid;
            this.$router.push({ name: 'upload', params: { 'productId': productId } });
        },
        //删除
        deleteProduct(params) {
            this.modal1 = true;
            this.productNumber = params.row.onleyId;
            this.uid = params.row.uid;
        },
        removeProdcut(uid) {
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].deleteProductWithId(this.uid, () => {

                _self.configData();
            });
        },
        //选中值改变
        showTypeChange(myValue) {
            var _self = this;
            if (myValue == 0) {
                _self.configData();
            } else {
                __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getDetailItemList(myValue).then(data => {
                    var netDataArray = [];
                    for (var model of data) {
                        // model.attributes.endDate = model.attributes.endDate.toISOString().slice(0, 10)
                        // model.attributes.startDate = model.attributes.startDate.toISOString().slice(0, 10)
                        model.attributes.uid = model.id;
                        netDataArray.push(model.attributes);
                    }
                    _self.dataArray = netDataArray;
                }, error => {});
            }
        },
        //置顶
        setFirst(params) {
            this.productNumber = params.row.uid;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].setFirstProduct(this.productNumber).then(data => {
                this.$Message.success('首页置顶成功');
            }, error => {
                this.$Message.error('置顶失败');
            });
        }
    }

});

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "2"
    }
  }, [_c('h4', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_vm._v("显示过滤：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    on: {
      "on-change": _vm.showTypeChange
    },
    model: {
      value: (_vm.showTypeSelected),
      callback: function($$v) {
        _vm.showTypeSelected = $$v
      },
      expression: "showTypeSelected"
    }
  }, _vm._l((_vm.showTypes), function(item) {
    return _c('Option', {
      key: item.value,
      attrs: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.label))])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Table', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-16a33ae0", module.exports)
  }
}

/***/ })

});