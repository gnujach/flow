"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jetstream_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/ApplicationLogo */ "./resources/js/Jetstream/ApplicationLogo.vue");
/* harmony import */ var _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/NavLink */ "./resources/js/Jetstream/NavLink.vue");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ChartBarIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/LightningBoltIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ClipboardIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/NewspaperIcon.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Actions',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      JetApplicationLogo: _Jetstream_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__["default"],
      JetNavLink: _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_1__["default"],
      ChartBarIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
      LightningBoltIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
      ClipboardIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
      NewspaperIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Anual',
  props: {
    chartId: {
      type: String,
      "default": 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      "default": 'label'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Object,
      "default": function _default() {}
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale); // const chartData = {
    //     labels: ['Septiembre', 'Octubre', 'Noviembre'],
    //     datasets: [{
    //         data: [34, 20, 22],
    //         backgroundColor: '#f87979',
    //     }],
    // }

    var chartOptions = {
      responsive: true
    };
    var __returned__ = {
      props: props,
      chartOptions: chartOptions,
      Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_1__.Bar,
      ChartJS: chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart,
      Title: chart_js__WEBPACK_IMPORTED_MODULE_0__.Title,
      Tooltip: chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip,
      Legend: chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend,
      BarElement: chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement,
      CategoryScale: chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale,
      LinearScale: chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PieTramite',
  props: {
    chartId: {
      type: String,
      "default": 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      "default": 'label'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale); // const chartData = {
    //     labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    //     datasets: [
    //         {
    //             backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
    //             data: [40, 20, 80, 10]
    //         }
    //     ]
    // }

    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    var __returned__ = {
      props: props,
      chartOptions: chartOptions,
      Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_1__.Pie,
      ChartJS: chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart,
      Title: chart_js__WEBPACK_IMPORTED_MODULE_0__.Title,
      Tooltip: chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip,
      ArcElement: chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement,
      Legend: chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend,
      CategoryScale: chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Stats',
  props: {
    title: {
      type: String,
      "default": 'Estadísticas'
    },
    total: {
      type: Number,
      "default": '14.4k'
    },
    concluidas: {
      type: Number,
      "default": '14.4k'
    },
    week: {
      type: Number,
      "default": '14.4k'
    },
    today: {
      type: Number,
      "default": '14.4k'
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  data: function data() {
    return {
      show: true
    };
  },
  computed: {
    style: function style() {
      var _this$$page$props$jet;

      return ((_this$$page$props$jet = this.$page.props.jetstream.flash) === null || _this$$page$props$jet === void 0 ? void 0 : _this$$page$props$jet.bannerStyle) || 'success';
    },
    message: function message() {
      var _this$$page$props$jet2;

      return ((_this$$page$props$jet2 = this.$page.props.jetstream.flash) === null || _this$$page$props$jet2 === void 0 ? void 0 : _this$$page$props$jet2.banner) || '';
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    type: {
      type: String,
      "default": 'submit'
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    align: {
      "default": 'right'
    },
    width: {
      "default": '48'
    },
    contentClasses: {
      "default": function _default() {
        return ['py-1', 'bg-white'];
      }
    }
  },
  setup: function setup() {
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var closeOnEscape = function closeOnEscape(e) {
      if (open.value && e.key === 'Escape') {
        open.value = false;
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return document.addEventListener('keydown', closeOnEscape);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return document.removeEventListener('keydown', closeOnEscape);
    });
    return {
      open: open
    };
  },
  computed: {
    widthClass: function widthClass() {
      return {
        '48': 'w-48'
      }[this.width.toString()];
    },
    alignmentClasses: function alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0';
      } else if (this.align === 'right') {
        return 'origin-top-right right-0';
      } else {
        return 'origin-top';
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: ['href', 'as']
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: ['href', 'active'],
  computed: {
    classes: function classes() {
      return this.active ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition' : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition';
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: ['active', 'href', 'as'],
  computed: {
    classes: function classes() {
      return this.active ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition' : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition';
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Jetstream_ApplicationLogo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/ApplicationLogo.vue */ "./resources/js/Jetstream/ApplicationLogo.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");
/* harmony import */ var _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/NavLink */ "./resources/js/Jetstream/NavLink.vue");
/* harmony import */ var _Jetstream_Button_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/Button.vue */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Components_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Actions */ "./resources/js/Components/Actions.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Actions: _Components_Actions__WEBPACK_IMPORTED_MODULE_5__["default"],
    JetApplicationLogo: _Jetstream_ApplicationLogo_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _Jetstream_Button_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetNavLink: _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var currrentTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("tareasTodas");

    var clickme = function clickme(val) {
      currrentTab.value = val;
    };

    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_6__.useStore)();
    return {
      clickme: clickme,
      currrentTab: currrentTab,
      tareasTodas: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.getters["todoStore/tareasTodas"];
      }),
      tareasCompletadas: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.getters["tareasCompletadas"];
      }),
      tareasNoCompletadas: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.getters["tareasNoCompletadas"];
      }),
      getTodosByTab: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.getters["todoStore/getTodosbyTab"](currrentTab.value);
      }),
      toggleTodo: function toggleTodo(id) {
        return store.commit("todoStore/toggleTodo", id);
      }
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Jetstream_ApplicationMark_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/ApplicationMark.vue */ "./resources/js/Jetstream/ApplicationMark.vue");
/* harmony import */ var _Jetstream_Banner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Banner.vue */ "./resources/js/Jetstream/Banner.vue");
/* harmony import */ var _Jetstream_Dropdown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/Dropdown.vue */ "./resources/js/Jetstream/Dropdown.vue");
/* harmony import */ var _Jetstream_DropdownLink_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/DropdownLink.vue */ "./resources/js/Jetstream/DropdownLink.vue");
/* harmony import */ var _Jetstream_NavLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Jetstream/NavLink.vue */ "./resources/js/Jetstream/NavLink.vue");
/* harmony import */ var _Jetstream_ResponsiveNavLink_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Jetstream/ResponsiveNavLink.vue */ "./resources/js/Jetstream/ResponsiveNavLink.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Nav_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav.vue */ "./resources/js/Layouts/Nav.vue");
/* harmony import */ var _SideBarTwo_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SideBarTwo.vue */ "./resources/js/Layouts/SideBarTwo.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    title: String
  },
  components: {
    Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_7__.Head,
    JetApplicationMark: _Jetstream_ApplicationMark_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetBanner: _Jetstream_Banner_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetDropdown: _Jetstream_Dropdown_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetDropdownLink: _Jetstream_DropdownLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    JetNavLink: _Jetstream_NavLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    JetResponsiveNavLink: _Jetstream_ResponsiveNavLink_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_7__.Link,
    Navbar: _Nav_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    SideBarTwo: _SideBarTwo_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    switchToTeam: function switchToTeam(team) {
      this.$inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    },
    logout: function logout() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_10__.Inertia.post("/logout");
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/NavLink */ "./resources/js/Jetstream/NavLink.vue");
/* harmony import */ var _Jetstream_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/ResponsiveNavLink */ "./resources/js/Jetstream/ResponsiveNavLink.vue");
/* harmony import */ var _Jetstream_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/Dropdown */ "./resources/js/Jetstream/Dropdown.vue");
/* harmony import */ var _Jetstream_DropdownLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/DropdownLink */ "./resources/js/Jetstream/DropdownLink.vue");
/* harmony import */ var _Shared_Icon_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Icon.vue */ "./resources/js/Shared/Icon.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/BellIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ClipboardIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/MoonIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SearchCircleIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/XIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/MenuAlt1Icon.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    BellIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
    ClipboardIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__["default"],
    MoonIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__["default"],
    SearchCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_10__["default"],
    Icon: _Shared_Icon_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    XIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_11__["default"],
    MenuAlt1Icon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__["default"],
    JetNavLink: _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetResponsiveNavLink: _Jetstream_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetDropdown: _Jetstream_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetDropdownLink: _Jetstream_DropdownLink__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_13__.useStore)();
    return {
      toggleNavBar: function toggleNavBar() {
        return store.commit("todoStore/toggleNavBar");
      },
      statusSideBar: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.getters["todoStore/statusSideBar"];
      }),
      logout: function logout() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__.Inertia.post("/logout");
      },
      btnClick: function btnClick() {
        console.log("pressed btn");
        store.commit("todoStore/toggleNavBar");
      }
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavItem.vue */ "./resources/js/components/NavItem.vue");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/HomeIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/HeartIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ClipboardCheckIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/NewspaperIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/PhotographIcon.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SideBarTwo',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var statusSideBar = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.getters["todoStore/statusSideBar"];
    });

    var toggleNavBar = function toggleNavBar() {
      return store.commit("todoStore/toggleNavBar");
    };

    var completeButtonRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var navItems = [{
      href: "/dashboard",
      active: false,
      label: "Home",
      children: [],
      icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, {
      href: "#",
      active: false,
      label: "Administración",
      children: [{
        href: "/admin/medios",
        active: false,
        label: "Canales de atención",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        href: "/admin/usuarios",
        active: false,
        label: "Administración de Usuarios",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/puestos",
        active: false,
        label: "Administración de Puestos",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/departamentos",
        active: false,
        label: "Administración de Departamentos",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/centros",
        active: false,
        label: "Administración de Centros",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/clientes",
        active: false,
        label: "Administración de Usuarios",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/requisitos/",
        active: false,
        label: "Administración de Requisitos",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        href: "/admin/tramites/",
        active: false,
        label: "Administración de Trámites",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    }, {
      href: "#",
      active: false,
      label: "Solicitudes",
      children: [{
        href: "/solicitudes/list",
        active: false,
        label: "Nueva Solicitudes",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    }];
    var navItems2 = [{
      href: "#",
      active: false,
      label: "Inicio",
      children: [{
        href: "/solicitudes",
        active: false,
        label: "Nueva Solicitud",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        href: "/solicitudes/list",
        active: false,
        label: "Mostrar solicitudes",
        children: [],
        icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
      }],
      icon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"]
    }];
    var __returned__ = {
      store: store,
      statusSideBar: statusSideBar,
      toggleNavBar: toggleNavBar,
      completeButtonRef: completeButtonRef,
      navItems: navItems,
      navItems2: navItems2,
      NavItem: _components_NavItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ClipboardCheckIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
      HeartIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
      HomeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
      NewspaperIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"],
      PhotographIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__["default"],
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.TransitionRoot,
      TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.TransitionChild,
      Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.Dialog,
      DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_9__.DialogOverlay
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/AppLayout.vue */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _Jetstream_Welcome_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Welcome.vue */ "./resources/js/Jetstream/Welcome.vue");
/* harmony import */ var _Components_Charts_Anual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Charts/Anual */ "./resources/js/Components/Charts/Anual.vue");
/* harmony import */ var _Components_Charts_PieTramite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Charts/PieTramite */ "./resources/js/Components/Charts/PieTramite.vue");
/* harmony import */ var _Components_Stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Stats */ "./resources/js/Components/Stats.vue");
/* harmony import */ var _Components_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Actions */ "./resources/js/Components/Actions.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Dashboard',
  props: ['dataset', 'concluidas', 'byTramite', 'today', 'week'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var dataYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.dataset);
    var dataConcluidas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.concluidas);
    var dataTramite = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.byTramite);
    var dataToday = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.today);
    var dataTramiteNombre = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.byTramite);
    var tramitesNombre = props.byTramite.map(function (item) {
      return item.tramite.slice(0, 20);
    });
    var tramitesTotal = props.byTramite.map(function (item) {
      return item.total;
    });
    var chartData = {
      labels: ['Solicitadas', 'Concluidas'],
      datasets: [{
        label: 'Tramites solicitados este mes',
        data: [dataYear.value[0], dataConcluidas.value[0]],
        // data: [48, 44],
        backgroundColor: ['#f87979', 'lightgreen']
      }]
    };
    var charDataPie = {
      // labels: ['Solicitud Correo', 'Asistencia Técnica'],
      labels: tramitesNombre,
      datasets: [{
        // data: [dataTramite.value[0].total, dataTramite.value[1].total],
        data: tramitesTotal,
        backgroundColor: ['#F65988', '#F78B73', '#F2AEF0']
      }]
    };
    var __returned__ = {
      props: props,
      dataYear: dataYear,
      dataConcluidas: dataConcluidas,
      dataTramite: dataTramite,
      dataToday: dataToday,
      dataTramiteNombre: dataTramiteNombre,
      tramitesNombre: tramitesNombre,
      tramitesTotal: tramitesTotal,
      chartData: chartData,
      charDataPie: charDataPie,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      AppLayout: _Layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Welcome: _Jetstream_Welcome_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      ChartAnual: _Components_Charts_Anual__WEBPACK_IMPORTED_MODULE_3__["default"],
      PieTramite: _Components_Charts_PieTramite__WEBPACK_IMPORTED_MODULE_4__["default"],
      Stats: _Components_Stats__WEBPACK_IMPORTED_MODULE_5__["default"],
      Actions: _Components_Actions__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Icon",
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'NavItem',
  props: {
    item: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var hasActiveChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      function hasActiveItem(items) {
        return items.some(function (item) {
          return item.active || hasActiveItem(item.children);
        });
      }

      return hasActiveItem(props.item.children);
    });
    var __returned__ = {
      props: props,
      hasActiveChild: hasActiveChild,
      Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.Disclosure,
      DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DisclosureButton,
      DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DisclosurePanel,
      ChevronDownIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=template&id=66375802":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=template&id=66375802 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6"
};
var _hoisted_2 = {
  "class": "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
};
var _hoisted_3 = {
  "class": "mb-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 class=\"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-indigo-600\"><span class=\"relative inline-block\"><svg viewBox=\"0 0 52 24\" fill=\"currentColor\" class=\"absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block\"><defs><pattern id=\"18302e52-9e2a-4c8e-9550-0cbb21b38e55\" x=\"0\" y=\"0\" width=\".135\" height=\".30\"><circle cx=\"1\" cy=\"1\" r=\".7\"></circle></pattern></defs><rect fill=\"url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)\" width=\"52\" height=\"24\"></rect></svg><span class=\"relative\">Flow</span></span> Sistema de Gestión de Solicitudes de Atención </h2><p class=\"text-base text-gray-700 md:text-lg text-indigo-500 font-bold\"> Delegación Regional Noreste </p>", 2);

