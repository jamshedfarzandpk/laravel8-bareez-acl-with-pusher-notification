"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_OverlayDemo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_ProductService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/ProductService */ "./resources/js/service/ProductService.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      display: false,
      displayConfirmation: false,
      visibleLeft: false,
      visibleRight: false,
      visibleTop: false,
      visibleBottom: false,
      visibleFull: false,
      products: null,
      selectedProduct: null
    };
  },
  productService: null,
  created: function created() {
    this.productService = new _service_ProductService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  },
  mounted: function mounted() {
    var _this = this;

    this.productService.getProductsSmall().then(function (data) {
      return _this.products = data;
    });
  },
  methods: {
    open: function open() {
      this.display = true;
    },
    close: function close() {
      this.display = false;
    },
    openConfirmation: function openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation: function closeConfirmation() {
      this.displayConfirmation = false;
    },
    toggle: function toggle(event) {
      this.$refs.op.toggle(event);
    },
    toggleDataTable: function toggleDataTable(event) {
      this.$refs.op2.toggle(event);
    },
    formatCurrency: function formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    onProductSelect: function onProductSelect(event) {
      this.$refs.op.hide();
      this.$toast.add({
        severity: 'info',
        summary: 'Product Selected',
        detail: event.data.name,
        life: 3000
      });
    },
    confirm: function confirm(event) {
      var _this2 = this;

      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: function accept() {
          _this2.$toast.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted',
            life: 3000
          });
        },
        reject: function reject() {
          _this2.$toast.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'You have rejected',
            life: 3000
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "grid overlay-demo"
};
var _hoisted_2 = {
  "class": "col-12 lg:col-6"
};
var _hoisted_3 = {
  "class": "card p-fluid"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Dialog", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "line-height-3 m-0"
}, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "grid"
};
var _hoisted_7 = {
  "class": "col-12"
};
var _hoisted_8 = {
  "class": "card p-fluid"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Overlay Panel", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "grid formgrid"
};
var _hoisted_11 = {
  "class": "col-6"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/nature/nature9.jpg",
  alt: "Nature 9"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "col-6"
};
var _hoisted_14 = ["src", "alt"];
var _hoisted_15 = {
  "class": "col-12 lg:col-6"
};
var _hoisted_16 = {
  "class": "card p-fluid"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Confirmation", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex align-items-center justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-exclamation-triangle mr-3",
  style: {
    "font-size": "2rem"
  }
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Are you sure you want to proceed?")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "card"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Sidebar", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  style: {
    "fontWeight": "normal"
  }
}, "Left Sidebar", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  style: {
    "fontWeight": "normal"
  }
}, "Right Sidebar", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  style: {
    "fontWeight": "normal"
  }
}, "Top Sidebar", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  style: {
    "fontWeight": "normal"
  }
}, "Bottom Sidebar", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  style: {
    "fontWeight": "normal"
  }
}, "Full Screen", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "col-12 lg:col-6"
};
var _hoisted_27 = {
  "class": "card"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Tooltip", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "formgroup-inline"
};
var _hoisted_30 = {
  "class": "field"
};
var _hoisted_31 = {
  "class": "col-12 lg:col-6"
};
var _hoisted_32 = {
  "class": "card"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "ConfirmPopup", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_OverlayPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("OverlayPanel");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Sidebar");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_ConfirmPopup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmPopup");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    header: "Dialog",
    visible: $data.display,
    "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
      return $data.display = $event;
    }),
    breakpoints: {
      '960px': '75vw'
    },
    style: {
      width: '30vw'
    },
    modal: true
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Dismiss",
        onClick: $options.close,
        icon: "pi pi-check",
        "class": "p-button-secondary"
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "Show",
    icon: "pi pi-external-link",
    onClick: $options.open
  }, null, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "button",
    label: "Image",
    onClick: $options.toggle,
    "class": "p-button-success"
  }, null, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_OverlayPanel, {
    ref: "op",
    appendTo: "body",
    showCloseIcon: true
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "button",
    label: "DataTable",
    onClick: $options.toggleDataTable,
    "class": "p-button-success"
  }, null, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_OverlayPanel, {
    ref: "op2",
    appendTo: "body",
    showCloseIcon: true,
    id: "overlay_panel",
    style: {
      "width": "450px"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
        value: $data.products,
        selection: $data.selectedProduct,
        "onUpdate:selection": _cache[1] || (_cache[1] = function ($event) {
          return $data.selectedProduct = $event;
        }),
        selectionMode: "single",
        paginator: true,
        rows: 5,
        onRowSelect: $options.onProductSelect
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "name",
            header: "Name",
            sortable: true
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            header: "Image"
          }, {
            body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: 'images/product/' + slotProps.data.image,
                alt: slotProps.data.image,
                width: "100",
                "class": "shadow-2"
              }, null, 8
              /* PROPS */
              , _hoisted_14)];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "price",
            header: "Price",
            sortable: true
          }, {
            body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.price)), 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["value", "selection", "onRowSelect"])];
    }),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "Delete",
    icon: "pi pi-trash",
    "class": "p-button-danger",
    onClick: $options.openConfirmation
  }, null, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    header: "Confirmation",
    visible: $data.displayConfirmation,
    "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
      return $data.displayConfirmation = $event;
    }),
    style: {
      width: '350px'
    },
    modal: true
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "No",
        icon: "pi pi-times",
        onClick: $options.closeConfirmation,
        "class": "p-button-text"
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Yes",
        icon: "pi pi-check",
        onClick: $options.closeConfirmation,
        "class": "p-button-text",
        autofocus: ""
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    visible: $data.visibleLeft,
    "onUpdate:visible": _cache[5] || (_cache[5] = function ($event) {
      return $data.visibleLeft = $event;
    }),
    baseZIndex: 1000
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $data.visibleLeft = false;
        }),
        label: "Save",
        "class": "p-button-success",
        style: {
          "margin-right": ".25em"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $data.visibleLeft = false;
        }),
        label: "Cancel",
        "class": "p-button-secondary"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    visible: $data.visibleRight,
    "onUpdate:visible": _cache[8] || (_cache[8] = function ($event) {
      return $data.visibleRight = $event;
    }),
    baseZIndex: 1000,
    position: "right"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $data.visibleRight = false;
        }),
        label: "Save",
        "class": "p-button-success",
        style: {
          "margin-right": ".25em"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $data.visibleRight = false;
        }),
        label: "Cancel",
        "class": "p-button-secondary"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    visible: $data.visibleTop,
    "onUpdate:visible": _cache[11] || (_cache[11] = function ($event) {
      return $data.visibleTop = $event;
    }),
    baseZIndex: 1000,
    position: "top"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $data.visibleTop = false;
        }),
        label: "Save",
        "class": "p-button-success",
        style: {
          "margin-right": ".25em"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[10] || (_cache[10] = function ($event) {
          return $data.visibleTop = false;
        }),
        label: "Cancel",
        "class": "p-button-secondary"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    visible: $data.visibleBottom,
    "onUpdate:visible": _cache[14] || (_cache[14] = function ($event) {
      return $data.visibleBottom = $event;
    }),
    baseZIndex: 1000,
    position: "bottom"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return $data.visibleBottom = false;
        }),
        label: "Save",
        "class": "p-button-success",
        style: {
          "margin-right": ".25em"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return $data.visibleBottom = false;
        }),
        label: "Cancel",
        "class": "p-button-secondary"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    visible: $data.visibleFull,
    "onUpdate:visible": _cache[17] || (_cache[17] = function ($event) {
      return $data.visibleFull = $event;
    }),
    baseZIndex: 1000,
    position: "full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[15] || (_cache[15] = function ($event) {
          return $data.visibleFull = false;
        }),
        label: "Save",
        "class": "p-button-success",
        style: {
          "margin-right": ".25em"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        onClick: _cache[16] || (_cache[16] = function ($event) {
          return $data.visibleFull = false;
        }),
        label: "Cancel",
        "class": "p-button-secondary"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    icon: "pi pi-arrow-right",
    "class": "p-button-warning",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $data.visibleLeft = true;
    }),
    style: {
      "margin-right": ".25em"
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    icon: "pi pi-arrow-left",
    "class": "p-button-warning",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $data.visibleRight = true;
    }),
    style: {
      "margin-right": ".25em"
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    icon: "pi pi-arrow-down",
    "class": "p-button-warning",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $data.visibleTop = true;
    }),
    style: {
      "margin-right": ".25em"
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    icon: "pi pi-arrow-up",
    "class": "p-button-warning",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $data.visibleBottom = true;
    }),
    style: {
      "margin-right": ".25em"
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    icon: "pi pi-external-link",
    "class": "p-button-warning",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $data.visibleFull = true;
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    type: "text",
    placeholder: "Username"
  }, null, 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Your username']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "button",
    label: "Save",
    icon: "pi pi-check"
  }, null, 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Click to proceed']])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConfirmPopup), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    ref: "popup",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.confirm($event);
    }),
    icon: "pi pi-check",
    label: "Confirm",
    "class": "mr-2"
  }, null, 512
  /* NEED_PATCH */
  )])])]);
}

/***/ }),

/***/ "./resources/js/components/OverlayDemo.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/OverlayDemo.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OverlayDemo_vue_vue_type_template_id_2f57a7b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverlayDemo.vue?vue&type=template&id=2f57a7b8 */ "./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8");
/* harmony import */ var _OverlayDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverlayDemo.vue?vue&type=script&lang=js */ "./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp8011_htdocs_laravel8_php8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp8011_htdocs_laravel8_php8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_OverlayDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_OverlayDemo_vue_vue_type_template_id_2f57a7b8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/OverlayDemo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OverlayDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OverlayDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OverlayDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OverlayDemo_vue_vue_type_template_id_2f57a7b8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OverlayDemo_vue_vue_type_template_id_2f57a7b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OverlayDemo.vue?vue&type=template&id=2f57a7b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/OverlayDemo.vue?vue&type=template&id=2f57a7b8");


/***/ })

}]);