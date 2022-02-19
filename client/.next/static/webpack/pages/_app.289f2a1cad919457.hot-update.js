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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No Ethereum Object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(_Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return _Users_yz_BlockChain_uniswap_clone_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length) setCurrentAccount(accounts[0]);\n                        console.log('accounts check::  :>> ', accounts);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No Ethereum Object');\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount: currentAccount,\n            connectWallet: connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/context/TransactionContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsR0FBSyxDQUFDRyxrQkFBa0IsaUJBQUdILDBEQUFtQjtBQUVyRCxHQUFHLENBQUNLLEdBQUc7QUFFUCxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO0lBQ2xDQSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUTtBQUN2QixDQUFDO0FBRU0sR0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM1QyxHQUFLLENBQXVDUixHQUFVLEdBQVZBLCtDQUFRLElBQTdDUyxjQUFjLEdBQXVCVCxHQUFVLEtBQS9CVSxpQkFBaUIsR0FBSVYsR0FBVTtJQUV0REMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZlUsd0JBQXdCO0lBQzFCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNDLGFBQWE7MExBQUcsUUFBUSxXQUFrQixDQUFDO2dCQUFwQkMsUUFBUSxFQUkzQkMsUUFBUTs7Ozt3QkFKV0QsUUFBUSx3REFBR1QsR0FBRzs7NEJBRW5DUyxRQUFROzs7O3FEQUFTRSxLQUFLLENBQUMsQ0FBeUI7OzsrQkFFN0JGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFxQjt3QkFBQyxDQUFDOzt3QkFBbkVILFFBQVE7d0JBRWRKLGlCQUFpQixDQUFFSSxRQUFRLENBQUMsQ0FBQzs7Ozs7O3dCQUU3QkksT0FBTyxDQUFDQyxLQUFLO3dCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFvQjs7Ozs7Ozs7Ozs7UUFFeEMsQ0FBQzt3QkFYS1IsYUFBYTs7OztJQWFuQixHQUFLLENBQUNELHdCQUF3QjswTEFBRyxRQUFRLFdBQW1CLENBQUM7Z0JBQXJCRSxRQUFRLEVBR3RDQyxRQUFROzs7O3dCQUhzQkQsUUFBUSx3REFBR1QsR0FBRzs7NEJBRTlDUyxRQUFROzs7O3FEQUFTRSxLQUFLLENBQUMsQ0FBeUI7OzsrQkFDN0JGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFxQjt3QkFBQyxDQUFDOzt3QkFBbkVILFFBQVE7d0JBQ2QsRUFBRSxFQUFFQSxRQUFRLENBQUNPLE1BQU0sRUFBR1gsaUJBQWlCLENBQUVJLFFBQVEsQ0FBQyxDQUFDO3dCQUNuREksT0FBTyxDQUFDSSxHQUFHLENBQUMsQ0FBd0IseUJBQUVSLFFBQVE7Ozs7Ozt3QkFFOUNJLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDYixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBb0I7Ozs7Ozs7Ozs7O1FBRXhDLENBQUM7d0JBVktULHdCQUF3Qjs7OztJQVk5QixNQUFNLDZFQUNIVCxrQkFBa0IsQ0FBQ3FCLFFBQVE7UUFDMUJDLEtBQUssRUFBRSxDQUFDO1lBQ05mLGNBQWMsRUFBZEEsY0FBYztZQUNkRyxhQUFhLEVBQWJBLGFBQWE7UUFDZixDQUFDO2tCQUVDSixRQUFROzs7Ozs7QUFHaEIsQ0FBQztHQTFDWUQsbUJBQW1CO0tBQW5CQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanM/Njk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxubGV0IGV0aDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGV0aCA9IHdpbmRvdy5ldGhlcmV1bTtcbn1cblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuICB9LCBbXSlcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzaycpXG4gIFxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICBcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KCBhY2NvdW50c1swXSApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBFdGhlcmV1bSBPYmplY3QnKVxuICAgIH0gIFxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICBpZiggYWNjb3VudHMubGVuZ3RoICkgc2V0Q3VycmVudEFjY291bnQoIGFjY291bnRzWzBdICk7XG4gICAgICBjb25zb2xlLmxvZygnYWNjb3VudHMgY2hlY2s6OiAgOj4+ICcsIGFjY291bnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gRXRoZXJldW0gT2JqZWN0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IFxuICAgICAgICBjdXJyZW50QWNjb3VudCwgXG4gICAgICAgIGNvbm5lY3RXYWxsZXRcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJtZXRhbWFzayIsImFjY291bnRzIiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJsZW5ndGgiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});