(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([[7,399],{

/***/ 7007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @material-ui/core@^4.9.4 (singleton) (fallback: ./node_modules/@material-ui/core/esm/index.js)
var index_js_ = __webpack_require__(1399);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^5.1.2 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(5819);
// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(5558);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
;// CONCATENATED MODULE: ./src/docs/Dialog.md
/* harmony default export */ const Dialog = ("Clicking the button below will render a Dialog using React `Portal`. This dialog component is being lazy loaded from the [app #2](http://localhost:3002/).\n");
// EXTERNAL MODULE: consume shared module (default) markdown-to-jsx@^7.0.0 (strict) (fallback: ./node_modules/markdown-to-jsx/dist/index.module.js)
var index_module_js_ = __webpack_require__(8110);
var index_module_js_default = /*#__PURE__*/__webpack_require__.n(index_module_js_);
;// CONCATENATED MODULE: ./src/Page.jsx


const useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
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
  return /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.AppBar, {
    position: "relative"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Toolbar, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6",
    noWrap: true
  }, title))), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.content
  }, children));
}

/* harmony default export */ const src_Page = (Page);
;// CONCATENATED MODULE: ./src/pages/dialog-page.jsx





const dialog_page_Dialog = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 117).then(__webpack_require__.t.bind(__webpack_require__, 4117, 23)));

const DialogPage = () => /*#__PURE__*/react_index_js_default().createElement(src_Page, {
  title: "Dialog Demo"
}, /*#__PURE__*/react_index_js_default().createElement((index_module_js_default()), null, Dialog), /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
  fallback: "Loading Dialog..."
}, /*#__PURE__*/react_index_js_default().createElement(dialog_page_Dialog, null)));

/* harmony default export */ const dialog_page = (DialogPage);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(9659);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(4670);
;// CONCATENATED MODULE: ./src/Markdown.jsx
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
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "h5"
      }
    },
    h2: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "h6"
      }
    },
    h3: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "subtitle1"
      }
    },
    h4: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true
      }
    },
    p: {
      component: Typography/* default */.Z,
      props: {
        paragraph: true
      }
    },
    a: {
      component: Link/* default */.Z
    },
    li: {
      component: (0,withStyles/* default */.Z)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react_index_js_default().createElement("li", {
        className: classes.listItem
      }, /*#__PURE__*/react_index_js_default().createElement(Typography/* default */.Z, _extends({
        component: "span"
      }, props))))
    },
    pre: {
      component: index_js_.Paper,
      props: {
        elevation: 0,
        style: {
          padding: "4px 8px"
        }
      }
    },
    blockquote: {
      component: (0,withStyles/* default */.Z)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react_index_js_default().createElement("blockquote", {
        className: classes.blockquote
      }, /*#__PURE__*/react_index_js_default().createElement(Typography/* default */.Z, _extends({
        component: "span"
      }, props))))
    }
  }
};
function Markdown(props) {
  return /*#__PURE__*/react_index_js_default().createElement((index_module_js_default()), _extends({
    options: options
  }, props));
}
;// CONCATENATED MODULE: ./src/docs/Welcome.md
/* harmony default export */ const Welcome = ("Welcome to the Module Federation Demo!\n\nClick any of the items on the left to get started.\n\nFeel free to leave me feedback: [https://github.com/module-federation/mfe-webpack-demo](https://github.com/module-federation/mfe-webpack-demo)\n");
// EXTERNAL MODULE: remote app_05/components
var components = __webpack_require__(7978);
;// CONCATENATED MODULE: ./src/pages/index-page.jsx






const IndexPage = () => /*#__PURE__*/react_index_js_default().createElement(src_Page, {
  title: "Module Federation Demo"
}, /*#__PURE__*/react_index_js_default().createElement("alert-box", {
  id: "info",
  content: "Alert from LitElement"
}), /*#__PURE__*/react_index_js_default().createElement(Markdown, null, Welcome), /*#__PURE__*/react_index_js_default().createElement("action-button", {
  foo: "Lit Element Action"
}));

/* harmony default export */ const index_page = (IndexPage);
;// CONCATENATED MODULE: ./src/docs/Tabs.md
/* harmony default export */ const Tabs = ("The following tab components are being imported remotely from \"bravo-app\".\n\nNotice that your browser's route is `/routing/<foo|bar>` depending on which tab is active.\n\nIf you open [http://localhost:3002](http://localhost:3002) you will see the same tab components at the root level.\n\nThe \"Bar\" tab also lazily renders the styled-component `Button` from the [UI Library](http://localhost:3003) demo only when rendered.\n");
;// CONCATENATED MODULE: ./src/pages/routing-page.jsx




