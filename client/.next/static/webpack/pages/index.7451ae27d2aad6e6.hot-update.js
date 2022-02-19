"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: 'p-4 w-screen flex justify-between items-center',\n    headerLogo: 'flex w-1/4 items-center justify-start',\n    nav: 'flex-1 flex justify-center items-center',\n    navItemsContainer: 'flex bg-[#191B1F] rounded-3xl',\n    navItem: 'px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl',\n    activeNavItem: 'bg-[#20242A]',\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref1.connectWallet, currentAccount = ref1.currentAccount, userName = ref1.userName;\n    console.log('currentAccount. :>> ', currentAccount);\n    var _obj;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"unitswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.navItemContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return setSelectedNav('vote');\n                        },\n                        className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                        children: \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", (_obj = {\n                        href: \"\"\n                    }, _defineProperty(_obj, \"href\", \"https://info.uniswap/org/#/\"), _defineProperty(_obj, \"target\", \"_blank\"), _defineProperty(_obj, \"rel\", \"noreferrer\"), _defineProperty(_obj, \"children\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.navItem,\n                        children: [\n                            \"Charts \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 20\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this)), _obj), void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.buttonTextContainer,\n                            children: \"0x84....de\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/components/Header.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"T7FtFM/YiphwlKOB6PWdh3lfWnM=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNRLE1BQU0sRUFBQyxDQUFDLElBQXNCLE9BQXBCUixLQUFLLENBQUNTLGFBQWE7OEdBQ25EWSxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBNEIsTUFBSyxDQUEvQnRCLEtBQUssQ0FBQ1csbUJBQW1CLEVBQUMsQ0FBSztrSEFDL0NmLGlFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDLENBQUM7R0FsRUtpQixNQUFNO0tBQU5BLE1BQU07QUFvRVosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEZpQXJyb3dVcFJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBIaU91dGxpbmVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcbmltcG9ydCBldGhMb2dvIGZyb20gJy4uL2Fzc2V0cy9ldGgucG5nJ1xuaW1wb3J0IHVuaXN3YXBMb2dvIGZyb20gJy4uL2Fzc2V0cy91bmlzd2FwLnBuZydcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dFwiXG5cblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6ICdwLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJyxcbiAgaGVhZGVyTG9nbzogJ2ZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQnLFxuICBuYXY6ICdmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInLFxuICBuYXZJdGVtc0NvbnRhaW5lcjogJ2ZsZXggYmctWyMxOTFCMUZdIHJvdW5kZWQtM3hsJyxcbiAgbmF2SXRlbTogJ3B4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0zeGwnLFxuICBhY3RpdmVOYXZJdGVtOiAnYmctWyMyMDI0MkFdJyxcbiAgYnV0dG9uc0NvbnRhaW5lcjogYGZsZXggdy0xLzQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyYCxcbiAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctWyMxOTFCMUZdIHJvdW5kZWQtMnhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyYCxcbiAgYnV0dG9uUGFkZGluZzogYHAtMmAsXG4gIGJ1dHRvblRleHRDb250YWluZXI6IGBoLTggZmxleCBpdGVtcy1jZW50ZXJgLFxuICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXG4gIGJ1dHRvbkFjY2VudDogYGJnLVsjMTcyQTQyXSBib3JkZXIgYm9yZGVyLVsjMTYzMjU2XSBob3Zlcjpib3JkZXItWyMyMzQxNjldIGgtZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEY5MEVBXWAsXG59O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFsgc2VsZWN0ZWROYXYsIHNldFNlbGVjdGVkTmF2IF0gPSB1c2VTdGF0ZSggJ3N3YXAnIClcbiAgY29uc3QgeyBjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudCwgdXNlck5hbWUgfSA9IHVzZUNvbnRleHQoIFRyYW5zYWN0aW9uQ29udGV4dCApO1xuXG4gIGNvbnNvbGUubG9nKCdjdXJyZW50QWNjb3VudC4gOj4+ICcsIGN1cnJlbnRBY2NvdW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUud3JhcHBlciB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5oZWFkZXJMb2dvIH0+XG4gICAgICAgIDxJbWFnZSBzcmM9eyB1bmlzd2FwTG9nbyB9IGFsdD1cInVuaXRzd2FwXCIgaGVpZ2h0PXsgNDAgfSB3aWR0aD17IDQwIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5uYXYgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5uYXZJdGVtQ29udGFpbmVyIH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNldFNlbGVjdGVkTmF2KCAnc3dhcCcgKSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2AkeyBzdHlsZS5uYXZJdGVtIH0gJHtzZWxlY3RlZE5hdiA9PT0gJ3N3YXAnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW0gfWB9XG4gICAgICAgICAgPlN3YXA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2V0U2VsZWN0ZWROYXYoICd2b3RlJyApIH1cbiAgICAgICAgICBjbGFzc05hbWU9e2AkeyBzdHlsZS5uYXZJdGVtIH0gJHsgc2VsZWN0ZWROYXYgPT09ICd2b3RlJyAmJiBzdHlsZS5hY3RpdmVOYXZJdGVtIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgVm90ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cIlwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vaW5mby51bmlzd2FwL29yZy8jL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUubmF2SXRlbSB9PlxuICAgICAgICAgICAgQ2hhcnRzIDxGaUFycm93VXBSaWdodCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25JY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2V0aExvZ299IGFsdD0nZXRoIGxvZ28nIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5FdGhlcmV1bTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8QWlPdXRsaW5lRG93biAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gIFxuICAgICAgICB7IGN1cnJlbnRBY2NvdW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25UZXh0Q29udGFpbmVyfT4weDg0Li4uLmRlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25BY2NlbnR9ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9IG14LTJgfT5cbiAgICAgICAgICAgIDxIaU91dGxpbmVEb3RzVmVydGljYWwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJGaUFycm93VXBSaWdodCIsIkFpT3V0bGluZURvd24iLCJIaU91dGxpbmVEb3RzVmVydGljYWwiLCJldGhMb2dvIiwidW5pc3dhcExvZ28iLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJzdHlsZSIsIndyYXBwZXIiLCJoZWFkZXJMb2dvIiwibmF2IiwibmF2SXRlbXNDb250YWluZXIiLCJuYXZJdGVtIiwiYWN0aXZlTmF2SXRlbSIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b24iLCJidXR0b25QYWRkaW5nIiwiYnV0dG9uVGV4dENvbnRhaW5lciIsImJ1dHRvbkljb25Db250YWluZXIiLCJidXR0b25BY2NlbnQiLCJIZWFkZXIiLCJzZWxlY3RlZE5hdiIsInNldFNlbGVjdGVkTmF2IiwiY29ubmVjdFdhbGxldCIsImN1cnJlbnRBY2NvdW50IiwidXNlck5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJuYXZJdGVtQ29udGFpbmVyIiwib25DbGljayIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});