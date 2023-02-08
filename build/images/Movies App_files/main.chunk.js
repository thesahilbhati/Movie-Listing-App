(this["webpackJsonpneed-a-web-developer-21043817"] = this["webpackJsonpneed-a-web-developer-21043817"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/scss/main.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/scss/main.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/routes */ "./src/routes.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var src_context_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/context/Auth */ "./src/context/Auth.js");
/* harmony import */ var src_component_PageLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/component/PageLoading */ "./src/component/PageLoading.js");
/* harmony import */ var src_component_AuthGuard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/component/AuthGuard */ "./src/component/AuthGuard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/theme */ "./src/theme/index.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/App.js";











const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
function App() {
  const theme = Object(src_theme__WEBPACK_IMPORTED_MODULE_10__["createTheme"])();
  console.log(theme);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__["MuiPickersUtilsProvider"], {
    utils: _date_io_moment__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_context_Auth__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: history,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderRoutes, {
    data: src_routes__WEBPACK_IMPORTED_MODULE_4__["routes"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);
function RenderRoutes(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_component_PageLoading__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, props.data.map((route, i) => {
    const Component = route.component;
    const Guard = route.guard ? src_component_AuthGuard__WEBPACK_IMPORTED_MODULE_8__["default"] : react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
    const Layout = route.layout || react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: route.exact,
      key: i,
      path: route.path,
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Guard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      }, route.routes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderRoutes, {
        data: route.routes,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 23
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 23
        }
      })))),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    });
  })));
}

/***/ }),

/***/ "./src/component/AuthGuard.js":
/*!************************************!*\
  !*** ./src/component/AuthGuard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var src_context_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/context/Auth */ "./src/context/Auth.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/component/AuthGuard.js";



function AuthGuard(props) {
  const {
    children
  } = props;
  const auth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(src_context_Auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  if (!auth.userLoggedIn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 12
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

/***/ }),

/***/ "./src/component/Logo.js":
/*!*******************************!*\
  !*** ./src/component/Logo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/component/Logo.js";

const Logo = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", Object.assign({
    src: "/images/Logo1.jpeg",
    style: {
      width: "100%",
      maxWidth: "60px",
      borderRadius: "50%"
    },
    alt: "Logo"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/component/PageLoading.js":
/*!**************************************!*\
  !*** ./src/component/PageLoading.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/component/PageLoading.js";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000
  },
  loader: {
    width: 300,
    maxWidth: "100%",
    margin: "auto"
  },
  progressBar: {
    height: "3px"
  }
}));
function PageLoading() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.loader,
    src: "/images/loader.gif",
    alt: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: NetworkContextName, ACTIVE_NETWORK, tokenContract, MarketplaceContract, NftTokenAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkContextName", function() { return NetworkContextName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_NETWORK", function() { return ACTIVE_NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenContract", function() { return tokenContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceContract", function() { return MarketplaceContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftTokenAddress", function() { return NftTokenAddress; });
const NetworkContextName = "NETWORK";
const ACTIVE_NETWORK = 42;
const tokenContract = "0xE4861c8C1A80250e1e280F7F7bbf84736146b867";
const MarketplaceContract = "0xf5DE7F4Ee0C4063a1e6f139fEa2eB92c2D153653";
const NftTokenAddress = "0x4846666e4013A48647be98AF3FDE33251e679bd2";

/***/ }),

/***/ "./src/context/Auth.js":
/*!*****************************!*\
  !*** ./src/context/Auth.js ***!
  \*****************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/context/Auth.js";


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const setSession = accessToken => {
  if (accessToken) {
    localStorage.setItem("creatturAccessToken", accessToken);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("creatturAccessToken");
    delete axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common.Authorization;
  }
};
function checkLogin() {
  const accessToken = window.localStorage.getItem("creatturAccessToken");
  return accessToken ? true : false;
}
function AuthProvider(props) {
  const [isLogin, setIsLogin] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(checkLogin());
  const [userData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  let data = {
    userLoggedIn: isLogin,
    userData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthContext.Provider, {
    value: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, props.children);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _src_scss_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/scss/main.css */ "./src/scss/main.css");
