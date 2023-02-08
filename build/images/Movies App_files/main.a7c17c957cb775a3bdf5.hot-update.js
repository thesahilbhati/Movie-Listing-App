webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.a7c17c957cb775a3bdf5.hot-update.js.map