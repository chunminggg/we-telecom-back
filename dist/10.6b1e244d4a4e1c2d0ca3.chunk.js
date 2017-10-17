webpackJsonp([10],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  "data-v-e1e93412",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/productManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] productManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1e93412", Component.options)
  } else {
    hotAPI.reload("data-v-e1e93412", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
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
            modal2: false,
            //显示类型过滤
            showTypeSelected: 0,
            sortArray: [],
            rawDataArray: [],
            modifyObj: {
                isSort: false,
                isFollowTeam: false,
                isFreeTravel: false,
                isSpecialPrice: false,
                isRecommend: false
            },
            showTypes: [{
                label: '全部',
                value: 0
            }],
            columns: [{
                title: '名称',
                key: 'name',
                width: 150
            }, {
                title: '价格',
                key: 'price'
            }, {
                title: '发布日期',
                key: 'startDate'
            }, {
                title: '修改日期',
                key: 'endDate'
            }, {
                title: '是否置顶',
                key: 'isRecommend'
            }, {
                title: '分类',
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
                                // this.setFirst(params)
                                this.sortOperation(params);
                            }
                        }
                    }, '操作')]);
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
        // 表格数据过滤
        checkGroupChange(checkGroups) {
            let _self = this;
            let filterArray = new Set();
            for (let myObj of _self.rawDataArray) {
                let isSign = true;
                for (let obj of checkGroups) {
                    if (myObj[obj] != true) {
                        isSign = false;
                    }
                }
                if (isSign) {
                    filterArray.add(myObj);
                }
            }
            _self.dataArray = [...filterArray];
            if (!checkGroups.length) {
                _self.dataArray = _self.rawDataArray;
            }
        },
        configData() {
            var _self = this;

            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getProductList(data => {

                _self.dataArray = data;
                _self.rawDataArray = data;
            }, error => {
                _self.$Message.error('获取数据失败请重试');
            });
        },

        congfigChooseType() {
            var _self = this;
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getThemelist().then(data => {
                if (data.length) {
                    _self.showTypes = [{
                        label: '全部',
                        value: 0
                    }];
                    // _self.showTypes.push({ label: '全部', value: 0 })
                    // _self.showTypeSelected = 0
                    data.forEach(obj => {
                        _self.showTypes.push({
                            label: obj.attributes.name,
                            value: obj.attributes.type
                        });
                    });
                }
            });
        },
        sortOperation(params) {
            this.modal2 = true;
            this.productNumber = params.row.onleyId;
            this.uid = params.row.uid;
            let rowObj = params.row;
            this.modifyObj.isSort = rowObj.isSort || false;
            this.modifyObj.isSpecialPrice = rowObj.isSpecialPrice || false;
            this.modifyObj.isFollowTeam = rowObj.isFollowTeam || false;
            this.modifyObj.isFreeTravel = rowObj.isFreeTravel || false;
            this.modifyObj.isRecommend = rowObj.isRecommend || false;
        },
        //修改
        modfifyProduct(params) {
            let productId = params.row.uid;
            this.$router.push({
                name: 'upload',
                params: {
                    'productId': productId
                }
            });
        },
        //删除
        deleteProduct(params) {
            this.modal1 = true;
            this.productNumber = params.row.onleyId;
            this.uid = params.row.uid;
        },
        //确认修改分类
        confirmOperation() {
            this.setFirst();
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
            myValue = this.showTypeSelected;
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
        setFirst() {
            var _self = this;

            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].setFirstProduct(this.uid, this.modifyObj).then(data => {
                this.$Message.success('操作成功');
                _self.showTypeChange();
            }, error => {
                this.$Message.error('操作失败');
            });
        }
    }

});

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 253:
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
  }, [_vm._v("分类:")])]), _vm._v(" "), _c('Col', {
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
  }))], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "2"
    }
  }, [_c('h4', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_vm._v("过滤:")])]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "margin": "0.5rem"
    },
    attrs: {
      "span": "9"
    }
  }, [_c('CheckboxGroup', {
    on: {
      "on-change": _vm.checkGroupChange
    },
    model: {
      value: (_vm.sortArray),
      callback: function($$v) {
        _vm.sortArray = $$v
      },
      expression: "sortArray"
    }
  }, [_c('Checkbox', {
    attrs: {
      "label": "isSort"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "arrow-up-a"
    }
  }), _vm._v(" "), _c('span', [_vm._v("置顶")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Table', {
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
  }, [_c('p', [_vm._v("确认将编号为" + _vm._s(_vm.productNumber) + "的产品删除吗")])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "产品分类"
    },
    on: {
      "on-ok": _vm.confirmOperation
    },
    model: {
      value: (_vm.modal2),
      callback: function($$v) {
        _vm.modal2 = $$v
      },
      expression: "modal2"
    }
  }, [_c('label', [_vm._v("是否置顶:")]), _vm._v(" "), _c('i-switch', {
    model: {
      value: (_vm.modifyObj.isSort),
      callback: function($$v) {
        _vm.modifyObj.isSort = $$v
      },
      expression: "modifyObj.isSort"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e1e93412", module.exports)
  }
}

/***/ })

});