/* harmony import */ var _src_scss_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_scss_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants */ "./src/constants/index.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/index.js";








const Web3ProviderNetwork = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__["createWeb3ReactRoot"])(src_constants__WEBPACK_IMPORTED_MODULE_7__["NetworkContextName"]);
function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
  library.pollingInterval = 15000;
  return library;
}
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__["Web3ReactProvider"], {
  getLibrary: getLibrary,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Web3ProviderNetwork, {
  getLibrary: getLibrary,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}))), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/layouts/HomeLayout/Footer.js":
/*!******************************************!*\
  !*** ./src/layouts/HomeLayout/Footer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Liquidity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Telegram */ "./node_modules/@material-ui/icons/Telegram.js");
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../component/Logo */ "./src/component/Logo.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/layouts/HomeLayout/Footer.js";









const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  footerSection: {
    background: '#FEFEFE',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(9)
    }
  },
  borderBottmo: {
    overflow: 'hidden',
    background: '#000',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: '8px'
  },
  icons: {
    justify: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justify: 'center'
    }
  },
  button: {
    backgroundColor: '#fab758',
    color: '#ffffff',
    border: '2px solid #fab758',
    borderRadius: '40px',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '160px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px'
  },
  join: {
    color: '#ffffff',
    fontSize: '30px'
  },
  textFild: {
    position: 'relative',
    '& button': {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      backgroundColor: '#3F78E0',
      minWidth: '90px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#000'
      }
    }
  }
}));
function Liquidity() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.footerSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      margin: '20px 10px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    style: {
      color: 'white'
    },
    justify: "space-around",
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo.png",
    alt: "",
    width: "100%",
    style: {
      maxWidth: '200px',
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: '17px',
      fontWeight: 'normal',
      width: '54%',
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, "\xA9 2021 Sandbox. All rights reserved."), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      margin: '0 8px',
      color: '#5DAED5'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: '0 8px',
      color: '#4470CF'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      margin: '0 8px',
      color: '#D07EAD'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      margin: '0 8px',
      color: '#D53581'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      margin: '0 8px',
      color: '#C8312B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 27
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "footerTitle",
    variant: "h4",
    style: {
      color: '#343F52'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, "Get in Touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: "listingFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: '15px',
      width: '60%',
      lineHeight: '30px',
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 23
    }
  }, "Moonshine St. 14/05 Light City, London, United Kingdom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: '15px',
      width: '54%',
      lineHeight: '30px',
      color: '#60697B',
      marginTop: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 23
    }
  }, "info@email.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: '15px',
      width: '55%',
      lineHeight: '30px',
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 23
    }
  }, "+00 (123) 456 78 90"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "footerTitle",
    variant: "h4",
    style: {
      color: '#343F52'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: "listingFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    style: {
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 23
    }
  }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    style: {
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 23
    }
  }, "Our Story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    style: {
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    style: {
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, "Terms of Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    style: {
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, "Privacy Policy")), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "footerTitle",
    variant: "h4",
    style: {
      color: '#343F52'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "Our Newsletter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: "listingFooter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: '15px',
      lineHeight: '30px',
      color: '#60697B'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 23
    }
  }, "Subscribe to our newsletter to get our news & deals delivered to you.")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 3,
    className: classes.textFild,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "outlined-basic",
    fullWidth: true,
    variant: "outlined",
    placeholder: "Email Address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  }, "Join"))))))))));
}

/***/ }),

/***/ "./src/layouts/HomeLayout/TopBar.js":
/*!******************************************!*\
  !*** ./src/layouts/HomeLayout/TopBar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../component/Logo */ "./src/component/Logo.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/layouts/HomeLayout/TopBar.js";





