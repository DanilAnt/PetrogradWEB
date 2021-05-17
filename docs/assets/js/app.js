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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nconst sourses = {\r\n    mainBlocks: document.querySelectorAll('.mainBlock'),\r\n    \r\n    scrolledLines: document.querySelectorAll(`[data-scrolledLine]`),\r\n   \r\n    windowHeight: document.documentElement.clientHeight,\r\n    setWindowHeight(height) {\r\n        this.windowHeight = height;\r\n    },\r\n    getMainBlocks() {\r\n        return this.mainBlocks;\r\n    },\r\n    getWindowHeight() {\r\n        return this.windowHeight;\r\n    },\r\n    getScrolledLines() {\r\n        return this.scrolledLines;\r\n    },\r\n};\r\nconst body = document.querySelector(\"body\");\r\n\r\nsetScrollElements();\r\n\r\nlet scrollPos1 = 0 , scrollPos2 = 0, deltaPos = 0;\r\nwindow.addEventListener('scroll', event => {\r\n    scrollPos1 = scrollPos2;\r\n    scrollPos2 = window.pageYOffset;\r\n    deltaPos = scrollPos2 - scrollPos1;\r\n    setScrollElements();\r\n    setScrolledLinesInCenter(sourses.getMainBlocks()[0]);\r\n    setScrolledLinesInCenter(sourses.getMainBlocks()[1]);\r\n    scrollElements(deltaPos);\r\n    body.classList.remove('showSidebar');\r\n    \r\n});\r\n\r\nwindow.addEventListener('resize', () => {\r\n    sourses.setWindowHeight(document.documentElement.clientHeight);\r\n});\r\n\r\n\r\nfunction setScrolledLinesInCenter(mainBlock) {\r\n    const yOffSet = window.pageYOffset;\r\n    const windowHeight = sourses.getWindowHeight();\r\n    \r\n    const mainBlockOffSet = mainBlock.offsetTop;\r\n    const scrolledLines = mainBlock.querySelectorAll(`[data-scrolledLine]`);\r\n    \r\n    if(document.documentElement.clientWidth > 768){\r\n        const windowCenterPos = yOffSet - mainBlockOffSet + windowHeight/2 - 200;\r\n        for (let i = 0 ; i < scrolledLines.length ; i++){\r\n            scrolledLines[i].style.top = `${windowCenterPos + i*200}px`;\r\n        }\r\n    }else{\r\n        const windowCenterPos = yOffSet - mainBlockOffSet + windowHeight/2 - 250;\r\n        for (let i = 0 ; i < scrolledLines.length ; i++){\r\n            scrolledLines[i].style.top = `${windowCenterPos + i*400}px`;\r\n        }\r\n    }\r\n};\r\n\r\nfunction scrollElements(deltaPos){\r\n    const scrolledLines = sourses.getScrolledLines();\r\n    for (let i = 0 ; i < scrolledLines.length ; i++){\r\n        if(window.pageYOffset+window.innerHeight >=  scrolledLines[i].parentElement.offsetTop){\r\n\r\n        if(isEven(i)){\r\n            for(let j=0; j < scrolledLines[i].children.length; j++){\r\n                let leftOffSet = getComputedStyle(scrolledLines[i].children[j]).left;\r\n                scrolledLines[i].children[j].style.left = `${parseInt(leftOffSet) - deltaPos * 1.5}px`;\r\n                \r\n            }\r\n        }else{\r\n            for(let j=0; j < scrolledLines[i].children.length; j++){\r\n                let leftOffSet = getComputedStyle(scrolledLines[i].children[j]).right;\r\n                scrolledLines[i].children[j].style.right = `${parseInt(leftOffSet) - deltaPos * 1.5}px`;\r\n            }\r\n        }\r\n    }\r\n    }\r\n}\r\n\r\nfunction setScrollElements(){\r\n    if(window.pageYOffset < 50){\r\n    const scrolledLines = sourses.getScrolledLines();\r\n\r\n    for (let i = 0 ; i < scrolledLines.length ; i++){\r\n            let children = scrolledLines[i].children[0].cloneNode(true);        \r\n            scrolledLines[i].innerHTML = '';\r\n            if(isEven(i)){\r\n                for(let j = 0 ; j < 9 ;j++){\r\n                    scrolledLines[i].append(children.cloneNode(true));\r\n                    let childWidthProcent = scrolledLines[i].children[j].offsetWidth / window.innerWidth;\r\n                    scrolledLines[i].children[j].style.left = `${100 + j * childWidthProcent*250}%`;\r\n                }\r\n            }else{\r\n                for(let j = 0 ; j < 9 ;j++){\r\n                    scrolledLines[i].append(children.cloneNode(true));\r\n                    let childWidthProcent = scrolledLines[i].children[j].offsetWidth / window.innerWidth;\r\n                    scrolledLines[i].children[j].style.right = `${100 + j * childWidthProcent*250}%`;\r\n                } \r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nfunction isEven(number) {\r\n    return (number % 2 == 0);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst body = document.querySelector(\"body\");\nconst burger = document.getElementById(\"burger\");\n\nburger.addEventListener('click', () =>{\n    body.classList.toggle('showSidebar');\n})\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst validationMethods = {\n    /**\n     * Метод проверки поля по длине.\n     * @param {HTMLInputElement} field Поле, которое надо проверить.\n     * @param {Array} args Массив с аргументами.\n     * @returns {string|null} Строку с ошибкой или null, если ошибки не было.\n     */\n    length(field, args) {\n      // Получаем длину текста в поле.\n      const valLength = field.value.length,\n        sign = args[0],\n        then = args[1];\n  \n      // Перебираем знак и если сравнение не сработает, записываем ошибку.\n      let message = null;\n      switch (sign) {\n        case '>':\n          if (!(valLength > then)) {\n            message = `Минимальная длина поля: ${then + 1}.`;\n          }\n          break;\n        case '<':\n          if (!(valLength < then)) {\n            message = `Максимальная длина поля: ${then - 1}.`;\n          }\n          break;\n        case '>=':\n          if (!(valLength >= then)) {\n            message = `Поле должно быть заполнено`;\n          }\n          break;\n        case '<=':\n          if (!(valLength <= then)) {\n            message = `Максимальная длина поля: ${then}.`;\n          }\n          break;\n        case '==':\n          if (valLength !== then) {\n            message = `Длина поля должна равняться: ${then} символам.`;\n          }\n          break;\n      }\n  \n      // Возвращаем ошибку.\n      return message;\n    },\n    chekboxChecked(field){\n        if(field.checked){\n            return null;\n        }\n        return \" \";\n    },\n    /**\n     * Проверяет содержит ли поле только цифры.\n     * @param {HTMLInputElement} field Поле, которое надо проверить.\n     * @returns {string|null} Строку с ошибкой или null, если ошибки не было.\n     */\n    mustContainNumbers(field) {\n      // Перебираем все знаки в строке.\n      for (const val of field.value) {\n        // Если хоть один знак не будет целым числом, отправляем ошибку.\n        if (!(Number.isInteger(Number.parseInt(val)) || val === \"+\" || val === \")\" || val === \"(\" || val === \" \" || val === \"-\")) {\n          return 'Поле должно содержать только цифры';\n        }\n      }\n  \n      // Если ошибок не было отправляем null.\n      return null;\n    },\n  \n    /**\n     * Проверяет совпадают ли у двух полей значения.\n     * @param {HTMLInputElement} field1 Поле, которое надо проверить.\n     * @param {Array} args Массив с аргументами.\n     * @returns {string|null} Строку с ошибкой или null, если ошибки не было.\n     */\n    fieldsCompatible(field1, args) {\n      return field1.value !== document.querySelector(args[0]).value ? 'Поля не совпадают.' : null;\n    },\n  };\n  \n  /**\n   * Объект для валидации формы.\n   * @property {Array} rules Массив с правилами проверки инпутов.\n   */\n  const form = {\n    formEl: null,\n    rules: null,\n  \n    /**\n     * Инициализирует форму,ставим обработчик события и правила проверки.\n     */\n    init() {\n      // Находим форму и ставим обработчик события, при отправки формы вызываем метод validate.\n      this.formEl = document.querySelector('.contact__form');\n      this.formEl.addEventListener('submit', e => this.formSubmit(e));\n      \n      // Ставим все правила для проверки формы.\n      this.rules = [\n        {\n          selector: 'input[name=\"name\"]',\n          methods: [\n            {name: 'length', args: ['>=', 1]},\n            {name: 'length', args: ['<=', 50]},\n          ],\n        },\n        {\n          selector: 'input[name=\"phone\"]',\n          methods: [\n            {name: 'mustContainNumbers'},\n            {name: 'length', args: ['>=', 6]},\n          ],\n        },\n        {\n            selector: 'input[name=\"checkbox\"]',\n            methods: [\n              {name: 'chekboxChecked'},\n            ],\n          },\n      ];\n    },\n  \n    /**\n     * Метод, который запускается перед отправкой формы.\n     * @param {Event} e Событие отправки формы.\n     */\n    formSubmit(e) {\n      if (!this.validate()) {\n        e.preventDefault();\n        document.querySelector('.form__okayMessege').style.opacity = \"0\";\n\n      }else{\n        e.preventDefault();\n        document.querySelector('.form__okayMessege').style.opacity = \"1\";\n      }\n    },\n  \n    /**\n     * Валидирует форму.\n     */\n    validate() {\n      // Изначально считаем что валидация успешна, если кто-то провалит, то поставим false.\n      let isValid = true;\n      // Перебираем все правила.\n      for (let rule of this.rules) {\n        // Получаем элемент, который проверяем.\n        const inputEl = document.querySelector(rule.selector);\n        // Перебираем все методы, по которым надо провалидировать поле.\n        for (let method of rule.methods) {\n          // Получаем ошибку после выполнения метода.\n          const errMessage = validationMethods[method.name](inputEl, method.args);\n          if (errMessage) {\n            // Если ошибка была, то меняем стили поля на не прошедшее валидацию.\n            this.setInvalidField(inputEl, errMessage);\n            // Ставим флаг что валидация провалилась в форме.\n            isValid = false;\n            // Больше не нужно проверять поле, если одну ошибку у поля уже получили.\n            break;\n          } else {\n            // Если сообщения об ошибке не было, значит валидация пройдена.\n            this.setValidField(inputEl);\n          }\n        }\n      }\n  \n      // Возвращаем общий результат формы, была пройдена валидация всеми или нет.\n      return isValid;\n    },\n  \n    /**\n     * Устанавливает класс провала валидации инпуту и ставит сообщение о том, почему валидация провалена.\n     * @param {Element} inputEl Элемент инпута, который провалил валидацию.\n     * @param {string} message Сообщение об ошибке.\n     */\n    setInvalidField(inputEl, message) {\n      // Ставим is-invalid класс и убираем is-valid у инпута.\n      const cl = inputEl.classList;\n      cl.remove('is-valid');\n      cl.add('is-invalid');\n  \n      // Если не стояло уже сообщения об ошибке, то создаем и вставляем переданное сообщение как текст.\n      let hintWrap = inputEl.parentNode.querySelector('.invalid-feedback');\n      if (!hintWrap) {\n        hintWrap = document.createElement('div');\n        hintWrap.classList.add('invalid-feedback');\n        inputEl.parentNode.appendChild(hintWrap);\n      }\n  \n      hintWrap.textContent = message;\n    },\n  \n    /**\n     * Устанавливает класс прохождения валидации инпуту и убирает сообщение о провале валидации, если такое было.\n     * @param {Element} inputEl\n     */\n    setValidField(inputEl) {\n      // Ставим is-valid класс и убираем is-invalid у инпута.\n      const cl = inputEl.classList;\n      cl.remove('is-invalid');\n      cl.add('is-valid');\n    },\n  };\n  \n  // Инициализируем форму.\n  form.init();\n\n//# sourceURL=webpack:///./src/assets/js/form.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const header = document.querySelector(\".header\");\nconst logo = document.querySelector('[data-logo]');\nconst mainBlock = document.querySelector(\".mainBlock\");\nconst contactBlock = document.querySelector(\".contact\");\nconst head = document.querySelector(\"head\");\n\nwindow.addEventListener('scroll', ()=>{\nlet windowPos = window.pageYOffset;\nlet mainBlockOffSet = mainBlock.offsetTop;\n\nif(windowPos > mainBlockOffSet){\n    header.style.position = \"fixed\";\n}else{\n    header.style.position = \"absolute\";\n}\nif(windowPos > mainBlockOffSet && windowPos < contactBlock.offsetTop - header.offsetHeight){\n    header.classList.add('redFon');\n    logo.classList.add('redFon');\n    \n}else{\n    header.classList.remove('redFon');\n    logo.classList.remove('redFon');\n}\n});\n\n//# sourceURL=webpack:///./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/telInput.js":
/*!***********************************!*\
  !*** ./src/assets/js/telInput.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n    let phoneInputs = document.querySelectorAll('input[data-tel-input]');\n\n    let getInputNumbersValue = function (input) {\n        // Return stripped input value — just numbers\n        return input.value.replace(/\\D/g, '');\n    }\n\n    let onPhonePaste = function (e) {\n        let input = e.target,\n            inputNumbersValue = getInputNumbersValue(input);\n        let pasted = e.clipboardData || window.clipboardData;\n        if (pasted) {\n            let pastedText = pasted.getData('Text');\n            if (/\\D/g.test(pastedText)) {\n                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,\n                // formatting will be in onPhoneInput handler\n                input.value = inputNumbersValue;\n                return;\n            }\n        }\n    }\n\n    let onPhoneInput = function (e) {\n        let input = e.target,\n            inputNumbersValue = getInputNumbersValue(input),\n            selectionStart = input.selectionStart,\n            formattedInputValue = \"\";\n\n        if (!inputNumbersValue) {\n            return input.value = \"\";\n        }\n\n        if (input.value.length != selectionStart) {\n            // Editing in the middle of input, not last symbol\n            if (e.data && /\\D/g.test(e.data)) {\n                // Attempt to input non-numeric symbol\n                input.value = inputNumbersValue;\n            }\n            return;\n        }\n\n        if ([\"7\", \"8\", \"9\"].indexOf(inputNumbersValue[0]) > -1) {\n            if (inputNumbersValue[0] == \"9\") inputNumbersValue = \"7\" + inputNumbersValue;\n            let firstSymbols = (inputNumbersValue[0] == \"8\") ? \"8\" : \"+7\";\n            formattedInputValue = input.value = firstSymbols + \" \";\n            if (inputNumbersValue.length > 1) {\n                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);\n            }\n            if (inputNumbersValue.length >= 5) {\n                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);\n            }\n            if (inputNumbersValue.length >= 8) {\n                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);\n            }\n            if (inputNumbersValue.length >= 10) {\n                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);\n            }\n        } else {\n            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);\n        }\n        input.value = formattedInputValue;\n    }\n    let onPhoneKeyDown = function (e) {\n        // Clear input after remove last symbol\n        let inputValue = e.target.value.replace(/\\D/g, '');\n        if (e.keyCode == 8 && inputValue.length == 1) {\n            e.target.value = \"\";\n        }\n    }\n    for (let phoneInput of phoneInputs) {\n        phoneInput.addEventListener('keydown', onPhoneKeyDown);\n        phoneInput.addEventListener('input', onPhoneInput, false);\n        phoneInput.addEventListener('paste', onPhonePaste, false);\n    }\n})\n\n//# sourceURL=webpack:///./src/assets/js/telInput.js?");

/***/ }),