var _hoisted_6 = {
  "class": "grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4"
};
var _hoisted_7 = {
  "class": "flex flex-col justify-between p-5 border rounded shadow-sm"
};
var _hoisted_8 = {
  "class": "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-2 font-semibold leading-5"
}, " Nueva Solicitud ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-3 text-sm text-gray-900"
}, " Agregar nueva solicitud de atención al sistema ", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "flex flex-col justify-between p-5 border rounded shadow-sm"
};
var _hoisted_12 = {
  "class": "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-2 font-semibold leading-5"
}, " Ver Solicitudes ", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-3 text-sm text-gray-900"
}, " Revisar Solicitudes de Atención ", -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 0,
  "class": "flex flex-col justify-between p-5 border rounded shadow-sm"
};
var _hoisted_16 = {
  "class": "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-2 font-semibold leading-5"
}, " Administración de Trámites ", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-3 text-sm text-gray-900"
}, " Gestionar los trámites activos en el sistema ", -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 1,
  "class": "flex flex-col justify-between p-5 border rounded shadow-sm"
};
var _hoisted_20 = {
  "class": "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-2 font-semibold leading-5"
}, " Catálogo de Requisitos ", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-3 text-sm text-gray-900"
}, " Gestionar los requisitos del sistema ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetApplicationLogo"], {
    "class": "block h-24 w-auto mx-auto"
  })]), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LightningBoltIcon"], {
    "class": "w-10 h-10"
  })]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetNavLink"], {
    href: _ctx.route('solicitudes', {})
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ChartBarIcon"], {
    "class": "w-10 h-10"
  })]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetNavLink"], {
    href: _ctx.route('solicitudes.list')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), _ctx.$page.props.auth.roles.includes('Admin') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NewspaperIcon"], {
    "class": "w-10 h-10"
  })]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetNavLink"], {
    href: _ctx.route('admin.tramites')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.auth.roles.includes('Admin') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ClipboardIcon"], {
    "class": "w-10 h-10"
  })]), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetNavLink"], {
    href: _ctx.route('admin.requisitos/')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_22];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Bar"], {
    "chart-options": $setup.chartOptions,
    "chart-data": $props.chartData,
    "chart-id": $props.chartId,
    "dataset-id-key": $props.datasetIdKey,
    plugins: $props.plugins,
    "css-classes": $props.cssClasses,
    styles: $props.styles,
    width: $props.width,
    height: $props.height
  }, null, 8
  /* PROPS */
  , ["chart-data", "chart-id", "dataset-id-key", "plugins", "css-classes", "styles", "width", "height"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Pie"], {
    "chart-options": $setup.chartOptions,
    "chart-data": $props.chartData,
    "chart-id": $props.chartId,
    "dataset-id-key": $props.datasetIdKey,
    plugins: $props.plugins,
    "css-classes": $props.cssClasses,
    styles: $props.styles,
    width: $props.width,
    height: $props.height
  }, null, 8
  /* PROPS */
  , ["chart-data", "chart-id", "dataset-id-key", "plugins", "css-classes", "styles", "width", "height"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
};
var _hoisted_2 = {
  "class": "grid grid-cols-2 row-gap-8 md:grid-cols-4"
};
var _hoisted_3 = {
  "class": "text-center md:border-r"
};
var _hoisted_4 = {
  "class": "text-4xl font-bold lg:text-5xl xl:text-6xl"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
}, " Total ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "text-center md:border-r"
};
var _hoisted_7 = {
  "class": "text-4xl font-bold lg:text-5xl xl:text-6xl"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
}, " Concluidas ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "text-center md:border-r"
};
var _hoisted_10 = {
  "class": "text-4xl font-bold lg:text-5xl xl:text-6xl"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
}, " Hoy ", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "text-center"
};
var _hoisted_13 = {
  "class": "text-4xl font-bold lg:text-5xl xl:text-6xl"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
}, " Esta semana ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.total), 1
  /* TEXT */
  ), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.concluidas), 1
  /* TEXT */
  ), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.today), 1
  /* TEXT */
  ), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.week), 1
  /* TEXT */
  ), _hoisted_14])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  width: "180",
  height: "90",
  viewBox: "0 0 180 90",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  width: "180",
  height: "89.6751",
  fill: "url(#pattern0)"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  "xlink:href": "#image0_1_2",
  transform: "scale(0.00361011 0.00724638)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("image", {
  id: "image0_1_2",
  width: "277",
  height: "138",
  "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAACKCAYAAACEqd7AAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO1dCXgV1dl+bxKyQEJCyAqENSwCsqqgskSruFAFF6RurRvaakXEuvy1/mpbt7pWaxdX9Hep2talrtQqoK24sMsaCCCBJGQnIXsy//PNnTNztrl3bhY25+UZ7sw5Z86cmdzz3vf7znfOBAzDwJGOX97zzoDG5pZzGhqapre2tvWqrWsY3tLSGt/c0hpXUbkvAYEAaAuwT3oewjF9AnFxschMSzH3M3qnIC4uBjnZaUhO6o6eiQlH/HP04RnVAFZbhemzCsASADtmTMvZcaQ/xiOSVBb+7xsL9u9vmF27v2F4ZXVtWu3+uhhiApskgqwRmkjMQgGrmJgWPHbSWVq/7FRkpPZEv6ze6JeVirjYGKVtPnwAWGqRDRHNkhnTcqqOpIdyRJDKL+7829z9dQ0/KiuryisqqUjhiSMkkQQTxWOXtAC4egTSUdMY6aSl9kROZir6ZvbCkJx0pd0+fFhYwxHMW4f7QzlsSeWmO96YW1FVc1tRcdnompq6GB2R6BWIpowbkdgkAamsVJ+SDomIAoiNjcGQfukYbG5pyv348GGBTCcilrcOV4I5rEjl1rv/MaC6uvaxPUWlp5WVVyc4BAC7A+uIIxKV4mr2uKkViTx0hGLXZaWRWXTUwCyMGJSFtJQeyn368GGBCGYRbTOm5aw+XB7KYUEqC3/12ty9pZX3bCsoHCKoAQ1xOAoEUsfWlVHViGcikRSLQEJhr+u0rU9GMkYMyMSIARnKffvwwWGpRS6LDvWHckiTyoL/eXXBzl3FdxYVl6WwERilo8uKQOrQurTw5g53LVeS0agZaMorhCKnBfd79ojHMUflYHh/3/fiIyR2ArjrUCaXQ5JUbrjtlQXfEZkUlaWoxABhxCW86SP6VhSiCKVSFKJwKacjLc7kcScUlRiTusdh4oh+GJ7j+118hMQhSy6HFKn84o7Xp2zbtuufe0wykTslPBOJLi3k0LFCIC4qRinnQiQhymmVEzjCs/YTE2JxzPC+GOaTi4/QOOTI5ZAglVv+940BxXvL39q0ace4gGDiuO2rv/DazqqQkUcTyKsKUdKD5VUiCdNGQG2TlZbdOwnHj8xB755+cJ2PkCCfy4JDwaF70Enl57948b41a/NvbWxqCjjqg1cikZg+oTuuQgB8pw9nBuk+ddfRfupGhNT2uqkWwuiBGZiQm4XYbtHKM/Thg8PvLeVy0ALqDhqp3Py/rw/YsWPP8p0792QJQ7gh9vXKA95NnzDk4s3ECX4qhKEp404kquljt59rHyTVQibRtNE5yE5NVJ6nDx8cyCS6bMa0nCUH46EcFFK57iZSJ5tvbWxsDojqA2KUahgi0f3aezZ9OBNLSdeSh+YTEZR1+5RJTkeqzBQMFsao/mmYNDxbea4+fEj4/YxpOQuU1C7GASWVm+94bUBxSflbmzZuH+d0eIlUvPpTuGOVhFQCUtN1BKNJ13zq0iIiIzdC0d4v24dNMoTUpARMHdkXqUnxynP24YPDGku1HDBfywEjlZtuf3XK+vUFi8vLKxOg6ThqZ/LgT5HUgi6tXaaPF4Kga0SFKSPneSEueVoAnPt2OCX4f2y3KEw5qi/6pycpz9uHDw7VFrEckLD/KCWlC3D9zf+3YPnytcvKyiqDQxjMTcBfKqCkSIXkPLVssAsGdFlWAUfZuBfiLA0lh6/KIgB2TW5jaUqeG5Eon1EcGTn79nFUkNCaWw18+m0hvsovUdrnwweHZABvLl62664D8VC6XKlcc8Ozz6z4ZsOVruaOzocg/2Jr1IkXf4o6MuSiKrTnhzlHzouS06KUcpH5aXQOW54wRcobktUTx+VmIDbGHx3yERIvWEPPXTY61KWkcslVT67auHHbOMU3oJCKft92tsr+FIUE+PKdY/J4N2uiNGm6cqQuotQ0V4LjY1ckE1En9QygV2IcThubg9iYAyJAfRy+ID9LXlcRS5d9+370k8e2BglFa+foD91/iJVzAqETuLLOr70XhDJ99GaNVN7O4n09HMGFqC+UYjKVT1Tw0zyOcsiJHVftb8JHa3ahqaVNabsPHxzG0toti5ftSumKh9IlpEKEkp+/c4iS0S4EVAJRP3RMI0LwpagF9SkyiahFAhyJ2ApMJhs+XyAb3t0iEwlnPkWJ6sYhF34LplfVNWPx2kLUNjQrzfXhg0OXEUunk8pcV0LRKRT111tbVklS8+UhV1fwnVhRHSLpqOpD8LmGLM+rFDVfVSM8QQVCEE0gyiEcIhF74xy6lXVNWLx2t69YfIRDlxBLp5IKEcrWLTs0hBJEwGVfzfWYp0kOuBCL1qzRkIV2U+rRmD4SWSnnSGaQ3VYlGtjlUxq+DshqJUoknbqmVp9YfHhBpxNLp5HK3B8/tjVfSyiaHh6qiNs+8+9qC6oVsrKhSrlBd46rHyWg7Ijt5eNN7HRJnXD+FDdiUYaUpaHmgOQwps8qX7H48IZOJZZOIZWrr3/mGYdQtJrAgUtyO4uFKKhXLKGgL66ShZgcsCnHzgrY/+nJRDDXAo65wztttaNHUuxKFLdxvhYdsfjwEQZjrcW3O4wOk8rPFjx33zdfr7tSyegw5I6s6djaNCm/PVLFrlt2EvP+FJfrBzTpyggU56jlrqX197ioFt5ZC25kSKd0iFj+u8UPkPMRFmMXL9vV4XVZOkQq829+ce7q1RtvVTLCQtMZO4KQ1YUnFtUDojlBSVads7xT1ikmqRWuPbxzWXD8Bhy1E5CHmqMccwfScUAxlRwVtK2kBht3H1Gvl/HRNfjJ4mW7OjQJsd2kctMvXxmwaWPB840NTZoe2InQCJbIL6jp7ApcymiTtd5b1R2kxMfIjQ8IqsfhpAB3LAfFcUQSxZy0qj9FCBS06vqmoBTFVXXKLfrwIeHRxct25SmpHtFuUtleULi8tLTC+3JkSsfUobPcqhqIXlXOtNGyht6KCXk9bWExQaNQ1DwufoW1kVMtzN8iB7+5EoptZgXPXbJhj++49eEFb7XXcdsuUrniZ39+c/v2wiwhUelEXtG1QkffxjDO5DBZ3sqFIhm30GHNPs9uQtg+c9JGSYSikhZvchGhfLred9z6CItk66VmESNiUiE/ysb1W2cpGd9ruDKLjVAlFB+ucFJA4BXekSvOZmZUIlagXjeAkqo6rN5epuT48CFhentmNkdMKps2bHu+oav9KD66HGt2lKGitsF/0D7C4c7Fy3aNC1NGQESk8pN5f1gSkR/le4PwM71DlRAmihtcWSP4n8FXQPnsBMMw981jK82QKlCv66R8vmGPkuvDhwYRDTN7JpUFt740Zcvm7dOUDAb12+sRB3CNXEPeCXHtEFkdL6cwh/s+zyhEIPZ+G4y24AaeWOyqpWtoLkNKZf2ucqWpPnxIGBvJMLNnUsnfsv2fHTJ7PHXS9hCMx3PszukQit35NHUI6kC4klpW2w5lnRpD2tPLE1tpyCqFEYpJIEQmjkphhOIQi2FdPlgRvy+QDoDV20rR1NKq3I0PHxLu8joa5IlUrrvx+QW7C0u6ZO2FsHDvmxFWEu5ElzLaZC3bqEkysWiOnSRrXyYDK9EhFIMze9osgmlzJxbDpW5rt6mlBV9uLlLa78OHBBoNekxJ1cATqXy7bsuDSmKHoOmFEUA5W0mQMkPmy9laFtEkS3rD9nVoiEM45FWJ3D5OTXDqRCYMplLQZm02wRiKn8W5Hm86OWRFyN9diaKKWuWWffiQ8BMvQXFhSWXedU89U11dEyP1FKVc58OLRNGlSfkd8vVoHJ1ClUqui90kt8OQ0rjOb7CrOupESygWiTDFghDmkFA3Rya8Elq5zZ8b5MMTwg4xhyWVLZu3/0RJDIkwTlCX5HYWC1EwckLRF9epDz5ZJR+ns4oEpFcpkpkimTmqyWMRCpFIG3PWikRjn2OrE8mRa48WOWZQcXmtr1Z8eMH0cGolJKnIKkXb6bSJERVQfJbafcUlEapeufNGBt05hoZceP+njnzEoV6uJt1Ijc7MsQjA3tp4tdIm5llEoxCLhmB488oZUTKwMt/3rfjwhJBqJSSpbNlUEFalyKaArkOqZXXl1JSweZpkNnriZjwpvORlk+uXCITnFDe/ijgqw7dVQwC8T0XJbxMUC2xnraRkLJ+Lej6nXqR2F5XXmJsPH2EQUq24ksq86/6i8aV0BErvDEFEaorKBrpsDZvoCnKd39CyinQVTRFDyRCvIZgvShv1ozSGIZ5r+kpY2TZRjZjH1iY4a12IRL2mqFJY+1Zs8dWKD09wVSuupLJje+FFSqIW7faEeoTGWQrnsgIFaAuybK7Xagqqho2z6UwfSEQAWQHw9XKdWXWccudqCED1p0jDydy+6KxtU85xJRYurah8H2rqGpXn48OHBFIrA5VUN1K57sbnFpTu7YRwfGc0U0x0gzy6qoXOvFESpDzXTAVaM8lO06kbrjxHMEoHVlSZIdbHk5J2xIepFjnwrc32t9gmUZt8ro5EJFLj8lZs9mcx+/AEbZStllT27q34uZIIl56mg1s5XbrCOpr9kEzjRijysG0IaMwbVYmoGz8kC54gVMpTTaKwn22qQmnjiKTNiVMR0g2RgJQ6+BEgHTHSWjnFlWhqbnF/Xj58BHGZ7jkoPpOFt708YMvm7UPCxuMbmvn8ujRXGJhx+gkYMmIAUlKTkdgr2Xx9DawJ+1Hca3PKi8tQXlqFDRu2Y/nyjdxSAdQ71KXgqGMHjICdxZolfBpWOWirUCDWIZam/hmQbt+uW/NI5Pbk9EnBsWP6IyU5Ed26RZvrpDS1Bp9BQgwtbWCgtaUVldV12FhQinVbSxUzi28LLxEN+1N2FqvExvabmlqwvagSw/unK/X78MEhefGyXZfNmJYjTDhU3qV81XV/eebrL9de6SzJIa3gyh+zNTwC/GIf0lKK3PuT09J6YeY505E7KhctMfF2HnsvVsCqixFKlLVvfgbXdkZsdABVZeV49eWPsXlLob0SmvPKi+BaI9fNPx8pGWloaFXpIsAtZMS99E+4flSA249y2hEd5bQrOirYrmiWHhUw94uKy/HQM0uk1fDZko9BUkpJ7o6ZJx+N7smJaGoxQt53dEC8TlxMAPv3N+D9z7eigF93lpGFwy5aEoFFqG6KibaBWb1w+uThyrPz4UPC2zOm5cwOSSqzL7i/aHvBriynK0o/4/xCzrqFgWSiCQSQnp6CH19zHpL79EWrYdgkEymhyJ2s5Lsi/PbeV4TlE6mO239zDRqMaOXuDwSh0H5TQyNueeBd7cr2vYhMThmDmO6J9qMNdd8yodB1g1twv7mxCW/8ayO2FVZJ5iJHLjKJ2GSjEgof13LxaROR1D1OeYY+fEgYNGNazg6WJPhUFt720gAiFLG8TmR7L3Htwotw/d3z0SOrT6cSCh33G9QXjz50jeBXufDiUw8qocREBRAf103bUU85cTjOnX1ipxEKXSspMR5Xnz8eV587RnHegvO16NSIjkhsR7UBbN/jL4vgwxMEpSKQyr59++9o3zNUaSUtLQX3PPlLpA0egpY2g1t/uXMIxexcAaBnajIevPcK+7oDh/ZX2oIDSCiU39baKo7uGAbmXZqHvoNz0NpmdBqhxERbx4EARg5Ox4Pz85CWFCfOCQpBIiKhqCNBu/dWK8/Rhw8NhEA4gVTKSitmquVD8IfKJWba5BPGYP5vbkCj5QfuKkKJsjpZVp90pKclm9dqI1/NQSQU2t9bXmMPCiX37I5rrzoNzVGx9lqznUkobJ8+eybG4d6fT0d6crwzIiSE9usds26f23eXodEfBYoY9fWNeOnlj3DLrX/E2rXbDrPWtwuz+LVWBFIxTR9lrooM9xzC5BPHYOaPzzXVCQ4AoURbacdPGma2jV2X4UATCn3W1zfZnfaiudNR3xrockKhz27RAcTHRuPhG09Cekq8ENbPz2pGmxQYBxcfC0it+C8giwSFu0vx+8ffsMmkomLf4dL0jsJWK/aQ8rULntMGspiQxkWdQy7DANIyUzDzx+cccEKh/QBUvjsYhELbu0s2mI255vJT0dCCA0YotE+fgUA0Hl14Mi7+1T8F0gAgmTtOYKDqWwn6qYhUBvdNU74SXvDllxvw6ZKVQsfKyxuPM884vou/395w/wMvmW3rzDatXbvVrDM1tSdOypuASZNGKmWOUOSxV3rYpFJTUzvb/V510RZqiYV3X4dG6z1VB5JQ6HPrtiKBUw4WodTVNWDT1r340XknoDk67iAQSvD+Y7tF43fz83DzY59YfyB+NEhSJ4CiUFiA3O6S9imVJUtW4f0PvtCm9+ubgTFjhih5Bwu7d5d22pWJnA61+ztAUJVKeVnV2I5c+7pfXIJGdDP320MogeZ6lO+twOoVm02jLGCdm9M/A4MG9UFmZioC0TFaQmlpasK3G3eZF6DOZY8yHWBCqaqqwd1P/AsDc3ojJSO9S5yyXgiFYVDfFMyckot3l20JpkiqRatUOEKh47LKGjQ2tSAuVomTDAn6xWaYd9XZGDq0H/LzC5G/dZe5zyCrGfplp194+qVnIFNiyZKVpmlBoPMvufg0JCTEmWl0LSIrAp139byzzU+63pKlK81Pdl7e9AnC9XWgOj/44Av7PAKRRF7eBPTrGwwIJL8Jazvtw7pPuo+//2MJ8DJw262XmO2g9hPByoqN7pPu4QgBLY6dMmNaThVHKpXJ8r256hMxdBRJKd3QlrQ/YkLpFg2UfbcbT//pTZSVVYG9TJh/ZScffzJyZH9cdeUZ6NcvM9gJrQ73xFMf2NG1H7/5L/RM7mEHmfHxMgGuTUNy+yJ7YI5nQnn/w6+D7afz2StH6V9U8DrvfbqB3STmzs1DUycRSlRzC8o3FKJkfSH2FVaadcQlxiH3hFz0OSobCf16aQmF4eIzR+HdpZtVMoGLUuHXxrVIhoilb2YvpW6vWLtuq9nxqGPyHZo6GiMDBuqo1AmpQ1KH0yke6uxUjgjo8cffEPKo45aX70NhYanpLJXPo42RHJ9OTlXC3XddaZIUTyiwiI3SWLuefvodm+QYSPHwJEHlqY1LJBMQlmKj8tSWIwj0fqAlJqlcf9OiuQ0Njc7X0ow7d/mWBgsIrDL6xGh8sfptnHP6WM+EEhfVhj8/9BI2bdrpEAmLn+cZy4qhpy/3hg3fYeEvnkJmZjJuuuEcjBjeH39++j0s+fxbOwDv6683CUQkv1eYD0brO7i/Z4Xy4SfrxJeks+hd7lWk9G/sqP5oMmLaTSgmQRitKC+rwb6Ne1CybBPqi6rRVNdkP31qT8nq7xDTLRrdkxMwbNpQTJx7HGK7xyp/KTKDrp07EU/+9RuBQCCoE2cOk0wo9FlYUhkxqYwZk2t3OiIA2ujX+7xz88yORiTDCIU6OHUuKkO/8kwFUDlSAgTqrHQuERPl0SdTCNCoEEY2TLnU1TeaRGDW/dV6rVphhEBt754Qb6oJcORH5xK5ULvqrGvLvhPzPiWQwoGldtjIECM45n85QpBnk0pzU3P4N5BJRMN3/W0V38CICkREKL+97Q+cOtF5giVy4fZL9lbj1ttfEAgjyD2s0zAiCqYZhvRLbnWqSEwee4KP3byAU791v1RkypTRaHG571CEEhcNrFhTgH/+e33wIiwyOb4bMCgd43rEoV/lflRu3YuYmGhEx0QhOjoKrQ3N2PLJJmxbugVHnzUOR88eh6hocZ7o5DE5+MOrXzkBt2y82460hdb0YSRTWhn5wk3UIamzUAfmf/UZafTt68wronLMacqD1AYjDuq0zE/BOrBAKrk5AlEwQuvdu6d5Tb4N/HngSI2hd2pPbLWISVYjMqj+cM7Y1N49sTW/EHfe9axy7SMMJo+YpLK/rr7dru9xJyajoKkO0dEB1NbuQFLSoJCEQibPnx/6P5SWVgV/zS2+CHIW66bOaI4RMIIKgScaroBDGJaqsTmFRdlyUwgMRgDBhEh8KKw6m7gYwRgBa3KggdRePdASE6e971CEUrevBvc8+6k4Z8q6hGHd66raBqzqFo3Tpuai9ZudQVKJiUIUbdHBbdNH67B30x5Mue5kJKR0t+vpkdANIwalYeO2UpVM5FeBCPvBMnvL2zcsSiTAfp1JcTBlQuZFruRXIZXAj8AQKckmSCSg+ui6rA6qj9QHOFJyAw0JM4KjNpVXVGsViBdQPbxqIlVDfqWO3NshDJNUzJ+0mn37XWeOuUalWL/2CRn7TEKhX81lK14OSSi0X/pdITZu2MHVLF3BcEsTs+TXewqH3AGLuhHnOBkmOUTilHWiY6H5NQ9e76Spo13v241QinfvxaNP/1uJclVWy7fSPyqtBSYNMp+3uVk+GGov+Xqqd1fi43veRX3lfuERzjpphHIN8Xq69OB91uyvV/784UAmA5P51MF7p4ouO1IDzNwg5yc5Xqnj8wqmX790uwzztcDyb4T7xadzwZlNRA5M6cjnkg+G0lg6IxTTpMobb6qg9qKcI+TJk0Yp93iEYQCYUmlqalbDUHV+FY2VUla30/xyR0UHsHPPlwgYDQgE4rUdi/wFT/3h7+rcf8Xc0SkXfpkDcV9QKwhKFb1aYeTjKBWvozyOyuHNHzaXKVh1n37paNPctxuhRLU245lXP7crcDSPo8Z4xcaez7+KqnHe+P4wNuyxVUrQ4RzcWhqa8cn9H+CMe841lQzh6KGZoiM2lFKxJx/CJs3SihqkpyYpXxM3kNwPjsyoEaWTJo0yOzv9ahP5ULmnn3lHKENKhsiGlWG+CPLLwFIQoYZtzzjjeOTnv2GeR+aPOSLDgTo3EQ8RCG1kmsBy1JKioDTegcsQ6WgNmUcMdB+y0/kIGv0xQS9zN0lld2Gxx7cPquNBlbVlJqFEW9vm7R9jZO5Z2o7VuK8apaWV9nAvX2NGRi/Mv+E85AzIthSE3BkdAqB4FboWO66qrsO9D7+JNet32R1fdPKa07GD3ZYNBlk+Fa/DxnZjmfYJSH4VWpYhPh5Nbep96wiF6n3p9S9sBRVwKFF4OobwvA3LIQx8WL4f56UlorG6PvhsOLUSMImlCatfXY4Jl55gnkkmED+ELJNLaD+LgcamZuXbEArnnpdnjnrwpEIkQU5LRgZufpdgrEe6axk6JtKhDskIQAadP3/+HHz55XrBdCHTh5k/dB3eRBpq1UmOXTLX+POY6cLazghJhuwApvPIX8MPbYNzLB9ppAIgxVz6YOzEa/VWToDv/mIaYfSxKSjtvsQmFFIs8fGJuHL2i2ZUp9yxNny9Bn958h+i78By7C566Q7ExMVp41DYPuvkMdHOcDID9YnrfvEc1mz4zh6lkYek2Xg35Z8+YyLOOGuK5ziUufOedEZ7nKEdbkQImH/ThZ4JpaWhHr959F1uZIq1k3viLM1+9uLOpQN7ozV/r1lfwFIqQVJx6jr5lzORmBH8tbzt4Q+xYetecXiZIxA3oqGP6ceOwIRR2iVJffjgcWNU2PB81cMh8AtPKKRYWtvqsHnnh0rHov3d35XwqtuufOq0MR0iFNaW22+azblTxOUkDemYzK1IAtt4P4rul5xZi17jUHZ8t1fv1+De6aP4VqRlI/MbW4JEEtATCmHDP9fYzyi3f2+N30Q9tve5hZ0iVSo+vrdI0a5R60BDJ5zDM76HSChs/4t1zwNGnRJ6/9Xy9RoHrYGpU8d0iFAY0tJ6OnULzl3RqUsdhVwUXgkl6JYwQhLL9BNHRhTYVlRSpe3IKsFIeW0O2azYXcGZPOK0BIbidYVoa20T7p13/PIEIjighQWyDf13wUeHwEaGHudGm3jkW8PQsr/pUEcYUgmNpLRWhVBMX0d0AF+sf1aZy7N3b6XY563vaWJiQocJhRAMJTdUtcK6FEcugQgIhe7J4DqWjlhM5RNBpGyADzJzUQ28WhHyLLJpJHJk6kQw90TUV9YJ7Q51TYd4uHQY2NUJCzZR5yDHpxwF29WgoWy6LnVQXec9WCB/EzmpdQ5tcujS8yKfD8XrHEbIi2lqah4dsr1yaAiH/RUxiIpXCYU+C4o/x9ia05GWPNzuXBnpvbC3tFIe9kH9/galM0dKKHZzDcdRy0aFggthBzuevQ/vhBLDzB84K9cZBrdotgHsKizDpAjm8gS4YW4+xI+BC61RH7xVOCMhFoFWw1oHVx2sY6goKEWPtESL/wxJyUmjQBwROyTsvGKkMxAuoCwUdKH9sEZRWAi9G6iD0hDvoRLBajqbl8TZ+wxEfOwe2ZyjwwkxjY2NuaHbq/lWWz23oc5AdA+VUILRngEsXvUALsx7EtGB7mYnm3zCKLzz9udizQbw7bcFmHjcUR0mFKdWKMPPzhAzC7E3PBOK6VNh9cCZrOismB/Atm1FEU0OHJ6bhQ+XbOBbzA0rg8Xp2jkBzd9h5qTBCHxRYBGK+/OhlfhNtEFUWLbyAkc00rAyK3CIWD/tDUI7FEEjVDSELYNIj2Jr6FM3neBQR4deaxp01OoJxXTaGvX4aOWvMWvS/aZZMGBgphqjAgP/ePNzXHnVD+1lDdpPKEHYMS5WTIq8b1krngklGKZiWDMKLDKR9kkV0Ur/dFteZhuPGt5XCMgLpVacdJFYhmb0xPaAMD6kxZ6VOzHwhFy89a91Tm1s6Niu3CV+BY6JFCnkWcI60K8yP3wbbh0SFqAmh9bzkOvU5dO0AAIF3ZEaoDYy3wU/4ZBUFT80Tu275JLTTELwOvuYVAc/m5mt38LmOhHYjGbYc6XWC7Oy5dnVdG2aqMmbTboZ3gcD3nwqhvOVdtKA7Rv3uxIKI5vq+u/wzbZFZqcaM26YxlEb3F35zUY0NzaguaERjebWgIb6RjTUNUb2fRY6BASpL+wHvBOKfars0ITjd6D9KKPV8/IF9H6fmSePUnwaOj+H/EZCyhuVm4G4ljZxGkIItLaFv47u2DCM9vCJ+WWnThqOUCgknu/8bOkAnYnjBbo6Q0HnY2Hrq1CnfpxbxQ22aRKc5Og2+6ndexsAACAASURBVJifHU37LHiPLyObgOw5UR7dP5/PCI+1g46pXtkPQ/f81NMH36nbAaVioLqyCWN7pmNfQ7mWUILHUcgv+TcGZ45Hv9QJZpDb3r1VtlphVsodd75gdxDnlR9BX8En7/0aiYlq0K8O7EViounD/CjOfnzZFkRHneyNUOx6LU4KwN4PBJxo24rSSqRnp3teD+WS8ybhq9U7sLe8VlQlnIrTqRC62m0/mYrlj33s6keRsbesRnI2Q4oZCKVUIKgqL2AdD1aQGf06yySz/Mv1wlokFFDGlhSgX3Y2S1gHOdqV/frzdZICISWiWz7BCz7gzmH3YE47sF5bEm72MflvWMcnZUMBgfQZXKgqHbslByybIwVOEdXXBeulPLoHuhZPZKxdjGQoj55fv4M4FSDi0R/5q9UrNickobD9Tzc9gpJ9q7DwljkatcLZ+NovdqQN1ARyQdyvra5CW8F/PRFK8FT3ldNYmPt//rshogWWYmOi8KffzkVmaqJWQcjKgm3P3HMBqjYXm1GzXtB7aCbWbtoT9hrOvUkjQYh8SJn90gajaPXkwBSBuZDRuq3m6Aw7r72zeflV3Mgv0REwAuTvYag1fQDW7GMW4k+brMr4tvALPLk9D35WNpEHlafrMbOHTSngweYR0WpzDPUH+QX73pWKdi6QgYqd3RGdFZpQ2PG/Nz2K00YuxMmnHI1PPv5WUiuOsyX4+6w6Jj021J45jIA4Lyi47/hXql6/BX1vX4qYqG6hCQX2TzsMGmmxzUGrndYs669W5OPCH51kHntesa1bDJ6+fy4eeuZTLPtyq1WvCmr2qGFZuHvBGYhubsXiN1cqZdxAM5affmGpEG+iVSrcfQokisiViqd2WX4H6ihsjRTWOXLDOChD+VQOBL5ns48jQlRcXNzWjlTw2Qel6B7fIyyhMD76aMMjyJuThNPPZhOjOX+NRsDou1gIaIdKVeVDZovRXIuyZy9BNFpCE4rdFGlERH6VqGGgIP+7iJeAjI2NwS+vPRXPPXgRLp8zSVISbTh92gg8+7sf4cH/mYWEuBh8+dRSpX2h0BQXg5r9DVqlEiqNv69I/wy8o5OZAPIvKP/rSr/ebKayrqzn63IzipkpUVffIJThnai0DAM/Q9ntHpiPh8WVeJl9zB/zy2G6+Xv4WdkshoWZU7DI63BY0CkmNrbbt0qqGyy1ImgIw0CvttEoj14RllAYvtrxN4z+wYk4btJM/PpX7wkjQZ2lVuwAEmVms2FfJhAdQHPpFhQvuhT9r3oZUYFuSk1OlYakUpjbxwqMs6p+5W+f4547BwojWaEIhUefjGTM/eF4c3PIzylAkbGfPbwY1XsqleaFwqJ3V3LDwgbH1Y5ScUaCpDT+nAjAZgnDclay2cWwOges0QrygbC4DN45Ky89ycCvkyLPIKbh2VB1wpo1THVQ/azjshnKMvh74GcYU7t408pt9jGV46/DB/3pyIGfuc0rIYZD5S0E4RB97ORZk3d9t+f0MOUcaCYZFu9oxeBjGtEWaA1LKAxltbvQGleOO278OY4ZMwqlZftQXFKpOGl/fs1MTBw/xOykXvDMi/+W6tBM1gsEMCwzCiNi1iOqWxSMxkrUb/8MPYZOR1RsD+1VFv3Viq9h9y8tpsRA7/wZPiQDmZkpERGK7jELhNLShmWPLMa+CAnFGJiKt9bttA4gKj+DIwuZTLg0Is2jRwxA/wicfz179sBRIweaBFBS4rSZftFnnT3V7EBk+k2cONxcPCl/qziD99RTjzPrkEH17dhRrKRTfVOmjDE/qU4CX44699lnTbXXWaElI+n6/HWZGcPUErsHSP4R6twDB2abW03NfsHPwQiHFmrnr1NesU8YDqe2Uv2f/2etmTbyqIFm26hOSq/Ztx/7aoKR0ORbOfvsqc5SDwFH7UycMNwkyubmVqxcuVlIO0h4IfCzG55d8J/PvnnU+/WdIUy+W82+Kht1KSs8EQqP+G49MPPoKzCm31TzO7yfWxCIwvcjxeQf3K4ZQVKJ5YfjYnBOtzcQiA2Ya44EugUQk5iMtB/cgsShKsdOn31/8E6FhbRhk5Q88/q5J65BQkJsuwhFxr6ianz++489O2YZ4pIT8HxxGSr2W/JfVh3yFAaIxGNw/pUTjxuJKceNUq7hw4eEu6P++NgVjynJIaETwgbeerYIWYlDIiIUQkPzfvx95RP409JbUL5/j0kkbGsfDEm6y/4V1mkMBGICpgnEPo2WWpR9cif2vH4uGvZ8Kd2i2tHYqI/qhzDw0OPvdJhQSJ2sfeNrfHr/+xETCmFZQwPKa+uV0aNQIz/2iI8wGkTzqkKYhj58OKjq0IRCORjun0+2Ibl7WsS/xITi6h144pMFeG/tM2horlPyvaCVZuMKQ9LQkIxhx4GYZGIRiqlWYoKE2FpfjPIlN6HkvTmo3fQCGgo/5BY44mf18sOvEI43bN6Nl1//rF2E0lzfhE0frsMHt/8D2z/Pb9/zzE7CV7v2CgSiDlHzpAgtmbDjzDSP63j5+L5jtTmk3LdfVpX31d9chpdhoLKsEd/+MxPDZ9ajsSXydU1hOnEXm9uIrGNx6siLkZbYRynjBvJnOMFv1uwZzmEbDHxjq20HHbWmqmKKhVMttLU1lmB//vNmGnCqNYnQcSRDWALSWXrAPA4E8Nb7KzC4fxpm/uBo9XFJICds2da9KFi6GUXrCrlJgmFO1KCyVwLeWF2gulcln4ohHTtqjEtnSiWu40qFBb+xVdm+T+Adtew1JUcogi8Ti43t1tDe+xNHgoA1X5Xju4I0zLqxFZUNe5TyXrGp+GtzS+mejgk5J2HCgJORFJ8a8uxPlq0T22RAJBLu0+y0nFJx3bc2GE48ChvpQYDjV3EGgN2Oh//8EWpq6jB31rGIigoKw9rSGvOkih1l2Lup2Pzct7tSWA6yvYRSnJ2I11cVcC2Q/l5yvAk/BcMQCYZPy0xv/8vEZHRkljIDjeqwUR4GFl16KKKCG4Km1fk7ExTWT47bQ4GsZ0zLCSqVpJ49yG2cpZQIBRe1Ql2KFMvbj8Zh1rwxqIxZG6KS8KiqK8Unm183NyKYYRnjMbLPZKQn9UNinCOuCneX454H/273eCfQTVQodrqlVGR1IpOJqVgSBgoqxZmhLKkWFrJvFWNP56mXluGLTzfi+EAc6ktrEWNHIAdXxBfJhC24FBmhxMR3w4puBpau2qYOGQt/Ik6pQCUSXXpyUnccKiASofktujk7NBRLoz+Hogowh8i/6mfG31BcS1egM8i6gzCHGU1S6dE9gQbZp7e3PjluhXoFEcui+4ox9rijMPHsBpQ3blfOixREMMw8YshI6o/Uhsl49IGvrdEdOUZFTyz0KZOJ6VeJVgmmqiXTurXgvQVYvA4Xn2KrGHtVWZFc1lHQVI94zDqqP6IKyu0V8AMu68tGwinR/VPx/PoCVNRyglNDKlqykSeLakaEMtrpT+mKWcr0q8wIhX+/cTAWZK8d28JmABPJ3DB/jlkvmwPEr70izwtisSK84vEyIzjcjGU+iI3ebpjqojCYicgihtmcHz5gTl5APBSoPaTo+HidLlR0q8FIpVtst9VKthdo1YoIMofWfB0IkstpUaiNLmi3v4VHr/i+qNqWjbcX70NVxVdhFYpyjPBkYm6xiXj0b8mA0SxOK7D7nqhatORilaysrcei1ZsxOL0XfjgwAy07Ku01Zt2WgwwFIpOPC/Zg7fL1dinRea5RKghNJLrYlfaYPtTJ5HcZy2AzivloVjZLmdLkLz6LMAX3knYG9uIyGbqFmdhqahQXIgetsU4M7oVmuvugTs7erYwQM5Z170veavmV+PuSwe6TvTdafg7UpnkJZysBgiwgkJ4N5elUHd0fRRJ3gankkMoTD1/22tiJX/1VKeIF7Fdao1bAHa/5qgJrqe+jJ048dSgGjo5CbGo1mlCNmsaKkBeKi+mOpOhMtNb1RFVxN/zno2pUlTcCAfbHEBWKF2LZWtyGhtETkYg9CLSUiYqFnLfdM1DeOgiPvZGMb7c1OdfhzJ9QKkVI42YyU8a2vZV4fG8lUpMSMGNIP+TEx6GpsMp1OUge8dnJKI4y8NmOYmz7IozPSnbM8n8foZwhluJGzqho/34ZiBRdMUuZn9XLwvHlOiOZE8TeisjeMWR21pc+sn/d6fo6n41uRnC4GcvtBd0PXZeUEbWXJ2tST7qoY3ZvREbs2mwWN2s7tZu9r7oTYS4OY08ojHgEyIZDJ7LTVlllyDr+z79K8J+PWWYsAoFsc++EU9KF11BsWl2DSpM8qKvSau4VdhAb36GFsH6PxLJ+ZxOueK43LZetBMtBCHJrcpJ5lcIv0qQjEl1awOnZ9FFeU49XV+fbtzxhUBZ6xsViSFJ3cz4QzBe9tWBnTR1qGpvx5c4S+pkCpEfLP2IFIdSKm6oxJOWSmRG5UmnPLGV+gWfdXBxdmrx8ZHmEr2g1r712qxISrwM/I1iez9RV70tm90fqTfdiNhm/e+BaO4VMT4aTLNIj8mP1kLk4CZ1KKo5SIfROS1mzu7C4fX4VrRmksoqwOgiXzU7/78elYsQuq1Mzk1mZ28Pm5ih57sQiHGvIIcBdCjxJWe3gZyjDermYQiRwmMTg9mWCoawV24Nh5Z/yT055rtw53v444nX4v5l0rFMrGekpiI+LVWrtDEQ6S5k3YWhGMJuEiIuhfcF7OPArr5lLDOTmKCNKXtCVM5aZ3wWWH4deH9uetWEOANbMmJZTBX49laSkxLc647rhvrj6ki77dnluTRQujV8vRV9eXJ/F9VgJatPUzweLCYFvEGbz6up00vkgNDnYDFK+E0jXsU0NalPaJq0VA+6cAf0ylb+xF3TFLGUiHUYs1GGZ01Y3y1iYibwuOBFfnq3Mn0PLNQZf4u6+cLYb2vu+ZL6NjDjk+2YEx0y1cOYKPW97jpFmxjZvlvLPvxNgv1fWVioUrj92YiRzgCRo1YoKoRh3EFwDVpQuBkQTx17Amjd7DN6fwlfpokjsOBVOdTCVwY8M8cf2mrSqamGjPLLjlu0HuH3bq8KpFMCuRgBbA1fJ6MDfR61JXNJA99L7ATmRRRowdNUsZVoNjfwu1HGCa7mKTkxGCnQueyWqrhyt3sZ3avndOpGQS3vfl0yTDdk9y+97ZuewZ0X3K8+mZmX4l98zxUQEHer5klnaFf4UQvRdd91lp3708dqfVlXuS1SKe4ZusqFGwgf4KAxx+NQJ+OLr4srYs6TFtIBwDu/wVCcTupUR/Cp8rIh8vnJrAfFScjElPSDlyc9HvU7HoV8TxS0YDhbJnDljMmJoBfII0VWzlCmN1ACdQ7/KLexNAcwZeebxdt0jRw5Ec0uLMMOYOT7NFdz6pZv1lZRUCKqFOhtrIzzMCGazi0PNWKZ0ds7QoTn2bGTdeXR9mpVM+TR7WZ5NDctpfOqpx5r7VMe+mv2Cj+qkkyYEzx85EDHdooUZ2/Sczjsvz6y3E/GzIQOSTSkY4L9UV137l2e+/nKN+s6ASOCyJEBIYgmIPVAlBJVEdGmRE4sLkXDnyUQEnkh0aXBIIQCVIGii5BP3XYLsjBScceFDKnlY1eYOysLlF07FE8/8C8V7XSIwbcWn5GhhaInFXa0MH5qDC845WVeVjwjBx8McypG/7cTbM6blzGanChMKe/bs8ZsOV8+R1NlnTcZv7roUjz18DS6+8CSpnP4ceUjTcTKqvpYJ44fgm88fxsP3Xc7Je9EnoktjPhF3P4uTduWlJ+O/i3+NCWMGcb4IiD4KK23q5OG44uLpGH/0QDM9d3AmLr9oOi44+zi73H2/Oh+5gzLx/r/XqH4Ozt8yZdJQaxsm+T6cf8L1+X8uPhgI9875dqAv017Tx4cIUlS8SaRzQh/mWMI3X9A/j9x/yc7Z23YVby/Y1bFvkwE8+/QCHDNhqJ2UN30Mamrq8c67y5GUlIDhw/qZP+8rVuSb+5RGP72b8wvNcvQ73yc71dxqahuwOX+37XdJSkzAsGH9MHxYcLJhElsmwTAwYUKu+QO+Jb8INfvrkZ3ZC32ye9s/6lu2FZn1TRw/2EoJYOWaAs7vEhylGZabZdabnZliVR3svNkZvZCdFRxiXbl2h+BbueCcSSah1O5vxOlz7scFsybhjFPGmmVfe3u5We65l5YiKzMFxfRGAatDDx2ciaKSatTWNSA7PcU8f9l/N6F2fwPeeNsM7jHfJkDlCKvWfWd+ZmYk2+3LLygxy0uyQ4FIstIfTRglMjB8aH/lfB+Ro7e1DCSZOKRSDuZK910EYZBHMarS0lPf216wq0Mm0KyzJpmEUlRUgRtu+gu2bCk0iWNPUTmOmTgUjz10tb1eyoOP/gM333iufW5tbT3mXvKAWf6R313FpTdg5jl3o2dSAl598RbllR1JPRLwlyevxbDcINFQB7vm+j/hpvmzMGHcYLvcex+uwJ7iSsy77BQ7LX9bES6Z97g1GhzAj84/AQuunSndlYEzTx2PX93stPWzLzbh1rteMffJ/Bk6OMjFiT3iMO7oARg/ZqBdduigLLPN994x18wnbN1egnsfeQfPPT7P3P+f376B5x+fh/ztxVi1dicuv2ga8guKzXt54t4fo4d13of/XosP/r0W994+x04jE+mK+c+Ya9Gy9vIfKnRDzbzp0x8pyR1wr/mwwaYFHKEg02cHf2sKqVgmUIdIpU+f3ubnJ0vWoG+f3rj1F+ebx19/k29+EqEsWboWL736KXbvKceePeUmmfx03pmYOCEXJ00fY26Ehx5701QrF82djrNmHmfuU+dc8tm3WLFyK266YbbZDy6cO9UklKeeW2yqngvnTDW3hx9/2zx+6N7LkNgjHks+/xZFRVVYuXobsrNSsfD6szB0SLapaIqKK83RIUYov/nd30xCmjljgtnZrvrxySguqcKjf3rf3J96/AiTSKjjk5Ch+let3YHsrBRceUkesjKSsWrdDlO9UOe/8uJgGND1t71o7hPxUPpnyzebptOix+cFj/+72SFNw8AVF04309945yt89kXQ2Tf/6hlm2hNPL0bu4Cyc8YMxuPyiqXj8qcXSX0NhDi2JyGV9leLDI5RQFIVUyASa813Rti2bt6sTKSIETfmnDp2Y2B3Dh/U1T2bEsmlLIb5ZkW+aJrcsPA/Z2c6yBkncqm+bNxeaSodIhdJZPa/8dYnq/AVw9RUz7P09RRXYkr8bd/7yR2aHf/fDb7Bk2XqcdeYxWHj92WYaAxFBUXEFJowN3vbKNdvx3ocrbVOHzJ8sy9R44K6LzE9SEDW19U70m4WVa3bgzFPHmfmr1uywfSxEIoQn7v+xdX6j2YMf/8tHJqkQSaxet9M0la6wCIiqZueR6VRrKRHyyxBef+tLjD96gEkqQylNntfDH2lViyFxi4G4uFiMGDZAKenDh4TqGdNyFsmJ2pXf0jN6/0FJjACMOC656GTTP/Lyq5+4nnz2WZNMQnnwkX9g3s8eV/Ih+XH37AnOE8qbdjT6ZHHh41YZUjAXXfYIzp5zD159fZmpVn54xjFmZ3z3/W8wbGg2Ljx/qkkol1z5GJ5e9LFzEXr96upgoNaw3GyMHzfINKsYSKUQXvvHf3H8Kb/CrXe+HFQ3zHFr4f3Fq0yfyWtvLrc767AhWaZqgUkEy3Ha+ffj57c8bxLQLxfOss81zSYiEe6etxYEhwPnzDrOVD+0bS0oMdOmTB6OqccHF3oOKiZNoJvBng8XuMet/mZw6fQxYmh/xMd3TRStjyMKCqHAjVQoEC49o3e7pxJ/s2KL6ZAlM+fRh67Gr++81EwnU8eG1WkYSdy88Fw8/af5wbSiclPl6PDKa0tMU4mUy12/CioGMoNeeW0ptmzdg7ypo/HKooV4543bcdaZxyJv2mizDJHInx//KW66fhb2FAev+dKzC2zfCvlZWITsa3//j1n+T4/Mw9zzTjDziTyefiFIQHPPPQFffPxbPHD3xWJntbBiTQHOveQRPPviJ2ZbCT16xOPZFz819y+YPRkf/e02LHrypzjhuKEmiRDh/M+vg3M6b18427lzw8CzLy0xVQ2plzeen4/515yGZ18OOtzvu+MCzJk1ycx//1+rBeKAMgLER/3KpONE2eZNm6B58j58KNCubx1Qgp8sdEbMyvDh/dA3u7f5uXnLbtPH0tMa+SHThHwpZMKQ85Y2Ihga5SFzxxz56dPbPDbrGho8h0wUMqlOmjYG2X1SsWXLbiyhFd/sUaG+polECund9782R4mSTP9EMACEOjmNDP3wzGPQJyvVJCLaiDT4+JXhuX0xfepIc6Ro6ecbUFQSzCd1RCbRhHGDsOw/G83RJFhRKdNOPMpURKQ+rETz2uSTobJFJVWmmUX+m/FjB2HVmu3mCNL0E0cgf1uxOQLEnLukOpi/huqkUR7KS+oRj2VfbA7WlZkSNLNqG7Dsi01WGyXo/7zOGI/kUxnYPxuXXfpDpbQPHxKWzpiWo32vrCupEKadfGtzdXWN4ndpNzTvDJIjaoNJUoypa3CcFGzHZwjX0gXJ8ecGuCJS8BukADYlsE08R4zCFc9T7l4bfqvclmuZ8JA8K8qfWvW1XHbpTAwc4H1dYB/fW5w0Y1rOEt3Na80fhmEjBr+gJHYCFCei/GUPMS3fCWBT8+Qp+07V4qRDJ8ZLDPaSA+PsoDLBH8HaxyYTiueI5oVjVsiTCJUyXCAbwJsrEM+LaBPPlU0j3tdC/wb0z/IJxYcXLHUjFIQjlWf+eM1VyclJLUpGeyHMK+Gh/IR2jFikiFwWc6pLh5Ru922ZXIxQ5MKRE6ubRarqCIYvw5MMpM6uOFy589023TlCUV3kbTD9pOkTlT+DDx8a3KUmOQhJKugKteJGLKo2j5xYbDWvEoiTbnDp3OiHRAxKiH9IcoFILoZIEDzBCGUk9aBVJXxYvitpRBKyD7GNVp3kS/FVig8PCKlS4IVUOl2toLOJRTwORSB2touakdUJXAhETy6sHg15SArEkNSCokxgSPXKpBN681KXrVqstuRNP0Z59D58aBBSpcALqRBGjxl+s5LYUXQasSAEsejzHHNIp1rEOvQEoiEX2WQKRTA6ktGYJaqFE4ZNFNLgTB5Dp2CC+ePGDMOggb5K8REWL4RTKfBKKhS3QmvYKhkdRZcSSyg/i00dGtWiM4kQnly0+XqC0ZogUMnAzQzy/E8xeVQFEx/XDSfnHas8bh8+JND6GwuUVA08v0t52PCBZ8XHx2l6ewfRUWIx+MNwfhZDyRNUS1iTCAK5KM5VOd+FYNydpWqn15suEdlB2jYw301e3jFISUlSHrUPHxLuYmvQhoNnUnnsdz/+fNiIQcuUjM5AR4hFMFVgdWp9vm0OyapFIBcxTzSJXPI1po9dI1/GxfxRiEYiGx0/hNsMjjh0agfmXKY0nDB5rPKIffiQQItaa6NndfBMKoT/e3Z+XkfC90MiUmJRiEM0f0KaQ5ryiqLRkYecryMPHWnYZ4YgGYEJVHMlUhNIX5eohM71V3Xz4Q2XRfKcIiIVwlEjh1zeJWYQwhCLckVDTdb4WdzNIS+qJUy+SxmnP7uQhUIysiJRmCByE8j1/ODHSXnHIjsrTfkT+PAh4W566bqSGgIhw/TdcPk1f3xz5TffznbJ7jjc1rnVhfRDE9avKRfQrJErXkM+R17EW5OvJGtX/daU09ydmqkvFzHUv++ggX1x5RXnKOk+fEhwnd8TChErFcLzf7n2nEGDc4qVjM6Cm2JRzBaWrPOzqKoFoVSLco5GmciqRGcauZg+kBSJwdehUzP8piRE4lwRD2m05+KLzlQeoQ8fEmi0p13CoV2kQhg8JGdyl/lXEIpYVDOHpSnJ8uiQm6/F1SQSy4jkopo94QkGXGdXTR/BZNISTjs2qa6LL/oh4uP176Hx4YPDbK+jPTLaTSq0QlyX+lfQDmJhPgopTT5Z8bUo5GJ4IBedeoEHgpHUg313Ycimw5uBM8+YikGD+ipPzYcPCTd6CXJzQ7tJhfDEw5e9Nn7CyAeUjM5EOGJREkOYQ1LndyUOp4R7GcG6YOXcyhoSn+jm8sgmD6Amtn+bMP4onHDCOOVR+fAh4YVIho91aJejVkanvIQsbEsVV2zIfLuUzkGqKas4cjXl9A5bfZqwdopSHq5OWm1Rj7kinL9rdnYafv7zi5USPnxIoHiUDv/ydEipMNCkw2HDB21TMjoTin9EgpYcDY1qUeuCbRIpiarPJaR60ZTVqRGuhOwzUcwcoWREkSrmlpWdhquuOl95Mj58SFhDSz8rqe1ApygVhjkXPbi1M1bhDwtlOJiHqhrsktosXWJAJ2a0Zd3VC1yVirb12vM7huzsdMybd77vmPURDiahtNcxK6NTSQUHiVig65N6VnAnF5fyWrNIW0E4goEryahJYQuEBRHJLbdc4ROKj3DYSS9x6CxCQVeQCg4ksUgdWO13ITq4EjDnpOsQcK1Lnx6eYBCxUvHKK1nZ6bj66jk+ofgIh05VKAxdQio4oMSiEoHS+VyIguXpc90Iwc00CnWOV5JRzwiXJCPbJxQf3tAlhIKuJBXCRT95dNX6b/MPzDhmOGLRlJHz9LnuROCuXkKfB55kXBsbOYKEcgHiE3xC8RESXUYo6KzRHze88sKN44+dNPZZl+zOhT2RLgjDbYRISXTy9Nm6+BOWI63Spj1Pf74wmmPw9WiHfcJiwsSRPqH48IIXupJQ0NVKheHaBc8tWPH1ukcaGhq7YIxDAy+qJYyScFcuHs4NaSJJreqEJ3LKKcfjlFNPUNJ9+JBAM47DrjHbURwQUiEsuOXFKd+uy19curc8QcnsKnTUJOLyXUuFZQ/5xWNe4M2BS36TORecjlGjcpU8Hz440OTAy2ZMy3nrQDyUA0YqhIW3vTSguKj0rQPmZzGhqgptP/VADpqqtGW8tCm8kgkN8p/MmXsG+vTJCFnOx/ceayxCiWhNzKQm7QAAAoRJREFUlI7ggJIKw0+vf/q+VSs33HrAzCHoSUNNgUdi6EyCEVvjRdWcOGUCzjrbX7XNR1j8fsa0HE+LVXcmDgqpwFItBdt2Ld9esCtLyexKdCq5eDCPIq0vBHr16okL5p5Jy064F/LhIxjQdllHZhp3BAeNVBgOimpBJOSiL6uHFwUjXdFj4SlTJ+KUU09Egj+64yM0fh/JyvddgYNOKjhovhYLGsJQU7gc90zXsu1jy+BZpErOmnWy7zvxEQ5LaTzkQPpO3HBIkAoDjRBt2bzjn7sLi1OUzK5GROSCdvtMvBINmTqnzJiCY44dreT58MFhp6VMFh0qD+WQIhUGimvZsb3wzkOFXNDpBON+LpHJqT6Z+AiPQ45MGA5JUmE4qOQCPcGoKRpozgsHk0xOIzI5OkxJH99zHLJkwnBIkwrD9TctmltcVHrPAZugKMOFJPSpGricD8tnQkTik4mPMCCfyaJDmUwYDgtSYSCHbmXlvsd2fVd02gGNzOURgiDcc0TEx8fjmOOCRNKnr++A9eEKioRdZJHJQXfAesVhRSo8SL2Ul1XeVrireHR1dU2MUuBAIATBQCIZCqkfdfQwjB491Pz04cMFRCQUTv/WgQqr72wctqTCgwimtrbuRyXFZXmHkv+FhoGH5PbH4CH9MdonEh/uoFB6ClRbcrgSCY8jglRkkIO3pqZ2ds2+/cMryqvSDpSSIfLo2zcTg3P7m2SSkBCvlPHhw/KPrOaI5KAFqnUFjkhSkUG+mIaGpnPq6xumt7S09CKyaWpqjm9qao6LxDdDJkyfvpnmPpEHrV0yJHcAUlOT0Ss1WSnv43sLMmGYD4Q+iTSIQHbMmJaz44h+KAD+H5pW0kJhmpAFAAAAAElFTkSuQmCC"
})], -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
  fill: "#6875F5"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
  fill: "#6875F5"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"
};
var _hoisted_2 = {
  "class": "flex items-center justify-between flex-wrap"
};
var _hoisted_3 = {
  "class": "w-0 flex-1 flex items-center min-w-0"
};
var _hoisted_4 = {
  key: 0,
  "class": "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 1,
  "class": "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  "class": "ml-3 font-medium text-sm text-white truncate"
};
var _hoisted_11 = {
  "class": "shrink-0 sm:ml-3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.show && _ctx.message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'bg-blue-500': _ctx.style == 'success',
      'bg-red-700': _ctx.style == 'danger'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex p-2 rounded-lg", {
      'bg-blue-600': _ctx.style == 'success',
      'bg-red-600': _ctx.style == 'danger'
    }])
  }, [_ctx.style == 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_4, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.style == 'danger' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.message), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition", {
      'hover:bg-indigo-600 focus:bg-blue-600': _ctx.style == 'success',
      'hover:bg-red-600 focus:bg-red-600': _ctx.style == 'danger'
    }]),
    "aria-label": "Dismiss",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.show = false;
    }, ["prevent"]))
  }, _hoisted_13, 2
  /* CLASS */
  )])])])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    type: _ctx.type,
    "class": "inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.open = !_ctx.open;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "trigger")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Full Screen Dropdown Overlay "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "fixed inset-0 z-40",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.open = false;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.open]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95",
    persisted: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg", [_ctx.widthClass, _ctx.alignmentClasses]]),
        style: {
          "display": "none"
        },
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.open = false;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5", _ctx.contentClasses])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content")], 2
      /* CLASS */
      )], 2
      /* CLASS */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.open]])];
    }),
    _: 3
    /* FORWARDED */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  type: "submit",
  "class": "block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.as == 'button' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])) : _ctx.as == 'a' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 1,
    href: _ctx.href,
    "class": "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: _ctx.href,
    "class": "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["href"]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    href: _ctx.href,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["href", "class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.as == 'button' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.classes, "w-full text-left"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: _ctx.href,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["href", "class"]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-6 sm:px-20 bg-white border-b border-gray-200 divide-y-4 divide-slate-400/25"
};
var _hoisted_2 = {
  "class": "flex flex-row"
};
var _hoisted_3 = {
  "class": "w-32 h-32"
};
var _hoisted_4 = {
  "class": "border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
};
var _hoisted_5 = {
  "class": "flex flex-row"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-bold"
}, " Nueva Solicitud ", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "w-32 h-32"
};
var _hoisted_8 = {
  "class": "border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
};
var _hoisted_9 = {
  "class": "flex flex-row"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-bold"
}, " Ver Solicitudes ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Actions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Actions");

  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  var _component_jet_nav_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-nav-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Actions), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_nav_link, {
    href: _ctx.route('solicitudes')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
        name: "plus",
        "class": "block w-6 h-6 fill-gray-400"
      }), _hoisted_6])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_nav_link, {
    href: _ctx.route('solicitudes.list')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
        name: "plus",
        "class": "block w-6 h-6 fill-gray-400"
      }), _hoisted_10])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "min-h-screen"
};
var _hoisted_2 = {
  key: 0,
  "class": "bg-white"
};
var _hoisted_3 = {
  "class": "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_JetBanner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("JetBanner");

  var _component_navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbar");

  var _component_side_bar_two = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("side-bar-two");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.title
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_JetBanner), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page Heading "), _ctx.$slots.header ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_side_bar_two), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "max-w-full border bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0"
};
var _hoisted_2 = {
  "class": "flex flex-wrap justify-between items-center"
};
var _hoisted_3 = {
  "class": "flex justify-start items-center w-1/3"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "mr-3 h-10",
  viewBox: "0 0 52 72",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z",
  fill: "#76A9FA"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z",
  fill: "#A4CAFE"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z",
  fill: "#1C64F2"
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden md:block"
}, "Flujo de Trabajo", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex items-center"
};
var _hoisted_7 = {
  "class": "ml-3 relative"
};
var _hoisted_8 = {
  key: 0,
  "class": "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
};
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = {
  key: 1,
  "class": "inline-flex rounded-md"
};
var _hoisted_11 = {
  type: "button",
  "class": "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "ml-2 -mr-0.5 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "block px-4 py-2 text-xs text-gray-400"
}, " Administrar Cuenta ", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Configuraciones ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" API Tokens ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-t border-gray-100"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Salir ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MenuAlt1Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuAlt1Icon");

  var _component_x_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-icon");

  var _component_jet_nav_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-nav-link");

  var _component_SearchCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchCircleIcon");

  var _component_ClipboardIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ClipboardIcon");

  var _component_BellIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BellIcon");

  var _component_MoonIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MoonIcon");

  var _component_jet_dropdown_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dropdown-link");

  var _component_jet_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.toggleNavBar && _ctx.toggleNavBar.apply(_ctx, arguments);
    }),
    "class": "flex items-center w-10 h-10 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full flex-shrink-0 mx-2",
    value: "Open sidebar"
  }, [!_ctx.statusSideBar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuAlt1Icon, {
    key: 0,
    name: "open_menu",
    "class": "h-6 w-6 text-black mx-2 cursor-pointer"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_x_icon, {
    key: 1,
    "class": "h-6 w-6 text-black mx-2 cursor-pointer"
  }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_nav_link, {
    href: _ctx.route('dashboard.list')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, _hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchCircleIcon, {
    "class": "md:hidden h-6 w-6 text-gray-500 mx-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ClipboardIcon, {
    "class": "h-6 w-6 text-gray-500 mx-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BellIcon, {
    "class": "h-6 w-6 text-gray-500 mx-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MoonIcon, {
    "class": "h-6 w-6 text-gray-500 mx-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dropdown menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dropdown, {
    align: "right",
    width: "48"
  }, {
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.$page.props.jetstream.managesProfilePhotos ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "h-8 w-8 rounded-full object-cover",
        src: _ctx.$page.props.user.profile_photo_url,
        alt: _ctx.$page.props.user.name
      }, null, 8
      /* PROPS */
      , _hoisted_9)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.user.name) + " ", 1
      /* TEXT */
      ), _hoisted_12])]))];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Account Management "), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dropdown_link, {
        href: _ctx.route('profile.show')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_14];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"]), _ctx.$page.props.jetstream.hasApiFeatures ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jet_dropdown_link, {
        key: 0,
        href: _ctx.route('api-tokens.index')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_15];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Authentication "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return _ctx.logout && _ctx.logout.apply(_ctx, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dropdown_link, {
        as: "button"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_17];
        }),
        _: 1
        /* STABLE */

      })], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 1
    /* STABLE */

  })])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "hidden md:flex md:flex-1 items-start"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "mt-2 px-2"
};
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = {
  "class": "mt-2 px-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.statusSideBar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionRoot"], {
    show: $setup.statusSideBar
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Dialog"], {
        "class": "bg-gray-200 md:block fixed z-20 inset-0 top-[3.225rem] left-0 right-auto w-60 overflow-y-auto opacity-90 border-r border-gray-300",
        as: "div",
        onClose: $setup.toggleNavBar,
        open: $setup.statusSideBar,
        initialFocus: $setup.completeButtonRef
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionChild"], {
            enter: "transition ease-in-out duration-200 transform",
            "enter-from": "-translate-x-full",
            "enter-to": "translate-x-0",
            leave: "transition ease-in-out duration-200 transform",
            "leave-from": "translate-x-0",
            "leave-to": "-translate-x-full",
            as: "div"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_ctx.$page.props.auth.roles.includes('Admin') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navItems, function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavItem"], {
                  item: item,
                  key: item.label
                }, null, 8
                /* PROPS */
                , ["item"]);
              }), 64
              /* STABLE_FRAGMENT */
              ))])])) : _ctx.$page.props.auth.roles.includes('capturista') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navItems2, function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavItem"], {
                  item: item,
                  key: item.label
                }, null, 8
                /* PROPS */
                , ["item"]);
              }), 64
              /* STABLE_FRAGMENT */
              ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TransitionChild"], {
            enter: "transition-opacity ease-linear duration-200",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "transition-opacity ease-linear duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0",
            as: "div"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DialogOverlay"])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["open", "initialFocus"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-12"
};
var _hoisted_2 = {
  "class": "max-w-6xl mx-auto sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  "class": "bg-white overflow-hidden shadow-xl sm:rounded-lg"
};
var _hoisted_4 = {
  "class": "flex flex-col md:flex-row p-6 justify-around"
};
var _hoisted_5 = {
  "class": "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", {
  "class": "px-5 py-4 border-b border-slate-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "font-semibold text-slate-800"
}, "Solicitadas vs Concluidas")], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", {
  "class": "px-5 py-4 border-b border-slate-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "font-semibold text-slate-800"
}, "Solicitudes por Trámite")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AppLayout"], {
    title: "Dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Stats"], {
        total: $setup.dataYear[0],
        concluidas: $setup.dataConcluidas[0],
        today: $setup.dataToday[0].total,
        week: $props.week[0].total
      }, null, 8
      /* PROPS */
      , ["total", "concluidas", "today", "week"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ChartAnual"], {
        "class": "w-full",
        "chart-data": $setup.chartData
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PieTramite"], {
        "class": "w-full",
        "chart-data": $setup.charDataPie
      })])])])])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "mr-4 h-6",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.name === 'open_menu' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavItem", true);

  return !$props.item.children.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md py-2 px-3 text-sm', 'hover:bg-gray-100', $props.item.active ? 'font-semibold text-gray-800' : 'font-medium text-gray-600']),
    href: $props.item.href
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.item.icon), {
        key: 0,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['mr-2 h-6 w-6 shrink-0 group-hover:text-gray-600', $props.item.active ? 'text-gray-600' : 'text-gray-400'])
      }, null, 8
      /* PROPS */
      , ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.label), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Disclosure"], {
    key: 1,
    "default-open": $setup.hasActiveChild
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var open = _ref.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DisclosureButton"], {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md py-2 px-3 text-left text-sm', 'hover:bg-gray-100', open ? 'font-semibold text-gray-800' : 'font-medium text-gray-600'])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$props.item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.item.icon), {
            key: 0,
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['mr-2 h-6 w-6 shrink-0 group-hover:text-gray-600', open ? 'text-gray-600' : 'text-gray-400'])
          }, null, 8
          /* PROPS */
          , ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.label), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ChevronDownIcon"], {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['h-6 w-6 shrink-0', open ? '-rotate-180 text-gray-600' : 'text-gray-400'])
          }, null, 8
          /* PROPS */
          , ["class"])];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DisclosurePanel"], {
        "class": "ml-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.item.children, function (child) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavItem, {
              item: child
            }, null, 8
            /* PROPS */
            , ["item"]);
          }), 256
          /* UNKEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["default-open"]));
}

/***/ }),

