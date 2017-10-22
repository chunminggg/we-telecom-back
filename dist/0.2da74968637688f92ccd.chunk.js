webpackJsonp([0,2],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(203),
  /* scopeId */
  "data-v-0ae5dc4e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae5dc4e", Component.options)
  } else {
    hotAPI.reload("data-v-0ae5dc4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(228)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(248),
  /* scopeId */
  "data-v-6f4578d6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f4578d6", Component.options)
  } else {
    hotAPI.reload("data-v-6f4578d6", Component.options)
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__richImageUpload__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__richImageUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__richImageUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_ImageImport_js__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_ImageResize_js__ = __webpack_require__(194);
//
//
//
//
//
//
//
//
//
//
//
//






// quillEditor.register('modules/imageImport', ImageImport)
// quillEditor.register('modules/imageResize', ImageResize)

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['richContent', 'richIndex'],
  components: {
    imageUpload: __WEBPACK_IMPORTED_MODULE_1__richImageUpload___default.a
  },
  data() {
    return {
      editorOption: {
        placeholder: this.richContent.placeHolder,
        imageImport: true,
        imageResize: {
          displaySize: true
        }

      },
      content: this.richContent.content,
      imageArray: []

    };
  },
  watch: {
    richContent(newVal, oldVal) {
      this.content = newVal.content;
    }
  },
  methods: {
    richTextChange(editor, html, text) {
      this.$emit('send-text', { 'content': this.content, 'index': this.richIndex });
    },
    getImageArray(data) {
      let vm = this;
      let value = data;
      let myLength = this.$refs.richContent.quill.getLength();
      this.$refs.richContent.quill.insertEmbed(myLength, 'image', value);
    },
    imgClick() {}
  },
  computed: {
    editor() {
      return this.$refs.firstEditor.quill;
    }

  },
  mounted() {}
});

/***/ }),

/***/ 192:
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
                _self.$emit('send-image', data.attributes.url);
            });
            return false;
        }
    }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Custom module for quilljs to allow user to drag images from their file system into the editor
 * and paste images from clipboard (Works on Chrome, Firefox, Edge, not on Safari)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
class ImageImport {

    constructor(quill, options = {}) {
        // save the quill reference
        this.quill = quill;
        // bind handlers to this instance
        this.handleDrop = this.handleDrop.bind(this);
        this.handlePaste = this.handlePaste.bind(this);
        // listen for drop and paste events
        this.quill.root.addEventListener('drop', this.handleDrop, false);
        this.quill.root.addEventListener('paste', this.handlePaste, false);
    }