const headersData = [{
  label: 'Home',
  href: '/'
}, {
  label: 'About',
  href: '/'
}, {
  label: 'Popular',
  href: '/'
}];
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  menuButton: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    borderRadius: 0,
    minWidth: 'auto',
    color: '#343F52',
    height: '31px',
    padding: '0px 7px',
    letterSpacing: '1px',
    marginLeft: '15px',
    '@media (max-width: 900px)': {
      fontStyle: 'normal',
      letterSpacing: '-0.6px',
      lineHeight: '24px',
      color: '#FFF',
      padding: '15px !important',
      height: '51px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    '&:active': {
      color: '#1ed760'
    },
    '&:hover': {
      color: '#d00167'
    }
  },
  menuButton1: {
    width: '100%'
  },
  toolbar: {
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
    height: '100%',
    '@media (max-width: 900px)': {
      paddingLeft: '75px',
      paddingRight: '20px',
      height: '100%'
    }
  },
  maindrawer: {
    height: '100%',
    background: '#0c0731',
    width: '260px'
  },
  logoDrawer: {
    paddingLeft: '10px',
    width: '140px',
    marginBottom: '30px'
  },
  drawerContainer: {
    padding: '20px 0px ',
    height: '100%',
    background: '#000',
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  drawericon: {
    color: '#000',
    position: 'absolute',
    top: '0px',
    right: '-10px',
    fontSize: '25px'
  },
  logoImg: {
    objectFit: 'contain',
    '@media (max-width: 500px)': {
      margin: ' 11px 1px 3px 0px',
      width: '52px'
    }
  },
  menuMobile: {
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '-0.6px',
    lineHeight: '1.75',
    color: '#fff',
    borderBottom: '1px solid #3e3e3e',
    padding: '16px',
    '@media (max-width: 500px)': {
      padding: '7px 0',
      width: '100%'
    }
  },
  paper1: {
    background: 'black',
    color: 'white'
  },
  containerHeight: {
    height: '100%'
  },
  mainHeader: {
    justifyContent: 'space-between',
    padding: '0px'
  },
  search: {
    height: '31px',
    position: 'relative',
    color: '#ABABAB',
    borderRadius: '100px',
    backgroundColor: '#E6E6E6',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#ececec',
      border: '1px solid #300760'
    },
    marginLeft: 20,
    width: '140px',
    maxWidth: '257px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '180px'
    }
  },
  searchIcon: {
    fontSize: '16px',
    padding: theme.spacing(0, 2),
    color: '#000000',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '16px'
  },
  wallet: {
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21px',
    color: '#fff',
    border: '1px solid #ec0066',
    padding: '0 15px',
    background: '#ec0066',
    borderRadius: '50px',
    height: '31px',
    '&:hover': {
      background: '#fff',
      color: '#ec0066'
    },
    '@media (max-width: 900px)': {
      marginLeft: '12px',
      marginTop: '12px'
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '13px',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%'
      }
    }
  },
  submenu: {
    borderTop: '3px solid #300760',
    top: '25px !important'
  }
}));
function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null);
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const {
    menuMobile,
    menuButton,
    menuButton1,
    toolbar,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    mainHeader,
    submenu
  } = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  console.log(history.location);
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    mobileView: false,
    drawerOpen: false
  });
  const {
    mobileView,
    drawerOpen
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220 ? setState(prevState => ({
        ...prevState,
        mobileView: true
      })) : setState(prevState => ({
        ...prevState,
        mobileView: false
      }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);
  const [open1, setOpen1] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    community: false,
    user: false
  });
  const anchorRef = {
    community: Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null),
    user: Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null)
  };
  const handleClose2 = (event, name) => {
    if (anchorRef[name].current && anchorRef[name].current.contains(event.target)) {
      return;
    }
    setOpen1({
      ...open1,
      [name]: false
    });
  };
  function handleListKeyDown(event, name) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen1({
        ...open1,
        [name]: false
      });
    }
  }
  const displayDesktop = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      maxWidth: "lg",
      className: "p-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Toolbar"], {
      className: toolbar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }
    }, femmecubatorLogo, getMenuButtons(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      item: true,
      direction: "row",
      justify: "flex-end",
      alignItems: "center",
      style: {
        paddingLeft: '0px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      lg: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
      type: "text",
      className: classes.textBox,
      placeholder: "Search Movie Here",
      variant: "outlined",
      fullWidth: true,
      name: "firstname",
      id: "firstname"
      // value={values.moviename}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Popper"], {
      open: open1.community,
      anchorEl: anchorRef.community.current,
      role: undefined,
      transition: true,
      disablePortal: true,
      className: submenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }
    }, _ref => {
      let {
        TransitionProps,
        placement
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], Object.assign({}, TransitionProps, {
        style: {
          transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 17
        }
      }));
    }))));
  };
  const displayMobile = () => {
    const handleDrawerOpen = () => setState(prevState => ({
      ...prevState,
      drawerOpen: true
    }));
    const handleDrawerClose = () => setState(prevState => ({
      ...prevState,
      drawerOpen: false
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Toolbar"], {
      className: mainHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Drawer"], {
      anchor: 'right',
      open: drawerOpen,
      onClose: handleDrawerClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: drawerContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: logoDrawer,
      src: "images/footerlogo.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 13
      }
    }), getDrawerChoices())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }
    }, femmecubatorLogo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
      className: drawericon,
      edge: 'start',
      color: 'inherit',
      'aria-label': 'menu',
      'aria-haspopup': 'true',
      onClick: handleDrawerOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: "60px",
      height: "60px",
      style: {
        color: '#197ab3',
        fontSize: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 15
      }
    })))));
  };
  const getDrawerChoices = () => {
    return headersData.map(_ref2 => {
      let {
        label,
        href
      } = _ref2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        key: label,
        color: 'inherit',
        to: href,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
        className: menuButton1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
        className: menuMobile,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 13
        }
      }, label)));
    });
  };
  const femmecubatorLogo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "logoImg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 9
    }
  })));
  const getMenuButtons = () => {
    return headersData.map(_ref3 => {
      let {
        label,
        href
      } = _ref3;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        key: label,
        color: 'inherit',
        to: href,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
        className: menuButton,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }
      }, label));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["AppBar"], {
    position: history.location.pathname !== '/' ? 'relative' : 'absolute',
    elevation: 0,
    style: {
      backgroundColor: '#ccc0',
      border: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: history.location.pathname !== '/' ? 'lg' : 'fixed',
    className: containerHeight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }, mobileView ? displayMobile() : displayDesktop())));
}

