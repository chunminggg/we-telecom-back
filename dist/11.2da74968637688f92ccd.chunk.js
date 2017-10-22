webpackJsonp([11],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(224)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(244),
  /* scopeId */
  "data-v-23773265",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/newsManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newsManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23773265", Component.options)
  } else {
    hotAPI.reload("data-v-23773265", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
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
                title: '作者',
                key: 'onleyId'
            }, {
                title: '创建时间',
                key: 'startDate'

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
                    }, '配置')]);
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

            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getArticleList(data => {
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
            this.$router.push({ name: 'news', params: { 'productId': productId } });
        },
        //删除
        deleteProduct(params) {
            this.modal1 = true;
            this.productNumber = params.row.onleyId;
            this.uid = params.row.uid;
        },
        removeProdcut(uid) {
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].deleteNewsWithId(this.uid, () => {

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
                this.$Message.success('置顶成功');
            }, error => {
                this.$Message.error('置顶失败');
            });
        }
    }

});

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 244:
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
  }, [_c('p', [_vm._v("确定删除文章吗")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-23773265", module.exports)
  }
}

/***/ })

});