/***/ "./node_modules/vue-chartjs/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-chartjs/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": () => (/* binding */ Bar),
/* harmony export */   "Bubble": () => (/* binding */ Bubble),
/* harmony export */   "Doughnut": () => (/* binding */ Doughnut),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Pie": () => (/* binding */ Pie),
/* harmony export */   "PolarArea": () => (/* binding */ PolarArea),
/* harmony export */   "Radar": () => (/* binding */ Radar),
/* harmony export */   "Scatter": () => (/* binding */ Scatter),
/* harmony export */   "generateChart": () => (/* binding */ generateChart)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var ChartEmits;
(function(ChartEmits) {
    ChartEmits["ChartRendered"] = "chart:rendered";
    ChartEmits["ChartUpdated"] = "chart:updated";
    ChartEmits["ChartDestroyed"] = "chart:destroyed";
    ChartEmits["LabelsUpdated"] = "labels:updated";
})(ChartEmits || (ChartEmits = {}));
function chartCreate(createChartFunction, chartData, chartOptions, context) {
    createChartFunction(chartData, chartOptions);
    if (context !== undefined) {
        context.emit(ChartEmits.ChartRendered);
    }
}
function chartUpdate(chart, context) {
    chart.update();
    if (context !== undefined) {
        context.emit(ChartEmits.ChartUpdated);
    }
}
function chartDestroy(chart, context) {
    chart.destroy();
    if (context !== undefined) {
        context.emit(ChartEmits.ChartDestroyed);
    }
}
function getChartData(data, datasetIdKey) {
    const nextData = {
        labels: typeof data.labels === "undefined" ? [] : [
            ...data.labels
        ],
        datasets: []
    };
    setChartDatasets(nextData, {
        ...data
    }, datasetIdKey);
    return nextData;
}
function setChartDatasets(oldData, newData, datasetIdKey) {
    const addedDatasets = [];
    oldData.datasets = newData.datasets.map((nextDataset)=>{
        // given the new set, find it's current match
        const currentDataset = oldData.datasets.find((dataset)=>dataset[datasetIdKey] === nextDataset[datasetIdKey]);
        // There is no original to update, so simply add new one
        if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
            return {
                ...nextDataset
            };
        }
        addedDatasets.push(currentDataset);
        Object.assign(currentDataset, nextDataset);
        return currentDataset;
    });
}
function setChartLabels(chart, labels, context) {
    chart.data.labels = labels;
    if (context !== undefined) {
        context.emit(ChartEmits.LabelsUpdated);
    }
}
function setChartOptions(chart, options) {
    chart.options = {
        ...options
    };
}
function compareData(newData, oldData) {
    // Get new and old DataSet Labels
    const newDatasetLabels = newData.datasets.map((dataset)=>{
        return dataset.label;
    });
    const oldDatasetLabels = oldData.datasets.map((dataset)=>{
        return dataset.label;
    });
    // Check if Labels are equal and if dataset length is equal
    return oldData.datasets.length === newData.datasets.length && newDatasetLabels.every((value, index)=>value === oldDatasetLabels[index]);
}
const templateError = "Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components";
const chartUpdateError = "Update ERROR: chart instance not found";

const generateChart = (chartId, chartType, chartController)=>{
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
        props: {
            chartData: {
                type: Object,
                required: true
            },
            chartOptions: {
                type: Object,
                default: ()=>{}
            },
            datasetIdKey: {
                type: String,
                default: "label"
            },
            chartId: {
                type: String,
                default: chartId
            },
            width: {
                type: Number,
                default: 400
            },
            height: {
                type: Number,
                default: 400
            },
            cssClasses: {
                type: String,
                default: ""
            },
            styles: {
                type: Object,
                default: ()=>{}
            },
            plugins: {
                type: Array,
                default: ()=>[]
            }
        },
        setup (props, context) {
            chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chartController);
            const _chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
            const canvasEl = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
            function renderChart(data, options) {
                if (_chart.value !== null) {
                    chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                }
                if (canvasEl.value === null) {
                    throw new Error(templateError);
                } else {
                    const chartData = getChartData(data, props.datasetIdKey);
                    const canvasEl2DContext = canvasEl.value.getContext("2d");
                    if (canvasEl2DContext !== null) {
                        _chart.value = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(canvasEl2DContext, {
                            type: chartType,
                            data: (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(data) ? new Proxy(chartData, {}) : chartData,
                            options,
                            plugins: props.plugins
                        });
                    }
                }
            }
            function chartDataHandler(newValue, oldValue) {
                const newData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(newValue) ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(newValue) : {
                    ...newValue
                };
                const oldData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.isProxy)(oldValue) ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(oldValue) : {
                    ...oldValue
                };
                if (Object.keys(oldData).length > 0) {
                    const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                    const isEqualLabelsAndDatasetsLength = compareData(newData, oldData);
                    if (isEqualLabelsAndDatasetsLength && chart !== null) {
                        setChartDatasets(chart === null || chart === void 0 ? void 0 : chart.data, newData, props.datasetIdKey);
                        if (newData.labels !== undefined) {
                            setChartLabels(chart, newData.labels, context);
                        }
                        updateChart();
                    } else {
                        if (chart !== null) {
                            chartDestroy(chart, context);
                        }
                        chartCreate(renderChart, props.chartData, props.chartOptions, context);
                    }
                } else {
                    if (_chart.value !== null) {
                        chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                    }
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            }
            function chartOptionsHandler(options) {
                const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                if (chart !== null) {
                    setChartOptions(chart, options);
                    updateChart();
                } else {
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            }
            function updateChart() {
                const chart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value);
                if (chart !== null) {
                    chartUpdate(chart, context);
                } else {
                    console.error(chartUpdateError);
                }
            }
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(()=>props.chartData, (newValue, oldValue)=>chartDataHandler(newValue, oldValue), {
                deep: true
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(()=>props.chartOptions, (newValue)=>chartOptionsHandler(newValue), {
                deep: true
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(()=>{
                if ("datasets" in props.chartData && props.chartData.datasets.length > 0) {
                    chartCreate(renderChart, props.chartData, props.chartOptions, context);
                }
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount)(()=>{
                if (_chart.value !== null) {
                    chartDestroy((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(_chart.value), context);
                }
            });
            context.expose({
                chart: _chart,
                updateChart
            });
            return ()=>(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
                    style: props.styles,
                    class: props.cssClasses
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)("canvas", {
                        id: props.chartId,
                        width: props.width,
                        height: props.height,
                        ref: canvasEl
                    })
                ]);
        }
    });
};
const Bar = /* #__PURE__ */ generateChart("bar-chart", "bar", chart_js__WEBPACK_IMPORTED_MODULE_0__.BarController);
const Doughnut = /* #__PURE__ */ generateChart("doughnut-chart", "doughnut", chart_js__WEBPACK_IMPORTED_MODULE_0__.DoughnutController);
const Line = /* #__PURE__ */ generateChart("line-chart", "line", chart_js__WEBPACK_IMPORTED_MODULE_0__.LineController);
const Pie = /* #__PURE__ */ generateChart("pie-chart", "pie", chart_js__WEBPACK_IMPORTED_MODULE_0__.PieController);
const PolarArea = /* #__PURE__ */ generateChart("polar-chart", "polarArea", chart_js__WEBPACK_IMPORTED_MODULE_0__.PolarAreaController);
const Radar = /* #__PURE__ */ generateChart("radar-chart", "radar", chart_js__WEBPACK_IMPORTED_MODULE_0__.RadarController);
const Bubble = /* #__PURE__ */ generateChart("bubble-chart", "bubble", chart_js__WEBPACK_IMPORTED_MODULE_0__.BubbleController);
const Scatter = /* #__PURE__ */ generateChart("scatter-chart", "scatter", chart_js__WEBPACK_IMPORTED_MODULE_0__.ScatterController);


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Components/Actions.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/Actions.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_vue_vue_type_template_id_66375802__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions.vue?vue&type=template&id=66375802 */ "./resources/js/Components/Actions.vue?vue&type=template&id=66375802");
/* harmony import */ var _Actions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Actions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Actions_vue_vue_type_template_id_66375802__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Actions.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Charts/Anual.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/Charts/Anual.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Anual_vue_vue_type_template_id_22492904__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anual.vue?vue&type=template&id=22492904 */ "./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904");
/* harmony import */ var _Anual_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anual.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Anual_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Anual_vue_vue_type_template_id_22492904__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Charts/Anual.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Charts/PieTramite.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Charts/PieTramite.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PieTramite_vue_vue_type_template_id_ab0f9b3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieTramite.vue?vue&type=template&id=ab0f9b3a */ "./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a");
/* harmony import */ var _PieTramite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieTramite.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PieTramite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PieTramite_vue_vue_type_template_id_ab0f9b3a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Charts/PieTramite.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Stats.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Stats.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stats_vue_vue_type_template_id_628d09e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.vue?vue&type=template&id=628d09e4 */ "./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4");
/* harmony import */ var _Stats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Stats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Stats_vue_vue_type_template_id_628d09e4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Stats.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/ApplicationLogo.vue":
/*!****************************************************!*\
  !*** ./resources/js/Jetstream/ApplicationLogo.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationLogo_vue_vue_type_template_id_4e07f5d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationLogo.vue?vue&type=template&id=4e07f5d2 */ "./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ApplicationLogo_vue_vue_type_template_id_4e07f5d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/ApplicationLogo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/ApplicationMark.vue":
/*!****************************************************!*\
  !*** ./resources/js/Jetstream/ApplicationMark.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationMark_vue_vue_type_template_id_6ed2e539__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationMark.vue?vue&type=template&id=6ed2e539 */ "./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ApplicationMark_vue_vue_type_template_id_6ed2e539__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/ApplicationMark.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/Banner.vue":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Banner.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_vue_vue_type_template_id_55462a60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=55462a60 */ "./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Banner_vue_vue_type_template_id_55462a60__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/Banner.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Button.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=afb94134 */ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue":
/*!*********************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown_vue_vue_type_template_id_bd908476__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=bd908476 */ "./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dropdown_vue_vue_type_template_id_bd908476__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/Dropdown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/DropdownLink.vue":
/*!*************************************************!*\
  !*** ./resources/js/Jetstream/DropdownLink.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownLink_vue_vue_type_template_id_1114e65f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=template&id=1114e65f */ "./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f");
/* harmony import */ var _DropdownLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DropdownLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DropdownLink_vue_vue_type_template_id_1114e65f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/DropdownLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/NavLink.vue":
/*!********************************************!*\
  !*** ./resources/js/Jetstream/NavLink.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_1719168e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=1719168e */ "./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavLink_vue_vue_type_template_id_1719168e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/NavLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/ResponsiveNavLink.vue":
/*!******************************************************!*\
  !*** ./resources/js/Jetstream/ResponsiveNavLink.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_template_id_c1e95d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=template&id=c1e95d36 */ "./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36");
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ResponsiveNavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ResponsiveNavLink_vue_vue_type_template_id_c1e95d36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/ResponsiveNavLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/Welcome.vue":
/*!********************************************!*\
  !*** ./resources/js/Jetstream/Welcome.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_70e39c44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=70e39c44 */ "./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Welcome_vue_vue_type_template_id_70e39c44__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/Welcome.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=5663af57 */ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/AppLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/Nav.vue":
/*!**************************************!*\
  !*** ./resources/js/Layouts/Nav.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_12bb96cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=12bb96cf */ "./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_12bb96cf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/Nav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/SideBarTwo.vue":
/*!*********************************************!*\
  !*** ./resources/js/Layouts/SideBarTwo.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBarTwo_vue_vue_type_template_id_1960f618__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBarTwo.vue?vue&type=template&id=1960f618 */ "./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618");
/* harmony import */ var _SideBarTwo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarTwo.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideBarTwo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideBarTwo_vue_vue_type_template_id_1960f618__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/SideBarTwo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b");
/* harmony import */ var _Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Icon.vue":
/*!**************************************!*\
  !*** ./resources/js/Shared/Icon.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=75bd2355 */ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js */ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/NavItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/NavItem.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavItem_vue_vue_type_template_id_032b1d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem.vue?vue&type=template&id=032b1d3b */ "./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b");
/* harmony import */ var _NavItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItem.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_flow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavItem_vue_vue_type_template_id_032b1d3b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/NavItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Actions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Actions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Actions.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Anual_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Anual_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Anual.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieTramite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieTramite_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieTramite.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stats.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Banner.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dropdown.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropdownLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropdownLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropdownLink.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResponsiveNavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResponsiveNavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResponsiveNavLink.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Nav.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Layouts/Nav.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBarTwo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBarTwo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideBarTwo.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavItem.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Actions.vue?vue&type=template&id=66375802":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Actions.vue?vue&type=template&id=66375802 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Actions_vue_vue_type_template_id_66375802__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Actions_vue_vue_type_template_id_66375802__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Actions.vue?vue&type=template&id=66375802 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Actions.vue?vue&type=template&id=66375802");


/***/ }),

/***/ "./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Anual_vue_vue_type_template_id_22492904__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Anual_vue_vue_type_template_id_22492904__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Anual.vue?vue&type=template&id=22492904 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/Anual.vue?vue&type=template&id=22492904");


/***/ }),

/***/ "./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieTramite_vue_vue_type_template_id_ab0f9b3a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieTramite_vue_vue_type_template_id_ab0f9b3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieTramite.vue?vue&type=template&id=ab0f9b3a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Charts/PieTramite.vue?vue&type=template&id=ab0f9b3a");


/***/ }),

/***/ "./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stats_vue_vue_type_template_id_628d09e4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Stats_vue_vue_type_template_id_628d09e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Stats.vue?vue&type=template&id=628d09e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Stats.vue?vue&type=template&id=628d09e4");


/***/ }),

/***/ "./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2":
/*!**********************************************************************************!*\
  !*** ./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApplicationLogo_vue_vue_type_template_id_4e07f5d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApplicationLogo_vue_vue_type_template_id_4e07f5d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ApplicationLogo.vue?vue&type=template&id=4e07f5d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationLogo.vue?vue&type=template&id=4e07f5d2");


/***/ }),

/***/ "./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539":
/*!**********************************************************************************!*\
  !*** ./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApplicationMark_vue_vue_type_template_id_6ed2e539__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ApplicationMark_vue_vue_type_template_id_6ed2e539__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ApplicationMark.vue?vue&type=template&id=6ed2e539 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ApplicationMark.vue?vue&type=template&id=6ed2e539");


/***/ }),

/***/ "./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60":
/*!*************************************************************************!*\
  !*** ./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_template_id_55462a60__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_template_id_55462a60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Banner.vue?vue&type=template&id=55462a60 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Banner.vue?vue&type=template&id=55462a60");


/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134":
/*!*************************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=afb94134 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134");


/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476":
/*!***************************************************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dropdown_vue_vue_type_template_id_bd908476__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dropdown_vue_vue_type_template_id_bd908476__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dropdown.vue?vue&type=template&id=bd908476 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476");


/***/ }),

/***/ "./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f":
/*!*******************************************************************************!*\
  !*** ./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropdownLink_vue_vue_type_template_id_1114e65f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropdownLink_vue_vue_type_template_id_1114e65f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropdownLink.vue?vue&type=template&id=1114e65f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/DropdownLink.vue?vue&type=template&id=1114e65f");


/***/ }),

/***/ "./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e":
/*!**************************************************************************!*\
  !*** ./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_1719168e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_1719168e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=template&id=1719168e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/NavLink.vue?vue&type=template&id=1719168e");


/***/ }),