/***/ }),

/***/ "./src/layouts/HomeLayout/index.js":
/*!*****************************************!*\
  !*** ./src/layouts/HomeLayout/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/layouts/HomeLayout/Footer.js");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar */ "./src/layouts/HomeLayout/TopBar.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/layouts/HomeLayout/index.js";





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    backgroundColor: "#fff"
  },
  MainLayout: {
    minHeight: "calc(100vh - 415px)"
  }
}));
const MainLayout = _ref => {
  let {
    children
  } = _ref;
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  console.log(history.location);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: history.location.pathname !== "/" ? {
      display: "block"
    } : {
      display: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.MainLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var src_layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/HomeLayout */ "./src/layouts/HomeLayout/index.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/routes.js";



const routes = [{
  exact: true,
  path: "/",
  layout: src_layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
  component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! src/views/pages/Home */ "./src/views/pages/Home/index.js")))
}, {
  exact: true,
  path: "/404",
  component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! src/views/errors/NotFound */ "./src/views/errors/NotFound.js")))
}, {
  component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 22
    }
  })
}];

/***/ }),

/***/ "./src/scss/main.css":
/*!***************************!*\
  !*** ./src/scss/main.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/scss/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/scss/main.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/scss/main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography */ "./src/theme/typography.js");



