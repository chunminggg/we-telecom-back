webpackJsonp([1],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(249),
  /* scopeId */
  "data-v-7b0fc146",
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b0fc146", Component.options)
  } else {
    hotAPI.reload("data-v-7b0fc146", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_network_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_mainScroll__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_mainScroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_mainScroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_mainNavitor__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_mainNavitor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_mainNavitor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tagView__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tagView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_tagView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_recommendList__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_recommendList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__main_recommendList__);
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
    components: {
        mainScroll: __WEBPACK_IMPORTED_MODULE_1__main_mainScroll___default.a,
        mainNavitor: __WEBPACK_IMPORTED_MODULE_2__main_mainNavitor___default.a,
        tagView: __WEBPACK_IMPORTED_MODULE_3__main_tagView___default.a,
        recommendList: __WEBPACK_IMPORTED_MODULE_4__main_recommendList___default.a
    },
    data() {
        return {
            scrollArray: [],
            islandArray: [],
            recommendArray: []
        };
    },
    created() {
        let that = this;
        __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getScrollView().then(data => {
            that.scrollArray = data[0]._serverData.imageArray;
        });
        __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getAllIsland(11).then(data => {
            that.islandArray = data.map(item => {
                return {
                    name: item.attributes.name,
                    url: item.attributes.imageArray[0].url
                };
            });
        });
        __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].getRecommenList().then(data => {
            that.recommendArray = data.map(item => {
                item = item.attributes;
                return {
                    name: item.name,
                    title: item.onleyId || '暂无描述',
                    place: item.place,
                    price: item.price,
                    startDate: item.startDate,
                    describe: item.describe,
                    url: item.imageArray[0].url,
                    countNumber: item.countNumber
                };
            });
        });
    }
});

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
        return {};
    }
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['scrollArray'],
    data() {
        return {
            value3: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                dots: 'inside',
                trigger: 'click',
                arrow: 'hover'
            }
        };
    }
});

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['recommendArray'],
    data() {
        return {};
    }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ["tagArray"],
    data() {
        return {};
    }
});

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/main/mainNavitor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mainNavitor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14b5682f", Component.options)
  } else {
    hotAPI.reload("data-v-14b5682f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(250),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/main/mainScroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mainScroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f395802", Component.options)
  } else {
    hotAPI.reload("data-v-8f395802", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/main/recommendList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] recommendList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41cdb21e", Component.options)
  } else {
    hotAPI.reload("data-v-41cdb21e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(227)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/main/tagView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tagView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a39d996", Component.options)
  } else {
    hotAPI.reload("data-v-5a39d996", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "root"
  }, [_c('div', {
    staticClass: "layout-ceiling"
  }, [_c('div', {
    staticClass: "layout-ceiling-main"
  }, [_c('a', [_vm._v("注册登录")]), _vm._v(" "), _c('a', [_vm._v("帮助中心")]), _vm._v(" "), _c('a', [_vm._v("安全中心")]), _vm._v(" "), _c('a', [_vm._v("服务大厅")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-14b5682f", module.exports)
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "listView"
  }, _vm._l((_vm.recommendArray), function(item) {
    return _c('li', {
      staticClass: "sinlgeView"
    }, [_c('div', {
      staticClass: "detailImageView"
    }, [_c('img', {
      staticClass: "detailImage",
      attrs: {
        "src": item.url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "detailContent"
    }, [_c('div', {
      staticClass: "titleView"
    }, [_c('div', {
      staticClass: "itemDetailFlex"
    }, [_vm._v("\n                        " + _vm._s(item.title) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "dateView"
    }, [_c('div', {}, [_vm._v("\n                        " + _vm._s(item.startDate) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "nameView"
    }, [_vm._v("\n                    " + _vm._s(item.name) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "describeView"
    }, [_vm._v("\n                    " + _vm._s(item.describe) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "itemDetailView"
    }, [_c('div', {
      staticClass: "itemDetailFlex"
    }, [_c('Icon', {
      staticClass: "smallIcon",
      attrs: {
        "type": "plane"
      }
    }), _vm._v(_vm._s(item.place) + "出发\n                    ")], 1), _vm._v(" "), _c('div', {
      staticClass: "itemDetailFlex"
    }, [_c('Icon', {
      staticClass: "smallIcon",
      attrs: {
        "type": "eye"
      }
    }), _vm._v(_vm._s(item.countNumber) + "\n                    ")], 1), _vm._v(" "), _c('div', {
      staticClass: "itemDetailFlex priceView"
    }, [_c('Icon', {
      staticClass: "smallIcon",
      attrs: {
        "type": "social-yen"
      }
    }), _vm._v(" " + _vm._s(item.price) + "\n                    ")], 1)]), _vm._v(" "), _c('div')])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41cdb21e", module.exports)
  }
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tagView"
  }, [_vm._l((_vm.tagArray), function(item) {
    return _c('a', {
      staticClass: "collection"
    }, [_c('img', {
      staticClass: "tagImage",
      attrs: {
        "src": item.url,
        "alt": "64"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "tagName"
    }, [_vm._v(_vm._s(item.name))])])
  }), _vm._v(" "), _c('a', {
    staticClass: "tagMore"
  }, [_vm._v("\n        更多热门海岛专题\n        "), _c('Icon', {
    attrs: {
      "type": "chevron-right"
    }
  })], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a39d996", module.exports)
  }
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('main-navitor'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "srollView"
  }, [_c('main-scroll', {
    attrs: {
      "scroll-array": _vm.scrollArray
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('tag-view', {
    attrs: {
      "tag-array": _vm.islandArray
    }
  }), _vm._v(" "), _c('recommend-list', {
    attrs: {
      "recommend-array": _vm.recommendArray
    }
  })], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "200px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n        2011-2016 © 超想去旅行\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b0fc146", module.exports)
  }
}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('Carousel', {
    attrs: {
      "autoplay": _vm.setting.autoplay,
      "autoplay-speed": _vm.setting.autoplaySpeed,
      "dots": _vm.setting.dots,
      "trigger": _vm.setting.trigger,
      "arrow": _vm.setting.arrow
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  }, _vm._l((_vm.scrollArray), function(item) {
    return _c('CarouselItem', [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    })])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f395802", module.exports)
  }
}

/***/ })

});