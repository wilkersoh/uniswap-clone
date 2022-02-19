"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccount'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No Ethereum Object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount: currentAccount,\n            connectWallet: connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/context/TransactionContext.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsR0FBSyxDQUFDRyxrQkFBa0IsaUJBQUdILDBEQUFtQjtBQUVyRCxHQUFHLENBQUNLLEdBQUc7QUFFUCxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO0lBQ2xDQSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUTtBQUN2QixDQUFDO0FBRU0sR0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM1QyxHQUFLLENBQXVDUixHQUFVLEdBQVZBLCtDQUFRLElBQTdDUyxjQUFjLEdBQXVCVCxHQUFVLEtBQS9CVSxpQkFBaUIsR0FBSVYsR0FBVTtJQUV0RCxHQUFLLENBQUNXLGFBQWE7MExBQUcsUUFBUSxXQUFrQixDQUFDO2dCQUFwQkMsUUFBUSxFQUkzQkMsUUFBUTs7Ozt3QkFKV0QsUUFBUSx3REFBR1IsR0FBRzs7NEJBRW5DUSxRQUFROzs7O3FEQUFTRSxLQUFLLENBQUMsQ0FBeUI7OzsrQkFFN0JGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFvQjt3QkFBQyxDQUFDOzt3QkFBbEVILFFBQVE7d0JBRWRILGlCQUFpQixDQUFFRyxRQUFRLENBQUMsQ0FBQzs7Ozs7O3dCQUU3QkksT0FBTyxDQUFDQyxLQUFLO3dCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFvQjs7Ozs7Ozs7Ozs7UUFFeEMsQ0FBQzt3QkFYS1IsYUFBYTs7OztJQWFuQixNQUFNLDZFQUNIVCxrQkFBa0IsQ0FBQ2tCLFFBQVE7UUFDMUJDLEtBQUssRUFBRSxDQUFDO1lBQUNaLGNBQWMsRUFBZEEsY0FBYztZQUFFRSxhQUFhLEVBQWJBLGFBQWE7UUFBQyxDQUFDO2tCQUV0Q0gsUUFBUTs7Ozs7O0FBR2hCLENBQUM7R0F2QllELG1CQUFtQjtLQUFuQkEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0LmpzPzY5OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmxldCBldGg7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBldGggPSB3aW5kb3cuZXRoZXJldW07XG59XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICBcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudCcgfSk7XG4gIFxuICAgICAgc2V0Q3VycmVudEFjY291bnQoIGFjY291bnRzWzBdIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEV0aGVyZXVtIE9iamVjdCcpXG4gICAgfSAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGN1cnJlbnRBY2NvdW50LCBjb25uZWN0V2FsbGV0IH19XG4gICAgPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY29ubmVjdFdhbGxldCIsIm1ldGFtYXNrIiwiYWNjb3VudHMiLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});