(this["webpackJsonpneed-a-web-developer-21043817"] = this["webpackJsonpneed-a-web-developer-21043817"] || []).push([[2],{

/***/ "./src/component/Page.js":
/*!*******************************!*\
  !*** ./src/component/Page.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/component/Page.js";


function Page(props) {
  const {
    title,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, children));
}

/***/ }),

/***/ "./src/views/pages/Home/Banner.js":
/*!****************************************!*\
  !*** ./src/views/pages/Home/Banner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/views/pages/Home/Banner.js";
//import React from 'react'
//import { Box, Typography, Container, Grid, Button } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core'

//const useStyles = makeStyles((theme) => ({
//  bannerbox: {
//    paddingTop: '170px',
//    paddingBottom: '70px',
//  },
//  texthead: {
//    fontSize: '50px',
//    fontWeight: '600',
//    color: '#343f52',
//    lineHeight: '1.15',
//    fontFamily: 'DM Serif Display',
//    width: '85%',
//    '@media(max-width:960px)': {
//      fontSize: '38px',
//      fontWeight: '600',
//      color: '#343f52',
//      lineHeight: '1.15',
//      fontFamily: 'DM Serif Display',
//      textAlign: 'center',
//      width: '100%',
//    },
//  },
//  subtext: {
//    color: '#60697B',
//    fontSize: '24px',
//    fontWeight: '300',
//    marginTop: '30px',
//    width: '85%',
//    '@media(max-width:960px)': {
//      color: '#60697B',
//      fontSize: '26px',
//      fontWeight: '300',
//      marginTop: '30px',
//      textAlign: 'center',
//      width: '100%',
//    },
//  },
//  button: {
//    backgroundColor: '#3f78e0',
//    color: '#ffffff',
//    border: '2px solid #3f78e0',
//    borderRadius: '40px',
//    minHeight: '58px',

//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'center',
//    fontSize: '16px',
//    lineHeight: '1.5',
//    fontWeight: '500',
//    transition: '0.26s ease',
//    minWidth: '159px',
//    paddingBottom: '3px',
//    textTransform: 'capitalize',
//    marginRight: '15px',
//    marginBottom: '10px',
//    marginTop: '27px',
//  },
//  buttonsecond: {
//    backgroundColor: '#ffffff',
//    color: '#3f78e0',
//    border: '2px solid #3f78e0',
//    borderRadius: '40px',
//    minHeight: '58px',

//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'center',
//    fontSize: '16px',
//    lineHeight: '1.5',
//    fontWeight: '500',
//    transition: '0.26s ease',
//    minWidth: '135px',
//    paddingBottom: '3px',
//    textTransform: 'capitalize',
//    marginRight: '15px',
//    marginBottom: '10px',
//    marginTop: '27px',
//  },
//  boxbutton: {
//    display: 'flex',
//    alignItems: 'center',
//    '@media(max-width:960px)': {
//      display: 'flex',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  },
//  imageresponse: {
//    width: '100%',
//    borderRadius: '5px',
//    '@media(max-width:960px)': {
//      width: '100%',
//      borderRadius: '5px',
//      maxWidth: '80%',
//    },
//  },
//}))
//function Banner() {
//  const classes = useStyles()
//  return (
//    <Box className={classes.bannerbox}>
//      <Container>
//        <Box>
//          <Grid container alignItems="center" spacing={10}>
//            <Grid item lg={6} md={6} sm={12} xs={12}>
//              <Box>
//                <Typography className={classes.texthead} textAlign="center">
//                  We bring solutions to make life easier for our customers.
//                </Typography>
//                <Typography className={classes.subtext} textAlign="center">
//                  We have considered our solutions to support every stage of
//                  your growth.
//                </Typography>
//              </Box>
//              <Box className={classes.boxbutton}>
//                <Box textAlign="center">
//                  <Button variant="contained" className={classes.button}>
//                    Explore Now
//                  </Button>
//                </Box>
//                <Box textAlign="center">
//                  <Button variant="outlined" className={classes.buttonsecond}>
//                    Free Trial
//                  </Button>
//                </Box>
//              </Box>
//            </Grid>
//            <Grid item lg={6} md={6} sm={12} xs={12}>
//              <Box textAlign="center">
//                <img
//                  src="images/about7.jpeg"
//                  alt=""
//                  className={classes.imageresponse}
//                />
//              </Box>
//            </Grid>
//          </Grid>
//        </Box>
//      </Container>
//    </Box>
//  )
//}

//export default Banner





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  bannerbox: {
    paddingTop: '170px',
    paddingBottom: '70px'
  },
  texthead: {
    fontSize: '50px',
    fontWeight: '600',
    color: '#343f52',
    lineHeight: '1.15',
    fontFamily: 'DM Serif Display',
    width: '85%',
    '@media(max-width:768px)': {
      fontSize: '42px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:375px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:414px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:960px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%'
    }
  },
  subtext: {
    color: '#60697B',
    fontSize: '24px',
    fontWeight: '400',
    marginTop: '30px',
    width: '85%',
    '@media(max-width:768px)': {
      color: '#60697B',
      fontSize: '29px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:375px)': {
      color: '#60697B',
      fontSize: '25px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:414px)': {
      color: '#60697B',
      fontSize: '23px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%'
    },
    '@media(max-width:960px)': {
      color: '#60697B',
      fontSize: '29px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%'
    }
  },
  button: {
    backgroundColor: '#3f78e0',
    color: '#ffffff',
    border: '2px solid #3f78e0',
    borderRadius: '40px',
    minHeight: '58px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '159px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px'
  },
  buttonsecond: {
    backgroundColor: '#ffffff',
    color: '#3f78e0',
    border: '2px solid #3f78e0',
    borderRadius: '40px',
    minHeight: '58px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '135px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px'
  },
  boxbutton: {
    display: 'flex',
    alignItems: 'center',
    '@media(max-width:960px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  imageresponse: {
    width: '100%',
    borderRadius: '5px',
    '@media(max-width:960px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '70%'
    },
    '@media(max-width:768px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '70%'
    },
    '@media(max-width:375px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '100%'
    },
    '@media(max-width:414px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '100%'
    }
  },
  imagebox: {
    width: '100%'

    //'&:hover': {
    //  '& img': {
    //    transform: ' scale(1.1)',
    //  },
    //},
    //'& img': {
    //  width: '100%',

    //  borderRadius: '5px',
    //  transition: '0.7s',
    //},
  }
}));

function Banner() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.bannerbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    alignItems: "center",
    spacing: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.texthead,
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 17
    }
  }, "We bring solutions to make life easier for our customers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.subtext,
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }, "We have considered our solutions to support every stage of your growth.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.boxbutton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 19
    }
  }, "Explore Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    className: classes.buttonsecond,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 19
    }
  }, "Free Trial")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    textAlign: "center",
    className: classes.imagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/about7.jpeg",
    alt: "",
    className: classes.imageresponse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/views/pages/Home/index.js":
/*!***************************************!*\
  !*** ./src/views/pages/Home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var src_component_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/component/Page */ "./src/component/Page.js");
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Banner */ "./src/views/pages/Home/Banner.js");
var _jsxFileName = "/Users/admin1/Desktop/Movie/src/views/pages/Home/index.js";




function Home(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_component_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Movies App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map