    handleDrop(evt) {
        evt.preventDefault();
        if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
            this.readFiles(evt.dataTransfer.files, this.insert.bind(this));
        }
    }

    handlePaste(evt) {
        if (evt.clipboardData && evt.clipboardData.items && evt.clipboardData.items.length) {
            this.readFiles(evt.clipboardData.items, dataUrl => {
                const selection = this.quill.getSelection();
                if (selection) {
                    // we must be in a browser that supports pasting (like Firefox)
                    // so it has already been placed into the editor
                } else {
                    // otherwise we wait until after the paste when this.quill.getSelection()
                    // will return a valid index
                    setTimeout(() => this.insert(dataUrl), 0);
                }
            });
        }
    }

    insert(dataUrl) {
        const index = (this.quill.getSelection() || {}).index || this.quill.getLength();
        this.quill.insertEmbed(index, 'image', dataUrl, 'user');
    }

    readFiles(files, callback) {
        // check each file for an image
        [].forEach.call(files, file => {
            if (!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
                // file is not an image
                // Note that some file formats such as psd start with image/* but are not readable
                return;
            }
            // set up file reader
            const reader = new FileReader();
            reader.onload = evt => {
                callback(evt.target.result);
            };
            // read the clipboard item or file
            const blob = file.getAsFile ? file.getAsFile() : file;
            if (blob instanceof Blob) {
                reader.readAsDataURL(blob);
            }
        });
    }

}
/* unused harmony export ImageImport */


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Custom module for quilljs to allow user to resize <img> elements
 * (Works on Chrome, Edge, Safari and replaces Firefox's native resize behavior)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
class ImageResize {

    constructor(quill, options = {}) {
        // save the quill reference and options
        this.quill = quill;
        this.options = options;
        // bind handlers to this instance
        this.handleClick = this.handleClick.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.checkImage = this.checkImage.bind(this);
        // track resize handles
        this.boxes = [];
        // disable native image resizing on firefox
        document.execCommand('enableObjectResizing', false, 'false');
        // respond to clicks inside the editor
        this.quill.root.addEventListener('click', this.handleClick, false);
    }

    handleClick(evt) {
        if (evt.target && evt.target.tagName && evt.target.tagName.toUpperCase() == 'IMG') {
            if (this.img === evt.target) {
                // we are already focused on this image
                return;
            }
            if (this.img) {
                // we were just focused on another image
                this.hide();
            }
            // clicked on an image inside the editor
            this.show(evt.target);
        } else if (this.img) {
            // clicked on a non image
            this.hide();
        }
    }

    show(img) {
        // keep track of this img element
        this.img = img;
        this.showResizers();
        this.showSizeDisplay();
        // position the resize handles at the corners
        const rect = this.img.getBoundingClientRect();
        this.positionBoxes(rect);
        this.positionSizeDisplay(rect);
    }

    hide() {
        this.hideResizers();
        this.hideSizeDisplay();
        this.img = undefined;
    }

    showResizers() {
        // prevent spurious text selection
        this.setUserSelect('none');
        // add 4 resize handles
        this.addBox('nwse-resize'); // top left
        this.addBox('nesw-resize'); // top right
        this.addBox('nwse-resize'); // bottom right
        this.addBox('nesw-resize'); // bottom left
        // listen for the image being deleted or moved
        document.addEventListener('keyup', this.checkImage, true);
        this.quill.root.addEventListener('input', this.checkImage, true);
    }

    hideResizers() {
        // stop listening for image deletion or movement
        document.removeEventListener('keyup', this.checkImage);
        this.quill.root.removeEventListener('input', this.checkImage);
        // reset user-select
        this.setUserSelect('');
        this.setCursor('');
        // remove boxes
        this.boxes.forEach(box => document.body.removeChild(box));
        // release memory
        this.dragBox = undefined;
        this.dragStartX = undefined;
        this.preDragWidth = undefined;
        this.boxes = [];
    }

    addBox(cursor) {
        // create div element for resize handle
        const box = document.createElement('div');
        // apply styles
        const styles = {
            position: 'absolute',
            height: '12px',
            width: '12px',
            backgroundColor: 'white',
            border: '1px solid #777',
            boxSizing: 'border-box',
            opacity: '0.80',
            zIndex: 9,
            cursor: cursor
        };
        this.extend(box.style, styles, this.options.handleStyles || {});
        // listen for mousedown on each box
        box.addEventListener('mousedown', this.handleMousedown, false);
        // add drag handle to document
        document.body.appendChild(box);
        // keep track of drag handle
        this.boxes.push(box);
    }

    extend(destination, ...sources) {
        sources.forEach(source => {
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    destination[prop] = source[prop];
                }
            }
        });
        return destination;
    }

    positionBoxes(rect) {
        // set the top and left for each drag handle
        [{ left: rect.left - 6, top: rect.top - 6 }, // top left
        { left: rect.left + rect.width - 6, top: rect.top - 6 }, // top right
        { left: rect.left + rect.width - 6, top: rect.top + rect.height - 6 }, // bottom right
        { left: rect.left - 6, top: rect.top + rect.height - 6 }].forEach((pos, idx) => {
            this.extend(this.boxes[idx].style, {
                top: Math.round(pos.top + window.pageYOffset) + 'px',
                left: Math.round(pos.left + window.pageXOffset) + 'px'
            });
        });
    }

    handleMousedown(evt) {
        // note which box
        this.dragBox = evt.target;
        // note starting mousedown position
        this.dragStartX = evt.clientX;
        // store the width before the drag
        this.preDragWidth = this.img.width || this.img.naturalWidth;
        // set the proper cursor everywhere
        this.setCursor(this.dragBox.style.cursor);
        // listen for movement and mouseup
        document.addEventListener('mousemove', this.handleDrag, false);
        document.addEventListener('mouseup', this.handleMouseup, false);
    }

    handleMouseup() {
        // reset cursor everywhere
        this.setCursor('');
        // stop listening for movement and mouseup
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleMouseup);
    }

    handleDrag(evt) {
        if (!this.img) {
            // image not set yet
            return;
        }
        // update image size
        if (this.dragBox == this.boxes[0] || this.dragBox == this.boxes[3]) {
            // left-side resize handler; draging right shrinks image
            this.img.width = Math.round(this.preDragWidth - evt.clientX - this.dragStartX);
        } else {
            // right-side resize handler; draging right enlarges image
            this.img.width = Math.round(this.preDragWidth + evt.clientX - this.dragStartX);
        }
        // reposition the drag handles around the image
        const rect = this.img.getBoundingClientRect();
        this.positionBoxes(rect);
        this.positionSizeDisplay(rect);
    }

    setUserSelect(value) {
        ['userSelect', 'mozUserSelect', 'webkitUserSelect', 'msUserSelect'].forEach(prop => {
            // set on contenteditable element and <html>
            this.quill.root.style[prop] = value;
            document.documentElement.style[prop] = value;
        });
    }

    setCursor(value) {
        [document.body, this.img, this.quill.root].forEach(el => el.style.cursor = value);
    }

    checkImage() {
        if (this.img) {
            this.hide();
        }
    }

    showSizeDisplay() {
        if (!this.options.displaySize) {
            return;
        }
        this.display = document.createElement('div');
        // apply styles
        const styles = {
            position: 'absolute',
            font: '12px/1.0 Arial, Helvetica, sans-serif',
            padding: '4px 8px',
            textAlign: 'center',
            backgroundColor: 'white',
            color: '#333',
            border: '1px solid #777',
            boxSizing: 'border-box',
            opacity: '0.80',
            cursor: 'default'
        };
        this.extend(this.display.style, styles, this.options.displayStyles || {});
        document.body.appendChild(this.display);
    }

    hideSizeDisplay() {
        document.body.removeChild(this.display);
        this.display = undefined;
    }

    positionSizeDisplay(rect) {
        if (!this.display || !this.img) {
            return;
        }
        const size = this.getCurrentSize();
        this.display.innerHTML = size.join(' &times; ');
        if (size[0] > 120 && size[1] > 30) {
            // position on top of image
            const dispRect = this.display.getBoundingClientRect();
            this.extend(this.display.style, {
                left: Math.round(rect.left + rect.width + window.pageXOffset - dispRect.width - 8) + 'px',
                top: Math.round(rect.top + rect.height + window.pageYOffset - dispRect.height - 8) + 'px'
            });
        } else {
            // position off bottom right
            this.extend(this.display.style, {
                left: Math.round(rect.left + rect.width + window.pageXOffset + 8) + 'px',
                top: Math.round(rect.top + rect.height + window.pageYOffset + 8) + 'px'
            });
        }
    }

    getCurrentSize() {
        return [this.img.width, Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight)];
    }

}
/* unused harmony export ImageResize */


