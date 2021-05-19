(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./src/Routes.jsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNav */ "./src/SideNav.jsx");





const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CssBaseline, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SideNav__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Routes__WEBPACK_IMPORTED_MODULE_3__.default, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Markdown.jsx":
/*!**************************!*\
  !*** ./src/Markdown.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-jsx */ "webpack/sharing/consume/default/markdown-to-jsx/markdown-to-jsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  },
  blockquote: {
    margin: 0,
    padding: theme.spacing(2, 0, 2, 4),
    borderLeft: `${theme.spacing(1)}px solid ${theme.palette.divider}`,
    color: theme.palette.text.hint
  }
});

const options = {
  overrides: {
    h1: {
      component: _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default,
      props: {
        gutterBottom: true,
        variant: "h5"
      }
    },
    h2: {
      component: _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default,
      props: {
        gutterBottom: true,
        variant: "h6"
      }
    },
    h3: {
      component: _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default,
      props: {
        gutterBottom: true,
        variant: "subtitle1"
      }
    },
    h4: {
      component: _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true
      }
    },
    p: {
      component: _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default,
      props: {
        paragraph: true
      }
    },
    a: {
      component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default
    },
    li: {
      component: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        className: classes.listItem
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, _extends({
        component: "span"
      }, props))))
    },
    pre: {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Paper,
      props: {
        elevation: 0,
        style: {
          padding: "4px 8px"
        }
      }
    },
    blockquote: {
      component: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("blockquote", {
        className: classes.blockquote
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, _extends({
        component: "span"
      }, props))))
    }
  }
};
function Markdown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default()), _extends({
    options: options
  }, props));
}

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  root: {
    flex: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

function Page({
  title,
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.AppBar, {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/onboarding"
  }, "Onboarding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.content
  }, children));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_dialog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dialog-page */ "./src/pages/dialog-page.jsx");
/* harmony import */ var _pages_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index-page */ "./src/pages/index-page.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_routing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/routing-page */ "./src/pages/routing-page.jsx");
/* harmony import */ var _pages_svelte_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/svelte-page */ "./src/pages/svelte-page.jsx");
/* harmony import */ var _pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ui-library-page */ "./src/pages/ui-library-page.jsx");








const Routes = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_pages_index_page__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/dialog",
  component: _pages_dialog_page__WEBPACK_IMPORTED_MODULE_1__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/ui-library",
  component: _pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/routing",
  component: _pages_routing_page__WEBPACK_IMPORTED_MODULE_4__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/svelte",
  component: _pages_svelte_page__WEBPACK_IMPORTED_MODULE_5__.default
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ "./src/SideNav.jsx":
/*!*************************!*\
  !*** ./src/SideNav.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const drawerWidth = 240;
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: { ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function SideNav() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
    variant: "h6"
  }, "SideNav")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListSubheader, null, "Demo Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Main"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/ui-library"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "UI Library"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Dialog"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/svelte"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Svelte Page"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/routing/foo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Routing"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListSubheader, null, "Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3001"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #1",
    secondary: "http://localhost:3001"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3002"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #2",
    secondary: "http://localhost:3002"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3003"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #3",
    secondary: "http://localhost:3003"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3004"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #4",
    secondary: "http://localhost:3004"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3005"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #5",
    secondary: "http://localhost:3005"
  }))));
}

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom?2b58");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/dialog-page.jsx":
/*!***********************************!*\
  !*** ./src/pages/dialog-page.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docs_Dialog_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs/Dialog.md */ "./src/docs/Dialog.md");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-jsx */ "webpack/sharing/consume/default/markdown-to-jsx/markdown-to-jsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Page */ "./src/Page.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_app_02_Dialog").then(__webpack_require__.t.bind(__webpack_require__, /*! app_02/Dialog */ "webpack/container/remote/app_02/Dialog", 23)));

const DialogPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Page__WEBPACK_IMPORTED_MODULE_3__.default, {
  title: "Dialog Demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default()), null, _docs_Dialog_md__WEBPACK_IMPORTED_MODULE_1__.default), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Suspense), {
  fallback: "Loading Dialog..."
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Dialog, null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogPage);

/***/ }),

/***/ "./src/pages/index-page.jsx":
/*!**********************************!*\
  !*** ./src/pages/index-page.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Markdown */ "./src/Markdown.jsx");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Page.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_Welcome_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docs/Welcome.md */ "./src/docs/Welcome.md");
/* harmony import */ var app_05_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app_05/components */ "webpack/container/remote/app_05/components");
/* harmony import */ var app_05_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(app_05_components__WEBPACK_IMPORTED_MODULE_4__);






