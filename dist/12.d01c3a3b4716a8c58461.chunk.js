webpackJsonp([12],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(252),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/neo-mac/Desktop/资源/we-telecom-back/src/views/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dbf632a8", Component.options)
  } else {
    hotAPI.reload("data-v-dbf632a8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_network_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leancloud_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leancloud_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leancloud_storage__);
//
//
//
//
//
//
//
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
            userName: '15151965292',
            passWord: ''
        };
    },
    created() {
        var currentUser = __WEBPACK_IMPORTED_MODULE_2_leancloud_storage___default.a.User.current();
        if (currentUser) {
            this.$router.push('/home');
        }
    },
    methods: {
        handleSubmit(name) {},
        keyupEnter() {
            this.$Message.info('123');
        },
        loginAction() {
            var _self = this;
            let data = {
                "phoneNumber": this.userName,
                "password": this.passWord
            };
            this.$Message.info('登录中');
            __WEBPACK_IMPORTED_MODULE_0__tools_network_js__["a" /* default */].userLogin(data).then(data => {
                __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('token', data._sessionToken, { expires: 7 });
                setTimeout(function () {
                    _self.$Message.success('登录成功');
                    _self.$router.push('/home');
                }, 500);
            }, error => {
                this.$Message.error('登陆失败');
            });
        }

    }
});

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout "
  }, [_c('Card', {
    staticClass: "login",
    attrs: {
      "dis-hover": ""
    }
  }, [_c('p', {
    slot: "title"
  }, [_vm._v("数码通讯站后台管理系统")]), _vm._v(" "), _c('Input', {
    model: {
      value: (_vm.userName),
      callback: function($$v) {
        _vm.userName = $$v
      },
      expression: "userName"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("账号")])]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "password"
    },
    on: {
      "on-enter": _vm.loginAction
    },
    model: {
      value: (_vm.passWord),
      callback: function($$v) {
        _vm.passWord = $$v
      },
      expression: "passWord"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("密码")])]), _vm._v(" "), _c('Button', {
    staticClass: "loginButton",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loginAction
    }
  }, [_vm._v("登录")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dbf632a8", module.exports)
  }
}

/***/ })

});