/***/ }),

/***/ 195:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(195)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(199),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/richEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] richEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73d61936", Component.options)
  } else {
    hotAPI.reload("data-v-73d61936", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(196)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(200),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/miaobingliang/Desktop/华通电讯/we-telecom-back/src/views/richImageUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] richImageUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-764a8ac3", Component.options)
  } else {
    hotAPI.reload("data-v-764a8ac3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('quill-editor', {
    ref: "richContent",
    attrs: {
      "options": _vm.editorOption
    },
    on: {
      "change": _vm.richTextChange
    },
    model: {
      value: (_vm.content),
      callback: function($$v) {
        _vm.content = $$v
      },
      expression: "content"
    }
  }), _vm._v(" "), _c('image-upload', {
    staticClass: "product",
    attrs: {
      "uploadList": _vm.imageArray
    },
    on: {
      "send-image": _vm.getImageArray
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73d61936", module.exports)
  }
}

/***/ }),

/***/ 200:
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
  }), _vm._v(" "), _c('p', [_vm._v("点击或将文件拖拽到这里上传")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-764a8ac3", module.exports)
  }
}

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageUpload__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__imageUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_network_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__richEditor__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__richEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__richEditor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        imageUpload: __WEBPACK_IMPORTED_MODULE_0__imageUpload___default.a,
        richEditor: __WEBPACK_IMPORTED_MODULE_2__richEditor___default.a

    },
    data() {
        return {
            richItems: [{ content: '', placeHolder: "套餐内容" }, { content: '', placeHolder: "活动介绍" }, { content: '', placeHolder: "费用说明" }, { content: '', placeHolder: "预定须知" }],

            productId: '',
            //产品编号
            productNumber: '',
            //产品名称
            productName: '',
            //产品描述
            productDes: '',
            //产品价格
            productPrice: '',
            // 出发城市
            productPlace: '',
            productStartDate: '',
            productEndDate: '',
            //是否推荐
            isRecommend: false,
            isSpecialPrice: false,
            isFollowTeam: false,
            isFreeTravel: false,
            // 模态框
            priceModal: false,
            //是否特价
            //价格添加
            singlePrice: '',
            singleDate: '',
            tagArray: [],
            //日期格式设置
            dateOption1: {
                disabledDate(date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            dateOption2: {
                disabledDate(date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            productTypes: [{
                value: 1,
                label: '巴厘岛'
            }, {
                value: 2,
                label: '沙巴岛'
            }, {
                value: 3,
                label: '芽庄'
            }, {
                value: 4,
                label: '马尔代夫'
            }, {
                value: 5,
                label: '普吉岛'
            }, {
                value: 6,
                label: '长滩岛'
            }, {
                value: 7,
                label: '帕劳'
            }, {
                value: 8,
                label: '大溪地'
            }, {
                value: 9,
                label: '苏梅岛'
            }],
            productTypeSelected: '',
            imageArray: []

        };
    },
    created() {
        var _self = this;
        _self.productId = this.$route.params.productId;
        __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].getThemelist().then(data => {
            if (data.length) {
                _self.productTypes = [];
                data.forEach(obj => {
                    _self.productTypes.push({ label: obj.attributes.name, value: obj.attributes.type });
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].getTodoDetail(_self.productId, 'Product', data => {
            _self.richItems = data.detailContent;
            _self.productNumber = data.onleyId;
            _self.productPlace = data.place;
            _self.productDes = data.describe;
            _self.productName = data.name;
            _self.productPrice = data.price;
            _self.imageArray = data.imageArray;
            _self.productStartDate = data.startDate;
            _self.isFollowTeam = data.isFollowTeam || false;
            _self.isFreeTravel = data.isFreeTravel || false;
            _self.tagArray = data.tagArray || [];
            if (data.isRecommend != undefined) {
                _self.isRecommend = data.isRecommend;
            }
            if (data.isSpecialPrice != undefined) {
                _self.isSpecialPrice = data.isSpecialPrice;
            }

            // _self.productEndDate = data.endDate
            _self.productTypeSelected = data.type;
        }, error => {
            _self.$Message.error('获取信息失败,请重试');
        });
    },
    methods: {
        handleClose(index) {
            this.tagArray.splice(index, 1);
        },
        // 价格添加
        priceAdd() {
            let dict = {
                date: this.singleDate.toLocaleDateString(),
                price: this.singlePrice
            };

            this.tagArray.push(dict);
        },
        //价格选择
        priceSelect() {
            this.priceModal = true;
        },
        getRichTextArray(data) {
            this.richItems[data.index].content = data.content;
        },
        getImageArray(data) {
            this.imageArray = data;
        },
        submitData() {
            var _self = this;
            var dict = {
                startDate: _self.productStartDate,
                // endDate: _self.productEndDate,
                name: _self.productName,
                describe: _self.productDes,
                type: _self.productTypeSelected,
                place: _self.productPlace,
                onleyId: _self.productNumber,
                price: _self.productPrice,
                imageArray: _self.imageArray,
                detailContent: _self.richItems,
                isRecommend: _self.isRecommend,
                isSpecialPrice: _self.isSpecialPrice,
                isFollowTeam: _self.isFollowTeam,
                isFreeTravel: _self.isFreeTravel,
                tagArray: _self.tagArray
            };
            if (!this.imageArray.length) {
                _self.$Message.error('请上传图片至少一张');
            }

            __WEBPACK_IMPORTED_MODULE_1__tools_network_js__["a" /* default */].uploadProdut(_self.productId, dict, function () {
                _self.$Message.success('保存成功');
                setTimeout(function () {
                    _self.$router.go(0);
                }, 1000);
            });
        }
    }
});

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('h2', [_vm._v("套餐发布")]), _vm._v(" "), _c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.productNumber),
      callback: function($$v) {
        _vm.productNumber = $$v
      },
      expression: "productNumber"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("套餐编号")])]), _vm._v(" "), _c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.productName),
      callback: function($$v) {
        _vm.productName = $$v
      },
      expression: "productName"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("套餐名称")])]), _vm._v(" "), _c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.productPrice),
      callback: function($$v) {
        _vm.productPrice = $$v
      },
      expression: "productPrice"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("套餐价格")])]), _vm._v(" "), _c('Input', {
    staticClass: "product",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.productDes),
      callback: function($$v) {
        _vm.productDes = $$v
      },
      expression: "productDes"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("套餐简要描述")])]), _vm._v(" "), _c('div', {
    staticClass: "product"
  }, [_c('label', [_vm._v("是否置顶:")]), _vm._v(" "), _c('i-switch', {
    model: {
      value: (_vm.isRecommend),
      callback: function($$v) {
        _vm.isRecommend = $$v
      },
      expression: "isRecommend"
    }
  })], 1), _vm._v(" "), _c('Select', {
    staticClass: "product",
    attrs: {
      "placeholder": "请选择套餐类型"
    },
    model: {
      value: (_vm.productTypeSelected),
      callback: function($$v) {
        _vm.productTypeSelected = $$v
      },
      expression: "productTypeSelected"
    }
  }, _vm._l((_vm.productTypes), function(item) {
    return _c('Option', {
      key: item,
      attrs: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('Alert', {
    staticClass: "myAlert",
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("套餐详情滚动图（至少传一张)")]), _vm._v(" "), _c('image-upload', {
    staticClass: "product imageUpload",
    attrs: {
      "uploadList": _vm.imageArray
    },
    on: {
      "send-image": _vm.getImageArray
    }
  }), _vm._v(" "), _vm._l((_vm.richItems), function(richItem, index) {
    return _c('div', {
      staticClass: "myProduct"
    }, [_c('Alert', [_vm._v(_vm._s(richItem.placeHolder))]), _vm._v(" "), _c('rich-editor', {
      staticClass: "product",
      attrs: {
        "richContent": richItem,
        "richIndex": index
      },
      on: {
        "send-text": _vm.getRichTextArray
      }
    })], 1)
  }), _vm._v(" "), _c('Button', {
    staticClass: "product",
    attrs: {
      "type": "success",
      "long": ""
    },
    on: {
      "click": _vm.submitData
    }
  }, [_vm._v("确认提交")]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "价格添加"
    },
    on: {
      "on-ok": _vm.priceAdd
    },
    model: {
      value: (_vm.priceModal),
      callback: function($$v) {
        _vm.priceModal = $$v
      },
      expression: "priceModal"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请输入价格"
    },
    model: {
      value: (_vm.singlePrice),
      callback: function($$v) {
        _vm.singlePrice = $$v
      },
      expression: "singlePrice"
    }
  }), _vm._v(" "), _c('DatePicker', {
    staticClass: "product",
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.singleDate),
      callback: function($$v) {
        _vm.singleDate = $$v
      },
      expression: "singleDate"
    }
  })], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0ae5dc4e", module.exports)
  }
}

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leancloud_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leancloud_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leancloud_storage__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        uploadView: __WEBPACK_IMPORTED_MODULE_0__upload___default.a
    },
    data() {
        return {};
    },
    created() {
        var currentUser = __WEBPACK_IMPORTED_MODULE_1_leancloud_storage___default.a.User.current();
        if (!currentUser) {
            this.$router.push('/');
        }
    },
    methods: {
        jumpToUploadView(name) {
            // debugger
            if (name == '1-1') this.$router.push({
                path: '/upload',
                name: 'upload',
                params: {
                    'productId': 'new'
                }
            });
            if (name == '1-2') this.$router.push('/productManage');
            if (name == '1-3') this.$router.push('/theme');
            if (name == '1-4') this.$router.push('/mainScroll');
            if (name == '1-5') this.$router.push('/themeManage');
            if (name == '1-6') this.$router.push({
                path: '/news',
                name: 'news',
                params: {
                    'productId': 'new'
                }
            });
            if (name == '1-7') this.$router.push('/newsManage');
            if (name == '2-2') this.$router.push('/reserveList');
            if (name == '3-1') this.$router.push('/users');
            if (name == '3-2') this.$router.push('/productStatis');
            if (name == '4-1') this.$router.push('/main');
        }
    }
});

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Row', {
    attrs: {
      "type": "flex"
    }
  }, [_c('i-col', {
    staticClass: "layout-menu-left",
    staticStyle: {
      "background": "white"
    },
    attrs: {
      "span": "5"
    }
  }, [_c('Menu', {
    attrs: {
      "theme": "light",
      "width": "auto"
    },
    on: {
      "on-select": _vm.jumpToUploadView
    }
  }, [_c('Submenu', {
    attrs: {
      "name": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate"
    }
  }), _vm._v("\n                            产品管理\n")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "1-1"
    }
  }, [_vm._v("\n                            发布套餐\n                        ")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "1-2"
    }
  }, [_vm._v("套餐管理")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "1-3"
    }
  }, [_vm._v("分类发布")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "1-5"
    }
  }, [_vm._v("分类管理")])], 2), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad"
    }
  }), _vm._v("\n订单管理\n")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2-2"
    }
  }, [_vm._v("未完成订单")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2-1"
    }
  }, [_vm._v("完成订单")])], 2)], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "19"
    }
  }, [_c('div', {
    staticClass: "layout-content"
  }, [_c('router-view')], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6f4578d6", module.exports)
  }
}

/***/ })

});