const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Page__WEBPACK_IMPORTED_MODULE_1__.default, {
  title: "Module Federation Demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("alert-box", {
  id: "info",
  content: "Alert from LitElement"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Markdown__WEBPACK_IMPORTED_MODULE_0__.default, null, _docs_Welcome_md__WEBPACK_IMPORTED_MODULE_3__.default), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("action-button", {
  foo: "Lit Element Action"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/pages/routing-page.jsx":
/*!************************************!*\
  !*** ./src/pages/routing-page.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-to-jsx */ "webpack/sharing/consume/default/markdown-to-jsx/markdown-to-jsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Page.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_Tabs_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docs/Tabs.md */ "./src/docs/Tabs.md");




const RoutedTabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_app_02_Tabs").then(__webpack_require__.t.bind(__webpack_require__, /*! app_02/Tabs */ "webpack/container/remote/app_02/Tabs", 23)));

const RoutingPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Page__WEBPACK_IMPORTED_MODULE_1__.default, {
  title: "Routing Demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0___default()), null, _docs_Tabs_md__WEBPACK_IMPORTED_MODULE_3__.default), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), {
  fallback: "Loading Tabs..."
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(RoutedTabs, null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoutingPage);

/***/ }),

/***/ "./src/pages/svelte-page.jsx":
/*!***********************************!*\
  !*** ./src/pages/svelte-page.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Page.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var app_04_loadApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app_04/loadApp */ "webpack/container/remote/app_04/loadApp");
/* harmony import */ var app_04_loadApp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app_04_loadApp__WEBPACK_IMPORTED_MODULE_2__);





const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const SveltePage = () => {
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("federation");
  const mountEl = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      app_04_loadApp__WEBPACK_IMPORTED_MODULE_2___default()("app_04", name);
    }
  });

  const handleChange = e => {
    setName(e.target.value);
    const event = new CustomEvent("change-name", {
      detail: {
        name: e.target.value
      },
      bubbles: true,
      cancelable: true,
      composed: true // makes the event jump shadow DOM boundary

    });
    let source = e.target || e.srcElement;
    source.dispatchEvent(event);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Page__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Svelte Demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__.default, {
    id: "standard-basic",
    label: "Name",
    value: name,
    onChange: e => handleChange(e)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "app_04",
    ref: mountEl
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SveltePage);

/***/ }),

/***/ "./src/pages/ui-library-page.jsx":
/*!***************************************!*\
  !*** ./src/pages/ui-library-page.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-to-jsx */ "webpack/sharing/consume/default/markdown-to-jsx/markdown-to-jsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Page.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_UiLibrary_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docs/UiLibrary.md */ "./src/docs/UiLibrary.md");




const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_app_03_Button").then(__webpack_require__.t.bind(__webpack_require__, /*! app_03/Button */ "webpack/container/remote/app_03/Button", 23)));

const UiLibraryPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Page__WEBPACK_IMPORTED_MODULE_1__.default, {
  title: "UI Library Demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0___default()), null, _docs_UiLibrary_md__WEBPACK_IMPORTED_MODULE_3__.default), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), {
  fallback: "Loading Styled Button..."
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Button, null, "\uD83D\uDC85 Button")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiLibraryPage);

/***/ }),

/***/ "./src/docs/Dialog.md":
/*!****************************!*\
  !*** ./src/docs/Dialog.md ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Clicking the button below will render a Dialog using React `Portal`. This dialog component is being lazy loaded from the [app #2](http://localhost:3002/).\n");

/***/ }),

/***/ "./src/docs/Tabs.md":
/*!**************************!*\
  !*** ./src/docs/Tabs.md ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("The following tab components are being imported remotely from \"bravo-app\".\n\nNotice that your browser's route is `/routing/<foo|bar>` depending on which tab is active.\n\nIf you open [http://localhost:3002](http://localhost:3002) you will see the same tab components at the root level.\n\nThe \"Bar\" tab also lazily renders the styled-component `Button` from the [UI Library](http://localhost:3003) demo only when rendered.\n");

/***/ }),

/***/ "./src/docs/UiLibrary.md":
/*!*******************************!*\
  !*** ./src/docs/UiLibrary.md ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Simple example showing host app and external component using separate CSS solutions.\n\nThis `Button` component can be found in [App #3](http://localhost:3003/).\n\nThis button is also used in the [routing demo](http://localhost:3001/#/routing/foo).\n");

/***/ }),

/***/ "./src/docs/Welcome.md":
/*!*****************************!*\
  !*** ./src/docs/Welcome.md ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Welcome to the Module Federation Demo!\n\nClick any of the items on the left to get started.\n\nFeel free to leave me feedback: [https://github.com/module-federation/mfe-webpack-demo](https://github.com/module-federation/mfe-webpack-demo)\n");

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_jsx.js.map