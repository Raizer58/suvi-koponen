/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fonts/Lucifer-Sans-SemiCnd-Bold.otf":
/*!*************************************************!*\
  !*** ./src/fonts/Lucifer-Sans-SemiCnd-Bold.otf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9afa157e280671ef0a317d66f0cacdf1.otf\");\n\n//# sourceURL=webpack:///./src/fonts/Lucifer-Sans-SemiCnd-Bold.otf?");

/***/ }),

/***/ "./src/fonts/Lucifer-Sans-SemiCnd-Medium.otf":
/*!***************************************************!*\
  !*** ./src/fonts/Lucifer-Sans-SemiCnd-Medium.otf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"299c9f2dd487c2effdd7080f18bf94e3.otf\");\n\n//# sourceURL=webpack:///./src/fonts/Lucifer-Sans-SemiCnd-Medium.otf?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module_scss/style.scss */ \"./src/module_scss/style.scss\");\n/* harmony import */ var _module_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fonts_Lucifer_Sans_SemiCnd_Bold_otf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/Lucifer-Sans-SemiCnd-Bold.otf */ \"./src/fonts/Lucifer-Sans-SemiCnd-Bold.otf\");\n/* harmony import */ var _fonts_Lucifer_Sans_SemiCnd_Medium_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Lucifer-Sans-SemiCnd-Medium.otf */ \"./src/fonts/Lucifer-Sans-SemiCnd-Medium.otf\");\n/* harmony import */ var _module_js_moving_first_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module_js/moving-first-section */ \"./src/module_js/moving-first-section.js\");\n/* harmony import */ var _module_js_mooving_second_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module_js/mooving-second-section */ \"./src/module_js/mooving-second-section.js\");\n\n\n\n\n\nObject(_module_js_moving_first_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(18, 99);\n\nfunction screenPosition() {\n  if (document.querySelector(\"#second-section-quote-mark\").getBoundingClientRect().top - 450 <= 0) {\n    window.removeEventListener(\"scroll\", screenPosition);\n    window.removeEventListener(\"load\", screenPosition);\n    Object(_module_js_mooving_second_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  }\n}\n\nwindow.addEventListener(\"scroll\", screenPosition);\nwindow.addEventListener(\"load\", screenPosition);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module_js/mooving-second-section.js":
/*!*************************************************!*\
  !*** ./src/module_js/mooving-second-section.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst circle = document.querySelector(\"#circle\");\nconst winter = document.querySelector(\"#winter\");\nconst secondSectionWint = document.querySelector(\"#second-section-wint\");\nconst secondSectionE = document.querySelector(\"#second-section-e\");\nconst secondSectionR = document.querySelector(\"#second-section-r\");\nconst windowVogue = document.querySelector(\"#window-vogue\");\nconst modelingCareer = document.querySelector(\"#window-modeling-career\");\nconst modelingCareerBackside = document.querySelector(\"#window-modeling-career-backside\");\n\nfunction addStartingOn(firstText, secondText, time) {\n  const arrayFirstText = firstText.split(\"\");\n  const arraySecondText = secondText.split(\"\");\n  const startingOn = document.querySelector(\"#startingOn\");\n  let letter = 0;\n  arrayFirstText.forEach(element => {\n    letter += 1;\n\n    if (letter === 13 || letter === 23 || letter === 34) {\n      setTimeout(() => {\n        startingOn.innerHTML += `<br> ${element}`;\n      }, time * letter);\n    } else {\n      setTimeout(() => {\n        startingOn.innerHTML += element;\n      }, time * letter);\n    }\n  });\n  const span = document.createElement(\"span\");\n  setTimeout(() => startingOn.append(span), time * letter);\n  arraySecondText.forEach(element => {\n    letter += 1;\n\n    if (letter === 48) {\n      setTimeout(() => {\n        const startingOnSpan = startingOn.querySelector(\"span\");\n        startingOnSpan.innerHTML += `<br> ${element}`;\n      }, time * letter);\n    } else {\n      setTimeout(() => {\n        const startingOnSpan = startingOn.querySelector(\"span\");\n        startingOnSpan.innerHTML += element;\n      }, time * letter);\n    }\n  });\n}\n\nfunction reverseModelingCareer() {\n  setTimeout(() => {\n    modelingCareer.classList.toggle(\"display-none\");\n    modelingCareerBackside.classList.toggle(\"display-none\");\n  }, 750);\n\n  if (modelingCareer.classList.contains(\"display-none\")) {\n    modelingCareerBackside.classList.add(\"main__window-modeling-career_close\");\n    modelingCareer.classList.add(\"main__window-modeling-career_open\");\n  } else {\n    modelingCareer.classList.add(\"main__window-modeling-career_close\");\n    modelingCareerBackside.classList.add(\"main__window-modeling-career_open\");\n  }\n\n  setTimeout(() => {\n    modelingCareer.classList.remove(\"main__window-modeling-career_close\", \"main__window-modeling-career_open\");\n    modelingCareerBackside.classList.remove(\"main__window-modeling-career_close\", \"main__window-modeling-career_open\");\n  }, 1500);\n}\n\nfunction moovingSecondSection() {\n  addStartingOn(\"Starting on a Finnish television series \", \"called Model School\", 15);\n  circle.classList.add(\"second-section__circle_change-size\");\n  winter.classList.remove(\"display-none\");\n  modelingCareer.classList.remove(\"display-none\");\n  secondSectionWint.classList.add(\"second-section__winter-wint_move\");\n  secondSectionE.classList.add(\"second-section__winter-e_move\");\n  secondSectionR.classList.add(\"second-section__winter-r_move\");\n  windowVogue.classList.add(\"main__window-vogue_move\");\n  modelingCareer.classList.add(\"main__window-modeling-career_move\");\n  setTimeout(() => modelingCareer.classList.remove(\"main__window-modeling-career_move\"), 2000);\n  modelingCareer.querySelector(\"img\").addEventListener(\"click\", reverseModelingCareer);\n  modelingCareerBackside.querySelector(\"img:last-child\").addEventListener(\"click\", reverseModelingCareer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moovingSecondSection);\n\n//# sourceURL=webpack:///./src/module_js/mooving-second-section.js?");

/***/ }),