/***/ "./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36":
/*!************************************************************************************!*\
  !*** ./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResponsiveNavLink_vue_vue_type_template_id_c1e95d36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResponsiveNavLink_vue_vue_type_template_id_c1e95d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResponsiveNavLink.vue?vue&type=template&id=c1e95d36 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ResponsiveNavLink.vue?vue&type=template&id=c1e95d36");


/***/ }),

/***/ "./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44":
/*!**************************************************************************!*\
  !*** ./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_70e39c44__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_70e39c44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=template&id=70e39c44 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Welcome.vue?vue&type=template&id=70e39c44");


/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLayout_vue_vue_type_template_id_5663af57__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLayout.vue?vue&type=template&id=5663af57 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57");


/***/ }),

/***/ "./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf":
/*!********************************************************************!*\
  !*** ./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_12bb96cf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_12bb96cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=12bb96cf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf");


/***/ }),

/***/ "./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618":
/*!***************************************************************************!*\
  !*** ./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBarTwo_vue_vue_type_template_id_1960f618__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideBarTwo_vue_vue_type_template_id_1960f618__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideBarTwo.vue?vue&type=template&id=1960f618 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SideBarTwo.vue?vue&type=template&id=1960f618");


/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=097ba13b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b");


/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icon.vue?vue&type=template&id=75bd2355 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355");


/***/ }),

