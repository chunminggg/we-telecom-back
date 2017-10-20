webpackJsonp([5],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(251),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/mainScroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mainScroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bab1c99a", Component.options)
  } else {
    hotAPI.reload("data-v-bab1c99a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 187:
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
    props: ['uploadList'],
    data() {
        return {
            // uploadList:[],
            visible: false,
            imgName: ''
        };
    },
    created() {},
    methods: {
        handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove(file, index) {
            // 从 upload 实例删除数据
            this.uploadList.splice(index, 1);
        },
        handleSuccess(res, file) {},
        handleProcess(event, file, fileList) {},
        handleFormatError(file) {
            this.$Notice.warning({
                title: '文件格式不正确'
                // desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload(file) {
            var _self = this;

            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].uploadImage(file, function (data) {

                _self.uploadList.push({ url: data.attributes.url });
                _self.$emit('send-image', _self.uploadList);
            });
            return false;
        }
    }
});

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(188)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/imageUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] imageUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc2c0682", Component.options)
  } else {
    hotAPI.reload("data-v-fc2c0682", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Modal', {
    attrs: {
      "title": "查看图片"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [(_vm.visible) ? _c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": _vm.imgName
    }
  }) : _vm._e()]), _vm._v(" "), _c('Upload', {
    attrs: {
      "multiple": "",
      "type": "drag",
      "show-upload-list": true,
      "format": ['jpg', 'jpeg', 'png'],
      "on-progress": _vm.handleProcess,
      "on-format-error": _vm.handleFormatError,
      "on-exceeded-size": _vm.handleMaxSize,
      "before-upload": _vm.handleBeforeUpload,
      "action": "http://upload.qiniu.com/"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "20px 0"
    }
  }, [_c('Icon', {
    staticStyle: {
      "color": "#3399ff"
    },
    attrs: {
      "type": "ios-cloud-upload",
      "size": "52"
    }
  }), _vm._v(" "), _c('p', [_vm._v("点击或将文件拖拽到这里上传")])], 1)]), _vm._v(" "), _vm._l((_vm.uploadList), function(item, index) {
    return _c('div', {
      staticClass: "demo-upload-list"
    }, [_c('img', {
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "demo-upload-list-cover"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-eye-outline"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleView(item.url)
        }
      }
    }), _vm._v(" "), _c('Icon', {
      attrs: {
        "type": "ios-trash-outline"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleRemove(item, index)
        }
      }
    })], 1)])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fc2c0682", module.exports)
  }
}

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageUpload__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__imageUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_network_js__ = __webpack_require__(8);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        imageUpload: __WEBPACK_IMPORTED_MODULE_0__imageUpload___default.a
    },
    data() {
        return {
            imageArray: []
        };
    },
    created() {
        var _self = this;
        __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].getMainScroll(data => {
            _self.imageArray = data[0].imageArray;
        });
    },
    methods: {
        submitData() {
            var _self = this,
                dict = {
                'imageArray': _self.imageArray
            };
            __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].uploadMainScroll(dict, data => {
                _self.$Message.success('保存成功');
            });
        },
        getImageArray(data) {
            this.imageArray = data;
        }
    }
});

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('image-upload', {
    staticClass: "product",
    attrs: {
      "uploadList": _vm.imageArray
    },
    on: {
      "send-image": _vm.getImageArray
    }
  }), _vm._v(" "), _c('Button', {
    staticClass: "product",
    attrs: {
      "type": "success",
      "long": ""
    },
    on: {
      "click": _vm.submitData
    }
  }, [_vm._v("确认提交")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bab1c99a", module.exports)
  }
}

/***/ })

});