/***/ "./src/module_js/moving-first-section.js":
/*!***********************************************!*\
  !*** ./src/module_js/moving-first-section.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction moveText() {\n  const fashion = document.querySelector(\"#fashion\").classList;\n  const design = document.querySelector(\"#design\").classList;\n  const campaign = document.querySelector(\"#campaign\").classList;\n  const jobDone = document.querySelector(\"#job-done\").classList;\n  const paris = document.querySelector(\"#paris\").classList;\n  const suvi = document.querySelector(\"#suvi\").classList;\n  const koponen = document.querySelector(\"#koponen\").classList;\n  const koponenKopon = document.querySelector(\"#koponen-kopon\").classList;\n  const koponenFE = document.querySelector(\"#koponen-f-e\").classList;\n  const koponenSN = document.querySelector(\"#koponen-s-n\").classList;\n  const window6Step = document.querySelector(\"#window-6-step\").classList;\n  fashion.remove(\"display-none\");\n  design.remove(\"display-none\");\n  campaign.remove(\"display-none\");\n  jobDone.remove(\"display-none\");\n  paris.remove(\"display-none\");\n  suvi.remove(\"display-none\");\n  koponen.remove(\"display-none\");\n  window6Step.remove(\"display-none\");\n  fashion.add(\"main__fashion-design_move\");\n  design.add(\"main__fashion-design_move\");\n  campaign.add(\"main__campaign_move\");\n  jobDone.add(\"main__job-done_move\");\n  paris.add(\"main__paris_move\");\n  suvi.add(\"suvi-koponen__suvi_move\");\n  koponenKopon.add(\"suvi-koponen__koponen-kopon_move\");\n  koponenFE.add(\"suvi-koponen__koponen-f-e_move\");\n  koponenSN.add(\"suvi-koponen__koponen-s-n_move\");\n  window6Step.add(\"main__window-6-step_move\");\n}\n\nfunction loadScreen() {\n  document.querySelector(\"body header\").classList.remove(\"display-none\");\n  setTimeout(() => {\n    document.querySelector(\"body header\").classList.add(\"header_active\");\n  }, 1);\n  document.querySelector(\"body main .main__first-section p\").remove();\n}\n\nfunction changeSizingImg() {\n  const firstThirdImg = document.createElement(\"img\");\n  firstThirdImg.src = \"./dist/img/first-third.png\";\n  firstThirdImg.id = \"first-third\";\n  firstThirdImg.className = \"main__first-third_change-size\";\n  document.querySelector(\"body main .main__first-section\").append(firstThirdImg);\n  document.querySelector(\"#first-first\").classList.add(\"main__first-first_change-size\");\n  document.querySelector(\"#first-second\").classList.add(\"main__first-second_change-size\");\n}\n\nfunction movingFirstScreen(time, count) {\n  const layoutFirst = document.querySelector(\"#layout-first\").classList;\n  const layoutSecond = document.querySelector(\"#layout-second\").classList;\n\n  for (let cycle = 0; cycle <= count; cycle += 1) {\n    setTimeout(() => {\n      const firstImg = document.querySelector(\"#first-first\");\n      const secondImg = document.querySelector(\"#first-second\");\n      document.querySelector(\"body #timer\").innerHTML = cycle;\n\n      switch (cycle) {\n        case 0:\n          layoutFirst.add(\"screen__white-layout_move-down\");\n          layoutSecond.add(\"screen__white-layout_move-top\");\n          break;\n\n        case 33:\n          layoutFirst.remove(\"screen__white-layout_move-down\");\n          layoutSecond.remove(\"screen__white-layout_move-top\");\n          firstImg.src = \"./dist/img/fifth-first.png\";\n          secondImg.src = \"./dist/img/fourth-first.png\";\n          layoutFirst.add(\"screen__white-layout_move-right\");\n          layoutSecond.add(\"screen__white-layout_move-left\");\n          break;\n\n        case 66:\n          layoutFirst.remove(\"screen__white-layout_move-right\");\n          layoutSecond.remove(\"screen__white-layout_move-left\");\n          firstImg.src = \"./dist/img/first-first.png\";\n          secondImg.src = \"./dist/img/first-second.png\";\n          layoutFirst.add(\"screen__white-layout_move-top\");\n          layoutSecond.add(\"screen__white-layout_move-down\");\n          break;\n\n        case 99:\n          document.querySelector(\"#layout-first\").remove();\n          document.querySelector(\"#layout-second\").remove();\n          changeSizingImg();\n          loadScreen();\n          moveText();\n          break;\n\n        default:\n          break;\n      }\n    }, time * cycle);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (movingFirstScreen);\n\n//# sourceURL=webpack:///./src/module_js/moving-first-section.js?");

/***/ }),

/***/ "./src/module_scss/style.scss":
/*!************************************!*\
  !*** ./src/module_scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/module_scss/style.scss?");

/***/ })

/******/ });