/***/ "./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b":
/*!***************************************************************************!*\
  !*** ./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavItem_vue_vue_type_template_id_032b1d3b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavItem_vue_vue_type_template_id_032b1d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavItem.vue?vue&type=template&id=032b1d3b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavItem.vue?vue&type=template&id=032b1d3b");


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/description/description.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/description/description.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ S),
/* harmony export */   "useDescriptions": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/vue/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
let u=Symbol("DescriptionContext");function h(){let n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(u,null);if(n===null)throw new Error("Missing parent");return n}function P({slot:n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}),name:o="Description",props:s={}}={}){let e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);function t(r){return e.value.push(r),()=>{let i=e.value.indexOf(r);i!==-1&&e.value.splice(i,1)}}return (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(u,{register:t,slot:n,name:o,props:s}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>e.value.length>0?e.value.join(" "):void 0)}let S=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(n,{attrs:o,slots:s}){let e=h(),t=`headlessui-description-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)()}`;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(e.register(t))),()=>{let{name:r="Description",slot:i=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}),props:c={}}=e,l=n,d={...Object.entries(c).reduce((f,[a,g])=>Object.assign(f,{[a]:(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)}),{}),id:t};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({props:{...l,...d},slot:i.value,attrs:o,slots:s,name:r})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/dialog/dialog.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Ae),
/* harmony export */   "DialogBackdrop": () => (/* binding */ je),
/* harmony export */   "DialogDescription": () => (/* binding */ Ke),
/* harmony export */   "DialogOverlay": () => (/* binding */ He),
/* harmony export */   "DialogPanel": () => (/* binding */ Le),
/* harmony export */   "DialogTitle": () => (/* binding */ We)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../keyboard.js */ "./node_modules/@headlessui/vue/dist/keyboard.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/vue/dist/hooks/use-id.js");
/* harmony import */ var _components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/focus-trap/focus-trap.js */ "./node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-inert-others.js */ "./node_modules/@headlessui/vue/dist/hooks/use-inert-others.js");
/* harmony import */ var _portal_portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../portal/portal.js */ "./node_modules/@headlessui/vue/dist/components/portal/portal.js");
/* harmony import */ var _internal_stack_context_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/stack-context.js */ "./node_modules/@headlessui/vue/dist/internal/stack-context.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/vue/dist/internal/portal-force-root.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/vue/dist/components/description/description.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/vue/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/vue/dist/hooks/use-outside-click.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/vue/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/vue/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/vue/dist/internal/hidden.js");
var ge=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ge||{});let M=Symbol("DialogContext");function R(a){let i=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(M,null);if(i===null){let t=new Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return i}let T="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ae=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:T},initialFocus:{type:Object,default:null}},emits:{close:a=>!0},setup(a,{emit:i,attrs:t,slots:u,expose:r}){var A;let d=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1);(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{d.value=!0});let n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0),p=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_1__.useOpenClosed)(),h=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>a.open===T&&p!==null?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(p.value,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_1__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_1__.State.Closed]:!1}):a.open),E=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set),f=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),B=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),k=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(f));if(r({el:f,$el:f}),!(a.open!==T||p!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===T?void 0:a.open}`);let c=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>d.value&&h.value?0:1),$=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>c.value===0),C=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>n.value>1),Y=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(M,null)!==null,q=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>C.value?"parent":"leaf");(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_4__.useInertOthers)(f,(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>C.value?$.value:!1)),(0,_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_5__.useStackProvider)({type:"Dialog",element:f,onUpdate:(o,l,e)=>{if(l==="Dialog")return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o,{[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_5__.StackMessage.Add](){E.value.add(e),n.value+=1},[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_5__.StackMessage.Remove](){E.value.delete(e),n.value-=1}})}});let G=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_6__.useDescriptions)({name:"DialogDescription",slot:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>({open:h.value}))}),z=`headlessui-dialog-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`,w=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),y={titleId:w,panelRef:(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),dialogState:c,setTitleId(o){w.value!==o&&(w.value=o)},close(){i("close",!1)}};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(M,y),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__.useOutsideClick)(()=>{var l,e,m;return[...Array.from((e=(l=k.value)==null?void 0:l.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?e:[]).filter(s=>!(!(s instanceof HTMLElement)||s.contains((0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom)(B))||y.panelRef.value&&s.contains(y.panelRef.value))),(m=y.panelRef.value)!=null?m:f.value]},(o,l)=>{y.close(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(()=>l==null?void 0:l.focus())},(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>c.value===0&&!C.value)),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_10__.useEventListener)((A=k.value)==null?void 0:A.defaultView,"keydown",o=>{o.defaultPrevented||o.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape&&c.value===0&&(C.value||(o.preventDefault(),o.stopPropagation(),y.close()))}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(o=>{var j;if(c.value!==0||Y)return;let l=k.value;if(!l)return;let e=l==null?void 0:l.documentElement,m=(j=l.defaultView)!=null?j:window,s=e.style.overflow,J=e.style.paddingRight,H=m.innerWidth-e.clientWidth;if(e.style.overflow="hidden",H>0){let Q=e.clientWidth-e.offsetWidth,X=H-Q;e.style.paddingRight=`${X}px`}o(()=>{e.style.overflow=s,e.style.paddingRight=J})}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(o=>{if(c.value!==0)return;let l=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom)(f);if(!l)return;let e=new IntersectionObserver(m=>{for(let s of m)s.boundingClientRect.x===0&&s.boundingClientRect.y===0&&s.boundingClientRect.width===0&&s.boundingClientRect.height===0&&y.close()});e.observe(l),o(()=>e.disconnect())}),()=>{let o={...t,ref:f,id:z,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":w.value,"aria-describedby":G.value},{open:l,initialFocus:e,...m}=a,s={open:c.value===0};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_12__.ForcePortalRoot,{force:!0},()=>[(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_portal_portal_js__WEBPACK_IMPORTED_MODULE_13__.Portal,()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_portal_portal_js__WEBPACK_IMPORTED_MODULE_13__.PortalGroup,{target:f.value},()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_12__.ForcePortalRoot,{force:!1},()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__.FocusTrap,{initialFocus:e,containers:E,features:$.value?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(q.value,{parent:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__.FocusTrap.features.RestoreFocus,leaf:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__.FocusTrap.features.All&~_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__.FocusTrap.features.FocusLock}):_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_14__.FocusTrap.features.None},()=>(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({props:{...m,...o},slot:s,attrs:t,slots:u,visible:c.value===0,features:_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.Features.Static,name:"Dialog"}))))),(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Features.Hidden,ref:B})])}}}),He=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:i,slots:t}){let u=R("DialogOverlay"),r=`headlessui-dialog-overlay-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`;function d(n){n.target===n.currentTarget&&(n.preventDefault(),n.stopPropagation(),u.close())}return()=>(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({props:{...a,...{id:r,"aria-hidden":!0,onClick:d}},slot:{open:u.dialogState.value===0},attrs:i,slots:t,name:"DialogOverlay"})}}),je=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(a,{attrs:i,slots:t,expose:u}){let r=R("DialogBackdrop"),d=`headlessui-dialog-backdrop-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`,n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);return u({el:n,$el:n}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{if(r.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let p=a,h={id:d,ref:n,"aria-hidden":!0};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_12__.ForcePortalRoot,{force:!0},()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_portal_portal_js__WEBPACK_IMPORTED_MODULE_13__.Portal,()=>(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({props:{...i,...p,...h},slot:{open:r.dialogState.value===0},attrs:i,slots:t,name:"DialogBackdrop"})))}}}),Le=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:i,slots:t,expose:u}){let r=R("DialogPanel"),d=`headlessui-dialog-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`;u({el:r.panelRef,$el:r.panelRef});function n(p){p.stopPropagation()}return()=>{let p={id:d,ref:r.panelRef,onClick:n};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({props:{...a,...p},slot:{open:r.dialogState.value===0},attrs:i,slots:t,name:"DialogPanel"})}}}),We=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(a,{attrs:i,slots:t}){let u=R("DialogTitle"),r=`headlessui-dialog-title-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)()}`;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{u.setTitleId(r),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(()=>u.setTitleId(null))}),()=>(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({props:{...a,...{id:r}},slot:{open:u.dialogState.value===0},attrs:i,slots:t,name:"DialogTitle"})}}),Ke=_description_description_js__WEBPACK_IMPORTED_MODULE_6__.Description;


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": () => (/* binding */ A),
/* harmony export */   "DisclosureButton": () => (/* binding */ G),
/* harmony export */   "DisclosurePanel": () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../keyboard.js */ "./node_modules/@headlessui/vue/dist/keyboard.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/vue/dist/hooks/use-id.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/vue/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js");
var w=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(w||{});let x=Symbol("DisclosureContext");function C(l){let r=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(x,null);if(r===null){let n=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return r}let B=Symbol("DisclosurePanelContext");function H(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(B,null)}let A=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:r,attrs:n}){let d=`headlessui-disclosure-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)()}`,e=`headlessui-disclosure-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)()}`,o=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(l.defaultOpen?0:1),i=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),s=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),u={buttonId:d,panelId:e,disclosureState:o,panel:i,button:s,toggleDisclosure(){o.value=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o.value,{[0]:1,[1]:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(a){u.closeDisclosure();let c=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(a):(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(u.button):(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(u.button))();c==null||c.focus()}};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(x,u),(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosedProvider)((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(o.value,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__.State.Closed}))),()=>{let{defaultOpen:a,...c}=l,S={open:o.value===0,close:u.close};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({props:c,slot:S,slots:r,attrs:n,name:"Disclosure"})}}}),G=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(l,{attrs:r,slots:n,expose:d}){let e=C("DisclosureButton"),o=H(),i=o===null?!1:o===e.panelId,s=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);d({el:s,$el:s}),i||(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{e.button.value=s.value});let u=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_6__.useResolveButtonType)((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>({as:l.as,type:r.type})),s);function a(){var t;l.disabled||(i?(e.toggleDisclosure(),(t=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(e.button))==null||t.focus()):e.toggleDisclosure())}function c(t){var D;if(!l.disabled)if(i)switch(t.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:t.preventDefault(),t.stopPropagation(),e.toggleDisclosure(),(D=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(e.button))==null||D.focus();break}else switch(t.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:t.preventDefault(),t.stopPropagation(),e.toggleDisclosure();break}}function S(t){switch(t.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:t.preventDefault();break}}return()=>{let t={open:e.disclosureState.value===0},D=i?{ref:s,type:u.value,onClick:a,onKeydown:c}:{id:e.buttonId,ref:s,type:u.value,"aria-expanded":l.disabled?void 0:e.disclosureState.value===0,"aria-controls":(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(e.panel)?e.panelId:void 0,disabled:l.disabled?!0:void 0,onClick:a,onKeydown:c,onKeyup:S};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({props:{...l,...D},slot:t,attrs:r,slots:n,name:"DisclosureButton"})}}}),J=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(l,{attrs:r,slots:n,expose:d}){let e=C("DisclosurePanel");d({el:e.panel,$el:e.panel}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(B,e.panelId);let o=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosed)(),i=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>o!==null?o.value===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_4__.State.Open:e.disclosureState.value===0);return()=>{let s={open:e.disclosureState.value===0,close:e.close},u={id:e.panelId,ref:e.panel};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({props:{...l,...u},slot:s,attrs:r,slots:n,features:_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.Features.Static,visible:i.value,name:"DisclosurePanel"})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/vue/dist/internal/hidden.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/vue/dist/utils/focus-management.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/vue/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/vue/dist/hooks/use-event-listener.js");
var y=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(y||{});let V=Object.assign((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set)}},inheritAttrs:!1,setup(o,{attrs:u,slots:n,expose:r}){let t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);r({el:t,$el:t});let a=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(t));A({ownerDocument:a},(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>Boolean(o.features&16)));let e=N({ownerDocument:a,container:t,initialFocus:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>o.initialFocus)},(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>Boolean(o.features&2)));C({ownerDocument:a,container:t,containers:o.containers,previousActiveElement:e},(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>Boolean(o.features&8)));let s=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_2__.useTabDirection)();function i(){let l=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(t);!l||(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(s.value,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_2__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_2__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last)})}return()=>{let l={},T={"data-hi":"container",ref:t},{features:c,initialFocus:H,containers:R,...h}=o;return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,[Boolean(c&4)&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_6__.Hidden,{as:"button",type:"button",onFocus:i,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_6__.Features.Focusable}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)({props:{...u,...h,...T},slot:l,attrs:u,slots:n,name:"FocusTrap"}),Boolean(c&4)&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_6__.Hidden,{as:"button",type:"button",onFocus:i,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_6__.Features.Focusable})])}}}),{features:y});function A({ownerDocument:o},u){let n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),r={value:!1};(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(u,(t,a)=>{var e;t!==a&&(!u.value||(r.value=!0,n.value||(n.value=(e=o.value)==null?void 0:e.activeElement)))},{immediate:!0}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(u,(t,a,e)=>{t!==a&&(!u.value||e(()=>{r.value!==!1&&(r.value=!1,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(n.value),n.value=null)}))},{immediate:!0})})}function N({ownerDocument:o,container:u,initialFocus:n},r){let t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([u,n,r],(a,e)=>{var T,c;if(a.every((H,R)=>(e==null?void 0:e[R])===H)||!r.value)return;let s=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(u);if(!s)return;let i=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.dom)(n),l=(T=o.value)==null?void 0:T.activeElement;if(i){if(i===l){t.value=l;return}}else if(s.contains(l)){t.value=l;return}i?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(i):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),t.value=(c=o.value)==null?void 0:c.activeElement},{immediate:!0,flush:"post"})}),t}function C({ownerDocument:o,container:u,containers:n,previousActiveElement:r},t){var a;(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__.useEventListener)((a=o.value)==null?void 0:a.defaultView,"focus",e=>{if(!t.value)return;let s=new Set(n==null?void 0:n.value);s.add(u);let i=r.value;if(!i)return;let l=e.target;l&&l instanceof HTMLElement?_(s,l)?(r.value=l,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(l)):(e.preventDefault(),e.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(i)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(r.value)},!0)}function _(o,u){var n;for(let r of o)if((n=r.value)!=null&&n.contains(u))return!0;return!1}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/portal/portal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/portal/portal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": () => (/* binding */ R),
/* harmony export */   "PortalGroup": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/vue/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/vue/dist/utils/owner.js");
function c(t){let r=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(t);if(!r){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let o=r.getElementById("headlessui-portal-root");if(o)return o;let e=r.createElement("div");return e.setAttribute("id","headlessui-portal-root"),r.body.appendChild(e)}let R=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:r,attrs:o}){let e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),p=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(e)),n=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)(),u=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(g,null),l=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(n===!0||u==null?c(e.value):u.resolveTarget());return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{n||u!=null&&(l.value=u.resolveTarget())}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(()=>{var i,m;let a=(i=p.value)==null?void 0:i.getElementById("headlessui-portal-root");!a||l.value===a&&l.value.children.length<=0&&((m=l.value.parentElement)==null||m.removeChild(l.value))}),()=>{if(l.value===null)return null;let a={ref:e,"data-headlessui-portal":""};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport,{to:l.value},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({props:{...t,...a},slot:{},attrs:o,slots:r,name:"Portal"}))}}}),g=Symbol("PortalGroupContext"),L=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:r,slots:o}){let e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({resolveTarget(){return t.target}});return (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(g,e),()=>{let{target:p,...n}=t;return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({props:n,slot:{},attrs:r,slots:o,name:"PortalGroup"})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/transitions/transition.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/transitions/transition.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionChild": () => (/* binding */ se),
/* harmony export */   "TransitionRoot": () => (/* binding */ fe)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/vue/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
/* harmony import */ var _utils_transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/transition.js */ "./node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/vue/dist/internal/open-closed.js");
function d(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let B=Symbol("TransitionContext");var ae=(a=>(a.Visible="visible",a.Hidden="hidden",a))(ae||{});function le(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(B,null)!==null}function ie(){let e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(B,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function oe(){let e=(0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(F,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let F=Symbol("NestingContext");function w(e){return"children"in e?w(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function K(e){let t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]),a=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1);(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>a.value=!0),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(()=>a.value=!1);function o(r,n=_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden){let l=t.value.findIndex(({id:i})=>i===r);l!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(n,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount](){t.value.splice(l,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden](){t.value[l].state="hidden"}}),!w(t)&&a.value&&(e==null||e()))}function v(r){let n=t.value.find(({id:l})=>l===r);return n?n.state!=="visible"&&(n.state="visible"):t.value.push({id:r,state:"visible"}),()=>o(r,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount)}return{children:t,register:v,unregister:o}}let _=_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.Features.RenderStrategy,se=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o,expose:v}){if(!le()&&(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.hasOpenClosed)())return()=>(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(fe,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},o);let r=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null),n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("visible"),l=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>e.unmount?_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden);v({el:r,$el:r});let{show:i,appear:x}=ie(),{register:h,unregister:p}=oe(),R={value:!0},m=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),c={value:!1},N=K(()=>{c.value||(n.value="hidden",p(m),t("afterLeave"))});(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{let s=h(m);(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(s)}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{if(l.value===_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden&&!!m){if(i&&n.value!=="visible"){n.value="visible";return}(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(n.value,{["hidden"]:()=>p(m),["visible"]:()=>h(m)})}});let k=d(e.enter),$=d(e.enterFrom),q=d(e.enterTo),O=d(e.entered),z=d(e.leave),G=d(e.leaveFrom),J=d(e.leaveTo);(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{if(n.value==="visible"){let s=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_5__.dom)(r);if(s instanceof Comment&&s.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Q(s){let S=R.value&&!x.value,u=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_5__.dom)(r);!u||!(u instanceof HTMLElement)||S||(c.value=!0,i.value&&t("beforeEnter"),i.value||t("beforeLeave"),s(i.value?(0,_utils_transition_js__WEBPACK_IMPORTED_MODULE_6__.transition)(u,k,$,q,O,C=>{c.value=!1,C===_utils_transition_js__WEBPACK_IMPORTED_MODULE_6__.Reason.Finished&&t("afterEnter")}):(0,_utils_transition_js__WEBPACK_IMPORTED_MODULE_6__.transition)(u,z,G,J,O,C=>{c.value=!1,C===_utils_transition_js__WEBPACK_IMPORTED_MODULE_6__.Reason.Finished&&(w(N)||(n.value="hidden",p(m),t("afterLeave")))})))}return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([i],(s,S,u)=>{Q(u),R.value=!1},{immediate:!0})}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(F,N),(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.useOpenClosedProvider)((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(n.value,{["visible"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open,["hidden"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closed}))),()=>{let{appear:s,show:S,enter:u,enterFrom:C,enterTo:de,entered:ve,leave:pe,leaveFrom:me,leaveTo:Te,...W}=e;return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({props:{...W,...{ref:r}},slot:{},slots:o,attrs:a,features:_,visible:n.value==="visible",name:"TransitionChild"})}}}),ue=se,fe=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o}){let v=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.useOpenClosed)(),r=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>e.show===null&&v!==null?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(v.value,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closed]:!1}):e.show);(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(r.value?"visible":"hidden"),l=K(()=>{n.value="hidden"}),i=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!0),x={show:r,appear:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>e.appear||!i.value)};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{i.value=!1,r.value?n.value="visible":w(l)||(n.value="hidden")})}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(F,l),(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(B,x),()=>{let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.omit)(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({props:{...p,as:"template"},slot:{},slots:{...o,default:()=>[(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ue,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...p,...h},o.default)]},attrs:{},features:_,visible:n.value==="visible",name:"Transition"})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": () => (/* binding */ g),
/* harmony export */   "transition": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.js */ "./node_modules/@headlessui/vue/dist/utils/once.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.js */ "./node_modules/@headlessui/vue/dist/utils/disposables.js");
function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function d(e,...t){e&&t.length>0&&e.classList.remove(...t)}var g=(i=>(i.Finished="finished",i.Cancelled="cancelled",i))(g||{});function F(e,t){let i=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();if(!e)return i.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,s]=[n,a].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,c)=>c-r);return u});return l!==0?i.setTimeout(()=>t("finished"),l+s):t("finished"),i.add(()=>t("cancelled")),i.dispose}function L(e,t,i,n,a,l){let s=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)(),o=l!==void 0?(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_1__.once)(l):()=>{};return d(e,...a),m(e,...t,...i),s.nextFrame(()=>{d(e,...i),m(e,...n),s.add(F(e,u=>(d(e,...n,...t),m(e,...a),o(u))))}),s.add(()=>d(e,...t,...i,...n,...a)),s.add(()=>o("cancelled")),s.dispose}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-event-listener.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-event-listener.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEventListener": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function r(n,e,d,o){typeof window!="undefined"&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(t=>{n=n!=null?n:window,n.addEventListener(e,d,o),t(()=>n.removeEventListener(e,d,o))})}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-id.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-id.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ t)
/* harmony export */ });
let e=0;function n(){return++e}function t(){return n()}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-inert-others.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-inert-others.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInertOthers": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/vue/dist/utils/owner.js");
let l="body > *",i=new Set,r=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function s(t){let n=r.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}function g(t,n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!0)){(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(d=>{if(!n.value||!t.value)return;let a=t.value,o=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(a);if(!!o){i.add(a);for(let e of r.keys())e.contains(a)&&(s(e),r.delete(e));o.querySelectorAll(l).forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;i.size===1&&(r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),d(()=>{if(i.delete(a),i.size>0)o.querySelectorAll(l).forEach(e=>{if(e instanceof HTMLElement&&!r.has(e)){for(let f of i)if(e.contains(f))return;r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r.keys())s(e),r.delete(e)})}})}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-outside-click.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-outside-click.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOutsideClick": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/vue/dist/hooks/use-window-event.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/vue/dist/utils/focus-management.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
function T(l,f,a=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>!0)){function i(t,r){if(!a.value||t.defaultPrevented)return;let n=r(t);if(n===null||!n.ownerDocument.documentElement.contains(n))return;let m=function o(e){return typeof e=="function"?o(e()):Array.isArray(e)||e instanceof Set?e:[e]}(l);for(let o of m){if(o===null)continue;let e=o instanceof HTMLElement?o:(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom)(o);if(e!=null&&e.contains(n))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.isFocusableElement)(n,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.FocusableMode.Loose)&&n.tabIndex!==-1&&t.preventDefault(),f(t,n)}(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)("click",t=>i(t,r=>r.target),!0),(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)("blur",t=>i(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
function r(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function b(t,e){let n=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(r(t.value.type,t.value.as));return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{n.value=r(t.value.type,t.value.as)}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(()=>{var o;n.value||!(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom)(e)||(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom)(e)instanceof HTMLButtonElement&&!((o=(0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom)(e))!=null&&o.hasAttribute("type"))&&(n.value="button")}),n}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ d),
/* harmony export */   "useTabDirection": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/vue/dist/hooks/use-window-event.js");
var d=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(d||{});function n(){let o=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",e=>{e.key==="Tab"&&(o.value=e.shiftKey?1:0)}),o}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/hooks/use-window-event.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/hooks/use-window-event.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function w(e,n,t){typeof window!="undefined"&&(0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(o=>{window.addEventListener(e,n,t),o(()=>window.removeEventListener(e,n,t))})}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/internal/hidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/internal/hidden.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ a),
/* harmony export */   "Hidden": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
var a=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(a||{});let m=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:o}){return()=>{let{features:e,...d}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({props:{...d,...n},slot:{},attrs:o,slots:t,name:"Hidden"})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/internal/open-closed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/internal/open-closed.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ l),
/* harmony export */   "hasOpenClosed": () => (/* binding */ f),
/* harmony export */   "useOpenClosed": () => (/* binding */ p),
/* harmony export */   "useOpenClosedProvider": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
let n=Symbol("Context");var l=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(l||{});function f(){return p()!==null}function p(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(n,null)}function c(o){(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(n,o)}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/internal/portal-force-root.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/internal/portal-force-root.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePortalRoot": () => (/* binding */ P),
/* harmony export */   "usePortalRoot": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/vue/dist/utils/render.js");
let e=Symbol("ForcePortalRootContext");function u(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(e,!1)}let P=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(o,{slots:t,attrs:r}){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(e,o.force),()=>{let{force:f,...n}=o;return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({props:n,slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/internal/stack-context.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/internal/stack-context.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackMessage": () => (/* binding */ c),
/* harmony export */   "useStackContext": () => (/* binding */ a),
/* harmony export */   "useStackProvider": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
let i=Symbol("StackContext");var c=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(c||{});function a(){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(i,()=>{})}function s({type:n,element:o,onUpdate:e}){let m=a();function t(...r){e==null||e(...r),m(...r)}(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{t(0,n,o),(0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(()=>{t(1,n,o)})}),(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(i,t)}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/keyboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/keyboard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/disposables.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/disposables.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": () => (/* binding */ r)
/* harmony export */ });
function r(){let i=[],o=[],t={enqueue(e){o.push(e)},requestAnimationFrame(...e){let a=requestAnimationFrame(...e);t.add(()=>cancelAnimationFrame(a))},nextFrame(...e){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...e)})},setTimeout(...e){let a=setTimeout(...e);t.add(()=>clearTimeout(a))},add(e){i.push(e)},dispose(){for(let e of i.splice(0))e()},async workQueue(){for(let e of o.splice(0))await e()}};return t}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/dom.js":
/*!********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/dom.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ t)
/* harmony export */ });
function t(l){return l==null||l.value==null?null:"$el"in l.value?l.value.$el:l.value}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/focus-management.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/focus-management.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ L),
/* harmony export */   "FocusResult": () => (/* binding */ N),
/* harmony export */   "FocusableMode": () => (/* binding */ M),
/* harmony export */   "focusElement": () => (/* binding */ H),
/* harmony export */   "focusIn": () => (/* binding */ P),
/* harmony export */   "getFocusableElements": () => (/* binding */ b),
/* harmony export */   "isFocusableElement": () => (/* binding */ F),
/* harmony export */   "sortByDomNode": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/vue/dist/utils/owner.js");
let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=(o=>(o[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o))(L||{}),N=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(N||{}),T=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(T||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c))}var M=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(M||{});function F(e,r=0){var t;return e===((t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:t.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r,{[0](){return e.matches(c)},[1](){let l=e;for(;l!==null;){if(l.matches(c))return!0;l=l.parentElement}return!1}})}function H(e){e==null||e.focus({preventScroll:!0})}let h=["textarea","input"].join(",");function v(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,h))!=null?t:!1}function w(e,r=t=>t){return e.slice().sort((t,l)=>{let n=r(t),i=r(l);if(n===null||i===null)return 0;let o=n.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function P(e,r,t=!0){var d;let l=(d=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?d:document,n=Array.isArray(e)?t?w(e):e:b(e),i=l.activeElement,o=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(i))-1;if(r&4)return Math.max(0,n.indexOf(i))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=r&32?{preventScroll:!0}:{},f=0,s=n.length,u;do{if(f>=s||f+s<=0)return 0;let a=m+f;if(r&16)a=(a+s)%s;else{if(a<0)return 3;if(a>=s)return 1}u=n[a],u==null||u.focus(x),f+=o}while(u!==l.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),r&6&&v(u)&&u.select(),2}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/once.js":
/*!*********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/once.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": () => (/* binding */ l)
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/owner.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/owner.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOwnerDocument": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@headlessui/vue/dist/utils/dom.js");
function e(n){if(typeof window=="undefined")return null;if(n instanceof Node)return n.ownerDocument;if(n!=null&&n.hasOwnProperty("value")){let o=(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom)(n);if(o)return o.ownerDocument}return document}


/***/ }),

/***/ "./node_modules/@headlessui/vue/dist/utils/render.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/utils/render.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ R),
/* harmony export */   "RenderStrategy": () => (/* binding */ j),
/* harmony export */   "compact": () => (/* binding */ V),
/* harmony export */   "omit": () => (/* binding */ w),
/* harmony export */   "render": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/vue/dist/utils/match.js");
var R=(r=>(r[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r))(R||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function T({visible:n=!0,features:t=0,...e}){var r;if(n||t&2&&e.props.static)return a(e);if(t&1){let i=(r=e.props.unmount)==null||r?0:1;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i,{[0](){return null},[1](){return a({...e,props:{...e.props,hidden:!0,style:{display:"none"}}})}})}return a(e)}function a({props:n,attrs:t,slots:e,slot:r,name:i}){var p;let{as:d,...s}=w(n,["unmount","static"]),o=(p=e.default)==null?void 0:p.call(e,r),u={};if(d==="template"){if(o=f(o),Object.keys(s).length>0||Object.keys(t).length>0){let[c,...y]=o!=null?o:[];if(!O(c)||y.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(l=>`  - ${l}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(l=>`  - ${l}`).join(`
`)].join(`
`));return (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(c,Object.assign({},s,u))}return Array.isArray(o)&&o.length===1?o[0]:o}return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(d,Object.assign({},s,u),o)}function f(n){return n.flatMap(t=>t.type===vue__WEBPACK_IMPORTED_MODULE_0__.Fragment?f(t.children):[t])}function V(n){let t=Object.assign({},n);for(let e in t)t[e]===void 0&&delete t[e];return t}function w(n,t=[]){let e=Object.assign({},n);for(let r of t)r in e&&delete e[r];return e}function O(n){return n==null?!1:typeof n.type=="string"||typeof n.type=="object"||typeof n.type=="function"}


/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/ChartBarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/ChartBarIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/ClipboardCheckIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/ClipboardCheckIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/ClipboardIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/ClipboardIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/HeartIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/HeartIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/HomeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/HomeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/LightningBoltIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/LightningBoltIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 10V3L4 14h7v7l9-11h-7z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/NewspaperIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/NewspaperIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/PhotographIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/PhotographIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/BellIcon.js":
/*!***********************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/BellIcon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/ClipboardIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/ClipboardIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/MenuAlt1Icon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/MenuAlt1Icon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/MoonIcon.js":
/*!***********************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/MoonIcon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/SearchCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/SearchCircleIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z" }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/XIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/XIcon.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/chart.js/dist/chart.mjs":
/*!**********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Animations": () => (/* binding */ Animations),
/* harmony export */   "ArcElement": () => (/* binding */ ArcElement),
/* harmony export */   "BarController": () => (/* binding */ BarController),
/* harmony export */   "BarElement": () => (/* binding */ BarElement),
/* harmony export */   "BasePlatform": () => (/* binding */ BasePlatform),
/* harmony export */   "BasicPlatform": () => (/* binding */ BasicPlatform),
/* harmony export */   "BubbleController": () => (/* binding */ BubbleController),
/* harmony export */   "CategoryScale": () => (/* binding */ CategoryScale),
/* harmony export */   "Chart": () => (/* binding */ Chart),
/* harmony export */   "DatasetController": () => (/* binding */ DatasetController),
/* harmony export */   "Decimation": () => (/* binding */ plugin_decimation),
/* harmony export */   "DomPlatform": () => (/* binding */ DomPlatform),
/* harmony export */   "DoughnutController": () => (/* binding */ DoughnutController),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Filler": () => (/* binding */ index),
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "Legend": () => (/* binding */ plugin_legend),
/* harmony export */   "LineController": () => (/* binding */ LineController),
/* harmony export */   "LineElement": () => (/* binding */ LineElement),
/* harmony export */   "LinearScale": () => (/* binding */ LinearScale),
/* harmony export */   "LogarithmicScale": () => (/* binding */ LogarithmicScale),
/* harmony export */   "PieController": () => (/* binding */ PieController),
/* harmony export */   "PointElement": () => (/* binding */ PointElement),
/* harmony export */   "PolarAreaController": () => (/* binding */ PolarAreaController),
/* harmony export */   "RadarController": () => (/* binding */ RadarController),
/* harmony export */   "RadialLinearScale": () => (/* binding */ RadialLinearScale),
/* harmony export */   "Scale": () => (/* binding */ Scale),
/* harmony export */   "ScatterController": () => (/* binding */ ScatterController),
/* harmony export */   "SubTitle": () => (/* binding */ plugin_subtitle),
/* harmony export */   "Ticks": () => (/* binding */ Ticks),
/* harmony export */   "TimeScale": () => (/* binding */ TimeScale),
/* harmony export */   "TimeSeriesScale": () => (/* binding */ TimeSeriesScale),
/* harmony export */   "Title": () => (/* binding */ plugin_title),
/* harmony export */   "Tooltip": () => (/* binding */ plugin_tooltip),
/* harmony export */   "_adapters": () => (/* binding */ adapters),
/* harmony export */   "_detectPlatform": () => (/* binding */ _detectPlatform),
/* harmony export */   "animator": () => (/* binding */ animator),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "defaults": () => (/* reexport safe */ _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "layouts": () => (/* binding */ layouts),
/* harmony export */   "plugins": () => (/* binding */ plugins),
/* harmony export */   "registerables": () => (/* binding */ registerables),
/* harmony export */   "registry": () => (/* binding */ registry),
/* harmony export */   "scales": () => (/* binding */ scales)
/* harmony export */ });
/* harmony import */ var _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/helpers.segment.mjs */ "./node_modules/chart.js/dist/chunks/helpers.segment.mjs");
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */



class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }
  _refresh() {
    if (this._request) {
      return;
    }
    this._running = true;
    this._request = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.r.call(window, () => {
      this._update();
      this._request = null;
      if (this._running) {
        this._refresh();
      }
    });
  }
  _update(date = Date.now()) {
    let remaining = 0;
    this._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        this._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        this._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    this._lastDate = date;
    if (remaining === 0) {
      this._running = false;
    }
  }
  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    const anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    const anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    const anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    const items = anims.items;
    let i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var animator = new Animator();

const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(from || transparent);
    const c1 = c0.valid && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(to || transparent);
    return c1 && c1.valid
      ? c1.mix(c0, factor).hexString()
      : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
    const from = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.e[cfg.easing] || _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.e.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(cfg, to, date) {
    if (this._active) {
      this._notify(false);
      const currentValue = this._target[this._prop];
      const elapsed = date - this._start;
      const remain = this._duration - elapsed;
      this._start = date;
      this._duration = Math.floor(Math.max(remain, cfg.duration));
      this._total += elapsed;
      this._loop = !!cfg.loop;
      this._to = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
      this._from = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(date) {
    const elapsed = date - this._start;
    const duration = this._duration;
    const prop = this._prop;
    const from = this._from;
    const loop = this._loop;
    const to = this._to;
    let factor;
    this._active = from !== to && (loop || (elapsed < duration));
    if (!this._active) {
      this._target[prop] = to;
      this._notify(true);
      return;
    }
    if (elapsed < 0) {
      this._target[prop] = from;
      return;
    }
    factor = (elapsed / duration) % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = this._easing(Math.min(1, Math.max(0, factor)));
    this._target[prop] = this._fn(from, to, factor);
  }
  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({res, rej});
    });
  }
  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];
    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }
}

const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set('animation', {
  delay: undefined,
  duration: 1000,
  easing: 'easeOutQuart',
  fn: undefined,
  from: undefined,
  loop: undefined,
  to: undefined,
  type: undefined,
});
const animationOptions = Object.keys(_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.animation);
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe('animation', {
  _fallback: false,
  _indexable: false,
  _scriptable: (name) => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn',
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set('animations', {
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  },
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe('animations', {
  _fallback: 'animation',
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set('transitions', {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: 'transparent'
      },
      visible: {
        type: 'boolean',
        duration: 0
      },
    }
  },
  hide: {
    animations: {
      colors: {
        to: 'transparent'
      },
      visible: {
        type: 'boolean',
        easing: 'linear',
        fn: v => v | 0
      },
    }
  }
});
class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  configure(config) {
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(config)) {
      return;
    }
    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];
      if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(cfg)) {
        return;
      }
      const resolved = {};
      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }
      ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }
  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    const animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {
      });
    }
    return animations;
  }
  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;
    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    const animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }
}
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {$shared: false, $animations: {}});
  }
  return options;
}

function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(otherValue) && (singleMode || (value === 0 || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(value) === (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(otherValue)))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || (stacked === undefined && meta.stack !== undefined);
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const {min, max, minDefined, maxDefined} = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
    const value = stack[meta.index];
    if ((positive && value > 0) || (!positive && value < 0)) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  const {chart, _cachedMeta: meta} = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {iScale, vScale, index: datasetIndex} = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {[iAxis]: index, [vAxis]: value} = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent,
    {
      active: false,
      dataset: undefined,
      datasetIndex: index,
      index,
      mode: 'default',
      type: 'dataset'
    }
  );
}
function createDataContext(parent, index, element) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (const parsed of items) {
    const stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
  }
}
const isDirectUpdateMode = (mode) => mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked
  && {keys: getSortedDatasetIndices(chart, true), values: null};
class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.initialize();
  }
  initialize() {
    const meta = this._cachedMeta;
    this.configure();
    this.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    this.addElements();
  }
  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  }
  linkScales() {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;
    const xid = meta.xAxisID = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = this.getScaleForId(xid);
    meta.yScale = this.getScaleForId(yid);
    meta.rScale = this.getScaleForId(rid);
    meta.iScale = this.getScaleForId(iid);
    meta.vScale = this.getScaleForId(vid);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale
      ? meta.vScale
      : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const meta = this._cachedMeta;
    if (this._data) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  }
  _dataCheck() {
    const dataset = this.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = this._data;
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(data)) {
      this._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(_data, this);
        const meta = this._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(data, this);
      }
      this._syncList = [];
      this._data = data;
    }
  }
  addElements() {
    const meta = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      meta.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(resetNewElements) {
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    let stackChanged = false;
    this._dataCheck();
    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    this._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(this, meta._parsed);
    }
  }
  configure() {
    const config = this.chart.config;
    const scopeKeys = config.datasetScopeKeys(this._type);
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
    this.options = config.createResolver(scopes, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(start, count) {
    const {_cachedMeta: meta, _data: data} = this;
    const {iScale, _stacked} = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;
    if (this._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(data[start])) {
        parsed = this.parseArrayData(meta, data, start, count);
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        parsed = this.parseObjectData(meta, data, start, count);
      } else {
        parsed = this.parsePrimitiveData(meta, data, start, count);
      }
      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || (prev && cur[iAxis] < prev[iAxis]);
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(this, parsed);
    }
  }
  parsePrimitiveData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(item, xAxisKey), index),
        y: yScale.parse((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(item, yAxisKey), index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  getDataElement(index) {
    return this._cachedMeta.data[index];
  }
  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index, {mode});
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      value = applyStack(stack, parsedValue, this._cachedMeta.index);
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }
  getMinMax(scale, canStack) {
    const meta = this._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;
    const otherScale = this._getOtherScale(scale);
    const stack = createStack(canStack, meta, this.chart);
    const range = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    const {min: otherMin, max: otherMax} = getUserBounds(otherScale);
    let i, parsed;
    function _skip() {
      parsed = _parsed[i];
      const otherValue = parsed[otherScale.axis];
      return !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      this.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  }
  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
        values.push(value);
      }
    }
    return values;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    const meta = this._cachedMeta;
    this.update(mode || 'default');
    meta._clip = toClip((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
  }
  update(mode) {}
  draw() {
    const ctx = this._ctx;
    const chart = this.chart;
    const meta = this._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = this._drawStart || 0;
    const count = this._drawCount || (elements.length - start);
    const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
    let i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      const element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active && drawActiveElementsOnTop) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }
  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(mode)
      : this.resolveDataElementOptions(index || 0, mode);
  }
  getContext(index, active, mode) {
    const dataset = this.getDataset();
    let context;
    if (index >= 0 && index < this._cachedMeta.data.length) {
      const element = this._cachedMeta.data[index];
      context = element.$context ||
        (element.$context = createDataContext(this.getContext(), index, element));
      context.parsed = this.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = this.$context ||
        (this.$context = createDatasetContext(this.chart.getContext(), this.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = this.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  }
  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }
  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }
  _resolveElementOptions(elementType, mode = 'default', index) {
    const active = mode === 'active';
    const cache = this._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = this.enableOptionSharing && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    const config = this.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
    const names = Object.keys(_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.elements[elementType]);
    const context = () => this.getContext(index, active);
    const values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  }
  _resolveAnimations(index, transition, active) {
    const chart = this.chart;
    const cache = this._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    let options;
    if (chart.options.animation !== false) {
      const config = this.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      options = config.createResolver(scopes, this.getContext(index, active, transition));
    }
    const animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }
  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }
  _getSharedOptions(start, mode) {
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const previouslySharedOptions = this._sharedOptions;
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions) || (sharedOptions !== previouslySharedOptions);
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
    return {sharedOptions, includeOptions};
  }
  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: (!active && this.getSharedOptions(options)) || options
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(resetNewElements) {
    const data = this._data;
    const elements = this._cachedMeta.data;
    for (const [method, arg1, arg2] of this._syncList) {
      this[method](arg1, arg2);
    }
    this._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);
    if (count) {
      this.parse(0, count);
    }
    if (numData > numMeta) {
      this._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      this._removeElements(numData, numMeta - numData);
    }
  }
  _insertElements(start, count, resetNewElements = true) {
    const meta = this._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;
    const move = (arr) => {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new this.dataElementType();
    }
    if (this._parsing) {
      move(meta._parsed);
    }
    this.parse(start, count);
    if (resetNewElements) {
      this.updateElements(data, start, count, 'reset');
    }
  }
  updateElements(element, start, count, mode) {}
  _removeElements(start, count) {
    const meta = this._cachedMeta;
    if (this._parsing) {
      const removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  }
  _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      const [method, arg1, arg2] = args;
      this[method](arg1, arg2);
    }
    this.chart._dataChanges.push([this.index, ...args]);
  }
  _onDataPush() {
    const count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(start, count) {
    if (count) {
      this._sync(['_removeElements', start, count]);
    }
    const newCount = arguments.length - 2;
    if (newCount) {
      this._sync(['_insertElements', start, newCount]);
    }
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;

function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    const visibleMetas = scale.getMatchingVisibleMetas(type);
    let values = [];
    for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__._)(values.sort((a, b) => a - b));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  const scale = meta.iScale;
  const values = getAllScaleValues(scale, meta.type);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - (size / 2)
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {start, end, reverse, top, bottom};
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  if (edge === true) {
    properties.borderSkipped = {top: true, right: true, bottom: true, left: true};
    return;
  }
  const {start, end, reverse, top, bottom} = borderProps(properties);
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, {inflateAmount}, ratio) {
  properties.inflateAmount = inflateAmount === 'auto'
    ? ratio === 1 ? 0.33 : 0
    : inflateAmount;
}
class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(obj, iAxisKey), i);
      parsed.push(parseValue((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {iScale, vScale} = meta;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom)
      ? '[' + custom.start + ', ' + custom.end + ']'
      : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const meta = this._cachedMeta;
    meta.stack = this.getDataset().stack;
  }
  update(mode) {
    const meta = this._cachedMeta;
    this.updateElements(meta.data, 0, meta.data.length, mode);
  }
  updateElements(bars, start, count, mode) {
    const reset = mode === 'reset';
    const {index, _cachedMeta: {vScale}} = this;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();
    const ruler = this._getRuler();
    const {sharedOptions, includeOptions} = this._getSharedOptions(start, mode);
    for (let i = start; i < start + count; i++) {
      const parsed = this.getParsed(i);
      const vpixels = reset || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vScale.axis]) ? {base, head: base} : this._calculateBarValuePixels(i);
      const ipixels = this._calculateBarIndexPixels(i, ruler);
      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index === stack._top || index === stack._bottom),
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      const options = properties.options || bars[i].options;
      setBorderSkipped(properties, options, stack, index);
      setInflateAmount(properties, options, ruler.ratio);
      this.updateElement(bars[i], i, properties, mode);
    }
  }
  _getStacks(last, dataIndex) {
    const {iScale} = this._cachedMeta;
    const metasets = iScale.getMatchingVisibleMetas(this._type)
      .filter(meta => meta.controller.options.grouped);
    const stacked = iScale.options.stacked;
    const stacks = [];
    const skipNull = (meta) => {
      const parsed = meta.controller.getParsed(dataIndex);
      const val = parsed && parsed[meta.vScale.axis];
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(val) || isNaN(val)) {
        return true;
      }
    };
    for (const meta of metasets) {
      if (dataIndex !== undefined && skipNull(meta)) {
        continue;
      }
      if (stacked === false || stacks.indexOf(meta.stack) === -1 ||
				(stacked === undefined && meta.stack === undefined)) {
        stacks.push(meta.stack);
      }
      if (meta.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }
  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);
    const index = (name !== undefined)
      ? stacks.indexOf(name)
      : -1;
    return (index === -1)
      ? stacks.length - 1
      : index;
  }
  _getRuler() {
    const opts = this.options;
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
    }
    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(meta);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: this._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }
  _calculateBarValuePixels(index) {
    const {_cachedMeta: {vScale, _stacked}, options: {base: baseValue, minBarLength}} = this;
    const actualBase = baseValue || 0;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
    let head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(value) !== (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    const startValue = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);
    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      const startPixel = vScale.getPixelForDecimal(0);
      const endPixel = vScale.getPixelForDecimal(1);
      const min = Math.min(startPixel, endPixel);
      const max = Math.max(startPixel, endPixel);
      base = Math.max(Math.min(base, max), min);
      head = base + size;
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler) {
    const scale = ruler.scale;
    const options = this.options;
    const skipNull = options.skipNull;
    const maxBarThickness = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(options.maxBarThickness, Infinity);
    let center, size;
    if (ruler.grouped) {
      const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex'
        ? computeFlexCategoryTraits(index, ruler, options, stackCount)
        : computeFitCategoryTraits(index, ruler, options, stackCount);
      const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    const meta = this._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    for (; i < ilen; ++i) {
      if (this.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(this._ctx);
      }
    }
  }
}
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true,
    }
  }
};

class BubbleController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  parsePrimitiveData(meta, data, start, count) {
    const parsed = super.parsePrimitiveData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const parsed = super.parseArrayData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(item[2], this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const parsed = super.parseObjectData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  getMaxOverflow() {
    const data = this._cachedMeta.data;
    let max = 0;
    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {xScale, yScale} = meta;
    const parsed = this.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    const points = this._cachedMeta.data;
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale} = this._cachedMeta;
    const {sharedOptions, includeOptions} = this._getSharedOptions(start, mode);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && this.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      this.updateElement(point, i, properties, mode);
    }
  }
  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {$shared: false});
    }
    const radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(parsed && parsed._custom, radius);
    return values;
  }
}
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        }
      }
    }
  }
};

function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = (angle, a, b) => (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    const calcMin = (angle, a, b) => (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    const minX = calcMin(_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P, startX, endX);
    const minY = calcMin(_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {ratioX, ratioY, offsetX, offsetY};
}
class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    if (this._parsing === false) {
      meta._parsed = data;
    } else {
      let getter = (i) => +data[i];
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        const {key = 'value'} = this._parsing;
        getter = (i) => +(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(data[i], key);
      }
      let i, ilen;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        meta._parsed[i] = getter(i);
      }
    }
  }
  _getRotation() {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.rotation - 90);
  }
  _getCircumference() {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.circumference);
  }
  _getRotationExtents() {
    let min = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T;
    let max = -_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T;
    for (let i = 0; i < this.chart.data.datasets.length; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        const controller = this.chart.getDatasetMeta(i).controller;
        const rotation = controller._getRotation();
        const circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min,
    };
  }
  update(mode) {
    const chart = this.chart;
    const {chartArea} = chart;
    const meta = this._cachedMeta;
    const arcs = meta.data;
    const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(this.options.cutout, maxSize), 1);
    const chartWeight = this._getRingWeight(this.index);
    const {circumference, rotation} = this._getRotationExtents();
    const {ratioX, ratioY, offsetX, offsetY} = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(this.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);
    const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
    this.offsetX = offsetX * outerRadius;
    this.offsetY = offsetY * outerRadius;
    meta.total = this.calculateTotal();
    this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _circumference(i, reset) {
    const opts = this.options;
    const meta = this._cachedMeta;
    const circumference = this._getCircumference();
    if ((reset && opts.animation.animateRotate) || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T);
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : this.innerRadius;
    const outerRadius = animateScale ? 0 : this.outerRadius;
    const {sharedOptions, includeOptions} = this._getSharedOptions(start, mode);
    let startAngle = this._getRotation();
    let i;
    for (i = 0; i < start; ++i) {
      startAngle += this._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      const circumference = this._circumference(i, reset);
      const arc = arcs[i];
      const properties = {
        x: centerX + this.offsetX,
        y: centerY + this.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      this.updateElement(arc, i, properties, mode);
    }
  }
  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;
    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    const total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T * (Math.abs(value) / total);
    }
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  getMaxBorderWidth(arcs) {
    let max = 0;
    const chart = this.chart;
    let i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  getMaxOffset(arcs) {
    let max = 0;
    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;
    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    },
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r',
};
DoughnutController.descriptors = {
  _scriptable: (name) => name !== 'spacing',
  _indexable: (name) => name !== 'spacing',
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(tooltipItem) {
          let dataLabel = tooltipItem.label;
          const value = ': ' + tooltipItem.formattedValue;
          if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(dataLabel)) {
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }
          return dataLabel;
        }
      }
    }
  }
};

class LineController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    this.supportsDecimation = true;
    super.initialize();
  }
  update(mode) {
    const meta = this._cachedMeta;
    const {dataset: line, data: points = [], _dataset} = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {start, count} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.q)(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(meta)) {
      start = 0;
      count = points.length;
    }
    line._chart = this.chart;
    line._datasetIndex = this.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = this.resolveDatasetElementOptions(mode);
    if (!this.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = this.options.segment;
    this.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    this.updateElements(points, start, count, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale, _stacked, _dataset} = this._cachedMeta;
    const {sharedOptions, includeOptions} = this._getSharedOptions(start, mode);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {spanGaps, segment} = this.options;
    const maxGapLength = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = this.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && (Math.abs(parsed[iAxis] - prevParsed[iAxis])) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }
}
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false,
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category',
    },
    _value_: {
      type: 'linear',
    },
  }
};

class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.y.bind(this)(meta, data, start, count);
  }
  update(mode) {
    const arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  getMinMax() {
    const meta = this._cachedMeta;
    const range = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    meta.data.forEach((element, index) => {
      const parsed = this.getParsed(index).r;
      if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
        if (parsed < range.min) {
          range.min = parsed;
        }
        if (parsed > range.max) {
          range.max = parsed;
        }
      }
    });
    return range;
  }
  _updateRadius() {
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? (outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    this.outerRadius = outerRadius - (radiusLength * this.index);
    this.innerRadius = this.outerRadius - radiusLength;
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = this._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;
    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P;
    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / this.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += this._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;
      let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      this.updateElement(arc, i, properties, mode);
    }
  }
  countVisibleElements() {
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index)
      ? (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle)
      : 0;
  }
}
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    },
  },
  indexAxis: 'r',
  startAngle: 0,
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};

class PieController extends DoughnutController {
}
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};

class RadarController extends DatasetController {
  getLabelAndValue(index) {
    const vScale = this._cachedMeta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.y.bind(this)(meta, data, start, count);
  }
  update(mode) {
    const meta = this._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      this.updateElement(line, undefined, properties, mode);
    }
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const scale = this._cachedMeta.rScale;
    const reset = mode === 'reset';
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      this.updateElement(point, i, properties, mode);
    }
  }
}
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  },
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear',
    }
  }
};

class Element {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }
  tooltipPosition(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  hasValue() {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(this.x) && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(this.y);
  }
  getProps(props, final) {
    const anims = this.$animations;
    if (!final || !anims) {
      return this;
    }
    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
    });
    return ret;
  }
}
Element.defaults = {};
Element.defaultRoutes = undefined;

const formatters = {
  values(value) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal};
    Object.assign(options, this.options.ticks.format);
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = tickValue / (Math.pow(10, Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(tickValue))));
    if (remain === 1 || remain === 2 || remain === 5) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {formatters};

_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (_ctx, options) => options.lineWidth,
    tickColor: (_ctx, options) => options.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0.0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: false,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2,
  }
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.ticks', 'color', '', 'color');
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.grid', 'color', '', 'borderColor');
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.grid', 'borderColor', '', 'borderColor');
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.route('scale.title', 'color', '', 'color');
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe('scale', {
  _fallback: false,
  _scriptable: (name) => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
  _indexable: (name) => name !== 'borderDash' && name !== 'tickBorderDash',
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe('scales', {
  _fallback: 'scale',
});
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe('scale.ticks', {
  _scriptable: (name) => name !== 'backdropPadding' && name !== 'callback',
  _indexable: (name) => name !== 'backdropPadding',
});

function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.A)(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(majorStart, 0);
  const end = Math.min((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}

const reverseAlign = (align) => align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(caches, (cache) => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.font, fallback);
  const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(options.padding);
  const lines = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(options.text) ? options.text.length : 1;
  return (lines * font.lineHeight) + padding.height;
}
function createScaleContext(parent, scale) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.R)(align);
  if ((reverse && position !== 'right') || (!reverse && position === 'right')) {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const {top, left, bottom, right, chart} = scale;
  const {chartArea, scales} = chart;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, left, right);
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, bottom, top);
    rotation = position === 'left' ? -_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H : _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H;
  }
  return {titleX, titleY, maxWidth, rotation};
}
class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(options) {
    this.options = options.setContext(this.getContext());
    this.axis = options.axis;
    this._userMin = this.parse(options.min);
    this._userMax = this.parse(options.max);
    this._suggestedMin = this.parse(options.suggestedMin);
    this._suggestedMax = this.parse(options.suggestedMax);
  }
  parse(raw, index) {
    return raw;
  }
  getUserBounds() {
    let {_userMin, _userMax, _suggestedMin, _suggestedMax} = this;
    _userMin = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_userMin, Number.POSITIVE_INFINITY);
    _userMax = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_userMin, _suggestedMin),
      max: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(_userMax, _suggestedMax),
      minDefined: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(_userMin),
      maxDefined: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(_userMax)
    };
  }
  getMinMax(canStack) {
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    let range;
    if (minDefined && maxDefined) {
      return {min, max};
    }
    const metas = this.getMatchingVisibleMetas();
    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(this, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    min = maxDefined && min > max ? max : min;
    max = minDefined && min > max ? min : max;
    return {
      min: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(min, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(max, min)),
      max: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(max, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(min, max))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    const {beginAtZero, grace, ticks: tickOpts} = this.options;
    const sampleSize = tickOpts.sampleSize;
    this.beforeUpdate();
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal()
      ? this.width + margins.left + margins.right
      : this.height + margins.top + margins.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.D)(this, grace, beginAtZero);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const samplingEnabled = sampleSize < this.ticks.length;
    this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      this.ticks = autoSkip(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (samplingEnabled) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let reversePixels = this.options.reverse;
    let startPixel, endPixel;
    if (this.isHorizontal()) {
      startPixel = this.left;
      endPixel = this.right;
    } else {
      startPixel = this.top;
      endPixel = this.bottom;
      reversePixels = !reversePixels;
    }
    this._startPixel = startPixel;
    this._endPixel = endPixel;
    this._reversePixels = reversePixels;
    this._length = endPixel - startPixel;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.afterSetDimensions, [this]);
  }
  _callHooks(name) {
    this.chart.notifyPlugins(name, this.getContext());
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options[name], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    const tickOpts = this.options.ticks;
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(tickOpts.callback, [tick.value, i, ticks], this);
    }
  }
  afterTickToLabelConversion() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const options = this.options;
    const tickOpts = options.ticks;
    const numTicks = this.ticks.length;
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;
    if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
      this.labelRotation = minRotation;
      return;
    }
    const labelSizes = this._getLabelSizes();
    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
    tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = this.maxHeight - getTickMarkLength(options.grid)
				- tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.F)(Math.min(
        Math.asin((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)((labelSizes.highest.height + 6) / tickWidth, -1, 1)),
        Math.asin((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(maxLabelHeight / maxLabelDiagonal, -1, 1))
      ));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    this.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.beforeFit, [this]);
  }
  fit() {
    const minSize = {
      width: 0,
      height: 0
    };
    const {chart, options: {ticks: tickOpts, title: titleOpts, grid: gridOpts}} = this;
    const display = this._isVisible();
    const isHorizontal = this.isHorizontal();
    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = this.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = this.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && this.ticks.length) {
        const {first, last, widest, highest} = this._getLabelSizes();
        const tickPadding = tickOpts.padding * 2;
        const angleRadians = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);
        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        this._calculatePadding(first, last, sin, cos);
      }
    }
    this._handleMargins();
    if (isHorizontal) {
      this.width = this._length = chart.width - this._margins.left - this._margins.right;
      this.height = minSize.height;
    } else {
      this.width = minSize.width;
      this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(first, last, sin, cos) {
    const {ticks: {align, padding}, position} = this.options;
    const isRotated = this.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const offsetLeft = this.getPixelForTick(0) - this.left;
      const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else if (align !== 'inner') {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
      this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      this.paddingTop = paddingTop + padding;
      this.paddingBottom = paddingBottom + padding;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {axis, position} = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(ticks) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(ticks);
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let labelSizes = this._labelSizes;
    if (!labelSizes) {
      const sampleSize = this.options.ticks.sampleSize;
      let ticks = this.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
    }
    return labelSizes;
  }
  _computeLabelSizes(ticks, length) {
    const {ctx, _longestTextCache: caches} = this;
    const widths = [];
    const heights = [];
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(label) && !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        width = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.G)(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(nestedLabel) && !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(nestedLabel)) {
            width = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.G)(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);
    const valueAt = (idx) => ({width: widths[idx] || 0, height: heights[idx] || 0});
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights,
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value, index) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getPixelForDecimal(decimal) {
    if (this._reversePixels) {
      decimal = 1 - decimal;
    }
    const pixel = this._startPixel + decimal * this._length;
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.I)(this._alignToPixels ? (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(this.chart, pixel, 0) : pixel);
  }
  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {min, max} = this;
    return min < 0 && max < 0 ? max :
      min > 0 && max > 0 ? min :
      0;
  }
  getContext(index) {
    const ticks = this.ticks || [];
    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context ||
				(tick.$context = createTickContext(this.getContext(), index, tick));
    }
    return this.$context ||
			(this.$context = createScaleContext(this.chart.getContext(), this));
  }
  _tickSize() {
    const optionTicks = this.options.ticks;
    const rot = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));
    const labelSizes = this._getLabelSizes();
    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return this.isHorizontal()
      ? h * cos > w * sin ? w / cos : h / sin
      : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    const display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    const axis = this.axis;
    const chart = this.chart;
    const options = this.options;
    const {grid, position} = options;
    const offset = grid.offset;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
    const axisHalfWidth = axisWidth / 2;
    const alignBorderValue = function(pixel) {
      return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, pixel, axisWidth);
    };
    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(this.bottom);
      ty1 = this.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(this.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = this.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(this.right);
      tx1 = this.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(this.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = this.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    const limit = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(options.ticks.maxTicksLimit, ticksLength);
    const step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      const optsAtIndex = grid.setContext(this.getContext(i));
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = optsAtIndex.borderDash || [];
      const borderDashOffset = optsAtIndex.borderDashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(this, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset,
      });
    }
    this._ticksLength = ticksLength;
    this._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    const axis = this.axis;
    const options = this.options;
    const {position, ticks: optionTicks} = options;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const {align, crossAlign, padding, mirror} = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';
    if (position === 'top') {
      y = this.bottom - hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = this.top + hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = ((chartArea.top + chartArea.bottom) / 2) + tickAndPadding;
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = this._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = ((chartArea.left + chartArea.right) / 2) - tickAndPadding;
      } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = this.chart.scales[positionAxisID].getPixelForValue(value);
      }
      textAlign = this._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    const labelSizes = this._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(this.getContext(i));
      pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
      font = this._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;
      let tickTextAlign = textAlign;
      if (isHorizontal) {
        x = pixel;
        if (textAlign === 'inner') {
          if (i === ilen - 1) {
            tickTextAlign = !this.options.reverse ? 'right' : 'left';
          } else if (i === 0) {
            tickTextAlign = !this.options.reverse ? 'left' : 'right';
          } else {
            tickTextAlign = 'center';
          }
        }
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      let backdrop;
      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = y + textOffset - labelPadding.top;
        let left = x - labelPadding.left;
        switch (textBaseline) {
        case 'middle':
          top -= height / 2;
          break;
        case 'bottom':
          top -= height;
          break;
        }
        switch (textAlign) {
        case 'center':
          left -= width / 2;
          break;
        case 'right':
          left -= width;
          break;
        }
        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor,
        };
      }
      items.push({
        rotation,
        label,
        font,
        color,
        strokeColor,
        strokeWidth,
        textOffset,
        textAlign: tickTextAlign,
        textBaseline,
        translation: [x, y],
        backdrop,
      });
    }
    return items;
  }
  _getXAxisLabelAlignment() {
    const {position, ticks} = this.options;
    const rotation = -(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    let align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    } else if (ticks.align === 'inner') {
      align = 'inner';
    }
    return align;
  }
  _getYAxisLabelAlignment(tl) {
    const {position, ticks: {crossAlign, mirror, padding}} = this.options;
    const labelSizes = this._getLabelSizes();
    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;
    if (position === 'left') {
      if (mirror) {
        x = this.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += (widest / 2);
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = this.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x = this.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = this.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = this.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = this.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {textAlign, x};
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const chart = this.chart;
    const position = this.options.position;
    if (position === 'left' || position === 'right') {
      return {top: 0, left: this.left, bottom: chart.height, right: this.right};
    } if (position === 'top' || position === 'bottom') {
      return {top: this.top, left: 0, bottom: this.bottom, right: chart.width};
    }
  }
  drawBackground() {
    const {ctx, options: {backgroundColor}, left, top, width, height} = this;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }
  getLineWidthForValue(value) {
    const grid = this.options.grid;
    if (!this._isVisible() || !grid.display) {
      return 0;
    }
    const ticks = this.ticks;
    const index = ticks.findIndex(t => t.value === value);
    if (index >= 0) {
      const opts = grid.setContext(this.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  }
  drawGrid(chartArea) {
    const grid = this.options.grid;
    const ctx = this.ctx;
    const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
    let i, ilen;
    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        if (grid.drawOnChartArea) {
          drawLine(
            {x: item.x1, y: item.y1},
            {x: item.x2, y: item.y2},
            item
          );
        }
        if (grid.drawTicks) {
          drawLine(
            {x: item.tx1, y: item.ty1},
            {x: item.tx2, y: item.ty2},
            {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            }
          );
        }
      }
    }
  }
  drawBorder() {
    const {chart, ctx, options: {grid}} = this;
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
    if (!axisWidth) {
      return;
    }
    const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
    const borderValue = this._borderValue;
    let x1, x2, y1, y2;
    if (this.isHorizontal()) {
      x1 = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, this.left, axisWidth) - axisWidth / 2;
      x2 = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, this.top, axisWidth) - axisWidth / 2;
      y2 = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.borderWidth;
    ctx.strokeStyle = borderOpts.borderColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
  drawLabels(chartArea) {
    const optionTicks = this.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    const ctx = this.ctx;
    const area = this._computeLabelArea();
    if (area) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.L)(ctx, area);
    }
    const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
    let i, ilen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      const item = items[i];
      const tickFont = item.font;
      const label = item.label;
      if (item.backdrop) {
        ctx.fillStyle = item.backdrop.color;
        ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
      }
      let y = item.textOffset;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, label, 0, y, tickFont, item);
    }
    if (area) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.N)(ctx);
    }
  }
  drawTitle() {
    const {ctx, options: {position, title, reverse}} = this;
    if (!title.display) {
      return;
    }
    const font = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(title.font);
    const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      offset += padding.bottom;
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    const {titleX, titleY, maxWidth, rotation} = titleArgs(this, offset, position, align);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
  draw(chartArea) {
    if (!this._isVisible()) {
      return;
    }
    this.drawBackground();
    this.drawGrid(chartArea);
    this.drawBorder();
    this.drawTitle();
    this.drawLabels(chartArea);
  }
  _layers() {
    const opts = this.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(opts.grid && opts.grid.z, -1);
    if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw: (chartArea) => {
          this.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw: (chartArea) => {
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawTitle();
      }
    }, {
      z: gz + 1,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: tz,
      draw: (chartArea) => {
        this.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    const metas = this.chart.getSortedVisibleDatasetMetas();
    const axisID = this.axis + 'AxisID';
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];
      if (meta[axisID] === this.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(opts.font);
  }
  _maxDigits() {
    const fontSize = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / fontSize;
  }
}

class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }
  register(item) {
    const proto = Object.getPrototypeOf(item);
    let parentScope;
    if (isIChartComponent(proto)) {
      parentScope = this.register(proto);
    }
    const items = this.items;
    const id = item.id;
    const scope = this.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (this.override) {
      _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.override(item.id, item.overrides);
    }
    return scope;
  }
  get(id) {
    return this.items[id];
  }
  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d[scope]) {
      delete _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d[scope][id];
      if (this.override) {
        delete _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U[id];
      }
    }
  }
}
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.V)(Object.create(null), [
    parentScope ? _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.get(parentScope) : {},
    _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.get(scope),
    item.defaults
  ]);
  _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}

class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...args) {
    this._each('register', args);
  }
  remove(...args) {
    this._each('unregister', args);
  }
  addControllers(...args) {
    this._each('register', args, this.controllers);
  }
  addElements(...args) {
    this._each('register', args, this.elements);
  }
  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }
  addScales(...args) {
    this._each('register', args, this.scales);
  }
  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }
  getElement(id) {
    return this._get(id, this.elements, 'element');
  }
  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }
  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }
  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }
  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }
  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }
  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }
  _each(method, args, typedRegistry) {
    [...args].forEach(arg => {
      const reg = typedRegistry || this._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || (reg === this.plugins && arg.id)) {
        this._exec(method, reg, arg);
      } else {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(arg, item => {
          const itemReg = typedRegistry || this._getRegistryForType(item);
          this._exec(method, itemReg, item);
        });
      }
    });
  }
  _exec(method, registry, component) {
    const camelMethod = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.W)(method);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(component['before' + camelMethod], [], component);
    registry[method](component);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(component['after' + camelMethod], [], component);
  }
  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  }
  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  }
}
var registry = new Registry();

class ScatterController extends DatasetController {
  update(mode) {
    const meta = this._cachedMeta;
    const {data: points = []} = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {start, count} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.q)(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(meta)) {
      start = 0;
      count = points.length;
    }
    if (this.options.showLine) {
      const {dataset: line, _dataset} = meta;
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      options.segment = this.options.segment;
      this.updateElement(line, undefined, {
        animated: !animationsDisabled,
        options
      }, mode);
    }
    this.updateElements(points, start, count, mode);
  }
  addElements() {
    const {showLine} = this.options;
    if (!this.datasetElementType && showLine) {
      this.datasetElementType = registry.getElement('line');
    }
    super.addElements();
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale, _stacked, _dataset} = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {spanGaps, segment} = this.options;
    const maxGapLength = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = this.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && (Math.abs(parsed[iAxis] - prevParsed[iAxis])) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const data = meta.data || [];
    if (!this.options.showLine) {
      let max = 0;
      for (let i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
}
ScatterController.id = 'scatter';
ScatterController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(item) {
          return '(' + item.label + ', ' + item.formattedValue + ')';
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PolarAreaController: PolarAreaController,
PieController: PieController,
RadarController: RadarController,
ScatterController: ScatterController
});

function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }
  init(chartOptions) {}
  formats() {
    return abstract();
  }
  parse(value, format) {
    return abstract();
  }
  format(timestamp, format) {
    return abstract();
  }
  add(timestamp, amount, unit) {
    return abstract();
  }
  diff(a, b, unit) {
    return abstract();
  }
  startOf(timestamp, unit, weekday) {
    return abstract();
  }
  endOf(timestamp, unit) {
    return abstract();
  }
}
DateAdapter.override = function(members) {
  Object.assign(DateAdapter.prototype, members);
};
var adapters = {
  _date: DateAdapter
};

function binarySearch(metaset, axis, value, intersect) {
  const {controller, data, _sorted} = metaset;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Y : _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {lo: start.lo, hi: end.hi};
      }
    }
  }
  return {lo: 0, hi: data.length - 1};
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {index, data} = metasets[i];
    const {lo, hi} = binarySearch(metasets[i], axis, value, intersect);
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function(pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
  const items = [];
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (!includeInvisible && !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.$)(element, chart.chartArea, 0)) {
      return;
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
  };
  evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
  let items = [];
  function evaluationFunc(element, datasetIndex, index) {
    const {startAngle, endAngle} = element.getProps(['startAngle', 'endAngle'], useFinalPosition);
    const {angle} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a0)(element, {x: position.x, y: position.y});
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle)) {
      items.push({element, datasetIndex, index});
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  let items = [];
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  function evaluationFunc(element, datasetIndex, index) {
    const inRange = element.inRange(position.x, position.y, useFinalPosition);
    if (intersect && !inRange) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    const pointInArea = !!includeInvisible || chart.isPointInArea(center);
    if (!pointInArea && !inRange) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{element, datasetIndex, index}];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({element, datasetIndex, index});
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return [];
  }
  return axis === 'r' && !intersect
    ? getNearestRadialItems(chart, position, axis, useFinalPosition)
    : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
  const items = [];
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({element, datasetIndex, index});
      intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
    }
  });
  if (intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  evaluateInteractionItems,
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      const axis = options.axis || 'x';
      const includeInvisible = options.includeInvisible || false;
      const items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible)
        : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach((meta) => {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({element, datasetIndex: meta.index, index});
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      let items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) :
        getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({element: data[i], datasetIndex, index: i});
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
    },
    x(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(e, chart);
      return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
    }
  }
};

const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ?
      v0.index - v1.index :
      v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    ({position: pos, options: {stack, stackWeight = 1}} = box);
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && (pos + stack),
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  for (const wrap of layouts) {
    const {stack, pos, stackWeight} = wrap;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    const _stack = stacks[stack] || (stacks[stack] = {count: 0, placed: 0, weight: 0, size: 0});
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const {vBoxMaxWidth, hBoxMaxHeight} = params;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const {fullSize} = layout.box;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const {pos, box} = layout;
  const maxPadding = chartArea.maxPadding;
  if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {size: 0, count: 1};
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal
    ? {same: widthChanged, other: heightChanged}
    : {same: heightChanged, other: widthChanged};
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {left: 0, top: 0, right: 0, bottom: 0};
    positions.forEach((pos) => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal
    ? marginForPositions(['left', 'right'])
    : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(
      layout.width || chartArea.w,
      layout.height || chartArea.h,
      getMargins(layout.horizontal, chartArea)
    );
    const {same, other} = updateDims(chartArea, params, layout, stacks);
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let {x, y} = chartArea;
  for (const layout of boxes) {
    const box = layout.box;
    const stack = stacks[layout.stack] || {count: 1, placed: 0, weight: 1};
    const weight = (layout.stackWeight / stack.weight) || 1;
    if (layout.horizontal) {
      const width = chartArea.w * weight;
      const height = stack.size || box.height;
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      const height = chartArea.h * weight;
      const width = stack.size || box.width;
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, width, height);
      }
      stack.start = x;
      stack.placed += height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.set('layout', {
  autoPadding: true,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function() {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) =>
      wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w,
    };
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(boxes.chartArea, (layout) => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {left: 0, top: 0, right: 0, bottom: 0});
    });
  }
};

class BasePlatform {
  acquireContext(canvas, aspectRatio) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }
  isAttached(canvas) {
    return true;
  }
  updateConfig(config) {
  }
}

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
  updateConfig(config) {
    config.options.animation = false;
  }
}

const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = value => value === null || value === '';
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a3)(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a3)(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a5 ? {passive: true} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {x, y} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X)(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null,
  };
}
function nodeListContains(nodeList, canvas) {
  for (const node of nodeList) {
    if (node === canvas || node.contains(canvas)) {
      return true;
    }
  }
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.addedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.removedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a2)(canvas);
  if (!container) {
    return;
  }
  const resize = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a4)((width, height) => {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a4)((event) => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart, (args) => {
    const event = args[0];
    return [event, event.offsetX, event.offsetY];
  });
  addListener(canvas, type, proxy);
  return proxy;
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    const canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach((prop) => {
      const value = initial[prop];
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach((key) => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }
  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];
    if (!proxy) {
      return;
    }
    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(canvas, width, height, aspectRatio) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a1)(canvas, width, height, aspectRatio);
  }
  isAttached(canvas) {
    const container = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a2)(canvas);
    return !!(container && container.isConnected);
  }
}

function _detectPlatform(canvas) {
  if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a6)() || (typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas)) {
    return BasicPlatform;
  }
  return DomPlatform;
}

class PluginService {
  constructor() {
    this._init = [];
  }
  notify(chart, hook, args, filter) {
    if (hook === 'beforeInit') {
      this._init = this._createDescriptors(chart, true);
      this._notify(this._init, chart, 'install');
    }
    const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
    const result = this._notify(descriptors, chart, hook, args);
    if (hook === 'afterDestroy') {
      this._notify(descriptors, chart, 'stop');
      this._notify(this._init, chart, 'uninstall');
    }
    return result;
  }
  _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    const descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  }
  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }
  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;
    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }
}
function allPlugins(config) {
  const localIds = {};
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
      localIds[plugin.id] = true;
    }
  }
  return {plugins, localIds};
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, {plugins, localIds}, options, all) {
  const result = [];
  const context = chart.getContext();
  for (const plugin of plugins) {
    const id = plugin.id;
    const opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin,
      options: pluginOpts(chart.config, {plugin, local: localIds[id]}, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, {plugin, local}, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  if (local && plugin.defaults) {
    scopes.push(plugin.defaults);
  }
  return config.createResolver(scopes, context, [''], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}

function getIndexAxis(type, options) {
  const datasetDefaults = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y') {
    return id;
  }
  return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function mergeScaleConfig(config, options) {
  const chartDefaults = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U[config.type] || {scales: {}};
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const firstIDs = Object.create(null);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(scaleConf)) {
      return console.error(`Invalid scale configuration for scale: ${id}`);
    }
    if (scaleConf._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
    }
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ac)(Object.create(null), [{axis}, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
      scales[id] = scales[id] || Object.create(null);
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ac)(scales[id], [{axis}, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ac)(scale, [_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.scales[scale.type], _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = (set, obj, key) => {
  const opts = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(type) {
    this._config.type = type;
  }
  get data() {
    return this._config.data;
  }
  set data(data) {
    this._config.data = initData(data);
  }
  get options() {
    return this._config.options;
  }
  set options(options) {
    this._config.options = options;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType,
      () => [[
        `datasets.${datasetType}`,
        ''
      ]]);
  }
  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`,
      () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`,
        ],
        [
          `datasets.${datasetType}`,
          ''
        ]
      ]);
  }
  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`,
      () => [[
        `datasets.${datasetType}.elements.${elementType}`,
        `datasets.${datasetType}`,
        `elements.${elementType}`,
        ''
      ]]);
  }
  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`,
      () => [[
        `plugins.${id}`,
        ...plugin.additionalOptionScopes || [],
      ]]);
  }
  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;
    let cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  }
  getOptionScopes(mainScope, keyLists, resetCache) {
    const {options, type} = this;
    const cache = this._cachedScopes(mainScope, resetCache);
    const cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }
      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a7, key));
    });
    const array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  }
  chartOptionScopes() {
    const {options, type} = this;
    return [
      options,
      _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U[type] || {},
      _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {},
      {type},
      _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d,
      _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a7
    ];
  }
  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {$shared: true};
    const {resolver, subPrefixes} = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a8)(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a9)(resolver, context, subResolver);
    }
    for (const prop of names) {
      result[prop] = options[prop];
    }
    return result;
  }
  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {resolver} = getResolver(this._resolverCache, scopes, prefixes);
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(context)
      ? (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a9)(resolver, context, undefined, descriptorDefaults)
      : resolver;
  }
}
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aa)(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
const hasFunction = value => (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(value)
  && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a8)(value[key]), false);
function needContext(proxy, names) {
  const {isScriptable, isIndexable} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ab)(proxy);
  for (const prop of names) {
    const scriptable = isScriptable(prop);
    const indexable = isIndexable(prop);
    const value = (indexable || scriptable) && proxy[prop];
    if ((scriptable && ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a8)(value) || hasFunction(value)))
      || (indexable && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(value))) {
      return true;
    }
  }
  return false;
}

var version = "3.9.1";

const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || (KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x');
}
function compare2Level(l1, l2) {
  return function(a, b) {
    return a[l1] === b[l1]
      ? a[l2] - b[l2]
      : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a6)() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = (key) => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter((c) => c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const intKey = +key;
    if (intKey >= start) {
      const value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
  if (!inChartArea || e.type === 'mouseout') {
    return null;
  }
  if (isClick) {
    return lastEvent;
  }
  return e;
}
class Chart {
  constructor(item, userConfig) {
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error(
        'Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' +
				' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.'
      );
    }
    const options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ad)();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ae)(mode => this.update(mode), options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {options: {aspectRatio, maintainAspectRatio}, width, height, _aspectRatio} = this;
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(aspectRatio)) {
      return aspectRatio;
    }
    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }
    return height ? width / height : null;
  }
  get data() {
    return this.config.data;
  }
  set data(data) {
    this.config.data = data;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this.config.options = options;
  }
  _initialize() {
    this.notifyPlugins('beforeInit');
    if (this.options.responsive) {
      this.resize();
    } else {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.af)(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins('afterInit');
    return this;
  }
  clear() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ag)(this.canvas, this.ctx);
    return this;
  }
  stop() {
    animator.stop(this);
    return this;
  }
  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {width, height};
    }
  }
  _resize(width, height) {
    const options = this.options;
    const canvas = this.canvas;
    const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
    const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
    const mode = this.width ? 'resize' : 'attach';
    this.width = newSize.width;
    this.height = newSize.height;
    this._aspectRatio = this.aspectRatio;
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.af)(this, newRatio, true)) {
      return;
    }
    this.notifyPlugins('resize', {size: newSize});
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(options.onResize, [this, newSize], this);
    if (this.attached) {
      if (this._doResize(mode)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }
  buildOrUpdateScales() {
    const options = this.options;
    const scaleOpts = options.scales;
    const scales = this.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];
    if (scaleOpts) {
      items = items.concat(
        Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === 'r';
          const isHorizontal = axis === 'x';
          return {
            options: scaleOptions,
            dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
            dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
          };
        })
      );
    }
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(items, (item) => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      let scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: this.ctx,
          chart: this
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(scales, (scale) => {
      layouts.configure(this, scale, scale.options);
      layouts.addBox(this, scale);
    });
  }
  _updateMetasets() {
    const metasets = this._metasets;
    const numData = this.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);
    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        this._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {_metasets: metasets, data: {datasets}} = this;
    if (metasets.length > datasets.length) {
      delete this._stacks;
    }
    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        this._destroyDatasetMeta(index);
      }
    });
  }
  buildOrUpdateControllers() {
    const newControllers = [];
    const datasets = this.data.datasets;
    let i, ilen;
    this._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = this.getDatasetMeta(i);
      const type = dataset.type || this.config.type;
      if (meta.type && meta.type !== type) {
        this._destroyDatasetMeta(i);
        meta = this.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = this.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {datasetElementType, dataElementType} = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type];
        Object.assign(ControllerClass.prototype, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(this, i);
        newControllers.push(meta.controller);
      }
    }
    this._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.data.datasets, (dataset, datasetIndex) => {
      this.getDatasetMeta(datasetIndex).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  }
  update(mode) {
    const config = this.config;
    config.update();
    const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
    const animsDisabled = this._animationsDisabled = !options.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins('beforeUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    const newControllers = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
      const {controller} = this.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
    this._updateLayout(minPadding);
    if (!animsDisabled) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(newControllers, (controller) => {
        controller.reset();
      });
    }
    this._updateDatasets(mode);
    this.notifyPlugins('afterUpdate', {mode});
    this._layers.sort(compare2Level('z', '_idx'));
    const {_active, _lastEvent} = this;
    if (_lastEvent) {
      this._eventHandler(_lastEvent, true);
    } else if (_active.length) {
      this._updateHoverStyles(_active, _active, true);
    }
    this.render();
  }
  _updateScales() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.scales, (scale) => {
      layouts.removeBox(this, scale);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const options = this.options;
    const existingEvents = new Set(Object.keys(this._listeners));
    const newEvents = new Set(options.events);
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ah)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {_hiddenIndices} = this;
    const changes = this._getUniformDataChanges() || [];
    for (const {method, start, count} of changes) {
      const move = method === '_removeElements' ? -count : count;
      moveNumericKeys(_hiddenIndices, start, move);
    }
  }
  _getUniformDataChanges() {
    const _dataChanges = this._dataChanges;
    if (!_dataChanges || !_dataChanges.length) {
      return;
    }
    this._dataChanges = [];
    const datasetCount = this.data.datasets.length;
    const makeSet = (idx) => new Set(
      _dataChanges
        .filter(c => c[0] === idx)
        .map((c, i) => i + ',' + c.splice(1).join(','))
    );
    const changeSet = makeSet(0);
    for (let i = 1; i < datasetCount; i++) {
      if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ah)(changeSet, makeSet(i))) {
        return;
      }
    }
    return Array.from(changeSet)
      .map(c => c.split(','))
      .map(a => ({method: a[1], start: +a[2], count: +a[3]}));
  }
  _updateLayout(minPadding) {
    if (this.notifyPlugins('beforeLayout', {cancelable: true}) === false) {
      return;
    }
    layouts.update(this, this.width, this.height, minPadding);
    const area = this.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    this._layers = [];
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.boxes, (box) => {
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      this._layers.push(...box._layers());
    }, this);
    this._layers.forEach((item, index) => {
      item._idx = index;
    });
    this.notifyPlugins('afterLayout');
  }
  _updateDatasets(mode) {
    if (this.notifyPlugins('beforeDatasetsUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this.getDatasetMeta(i).controller.configure();
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._updateDataset(i, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a8)(mode) ? mode({datasetIndex: i}) : mode);
    }
    this.notifyPlugins('afterDatasetsUpdate', {mode});
  }
  _updateDataset(index, mode) {
    const meta = this.getDatasetMeta(index);
    const args = {meta, index, mode, cancelable: true};
    if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    this.notifyPlugins('afterDatasetUpdate', args);
  }
  render() {
    if (this.notifyPlugins('beforeRender', {cancelable: true}) === false) {
      return;
    }
    if (animator.has(this)) {
      if (this.attached && !animator.running(this)) {
        animator.start(this);
      }
    } else {
      this.draw();
      onAnimationsComplete({chart: this});
    }
  }
  draw() {
    let i;
    if (this._resizeBeforeDraw) {
      const {width, height} = this._resizeBeforeDraw;
      this._resize(width, height);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    if (this.notifyPlugins('beforeDraw', {cancelable: true}) === false) {
      return;
    }
    const layers = this._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(this.chartArea);
    }
    this._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(this.chartArea);
    }
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    const metasets = this._sortedMetasets;
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', {cancelable: true}) === false) {
      return;
    }
    const metasets = this.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      this._drawDataset(metasets[i]);
    }
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(meta) {
    const ctx = this.ctx;
    const clip = meta._clip;
    const useClip = !clip.disabled;
    const area = this.chartArea;
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.L)(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? this.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.N)(ctx);
    }
    args.cancelable = false;
    this.notifyPlugins('afterDatasetDraw', args);
  }
  isPointInArea(point) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.$)(point, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetMeta(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    const metasets = this._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  }
  getContext() {
    return this.$context || (this.$context = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(null, {chart: this, type: 'chart'}));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateVisibility(datasetIndex, dataIndex, visible) {
    const mode = visible ? 'show' : 'hide';
    const meta = this.getDatasetMeta(datasetIndex);
    const anims = meta.controller._resolveAnimations(undefined, mode);
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      this.update();
    } else {
      this.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {visible});
      this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : undefined);
    }
  }
  hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  }
  show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    const meta = this._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
    }
    delete this._metasets[datasetIndex];
  }
  _stop() {
    let i, ilen;
    this.stop();
    animator.remove(this);
    for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._destroyDatasetMeta(i);
    }
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const {canvas, ctx} = this;
    this._stop();
    this.config.clearCache();
    if (canvas) {
      this.unbindEvents();
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ag)(canvas, ctx);
      this.platform.releaseContext(ctx);
      this.canvas = null;
      this.ctx = null;
    }
    this.notifyPlugins('destroy');
    delete instances[this.id];
    this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const listeners = this._listeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const listener = (e, x, y) => {
      e.offsetX = x;
      e.offsetY = y;
      this._eventHandler(e);
    };
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.events, (type) => _add(type, listener));
  }
  bindResponsiveEvents() {
    if (!this._responsiveListeners) {
      this._responsiveListeners = {};
    }
    const listeners = this._responsiveListeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(this, type, listener);
        delete listeners[type];
      }
    };
    const listener = (width, height) => {
      if (this.canvas) {
        this.resize(width, height);
      }
    };
    let detached;
    const attached = () => {
      _remove('attach', attached);
      this.attached = true;
      this.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = () => {
      this.attached = false;
      _remove('resize', listener);
      this._stop();
      this._resize(0, 0);
      _add('attach', attached);
    };
    if (platform.isAttached(this.canvas)) {
      attached();
    } else {
      detached();
    }
  }
  unbindEvents() {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this._listeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._listeners = {};
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this._responsiveListeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements) {
    const lastActive = this._active || [];
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ai)(active, lastActive);
    if (changed) {
      this._active = active;
      this._lastEvent = null;
      this._updateHoverStyles(active, lastActive);
    }
  }
  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }
  _updateHoverStyles(active, lastActive, replay) {
    const hoverOptions = this.options.hover;
    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));
    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      this.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    const args = {
      event: e,
      replay,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    };
    const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    const changed = this._handleEvent(e, replay, args.inChartArea);
    args.cancelable = false;
    this.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(e, replay, inChartArea) {
    const {_active: lastActive = [], options} = this;
    const useFinalPosition = replay;
    const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
    const isClick = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aj)(e);
    const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
    if (inChartArea) {
      this._lastEvent = null;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(options.onHover, [e, active, this], this);
      if (isClick) {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(options.onClick, [e, active, this], this);
      }
    }
    const changed = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ai)(active, lastActive);
    if (changed || replay) {
      this._active = active;
      this._updateHoverStyles(active, lastActive, replay);
    }
    this._lastEvent = lastEvent;
    return changed;
  }
  _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const hoverOptions = this.options.hover;
    return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
  }
}
const invalidatePlugins = () => (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(Chart.instances, (chart) => chart._plugins.invalidate());
const enumerable = true;
Object.defineProperties(Chart, {
  defaults: {
    enumerable,
    value: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d
  },
  instances: {
    enumerable,
    value: instances
  },
  overrides: {
    enumerable,
    value: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.U
  },
  registry: {
    enumerable,
    value: registry
  },
  version: {
    enumerable,
    value: version
  },
  getChart: {
    enumerable,
    value: getChart
  },
  register: {
    enumerable,
    value: (...items) => {
      registry.add(...items);
      invalidatePlugins();
    }
  },
  unregister: {
    enumerable,
    value: (...items) => {
      registry.remove(...items);
      invalidatePlugins();
    }
  }
});

function clipArc(ctx, element, endAngle) {
  const {startAngle, pixelMargin, x, y, outerRadius, innerRadius} = element;
  let angleMargin = pixelMargin / outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H, startAngle - _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.al)(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  const computeOuterLimit = (val) => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(o.innerStart, 0, innerLimit),
    innerEnd: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(o.innerEnd, 0, innerLimit),
  };
}
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta),
  };
}
function pathArc(ctx, element, offset, spacing, end, circular) {
  const {x, y, startAngle: start, pixelMargin, innerRadius: innerR} = element;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? (alpha * avNogSpacingRadius) / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const {outerStart, outerEnd, innerStart, innerEnd} = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  if (circular) {
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
    if (outerEnd > 0) {
      const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H);
    }
    const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    if (innerEnd > 0) {
      const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H, innerEndAdjustedAngle + Math.PI);
    }
    ctx.arc(x, y, innerRadius, endAngle - (innerEnd / innerRadius), startAngle + (innerStart / innerRadius), true);
    if (innerStart > 0) {
      const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H);
    }
    const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    if (outerStart > 0) {
      const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H, outerStartAdjustedAngle);
    }
  } else {
    ctx.moveTo(x, y);
    const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
    const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerStartX, outerStartY);
    const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
    const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerEndX, outerEndY);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
  const {fullCircles, startAngle, circumference} = element;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, startAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T, circular);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + circumference % _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T;
      if (circumference % _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T === 0) {
        endAngle += _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T;
      }
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle, circular);
  ctx.fill();
  return endAngle;
}
function drawFullCircleBorders(ctx, element, inner) {
  const {x, y, startAngle, pixelMargin, fullCircles} = element;
  const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
  const innerRadius = element.innerRadius + pixelMargin;
  let i;
  if (inner) {
    clipArc(ctx, element, startAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T);
  }
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T, startAngle, true);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle, startAngle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
}
function drawBorder(ctx, element, offset, spacing, endAngle, circular) {
  const {options} = element;
  const {borderWidth, borderJoinStyle} = options;
  const inner = options.borderAlign === 'inner';
  if (!borderWidth) {
    return;
  }
  if (inner) {
    ctx.lineWidth = borderWidth * 2;
    ctx.lineJoin = borderJoinStyle || 'round';
  } else {
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = borderJoinStyle || 'bevel';
  }
  if (element.fullCircles) {
    drawFullCircleBorders(ctx, element, inner);
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  pathArc(ctx, element, offset, spacing, endAngle, circular);
  ctx.stroke();
}
class ArcElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {angle, distance} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a0)(point, {x: chartX, y: chartY});
    const {startAngle, endAngle, innerRadius, outerRadius, circumference} = this.getProps([
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference'
    ], useFinalPosition);
    const rAdjust = this.options.spacing / 2;
    const _circumference = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(circumference, endAngle - startAngle);
    const betweenAngles = _circumference >= _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle);
    const withinRadius = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
    return (betweenAngles && withinRadius);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, startAngle, endAngle, innerRadius, outerRadius} = this.getProps([
      'x',
      'y',
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference',
    ], useFinalPosition);
    const {offset, spacing} = this.options;
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    const {options, circumference} = this;
    const offset = (options.offset || 0) / 2;
    const spacing = (options.spacing || 0) / 2;
    const circular = options.circular;
    this.pixelMargin = (options.borderAlign === 'inner') ? 0.33 : 0;
    this.fullCircles = circumference > _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T ? Math.floor(circumference / _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T) : 0;
    if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
      return;
    }
    ctx.save();
    let radiusOffset = 0;
    if (offset) {
      radiusOffset = offset / 2;
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
      if (this.circumference >= _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P) {
        radiusOffset = offset;
      }
    }
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    const endAngle = drawArc(ctx, this, radiusOffset, spacing, circular);
    drawBorder(ctx, this, radiusOffset, spacing, endAngle, circular);
    ctx.restore();
  }
}
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderJoinStyle: undefined,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
  circular: true,
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};

function setStyle(ctx, options, style = options) {
  ctx.lineCap = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDash, options.borderDash));
  ctx.lineDashOffset = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.as;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.at;
  }
  return lineTo;
}
function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {start: paramsStart = 0, end: paramsEnd = count - 1} = params;
  const {start: segmentStart, end: segmentEnd} = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const {points, options} = line;
  const {count, start, loop, ilen} = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {move = true, reverse} = params || {};
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {count, start, ilen} = pathVars(points, segment, params);
  const {move = true, reverse} = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ap;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aq;
  }
  return _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ar;
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const {segments, options} = line;
  const segmentMethod = _getSegmentMethod(line);
  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {start, end: start + count - 1})) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
class LineElement extends Element {
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._chart = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  updateControlPoints(chartArea, indexAxis) {
    const options = this.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
      const loop = options.spanGaps ? this._loop : this._fullLoop;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.am)(this._points, options, chartArea, loop, indexAxis);
      this._pointsUpdated = true;
    }
  }
  set points(points) {
    this._points = points;
    delete this._segments;
    delete this._path;
    this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.an)(this, this.options.segment));
  }
  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    const options = this.options;
    const value = point[property];
    const points = this.points;
    const segments = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ao)(this, {property, start: value, end: value});
    if (!segments.length) {
      return;
    }
    const result = [];
    const _interpolate = _getInterpolationMethod(options);
    let i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {start, end} = segments[i];
      const p1 = points[start];
      const p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      const interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx, start, count) {
    const segments = this.segments;
    const segmentMethod = _getSegmentMethod(this);
    let loop = this._loop;
    start = start || 0;
    count = count || (this.points.length - start);
    for (const segment of segments) {
      loop &= segmentMethod(ctx, this, segment, {start, end: start + count - 1});
    }
    return !!loop;
  }
  draw(ctx, chartArea, start, count) {
    const options = this.options || {};
    const points = this.points || [];
    if (points.length && options.borderWidth) {
      ctx.save();
      draw(ctx, this, start, count);
      ctx.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  }
}
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0,
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: (name) => name !== 'borderDash' && name !== 'fill',
};

function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {[axis]: value} = el.getProps([axis], useFinalPosition);
  return (Math.abs(pos - value) < options.radius + options.hitRadius);
}
class PointElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return ((Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)) < Math.pow(options.hitRadius + options.radius, 2));
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, area) {
    const options = this.options;
    if (this.skip || options.radius < 0.1 || !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.$)(this, area, this.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, options, this.x, this.y);
  }
  getRange() {
    const options = this.options || {};
    return options.radius + options.hitRadius;
  }
}
PointElement.id = 'point';
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

function getBarBounds(bar, useFinalPosition) {
  const {x, y, base, width, height} = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {left, top, right, bottom};
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aw)(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const {enableBorderRadius} = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r)),
      }
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds
		&& (skipX || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(x, bounds.left, bounds.right))
		&& (skipY || (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
class BarElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  draw(ctx) {
    const {inflateAmount, options: {borderColor, backgroundColor}} = this;
    const {inner, outer} = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av : addNormalRectPath;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount));
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, base, horizontal} = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
LineElement: LineElement,
PointElement: PointElement,
BarElement: BarElement
});

function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const {x: pointAx, y: pointAy} = data[a];
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs(
        (pointAx - avgX) * (data[j].y - pointAy) -
        (pointAx - data[j].x) * (avgY - pointAy)
      );
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(minIndex) && !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex1],
            x: avgX,
          });
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex2],
            x: avgX
          });
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {value: data});
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach((dataset) => {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {iScale} = meta;
  const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
  if (minDefined) {
    start = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {start, count};
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false,
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {_data, indexAxis} = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a)([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (!meta.controller.supportsDecimation) {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let {start, count} = getStartAndCountOfVisiblePointsSimplified(meta, data);
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function() {
            return this._decimated;
          },
          set: function(d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
      case 'lttb':
        decimated = lttbDecimation(data, start, count, availableWidth, options);
        break;
      case 'min-max':
        decimated = minMaxDecimation(data, start, count, availableWidth);
        break;
      default:
        throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};

function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  for (const segment of segments) {
    let {start, end} = segment;
    end = _findSegmentEnd(start, end, points);
    const bounds = _getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    const targetSegments = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ao)(target, bounds);
    for (const tgt of targetSegments) {
      const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ay)(segment, points, subBounds);
      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function _getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az)(start);
    end = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az)(end);
  }
  return {property, start, end};
}
function _pointsFromSegments(boundary, line) {
  const {x = null, y = null} = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(({start, end}) => {
    end = _findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({x: first.x, y});
      points.push({x: last.x, y});
    } else if (x !== null) {
      points.push({x, y: first.y});
      points.push({x, y: last.y});
    }
  });
  return points;
}
function _findSegmentEnd(start, end, points) {
  for (;end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}

function _createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = _pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {tension: 0},
    _loop,
    _fullLoop: _loop
  }) : null;
}
function _shouldApplyFill(source) {
  return source && source.fill !== false;
}

function _resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(target) && Math.floor(target) === target) {
    return decodeTargetIndex(fill[0], index, target, count);
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
  if (firstCh === '-' || firstCh === '+') {
    target = index + target;
  }
  if (target === index || target < 0 || target >= count) {
    return false;
  }
  return target;
}
function _getTargetPixel(fill, scale) {
  let pixel = null;
  if (fill === 'start') {
    pixel = scale.bottom;
  } else if (fill === 'end') {
    pixel = scale.top;
  } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    pixel = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    pixel = scale.getBasePixel();
  }
  return pixel;
}
function _getTargetValue(fill, scale, startValue) {
  let value;
  if (fill === 'start') {
    value = startValue;
  } else if (fill === 'end') {
    value = scale.options.reverse ? scale.min : scale.max;
  } else if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  return value;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}

function _buildStackLine(source) {
  const {scale, index, line} = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(scale, index);
  linesBelow.push(_createBoundaryLine({x: null, y: scale.bottom}, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({points, options: {}});
}
function getLinesBelow(scale, index) {
  const below = [];
  const metas = scale.getMatchingVisibleMetas('line');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {first, last, point} = findPoint(line, sourcePoint, 'x');
    if (!point || (first && last)) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {first, last, point};
}

class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    const {x, y, radius} = this;
    bounds = bounds || {start: 0, end: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T};
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }
  interpolate(point) {
    const {x, y, radius} = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }
}

function _getTarget(source) {
  const {chart, fill, line} = source;
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return _buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
  const {scale = {}, fill} = source;
  const pixel = _getTargetPixel(fill, scale);
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(pixel)) {
    const horizontal = scale.isHorizontal();
    return {
      x: horizontal ? pixel : null,
      y: horizontal ? null : pixel
    };
  }
  return null;
}
function computeCircularBoundary(source) {
  const {scale, fill} = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const start = options.reverse ? scale.max : scale.min;
  const value = _getTargetValue(fill, scale, start);
  const target = [];
  if (options.grid.circular) {
    const center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (let i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}

function _drawfill(ctx, source, area) {
  const target = _getTarget(source);
  const {line, scale, axis} = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {above = color, below = color} = fillOption || {};
  if (target && line.points.length) {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.L)(ctx, area);
    doFill(ctx, {line, target, above, below, area, scale, axis});
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.N)(ctx);
  }
}
function doFill(ctx, cfg) {
  const {line, target, above, below, area, scale} = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    clipVertical(ctx, target, area.top);
    fill(ctx, {line, target, color: above, scale, property});
    ctx.restore();
    ctx.save();
    clipVertical(ctx, target, area.bottom);
  }
  fill(ctx, {line, target, color: below, scale, property});
  ctx.restore();
}
function clipVertical(ctx, target, clipY) {
  const {segments, points} = target;
  let first = true;
  let lineLoop = false;
  ctx.beginPath();
  for (const segment of segments) {
    const {start, end} = segment;
    const firstPoint = points[start];
    const lastPoint = points[_findSegmentEnd(start, end, points)];
    if (first) {
      ctx.moveTo(firstPoint.x, firstPoint.y);
      first = false;
    } else {
      ctx.lineTo(firstPoint.x, clipY);
      ctx.lineTo(firstPoint.x, firstPoint.y);
    }
    lineLoop = !!target.pathSegment(ctx, segment, {move: lineLoop});
    if (lineLoop) {
      ctx.closePath();
    } else {
      ctx.lineTo(lastPoint.x, clipY);
    }
  }
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function fill(ctx, cfg) {
  const {line, target, property, color, scale} = cfg;
  const segments = _segments(line, target, property);
  for (const {source: src, target: tgt, start, end} of segments) {
    const {style: {backgroundColor = color} = {}} = src;
    const notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);
    let loop;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      const targetLoop = !!target.pathSegment(ctx, tgt, {move: lineLoop, reverse: true});
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function clipBounds(ctx, scale, bounds) {
  const {top, bottom} = scale.chart.chartArea;
  const {property, start, end} = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}

var index = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: _decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line,
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = _resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw && source.fill) {
        _drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (_shouldApplyFill(source)) {
        _drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    _drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};

const getBoxSize = (labelOpts, fontSize) => {
  let {boxHeight = fontSize, boxWidth = fontSize} = labelOpts;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight, margins) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  }
  buildLabels() {
    const labelOpts = this.options.labels || {};
    let legendItems = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(labelOpts.generateLabels, [this.chart], this) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
    }
    if (this.options.reverse) {
      legendItems.reverse();
    }
    this.legendItems = legendItems;
  }
  fit() {
    const {options, ctx} = this;
    if (!options.display) {
      this.width = this.height = 0;
      return;
    }
    const labelOpts = options.labels;
    const labelFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(labelOpts.font);
    const fontSize = labelFont.size;
    const titleHeight = this._computeTitleHeight();
    const {boxWidth, itemHeight} = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;
    if (this.isHorizontal()) {
      width = this.maxWidth;
      height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = this.maxHeight;
      width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    }
    this.width = Math.min(width, options.maxWidth || this.maxWidth);
    this.height = Math.min(height, options.maxHeight || this.maxHeight);
  }
  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxWidth, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const lineWidths = this.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {left: 0, top, row, width: itemWidth, height: itemHeight};
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }
  _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxHeight, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const columnSizes = this.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let col = 0;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({width: currentColWidth, height: currentColHeight});
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {left, top: currentColHeight, col, width: itemWidth, height: itemHeight};
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({width: currentColWidth, height: currentColHeight});
    return totalWidth;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const titleHeight = this._computeTitleHeight();
    const {legendHitBoxes: hitboxes, options: {align, labels: {padding}, rtl}} = this;
    const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(rtl, this.left, this.width);
    if (this.isHorizontal()) {
      let row = 0;
      let left = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.left + padding, this.right - this.lineWidths[row]);
      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.left + padding, this.right - this.lineWidths[row]);
        }
        hitbox.top += this.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        }
        hitbox.top = top;
        hitbox.left += this.left + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
        top += hitbox.height + padding;
      }
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const ctx = this.ctx;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.L)(ctx, this);
      this._draw();
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.N)(ctx);
    }
  }
  _draw() {
    const {options: opts, columnSizes, lineWidths, ctx} = this;
    const {align, labels: labelOpts} = opts;
    const defaultColor = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.color;
    const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(opts.rtl, this.left, this.width);
    const labelFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(labelOpts.font);
    const {color: fontColor, padding} = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    this.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {boxWidth, boxHeight, itemHeight} = getBoxSize(labelOpts, fontSize);
    const drawLegendBox = function(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      const lineWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineWidth, 1);
      ctx.fillStyle = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.fillStyle, defaultColor);
      ctx.lineCap = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDashOffset, 0);
      ctx.lineJoin = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxHeight * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aE)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(v => v !== 0)) {
          (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av)(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius,
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const fillText = function(x, y, legendItem) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, legendItem.text, x, y + (itemHeight / 2), labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    const isHorizontal = this.isHorizontal();
    const titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.left + padding, this.right - lineWidths[0]),
        y: this.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: this.left + padding,
        y: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
        line: 0
      };
    }
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aB)(this.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    this.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor || fontColor;
      ctx.fillStyle = legendItem.fontColor || fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + halfFontSize + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(this.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > this.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.left + padding, this.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > this.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
      }
      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aC)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aD)(this.ctx, opts.textDirection);
  }
  drawTitle() {
    const opts = this.options;
    const titleOpts = opts.title;
    const titleFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(opts.rtl, this.left, this.width);
    const ctx = this.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = this.left;
    let maxWidth = this.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...this.lineWidths);
      y = this.top + topPaddingPlusHalfFontSize;
      left = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(opts.align, left, this.right - maxWidth);
    } else {
      const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
    }
    const x = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.R)(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, titleOpts.text, x, y, titleFont);
  }
  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    let i, hitBox, lh;
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(x, this.left, this.right)
      && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(y, this.top, this.bottom)) {
      lh = this.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(x, hitBox.left, hitBox.left + hitBox.width)
          && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak)(y, hitBox.top, hitBox.top + hitBox.height)) {
          return this.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const opts = this.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    const hoveredItem = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove' || e.type === 'mouseout') {
      const previous = this._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(opts.onLeave, [e, previous, this], this);
      }
      this._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(opts.onHover, [e, hoveredItem, this], this);
      }
    } else if (hoveredItem) {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(opts.onClick, [e, hoveredItem, this], this);
    }
  }
}
function isListened(type, opts) {
  if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({ctx: chart.ctx, options, chart});
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (ctx) => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {labels: {usePointStyle, pointStyle, textAlign, color}} = chart.legend.options;
        return chart._getSortedDatasetMetas().map((meta) => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: 0,
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: (ctx) => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: '',
    }
  },
  descriptors: {
    _scriptable: (name) => !name.startsWith('on'),
    labels: {
      _scriptable: (name) => !['generateLabels', 'filter', 'sort'].includes(name),
    }
  },
};

class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight) {
    const opts = this.options;
    this.left = 0;
    this.top = 0;
    if (!opts.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = maxWidth;
    this.height = this.bottom = maxHeight;
    const lineCount = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(opts.text) ? opts.text.length : 1;
    this._padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(opts.padding);
    const textSize = lineCount * (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(opts.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = textSize;
    } else {
      this.width = textSize;
    }
  }
  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  _drawArgs(offset) {
    const {top, left, bottom, right, options} = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, bottom, top);
        rotation = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P * -0.5;
      } else {
        titleX = right - offset;
        titleY = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(align, top, bottom);
        rotation = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {titleX, titleY, maxWidth, rotation};
  }
  draw() {
    const ctx = this.ctx;
    const opts = this.options;
    if (!opts.display) {
      return;
    }
    const fontOpts = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + this._padding.top;
    const {titleX, titleY, maxWidth, rotation} = this._drawArgs(offset);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.R)(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
}
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold',
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal',
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aG)(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const {element, datasetIndex, index} = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {label, value} = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip.chart.ctx;
  const {body, footer, title} = tooltip;
  const {boxWidth, boxHeight} = options;
  const bodyFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.bodyFont);
  const titleFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.titleFont);
  const footerFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight
			+ (titleLineCount - 1) * options.titleSpacing
			+ options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight
			+ (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight
			+ (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop
			+ footerLineCount * footerFont.lineHeight
			+ (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? (boxWidth + 2 + options.boxPadding) : 0;
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(body, (bodyItem) => {
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(bodyItem.before, maxLineWidth);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(bodyItem.lines, maxLineWidth);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {width, height};
}
function determineYAlign(chart, size) {
  const {y, height} = size;
  if (y < height / 2) {
    return 'top';
  } else if (y > (chart.height - height / 2)) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {x, width} = size;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const {x, width} = size;
  const {width: chartWidth, chartArea: {left, right}} = chart;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let {x, width} = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= (width / 2);
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let {y, height} = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= (height / 2);
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const {caretSize, caretPadding, cornerRadius} = options;
  const {xAlign, yAlign} = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(cornerRadius);
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(x, 0, chart.width - size.width),
    y: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(options.padding);
  return align === 'center'
    ? tooltip.x + tooltip.width / 2
    : align === 'right'
      ? tooltip.x + tooltip.width - padding.right
      : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
class Tooltip extends Element {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.chart = config.chart || config._chart;
    this._chart = this.chart;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }
  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }
  _resolveAnimations() {
    const cached = this._cachedAnimations;
    if (cached) {
      return cached;
    }
    const chart = this.chart;
    const options = this.options.setContext(this.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(this.chart, opts);
    if (opts._cacheable) {
      this._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  }
  getContext() {
    return this.$context ||
			(this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(context, options) {
    const {callbacks} = options;
    const beforeTitle = callbacks.beforeTitle.apply(this, [context]);
    const title = callbacks.title.apply(this, [context]);
    const afterTitle = callbacks.afterTitle.apply(this, [context]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
  }
  getBody(tooltipItems, options) {
    const {callbacks} = options;
    const bodyItems = [];
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(tooltipItems, (context) => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
      pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
      pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
  }
  getFooter(tooltipItems, options) {
    const {callbacks} = options;
    const beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
    const footer = callbacks.footer.apply(this, [tooltipItems]);
    const afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems(options) {
    const active = this._active;
    const data = this.chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(this.chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(tooltipItems, (context) => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(scoped.labelColor.call(this, context));
      labelPointStyles.push(scoped.labelPointStyle.call(this, context));
      labelTextColors.push(scoped.labelTextColor.call(this, context));
    });
    this.labelColors = labelColors;
    this.labelPointStyles = labelPointStyles;
    this.labelTextColors = labelTextColors;
    this.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed, replay) {
    const options = this.options.setContext(this.getContext());
    const active = this._active;
    let properties;
    let tooltipItems = [];
    if (!active.length) {
      if (this.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(this, active, this._eventPosition);
      tooltipItems = this._createItems(options);
      this.title = this.getTitle(tooltipItems, options);
      this.beforeBody = this.getBeforeBody(tooltipItems, options);
      this.body = this.getBody(tooltipItems, options);
      this.afterBody = this.getAfterBody(tooltipItems, options);
      this.footer = this.getFooter(tooltipItems, options);
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(this.chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
      this.xAlign = alignment.xAlign;
      this.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    this._tooltipItems = tooltipItems;
    this.$context = undefined;
    if (properties) {
      this._resolveAnimations().update(this, properties);
    }
    if (changed && options.external) {
      options.external.call(this, {chart: this.chart, tooltip: this, replay});
    }
  }
  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size, options) {
    const {xAlign, yAlign} = this;
    const {caretSize, cornerRadius} = options;
    const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(cornerRadius);
    const {x: ptX, y: ptY} = tooltipPoint;
    const {width, height} = size;
    let x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + (height / 2);
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + Math.max(topLeft, bottomLeft) + (caretSize);
      } else if (xAlign === 'right') {
        x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {x1, x2, x3, y1, y2, y3};
  }
  drawTitle(pt, ctx, options) {
    const title = this.title;
    const length = title.length;
    let titleFont, titleSpacing, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const labelColors = this.labelColors[i];
    const labelPointStyle = this.labelPointStyles[i];
    const {boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.bodyFont);
    const colorX = getAlignedX(this, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.fillStyle = labelColors.backgroundColor;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : (labelColors.borderWidth || 1);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.setLineDash(labelColors.borderDash || []);
      ctx.lineDashOffset = labelColors.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
      const borderRadius = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(labelColors.borderRadius);
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av)(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius,
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.beginPath();
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av)(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius,
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = this.labelTextColors[i];
  }
  drawBody(pt, ctx, options) {
    const {body} = this;
    const {bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(options.rtl, this.x, this.width);
    const fillLineOfText = function(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(this, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right'
      ? bodyAlign === 'center' ? (boxWidth / 2 + boxPadding) : (boxWidth + 2 + boxPadding)
      : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = this.labelTextColors[i];
      ctx.fillStyle = textColor;
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        this._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(this.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx, options) {
    const footer = this.footer;
    const length = footer.length;
    let footerFont, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize, options) {
    const {xAlign, yAlign} = this;
    const {x, y} = pt;
    const {width, height} = tooltipSize;
    const {topLeft, topRight, bottomLeft, bottomRight} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(options.cornerRadius);
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + topLeft, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - topRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - bottomRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + bottomLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + topLeft);
    ctx.quadraticCurveTo(x, y, x + topLeft, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget(options) {
    const chart = this.chart;
    const anims = this.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;
    if (animX || animY) {
      const position = positioners[options.position].call(this, this._active, this._eventPosition);
      if (!position) {
        return;
      }
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, this._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        this.width = size.width;
        this.height = size.height;
        this.caretX = position.x;
        this.caretY = position.y;
        this._resolveAnimations().update(this, point);
      }
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(ctx) {
    const options = this.options.setContext(this.getContext());
    let opacity = this.opacity;
    if (!opacity) {
      return;
    }
    this._updateAnimationTarget(options);
    const tooltipSize = {
      width: this.width,
      height: this.height
    };
    const pt = {
      x: this.x,
      y: this.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(options.padding);
    const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawBackground(pt, ctx, tooltipSize, options);
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aB)(ctx, options.textDirection);
      pt.y += padding.top;
      this.drawTitle(pt, ctx, options);
      this.drawBody(pt, ctx, options);
      this.drawFooter(pt, ctx, options);
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aD)(ctx, options.textDirection);
      ctx.restore();
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements, eventPosition) {
    const lastActive = this._active;
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this.chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ai)(lastActive, active);
    const positionChanged = this._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      this._active = active;
      this._eventPosition = eventPosition;
      this._ignoreReplayEvents = true;
      this.update(true);
    }
  }
  handleEvent(e, replay, inChartArea = true) {
    if (replay && this._ignoreReplayEvents) {
      return false;
    }
    this._ignoreReplayEvents = false;
    const options = this.options;
    const lastActive = this._active || [];
    const active = this._getActiveElements(e, lastActive, replay, inChartArea);
    const positionChanged = this._positionChanged(active, e);
    const changed = replay || !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ai)(active, lastActive) || positionChanged;
    if (changed) {
      this._active = active;
      if (options.enabled || options.external) {
        this._eventPosition = {
          x: e.x,
          y: e.y
        };
        this.update(true, replay);
      }
    }
    return changed;
  }
  _getActiveElements(e, lastActive, replay, inChartArea) {
    const options = this.options;
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
    if (options.reverse) {
      active.reverse();
    }
    return active;
  }
  _positionChanged(active, e) {
    const {caretX, caretY, options} = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }
}
Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({chart, options});
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    if (tooltip && tooltip._willRender()) {
      const args = {
        tooltip
      };
      if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
        return;
      }
      tooltip.draw(chart.ctx);
      chart.notifyPlugins('afterTooltipDraw', args);
    }
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold',
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {
    },
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold',
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart',
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      title(tooltipItems) {
        if (tooltipItems.length > 0) {
          const item = tooltipItems[0];
          const labels = item.chart.data.labels;
          const labelCount = labels ? labels.length : 0;
          if (this && this.options && this.options.mode === 'dataset') {
            return item.dataset.label || '';
          } else if (item.label) {
            return item.label;
          } else if (labelCount > 0 && item.dataIndex < labelCount) {
            return labels[item.dataIndex];
          }
        }
        return '';
      },
      afterTitle: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      beforeBody: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      beforeLabel: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      label(tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
          return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
          label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
          label += value;
        }
        return label;
      },
      labelColor(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          borderColor: options.borderColor,
          backgroundColor: options.backgroundColor,
          borderWidth: options.borderWidth,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          pointStyle: options.pointStyle,
          rotation: options.rotation,
        };
      },
      afterLabel: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      afterBody: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      beforeFooter: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      footer: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF,
      afterFooter: _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF
    }
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: (name) => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false,
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Decimation: plugin_decimation,
Filler: index,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index, addedLabels) => {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({index, label: raw});
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = (index, max) => index === null ? null : (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(Math.round(index), 0, max);
class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(scaleOptions) {
    const added = this._addedLabels;
    if (added.length) {
      const labels = this.getLabels();
      for (const {index, label} of added) {
        if (labels[index] === label) {
          labels.splice(index, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(scaleOptions);
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index
      : findOrAddLabel(labels, raw, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(index, raw), this._addedLabels);
    return validIndex(index, labels.length - 1);
  }
  determineDataLimits() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this.getMinMax(true);
    if (this.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = this.getLabels().length - 1;
      }
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const min = this.min;
    const max = this.max;
    const offset = this.options.offset;
    const ticks = [];
    let labels = this.getLabels();
    labels = (min === 0 && max === labels.length - 1) ? labels : labels.slice(min, max + 1);
    this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    this._startValue = this.min - (offset ? 0.5 : 0);
    for (let value = min; value <= max; value++) {
      ticks.push({value});
    }
    return ticks;
  }
  getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(value) {
    if (typeof value !== 'number') {
      value = this.parse(value);
    }
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: CategoryScale.prototype.getLabelForValue
  }
};

function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds} = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {min: rmin, max: rmax} = dataRange;
  const minDefined = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(min);
  const maxDefined = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(max);
  const countDefined = !(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aI)((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{value: rmin}, {value: rmax}];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aI)(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aJ)((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aK)(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max(
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aL)(spacing),
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aL)(niceMin)
  );
  factor = Math.pow(10, (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({value: min});
      if (niceMin < min) {
        j++;
      }
      if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aK)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    ticks.push({value: Math.round((niceMin + j * spacing) * factor) / factor});
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aK)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({value: max});
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({value: niceMax});
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, {horizontal, minRotation}) {
  const rad = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    const {beginAtZero} = this.options;
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    if (beginAtZero) {
      const minSign = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(min);
      const maxSign = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      let offset = 1;
      if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
        offset = Math.abs(max * 0.05);
      }
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    this.min = min;
    this.max = max;
  }
  getTickLimit() {
    const tickOpts = this.options.ticks;
    let {maxTicksLimit, stepSize} = tickOpts;
    let maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
      if (maxTicks > 1000) {
        console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
        maxTicks = 1000;
      }
    } else {
      maxTicks = this.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const opts = this.options;
    const tickOpts = opts.ticks;
    let maxTicks = this.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = this._range || this;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aH)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  configure() {
    const ticks = this.ticks;
    let start = this.min;
    let end = this.max;
    super.configure();
    if (this.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    this._startValue = start;
    this._endValue = end;
    this._valueRange = end - start;
  }
  getLabelForValue(value) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
}

class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? max : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const horizontal = this.isHorizontal();
    const length = horizontal ? this.width : this.height;
    const minRotation = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    const tickFont = this._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }
  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
}
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};

function isMajor(tickVal) {
  const remain = tickVal / (Math.pow(10, Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(tickVal))));
  return remain === 1;
}
function generateTicks(generationOptions, dataRange) {
  const endExp = Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(dataRange.max));
  const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  const ticks = [];
  let tickVal = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(generationOptions.min, Math.pow(10, Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(dataRange.min))));
  let exp = Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(tickVal));
  let significand = Math.floor(tickVal / Math.pow(10, exp));
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  do {
    ticks.push({value: tickVal, major: isMajor(tickVal)});
    ++significand;
    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }
    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || (exp === endExp && significand < endSignificand));
  const lastTick = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B)(generationOptions.max, tickVal);
  ticks.push({value: lastTick, major: isMajor(tickVal)});
  return ticks;
}
class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(value) && value > 0 ? value : null;
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? Math.max(0, min) : null;
    this.max = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? Math.max(0, max) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let min = this.min;
    let max = this.max;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    const exp = (v, m) => Math.pow(10, Math.floor((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(v)) + m);
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(exp(min, -1));
        setMax(exp(max, +1));
      }
    }
    if (min <= 0) {
      setMin(exp(max, -1));
    }
    if (max <= 0) {
      setMax(exp(min, +1));
    }
    if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
      setMin(exp(min, -1));
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const opts = this.options;
    const generationOptions = {
      min: this._userMin,
      max: this._userMax
    };
    const ticks = generateTicks(generationOptions, this);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aH)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined
      ? '0'
      : (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const start = this.min;
    super.configure();
    this._startValue = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(start);
    this._valueRange = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(this.max) - (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(start);
  }
  getPixelForValue(value) {
    if (value === undefined || value === 0) {
      value = this.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return this.getPixelForDecimal(value === this.min
      ? 0
      : ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z)(value) - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    const decimal = this.getDecimalForPixel(pixel);
    return Math.pow(10, this._startValue + decimal * this._valueRange);
  }
}
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: Ticks.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};

function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(tickOpts.backdropPadding);
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.d.font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label : [label];
  return {
    w: (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aM)(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - (size / 2),
      end: pos + (size / 2)
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const orig = {
    l: scale.left + scale._padding.left,
    r: scale.right - scale._padding.right,
    t: scale.top + scale._padding.top,
    b: scale.bottom - scale._padding.bottom
  };
  const limits = Object.assign({}, orig);
  const labelSizes = [];
  const padding = [];
  const valueCount = scale._pointLabels.length;
  const pointLabelOpts = scale.options.pointLabels;
  const additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
    const plFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az)(scale.getIndexAngle(i) + additionalAngle);
    const angle = Math.round((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.F)(angleRadians));
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    updateLimits(limits, orig, angleRadians, hLimits, vLimits);
  }
  scale.setCenterPoint(
    orig.l - limits.l,
    limits.r - orig.r,
    orig.t - limits.t,
    limits.b - orig.b
  );
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
  const sin = Math.abs(Math.sin(angle));
  const cos = Math.abs(Math.cos(angle));
  let x = 0;
  let y = 0;
  if (hLimits.start < orig.l) {
    x = (orig.l - hLimits.start) / sin;
    limits.l = Math.min(limits.l, orig.l - x);
  } else if (hLimits.end > orig.r) {
    x = (hLimits.end - orig.r) / sin;
    limits.r = Math.max(limits.r, orig.r + x);
  }
  if (vLimits.start < orig.t) {
    y = (orig.t - vLimits.start) / cos;
    limits.t = Math.min(limits.t, orig.t - y);
  } else if (vLimits.end > orig.b) {
    y = (vLimits.end - orig.b) / cos;
    limits.b = Math.max(limits.b, orig.b + y);
  }
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale._pointLabels.length;
  const opts = scale.options;
  const extra = getTickBackdropHeight(opts) / 2;
  const outerDistance = scale.drawingArea;
  const additionalAngle = opts.pointLabels.centerPointLabels ? _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
    const angle = Math.round((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.F)((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az)(pointLabelPosition.angle + _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H)));
    const size = labelSizes[i];
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    items.push({
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    });
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= (w / 2);
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= (h / 2);
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabels(scale, labelCount) {
  const {ctx, options: {pointLabels}} = scale;
  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    const plFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(optsAtIndex.font);
    const {x, y, textAlign, left, top, right, bottom} = scale._pointLabelItems[i];
    const {backdropColor} = optsAtIndex;
    if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(backdropColor)) {
      const borderRadius = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax)(optsAtIndex.borderRadius);
      const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      const backdropLeft = left - padding.left;
      const backdropTop = top - padding.top;
      const backdropWidth = right - left + padding.width;
      const backdropHeight = bottom - top + padding.height;
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av)(ctx, {
          x: backdropLeft,
          y: backdropTop,
          w: backdropWidth,
          h: backdropHeight,
          radius: borderRadius,
        });
        ctx.fill();
      } else {
        ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
      }
    }
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(
      ctx,
      scale._pointLabels[i],
      x,
      y + (plFont.lineHeight / 2),
      plFont,
      {
        color: optsAtIndex.color,
        textAlign: textAlign,
        textBaseline: 'middle'
      }
    );
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const {ctx} = scale;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {color, lineWidth} = gridLineOpts;
  if ((!circular && !labelCount) || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(gridLineOpts.borderDash);
  ctx.lineDashOffset = gridLineOpts.borderDashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function createPointLabelContext(parent, index, label) {
  return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(parent, {
    label,
    index,
    type: 'pointLabel'
  });
}
class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const padding = this._padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(getTickBackdropHeight(this.options) / 2);
    const w = this.width = this.maxWidth - padding.width;
    const h = this.height = this.maxHeight - padding.height;
    this.xCenter = Math.floor(this.left + w / 2 + padding.left);
    this.yCenter = Math.floor(this.top + h / 2 + padding.top);
    this.drawingArea = Math.floor(Math.min(w, h) / 2);
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(false);
    this.min = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
    this._pointLabels = this.getLabels()
      .map((value, index) => {
        const label = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(this.options.pointLabels.callback, [value, index], this);
        return label || label === 0 ? label : '';
      })
      .filter((v, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const opts = this.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
    this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
  }
  getIndexAngle(index) {
    const angleMultiplier = _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T / (this._pointLabels.length || 1);
    const startAngle = this.options.startAngle || 0;
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az)(index * angleMultiplier + (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
      return NaN;
    }
    const scalingFactor = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - value) * scalingFactor;
    }
    return (value - this.min) * scalingFactor;
  }
  getValueForDistanceFromCenter(distance) {
    if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(distance)) {
      return NaN;
    }
    const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
  }
  getPointLabelContext(index) {
    const pointLabels = this._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      const pointLabel = pointLabels[index];
      return createPointLabelContext(this.getContext(), index, pointLabel);
    }
  }
  getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
    const angle = this.getIndexAngle(index) - _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H + additionalAngle;
    return {
      x: Math.cos(angle) * distanceFromCenter + this.xCenter,
      y: Math.sin(angle) * distanceFromCenter + this.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  getPointLabelPosition(index) {
    const {left, top, right, bottom} = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom,
    };
  }
  drawBackground() {
    const {backgroundColor, grid: {circular}} = this.options;
    if (backgroundColor) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }
  drawGrid() {
    const ctx = this.ctx;
    const opts = this.options;
    const {angleLines, grid} = opts;
    const labelCount = this._pointLabels.length;
    let i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(this, labelCount);
    }
    if (grid.display) {
      this.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = this.getDistanceFromCenterForValue(tick.value);
          const optsAtIndex = grid.setContext(this.getContext(index - 1));
          drawRadiusLine(this, optsAtIndex, offset, labelCount);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = labelCount - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
        const {color, lineWidth} = optsAtIndex;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
        position = this.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(this.xCenter, this.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const ctx = this.ctx;
    const opts = this.options;
    const tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    const startAngle = this.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      const optsAtIndex = tickOpts.setContext(this.getContext(index));
      const tickFont = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O)(optsAtIndex.font);
      offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(optsAtIndex.backdropPadding);
        ctx.fillRect(
          -width / 2 - padding.left,
          -offset - tickFont.size / 2 - padding.top,
          width + padding.width,
          tickFont.size + padding.height
        );
      }
      (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M)(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
      });
    });
    ctx.restore();
  }
  drawTitle() {}
}
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(label) {
      return label;
    },
    padding: 5,
    centerPointLabels: false
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};

const INTERVALS = {
  millisecond: {common: true, size: 1, steps: 1000},
  second: {common: true, size: 1000, steps: 60},
  minute: {common: true, size: 60000, steps: 60},
  hour: {common: true, size: 3600000, steps: 24},
  day: {common: true, size: 86400000, steps: 30},
  week: {common: false, size: 604800000, steps: 4},
  month: {common: true, size: 2.628e9, steps: 12},
  quarter: {common: false, size: 7.884e9, steps: 4},
  year: {common: true, size: 3.154e10}
};
const UNITS = (Object.keys(INTERVALS));
function sorter(a, b) {
  return a - b;
}
function parse(scale, input) {
  if ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const {parser, round, isoWeekday} = scale._parseOpts;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!(0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
    value = typeof parser === 'string'
      ? adapter.parse(value, parser)
      : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && ((0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(isoWeekday) || isoWeekday === true)
      ? adapter.startOf(value, 'isoWeek', isoWeekday)
      : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {lo, hi} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aO)(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(scaleOpts, opts) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    adapter.init(opts);
    (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ac)(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }
  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return parse(this, raw);
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const options = this.options;
    const adapter = this._adapter;
    const unit = options.time.unit || 'day';
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(this._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(this.getMinMax(false));
      }
    }
    min = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    this.min = Math.min(min, max - 1);
    this.max = Math.max(min + 1, max);
  }
  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {min, max};
  }
  buildTicks() {
    const options = this.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      this.min = this._userMin || timestamps[0];
      this.max = this._userMax || timestamps[timestamps.length - 1];
    }
    const min = this.min;
    const max = this.max;
    const ticks = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aN)(timestamps, min, max);
    this._unit = timeOpts.unit || (tickOpts.autoSkip
      ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min))
      : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
    this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined
      : determineMajorUnit(this._unit);
    this.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(this, ticks, this._majorUnit);
  }
  afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(tick => +tick.value));
    }
  }
  initOffsets(timestamps) {
    let start = 0;
    let end = 0;
    let first, last;
    if (this.options.offset && timestamps.length) {
      first = this.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(start, 0, limit);
    end = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E)(end, 0, limit);
    this._offsets = {start, end, factor: 1 / (start + 1 + end)};
  }
  _generate() {
    const adapter = this._adapter;
    const min = this.min;
    const max = this.max;
    const options = this.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
    const stepSize = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(timeOpts.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x)(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort((a, b) => a - b).map(x => +x);
  }
  getLabelForValue(value) {
    const adapter = this._adapter;
    const timeOpts = this.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  _tickFormatFunction(time, index, ticks, format) {
    const options = this.options;
    const formats = options.time.displayFormats;
    const unit = this._unit;
    const majorUnit = this._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;
    const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    const formatter = options.ticks.callback;
    return formatter ? (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C)(formatter, [label, index, ticks], this) : label;
  }
  generateTickLabels(ticks) {
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getDecimalForValue(value) {
    return value === null ? NaN : (value - this.min) / (this.max - this.min);
  }
  getPixelForValue(value) {
    const offsets = this._offsets;
    const pos = this.getDecimalForValue(value);
    return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return this.min + pos * (this.max - this.min);
  }
  _getLabelSize(label) {
    const ticksOpts = this.options.ticks;
    const tickLabelWidth = this.ctx.measureText(label).width;
    const angle = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);
    const tickFontSize = this._resolveTickFontOptions(0).size;
    return {
      w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
      h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
    };
  }
  _getLabelCapacity(exampleTime) {
    const timeOpts = this.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
    const size = this._getLabelSize(exampleLabel);
    const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
  getDataTimestamps() {
    let timestamps = this._cache.data || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const metas = this.getMatchingVisibleMetas();
    if (this._normalized && metas.length) {
      return (this._cache.data = metas[0].controller.getAllParsedValues(this));
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
    }
    return (this._cache.data = this.normalize(timestamps));
  }
  getLabelTimestamps() {
    const timestamps = this._cache.labels || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const labels = this.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(this, labels[i]));
    }
    return (this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps));
  }
  normalize(values) {
    return (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__._)(values.sort(sorter));
  }
}
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      ({lo, hi} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(table, 'pos', val));
    }
    ({pos: prevSource, time: prevTarget} = table[lo]);
    ({pos: nextSource, time: nextTarget} = table[hi]);
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      ({lo, hi} = (0,_chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(table, 'time', val));
    }
    ({time: prevSource, pos: prevTarget} = table[lo]);
    ({time: nextSource, pos: nextTarget} = table[hi]);
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
  constructor(props) {
    super(props);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const timestamps = this._getTimestampsForTable();
    const table = this._table = this.buildLookupTable(timestamps);
    this._minPos = interpolate(table, this.min);
    this._tableRange = interpolate(table, this.max) - this._minPos;
    super.initOffsets(timestamps);
  }
  buildLookupTable(timestamps) {
    const {min, max} = this;
    const items = [];
    const table = [];
    let i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [
        {time: min, pos: 0},
        {time: max, pos: 1}
      ];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({time: curr, pos: i / (ilen - 1)});
      }
    }
    return table;
  }
  _getTimestampsForTable() {
    let timestamps = this._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    const data = this.getDataTimestamps();
    const label = this.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = this.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = this._cache.all = timestamps;
    return timestamps;
  }
  getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
  }
}
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
  controllers,
  elements,
  plugins,
  scales,
];




/***/ }),

/***/ "./node_modules/chart.js/dist/chunks/helpers.segment.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/chart.js/dist/chunks/helpers.segment.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ _isPointInArea),
/* harmony export */   "A": () => (/* binding */ _factorize),
/* harmony export */   "B": () => (/* binding */ finiteOrDefault),
/* harmony export */   "C": () => (/* binding */ callback),
/* harmony export */   "D": () => (/* binding */ _addGrace),
/* harmony export */   "E": () => (/* binding */ _limitValue),
/* harmony export */   "F": () => (/* binding */ toDegrees),
/* harmony export */   "G": () => (/* binding */ _measureText),
/* harmony export */   "H": () => (/* binding */ HALF_PI),
/* harmony export */   "I": () => (/* binding */ _int16Range),
/* harmony export */   "J": () => (/* binding */ _alignPixel),
/* harmony export */   "K": () => (/* binding */ toPadding),
/* harmony export */   "L": () => (/* binding */ clipArea),
/* harmony export */   "M": () => (/* binding */ renderText),
/* harmony export */   "N": () => (/* binding */ unclipArea),
/* harmony export */   "O": () => (/* binding */ toFont),
/* harmony export */   "P": () => (/* binding */ PI),
/* harmony export */   "Q": () => (/* binding */ each),
/* harmony export */   "R": () => (/* binding */ _toLeftRightCenter),
/* harmony export */   "S": () => (/* binding */ _alignStartEnd),
/* harmony export */   "T": () => (/* binding */ TAU),
/* harmony export */   "U": () => (/* binding */ overrides),
/* harmony export */   "V": () => (/* binding */ merge),
/* harmony export */   "W": () => (/* binding */ _capitalize),
/* harmony export */   "X": () => (/* binding */ getRelativePosition),
/* harmony export */   "Y": () => (/* binding */ _rlookupByKey),
/* harmony export */   "Z": () => (/* binding */ _lookupByKey),
/* harmony export */   "_": () => (/* binding */ _arrayUnique),
/* harmony export */   "a": () => (/* binding */ resolve),
/* harmony export */   "a$": () => (/* binding */ toLineHeight),
/* harmony export */   "a0": () => (/* binding */ getAngleFromPoint),
/* harmony export */   "a1": () => (/* binding */ getMaximumSize),
/* harmony export */   "a2": () => (/* binding */ _getParentNode),
/* harmony export */   "a3": () => (/* binding */ readUsedSize),
/* harmony export */   "a4": () => (/* binding */ throttled),
/* harmony export */   "a5": () => (/* binding */ supportsEventListenerOptions),
/* harmony export */   "a6": () => (/* binding */ _isDomSupported),
/* harmony export */   "a7": () => (/* binding */ descriptors),
/* harmony export */   "a8": () => (/* binding */ isFunction),
/* harmony export */   "a9": () => (/* binding */ _attachContext),
/* harmony export */   "aA": () => (/* binding */ getRtlAdapter),
/* harmony export */   "aB": () => (/* binding */ overrideTextDirection),
/* harmony export */   "aC": () => (/* binding */ _textX),
/* harmony export */   "aD": () => (/* binding */ restoreTextDirection),
/* harmony export */   "aE": () => (/* binding */ drawPointLegend),
/* harmony export */   "aF": () => (/* binding */ noop),
/* harmony export */   "aG": () => (/* binding */ distanceBetweenPoints),
/* harmony export */   "aH": () => (/* binding */ _setMinAndMaxByKey),
/* harmony export */   "aI": () => (/* binding */ niceNum),
/* harmony export */   "aJ": () => (/* binding */ almostWhole),
/* harmony export */   "aK": () => (/* binding */ almostEquals),
/* harmony export */   "aL": () => (/* binding */ _decimalPlaces),
/* harmony export */   "aM": () => (/* binding */ _longestText),
/* harmony export */   "aN": () => (/* binding */ _filterBetween),
/* harmony export */   "aO": () => (/* binding */ _lookup),
/* harmony export */   "aP": () => (/* binding */ isPatternOrGradient),
/* harmony export */   "aQ": () => (/* binding */ getHoverColor),
/* harmony export */   "aR": () => (/* binding */ clone$1),
/* harmony export */   "aS": () => (/* binding */ _merger),
/* harmony export */   "aT": () => (/* binding */ _mergerIf),
/* harmony export */   "aU": () => (/* binding */ _deprecated),
/* harmony export */   "aV": () => (/* binding */ _splitKey),
/* harmony export */   "aW": () => (/* binding */ toFontString),
/* harmony export */   "aX": () => (/* binding */ splineCurve),
/* harmony export */   "aY": () => (/* binding */ splineCurveMonotone),
/* harmony export */   "aZ": () => (/* binding */ getStyle),
/* harmony export */   "a_": () => (/* binding */ fontString),
/* harmony export */   "aa": () => (/* binding */ _createResolver),
/* harmony export */   "ab": () => (/* binding */ _descriptors),
/* harmony export */   "ac": () => (/* binding */ mergeIf),
/* harmony export */   "ad": () => (/* binding */ uid),
/* harmony export */   "ae": () => (/* binding */ debounce),
/* harmony export */   "af": () => (/* binding */ retinaScale),
/* harmony export */   "ag": () => (/* binding */ clearCanvas),
/* harmony export */   "ah": () => (/* binding */ setsEqual),
/* harmony export */   "ai": () => (/* binding */ _elementsEqual),
/* harmony export */   "aj": () => (/* binding */ _isClickEvent),
/* harmony export */   "ak": () => (/* binding */ _isBetween),
/* harmony export */   "al": () => (/* binding */ _readValueToProps),
/* harmony export */   "am": () => (/* binding */ _updateBezierControlPoints),
/* harmony export */   "an": () => (/* binding */ _computeSegments),
/* harmony export */   "ao": () => (/* binding */ _boundSegments),
/* harmony export */   "ap": () => (/* binding */ _steppedInterpolation),
/* harmony export */   "aq": () => (/* binding */ _bezierInterpolation),
/* harmony export */   "ar": () => (/* binding */ _pointInLine),
/* harmony export */   "as": () => (/* binding */ _steppedLineTo),
/* harmony export */   "at": () => (/* binding */ _bezierCurveTo),
/* harmony export */   "au": () => (/* binding */ drawPoint),
/* harmony export */   "av": () => (/* binding */ addRoundedRectPath),
/* harmony export */   "aw": () => (/* binding */ toTRBL),
/* harmony export */   "ax": () => (/* binding */ toTRBLCorners),
/* harmony export */   "ay": () => (/* binding */ _boundSegment),
/* harmony export */   "az": () => (/* binding */ _normalizeAngle),
/* harmony export */   "b": () => (/* binding */ isArray),
/* harmony export */   "b0": () => (/* binding */ PITAU),
/* harmony export */   "b1": () => (/* binding */ INFINITY),
/* harmony export */   "b2": () => (/* binding */ RAD_PER_DEG),
/* harmony export */   "b3": () => (/* binding */ QUARTER_PI),
/* harmony export */   "b4": () => (/* binding */ TWO_THIRDS_PI),
/* harmony export */   "b5": () => (/* binding */ _angleDiff),
/* harmony export */   "c": () => (/* binding */ color),
/* harmony export */   "d": () => (/* binding */ defaults),
/* harmony export */   "e": () => (/* binding */ effects),
/* harmony export */   "f": () => (/* binding */ resolveObjectKey),
/* harmony export */   "g": () => (/* binding */ isNumberFinite),
/* harmony export */   "h": () => (/* binding */ createContext),
/* harmony export */   "i": () => (/* binding */ isObject),
/* harmony export */   "j": () => (/* binding */ defined),
/* harmony export */   "k": () => (/* binding */ isNullOrUndef),
/* harmony export */   "l": () => (/* binding */ listenArrayEvents),
/* harmony export */   "m": () => (/* binding */ toPercentage),
/* harmony export */   "n": () => (/* binding */ toDimension),
/* harmony export */   "o": () => (/* binding */ formatNumber),
/* harmony export */   "p": () => (/* binding */ _angleBetween),
/* harmony export */   "q": () => (/* binding */ _getStartAndCountOfVisiblePoints),
/* harmony export */   "r": () => (/* binding */ requestAnimFrame),
/* harmony export */   "s": () => (/* binding */ sign),
/* harmony export */   "t": () => (/* binding */ toRadians),
/* harmony export */   "u": () => (/* binding */ unlistenArrayEvents),
/* harmony export */   "v": () => (/* binding */ valueOrDefault),
/* harmony export */   "w": () => (/* binding */ _scaleRangesChanged),
/* harmony export */   "x": () => (/* binding */ isNumber),
/* harmony export */   "y": () => (/* binding */ _parseObjectDataRadialScale),
/* harmony export */   "z": () => (/* binding */ log10)
/* harmony export */ });
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
function noop() {}
const uid = (function() {
  let id = 0;
  return function() {
    return id++;
  };
}());
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
const isNumberFinite = (value) => (typeof value === 'number' || value instanceof Number) && isFinite(+value);
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100
    : value / dimension;
const toDimension = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100 * dimension
    : +value;
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
function clone$1(source) {
  if (isArray(source)) {
    return source.map(clone$1);
  }
  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone$1(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    merge(tval, sval, options);
  } else {
    target[key] = clone$1(sval);
  }
}
function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  const merger = options.merger || _merger;
  for (let i = 0; i < ilen; ++i) {
    source = sources[i];
    if (!isObject(source)) {
      continue;
    }
    const keys = Object.keys(source);
    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, source, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  return merge(target, source, {merger: _mergerIf});
}
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone$1(sval);
  }
}
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous +
			'" is deprecated. Please use "' + current + '" instead');
  }
}
const keyResolvers = {
  '': v => v,
  x: o => o.x,
  y: o => o.y
};
function resolveObjectKey(obj, key) {
  const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
  return resolver(obj);
}
function _getKeyResolver(key) {
  const keys = _splitKey(key);
  return obj => {
    for (const k of keys) {
      if (k === '') {
        break;
      }
      obj = obj && obj[k];
    }
    return obj;
  };
}
function _splitKey(key) {
  const parts = key.split('.');
  const keys = [];
  let tmp = '';
  for (const part of parts) {
    tmp += part;
    if (tmp.endsWith('\\')) {
      tmp = tmp.slice(0, -1) + '.';
    } else {
      keys.push(tmp);
      tmp = '';
    }
  }
  return keys;
}
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value) => typeof value !== 'undefined';
const isFunction = (value) => typeof value === 'function';
const setsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
};
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function niceNum(range) {
  const roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort((a, b) => a - b).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
}
function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  let e = 1;
  let p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < (-0.5 * PI)) {
    angle += TAU;
  }
  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);
  const s = _normalizeAngle(start);
  const e = _normalizeAngle(end);
  const angleToStart = _normalizeAngle(s - a);
  const angleToEnd = _normalizeAngle(e - a);
  const startToAngle = _normalizeAngle(a - s);
  const endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || (sameAngleIsFullCircle && s === e)
    || (angleToStart > angleToEnd && startToAngle < endToAngle);
}
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
function _isBetween(value, start, end, epsilon = 1e-6) {
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}

function _lookup(table, value, cmp) {
  cmp = cmp || ((index) => table[index] < value);
  let hi = table.length - 1;
  let lo = 0;
  let mid;
  while (hi - lo > 1) {
    mid = (lo + hi) >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {lo, hi};
}
const _lookupByKey = (table, key, value, last) =>
  _lookup(table, value, last
    ? index => table[index][key] <= value
    : index => table[index][key] < value);
const _rlookupByKey = (table, key, value) =>
  _lookup(table, value, index => table[index][key] >= value);
function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length
    ? values.slice(start, end)
    : values;
}
const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach((key) => {
    const method = '_onData' + _capitalize(key);
    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value(...args) {
        const res = base.apply(this, args);
        array._chartjs.listeners.forEach((object) => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;
  if (!stub) {
    return;
  }
  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach((key) => {
    delete array[key];
  });
  delete array._chartjs;
}
function _arrayUnique(items) {
  const set = new Set();
  let i, ilen;
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }
  if (set.size === ilen) {
    return items;
  }
  return Array.from(set);
}

function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
const requestAnimFrame = (function() {
  if (typeof window === 'undefined') {
    return function(callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}());
function throttled(fn, thisArg, updateFn) {
  const updateArgs = updateFn || ((args) => Array.prototype.slice.call(args));
  let ticking = false;
  let args = [];
  return function(...rest) {
    args = updateArgs(rest);
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
const _toLeftRightCenter = (align) => align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
const _alignStartEnd = (align, start, end) => align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
const _textX = (align, left, right, rtl) => {
  const check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const {iScale, _parsed} = meta;
    const axis = iScale.axis;
    const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(Math.min(
        _lookupByKey(_parsed, iScale.axis, min).lo,
        animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo),
      0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
        _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
        animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1),
      start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {start, count};
}
function _scaleRangesChanged(meta) {
  const {xScale, yScale, _scaleRanges} = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min
		|| _scaleRanges.xmax !== xScale.max
		|| _scaleRanges.ymin !== yScale.min
		|| _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}

const atEdge = (t) => t === 0 || t === 1;
const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
const effects = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t
    : -0.5 * ((--t) * (t - 2) - 1),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t
    : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t
    : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t * t
    : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: t => -Math.cos(t * HALF_PI) + 1,
  easeOutSine: t => Math.sin(t * HALF_PI),
  easeInOutSine: t => -0.5 * (Math.cos(PI * t) - 1),
  easeInExpo: t => (t === 0) ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: t => atEdge(t) ? t : t < 0.5
    ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
    : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: t => (t >= 1) ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => ((t /= 0.5) < 1)
    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: t => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
  easeOutElastic: t => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t :
      t < 0.5
        ? 0.5 * elasticIn(t * 2, s, p)
        : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    let s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
  },
  easeInBounce: t => 1 - effects.easeOutBounce(1 - t),
  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;
    if (t < (1 / d)) {
      return m * t * t;
    }
    if (t < (2 / d)) {
      return m * (t -= (1.5 / d)) * t + 0.75;
    }
    if (t < (2.5 / d)) {
      return m * (t -= (2.25 / d)) * t + 0.9375;
    }
    return m * (t -= (2.625 / d)) * t + 0.984375;
  },
  easeInOutBounce: t => (t < 0.5)
    ? effects.easeInBounce(t * 2) * 0.5
    : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
};

/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function round(v) {
  return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
const map$1 = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
const hex = [...'0123456789ABCDEF'];
const h1 = b => hex[b & 0xF];
const h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = b => ((b & 0xF0) >> 4) === (b & 0xF);
const isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? (map$1[str[7]] << 4 | map$1[str[8]]) : 255
      };
    }
  }
  return ret;
}
const alpha = (a, f) => a < 255 ? f(a) : '';
function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v
    ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f)
    : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return ((g - b) / d) + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (
    Array.isArray(a)
      ? f(a[0], a[1], a[2])
      : f(a, b, c)
  ).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function hslString(v) {
  if (!v) {
    return;
  }
  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255
    ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`
    : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  const unpacked = {};
  const keys = Object.keys(names$1);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
let names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    const v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgbString(v) {
  return v && (
    v.a < 255
      ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
      : `rgb(${v.r}, ${v.g}, ${v.b})`
  );
}
const to = v => v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
  const r = from(b2n(rgb1.r));
  const g = from(b2n(rgb1.g));
  const b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {r: 0, g: 0, b: 0, a: 255};
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {r: input[0], g: input[1], b: input[2], a: 255};
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {r: 0, g: 0, b: 0, a: 1});
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }
  rgbString() {
    return this._valid ? rgbString(this._rgb) : undefined;
  }
  hexString() {
    return this._valid ? hexString(this._rgb) : undefined;
  }
  hslString() {
    return this._valid ? hslString(this._rgb) : undefined;
  }
  mix(color, weight) {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2;
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  }
  interpolate(color, t) {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }
  clone() {
    return new Color(this.rgb);
  }
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }
  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }
  greyscale() {
    const rgb = this._rgb;
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }
  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }
  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}
