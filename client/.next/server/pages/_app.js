/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nlet eth;\nif (false) {}\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n            throw new Error('No Ethereum Object');\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            if (accounts.length) setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n            throw new Error('No Ethereum Object');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount,\n            connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/context/TransactionContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBRTNDLEtBQUssQ0FBQ0csa0JBQWtCLGlCQUFHSCwwREFBbUI7QUFFckQsR0FBRyxDQUFDSyxHQUFHO0FBRVAsRUFBRSxFQUFFLEtBQTZCLEVBQUUsRUFFbEM7QUFFTSxLQUFLLENBQUNHLG1CQUFtQixJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3BELEtBQUssTUFBRUMsY0FBYyxNQUFFQyxpQkFBaUIsTUFBSVYsK0NBQVE7SUFFcERDLGdEQUFTLEtBQU8sQ0FBQztRQUNmVSx3QkFBd0I7SUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0MsYUFBYSxVQUFVQyxRQUFRLEdBQUdULEdBQUcsR0FBSyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxHQUFFUyxRQUFRLEVBQUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBeUI7WUFFcEQsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDO2dCQUFDQyxNQUFNLEVBQUUsQ0FBcUI7WUFBQyxDQUFDO1lBRXpFUCxpQkFBaUIsQ0FBRUssUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7WUFDZkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7WUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQW9CO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDVCx3QkFBd0IsVUFBVUUsUUFBUSxHQUFHVCxHQUFHLEdBQU0sQ0FBQztRQUMzRCxHQUFHLENBQUMsQ0FBQztZQUNILEVBQUUsR0FBRVMsUUFBUSxFQUFFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQXlCO1lBQ3BELEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQXFCO1lBQUMsQ0FBQztZQUV6RSxFQUFFLEVBQUVGLFFBQVEsQ0FBQ00sTUFBTSxFQUFHWCxpQkFBaUIsQ0FBRUssUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7WUFDZkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7WUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQW9CO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSGxCLGtCQUFrQixDQUFDb0IsUUFBUTtRQUMxQkMsS0FBSyxFQUFFLENBQUM7WUFDTmQsY0FBYztZQUNkRyxhQUFhO1FBQ2YsQ0FBQztrQkFFQ0osUUFBUTs7Ozs7O0FBR2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcz82OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5sZXQgZXRoO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZXRoID0gd2luZG93LmV0aGVyZXVtO1xufVxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrJylcbiAgXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgIFxuICAgICAgc2V0Q3VycmVudEFjY291bnQoIGFjY291bnRzWzBdIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEV0aGVyZXVtIE9iamVjdCcpXG4gICAgfSAgXG4gIH1cblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAobWV0YW1hc2sgPSBldGggKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzaycpXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgIFxuICAgICAgaWYoIGFjY291bnRzLmxlbmd0aCApIHNldEN1cnJlbnRBY2NvdW50KCBhY2NvdW50c1swXSApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBFdGhlcmV1bSBPYmplY3QnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgXG4gICAgICAgIGN1cnJlbnRBY2NvdW50LCBcbiAgICAgICAgY29ubmVjdFdhbGxldFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwiY29ubmVjdFdhbGxldCIsIm1ldGFtYXNrIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImxlbmd0aCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/yz/BlockChain/uniswap-clone/client/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yz/BlockChain/uniswap-clone/client/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRXFDO1NBRTFEQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISCw0RUFBbUI7OEZBQ2pCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUcmFuc2FjdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNhY3Rpb25Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RyYW5zYWN0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUcmFuc2FjdGlvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();