const RoutedTabs = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 804).then(__webpack_require__.t.bind(__webpack_require__, 4804, 23)));

const RoutingPage = () => /*#__PURE__*/react_index_js_default().createElement(src_Page, {
  title: "Routing Demo"
}, /*#__PURE__*/react_index_js_default().createElement((index_module_js_default()), null, Tabs), /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
  fallback: "Loading Tabs..."
}, /*#__PURE__*/react_index_js_default().createElement(RoutedTabs, null)));

/* harmony default export */ const routing_page = (RoutingPage);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(9803);
// EXTERNAL MODULE: remote app_04/loadApp
var loadApp = __webpack_require__(6281);
var loadApp_default = /*#__PURE__*/__webpack_require__.n(loadApp);
;// CONCATENATED MODULE: ./src/pages/svelte-page.jsx





const svelte_page_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const SveltePage = () => {
  const [name, setName] = react_index_js_default().useState("federation");
  const mountEl = react_index_js_default().useRef();
  const classes = svelte_page_useStyles();
  react_index_js_default().useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      loadApp_default()("app_04", name);
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

  return /*#__PURE__*/react_index_js_default().createElement(src_Page, {
    title: "Svelte Demo"
  }, /*#__PURE__*/react_index_js_default().createElement("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/react_index_js_default().createElement(TextField/* default */.Z, {
    id: "standard-basic",
    label: "Name",
    value: name,
    onChange: e => handleChange(e)
  }), /*#__PURE__*/react_index_js_default().createElement("div", {
    id: "app_04",
    ref: mountEl
  })));
};

/* harmony default export */ const svelte_page = (SveltePage);
;// CONCATENATED MODULE: ./src/docs/UiLibrary.md
/* harmony default export */ const UiLibrary = ("Simple example showing host app and external component using separate CSS solutions.\n\nThis `Button` component can be found in [App #3](http://localhost:3003/).\n\nThis button is also used in the [routing demo](http://localhost:3001/#/routing/foo).\n");
;// CONCATENATED MODULE: ./src/pages/ui-library-page.jsx




const Button = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.t.bind(__webpack_require__, 5044, 23)));

const UiLibraryPage = () => /*#__PURE__*/react_index_js_default().createElement(src_Page, {
  title: "UI Library Demo"
}, /*#__PURE__*/react_index_js_default().createElement((index_module_js_default()), null, UiLibrary), /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
  fallback: "Loading Styled Button..."
}, /*#__PURE__*/react_index_js_default().createElement(Button, null, "\uD83D\uDC85 Button")));

/* harmony default export */ const ui_library_page = (UiLibraryPage);
;// CONCATENATED MODULE: ./src/Routes.jsx








const Routes = () => /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Switch, null, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react_index_js_default().createElement(index_page, null)), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/dialog",
  component: dialog_page
}), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/ui-library",
  component: ui_library_page
}), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/routing",
  component: routing_page
}), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/svelte",
  component: svelte_page
}));

/* harmony default export */ const src_Routes = (Routes);
;// CONCATENATED MODULE: ./src/SideNav.jsx



const drawerWidth = 240;
const SideNav_useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
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
  const classes = SideNav_useStyles();
  return /*#__PURE__*/react_index_js_default().createElement(index_js_.Drawer, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left"
  }, /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6"
  }, "SideNav")), /*#__PURE__*/react_index_js_default().createElement(index_js_.Divider, null), /*#__PURE__*/react_index_js_default().createElement(index_js_.List, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListSubheader, null, "Demo Pages"), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Main"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/ui-library"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "UI Library"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/dialog"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Dialog"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/svelte"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Svelte Page"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/routing/foo"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Routing"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListSubheader, null, "Apps"), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3001"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "App #1",
    secondary: "http://localhost:3001"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3002"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "App #2",
    secondary: "http://localhost:3002"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3003"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "App #3",
    secondary: "http://localhost:3003"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3004"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "App #4",
    secondary: "http://localhost:3004"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3005"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "App #5",
    secondary: "http://localhost:3005"
  }))));
}
;// CONCATENATED MODULE: ./src/App.jsx





const App_useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = App_useStyles();
  return /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.HashRouter, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.CssBaseline, null), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(SideNav, null), /*#__PURE__*/react_index_js_default().createElement(src_Routes, null)));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(2169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./src/bootstrap.jsx



react_dom_index_js_default().render( /*#__PURE__*/react_index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=7.js.map