function index_esm(input) {
  return new Color(input);
}

function isPatternOrGradient(value) {
  if (value && typeof value === 'object') {
    const type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }
  return false;
}
function color(value) {
  return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value)
    ? value
    : index_esm(value).saturate(0.5).darken(0.1).hexString();
}

const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
class Defaults {
  constructor(_descriptors) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = [
      'mousemove',
      'mouseout',
      'click',
      'touchstart',
      'touchmove'
    ];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
    this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
    this.hoverColor = (ctx, options) => getHoverColor(options.color);
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
  }
  set(scope, values) {
    return set(this, scope, values);
  }
  get(scope) {
    return getScope$1(this, scope);
  }
  describe(scope, values) {
    return set(descriptors, scope, values);
  }
  override(scope, values) {
    return set(overrides, scope, values);
  }
  route(scope, name, targetScope, targetName) {
    const scopeObject = getScope$1(this, scope);
    const targetScopeObject = getScope$1(this, targetScope);
    const privateName = '_' + name;
    Object.defineProperties(scopeObject, {
      [privateName]: {
        value: scopeObject[name],
        writable: true
      },
      [name]: {
        enumerable: true,
        get() {
          const local = this[privateName];
          const target = targetScopeObject[targetName];
          if (isObject(local)) {
            return Object.assign({}, target, local);
          }
          return valueOrDefault(local, target);
        },
        set(value) {
          this[privateName] = value;
        }
      }
    });
  }
}
var defaults = new Defaults({
  _scriptable: (name) => !name.startsWith('on'),
  _indexable: (name) => name !== 'events',
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false,
  }
});