const baseOptions = {
  typography: _typography__WEBPACK_IMPORTED_MODULE_2__["default"],
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#222'
      },
      colorSecondary: {
        '&.Mui-focused': {
          color: '#222'
        }
      }
    },
    MuiListSubheader: {
      root: {
        color: '#000000',
        fontSize: '22px !important',
        fontWeight: '600 !important',
        lineHeight: '33px !important'
      }
    },
    MuiOutlinedInput: {
      colorSecondary: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          color: '#222',
          borderColor: '#222'
        },
        '&.Mui-focused': {
          color: '#222'
        }
      }
    },
    MuiPaper: {
      outlined: {
        padding: '20px',
        width: '100%'
      }
    },
    MuiPopover: {
      root: {
        zIndex: 99999
      }
    },
    MuiListItem: {
      root: {
        alignItems: 'self-start'
      },
      gutters: {
        paddingLeft: 0
      }
    },
    MuiCheckbox: {
      root: {
        padding: '4px',
        fontSize: '12px'
      },
      colorSecondary: {
        '&.Mui-checked': {
          color: '#000'
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        paddingBottom: '0'
      }
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0
      }
    },
    MuiDialog: {
      paperScrollPaper: {
        Width: 450,
        maxWidth: '100%'
      },
      paper: {
        overflowY: 'unset'
      },
      paperWidthSm: {
        maxWidth: '900px !important'
      }
    },
    MuiInputBase: {
      input: {
        fontSize: 14,
        color: '#222',
        height: '1.1876em'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    },
    MuiButton: {
      containedSecondary: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '50px',
        color: '#fff',
        fontSize: '14px',
        backgroundColor: '#f30065',
        padding: '5px 19px'
      },
      containedPrimary: {
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '50px',
        color: '#f30065',
        fontSize: '15px',
        height: '40px',
        lineHeight: ' 21px',
        padding: '10px 39px',
        marginRight: '10px',
        '&:hover': {
          backgroundColor: '#b2b2b2',
          color: '#fff'
        }
      },
      contained: {
        borderRadius: '50px',
        color: '#f30065',
        fontWeight: 600,
        padding: '5px 19px',
        '&:hover': {
          backgroundColor: '#f30065',
          color: '#fff'
        }
      },
      outlinedPrimary: {
        borderRadius: '50px',
        color: '#300760',
        fontWeight: 600,
        padding: '5px 19px',
        border: '2px solid #300760',
        '&:hover': {
          backgroundColor: '#f30065',
          border: '2px solid #f30065',
          color: '#fff'
        }
      },
      outlinedSizeSmall: {
        padding: '6px 23px',
        fontSize: '16px',
        lineHeight: ' 24px'
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: '0'
      }
    },
    MuiMenu: {
      paper: {
        top: '47px'
      }
    },
    MuiTypography: {
      subtitle1: {
        color: '#000',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: ' 16px',
        colorSecondary: {
          color: '#8d8989'
        }
      }
    }
  }
};
const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif"
  },
  palette: {
    type: 'light',
    action: {
      primary: '#20509e'
    },
    background: {
      default: '#FBFBFD',
      dark: '#f3f7f9',
      paper: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["colors"].common.white
    },
    primary: {
      main: '#898989',
      dark: '#de0d0d',
      light: '#de0d0d'
    },
    secondary: {
      main: '#fff'
    },
    warning: {
      main: '#ffae33',
      dark: '#ffae33',
      light: '#fff1dc'
    },
    success: {
      main: '#54e18c',
      dark: '#54e18c',
      light: '#e2faec'
    },
    error: {
      main: '#ff7d68',
      dark: '#ff7d68',
      light: '#ffe9e6'
    },
    text: {
      primary: '#52565c',
      secondary: '#999999'
    },
    common: {
      black: '#222222'
    }
  }
};
const createTheme = function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.merge({}, baseOptions, themesOptions));
  if (config.responsiveFontSizes) {
    theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(theme);
  }
  return theme;
};

/***/ }),

/***/ "./src/theme/typography.js":
/*!*********************************!*\
  !*** ./src/theme/typography.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  h1: {
    fontWeight: 500,
    fontSize: 35
  },
  h2: {
    fontWeight: 500,
    fontSize: 30
  },
  h3: {
    fontWeight: 500,
    fontSize: 25
  },
  h4: {
    fontWeight: 500,
    fontSize: 20
  },
  h5: {
    fontWeight: 500,
    fontSize: 18
  },
  h6: {
    fontWeight: 500,
    fontSize: 16
  },
  overline: {
    fontWeight: 500
  },
  button: {
    textTransform: "capitalize",
    borderRadius: 27
  },
  body1: {
    fontSize: 12
  }
});

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/admin1/Desktop/Movie/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/admin1/Desktop/Movie/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/admin1/Desktop/Movie/src/index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main",5]]]);
//# sourceMappingURL=main.chunk.js.map