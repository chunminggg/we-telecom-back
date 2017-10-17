webpackJsonp([4],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(217),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  "data-v-0cef85e8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/theme.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] theme.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cef85e8", Component.options)
  } else {
    hotAPI.reload("data-v-0cef85e8", Component.options)
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
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/imageUpload.vue"
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

/***/ 217:
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
    components: {
        imageUpload: __WEBPACK_IMPORTED_MODULE_0__imageUpload___default.a
    },
    data() {
        return {
            themeName: '',
            themeBrief: '',
            imageArray: [],
            onlyId: ''
        };
    },
    created() {
        var _self = this;

        if (this.$route.params.productId != undefined) {
            _self.onlyId = this.$route.params.productId;
            __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].getDetailThemm(_self.onlyId).then(data => {
                _self.themeName = data.attributes.name;
                _self.themeBrief = data.attributes.brief;
                _self.imageArray = data.attributes.imageArray;
            });
        }
    },
    methods: {
        getImageArray(data) {

            this.imageArray = data;
        },
        submitData() {
            var _self = this;
            var dict = {
                'name': _self.themeName,
                'brief': _self.themeBrief,
                'imageArray': _self.imageArray,
                'onlyId': _self.onlyId
            };
            if (!_self.themeName.length) {
                _self.$Message.error('名称未填写');
                return;
            }
            if (!_self.themeBrief.length) {
                _self.$Message.error('简称未填写');
                return;
            }
            if (!_self.imageArray.length) {
                _self.$Message.error('图片至少上传一张');
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].uploadTheme(dict, data => {
                _self.$Message.success('上传成功');
                setTimeout(function () {
                    _self.$router.go(0);
                }, 1000);
            }, () => {
                _self.$Message.error('上传失败');
            });
        }

    }
});

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": "分类名称(例:20M宽带)"
    },
    model: {
      value: (_vm.themeName),
      callback: function($$v) {
        _vm.themeName = $$v
      },
      expression: "themeName"
    }
  }), _vm._v(" "), _c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": "分类简介"
    },
    model: {
      value: (_vm.themeBrief),
      callback: function($$v) {
        _vm.themeBrief = $$v
      },
      expression: "themeBrief"
    }
  }), _vm._v(" "), _c('image-upload', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0cef85e8", module.exports)
  }
}

/***/ })

});