function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}
function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  const gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  drawPointLegend(ctx, options, x, y, null);
}
function drawPointLegend(ctx, options, x, y, w) {
  let type, xOffset, yOffset, size, cornerRadius, width;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
  default:
    if (w) {
      ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
    } else {
      ctx.arc(x, y, radius, 0, TAU);
    }
    ctx.closePath();
    break;
  case 'triangle':
    ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    ctx.closePath();
    break;
  case 'rectRounded':
    cornerRadius = radius * 0.516;
    size = radius - cornerRadius;
    xOffset = Math.cos(rad + QUARTER_PI) * size;
    yOffset = Math.sin(rad + QUARTER_PI) * size;
    ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
    ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
    ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
    ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
    ctx.closePath();
    break;
  case 'rect':
    if (!rotation) {
      size = Math.SQRT1_2 * radius;
      width = w ? w / 2 : size;
      ctx.rect(x - width, y - size, 2 * width, 2 * size);
      break;
    }
    rad += QUARTER_PI;
  case 'rectRot':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + yOffset, y - xOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    ctx.closePath();
    break;
  case 'crossRot':
    rad += QUARTER_PI;
  case 'cross':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'star':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    rad += QUARTER_PI;
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'line':
    xOffset = w ? w / 2 : Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    break;
  case 'dash':
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
    break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5;
  return !area || (point && point.x > area.left - margin && point.x < area.right + margin &&
		point.y > area.top - margin && point.y < area.bottom + margin);
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(
    flip ? previous.cp1x : previous.cp2x,
    flip ? previous.cp1y : previous.cp2y,
    flip ? target.cp2x : target.cp1x,
    flip ? target.cp2y : target.cp1y,
    target.x,
    target.y);
}
function renderText(ctx, text, x, y, font, opts = {}) {
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += font.lineHeight;
  }
  ctx.restore();
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    const metrics = ctx.measureText(line);
    const left = x - metrics.actualBoundingBoxLeft;
    const right = x + metrics.actualBoundingBoxRight;
    const top = y - metrics.actualBoundingBoxAscent;
    const bottom = y + metrics.actualBoundingBoxDescent;
    const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function addRoundedRectPath(ctx, rect) {
  const {x, y, w, h, radius} = rect;
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
  ctx.lineTo(x, y + h - radius.bottomLeft);
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  ctx.lineTo(x + w, y + radius.topRight);
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  ctx.lineTo(x + radius.topLeft, y);
}