/***/ "./src/assets/js/video.js":
/*!********************************!*\
  !*** ./src/assets/js/video.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nconst mainContent = document.querySelectorAll('.main__content');\r\nconst windowHeight = document.documentElement.clientHeight;\r\n\r\nfunction showContent(){\r\n    mainContent.forEach(content => {\r\n        const parentTopOffSet = content.parentElement.offsetTop;\r\n        const parentHeight = content.parentElement.clientHeight;\r\n        const windowHeight = document.documentElement.clientHeight;\r\n        const yOffSet = window.pageYOffset;\r\n        if(yOffSet + windowHeight > parentTopOffSet && yOffSet < parentTopOffSet + parentHeight){\r\n            content.classList.remove(\"hided\");\r\n            if(yOffSet < parentTopOffSet ){\r\n                let translateY =150*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));\r\n                let translateX =50*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));\r\n                let rotate = 90*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));\r\n                content.style.transform = `translate3d(${translateX}%, ${translateY}vh, 0) rotate(${rotate}deg)`;\r\n                \r\n            }else if(yOffSet < parentTopOffSet + parentHeight && yOffSet > parentTopOffSet + parentHeight - windowHeight){\r\n                let translateY =-150*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));\r\n                let translateX =-50*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));\r\n                let rotate = -90*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));\r\n                content.style.transform = `translate3d(${translateX}%, ${translateY}vh, 0) rotate(${rotate}deg)`;\r\n                \r\n            }else{\r\n                content.style.transform = `translate3d(0%, 0vh, 0) rotate(0deg)`\r\n            }\r\n        }else{\r\n            content.classList.add('hided');\r\n        }\r\n        let translateY =150*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));\r\n        \r\n    });\r\n};\r\n\r\nwindow.addEventListener('scroll', event => {\r\n    showContent();\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/video.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/burger.js ./src/assets/js/form.js ./src/assets/js/header.js ./src/assets/js/telInput.js ./src/assets/js/video.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/form.js */\"./src/assets/js/form.js\");\n__webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/header.js */\"./src/assets/js/header.js\");\n__webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/telInput.js */\"./src/assets/js/telInput.js\");\nmodule.exports = __webpack_require__(/*! /Users/Danil/Desktop/petrogradWEB/src/assets/js/video.js */\"./src/assets/js/video.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/burger.js_./src/assets/js/form.js_./src/assets/js/header.js_./src/assets/js/telInput.js_./src/assets/js/video.js?");

/***/ })

/******/ });