const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
  case 'px':
    return value;
  case '%':
    value /= 100;
    break;
  }
  return size * value;
}
const numberOrZero = v => +v || 0;
function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value)
    ? objProps
      ? prop => valueOrDefault(value[prop], value[props[prop]])
      : prop => value[prop]
    : () => value;
  for (const prop of keys) {
    ret[prop] = numberOrZero(read(prop));
  }
  return ret;
}
function toTRBL(value) {
  return _readValueToProps(value, {top: 'y', right: 'x', bottom: 'y', left: 'x'});
}
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  let style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = '';
  }
  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
function _addGrace(minmax, grace, beginAtZero) {
  const {min, max} = minmax;
  const change = toDimension(grace, (max - min) / 2);
  const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

function _createResolver(scopes, prefixes = [''], rootScopes = scopes, fallback, getTarget = () => scopes[0]) {
  if (!defined(fallback)) {
    fallback = _resolve('_fallback', scopes);
  }
  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: rootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: (scope) => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback),
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete target._keys;
      delete scopes[0][prop];
      return true;
    },
    get(target, prop) {
      return _cached(target, prop,
        () => _resolveWithPrefixes(prop, prefixes, scopes, target));
    },
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value;
      delete target._keys;
      return true;
    }
  });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
    override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete proxy[prop];
      return true;
    },
    get(target, prop, receiver) {
      return _cached(target, prop,
        () => _resolveWithContext(target, prop, receiver));
    },
    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys
        ? Reflect.has(proxy, prop) ? {enumerable: true, configurable: true} : undefined
        : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    set(target, prop, value) {
      proxy[prop] = value;
      delete target[prop];
      return true;
    }
  });
}
function _descriptors(proxy, defaults = {scriptable: true, indexable: true}) {
  const {_scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys} = proxy;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
    isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
  };
}
const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value) => isObject(value) && prop !== 'adapters' &&
  (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop)) {
    return target[prop];
  }
  const value = resolve();
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  let value = _proxy[prop];
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, value, target, receiver) {
  const {_proxy, _context, _subProxy, _stack} = target;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  value = value(_context, _subProxy || receiver);
  _stack.delete(prop);
  if (needsSubResolver(prop, value)) {
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  if (defined(_context.index) && isIndexable(prop)) {
    value = value[_context.index % value.length];
  } else if (isObject(value[0])) {
    const arr = value;
    const scopes = _proxy._scopes.filter(s => s !== arr);
    value = [];
    for (const item of arr) {
      const resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent) => key === true ? parent
  : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
  for (const parent of parentScopes) {
    const scope = getScope(key, parent);
    if (scope) {
      set.add(scope);
      const fallback = resolveFallback(scope._fallback, key, value);
      if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
        return fallback;
      }
    } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
      return null;
    }
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [...parentScopes, ...rootScopes];
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (defined(fallback) && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback,
    () => subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  const target = parent[prop];
  if (isArray(target) && isObject(value)) {
    return value;
  }
  return target;
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;
  for (const prefix of prefixes) {
    value = _resolve(readKey(prefix, prop), scopes);
    if (defined(value)) {
      return needsSubResolver(prop, value)
        ? createSubResolver(scopes, proxy, prop, value)
        : value;
    }
  }
}
function _resolve(key, scopes) {
  for (const scope of scopes) {
    if (!scope) {
      continue;
    }
    const value = scope[key];
    if (defined(value)) {
      return value;
    }
  }
}
function getKeysFromAllScopes(target) {
  let keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  const set = new Set();
  for (const scope of scopes) {
    for (const key of Object.keys(scope).filter(k => !k.startsWith('_'))) {
      set.add(key);
    }
  }
  return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
  const {iScale} = meta;
  const {key = 'r'} = this._parsing;
  const parsed = new Array(count);
  let i, ilen, index, item;
  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i + start;
    item = data[index];
    parsed[i] = {
      r: iScale.parse(resolveObjectKey(item, key), index)
    };
  }
  return parsed;
}

const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis) => indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01;
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}
function splineCurveMonotone(points, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i]
      : !pointAfter ? deltaK[i - 1]
      : (sign(deltaK[i - 1]) !== sign(deltaK[i])) ? 0
      : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;
  let inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;
  if (options.spanGaps) {
    points = points.filter((pt) => !pt.skip);
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(
        prev,
        point,
        points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen],
        options.tension
      );
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
function _getParentNode(domNode) {
  let parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
const getComputedStyle = (element) => window.getComputedStyle(element, null);
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
const positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';
  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
function getCanvasPosition(e, canvas) {
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const {offsetX, offsetY} = source;
  let box = false;
  let x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {x, y, box};
}
function getRelativePosition(evt, chart) {
  if ('native' in evt) {
    return evt;
  }
  const {canvas, currentDevicePixelRatio} = chart;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const {x, y, box} = getCanvasPosition(evt, canvas);
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let {width, height} = chart;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect();
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
const round1 = v => Math.round(v * 10) / 10;
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let {width, height} = containerSize;
  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    height = round1(width / 2);
  }
  return {
    width,
    height
  };
}
function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = deviceHeight / pixelRatio;
  chart.width = deviceWidth / pixelRatio;
  const canvas = chart.canvas;
  if (canvas.style && (forceStyle || (!canvas.style.height && !canvas.style.width))) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }
  if (chart.currentDevicePixelRatio !== pixelRatio
      || canvas.height !== deviceHeight
      || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
const supportsEventListenerOptions = (function() {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
  }
  return passiveSupported;
}());
function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y
    : mode === 'after' ? t < 1 ? p1.y : p2.y
    : t > 0 ? p2.y : p1.y
  };
}
function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {x: p1.cp2x, y: p1.cp2y};
  const cp2 = {x: p2.cp1x, y: p2.cp1y};
  const a = _pointInLine(p1, cp1, t);
  const b = _pointInLine(cp1, cp2, t);
  const c = _pointInLine(cp2, p2, t);
  const d = _pointInLine(a, b, t);
  const e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}

const intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}

const getRightToLeftAdapter = function(rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    },
  };
};
const getLeftToRightAdapter = function() {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {
    },
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    },
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  let style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [
      style.getPropertyValue('direction'),
      style.getPropertyPriority('direction'),
    ];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}

function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle,
    };
  }
  return {
    between: _isBetween,
    compare: (a, b) => a - b,
    normalize: x => x
  };
}
function normalizeSegment({start, end, count, loop, style}) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}
function getSegment(segment, points, bounds) {
  const {property, start: startBound, end: endBound} = bounds;
  const {between, normalize} = propertyFn(property);
  const count = points.length;
  let {start, end, loop} = segment;
  let i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {start, end, loop, style: segment.style};
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  const {property, start: startBound, end: endBound} = bounds;
  const count = points.length;
  const {compare, between, normalize} = propertyFn(property);
  const {start, end, loop, style} = getSegment(segment, points, bounds);
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;
  const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
  const shouldStart = () => inside || startIsBefore();
  const shouldStop = () => !inside || endIsBefore();
  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({start: subStart, end: i, loop, count, style}));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({start: subStart, end, loop, count, style}));
  }
  return result;
}
function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;
  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push(...sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {start, end};
}
function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;
  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({start: start % count, end: (end - 1) % count, loop});
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({start: start % count, end: last % count, loop});
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;
  if (!count) {
    return [];
  }
  const loop = !!line._loop;
  const {start, end} = findStartAndEnd(points, count, loop, spanGaps);
  if (spanGaps === true) {
    return splitByStyles(line, [{start, end, loop}], points, segmentOptions);
  }
  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  const chartContext = line._chart.getContext();
  const baseStyle = readStyle(line.options);
  const {_datasetIndex: datasetIndex, options: {spanGaps}} = line;
  const count = points.length;
  const result = [];
  let prevStyle = baseStyle;
  let start = segments[0].start;
  let i = start;
  function addStyle(s, e, l, st) {
    const dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({start: s % count, end: e % count, loop: l, style: st});
      prevStyle = st;
      start = e % count;
    }
  }
  for (const segment of segments) {
    start = spanGaps ? start : segment.start;
    let prev = points[start % count];
    let style;
    for (i = start + 1; i <= segment.end; i++) {
      const pt = points[i % count];
      style = readStyle(segmentOptions.setContext(createContext(chartContext, {
        type: 'segment',
        p0: prev,
        p1: pt,
        p0DataIndex: (i - 1) % count,
        p1DataIndex: i % count,
        datasetIndex
      })));
      if (styleChanged(style, prevStyle)) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
      prev = pt;
      prevStyle = style;
    }
    if (start < i - 1) {
      addStyle(start, i - 1, segment.loop, prevStyle);
    }
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}




/***/ })

}]);