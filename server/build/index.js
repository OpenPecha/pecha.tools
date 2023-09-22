var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react3 = require("@remix-run/react"), import_recoil = require("recoil");

// app/style/global.css
var global_default = "/build/_assets/global-UZR35R2N.css";

// app/style/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6WSJ2DVE.css";

// app/component/context/socket.tsx
var import_react2 = require("react"), import_socket = require("socket.io-client"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), context = (0, import_react2.createContext)(void 0);
function useSocket() {
  return (0, import_react2.useContext)(context);
}
function connect() {
  return (0, import_socket.io)();
}
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(context.Provider, { value: socket, children }, void 0, !1, {
    fileName: "app/component/context/socket.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// app/root.tsx
var import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  },
  { rel: "stylesheet", href: tailwind_default }
];
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      "visit work.pecha.tools for old version,if error persist please contact",
      error,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function App() {
  let [socket, setSocket] = (0, import_react4.useState)();
  return (0, import_react4.useEffect)(() => {
    let socket2 = connect();
    return setSocket(socket2), () => {
      socket2.close();
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_recoil.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/demo.$tool.tsx
var demo_tool_exports = {};
__export(demo_tool_exports, {
  default: () => demo_tool_default,
  loader: () => loader,
  meta: () => meta
});
var import_react12 = require("@remix-run/react"), import_react13 = require("react");

// app/component/Header.tsx
var import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_react11 = require("@remix-run/react");

// app/component/Login.tsx
var import_react7 = require("@remix-run/react");

// app/component/hook/useAuth.ts
var import_react5 = require("@remix-run/react"), import_auth0_js = __toESM(require("auth0-js")), import_react6 = require("react");
function useAuth0(config) {
  let [auth0Client] = (0, import_react6.useState)(new import_auth0_js.default.WebAuth(config)), fetcher = (0, import_react5.useFetcher)();
  return {
    handleAuthentication: async () => new Promise((resolve, reject) => {
      auth0Client.parseHash((err, authResult) => {
        authResult && authResult.accessToken && authResult.idToken ? (fetcher.submit(
          { user: JSON.stringify(authResult.idTokenPayload) },
          {
            method: "POST"
          }
        ), resolve(authResult)) : err ? reject(err) : resolve("error");
      });
    }),
    loginWithGoogle: () => {
      auth0Client.authorize({
        connection: "google-oauth2"
      });
    },
    login: () => {
      auth0Client.authorize();
    },
    passwordlessLogin: async (email) => new Promise((resolve, reject) => {
      auth0Client.passwordlessStart(
        {
          connection: "email",
          send: "code",
          email
        },
        async function(err, res) {
          err ? reject(err) : resolve(res == null ? void 0 : res.email);
        }
      );
    }),
    verifyPasswordlessCode: async (email, code) => new Promise((resolve, reject) => {
      auth0Client.passwordlessLogin(
        {
          connection: "email",
          email,
          verificationCode: code
        },
        function(err, res) {
          err ? reject(err) : (console.log(...oo_oo("3203157401_0", res)), resolve(res));
        }
      );
    })
  };
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3c9133=_0x141d;function _0x4457(){var _0x1a9011=['ws://','negativeInfinity','current','_isUndefined','then','getPrototypeOf','elapsed','_WebSocketClass','function','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','bigint','getOwnPropertyNames','array','enumerable','parent','_connected',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.226\\\\node_modules",'127.0.0.1','null','time','performance','autoExpand','_connecting','date','now','hits','test','_type','_p_name','Boolean','location','getWebSocketClass','_connectToHostNow','_numberRegExp','_reconnectTimeout','value','gateway.docker.internal','2594053INDhbG','timeStamp','port','_addFunctionsNode','514255ulWozA','call','props','_processTreeNodeResult','toLowerCase','_getOwnPropertyNames','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','pop','Error','_WebSocket','timeEnd','serialize','_allowedToConnectOnSend','split','onclose',["localhost","127.0.0.1","example.cypress.io","kunsang","172.18.64.1","192.168.1.5"],'hasOwnProperty','allStrLength','level','disabledTrace','[object\\x20Set]','_keyStrRegExp','valueOf','noFunctions','_setNodeQueryPath','https://tinyurl.com/37x8b79t','autoExpandPropertyCount','_connectAttemptCount','reload','_Symbol','_objectToString','symbol','_ws','_addProperty','depth','_console_ninja','140334tbgEOk','','capped','15lpennf','_propertyName','totalStrLength','_isNegativeZero','match','process','create','_allowedToSend','_getOwnPropertyDescriptor','_undefined','_consoleNinjaAllowedToStart','bind','nuxt','_p_','setter','_hasMapOnItsPath','Buffer','node','unshift','perf_hooks','url','stackTraceLimit','indexOf','_webSocketErrorDocsLink','count','HTMLAllCollection','host','catch','elements','global','[object\\x20Map]','number','send','_setNodeExpressionPath','_treeNodePropertiesBeforeFullValue','_dateToString','isArray','defineProperty','type','disabledLog','_hasSymbolPropertyOnItsPath','_capIfString','stringify','prototype','toString','Set','error','index','_property','boolean','Number','_sendErrorMessage','log','forEach','slice','getOwnPropertyDescriptor','1.0.0','dockerizedApp','_treeNodePropertiesAfterFullValue','substr','reduceLimits','WebSocket','console','method','push','set','getOwnPropertySymbols','data','_cleanNode','_console_ninja_session','message','nodeModules','object','autoExpandMaxDepth','sort','1695378051073','sortProps','name','replace','6024789BpQSzV','default','onopen','_isPrimitiveType','get','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','nan','_inBrowser','pathToFileURL','6zVQsOG','length','resolveGetters','8ERwwWr','autoExpandPreviousObjects','onerror','_socket','_setNodePermissions','Map','expressionsToEvaluate','positiveInfinity','unknown','[object\\x20Array]','_isPrimitiveWrapperType','_maxConnectAttemptCount','_additionalMetadata','concat','versions','NEGATIVE_INFINITY','unref','join','undefined','autoExpandLimit','...','_disposeWebsocket','path','_getOwnPropertySymbols','strLength','_blacklistedProperty','_isMap','cappedElements','warn',':logPointId:','_attemptToReconnectShortly','_sortProps','isExpressionToEvaluate','string','_setNodeExpandableState','trace','Symbol','String','constructor','logger\\x20websocket\\x20error','_quotedRegExp','_addObjectProperty','10481470fvehOE','_addLoadNode','hrtime','RegExp','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','150784wCrfsu','_HTMLAllCollection','_isSet','349780pvWhxq','hostname','[object\\x20Date]','root_exp_id','_setNodeLabel','coverage'];_0x4457=function(){return _0x1a9011;};return _0x4457();}(function(_0x15448d,_0x4d1d8f){var _0x2402b5=_0x141d,_0x2caef9=_0x15448d();while(!![]){try{var _0x2d271c=-parseInt(_0x2402b5(0x2c3))/0x1+-parseInt(_0x2402b5(0x203))/0x2*(parseInt(_0x2402b5(0x206))/0x3)+-parseInt(_0x2402b5(0x291))/0x4+parseInt(_0x2402b5(0x294))/0x5*(-parseInt(_0x2402b5(0x25e))/0x6)+-parseInt(_0x2402b5(0x2bf))/0x7*(parseInt(_0x2402b5(0x261))/0x8)+parseInt(_0x2402b5(0x255))/0x9+parseInt(_0x2402b5(0x28b))/0xa;if(_0x2d271c===_0x4d1d8f)break;else _0x2caef9['push'](_0x2caef9['shift']());}catch(_0x3a2df0){_0x2caef9['push'](_0x2caef9['shift']());}}}(_0x4457,0x5b5e7));function _0x141d(_0x47fe73,_0x4e8749){var _0x445717=_0x4457();return _0x141d=function(_0x141d5f,_0x175711){_0x141d5f=_0x141d5f-0x1f2;var _0x1f44e9=_0x445717[_0x141d5f];return _0x1f44e9;},_0x141d(_0x47fe73,_0x4e8749);}var j=Object[_0x3c9133(0x20c)],X=Object[_0x3c9133(0x22b)],G=Object[_0x3c9133(0x23d)],ee=Object[_0x3c9133(0x2a5)],te=Object[_0x3c9133(0x29f)],ne=Object['prototype'][_0x3c9133(0x2d3)],re=(_0x2398a0,_0x6933a5,_0x4da329,_0x304873)=>{var _0x48a9cd=_0x3c9133;if(_0x6933a5&&typeof _0x6933a5==_0x48a9cd(0x24e)||typeof _0x6933a5==_0x48a9cd(0x2a2)){for(let _0x47c884 of ee(_0x6933a5))!ne[_0x48a9cd(0x2c4)](_0x2398a0,_0x47c884)&&_0x47c884!==_0x4da329&&X(_0x2398a0,_0x47c884,{'get':()=>_0x6933a5[_0x47c884],'enumerable':!(_0x304873=G(_0x6933a5,_0x47c884))||_0x304873[_0x48a9cd(0x2a7)]});}return _0x2398a0;},K=(_0x37afc2,_0xf06744,_0xe9c95b)=>(_0xe9c95b=_0x37afc2!=null?j(te(_0x37afc2)):{},re(_0xf06744||!_0x37afc2||!_0x37afc2['__es'+'Module']?X(_0xe9c95b,_0x3c9133(0x256),{'value':_0x37afc2,'enumerable':!0x0}):_0xe9c95b,_0x37afc2)),q=class{constructor(_0x8672cb,_0xab551,_0x1efc92,_0x92c543,_0x346931){var _0x2d259a=_0x3c9133;this[_0x2d259a(0x223)]=_0x8672cb,this[_0x2d259a(0x220)]=_0xab551,this[_0x2d259a(0x2c1)]=_0x1efc92,this[_0x2d259a(0x24d)]=_0x92c543,this[_0x2d259a(0x23f)]=_0x346931,this['_allowedToSend']=!0x0,this[_0x2d259a(0x2cf)]=!0x0,this['_connected']=!0x1,this[_0x2d259a(0x2b0)]=!0x1,this[_0x2d259a(0x25c)]=!this[_0x2d259a(0x223)]['process']?.[_0x2d259a(0x26f)]?.[_0x2d259a(0x217)],this[_0x2d259a(0x2a1)]=null,this[_0x2d259a(0x1fa)]=0x0,this[_0x2d259a(0x26c)]=0x14,this[_0x2d259a(0x21d)]=_0x2d259a(0x1f8),this[_0x2d259a(0x239)]=(this[_0x2d259a(0x25c)]?_0x2d259a(0x25a):_0x2d259a(0x2c9))+this[_0x2d259a(0x21d)];}async[_0x3c9133(0x2b9)](){var _0x599849=_0x3c9133;if(this[_0x599849(0x2a1)])return this[_0x599849(0x2a1)];let _0x593947;if(this['_inBrowser'])_0x593947=this[_0x599849(0x223)][_0x599849(0x243)];else{if(this[_0x599849(0x223)]['process']?.[_0x599849(0x2cc)])_0x593947=this[_0x599849(0x223)][_0x599849(0x20b)]?.['_WebSocket'];else try{let _0x15c7a3=await import(_0x599849(0x277));_0x593947=(await import((await import(_0x599849(0x21a)))[_0x599849(0x25d)](_0x15c7a3[_0x599849(0x272)](this['nodeModules'],'ws/index.js'))[_0x599849(0x232)]()))[_0x599849(0x256)];}catch{try{_0x593947=require(require(_0x599849(0x277))[_0x599849(0x272)](this[_0x599849(0x24d)],'ws'));}catch{throw new Error(_0x599849(0x2a3));}}}return this[_0x599849(0x2a1)]=_0x593947,_0x593947;}[_0x3c9133(0x2ba)](){var _0x531026=_0x3c9133;this['_connecting']||this[_0x531026(0x2a9)]||this[_0x531026(0x1fa)]>=this['_maxConnectAttemptCount']||(this[_0x531026(0x2cf)]=!0x1,this[_0x531026(0x2b0)]=!0x0,this[_0x531026(0x1fa)]++,this[_0x531026(0x1ff)]=new Promise((_0x2f35b3,_0x149960)=>{var _0x599995=_0x531026;this[_0x599995(0x2b9)]()[_0x599995(0x29e)](_0x451411=>{var _0x2ae357=_0x599995;let _0x40ed5d=new _0x451411(_0x2ae357(0x29a)+(!this[_0x2ae357(0x25c)]&&this[_0x2ae357(0x23f)]?_0x2ae357(0x2be):this['host'])+':'+this['port']);_0x40ed5d[_0x2ae357(0x263)]=()=>{var _0x208359=_0x2ae357;this[_0x208359(0x20d)]=!0x1,this[_0x208359(0x276)](_0x40ed5d),this[_0x208359(0x27f)](),_0x149960(new Error(_0x208359(0x288)));},_0x40ed5d[_0x2ae357(0x257)]=()=>{var _0x5e1ec5=_0x2ae357;this['_inBrowser']||_0x40ed5d[_0x5e1ec5(0x264)]&&_0x40ed5d[_0x5e1ec5(0x264)][_0x5e1ec5(0x271)]&&_0x40ed5d[_0x5e1ec5(0x264)]['unref'](),_0x2f35b3(_0x40ed5d);},_0x40ed5d[_0x2ae357(0x2d1)]=()=>{var _0x93eb0c=_0x2ae357;this['_allowedToConnectOnSend']=!0x0,this[_0x93eb0c(0x276)](_0x40ed5d),this['_attemptToReconnectShortly']();},_0x40ed5d['onmessage']=_0x2dbee7=>{var _0x1f98a5=_0x2ae357;try{_0x2dbee7&&_0x2dbee7['data']&&this[_0x1f98a5(0x25c)]&&JSON['parse'](_0x2dbee7[_0x1f98a5(0x249)])[_0x1f98a5(0x245)]===_0x1f98a5(0x1fb)&&this[_0x1f98a5(0x223)][_0x1f98a5(0x2b8)]['reload']();}catch{}};})[_0x599995(0x29e)](_0x7c812b=>(this[_0x599995(0x2a9)]=!0x0,this['_connecting']=!0x1,this[_0x599995(0x2cf)]=!0x1,this[_0x599995(0x20d)]=!0x0,this[_0x599995(0x1fa)]=0x0,_0x7c812b))[_0x599995(0x221)](_0xdf3dec=>(this['_connected']=!0x1,this[_0x599995(0x2b0)]=!0x1,console['warn'](_0x599995(0x290)+this[_0x599995(0x21d)]),_0x149960(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0xdf3dec&&_0xdf3dec[_0x599995(0x24c)])))));}));}['_disposeWebsocket'](_0x2c179d){var _0x275dab=_0x3c9133;this[_0x275dab(0x2a9)]=!0x1,this[_0x275dab(0x2b0)]=!0x1;try{_0x2c179d['onclose']=null,_0x2c179d[_0x275dab(0x263)]=null,_0x2c179d['onopen']=null;}catch{}try{_0x2c179d['readyState']<0x2&&_0x2c179d['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x466c87=_0x3c9133;clearTimeout(this[_0x466c87(0x2bc)]),!(this[_0x466c87(0x1fa)]>=this[_0x466c87(0x26c)])&&(this[_0x466c87(0x2bc)]=setTimeout(()=>{var _0x27bf95=_0x466c87;this[_0x27bf95(0x2a9)]||this[_0x27bf95(0x2b0)]||(this[_0x27bf95(0x2ba)](),this[_0x27bf95(0x1ff)]?.[_0x27bf95(0x221)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x466c87(0x2bc)][_0x466c87(0x271)]&&this[_0x466c87(0x2bc)][_0x466c87(0x271)]());}async[_0x3c9133(0x226)](_0x1110d1){var _0x5c9748=_0x3c9133;try{if(!this[_0x5c9748(0x20d)])return;this[_0x5c9748(0x2cf)]&&this['_connectToHostNow'](),(await this[_0x5c9748(0x1ff)])[_0x5c9748(0x226)](JSON[_0x5c9748(0x230)](_0x1110d1));}catch(_0x46d70e){console[_0x5c9748(0x27d)](this[_0x5c9748(0x239)]+':\\x20'+(_0x46d70e&&_0x46d70e[_0x5c9748(0x24c)])),this[_0x5c9748(0x20d)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x18b646,_0x49fcbc,_0x37e734,_0x306a5a,_0x517851,_0x1060ef){var _0x25a6be=_0x3c9133;let _0x1620dd=_0x37e734[_0x25a6be(0x2d0)](',')['map'](_0x459cbc=>{var _0xe53167=_0x25a6be;try{_0x18b646[_0xe53167(0x24b)]||((_0x517851==='next.js'||_0x517851==='remix'||_0x517851==='astro')&&(_0x517851+=_0x18b646[_0xe53167(0x20b)]?.[_0xe53167(0x26f)]?.[_0xe53167(0x217)]?'\\x20server':'\\x20browser'),_0x18b646[_0xe53167(0x24b)]={'id':+new Date(),'tool':_0x517851});let _0x55d5ad=new q(_0x18b646,_0x49fcbc,_0x459cbc,_0x306a5a,_0x1060ef);return _0x55d5ad[_0xe53167(0x226)][_0xe53167(0x211)](_0x55d5ad);}catch(_0x59a135){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x59a135&&_0x59a135[_0xe53167(0x24c)]),()=>{};}});return _0x468b7d=>_0x1620dd['forEach'](_0x11eeb2=>_0x11eeb2(_0x468b7d));}function W(_0x523a41){var _0x1408d4=_0x3c9133;let _0x6058a7=function(_0x36f71a,_0x4a38c9){return _0x4a38c9-_0x36f71a;},_0x3f3fba;if(_0x523a41[_0x1408d4(0x2ae)])_0x3f3fba=function(){var _0x1d6210=_0x1408d4;return _0x523a41['performance'][_0x1d6210(0x2b2)]();};else{if(_0x523a41['process']&&_0x523a41['process'][_0x1408d4(0x28d)])_0x3f3fba=function(){var _0x521c7a=_0x1408d4;return _0x523a41[_0x521c7a(0x20b)]['hrtime']();},_0x6058a7=function(_0x5eeb23,_0xaa6114){return 0x3e8*(_0xaa6114[0x0]-_0x5eeb23[0x0])+(_0xaa6114[0x1]-_0x5eeb23[0x1])/0xf4240;};else try{let {performance:_0xf6f376}=require(_0x1408d4(0x219));_0x3f3fba=function(){var _0x5508cf=_0x1408d4;return _0xf6f376[_0x5508cf(0x2b2)]();};}catch{_0x3f3fba=function(){return+new Date();};}}return{'elapsed':_0x6058a7,'timeStamp':_0x3f3fba,'now':()=>Date[_0x1408d4(0x2b2)]()};}function Y(_0x46555f,_0x58279d,_0x2756cb){var _0x312a96=_0x3c9133;if(_0x46555f[_0x312a96(0x210)]!==void 0x0)return _0x46555f[_0x312a96(0x210)];let _0x1dc510=_0x46555f['process']?.['versions']?.['node'];return _0x1dc510&&_0x2756cb===_0x312a96(0x212)?_0x46555f['_consoleNinjaAllowedToStart']=!0x1:_0x46555f[_0x312a96(0x210)]=_0x1dc510||!_0x58279d||_0x46555f[_0x312a96(0x2b8)]?.[_0x312a96(0x295)]&&_0x58279d['includes'](_0x46555f[_0x312a96(0x2b8)][_0x312a96(0x295)]),_0x46555f['_consoleNinjaAllowedToStart'];}function Q(_0x283aea,_0x39cf15,_0x124182,_0x573e84){var _0x82d3ef=_0x3c9133;_0x283aea=_0x283aea,_0x39cf15=_0x39cf15,_0x124182=_0x124182,_0x573e84=_0x573e84;let _0x497d20=W(_0x283aea),_0x1da085=_0x497d20[_0x82d3ef(0x2a0)],_0x160e79=_0x497d20[_0x82d3ef(0x2c0)];class _0x376622{constructor(){var _0x14a269=_0x82d3ef;this[_0x14a269(0x1f4)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x14a269(0x2bb)]=/^(0|[1-9][0-9]*)$/,this[_0x14a269(0x289)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x283aea[_0x14a269(0x273)],this[_0x14a269(0x292)]=_0x283aea[_0x14a269(0x21f)],this[_0x14a269(0x20e)]=Object[_0x14a269(0x23d)],this['_getOwnPropertyNames']=Object[_0x14a269(0x2a5)],this['_Symbol']=_0x283aea[_0x14a269(0x285)],this['_regExpToString']=RegExp['prototype'][_0x14a269(0x232)],this[_0x14a269(0x229)]=Date[_0x14a269(0x231)][_0x14a269(0x232)];}[_0x82d3ef(0x2ce)](_0x430997,_0x5ed867,_0x38e567,_0x29b4f2){var _0x3f7922=_0x82d3ef,_0x519cdf=this,_0x17fb1f=_0x38e567['autoExpand'];function _0x4d3a44(_0x5574f6,_0x594922,_0x543366){var _0x282722=_0x141d;_0x594922[_0x282722(0x22c)]=_0x282722(0x269),_0x594922['error']=_0x5574f6[_0x282722(0x24c)],_0x5aacf3=_0x543366[_0x282722(0x217)][_0x282722(0x29c)],_0x543366[_0x282722(0x217)][_0x282722(0x29c)]=_0x594922,_0x519cdf[_0x282722(0x228)](_0x594922,_0x543366);}try{_0x38e567[_0x3f7922(0x2d5)]++,_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x262)]['push'](_0x5ed867);var _0x946d76,_0x272312,_0x2a5d69,_0x3b2a6d,_0x9536ba=[],_0x402813=[],_0xba98fd,_0x813322=this[_0x3f7922(0x2b5)](_0x5ed867),_0x46b8eb=_0x813322===_0x3f7922(0x2a6),_0x37c552=!0x1,_0x435d39=_0x813322===_0x3f7922(0x2a2),_0x97b195=this[_0x3f7922(0x258)](_0x813322),_0x190c40=this['_isPrimitiveWrapperType'](_0x813322),_0x15f00e=_0x97b195||_0x190c40,_0xe2d20d={},_0x501a34=0x0,_0x188067=!0x1,_0x5aacf3,_0x55053d=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38e567[_0x3f7922(0x201)]){if(_0x46b8eb){if(_0x272312=_0x5ed867['length'],_0x272312>_0x38e567['elements']){for(_0x2a5d69=0x0,_0x3b2a6d=_0x38e567[_0x3f7922(0x222)],_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813['push'](_0x519cdf[_0x3f7922(0x200)](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));_0x430997[_0x3f7922(0x27c)]=!0x0;}else{for(_0x2a5d69=0x0,_0x3b2a6d=_0x272312,_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813[_0x3f7922(0x246)](_0x519cdf['_addProperty'](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));}_0x38e567['autoExpandPropertyCount']+=_0x402813['length'];}if(!(_0x813322===_0x3f7922(0x2ac)||_0x813322==='undefined')&&!_0x97b195&&_0x813322!=='String'&&_0x813322!==_0x3f7922(0x216)&&_0x813322!==_0x3f7922(0x2a4)){var _0x35bcd1=_0x29b4f2['props']||_0x38e567[_0x3f7922(0x2c5)];if(this[_0x3f7922(0x293)](_0x5ed867)?(_0x946d76=0x0,_0x5ed867[_0x3f7922(0x23b)](function(_0xa8d979){var _0xa3115a=_0x3f7922;if(_0x501a34++,_0x38e567[_0xa3115a(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567[_0xa3115a(0x281)]&&_0x38e567[_0xa3115a(0x2af)]&&_0x38e567[_0xa3115a(0x1f9)]>_0x38e567[_0xa3115a(0x274)]){_0x188067=!0x0;return;}_0x402813[_0xa3115a(0x246)](_0x519cdf[_0xa3115a(0x200)](_0x9536ba,_0x5ed867,_0xa3115a(0x233),_0x946d76++,_0x38e567,function(_0x33bd9d){return function(){return _0x33bd9d;};}(_0xa8d979)));})):this[_0x3f7922(0x27b)](_0x5ed867)&&_0x5ed867[_0x3f7922(0x23b)](function(_0x4a5ed6,_0x1099c1){var _0x792007=_0x3f7922;if(_0x501a34++,_0x38e567[_0x792007(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567['isExpressionToEvaluate']&&_0x38e567[_0x792007(0x2af)]&&_0x38e567[_0x792007(0x1f9)]>_0x38e567['autoExpandLimit']){_0x188067=!0x0;return;}var _0x192cec=_0x1099c1[_0x792007(0x232)]();_0x192cec[_0x792007(0x25f)]>0x64&&(_0x192cec=_0x192cec[_0x792007(0x23c)](0x0,0x64)+_0x792007(0x275)),_0x402813[_0x792007(0x246)](_0x519cdf[_0x792007(0x200)](_0x9536ba,_0x5ed867,_0x792007(0x266),_0x192cec,_0x38e567,function(_0x26f73a){return function(){return _0x26f73a;};}(_0x4a5ed6)));}),!_0x37c552){try{for(_0xba98fd in _0x5ed867)if(!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x1f9)]>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}catch{}if(_0xe2d20d['_p_length']=!0x0,_0x435d39&&(_0xe2d20d[_0x3f7922(0x2b6)]=!0x0),!_0x188067){var _0x1a1b9d=[][_0x3f7922(0x26e)](this[_0x3f7922(0x2c8)](_0x5ed867))[_0x3f7922(0x26e)](this[_0x3f7922(0x278)](_0x5ed867));for(_0x946d76=0x0,_0x272312=_0x1a1b9d[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)if(_0xba98fd=_0x1a1b9d[_0x946d76],!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd[_0x3f7922(0x232)]()))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)&&!_0xe2d20d['_p_'+_0xba98fd[_0x3f7922(0x232)]()]){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567['autoExpandPropertyCount']>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}}}}if(_0x430997[_0x3f7922(0x22c)]=_0x813322,_0x15f00e?(_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x1f5)](),this[_0x3f7922(0x22f)](_0x813322,_0x430997,_0x38e567,_0x29b4f2)):_0x813322==='date'?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x229)][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x2a4)?_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x232)]():_0x813322===_0x3f7922(0x28e)?_0x430997[_0x3f7922(0x2bd)]=this['_regExpToString'][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x1fe)&&this[_0x3f7922(0x1fc)]?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x1fc)][_0x3f7922(0x231)]['toString'][_0x3f7922(0x2c4)](_0x5ed867):!_0x38e567[_0x3f7922(0x201)]&&!(_0x813322===_0x3f7922(0x2ac)||_0x813322===_0x3f7922(0x273))&&(delete _0x430997[_0x3f7922(0x2bd)],_0x430997[_0x3f7922(0x205)]=!0x0),_0x188067&&(_0x430997['cappedProps']=!0x0),_0x5aacf3=_0x38e567[_0x3f7922(0x217)][_0x3f7922(0x29c)],_0x38e567[_0x3f7922(0x217)]['current']=_0x430997,this[_0x3f7922(0x228)](_0x430997,_0x38e567),_0x402813[_0x3f7922(0x25f)]){for(_0x946d76=0x0,_0x272312=_0x402813[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)_0x402813[_0x946d76](_0x946d76);}_0x9536ba[_0x3f7922(0x25f)]&&(_0x430997[_0x3f7922(0x2c5)]=_0x9536ba);}catch(_0x43b2a9){_0x4d3a44(_0x43b2a9,_0x430997,_0x38e567);}return this[_0x3f7922(0x26d)](_0x5ed867,_0x430997),this['_treeNodePropertiesAfterFullValue'](_0x430997,_0x38e567),_0x38e567['node'][_0x3f7922(0x29c)]=_0x5aacf3,_0x38e567[_0x3f7922(0x2d5)]--,_0x38e567[_0x3f7922(0x2af)]=_0x17fb1f,_0x38e567['autoExpand']&&_0x38e567[_0x3f7922(0x262)][_0x3f7922(0x2ca)](),_0x430997;}['_getOwnPropertySymbols'](_0x366a9c){var _0x585266=_0x82d3ef;return Object[_0x585266(0x248)]?Object[_0x585266(0x248)](_0x366a9c):[];}[_0x82d3ef(0x293)](_0x5140c0){var _0x9cd60e=_0x82d3ef;return!!(_0x5140c0&&_0x283aea[_0x9cd60e(0x233)]&&this[_0x9cd60e(0x1fd)](_0x5140c0)===_0x9cd60e(0x1f3)&&_0x5140c0[_0x9cd60e(0x23b)]);}[_0x82d3ef(0x27a)](_0xf45399,_0xf2b8af,_0x2b9a1e){var _0x4c2f38=_0x82d3ef;return _0x2b9a1e[_0x4c2f38(0x1f6)]?typeof _0xf45399[_0xf2b8af]=='function':!0x1;}[_0x82d3ef(0x2b5)](_0xba0824){var _0x4aa215=_0x82d3ef,_0x21a20d='';return _0x21a20d=typeof _0xba0824,_0x21a20d==='object'?this[_0x4aa215(0x1fd)](_0xba0824)===_0x4aa215(0x26a)?_0x21a20d=_0x4aa215(0x2a6):this['_objectToString'](_0xba0824)===_0x4aa215(0x296)?_0x21a20d=_0x4aa215(0x2b1):this[_0x4aa215(0x1fd)](_0xba0824)==='[object\\x20BigInt]'?_0x21a20d='bigint':_0xba0824===null?_0x21a20d=_0x4aa215(0x2ac):_0xba0824['constructor']&&(_0x21a20d=_0xba0824[_0x4aa215(0x287)][_0x4aa215(0x253)]||_0x21a20d):_0x21a20d===_0x4aa215(0x273)&&this['_HTMLAllCollection']&&_0xba0824 instanceof this[_0x4aa215(0x292)]&&(_0x21a20d=_0x4aa215(0x21f)),_0x21a20d;}[_0x82d3ef(0x1fd)](_0x5eac21){var _0x279535=_0x82d3ef;return Object[_0x279535(0x231)]['toString'][_0x279535(0x2c4)](_0x5eac21);}[_0x82d3ef(0x258)](_0x2bea3c){var _0x42a112=_0x82d3ef;return _0x2bea3c===_0x42a112(0x237)||_0x2bea3c===_0x42a112(0x282)||_0x2bea3c==='number';}[_0x82d3ef(0x26b)](_0x2a2b90){var _0x493ad6=_0x82d3ef;return _0x2a2b90===_0x493ad6(0x2b7)||_0x2a2b90===_0x493ad6(0x286)||_0x2a2b90===_0x493ad6(0x238);}[_0x82d3ef(0x200)](_0x3d05fd,_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a){var _0xfcb414=this;return function(_0x337419){var _0x41a52f=_0x141d,_0x152f0e=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x29c)],_0x49324f=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)],_0x317843=_0x57063a[_0x41a52f(0x217)]['parent'];_0x57063a['node'][_0x41a52f(0x2a8)]=_0x152f0e,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=typeof _0x501eb4==_0x41a52f(0x225)?_0x501eb4:_0x337419,_0x3d05fd['push'](_0xfcb414['_property'](_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a)),_0x57063a[_0x41a52f(0x217)]['parent']=_0x317843,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=_0x49324f;};}[_0x82d3ef(0x28a)](_0x2a9560,_0x3c147e,_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed){var _0x44bf9c=_0x82d3ef,_0x28ea12=this;return _0x3c147e['_p_'+_0x17da26[_0x44bf9c(0x232)]()]=!0x0,function(_0x1db51e){var _0x3337c8=_0x44bf9c,_0x4f79c3=_0x5a1822[_0x3337c8(0x217)]['current'],_0x5017b2=_0x5a1822['node'][_0x3337c8(0x235)],_0x55242c=_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)];_0x5a1822['node'][_0x3337c8(0x2a8)]=_0x4f79c3,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x1db51e,_0x2a9560[_0x3337c8(0x246)](_0x28ea12[_0x3337c8(0x236)](_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed)),_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)]=_0x55242c,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x5017b2;};}[_0x82d3ef(0x236)](_0x4096b8,_0x385f4d,_0x542397,_0x49771e,_0x45c7e6){var _0x150a08=_0x82d3ef,_0x4fdf64=this;_0x45c7e6||(_0x45c7e6=function(_0x27c1dc,_0x299b14){return _0x27c1dc[_0x299b14];});var _0x15810a=_0x542397[_0x150a08(0x232)](),_0x4650d8=_0x49771e[_0x150a08(0x267)]||{},_0x1375ca=_0x49771e[_0x150a08(0x201)],_0x1b5ac9=_0x49771e[_0x150a08(0x281)];try{var _0xcbac97=this['_isMap'](_0x4096b8),_0x2e4d81=_0x15810a;_0xcbac97&&_0x2e4d81[0x0]==='\\x27'&&(_0x2e4d81=_0x2e4d81[_0x150a08(0x241)](0x1,_0x2e4d81['length']-0x2));var _0xa4f4c9=_0x49771e['expressionsToEvaluate']=_0x4650d8[_0x150a08(0x213)+_0x2e4d81];_0xa4f4c9&&(_0x49771e[_0x150a08(0x201)]=_0x49771e[_0x150a08(0x201)]+0x1),_0x49771e[_0x150a08(0x281)]=!!_0xa4f4c9;var _0x430b32=typeof _0x542397==_0x150a08(0x1fe),_0x55fb91={'name':_0x430b32||_0xcbac97?_0x15810a:this[_0x150a08(0x207)](_0x15810a)};if(_0x430b32&&(_0x55fb91['symbol']=!0x0),!(_0x385f4d===_0x150a08(0x2a6)||_0x385f4d===_0x150a08(0x2cb))){var _0x1e9d6a=this[_0x150a08(0x20e)](_0x4096b8,_0x542397);if(_0x1e9d6a&&(_0x1e9d6a[_0x150a08(0x247)]&&(_0x55fb91[_0x150a08(0x214)]=!0x0),_0x1e9d6a[_0x150a08(0x259)]&&!_0xa4f4c9&&!_0x49771e['resolveGetters']))return _0x55fb91['getter']=!0x0,this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e),_0x55fb91;}var _0x386380;try{_0x386380=_0x45c7e6(_0x4096b8,_0x542397);}catch(_0x349a0f){return _0x55fb91={'name':_0x15810a,'type':_0x150a08(0x269),'error':_0x349a0f[_0x150a08(0x24c)]},this['_processTreeNodeResult'](_0x55fb91,_0x49771e),_0x55fb91;}var _0x11f10e=this[_0x150a08(0x2b5)](_0x386380),_0x4ba23f=this[_0x150a08(0x258)](_0x11f10e);if(_0x55fb91[_0x150a08(0x22c)]=_0x11f10e,_0x4ba23f)this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){_0x55fb91['value']=_0x386380['valueOf'](),!_0xa4f4c9&&_0x4fdf64['_capIfString'](_0x11f10e,_0x55fb91,_0x49771e,{});});else{var _0x1813ce=_0x49771e['autoExpand']&&_0x49771e['level']<_0x49771e[_0x150a08(0x24f)]&&_0x49771e[_0x150a08(0x262)][_0x150a08(0x21c)](_0x386380)<0x0&&_0x11f10e!==_0x150a08(0x2a2)&&_0x49771e[_0x150a08(0x1f9)]<_0x49771e[_0x150a08(0x274)];_0x1813ce||_0x49771e[_0x150a08(0x2d5)]<_0x1375ca||_0xa4f4c9?(this[_0x150a08(0x2ce)](_0x55fb91,_0x386380,_0x49771e,_0xa4f4c9||{}),this[_0x150a08(0x26d)](_0x386380,_0x55fb91)):this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){var _0x26a900=_0x150a08;_0x11f10e===_0x26a900(0x2ac)||_0x11f10e===_0x26a900(0x273)||(delete _0x55fb91['value'],_0x55fb91['capped']=!0x0);});}return _0x55fb91;}finally{_0x49771e[_0x150a08(0x267)]=_0x4650d8,_0x49771e[_0x150a08(0x201)]=_0x1375ca,_0x49771e['isExpressionToEvaluate']=_0x1b5ac9;}}['_capIfString'](_0x2264ea,_0x5da6a3,_0x58e8b4,_0x43bece){var _0x2c13b5=_0x82d3ef,_0x4e27a8=_0x43bece[_0x2c13b5(0x279)]||_0x58e8b4[_0x2c13b5(0x279)];if((_0x2264ea==='string'||_0x2264ea==='String')&&_0x5da6a3[_0x2c13b5(0x2bd)]){let _0x5b5c75=_0x5da6a3[_0x2c13b5(0x2bd)][_0x2c13b5(0x25f)];_0x58e8b4[_0x2c13b5(0x2d4)]+=_0x5b5c75,_0x58e8b4[_0x2c13b5(0x2d4)]>_0x58e8b4[_0x2c13b5(0x208)]?(_0x5da6a3[_0x2c13b5(0x205)]='',delete _0x5da6a3[_0x2c13b5(0x2bd)]):_0x5b5c75>_0x4e27a8&&(_0x5da6a3[_0x2c13b5(0x205)]=_0x5da6a3['value'][_0x2c13b5(0x241)](0x0,_0x4e27a8),delete _0x5da6a3[_0x2c13b5(0x2bd)]);}}[_0x82d3ef(0x27b)](_0x36efce){var _0x162ae2=_0x82d3ef;return!!(_0x36efce&&_0x283aea[_0x162ae2(0x266)]&&this[_0x162ae2(0x1fd)](_0x36efce)===_0x162ae2(0x224)&&_0x36efce[_0x162ae2(0x23b)]);}['_propertyName'](_0x414219){var _0x3fe189=_0x82d3ef;if(_0x414219[_0x3fe189(0x20a)](/^\\d+$/))return _0x414219;var _0x3c2b8f;try{_0x3c2b8f=JSON['stringify'](''+_0x414219);}catch{_0x3c2b8f='\\x22'+this['_objectToString'](_0x414219)+'\\x22';}return _0x3c2b8f['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x241)](0x1,_0x3c2b8f[_0x3fe189(0x25f)]-0x2):_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x254)](/'/g,'\\x5c\\x27')[_0x3fe189(0x254)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3c2b8f;}[_0x82d3ef(0x2c6)](_0xf30c35,_0x46dea0,_0x5f14fe,_0x25d67c){var _0x16c886=_0x82d3ef;this[_0x16c886(0x228)](_0xf30c35,_0x46dea0),_0x25d67c&&_0x25d67c(),this['_additionalMetadata'](_0x5f14fe,_0xf30c35),this[_0x16c886(0x240)](_0xf30c35,_0x46dea0);}[_0x82d3ef(0x228)](_0x186259,_0x219a92){var _0x1e8d13=_0x82d3ef;this[_0x1e8d13(0x28f)](_0x186259,_0x219a92),this[_0x1e8d13(0x1f7)](_0x186259,_0x219a92),this[_0x1e8d13(0x227)](_0x186259,_0x219a92),this[_0x1e8d13(0x265)](_0x186259,_0x219a92);}['_setNodeId'](_0x5f2afc,_0x330b7c){}[_0x82d3ef(0x1f7)](_0x4786f8,_0x5e5301){}[_0x82d3ef(0x298)](_0x586b9e,_0x5e62f3){}[_0x82d3ef(0x29d)](_0x2e0a84){var _0x420aa1=_0x82d3ef;return _0x2e0a84===this[_0x420aa1(0x20f)];}['_treeNodePropertiesAfterFullValue'](_0x46ac19,_0x54b762){var _0x2f2625=_0x82d3ef;this['_setNodeLabel'](_0x46ac19,_0x54b762),this[_0x2f2625(0x283)](_0x46ac19),_0x54b762[_0x2f2625(0x252)]&&this[_0x2f2625(0x280)](_0x46ac19),this[_0x2f2625(0x2c2)](_0x46ac19,_0x54b762),this[_0x2f2625(0x28c)](_0x46ac19,_0x54b762),this[_0x2f2625(0x24a)](_0x46ac19);}[_0x82d3ef(0x26d)](_0x450fbe,_0x38f13b){var _0x1bab72=_0x82d3ef;let _0x3a36d5;try{_0x283aea[_0x1bab72(0x244)]&&(_0x3a36d5=_0x283aea['console'][_0x1bab72(0x234)],_0x283aea[_0x1bab72(0x244)][_0x1bab72(0x234)]=function(){}),_0x450fbe&&typeof _0x450fbe[_0x1bab72(0x25f)]==_0x1bab72(0x225)&&(_0x38f13b[_0x1bab72(0x25f)]=_0x450fbe['length']);}catch{}finally{_0x3a36d5&&(_0x283aea['console'][_0x1bab72(0x234)]=_0x3a36d5);}if(_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x225)||_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x238)){if(isNaN(_0x38f13b[_0x1bab72(0x2bd)]))_0x38f13b[_0x1bab72(0x25b)]=!0x0,delete _0x38f13b['value'];else switch(_0x38f13b[_0x1bab72(0x2bd)]){case Number['POSITIVE_INFINITY']:_0x38f13b[_0x1bab72(0x268)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case Number[_0x1bab72(0x270)]:_0x38f13b[_0x1bab72(0x29b)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case 0x0:this['_isNegativeZero'](_0x38f13b[_0x1bab72(0x2bd)])&&(_0x38f13b['negativeZero']=!0x0);break;}}else _0x38f13b['type']===_0x1bab72(0x2a2)&&typeof _0x450fbe['name']==_0x1bab72(0x282)&&_0x450fbe[_0x1bab72(0x253)]&&_0x38f13b['name']&&_0x450fbe['name']!==_0x38f13b['name']&&(_0x38f13b['funcName']=_0x450fbe[_0x1bab72(0x253)]);}[_0x82d3ef(0x209)](_0x120d09){var _0x44f14c=_0x82d3ef;return 0x1/_0x120d09===Number[_0x44f14c(0x270)];}['_sortProps'](_0x1bb666){var _0x51b398=_0x82d3ef;!_0x1bb666['props']||!_0x1bb666[_0x51b398(0x2c5)]['length']||_0x1bb666['type']===_0x51b398(0x2a6)||_0x1bb666[_0x51b398(0x22c)]==='Map'||_0x1bb666['type']===_0x51b398(0x233)||_0x1bb666[_0x51b398(0x2c5)][_0x51b398(0x250)](function(_0x38b0a6,_0x1c6fe5){var _0xb48cb7=_0x51b398,_0x4a8acb=_0x38b0a6['name'][_0xb48cb7(0x2c7)](),_0x441d7a=_0x1c6fe5[_0xb48cb7(0x253)][_0xb48cb7(0x2c7)]();return _0x4a8acb<_0x441d7a?-0x1:_0x4a8acb>_0x441d7a?0x1:0x0;});}[_0x82d3ef(0x2c2)](_0x4440ac,_0x60290f){var _0x3663e2=_0x82d3ef;if(!(_0x60290f[_0x3663e2(0x1f6)]||!_0x4440ac[_0x3663e2(0x2c5)]||!_0x4440ac['props'][_0x3663e2(0x25f)])){for(var _0x1473c8=[],_0x31a8a8=[],_0x262b12=0x0,_0x186c01=_0x4440ac['props']['length'];_0x262b12<_0x186c01;_0x262b12++){var _0x86c2b5=_0x4440ac[_0x3663e2(0x2c5)][_0x262b12];_0x86c2b5[_0x3663e2(0x22c)]===_0x3663e2(0x2a2)?_0x1473c8[_0x3663e2(0x246)](_0x86c2b5):_0x31a8a8['push'](_0x86c2b5);}if(!(!_0x31a8a8[_0x3663e2(0x25f)]||_0x1473c8[_0x3663e2(0x25f)]<=0x1)){_0x4440ac[_0x3663e2(0x2c5)]=_0x31a8a8;var _0x1ac39a={'functionsNode':!0x0,'props':_0x1473c8};this['_setNodeId'](_0x1ac39a,_0x60290f),this[_0x3663e2(0x298)](_0x1ac39a,_0x60290f),this[_0x3663e2(0x283)](_0x1ac39a),this[_0x3663e2(0x265)](_0x1ac39a,_0x60290f),_0x1ac39a['id']+='\\x20f',_0x4440ac['props'][_0x3663e2(0x218)](_0x1ac39a);}}}[_0x82d3ef(0x28c)](_0x592cf3,_0x236116){}['_setNodeExpandableState'](_0x291664){}['_isArray'](_0x7f2133){var _0x396994=_0x82d3ef;return Array[_0x396994(0x22a)](_0x7f2133)||typeof _0x7f2133==_0x396994(0x24e)&&this[_0x396994(0x1fd)](_0x7f2133)===_0x396994(0x26a);}[_0x82d3ef(0x265)](_0x53ecb2,_0x3011df){}['_cleanNode'](_0x4095c4){var _0x36091a=_0x82d3ef;delete _0x4095c4[_0x36091a(0x22e)],delete _0x4095c4['_hasSetOnItsPath'],delete _0x4095c4[_0x36091a(0x215)];}[_0x82d3ef(0x227)](_0x1722d6,_0x397b43){}}let _0x337799=new _0x376622(),_0x1740c6={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x324a27={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23f2a1(_0xc61d77,_0x548d43,_0x29c197,_0x4add74,_0x2fcd07,_0x3ddcd1){var _0xc3597a=_0x82d3ef;let _0x1001c2,_0x5c5f94;try{_0x5c5f94=_0x160e79(),_0x1001c2=_0x124182[_0x548d43],!_0x1001c2||_0x5c5f94-_0x1001c2['ts']>0x1f4&&_0x1001c2[_0xc3597a(0x21e)]&&_0x1001c2[_0xc3597a(0x2ad)]/_0x1001c2[_0xc3597a(0x21e)]<0x64?(_0x124182[_0x548d43]=_0x1001c2={'count':0x0,'time':0x0,'ts':_0x5c5f94},_0x124182[_0xc3597a(0x2b3)]={}):_0x5c5f94-_0x124182[_0xc3597a(0x2b3)]['ts']>0x32&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]/_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]<0x64&&(_0x124182[_0xc3597a(0x2b3)]={});let _0x2a42e8=[],_0xb1dda1=_0x1001c2[_0xc3597a(0x242)]||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x242)]?_0x324a27:_0x1740c6,_0x18aff5=_0x396226=>{var _0x45ca4e=_0xc3597a;let _0x288eec={};return _0x288eec[_0x45ca4e(0x2c5)]=_0x396226[_0x45ca4e(0x2c5)],_0x288eec[_0x45ca4e(0x222)]=_0x396226[_0x45ca4e(0x222)],_0x288eec[_0x45ca4e(0x279)]=_0x396226[_0x45ca4e(0x279)],_0x288eec[_0x45ca4e(0x208)]=_0x396226['totalStrLength'],_0x288eec[_0x45ca4e(0x274)]=_0x396226['autoExpandLimit'],_0x288eec[_0x45ca4e(0x24f)]=_0x396226[_0x45ca4e(0x24f)],_0x288eec['sortProps']=!0x1,_0x288eec[_0x45ca4e(0x1f6)]=!_0x39cf15,_0x288eec[_0x45ca4e(0x201)]=0x1,_0x288eec[_0x45ca4e(0x2d5)]=0x0,_0x288eec['expId']=_0x45ca4e(0x297),_0x288eec['rootExpression']='root_exp',_0x288eec['autoExpand']=!0x0,_0x288eec[_0x45ca4e(0x262)]=[],_0x288eec[_0x45ca4e(0x1f9)]=0x0,_0x288eec[_0x45ca4e(0x260)]=!0x0,_0x288eec[_0x45ca4e(0x2d4)]=0x0,_0x288eec[_0x45ca4e(0x217)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x288eec;};for(var _0x5d5bd7=0x0;_0x5d5bd7<_0x2fcd07['length'];_0x5d5bd7++)_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'timeNode':_0xc61d77===_0xc3597a(0x2ad)||void 0x0},_0x2fcd07[_0x5d5bd7],_0x18aff5(_0xb1dda1),{}));if(_0xc61d77===_0xc3597a(0x284)){let _0x2131b1=Error['stackTraceLimit'];try{Error[_0xc3597a(0x21b)]=0x1/0x0,_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'stackNode':!0x0},new Error()['stack'],_0x18aff5(_0xb1dda1),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x2131b1;}}return{'method':_0xc3597a(0x23a),'version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':_0x2a42e8,'id':_0x548d43,'context':_0x3ddcd1}]};}catch(_0x9ea483){return{'method':'log','version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':[{'type':_0xc3597a(0x269),'error':_0x9ea483&&_0x9ea483[_0xc3597a(0x24c)]}],'id':_0x548d43,'context':_0x3ddcd1}]};}finally{try{if(_0x1001c2&&_0x5c5f94){let _0x279239=_0x160e79();_0x1001c2[_0xc3597a(0x21e)]++,_0x1001c2[_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x1001c2['ts']=_0x279239,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]++,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x124182[_0xc3597a(0x2b3)]['ts']=_0x279239,(_0x1001c2[_0xc3597a(0x21e)]>0x32||_0x1001c2[_0xc3597a(0x2ad)]>0x64)&&(_0x1001c2[_0xc3597a(0x242)]=!0x0),(_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]>0x3e8||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]>0x12c)&&(_0x124182[_0xc3597a(0x2b3)]['reduceLimits']=!0x0);}}catch{}}}return _0x23f2a1;}((_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5410ef,_0x82de96,_0x353f0a,_0x44228c,_0x5087cf)=>{var _0x3e67cb=_0x3c9133;if(_0x24201d[_0x3e67cb(0x202)])return _0x24201d[_0x3e67cb(0x202)];if(!Y(_0x24201d,_0x353f0a,_0x7a16be))return _0x24201d['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x24201d[_0x3e67cb(0x202)];let _0x1e6e8e=W(_0x24201d),_0x1d3237=_0x1e6e8e[_0x3e67cb(0x2a0)],_0x21509f=_0x1e6e8e[_0x3e67cb(0x2c0)],_0x3e1850=_0x1e6e8e[_0x3e67cb(0x2b2)],_0x2c8b38={'hits':{},'ts':{}},_0x275983=Q(_0x24201d,_0x44228c,_0x2c8b38,_0x5410ef),_0x127295=_0x459189=>{_0x2c8b38['ts'][_0x459189]=_0x21509f();},_0x2b165a=(_0x44840e,_0x4c980b)=>{var _0x2d8b84=_0x3e67cb;let _0x36dee7=_0x2c8b38['ts'][_0x4c980b];if(delete _0x2c8b38['ts'][_0x4c980b],_0x36dee7){let _0x1e2eb3=_0x1d3237(_0x36dee7,_0x21509f());_0x1666dc(_0x275983(_0x2d8b84(0x2ad),_0x44840e,_0x3e1850(),_0xce6c91,[_0x1e2eb3],_0x4c980b));}},_0x39bf76=_0x4c030d=>_0x42b2f4=>{var _0x596a7c=_0x3e67cb;try{_0x127295(_0x42b2f4),_0x4c030d(_0x42b2f4);}finally{_0x24201d['console'][_0x596a7c(0x2ad)]=_0x4c030d;}},_0x150705=_0x6c9dc9=>_0x1aaf9b=>{var _0x25a43c=_0x3e67cb;try{let [_0x54747e,_0x1c9789]=_0x1aaf9b[_0x25a43c(0x2d0)](_0x25a43c(0x27e));_0x2b165a(_0x1c9789,_0x54747e),_0x6c9dc9(_0x54747e);}finally{_0x24201d[_0x25a43c(0x244)][_0x25a43c(0x2cd)]=_0x6c9dc9;}};_0x24201d[_0x3e67cb(0x202)]={'consoleLog':(_0x7a1191,_0x19286e)=>{var _0x59f4ac=_0x3e67cb;_0x24201d[_0x59f4ac(0x244)][_0x59f4ac(0x23a)]['name']!==_0x59f4ac(0x22d)&&_0x1666dc(_0x275983('log',_0x7a1191,_0x3e1850(),_0xce6c91,_0x19286e));},'consoleTrace':(_0x34d58b,_0x1b81f5)=>{var _0x1c1864=_0x3e67cb;_0x24201d[_0x1c1864(0x244)][_0x1c1864(0x23a)]['name']!==_0x1c1864(0x1f2)&&_0x1666dc(_0x275983(_0x1c1864(0x284),_0x34d58b,_0x3e1850(),_0xce6c91,_0x1b81f5));},'consoleTime':()=>{var _0x3008ff=_0x3e67cb;_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]=_0x39bf76(_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]);},'consoleTimeEnd':()=>{var _0x7ed41f=_0x3e67cb;_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]=_0x150705(_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]);},'autoLog':(_0x186c8b,_0x1a2a53)=>{var _0x3a01b9=_0x3e67cb;_0x1666dc(_0x275983(_0x3a01b9(0x23a),_0x1a2a53,_0x3e1850(),_0xce6c91,[_0x186c8b]));},'autoLogMany':(_0x9d29d8,_0x218cb6)=>{var _0x5b9a81=_0x3e67cb;_0x1666dc(_0x275983(_0x5b9a81(0x23a),_0x9d29d8,_0x3e1850(),_0xce6c91,_0x218cb6));},'autoTrace':(_0x4d7c27,_0x4ce12b)=>{var _0xe1b054=_0x3e67cb;_0x1666dc(_0x275983(_0xe1b054(0x284),_0x4ce12b,_0x3e1850(),_0xce6c91,[_0x4d7c27]));},'autoTraceMany':(_0x4dd34e,_0x4033b3)=>{var _0x40542c=_0x3e67cb;_0x1666dc(_0x275983(_0x40542c(0x284),_0x4dd34e,_0x3e1850(),_0xce6c91,_0x4033b3));},'autoTime':(_0x5255bb,_0x284f65,_0x38a502)=>{_0x127295(_0x38a502);},'autoTimeEnd':(_0x4f2eef,_0x39435a,_0x1e3399)=>{_0x2b165a(_0x39435a,_0x1e3399);},'coverage':_0x49c495=>{var _0x368e28=_0x3e67cb;_0x1666dc({'method':_0x368e28(0x299),'version':_0x5410ef,'args':[{'id':_0x49c495}]});}};let _0x1666dc=J(_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5087cf),_0xce6c91=_0x24201d['_console_ninja_session'];return _0x24201d[_0x3e67cb(0x202)];})(globalThis,_0x3c9133(0x2ab),'63933',_0x3c9133(0x2aa),'remix',_0x3c9133(0x23e),_0x3c9133(0x251),_0x3c9133(0x2d2),_0x3c9133(0x204),'');`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/component/Login.tsx
var import_react8 = require("react"), import_fc = require("react-icons/fc"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Login() {
  let loginRef = (0, import_react8.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        onClick: () => {
          var _a;
          return (_a = loginRef.current) == null ? void 0 : _a.showModal();
        },
        className: "btn btn-md btn-primary",
        children: [
          "LOG IN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/component/Login.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dialog", { ref: loginRef, className: "modal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "modal-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoginForm, {}, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "form",
        {
          method: "dialog",
          className: "transition-all duration-75 backdrop-blur-sm modal-backdrop  ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: "close" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Login.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Login.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function LoginForm() {
  let { env } = (0, import_react7.useLoaderData)(), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = env, auth0Config = {
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: (NODE_ENV === "production" ? "https://pecha.tools" : "http://localhost:3000") + "/callback",
    responseType: "token id_token",
    scope: "email profile openid"
  }, { loginWithGoogle, passwordlessLogin, verifyPasswordlessCode } = useAuth0(auth0Config), [email, setEmail] = (0, import_react8.useState)(""), [redirectEmail, setRedirectEmail] = (0, import_react8.useState)(null), inputRef = (0, import_react8.useRef)(null), [showOtpField, setShowOtpField] = (0, import_react8.useState)(!1), handlePasswordlessLogin = async (e) => {
    e.preventDefault();
    try {
      let resEmail = await passwordlessLogin(email);
      resEmail && (setShowOtpField(!0), setRedirectEmail(resEmail));
    } catch (err) {
      console.log(...oo_oo2("2127749360_0", "err: ", err));
    }
  }, handleGoogleLogin = () => {
    loginWithGoogle();
  };
  async function handleLoginPassword(e) {
    var _a;
    e.preventDefault();
    let code = parseInt((_a = inputRef.current) == null ? void 0 : _a.value);
    try {
      let res = await verifyPasswordlessCode(redirectEmail, code);
      console.log(...oo_oo2("2127749360_1", res));
    } catch (err) {
      console.log(...oo_oo2("2127749360_2", "code verification error : ", err));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-full login-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center  sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          src: "/favicon.ico",
          className: "mx-auto w-auto",
          style: { height: "15vh" }
        },
        void 0,
        !1,
        {
          fileName: "app/component/Login.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-stone-600", children: "Pecha tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto  mt-2 text-center text-sm  leading-9 tracking-tight text-stone-900", children: "Log in to Pecha tools to continue using tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 sm:mx-auto sm:w-full sm:max-w-[426px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "   sm:rounded-lg sm:px-12", children: [
      redirectEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cursor-pointer mt-6 flex flex-col gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            onClick: handleGoogleLogin,
            className: "text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-3 dark:focus:ring-[#4285F4]/55 mr-2 mb-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_fc.FcGoogle, {}, void 0, !1, {
                fileName: "app/component/Login.tsx",
                lineNumber: 113,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg font-semibold leading-6", children: "Google" }, void 0, !1, {
                fileName: "app/component/Login.tsx",
                lineNumber: 114,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/Login.tsx",
            lineNumber: 109,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 108,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              className: "absolute inset-0 flex items-center",
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full border-t border-stone-200" }, void 0, !1, {
                fileName: "app/component/Login.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/component/Login.tsx",
              lineNumber: 121,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex justify-center text-sm font-regular leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-white px-6 text-stone-500", children: "Or sign in with" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 128,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, this),
      showOtpField ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "font-semibold mb-2 text-primary-800", children: "Check your inbox" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 171,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-stone-700/70", children: [
            "We have sent you a magic link. If you did not receive the email,",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                onClick: handlePasswordlessLogin,
                type: "button",
                className: "font-medium underline underline-offset-2 decoration-primary-700/25 hover:text-primary-700 hover:decoration-primary-700/50 transition",
                children: "send a new one"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Login.tsx",
                lineNumber: 177,
                columnNumber: 21
              },
              this
            ),
            "."
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-6 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { onSubmit: handleLoginPassword, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "password",
                className: "block text-sm font-medium leading-6 text-stone-900",
                children: "Enter code"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Login.tsx",
                lineNumber: 190,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "password",
                ref: inputRef,
                name: "password",
                type: "password",
                required: !0,
                autoFocus: !0,
                className: "block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Login.tsx",
                lineNumber: 197,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/component/Login.tsx",
              lineNumber: 196,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 189,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition",
                children: "Sign in"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Login.tsx",
                lineNumber: 209,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "button",
                onClick: () => {
                  setRedirectEmail(null), setShowOtpField(!1);
                },
                children: "go back"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Login.tsx",
                lineNumber: 215,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 208,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 188,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 187,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 169,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { onSubmit: handlePasswordlessLogin, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium leading-6 text-stone-900 dark:text-gray-300",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/component/Login.tsx",
              lineNumber: 138,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              autoFocus: !0,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "block w-full rounded-md border-0 py-1.5 text-stone-900 dark:text-gray-300 pl-2 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/component/Login.tsx",
              lineNumber: 145,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: !0,
            className: "flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition",
            children: "Continue"
          },
          void 0,
          !1,
          {
            fileName: "app/component/Login.tsx",
            lineNumber: 159,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 136,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Login.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Login.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3c9133=_0x141d;function _0x4457(){var _0x1a9011=['ws://','negativeInfinity','current','_isUndefined','then','getPrototypeOf','elapsed','_WebSocketClass','function','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','bigint','getOwnPropertyNames','array','enumerable','parent','_connected',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.226\\\\node_modules",'127.0.0.1','null','time','performance','autoExpand','_connecting','date','now','hits','test','_type','_p_name','Boolean','location','getWebSocketClass','_connectToHostNow','_numberRegExp','_reconnectTimeout','value','gateway.docker.internal','2594053INDhbG','timeStamp','port','_addFunctionsNode','514255ulWozA','call','props','_processTreeNodeResult','toLowerCase','_getOwnPropertyNames','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','pop','Error','_WebSocket','timeEnd','serialize','_allowedToConnectOnSend','split','onclose',["localhost","127.0.0.1","example.cypress.io","kunsang","172.18.64.1","192.168.1.5"],'hasOwnProperty','allStrLength','level','disabledTrace','[object\\x20Set]','_keyStrRegExp','valueOf','noFunctions','_setNodeQueryPath','https://tinyurl.com/37x8b79t','autoExpandPropertyCount','_connectAttemptCount','reload','_Symbol','_objectToString','symbol','_ws','_addProperty','depth','_console_ninja','140334tbgEOk','','capped','15lpennf','_propertyName','totalStrLength','_isNegativeZero','match','process','create','_allowedToSend','_getOwnPropertyDescriptor','_undefined','_consoleNinjaAllowedToStart','bind','nuxt','_p_','setter','_hasMapOnItsPath','Buffer','node','unshift','perf_hooks','url','stackTraceLimit','indexOf','_webSocketErrorDocsLink','count','HTMLAllCollection','host','catch','elements','global','[object\\x20Map]','number','send','_setNodeExpressionPath','_treeNodePropertiesBeforeFullValue','_dateToString','isArray','defineProperty','type','disabledLog','_hasSymbolPropertyOnItsPath','_capIfString','stringify','prototype','toString','Set','error','index','_property','boolean','Number','_sendErrorMessage','log','forEach','slice','getOwnPropertyDescriptor','1.0.0','dockerizedApp','_treeNodePropertiesAfterFullValue','substr','reduceLimits','WebSocket','console','method','push','set','getOwnPropertySymbols','data','_cleanNode','_console_ninja_session','message','nodeModules','object','autoExpandMaxDepth','sort','1695378051073','sortProps','name','replace','6024789BpQSzV','default','onopen','_isPrimitiveType','get','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','nan','_inBrowser','pathToFileURL','6zVQsOG','length','resolveGetters','8ERwwWr','autoExpandPreviousObjects','onerror','_socket','_setNodePermissions','Map','expressionsToEvaluate','positiveInfinity','unknown','[object\\x20Array]','_isPrimitiveWrapperType','_maxConnectAttemptCount','_additionalMetadata','concat','versions','NEGATIVE_INFINITY','unref','join','undefined','autoExpandLimit','...','_disposeWebsocket','path','_getOwnPropertySymbols','strLength','_blacklistedProperty','_isMap','cappedElements','warn',':logPointId:','_attemptToReconnectShortly','_sortProps','isExpressionToEvaluate','string','_setNodeExpandableState','trace','Symbol','String','constructor','logger\\x20websocket\\x20error','_quotedRegExp','_addObjectProperty','10481470fvehOE','_addLoadNode','hrtime','RegExp','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','150784wCrfsu','_HTMLAllCollection','_isSet','349780pvWhxq','hostname','[object\\x20Date]','root_exp_id','_setNodeLabel','coverage'];_0x4457=function(){return _0x1a9011;};return _0x4457();}(function(_0x15448d,_0x4d1d8f){var _0x2402b5=_0x141d,_0x2caef9=_0x15448d();while(!![]){try{var _0x2d271c=-parseInt(_0x2402b5(0x2c3))/0x1+-parseInt(_0x2402b5(0x203))/0x2*(parseInt(_0x2402b5(0x206))/0x3)+-parseInt(_0x2402b5(0x291))/0x4+parseInt(_0x2402b5(0x294))/0x5*(-parseInt(_0x2402b5(0x25e))/0x6)+-parseInt(_0x2402b5(0x2bf))/0x7*(parseInt(_0x2402b5(0x261))/0x8)+parseInt(_0x2402b5(0x255))/0x9+parseInt(_0x2402b5(0x28b))/0xa;if(_0x2d271c===_0x4d1d8f)break;else _0x2caef9['push'](_0x2caef9['shift']());}catch(_0x3a2df0){_0x2caef9['push'](_0x2caef9['shift']());}}}(_0x4457,0x5b5e7));function _0x141d(_0x47fe73,_0x4e8749){var _0x445717=_0x4457();return _0x141d=function(_0x141d5f,_0x175711){_0x141d5f=_0x141d5f-0x1f2;var _0x1f44e9=_0x445717[_0x141d5f];return _0x1f44e9;},_0x141d(_0x47fe73,_0x4e8749);}var j=Object[_0x3c9133(0x20c)],X=Object[_0x3c9133(0x22b)],G=Object[_0x3c9133(0x23d)],ee=Object[_0x3c9133(0x2a5)],te=Object[_0x3c9133(0x29f)],ne=Object['prototype'][_0x3c9133(0x2d3)],re=(_0x2398a0,_0x6933a5,_0x4da329,_0x304873)=>{var _0x48a9cd=_0x3c9133;if(_0x6933a5&&typeof _0x6933a5==_0x48a9cd(0x24e)||typeof _0x6933a5==_0x48a9cd(0x2a2)){for(let _0x47c884 of ee(_0x6933a5))!ne[_0x48a9cd(0x2c4)](_0x2398a0,_0x47c884)&&_0x47c884!==_0x4da329&&X(_0x2398a0,_0x47c884,{'get':()=>_0x6933a5[_0x47c884],'enumerable':!(_0x304873=G(_0x6933a5,_0x47c884))||_0x304873[_0x48a9cd(0x2a7)]});}return _0x2398a0;},K=(_0x37afc2,_0xf06744,_0xe9c95b)=>(_0xe9c95b=_0x37afc2!=null?j(te(_0x37afc2)):{},re(_0xf06744||!_0x37afc2||!_0x37afc2['__es'+'Module']?X(_0xe9c95b,_0x3c9133(0x256),{'value':_0x37afc2,'enumerable':!0x0}):_0xe9c95b,_0x37afc2)),q=class{constructor(_0x8672cb,_0xab551,_0x1efc92,_0x92c543,_0x346931){var _0x2d259a=_0x3c9133;this[_0x2d259a(0x223)]=_0x8672cb,this[_0x2d259a(0x220)]=_0xab551,this[_0x2d259a(0x2c1)]=_0x1efc92,this[_0x2d259a(0x24d)]=_0x92c543,this[_0x2d259a(0x23f)]=_0x346931,this['_allowedToSend']=!0x0,this[_0x2d259a(0x2cf)]=!0x0,this['_connected']=!0x1,this[_0x2d259a(0x2b0)]=!0x1,this[_0x2d259a(0x25c)]=!this[_0x2d259a(0x223)]['process']?.[_0x2d259a(0x26f)]?.[_0x2d259a(0x217)],this[_0x2d259a(0x2a1)]=null,this[_0x2d259a(0x1fa)]=0x0,this[_0x2d259a(0x26c)]=0x14,this[_0x2d259a(0x21d)]=_0x2d259a(0x1f8),this[_0x2d259a(0x239)]=(this[_0x2d259a(0x25c)]?_0x2d259a(0x25a):_0x2d259a(0x2c9))+this[_0x2d259a(0x21d)];}async[_0x3c9133(0x2b9)](){var _0x599849=_0x3c9133;if(this[_0x599849(0x2a1)])return this[_0x599849(0x2a1)];let _0x593947;if(this['_inBrowser'])_0x593947=this[_0x599849(0x223)][_0x599849(0x243)];else{if(this[_0x599849(0x223)]['process']?.[_0x599849(0x2cc)])_0x593947=this[_0x599849(0x223)][_0x599849(0x20b)]?.['_WebSocket'];else try{let _0x15c7a3=await import(_0x599849(0x277));_0x593947=(await import((await import(_0x599849(0x21a)))[_0x599849(0x25d)](_0x15c7a3[_0x599849(0x272)](this['nodeModules'],'ws/index.js'))[_0x599849(0x232)]()))[_0x599849(0x256)];}catch{try{_0x593947=require(require(_0x599849(0x277))[_0x599849(0x272)](this[_0x599849(0x24d)],'ws'));}catch{throw new Error(_0x599849(0x2a3));}}}return this[_0x599849(0x2a1)]=_0x593947,_0x593947;}[_0x3c9133(0x2ba)](){var _0x531026=_0x3c9133;this['_connecting']||this[_0x531026(0x2a9)]||this[_0x531026(0x1fa)]>=this['_maxConnectAttemptCount']||(this[_0x531026(0x2cf)]=!0x1,this[_0x531026(0x2b0)]=!0x0,this[_0x531026(0x1fa)]++,this[_0x531026(0x1ff)]=new Promise((_0x2f35b3,_0x149960)=>{var _0x599995=_0x531026;this[_0x599995(0x2b9)]()[_0x599995(0x29e)](_0x451411=>{var _0x2ae357=_0x599995;let _0x40ed5d=new _0x451411(_0x2ae357(0x29a)+(!this[_0x2ae357(0x25c)]&&this[_0x2ae357(0x23f)]?_0x2ae357(0x2be):this['host'])+':'+this['port']);_0x40ed5d[_0x2ae357(0x263)]=()=>{var _0x208359=_0x2ae357;this[_0x208359(0x20d)]=!0x1,this[_0x208359(0x276)](_0x40ed5d),this[_0x208359(0x27f)](),_0x149960(new Error(_0x208359(0x288)));},_0x40ed5d[_0x2ae357(0x257)]=()=>{var _0x5e1ec5=_0x2ae357;this['_inBrowser']||_0x40ed5d[_0x5e1ec5(0x264)]&&_0x40ed5d[_0x5e1ec5(0x264)][_0x5e1ec5(0x271)]&&_0x40ed5d[_0x5e1ec5(0x264)]['unref'](),_0x2f35b3(_0x40ed5d);},_0x40ed5d[_0x2ae357(0x2d1)]=()=>{var _0x93eb0c=_0x2ae357;this['_allowedToConnectOnSend']=!0x0,this[_0x93eb0c(0x276)](_0x40ed5d),this['_attemptToReconnectShortly']();},_0x40ed5d['onmessage']=_0x2dbee7=>{var _0x1f98a5=_0x2ae357;try{_0x2dbee7&&_0x2dbee7['data']&&this[_0x1f98a5(0x25c)]&&JSON['parse'](_0x2dbee7[_0x1f98a5(0x249)])[_0x1f98a5(0x245)]===_0x1f98a5(0x1fb)&&this[_0x1f98a5(0x223)][_0x1f98a5(0x2b8)]['reload']();}catch{}};})[_0x599995(0x29e)](_0x7c812b=>(this[_0x599995(0x2a9)]=!0x0,this['_connecting']=!0x1,this[_0x599995(0x2cf)]=!0x1,this[_0x599995(0x20d)]=!0x0,this[_0x599995(0x1fa)]=0x0,_0x7c812b))[_0x599995(0x221)](_0xdf3dec=>(this['_connected']=!0x1,this[_0x599995(0x2b0)]=!0x1,console['warn'](_0x599995(0x290)+this[_0x599995(0x21d)]),_0x149960(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0xdf3dec&&_0xdf3dec[_0x599995(0x24c)])))));}));}['_disposeWebsocket'](_0x2c179d){var _0x275dab=_0x3c9133;this[_0x275dab(0x2a9)]=!0x1,this[_0x275dab(0x2b0)]=!0x1;try{_0x2c179d['onclose']=null,_0x2c179d[_0x275dab(0x263)]=null,_0x2c179d['onopen']=null;}catch{}try{_0x2c179d['readyState']<0x2&&_0x2c179d['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x466c87=_0x3c9133;clearTimeout(this[_0x466c87(0x2bc)]),!(this[_0x466c87(0x1fa)]>=this[_0x466c87(0x26c)])&&(this[_0x466c87(0x2bc)]=setTimeout(()=>{var _0x27bf95=_0x466c87;this[_0x27bf95(0x2a9)]||this[_0x27bf95(0x2b0)]||(this[_0x27bf95(0x2ba)](),this[_0x27bf95(0x1ff)]?.[_0x27bf95(0x221)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x466c87(0x2bc)][_0x466c87(0x271)]&&this[_0x466c87(0x2bc)][_0x466c87(0x271)]());}async[_0x3c9133(0x226)](_0x1110d1){var _0x5c9748=_0x3c9133;try{if(!this[_0x5c9748(0x20d)])return;this[_0x5c9748(0x2cf)]&&this['_connectToHostNow'](),(await this[_0x5c9748(0x1ff)])[_0x5c9748(0x226)](JSON[_0x5c9748(0x230)](_0x1110d1));}catch(_0x46d70e){console[_0x5c9748(0x27d)](this[_0x5c9748(0x239)]+':\\x20'+(_0x46d70e&&_0x46d70e[_0x5c9748(0x24c)])),this[_0x5c9748(0x20d)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x18b646,_0x49fcbc,_0x37e734,_0x306a5a,_0x517851,_0x1060ef){var _0x25a6be=_0x3c9133;let _0x1620dd=_0x37e734[_0x25a6be(0x2d0)](',')['map'](_0x459cbc=>{var _0xe53167=_0x25a6be;try{_0x18b646[_0xe53167(0x24b)]||((_0x517851==='next.js'||_0x517851==='remix'||_0x517851==='astro')&&(_0x517851+=_0x18b646[_0xe53167(0x20b)]?.[_0xe53167(0x26f)]?.[_0xe53167(0x217)]?'\\x20server':'\\x20browser'),_0x18b646[_0xe53167(0x24b)]={'id':+new Date(),'tool':_0x517851});let _0x55d5ad=new q(_0x18b646,_0x49fcbc,_0x459cbc,_0x306a5a,_0x1060ef);return _0x55d5ad[_0xe53167(0x226)][_0xe53167(0x211)](_0x55d5ad);}catch(_0x59a135){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x59a135&&_0x59a135[_0xe53167(0x24c)]),()=>{};}});return _0x468b7d=>_0x1620dd['forEach'](_0x11eeb2=>_0x11eeb2(_0x468b7d));}function W(_0x523a41){var _0x1408d4=_0x3c9133;let _0x6058a7=function(_0x36f71a,_0x4a38c9){return _0x4a38c9-_0x36f71a;},_0x3f3fba;if(_0x523a41[_0x1408d4(0x2ae)])_0x3f3fba=function(){var _0x1d6210=_0x1408d4;return _0x523a41['performance'][_0x1d6210(0x2b2)]();};else{if(_0x523a41['process']&&_0x523a41['process'][_0x1408d4(0x28d)])_0x3f3fba=function(){var _0x521c7a=_0x1408d4;return _0x523a41[_0x521c7a(0x20b)]['hrtime']();},_0x6058a7=function(_0x5eeb23,_0xaa6114){return 0x3e8*(_0xaa6114[0x0]-_0x5eeb23[0x0])+(_0xaa6114[0x1]-_0x5eeb23[0x1])/0xf4240;};else try{let {performance:_0xf6f376}=require(_0x1408d4(0x219));_0x3f3fba=function(){var _0x5508cf=_0x1408d4;return _0xf6f376[_0x5508cf(0x2b2)]();};}catch{_0x3f3fba=function(){return+new Date();};}}return{'elapsed':_0x6058a7,'timeStamp':_0x3f3fba,'now':()=>Date[_0x1408d4(0x2b2)]()};}function Y(_0x46555f,_0x58279d,_0x2756cb){var _0x312a96=_0x3c9133;if(_0x46555f[_0x312a96(0x210)]!==void 0x0)return _0x46555f[_0x312a96(0x210)];let _0x1dc510=_0x46555f['process']?.['versions']?.['node'];return _0x1dc510&&_0x2756cb===_0x312a96(0x212)?_0x46555f['_consoleNinjaAllowedToStart']=!0x1:_0x46555f[_0x312a96(0x210)]=_0x1dc510||!_0x58279d||_0x46555f[_0x312a96(0x2b8)]?.[_0x312a96(0x295)]&&_0x58279d['includes'](_0x46555f[_0x312a96(0x2b8)][_0x312a96(0x295)]),_0x46555f['_consoleNinjaAllowedToStart'];}function Q(_0x283aea,_0x39cf15,_0x124182,_0x573e84){var _0x82d3ef=_0x3c9133;_0x283aea=_0x283aea,_0x39cf15=_0x39cf15,_0x124182=_0x124182,_0x573e84=_0x573e84;let _0x497d20=W(_0x283aea),_0x1da085=_0x497d20[_0x82d3ef(0x2a0)],_0x160e79=_0x497d20[_0x82d3ef(0x2c0)];class _0x376622{constructor(){var _0x14a269=_0x82d3ef;this[_0x14a269(0x1f4)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x14a269(0x2bb)]=/^(0|[1-9][0-9]*)$/,this[_0x14a269(0x289)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x283aea[_0x14a269(0x273)],this[_0x14a269(0x292)]=_0x283aea[_0x14a269(0x21f)],this[_0x14a269(0x20e)]=Object[_0x14a269(0x23d)],this['_getOwnPropertyNames']=Object[_0x14a269(0x2a5)],this['_Symbol']=_0x283aea[_0x14a269(0x285)],this['_regExpToString']=RegExp['prototype'][_0x14a269(0x232)],this[_0x14a269(0x229)]=Date[_0x14a269(0x231)][_0x14a269(0x232)];}[_0x82d3ef(0x2ce)](_0x430997,_0x5ed867,_0x38e567,_0x29b4f2){var _0x3f7922=_0x82d3ef,_0x519cdf=this,_0x17fb1f=_0x38e567['autoExpand'];function _0x4d3a44(_0x5574f6,_0x594922,_0x543366){var _0x282722=_0x141d;_0x594922[_0x282722(0x22c)]=_0x282722(0x269),_0x594922['error']=_0x5574f6[_0x282722(0x24c)],_0x5aacf3=_0x543366[_0x282722(0x217)][_0x282722(0x29c)],_0x543366[_0x282722(0x217)][_0x282722(0x29c)]=_0x594922,_0x519cdf[_0x282722(0x228)](_0x594922,_0x543366);}try{_0x38e567[_0x3f7922(0x2d5)]++,_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x262)]['push'](_0x5ed867);var _0x946d76,_0x272312,_0x2a5d69,_0x3b2a6d,_0x9536ba=[],_0x402813=[],_0xba98fd,_0x813322=this[_0x3f7922(0x2b5)](_0x5ed867),_0x46b8eb=_0x813322===_0x3f7922(0x2a6),_0x37c552=!0x1,_0x435d39=_0x813322===_0x3f7922(0x2a2),_0x97b195=this[_0x3f7922(0x258)](_0x813322),_0x190c40=this['_isPrimitiveWrapperType'](_0x813322),_0x15f00e=_0x97b195||_0x190c40,_0xe2d20d={},_0x501a34=0x0,_0x188067=!0x1,_0x5aacf3,_0x55053d=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38e567[_0x3f7922(0x201)]){if(_0x46b8eb){if(_0x272312=_0x5ed867['length'],_0x272312>_0x38e567['elements']){for(_0x2a5d69=0x0,_0x3b2a6d=_0x38e567[_0x3f7922(0x222)],_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813['push'](_0x519cdf[_0x3f7922(0x200)](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));_0x430997[_0x3f7922(0x27c)]=!0x0;}else{for(_0x2a5d69=0x0,_0x3b2a6d=_0x272312,_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813[_0x3f7922(0x246)](_0x519cdf['_addProperty'](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));}_0x38e567['autoExpandPropertyCount']+=_0x402813['length'];}if(!(_0x813322===_0x3f7922(0x2ac)||_0x813322==='undefined')&&!_0x97b195&&_0x813322!=='String'&&_0x813322!==_0x3f7922(0x216)&&_0x813322!==_0x3f7922(0x2a4)){var _0x35bcd1=_0x29b4f2['props']||_0x38e567[_0x3f7922(0x2c5)];if(this[_0x3f7922(0x293)](_0x5ed867)?(_0x946d76=0x0,_0x5ed867[_0x3f7922(0x23b)](function(_0xa8d979){var _0xa3115a=_0x3f7922;if(_0x501a34++,_0x38e567[_0xa3115a(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567[_0xa3115a(0x281)]&&_0x38e567[_0xa3115a(0x2af)]&&_0x38e567[_0xa3115a(0x1f9)]>_0x38e567[_0xa3115a(0x274)]){_0x188067=!0x0;return;}_0x402813[_0xa3115a(0x246)](_0x519cdf[_0xa3115a(0x200)](_0x9536ba,_0x5ed867,_0xa3115a(0x233),_0x946d76++,_0x38e567,function(_0x33bd9d){return function(){return _0x33bd9d;};}(_0xa8d979)));})):this[_0x3f7922(0x27b)](_0x5ed867)&&_0x5ed867[_0x3f7922(0x23b)](function(_0x4a5ed6,_0x1099c1){var _0x792007=_0x3f7922;if(_0x501a34++,_0x38e567[_0x792007(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567['isExpressionToEvaluate']&&_0x38e567[_0x792007(0x2af)]&&_0x38e567[_0x792007(0x1f9)]>_0x38e567['autoExpandLimit']){_0x188067=!0x0;return;}var _0x192cec=_0x1099c1[_0x792007(0x232)]();_0x192cec[_0x792007(0x25f)]>0x64&&(_0x192cec=_0x192cec[_0x792007(0x23c)](0x0,0x64)+_0x792007(0x275)),_0x402813[_0x792007(0x246)](_0x519cdf[_0x792007(0x200)](_0x9536ba,_0x5ed867,_0x792007(0x266),_0x192cec,_0x38e567,function(_0x26f73a){return function(){return _0x26f73a;};}(_0x4a5ed6)));}),!_0x37c552){try{for(_0xba98fd in _0x5ed867)if(!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x1f9)]>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}catch{}if(_0xe2d20d['_p_length']=!0x0,_0x435d39&&(_0xe2d20d[_0x3f7922(0x2b6)]=!0x0),!_0x188067){var _0x1a1b9d=[][_0x3f7922(0x26e)](this[_0x3f7922(0x2c8)](_0x5ed867))[_0x3f7922(0x26e)](this[_0x3f7922(0x278)](_0x5ed867));for(_0x946d76=0x0,_0x272312=_0x1a1b9d[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)if(_0xba98fd=_0x1a1b9d[_0x946d76],!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd[_0x3f7922(0x232)]()))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)&&!_0xe2d20d['_p_'+_0xba98fd[_0x3f7922(0x232)]()]){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567['autoExpandPropertyCount']>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}}}}if(_0x430997[_0x3f7922(0x22c)]=_0x813322,_0x15f00e?(_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x1f5)](),this[_0x3f7922(0x22f)](_0x813322,_0x430997,_0x38e567,_0x29b4f2)):_0x813322==='date'?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x229)][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x2a4)?_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x232)]():_0x813322===_0x3f7922(0x28e)?_0x430997[_0x3f7922(0x2bd)]=this['_regExpToString'][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x1fe)&&this[_0x3f7922(0x1fc)]?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x1fc)][_0x3f7922(0x231)]['toString'][_0x3f7922(0x2c4)](_0x5ed867):!_0x38e567[_0x3f7922(0x201)]&&!(_0x813322===_0x3f7922(0x2ac)||_0x813322===_0x3f7922(0x273))&&(delete _0x430997[_0x3f7922(0x2bd)],_0x430997[_0x3f7922(0x205)]=!0x0),_0x188067&&(_0x430997['cappedProps']=!0x0),_0x5aacf3=_0x38e567[_0x3f7922(0x217)][_0x3f7922(0x29c)],_0x38e567[_0x3f7922(0x217)]['current']=_0x430997,this[_0x3f7922(0x228)](_0x430997,_0x38e567),_0x402813[_0x3f7922(0x25f)]){for(_0x946d76=0x0,_0x272312=_0x402813[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)_0x402813[_0x946d76](_0x946d76);}_0x9536ba[_0x3f7922(0x25f)]&&(_0x430997[_0x3f7922(0x2c5)]=_0x9536ba);}catch(_0x43b2a9){_0x4d3a44(_0x43b2a9,_0x430997,_0x38e567);}return this[_0x3f7922(0x26d)](_0x5ed867,_0x430997),this['_treeNodePropertiesAfterFullValue'](_0x430997,_0x38e567),_0x38e567['node'][_0x3f7922(0x29c)]=_0x5aacf3,_0x38e567[_0x3f7922(0x2d5)]--,_0x38e567[_0x3f7922(0x2af)]=_0x17fb1f,_0x38e567['autoExpand']&&_0x38e567[_0x3f7922(0x262)][_0x3f7922(0x2ca)](),_0x430997;}['_getOwnPropertySymbols'](_0x366a9c){var _0x585266=_0x82d3ef;return Object[_0x585266(0x248)]?Object[_0x585266(0x248)](_0x366a9c):[];}[_0x82d3ef(0x293)](_0x5140c0){var _0x9cd60e=_0x82d3ef;return!!(_0x5140c0&&_0x283aea[_0x9cd60e(0x233)]&&this[_0x9cd60e(0x1fd)](_0x5140c0)===_0x9cd60e(0x1f3)&&_0x5140c0[_0x9cd60e(0x23b)]);}[_0x82d3ef(0x27a)](_0xf45399,_0xf2b8af,_0x2b9a1e){var _0x4c2f38=_0x82d3ef;return _0x2b9a1e[_0x4c2f38(0x1f6)]?typeof _0xf45399[_0xf2b8af]=='function':!0x1;}[_0x82d3ef(0x2b5)](_0xba0824){var _0x4aa215=_0x82d3ef,_0x21a20d='';return _0x21a20d=typeof _0xba0824,_0x21a20d==='object'?this[_0x4aa215(0x1fd)](_0xba0824)===_0x4aa215(0x26a)?_0x21a20d=_0x4aa215(0x2a6):this['_objectToString'](_0xba0824)===_0x4aa215(0x296)?_0x21a20d=_0x4aa215(0x2b1):this[_0x4aa215(0x1fd)](_0xba0824)==='[object\\x20BigInt]'?_0x21a20d='bigint':_0xba0824===null?_0x21a20d=_0x4aa215(0x2ac):_0xba0824['constructor']&&(_0x21a20d=_0xba0824[_0x4aa215(0x287)][_0x4aa215(0x253)]||_0x21a20d):_0x21a20d===_0x4aa215(0x273)&&this['_HTMLAllCollection']&&_0xba0824 instanceof this[_0x4aa215(0x292)]&&(_0x21a20d=_0x4aa215(0x21f)),_0x21a20d;}[_0x82d3ef(0x1fd)](_0x5eac21){var _0x279535=_0x82d3ef;return Object[_0x279535(0x231)]['toString'][_0x279535(0x2c4)](_0x5eac21);}[_0x82d3ef(0x258)](_0x2bea3c){var _0x42a112=_0x82d3ef;return _0x2bea3c===_0x42a112(0x237)||_0x2bea3c===_0x42a112(0x282)||_0x2bea3c==='number';}[_0x82d3ef(0x26b)](_0x2a2b90){var _0x493ad6=_0x82d3ef;return _0x2a2b90===_0x493ad6(0x2b7)||_0x2a2b90===_0x493ad6(0x286)||_0x2a2b90===_0x493ad6(0x238);}[_0x82d3ef(0x200)](_0x3d05fd,_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a){var _0xfcb414=this;return function(_0x337419){var _0x41a52f=_0x141d,_0x152f0e=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x29c)],_0x49324f=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)],_0x317843=_0x57063a[_0x41a52f(0x217)]['parent'];_0x57063a['node'][_0x41a52f(0x2a8)]=_0x152f0e,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=typeof _0x501eb4==_0x41a52f(0x225)?_0x501eb4:_0x337419,_0x3d05fd['push'](_0xfcb414['_property'](_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a)),_0x57063a[_0x41a52f(0x217)]['parent']=_0x317843,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=_0x49324f;};}[_0x82d3ef(0x28a)](_0x2a9560,_0x3c147e,_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed){var _0x44bf9c=_0x82d3ef,_0x28ea12=this;return _0x3c147e['_p_'+_0x17da26[_0x44bf9c(0x232)]()]=!0x0,function(_0x1db51e){var _0x3337c8=_0x44bf9c,_0x4f79c3=_0x5a1822[_0x3337c8(0x217)]['current'],_0x5017b2=_0x5a1822['node'][_0x3337c8(0x235)],_0x55242c=_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)];_0x5a1822['node'][_0x3337c8(0x2a8)]=_0x4f79c3,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x1db51e,_0x2a9560[_0x3337c8(0x246)](_0x28ea12[_0x3337c8(0x236)](_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed)),_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)]=_0x55242c,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x5017b2;};}[_0x82d3ef(0x236)](_0x4096b8,_0x385f4d,_0x542397,_0x49771e,_0x45c7e6){var _0x150a08=_0x82d3ef,_0x4fdf64=this;_0x45c7e6||(_0x45c7e6=function(_0x27c1dc,_0x299b14){return _0x27c1dc[_0x299b14];});var _0x15810a=_0x542397[_0x150a08(0x232)](),_0x4650d8=_0x49771e[_0x150a08(0x267)]||{},_0x1375ca=_0x49771e[_0x150a08(0x201)],_0x1b5ac9=_0x49771e[_0x150a08(0x281)];try{var _0xcbac97=this['_isMap'](_0x4096b8),_0x2e4d81=_0x15810a;_0xcbac97&&_0x2e4d81[0x0]==='\\x27'&&(_0x2e4d81=_0x2e4d81[_0x150a08(0x241)](0x1,_0x2e4d81['length']-0x2));var _0xa4f4c9=_0x49771e['expressionsToEvaluate']=_0x4650d8[_0x150a08(0x213)+_0x2e4d81];_0xa4f4c9&&(_0x49771e[_0x150a08(0x201)]=_0x49771e[_0x150a08(0x201)]+0x1),_0x49771e[_0x150a08(0x281)]=!!_0xa4f4c9;var _0x430b32=typeof _0x542397==_0x150a08(0x1fe),_0x55fb91={'name':_0x430b32||_0xcbac97?_0x15810a:this[_0x150a08(0x207)](_0x15810a)};if(_0x430b32&&(_0x55fb91['symbol']=!0x0),!(_0x385f4d===_0x150a08(0x2a6)||_0x385f4d===_0x150a08(0x2cb))){var _0x1e9d6a=this[_0x150a08(0x20e)](_0x4096b8,_0x542397);if(_0x1e9d6a&&(_0x1e9d6a[_0x150a08(0x247)]&&(_0x55fb91[_0x150a08(0x214)]=!0x0),_0x1e9d6a[_0x150a08(0x259)]&&!_0xa4f4c9&&!_0x49771e['resolveGetters']))return _0x55fb91['getter']=!0x0,this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e),_0x55fb91;}var _0x386380;try{_0x386380=_0x45c7e6(_0x4096b8,_0x542397);}catch(_0x349a0f){return _0x55fb91={'name':_0x15810a,'type':_0x150a08(0x269),'error':_0x349a0f[_0x150a08(0x24c)]},this['_processTreeNodeResult'](_0x55fb91,_0x49771e),_0x55fb91;}var _0x11f10e=this[_0x150a08(0x2b5)](_0x386380),_0x4ba23f=this[_0x150a08(0x258)](_0x11f10e);if(_0x55fb91[_0x150a08(0x22c)]=_0x11f10e,_0x4ba23f)this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){_0x55fb91['value']=_0x386380['valueOf'](),!_0xa4f4c9&&_0x4fdf64['_capIfString'](_0x11f10e,_0x55fb91,_0x49771e,{});});else{var _0x1813ce=_0x49771e['autoExpand']&&_0x49771e['level']<_0x49771e[_0x150a08(0x24f)]&&_0x49771e[_0x150a08(0x262)][_0x150a08(0x21c)](_0x386380)<0x0&&_0x11f10e!==_0x150a08(0x2a2)&&_0x49771e[_0x150a08(0x1f9)]<_0x49771e[_0x150a08(0x274)];_0x1813ce||_0x49771e[_0x150a08(0x2d5)]<_0x1375ca||_0xa4f4c9?(this[_0x150a08(0x2ce)](_0x55fb91,_0x386380,_0x49771e,_0xa4f4c9||{}),this[_0x150a08(0x26d)](_0x386380,_0x55fb91)):this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){var _0x26a900=_0x150a08;_0x11f10e===_0x26a900(0x2ac)||_0x11f10e===_0x26a900(0x273)||(delete _0x55fb91['value'],_0x55fb91['capped']=!0x0);});}return _0x55fb91;}finally{_0x49771e[_0x150a08(0x267)]=_0x4650d8,_0x49771e[_0x150a08(0x201)]=_0x1375ca,_0x49771e['isExpressionToEvaluate']=_0x1b5ac9;}}['_capIfString'](_0x2264ea,_0x5da6a3,_0x58e8b4,_0x43bece){var _0x2c13b5=_0x82d3ef,_0x4e27a8=_0x43bece[_0x2c13b5(0x279)]||_0x58e8b4[_0x2c13b5(0x279)];if((_0x2264ea==='string'||_0x2264ea==='String')&&_0x5da6a3[_0x2c13b5(0x2bd)]){let _0x5b5c75=_0x5da6a3[_0x2c13b5(0x2bd)][_0x2c13b5(0x25f)];_0x58e8b4[_0x2c13b5(0x2d4)]+=_0x5b5c75,_0x58e8b4[_0x2c13b5(0x2d4)]>_0x58e8b4[_0x2c13b5(0x208)]?(_0x5da6a3[_0x2c13b5(0x205)]='',delete _0x5da6a3[_0x2c13b5(0x2bd)]):_0x5b5c75>_0x4e27a8&&(_0x5da6a3[_0x2c13b5(0x205)]=_0x5da6a3['value'][_0x2c13b5(0x241)](0x0,_0x4e27a8),delete _0x5da6a3[_0x2c13b5(0x2bd)]);}}[_0x82d3ef(0x27b)](_0x36efce){var _0x162ae2=_0x82d3ef;return!!(_0x36efce&&_0x283aea[_0x162ae2(0x266)]&&this[_0x162ae2(0x1fd)](_0x36efce)===_0x162ae2(0x224)&&_0x36efce[_0x162ae2(0x23b)]);}['_propertyName'](_0x414219){var _0x3fe189=_0x82d3ef;if(_0x414219[_0x3fe189(0x20a)](/^\\d+$/))return _0x414219;var _0x3c2b8f;try{_0x3c2b8f=JSON['stringify'](''+_0x414219);}catch{_0x3c2b8f='\\x22'+this['_objectToString'](_0x414219)+'\\x22';}return _0x3c2b8f['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x241)](0x1,_0x3c2b8f[_0x3fe189(0x25f)]-0x2):_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x254)](/'/g,'\\x5c\\x27')[_0x3fe189(0x254)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3c2b8f;}[_0x82d3ef(0x2c6)](_0xf30c35,_0x46dea0,_0x5f14fe,_0x25d67c){var _0x16c886=_0x82d3ef;this[_0x16c886(0x228)](_0xf30c35,_0x46dea0),_0x25d67c&&_0x25d67c(),this['_additionalMetadata'](_0x5f14fe,_0xf30c35),this[_0x16c886(0x240)](_0xf30c35,_0x46dea0);}[_0x82d3ef(0x228)](_0x186259,_0x219a92){var _0x1e8d13=_0x82d3ef;this[_0x1e8d13(0x28f)](_0x186259,_0x219a92),this[_0x1e8d13(0x1f7)](_0x186259,_0x219a92),this[_0x1e8d13(0x227)](_0x186259,_0x219a92),this[_0x1e8d13(0x265)](_0x186259,_0x219a92);}['_setNodeId'](_0x5f2afc,_0x330b7c){}[_0x82d3ef(0x1f7)](_0x4786f8,_0x5e5301){}[_0x82d3ef(0x298)](_0x586b9e,_0x5e62f3){}[_0x82d3ef(0x29d)](_0x2e0a84){var _0x420aa1=_0x82d3ef;return _0x2e0a84===this[_0x420aa1(0x20f)];}['_treeNodePropertiesAfterFullValue'](_0x46ac19,_0x54b762){var _0x2f2625=_0x82d3ef;this['_setNodeLabel'](_0x46ac19,_0x54b762),this[_0x2f2625(0x283)](_0x46ac19),_0x54b762[_0x2f2625(0x252)]&&this[_0x2f2625(0x280)](_0x46ac19),this[_0x2f2625(0x2c2)](_0x46ac19,_0x54b762),this[_0x2f2625(0x28c)](_0x46ac19,_0x54b762),this[_0x2f2625(0x24a)](_0x46ac19);}[_0x82d3ef(0x26d)](_0x450fbe,_0x38f13b){var _0x1bab72=_0x82d3ef;let _0x3a36d5;try{_0x283aea[_0x1bab72(0x244)]&&(_0x3a36d5=_0x283aea['console'][_0x1bab72(0x234)],_0x283aea[_0x1bab72(0x244)][_0x1bab72(0x234)]=function(){}),_0x450fbe&&typeof _0x450fbe[_0x1bab72(0x25f)]==_0x1bab72(0x225)&&(_0x38f13b[_0x1bab72(0x25f)]=_0x450fbe['length']);}catch{}finally{_0x3a36d5&&(_0x283aea['console'][_0x1bab72(0x234)]=_0x3a36d5);}if(_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x225)||_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x238)){if(isNaN(_0x38f13b[_0x1bab72(0x2bd)]))_0x38f13b[_0x1bab72(0x25b)]=!0x0,delete _0x38f13b['value'];else switch(_0x38f13b[_0x1bab72(0x2bd)]){case Number['POSITIVE_INFINITY']:_0x38f13b[_0x1bab72(0x268)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case Number[_0x1bab72(0x270)]:_0x38f13b[_0x1bab72(0x29b)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case 0x0:this['_isNegativeZero'](_0x38f13b[_0x1bab72(0x2bd)])&&(_0x38f13b['negativeZero']=!0x0);break;}}else _0x38f13b['type']===_0x1bab72(0x2a2)&&typeof _0x450fbe['name']==_0x1bab72(0x282)&&_0x450fbe[_0x1bab72(0x253)]&&_0x38f13b['name']&&_0x450fbe['name']!==_0x38f13b['name']&&(_0x38f13b['funcName']=_0x450fbe[_0x1bab72(0x253)]);}[_0x82d3ef(0x209)](_0x120d09){var _0x44f14c=_0x82d3ef;return 0x1/_0x120d09===Number[_0x44f14c(0x270)];}['_sortProps'](_0x1bb666){var _0x51b398=_0x82d3ef;!_0x1bb666['props']||!_0x1bb666[_0x51b398(0x2c5)]['length']||_0x1bb666['type']===_0x51b398(0x2a6)||_0x1bb666[_0x51b398(0x22c)]==='Map'||_0x1bb666['type']===_0x51b398(0x233)||_0x1bb666[_0x51b398(0x2c5)][_0x51b398(0x250)](function(_0x38b0a6,_0x1c6fe5){var _0xb48cb7=_0x51b398,_0x4a8acb=_0x38b0a6['name'][_0xb48cb7(0x2c7)](),_0x441d7a=_0x1c6fe5[_0xb48cb7(0x253)][_0xb48cb7(0x2c7)]();return _0x4a8acb<_0x441d7a?-0x1:_0x4a8acb>_0x441d7a?0x1:0x0;});}[_0x82d3ef(0x2c2)](_0x4440ac,_0x60290f){var _0x3663e2=_0x82d3ef;if(!(_0x60290f[_0x3663e2(0x1f6)]||!_0x4440ac[_0x3663e2(0x2c5)]||!_0x4440ac['props'][_0x3663e2(0x25f)])){for(var _0x1473c8=[],_0x31a8a8=[],_0x262b12=0x0,_0x186c01=_0x4440ac['props']['length'];_0x262b12<_0x186c01;_0x262b12++){var _0x86c2b5=_0x4440ac[_0x3663e2(0x2c5)][_0x262b12];_0x86c2b5[_0x3663e2(0x22c)]===_0x3663e2(0x2a2)?_0x1473c8[_0x3663e2(0x246)](_0x86c2b5):_0x31a8a8['push'](_0x86c2b5);}if(!(!_0x31a8a8[_0x3663e2(0x25f)]||_0x1473c8[_0x3663e2(0x25f)]<=0x1)){_0x4440ac[_0x3663e2(0x2c5)]=_0x31a8a8;var _0x1ac39a={'functionsNode':!0x0,'props':_0x1473c8};this['_setNodeId'](_0x1ac39a,_0x60290f),this[_0x3663e2(0x298)](_0x1ac39a,_0x60290f),this[_0x3663e2(0x283)](_0x1ac39a),this[_0x3663e2(0x265)](_0x1ac39a,_0x60290f),_0x1ac39a['id']+='\\x20f',_0x4440ac['props'][_0x3663e2(0x218)](_0x1ac39a);}}}[_0x82d3ef(0x28c)](_0x592cf3,_0x236116){}['_setNodeExpandableState'](_0x291664){}['_isArray'](_0x7f2133){var _0x396994=_0x82d3ef;return Array[_0x396994(0x22a)](_0x7f2133)||typeof _0x7f2133==_0x396994(0x24e)&&this[_0x396994(0x1fd)](_0x7f2133)===_0x396994(0x26a);}[_0x82d3ef(0x265)](_0x53ecb2,_0x3011df){}['_cleanNode'](_0x4095c4){var _0x36091a=_0x82d3ef;delete _0x4095c4[_0x36091a(0x22e)],delete _0x4095c4['_hasSetOnItsPath'],delete _0x4095c4[_0x36091a(0x215)];}[_0x82d3ef(0x227)](_0x1722d6,_0x397b43){}}let _0x337799=new _0x376622(),_0x1740c6={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x324a27={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23f2a1(_0xc61d77,_0x548d43,_0x29c197,_0x4add74,_0x2fcd07,_0x3ddcd1){var _0xc3597a=_0x82d3ef;let _0x1001c2,_0x5c5f94;try{_0x5c5f94=_0x160e79(),_0x1001c2=_0x124182[_0x548d43],!_0x1001c2||_0x5c5f94-_0x1001c2['ts']>0x1f4&&_0x1001c2[_0xc3597a(0x21e)]&&_0x1001c2[_0xc3597a(0x2ad)]/_0x1001c2[_0xc3597a(0x21e)]<0x64?(_0x124182[_0x548d43]=_0x1001c2={'count':0x0,'time':0x0,'ts':_0x5c5f94},_0x124182[_0xc3597a(0x2b3)]={}):_0x5c5f94-_0x124182[_0xc3597a(0x2b3)]['ts']>0x32&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]/_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]<0x64&&(_0x124182[_0xc3597a(0x2b3)]={});let _0x2a42e8=[],_0xb1dda1=_0x1001c2[_0xc3597a(0x242)]||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x242)]?_0x324a27:_0x1740c6,_0x18aff5=_0x396226=>{var _0x45ca4e=_0xc3597a;let _0x288eec={};return _0x288eec[_0x45ca4e(0x2c5)]=_0x396226[_0x45ca4e(0x2c5)],_0x288eec[_0x45ca4e(0x222)]=_0x396226[_0x45ca4e(0x222)],_0x288eec[_0x45ca4e(0x279)]=_0x396226[_0x45ca4e(0x279)],_0x288eec[_0x45ca4e(0x208)]=_0x396226['totalStrLength'],_0x288eec[_0x45ca4e(0x274)]=_0x396226['autoExpandLimit'],_0x288eec[_0x45ca4e(0x24f)]=_0x396226[_0x45ca4e(0x24f)],_0x288eec['sortProps']=!0x1,_0x288eec[_0x45ca4e(0x1f6)]=!_0x39cf15,_0x288eec[_0x45ca4e(0x201)]=0x1,_0x288eec[_0x45ca4e(0x2d5)]=0x0,_0x288eec['expId']=_0x45ca4e(0x297),_0x288eec['rootExpression']='root_exp',_0x288eec['autoExpand']=!0x0,_0x288eec[_0x45ca4e(0x262)]=[],_0x288eec[_0x45ca4e(0x1f9)]=0x0,_0x288eec[_0x45ca4e(0x260)]=!0x0,_0x288eec[_0x45ca4e(0x2d4)]=0x0,_0x288eec[_0x45ca4e(0x217)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x288eec;};for(var _0x5d5bd7=0x0;_0x5d5bd7<_0x2fcd07['length'];_0x5d5bd7++)_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'timeNode':_0xc61d77===_0xc3597a(0x2ad)||void 0x0},_0x2fcd07[_0x5d5bd7],_0x18aff5(_0xb1dda1),{}));if(_0xc61d77===_0xc3597a(0x284)){let _0x2131b1=Error['stackTraceLimit'];try{Error[_0xc3597a(0x21b)]=0x1/0x0,_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'stackNode':!0x0},new Error()['stack'],_0x18aff5(_0xb1dda1),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x2131b1;}}return{'method':_0xc3597a(0x23a),'version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':_0x2a42e8,'id':_0x548d43,'context':_0x3ddcd1}]};}catch(_0x9ea483){return{'method':'log','version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':[{'type':_0xc3597a(0x269),'error':_0x9ea483&&_0x9ea483[_0xc3597a(0x24c)]}],'id':_0x548d43,'context':_0x3ddcd1}]};}finally{try{if(_0x1001c2&&_0x5c5f94){let _0x279239=_0x160e79();_0x1001c2[_0xc3597a(0x21e)]++,_0x1001c2[_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x1001c2['ts']=_0x279239,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]++,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x124182[_0xc3597a(0x2b3)]['ts']=_0x279239,(_0x1001c2[_0xc3597a(0x21e)]>0x32||_0x1001c2[_0xc3597a(0x2ad)]>0x64)&&(_0x1001c2[_0xc3597a(0x242)]=!0x0),(_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]>0x3e8||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]>0x12c)&&(_0x124182[_0xc3597a(0x2b3)]['reduceLimits']=!0x0);}}catch{}}}return _0x23f2a1;}((_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5410ef,_0x82de96,_0x353f0a,_0x44228c,_0x5087cf)=>{var _0x3e67cb=_0x3c9133;if(_0x24201d[_0x3e67cb(0x202)])return _0x24201d[_0x3e67cb(0x202)];if(!Y(_0x24201d,_0x353f0a,_0x7a16be))return _0x24201d['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x24201d[_0x3e67cb(0x202)];let _0x1e6e8e=W(_0x24201d),_0x1d3237=_0x1e6e8e[_0x3e67cb(0x2a0)],_0x21509f=_0x1e6e8e[_0x3e67cb(0x2c0)],_0x3e1850=_0x1e6e8e[_0x3e67cb(0x2b2)],_0x2c8b38={'hits':{},'ts':{}},_0x275983=Q(_0x24201d,_0x44228c,_0x2c8b38,_0x5410ef),_0x127295=_0x459189=>{_0x2c8b38['ts'][_0x459189]=_0x21509f();},_0x2b165a=(_0x44840e,_0x4c980b)=>{var _0x2d8b84=_0x3e67cb;let _0x36dee7=_0x2c8b38['ts'][_0x4c980b];if(delete _0x2c8b38['ts'][_0x4c980b],_0x36dee7){let _0x1e2eb3=_0x1d3237(_0x36dee7,_0x21509f());_0x1666dc(_0x275983(_0x2d8b84(0x2ad),_0x44840e,_0x3e1850(),_0xce6c91,[_0x1e2eb3],_0x4c980b));}},_0x39bf76=_0x4c030d=>_0x42b2f4=>{var _0x596a7c=_0x3e67cb;try{_0x127295(_0x42b2f4),_0x4c030d(_0x42b2f4);}finally{_0x24201d['console'][_0x596a7c(0x2ad)]=_0x4c030d;}},_0x150705=_0x6c9dc9=>_0x1aaf9b=>{var _0x25a43c=_0x3e67cb;try{let [_0x54747e,_0x1c9789]=_0x1aaf9b[_0x25a43c(0x2d0)](_0x25a43c(0x27e));_0x2b165a(_0x1c9789,_0x54747e),_0x6c9dc9(_0x54747e);}finally{_0x24201d[_0x25a43c(0x244)][_0x25a43c(0x2cd)]=_0x6c9dc9;}};_0x24201d[_0x3e67cb(0x202)]={'consoleLog':(_0x7a1191,_0x19286e)=>{var _0x59f4ac=_0x3e67cb;_0x24201d[_0x59f4ac(0x244)][_0x59f4ac(0x23a)]['name']!==_0x59f4ac(0x22d)&&_0x1666dc(_0x275983('log',_0x7a1191,_0x3e1850(),_0xce6c91,_0x19286e));},'consoleTrace':(_0x34d58b,_0x1b81f5)=>{var _0x1c1864=_0x3e67cb;_0x24201d[_0x1c1864(0x244)][_0x1c1864(0x23a)]['name']!==_0x1c1864(0x1f2)&&_0x1666dc(_0x275983(_0x1c1864(0x284),_0x34d58b,_0x3e1850(),_0xce6c91,_0x1b81f5));},'consoleTime':()=>{var _0x3008ff=_0x3e67cb;_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]=_0x39bf76(_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]);},'consoleTimeEnd':()=>{var _0x7ed41f=_0x3e67cb;_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]=_0x150705(_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]);},'autoLog':(_0x186c8b,_0x1a2a53)=>{var _0x3a01b9=_0x3e67cb;_0x1666dc(_0x275983(_0x3a01b9(0x23a),_0x1a2a53,_0x3e1850(),_0xce6c91,[_0x186c8b]));},'autoLogMany':(_0x9d29d8,_0x218cb6)=>{var _0x5b9a81=_0x3e67cb;_0x1666dc(_0x275983(_0x5b9a81(0x23a),_0x9d29d8,_0x3e1850(),_0xce6c91,_0x218cb6));},'autoTrace':(_0x4d7c27,_0x4ce12b)=>{var _0xe1b054=_0x3e67cb;_0x1666dc(_0x275983(_0xe1b054(0x284),_0x4ce12b,_0x3e1850(),_0xce6c91,[_0x4d7c27]));},'autoTraceMany':(_0x4dd34e,_0x4033b3)=>{var _0x40542c=_0x3e67cb;_0x1666dc(_0x275983(_0x40542c(0x284),_0x4dd34e,_0x3e1850(),_0xce6c91,_0x4033b3));},'autoTime':(_0x5255bb,_0x284f65,_0x38a502)=>{_0x127295(_0x38a502);},'autoTimeEnd':(_0x4f2eef,_0x39435a,_0x1e3399)=>{_0x2b165a(_0x39435a,_0x1e3399);},'coverage':_0x49c495=>{var _0x368e28=_0x3e67cb;_0x1666dc({'method':_0x368e28(0x299),'version':_0x5410ef,'args':[{'id':_0x49c495}]});}};let _0x1666dc=J(_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5087cf),_0xce6c91=_0x24201d['_console_ninja_session'];return _0x24201d[_0x3e67cb(0x202)];})(globalThis,_0x3c9133(0x2ab),'63933',_0x3c9133(0x2aa),'remix',_0x3c9133(0x23e),_0x3c9133(0x251),_0x3c9133(0x2d2),_0x3c9133(0x204),'');`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/component/Header.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), navigation = [];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  let { user } = (0, import_react11.useLoaderData)(), isAdmin = (user == null ? void 0 : user.role) === "admin";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react10.Disclosure,
    {
      as: "nav",
      className: "bg-white dark:bg-gray-900  w-full z-20  border-b border-gray-200 dark:border-gray-600  header",
      children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto  px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center gap-2 sm:items-stretch sm:justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react11.NavLink,
              {
                to: "/",
                className: ({ isActive, isPending }) => "h-8 w-auto text-gray-300",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 dark:text-white text-black sm:truncate sm:text-3xl sm:tracking-tight", children: "Pecha Tools" }, void 0, !1, {
                  fileName: "app/component/Header.tsx",
                  lineNumber: 35,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/component/Header.tsx",
                lineNumber: 29,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 28,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex space-x-4", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "a",
              {
                href: item.href,
                className: classNames(
                  item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                ),
                "aria-current": item.current ? "page" : void 0,
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/component/Header.tsx",
                lineNumber: 44,
                columnNumber: 23
              },
              this
            )) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 42,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/component/Header.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Button, { className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 66,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 67,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "img",
                {
                  className: "h-8 w-8 rounded-full",
                  src: user == null ? void 0 : user.picture,
                  title: user == null ? void 0 : user.email,
                  alt: user == null ? void 0 : user.email
                },
                void 0,
                !1,
                {
                  fileName: "app/component/Header.tsx",
                  lineNumber: 68,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/component/Header.tsx",
              lineNumber: 65,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 64,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react10.Transition,
              {
                as: import_react9.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "div",
                    {
                      className: classNames(
                        "block px-4 py-2 text-sm text-gray-700"
                      ),
                      children: user.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/component/Header.tsx",
                      lineNumber: 88,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 86,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    import_react11.Link,
                    {
                      to: "/dashboard",
                      className: classNames(
                        isAdmin ? "" : "hidden",
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      ),
                      children: "Dashboard"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/component/Header.tsx",
                      lineNumber: 99,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    import_react11.Link,
                    {
                      to: "/logout",
                      className: classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      ),
                      children: "Sign out"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/component/Header.tsx",
                      lineNumber: 113,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 111,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/component/Header.tsx",
                  lineNumber: 85,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/component/Header.tsx",
                lineNumber: 76,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/component/Header.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Login, {}, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Header.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react10.Disclosure.Button,
          {
            as: "a",
            href: item.href,
            className: classNames(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            ),
            "aria-current": item.current ? "page" : void 0,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/component/Header.tsx",
            lineNumber: 137,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/component/Header.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/constant.ts
var toolList = [
  {
    name: "word_segmentor",
    url: "https://word.pecha.tools",
    needUser: !1,
    demo: "https://word.pecha.tools/demo",
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.d{fill:none}.a,.c,.d{stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.c,.d{stroke-width:.75px}.c{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ccircle cx='73.734' cy='34.889' r='3'/%3E%3Cpath class='a' d='M74.234 43.389v-6'/%3E%3Ccircle cx='85.562' cy='55.081' r='2.928'/%3E%3Cpath d='M63.398 55.08s-7.361 7.956-16.442 7.956-16.441-7.955-16.441-7.955 7.361-7.956 16.441-7.956 16.442 7.956 16.442 7.956Z' style='stroke-width:.75px;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Ccircle class='c' cx='73.883' cy='55.081' r='11.874'/%3E%3Cpath class='c' d='m42.488 21.288 5.366 30.873c-3.8 1.006-9.534-4.706-11.016-13.232s1.85-16.635 5.65-17.64Z'/%3E%3Cpath class='c' d='m51.34 21.288-5.365 30.873c3.8 1.006 9.534-4.706 11.015-13.232s-1.848-16.635-5.65-17.64Z'/%3E%3Ccircle cx='43.734' cy='47.889' r='1'/%3E%3Cpath class='c' d='m51.425 88.712-5.366-30.873c3.8-1.006 9.534 4.706 11.015 13.232s-1.848 16.635-5.65 17.64Z'/%3E%3Cpath class='c' d='m42.572 88.712 5.366-30.873c-3.8-1.006-9.534 4.706-11.016 13.232s1.85 16.635 5.65 17.64Z'/%3E%3Ccircle cx='49.734' cy='61.889' r='1'/%3E%3Ccircle cx='73.734' cy='54.889' r='2'/%3E%3Cpath class='d' d='M81.765 55.08s-3.529 3.814-7.882 3.814-7.881-3.813-7.881-3.813 3.528-3.814 7.881-3.814 7.882 3.814 7.882 3.814Z'/%3E%3Cpath class='a' d='M88.234 55.389h10'/%3E%3Cpath class='d' d='m23.425 47.776 4.799-4.798 9.078 9.078M23.425 62.385l4.799 4.799 9.078-9.079M79.706 34.545l3.161-3.741 3.336 8.784 5.794-12.525 3.863 8.946 2.634-4.392'/%3E%3C/svg%3E"
  },
  {
    name: "sentence_segmentor",
    url: "https://sentence.pecha.tools",
    needUser: !1,
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.b{fill:%23fff;stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.b{fill:none}%3C/style%3E%3C/defs%3E%3Ccircle class='a' cx='55.234' cy='55.389' r='3'/%3E%3Cpath class='b' d='m64.466 79.791 7.091 9.409 2.872-2.471M41.767 89.2l-2.51-2.838 8.304-8.358M55.234 62.389v-4'/%3E%3Cpath d='M82.234 49.389v13.88a10.12 10.12 0 0 1-10.12 10.12h-33.76a10.12 10.12 0 0 1-10.12-10.12v-13.88' style='stroke-width:.75px;fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Cpath class='a' d='M21.544 46.106A15.141 15.141 0 0 0 44.03 25.824Z'/%3E%3Cpath class='a' d='M32.234 51.081a15.09 15.09 0 0 1-15.272-15.01c.01-9.682 7.01-15.682 15.272-15.271Z'/%3E%3Ccircle cx='27.734' cy='46.889' r='1'/%3E%3Cpath class='a' d='M88.456 46.106A15.141 15.141 0 0 1 65.97 25.824Z'/%3E%3Cpath class='a' d='M77.234 51.081a15.141 15.141 0 0 0 15.272-15.01c.072-8.361-6.01-15.682-15.272-15.271Z'/%3E%3Ccircle cx='81.734' cy='46.889' r='1'/%3E%3Cpath d='M72.373 79.889a17.416 17.416 0 0 0-34.832 0Z'/%3E%3Cpath d='M65.656 72.178s-4.756 5.14-10.624 5.14-10.624-5.14-10.624-5.14 4.757-5.141 10.624-5.141 10.624 5.14 10.624 5.14Z' style='fill:%23fff'/%3E%3Ccircle cx='58.734' cy='70.889' r='3'/%3E%3C/svg%3E"
  },
  {
    name: "BO-EN_post_editor",
    url: "https://post-editor.pecha.tools/bo_en",
    needUser: !1,
    ICON: "/svg/bo-en-translate.png"
  },
  {
    name: "EN-BO_post_editor",
    url: "https://post-editor.pecha.tools/en_bo",
    needUser: !1,
    ICON: "/svg/en-bo-translate.png"
  },
  {
    name: "Speech_To_Text",
    url: null,
    department: ["stt"],
    needUser: !1,
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.c{fill:%23fff}.a,.b,.c,.d,.e{stroke:%23000}.a,.b,.c,.e{stroke-linecap:round;stroke-linejoin:round}.b,.e{fill:none}.b,.c{stroke-width:.75px}.d{stroke-miterlimit:10}%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M19.234 81.766V60.853a7.465 7.465 0 0 1 7.465-7.464h8.535v7h-3.729a3.271 3.271 0 0 0-3.271 3.27v9.107a9 9 0 0 1-9 9Z'/%3E%3Cpath class='a' d='M19.234 29.011v20.913a7.465 7.465 0 0 0 7.465 7.465h8.535v-7h-3.729a3.271 3.271 0 0 1-3.271-3.272v-9.106a9 9 0 0 0-9-9Z'/%3E%3Ccircle class='b' cx='24.818' cy='51.209' r='2.357'/%3E%3Cpath class='b' d='m23.151 52.876 3.333-3.333'/%3E%3Cpath class='c' d='M55.92 25.3a7.828 7.828 0 0 1 7.829 7.828v15.425h-5.065V33.128a7.828 7.828 0 0 0-7.828-7.828h5.065Z'/%3E%3Cpath class='a' d='M79.781 52.389h-.588A23.557 23.557 0 0 0 48.99 32.867a22.863 22.863 0 0 0-15.73 16.072 23.508 23.508 0 1 0 45.928 9.45h.593a6.453 6.453 0 0 1 6.453 6.452V45.936a6.453 6.453 0 0 1-6.453 6.453Z'/%3E%3Crect class='d' x='85.234' y='44.389' width='4' height='21' rx='1.88' transform='rotate(180 87.234 54.889)'/%3E%3Cpath class='e' d='M87.234 74.389v3.827a6.173 6.173 0 0 1-6.173 6.173H52.406a6.173 6.173 0 0 1-6.172-6.173V63.389'/%3E%3Crect class='d' x='84.234' y='68.389' width='6' height='6' rx='2.235'/%3E%3Cpath class='c' d='M76.316 55.324s-4.176 4.424-9.272 4.373-9.183-4.558-9.183-4.558 4.176-4.423 9.272-4.372 9.183 4.557 9.183 4.557Z'/%3E%3Ccircle cx='69.234' cy='56.388' r='2.5'/%3E%3Cpath class='e' d='M53.234 67.389v6M56.234 67.389v6M59.234 67.389v6'/%3E%3Cpath class='a' d='M44.234 33.116v15.273h5V33.13a7.735 7.735 0 0 1 7.727-7.742h-5a7.727 7.727 0 0 0-7.727 7.727Z'/%3E%3Ccircle cx='46.734' cy='54.889' r='9' style='stroke-miterlimit:10;stroke-width:.75px;stroke:%23000'/%3E%3Ccircle cx='46.136' cy='55.115' r='4.95' style='stroke:%23fff;stroke-width:.5px;fill:none;stroke-linecap:round;stroke-linejoin:round'/%3E%3C/svg%3E",
    demo: "https://work.pecha.tools/stt_cs_gb_review/?session=spsither@gmail.com"
  },
  {
    name: "OCR",
    url: null,
    needUser: !1,
    department: ["ocr", "gylph"],
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.b{fill:%23fff;stroke:%23000}.a,.b,.c{stroke-linecap:round;stroke-linejoin:round}.a{stroke-width:.75px}.c{fill:none;stroke:%23fff}%3C/style%3E%3C/defs%3E%3Cpath class='a' d='m61.94 76.412 4.088-2.057h0l2.295 4.56a2.288 2.288 0 0 1-1.015 3.072h0a2.288 2.288 0 0 1-3.073-1.015l-2.296-4.56h0Z'/%3E%3Cpath class='b' d='M30.183 37.389h29.05v31h0-29.05a6.95 6.95 0 0 1-6.95-6.95V44.338a6.95 6.95 0 0 1 6.95-6.95Z'/%3E%3Crect class='b' x='51.234' y='30.389' width='46' height='46' rx='9.938'/%3E%3Crect x='56.734' y='44.889' width='35' height='26' rx='7.488'/%3E%3Cpath class='c' d='M63.234 44.389v26M78.234 50.389v20M91.234 50.389h-35M91.234 60.389h-28M84.234 52.389v6M87.234 55.389h-6'/%3E%3Ccircle class='c' cx='70.234' cy='65.389' r='3'/%3E%3Cpath d='M59.734 22.889h.902a6.098 6.098 0 0 1 6.098 6.097v.903h-7v-7ZM87.734 29.889h-7v-.903a6.098 6.098 0 0 1 6.098-6.097h.902v7Z'/%3E%3Cpath class='a' d='m39.583 76.412 4.088-2.057h0l2.296 4.56a2.288 2.288 0 0 1-1.016 3.072h0a2.288 2.288 0 0 1-3.073-1.015l-2.295-4.56h0Z'/%3E%3Cpath d='M46.3 81.784a5.105 5.105 0 0 0-5.105 5.105h10.21a5.105 5.105 0 0 0-5.105-5.105ZM68.656 81.784a5.105 5.105 0 0 0-5.105 5.105h10.21a5.105 5.105 0 0 0-5.105-5.105Z'/%3E%3Cpath class='a' d='M31.497 55.06h0a6.601 6.601 0 0 1 8.864 2.929l7.875 15.645h0L36.443 79.57h0l-7.875-15.646a6.601 6.601 0 0 1 2.929-8.864Z'/%3E%3Ccircle cx='34.188' cy='60.603' r='2.288' style='fill:none;stroke-width:.75px;stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Crect x='26.234' y='43.389' width='21' height='3' rx='1.421' style='stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Cpath class='b' d='M38.01 33.389a3 3 0 0 1 3-3H27.526a3 3 0 0 0-3 3Z'/%3E%3Cpath class='b' d='M40.358 30.389H27.337a2.922 2.922 0 0 1 2.897 2.945l-.022 13.055h0l13.022.008h0l.022-13.063a2.922 2.922 0 0 0-2.898-2.945Z'/%3E%3Cpath d='M23.234 45.389h-3.361a4.639 4.639 0 0 0-4.64 4.639v13.36' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Ccircle cx='15.234' cy='61.389' r='2.5'/%3E%3Cpath class='a' d='M82.646 37.185s-4.009 4.332-8.954 4.332-8.953-4.332-8.953-4.332a18.707 18.707 0 0 1 8.953-2.517 18.707 18.707 0 0 1 8.954 2.517Z'/%3E%3Ccircle cx='73.234' cy='39.389' r='2.5'/%3E%3C/svg%3E",
    demo: "https://work.pecha.tools/glyph_annotation/"
  }
];

// app/services/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session_pechatool",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: ["seecret"],
    // replace this with an actual secret
    secure: !1
    // enable this in prod only
  }
});
async function getUserSession(request) {
  return (await getSession(request.headers.get("Cookie"))).get("user");
}
var { getSession, commitSession, destroySession } = sessionStorage;

// app/routes/demo.$tool.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader = async ({ request, params }) => {
  let toolname = params.tool, user = await getUserSession(request), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  if (toolList.find((d) => d.name === toolname)) {
    let filtered = toolList.find((tool) => tool.name === toolname), url = filtered == null ? void 0 : filtered.demo;
    return {
      user,
      url,
      toolname,
      env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV }
    };
  }
}, meta = ({ params }) => {
  let toolname = params.tool;
  return [
    { title: `Pecha_tools | demo-${toolname}` },
    {
      name: "description",
      content: `demo of pecha tools - ${toolname}`
    }
  ];
};
function Tool() {
  let { url } = (0, import_react12.useLoaderData)(), [loaded, setLoaded] = (0, import_react13.useState)(!1), iframeRef = (0, import_react13.useRef)(null);
  function onLoadFunction() {
    let iframe = iframeRef.current;
    setLoaded(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/demo.$tool.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "iframe-container", children: [
      !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Loading, {}, void 0, !1, {
        fileName: "app/routes/demo.$tool.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("iframe", { src: url, onLoad: onLoadFunction, ref: iframeRef }, void 0, !1, {
        fileName: "app/routes/demo.$tool.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.$tool.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.$tool.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var demo_tool_default = Tool;
function Loading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh"
      },
      children: "loading.... wait for a moment"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/demo.$tool.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}

// app/routes/tool.$tool.tsx
var tool_tool_exports = {};
__export(tool_tool_exports, {
  default: () => tool_tool_default,
  loader: () => loader2,
  meta: () => meta2
});
var import_node3 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/api/getUserToolInfo.ts
async function fetchToolInfo(email) {
  try {
    return await (await fetch(`https://stt.pecha.tools/api/mapping/${email}`)).json();
  } catch (err) {
    return err;
  }
}

// app/utils/combineTools.ts
async function getCombineTools(email) {
  var _a;
  if (email) {
    let updatedTool = await fetchToolInfo(email);
    for (let i = 0; i < toolList.length; i++)
      (_a = toolList[i].department) != null && _a.includes(updatedTool.department) && (toolList[i].url = updatedTool.url);
  }
  return toolList;
}

// app/routes/tool.$tool.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let user = await getUserSession(request);
  user || (0, import_node3.redirect)("/");
  let toolname = params.tool, toolList2 = await getCombineTools(user == null ? void 0 : user.email);
  if (toolList2.find((d) => d.name === toolname)) {
    let filtered = toolList2.filter((tool) => tool.name === toolname), url = filtered[0].url;
    return filtered[0].url.includes("session") || (console.log(...oo_oo3("4108612351_0", url)), url = filtered[0].url + "?session=" + (user == null ? void 0 : user.email)), {
      url,
      toolname,
      user
    };
  }
  return null;
}, meta2 = ({ params }) => [
  { title: `Pecha_tools | ${params.tool}` },
  {
    name: "description",
    content: "pecha tools is collection of tool used for mt"
  }
];
function Tool2() {
  let { url } = (0, import_react14.useLoaderData)(), [loaded, setLoaded] = (0, import_react15.useState)(!1), iframeRef = (0, import_react15.useRef)(null);
  function onLoadFunction() {
    let iframe = iframeRef.current;
    setLoaded(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/tool.$tool.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "iframe-container", children: [
      !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Loading2, {}, void 0, !1, {
        fileName: "app/routes/tool.$tool.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("iframe", { src: url, onLoad: onLoadFunction, ref: iframeRef }, void 0, !1, {
        fileName: "app/routes/tool.$tool.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tool.$tool.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tool.$tool.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
var tool_tool_default = Tool2;
function Loading2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh"
      },
      children: "loading.... wait for a moment"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/tool.$tool.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
function oo_cm3() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3c9133=_0x141d;function _0x4457(){var _0x1a9011=['ws://','negativeInfinity','current','_isUndefined','then','getPrototypeOf','elapsed','_WebSocketClass','function','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','bigint','getOwnPropertyNames','array','enumerable','parent','_connected',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.226\\\\node_modules",'127.0.0.1','null','time','performance','autoExpand','_connecting','date','now','hits','test','_type','_p_name','Boolean','location','getWebSocketClass','_connectToHostNow','_numberRegExp','_reconnectTimeout','value','gateway.docker.internal','2594053INDhbG','timeStamp','port','_addFunctionsNode','514255ulWozA','call','props','_processTreeNodeResult','toLowerCase','_getOwnPropertyNames','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','pop','Error','_WebSocket','timeEnd','serialize','_allowedToConnectOnSend','split','onclose',["localhost","127.0.0.1","example.cypress.io","kunsang","172.18.64.1","192.168.1.5"],'hasOwnProperty','allStrLength','level','disabledTrace','[object\\x20Set]','_keyStrRegExp','valueOf','noFunctions','_setNodeQueryPath','https://tinyurl.com/37x8b79t','autoExpandPropertyCount','_connectAttemptCount','reload','_Symbol','_objectToString','symbol','_ws','_addProperty','depth','_console_ninja','140334tbgEOk','','capped','15lpennf','_propertyName','totalStrLength','_isNegativeZero','match','process','create','_allowedToSend','_getOwnPropertyDescriptor','_undefined','_consoleNinjaAllowedToStart','bind','nuxt','_p_','setter','_hasMapOnItsPath','Buffer','node','unshift','perf_hooks','url','stackTraceLimit','indexOf','_webSocketErrorDocsLink','count','HTMLAllCollection','host','catch','elements','global','[object\\x20Map]','number','send','_setNodeExpressionPath','_treeNodePropertiesBeforeFullValue','_dateToString','isArray','defineProperty','type','disabledLog','_hasSymbolPropertyOnItsPath','_capIfString','stringify','prototype','toString','Set','error','index','_property','boolean','Number','_sendErrorMessage','log','forEach','slice','getOwnPropertyDescriptor','1.0.0','dockerizedApp','_treeNodePropertiesAfterFullValue','substr','reduceLimits','WebSocket','console','method','push','set','getOwnPropertySymbols','data','_cleanNode','_console_ninja_session','message','nodeModules','object','autoExpandMaxDepth','sort','1695378051073','sortProps','name','replace','6024789BpQSzV','default','onopen','_isPrimitiveType','get','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','nan','_inBrowser','pathToFileURL','6zVQsOG','length','resolveGetters','8ERwwWr','autoExpandPreviousObjects','onerror','_socket','_setNodePermissions','Map','expressionsToEvaluate','positiveInfinity','unknown','[object\\x20Array]','_isPrimitiveWrapperType','_maxConnectAttemptCount','_additionalMetadata','concat','versions','NEGATIVE_INFINITY','unref','join','undefined','autoExpandLimit','...','_disposeWebsocket','path','_getOwnPropertySymbols','strLength','_blacklistedProperty','_isMap','cappedElements','warn',':logPointId:','_attemptToReconnectShortly','_sortProps','isExpressionToEvaluate','string','_setNodeExpandableState','trace','Symbol','String','constructor','logger\\x20websocket\\x20error','_quotedRegExp','_addObjectProperty','10481470fvehOE','_addLoadNode','hrtime','RegExp','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','150784wCrfsu','_HTMLAllCollection','_isSet','349780pvWhxq','hostname','[object\\x20Date]','root_exp_id','_setNodeLabel','coverage'];_0x4457=function(){return _0x1a9011;};return _0x4457();}(function(_0x15448d,_0x4d1d8f){var _0x2402b5=_0x141d,_0x2caef9=_0x15448d();while(!![]){try{var _0x2d271c=-parseInt(_0x2402b5(0x2c3))/0x1+-parseInt(_0x2402b5(0x203))/0x2*(parseInt(_0x2402b5(0x206))/0x3)+-parseInt(_0x2402b5(0x291))/0x4+parseInt(_0x2402b5(0x294))/0x5*(-parseInt(_0x2402b5(0x25e))/0x6)+-parseInt(_0x2402b5(0x2bf))/0x7*(parseInt(_0x2402b5(0x261))/0x8)+parseInt(_0x2402b5(0x255))/0x9+parseInt(_0x2402b5(0x28b))/0xa;if(_0x2d271c===_0x4d1d8f)break;else _0x2caef9['push'](_0x2caef9['shift']());}catch(_0x3a2df0){_0x2caef9['push'](_0x2caef9['shift']());}}}(_0x4457,0x5b5e7));function _0x141d(_0x47fe73,_0x4e8749){var _0x445717=_0x4457();return _0x141d=function(_0x141d5f,_0x175711){_0x141d5f=_0x141d5f-0x1f2;var _0x1f44e9=_0x445717[_0x141d5f];return _0x1f44e9;},_0x141d(_0x47fe73,_0x4e8749);}var j=Object[_0x3c9133(0x20c)],X=Object[_0x3c9133(0x22b)],G=Object[_0x3c9133(0x23d)],ee=Object[_0x3c9133(0x2a5)],te=Object[_0x3c9133(0x29f)],ne=Object['prototype'][_0x3c9133(0x2d3)],re=(_0x2398a0,_0x6933a5,_0x4da329,_0x304873)=>{var _0x48a9cd=_0x3c9133;if(_0x6933a5&&typeof _0x6933a5==_0x48a9cd(0x24e)||typeof _0x6933a5==_0x48a9cd(0x2a2)){for(let _0x47c884 of ee(_0x6933a5))!ne[_0x48a9cd(0x2c4)](_0x2398a0,_0x47c884)&&_0x47c884!==_0x4da329&&X(_0x2398a0,_0x47c884,{'get':()=>_0x6933a5[_0x47c884],'enumerable':!(_0x304873=G(_0x6933a5,_0x47c884))||_0x304873[_0x48a9cd(0x2a7)]});}return _0x2398a0;},K=(_0x37afc2,_0xf06744,_0xe9c95b)=>(_0xe9c95b=_0x37afc2!=null?j(te(_0x37afc2)):{},re(_0xf06744||!_0x37afc2||!_0x37afc2['__es'+'Module']?X(_0xe9c95b,_0x3c9133(0x256),{'value':_0x37afc2,'enumerable':!0x0}):_0xe9c95b,_0x37afc2)),q=class{constructor(_0x8672cb,_0xab551,_0x1efc92,_0x92c543,_0x346931){var _0x2d259a=_0x3c9133;this[_0x2d259a(0x223)]=_0x8672cb,this[_0x2d259a(0x220)]=_0xab551,this[_0x2d259a(0x2c1)]=_0x1efc92,this[_0x2d259a(0x24d)]=_0x92c543,this[_0x2d259a(0x23f)]=_0x346931,this['_allowedToSend']=!0x0,this[_0x2d259a(0x2cf)]=!0x0,this['_connected']=!0x1,this[_0x2d259a(0x2b0)]=!0x1,this[_0x2d259a(0x25c)]=!this[_0x2d259a(0x223)]['process']?.[_0x2d259a(0x26f)]?.[_0x2d259a(0x217)],this[_0x2d259a(0x2a1)]=null,this[_0x2d259a(0x1fa)]=0x0,this[_0x2d259a(0x26c)]=0x14,this[_0x2d259a(0x21d)]=_0x2d259a(0x1f8),this[_0x2d259a(0x239)]=(this[_0x2d259a(0x25c)]?_0x2d259a(0x25a):_0x2d259a(0x2c9))+this[_0x2d259a(0x21d)];}async[_0x3c9133(0x2b9)](){var _0x599849=_0x3c9133;if(this[_0x599849(0x2a1)])return this[_0x599849(0x2a1)];let _0x593947;if(this['_inBrowser'])_0x593947=this[_0x599849(0x223)][_0x599849(0x243)];else{if(this[_0x599849(0x223)]['process']?.[_0x599849(0x2cc)])_0x593947=this[_0x599849(0x223)][_0x599849(0x20b)]?.['_WebSocket'];else try{let _0x15c7a3=await import(_0x599849(0x277));_0x593947=(await import((await import(_0x599849(0x21a)))[_0x599849(0x25d)](_0x15c7a3[_0x599849(0x272)](this['nodeModules'],'ws/index.js'))[_0x599849(0x232)]()))[_0x599849(0x256)];}catch{try{_0x593947=require(require(_0x599849(0x277))[_0x599849(0x272)](this[_0x599849(0x24d)],'ws'));}catch{throw new Error(_0x599849(0x2a3));}}}return this[_0x599849(0x2a1)]=_0x593947,_0x593947;}[_0x3c9133(0x2ba)](){var _0x531026=_0x3c9133;this['_connecting']||this[_0x531026(0x2a9)]||this[_0x531026(0x1fa)]>=this['_maxConnectAttemptCount']||(this[_0x531026(0x2cf)]=!0x1,this[_0x531026(0x2b0)]=!0x0,this[_0x531026(0x1fa)]++,this[_0x531026(0x1ff)]=new Promise((_0x2f35b3,_0x149960)=>{var _0x599995=_0x531026;this[_0x599995(0x2b9)]()[_0x599995(0x29e)](_0x451411=>{var _0x2ae357=_0x599995;let _0x40ed5d=new _0x451411(_0x2ae357(0x29a)+(!this[_0x2ae357(0x25c)]&&this[_0x2ae357(0x23f)]?_0x2ae357(0x2be):this['host'])+':'+this['port']);_0x40ed5d[_0x2ae357(0x263)]=()=>{var _0x208359=_0x2ae357;this[_0x208359(0x20d)]=!0x1,this[_0x208359(0x276)](_0x40ed5d),this[_0x208359(0x27f)](),_0x149960(new Error(_0x208359(0x288)));},_0x40ed5d[_0x2ae357(0x257)]=()=>{var _0x5e1ec5=_0x2ae357;this['_inBrowser']||_0x40ed5d[_0x5e1ec5(0x264)]&&_0x40ed5d[_0x5e1ec5(0x264)][_0x5e1ec5(0x271)]&&_0x40ed5d[_0x5e1ec5(0x264)]['unref'](),_0x2f35b3(_0x40ed5d);},_0x40ed5d[_0x2ae357(0x2d1)]=()=>{var _0x93eb0c=_0x2ae357;this['_allowedToConnectOnSend']=!0x0,this[_0x93eb0c(0x276)](_0x40ed5d),this['_attemptToReconnectShortly']();},_0x40ed5d['onmessage']=_0x2dbee7=>{var _0x1f98a5=_0x2ae357;try{_0x2dbee7&&_0x2dbee7['data']&&this[_0x1f98a5(0x25c)]&&JSON['parse'](_0x2dbee7[_0x1f98a5(0x249)])[_0x1f98a5(0x245)]===_0x1f98a5(0x1fb)&&this[_0x1f98a5(0x223)][_0x1f98a5(0x2b8)]['reload']();}catch{}};})[_0x599995(0x29e)](_0x7c812b=>(this[_0x599995(0x2a9)]=!0x0,this['_connecting']=!0x1,this[_0x599995(0x2cf)]=!0x1,this[_0x599995(0x20d)]=!0x0,this[_0x599995(0x1fa)]=0x0,_0x7c812b))[_0x599995(0x221)](_0xdf3dec=>(this['_connected']=!0x1,this[_0x599995(0x2b0)]=!0x1,console['warn'](_0x599995(0x290)+this[_0x599995(0x21d)]),_0x149960(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0xdf3dec&&_0xdf3dec[_0x599995(0x24c)])))));}));}['_disposeWebsocket'](_0x2c179d){var _0x275dab=_0x3c9133;this[_0x275dab(0x2a9)]=!0x1,this[_0x275dab(0x2b0)]=!0x1;try{_0x2c179d['onclose']=null,_0x2c179d[_0x275dab(0x263)]=null,_0x2c179d['onopen']=null;}catch{}try{_0x2c179d['readyState']<0x2&&_0x2c179d['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x466c87=_0x3c9133;clearTimeout(this[_0x466c87(0x2bc)]),!(this[_0x466c87(0x1fa)]>=this[_0x466c87(0x26c)])&&(this[_0x466c87(0x2bc)]=setTimeout(()=>{var _0x27bf95=_0x466c87;this[_0x27bf95(0x2a9)]||this[_0x27bf95(0x2b0)]||(this[_0x27bf95(0x2ba)](),this[_0x27bf95(0x1ff)]?.[_0x27bf95(0x221)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x466c87(0x2bc)][_0x466c87(0x271)]&&this[_0x466c87(0x2bc)][_0x466c87(0x271)]());}async[_0x3c9133(0x226)](_0x1110d1){var _0x5c9748=_0x3c9133;try{if(!this[_0x5c9748(0x20d)])return;this[_0x5c9748(0x2cf)]&&this['_connectToHostNow'](),(await this[_0x5c9748(0x1ff)])[_0x5c9748(0x226)](JSON[_0x5c9748(0x230)](_0x1110d1));}catch(_0x46d70e){console[_0x5c9748(0x27d)](this[_0x5c9748(0x239)]+':\\x20'+(_0x46d70e&&_0x46d70e[_0x5c9748(0x24c)])),this[_0x5c9748(0x20d)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x18b646,_0x49fcbc,_0x37e734,_0x306a5a,_0x517851,_0x1060ef){var _0x25a6be=_0x3c9133;let _0x1620dd=_0x37e734[_0x25a6be(0x2d0)](',')['map'](_0x459cbc=>{var _0xe53167=_0x25a6be;try{_0x18b646[_0xe53167(0x24b)]||((_0x517851==='next.js'||_0x517851==='remix'||_0x517851==='astro')&&(_0x517851+=_0x18b646[_0xe53167(0x20b)]?.[_0xe53167(0x26f)]?.[_0xe53167(0x217)]?'\\x20server':'\\x20browser'),_0x18b646[_0xe53167(0x24b)]={'id':+new Date(),'tool':_0x517851});let _0x55d5ad=new q(_0x18b646,_0x49fcbc,_0x459cbc,_0x306a5a,_0x1060ef);return _0x55d5ad[_0xe53167(0x226)][_0xe53167(0x211)](_0x55d5ad);}catch(_0x59a135){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x59a135&&_0x59a135[_0xe53167(0x24c)]),()=>{};}});return _0x468b7d=>_0x1620dd['forEach'](_0x11eeb2=>_0x11eeb2(_0x468b7d));}function W(_0x523a41){var _0x1408d4=_0x3c9133;let _0x6058a7=function(_0x36f71a,_0x4a38c9){return _0x4a38c9-_0x36f71a;},_0x3f3fba;if(_0x523a41[_0x1408d4(0x2ae)])_0x3f3fba=function(){var _0x1d6210=_0x1408d4;return _0x523a41['performance'][_0x1d6210(0x2b2)]();};else{if(_0x523a41['process']&&_0x523a41['process'][_0x1408d4(0x28d)])_0x3f3fba=function(){var _0x521c7a=_0x1408d4;return _0x523a41[_0x521c7a(0x20b)]['hrtime']();},_0x6058a7=function(_0x5eeb23,_0xaa6114){return 0x3e8*(_0xaa6114[0x0]-_0x5eeb23[0x0])+(_0xaa6114[0x1]-_0x5eeb23[0x1])/0xf4240;};else try{let {performance:_0xf6f376}=require(_0x1408d4(0x219));_0x3f3fba=function(){var _0x5508cf=_0x1408d4;return _0xf6f376[_0x5508cf(0x2b2)]();};}catch{_0x3f3fba=function(){return+new Date();};}}return{'elapsed':_0x6058a7,'timeStamp':_0x3f3fba,'now':()=>Date[_0x1408d4(0x2b2)]()};}function Y(_0x46555f,_0x58279d,_0x2756cb){var _0x312a96=_0x3c9133;if(_0x46555f[_0x312a96(0x210)]!==void 0x0)return _0x46555f[_0x312a96(0x210)];let _0x1dc510=_0x46555f['process']?.['versions']?.['node'];return _0x1dc510&&_0x2756cb===_0x312a96(0x212)?_0x46555f['_consoleNinjaAllowedToStart']=!0x1:_0x46555f[_0x312a96(0x210)]=_0x1dc510||!_0x58279d||_0x46555f[_0x312a96(0x2b8)]?.[_0x312a96(0x295)]&&_0x58279d['includes'](_0x46555f[_0x312a96(0x2b8)][_0x312a96(0x295)]),_0x46555f['_consoleNinjaAllowedToStart'];}function Q(_0x283aea,_0x39cf15,_0x124182,_0x573e84){var _0x82d3ef=_0x3c9133;_0x283aea=_0x283aea,_0x39cf15=_0x39cf15,_0x124182=_0x124182,_0x573e84=_0x573e84;let _0x497d20=W(_0x283aea),_0x1da085=_0x497d20[_0x82d3ef(0x2a0)],_0x160e79=_0x497d20[_0x82d3ef(0x2c0)];class _0x376622{constructor(){var _0x14a269=_0x82d3ef;this[_0x14a269(0x1f4)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x14a269(0x2bb)]=/^(0|[1-9][0-9]*)$/,this[_0x14a269(0x289)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x283aea[_0x14a269(0x273)],this[_0x14a269(0x292)]=_0x283aea[_0x14a269(0x21f)],this[_0x14a269(0x20e)]=Object[_0x14a269(0x23d)],this['_getOwnPropertyNames']=Object[_0x14a269(0x2a5)],this['_Symbol']=_0x283aea[_0x14a269(0x285)],this['_regExpToString']=RegExp['prototype'][_0x14a269(0x232)],this[_0x14a269(0x229)]=Date[_0x14a269(0x231)][_0x14a269(0x232)];}[_0x82d3ef(0x2ce)](_0x430997,_0x5ed867,_0x38e567,_0x29b4f2){var _0x3f7922=_0x82d3ef,_0x519cdf=this,_0x17fb1f=_0x38e567['autoExpand'];function _0x4d3a44(_0x5574f6,_0x594922,_0x543366){var _0x282722=_0x141d;_0x594922[_0x282722(0x22c)]=_0x282722(0x269),_0x594922['error']=_0x5574f6[_0x282722(0x24c)],_0x5aacf3=_0x543366[_0x282722(0x217)][_0x282722(0x29c)],_0x543366[_0x282722(0x217)][_0x282722(0x29c)]=_0x594922,_0x519cdf[_0x282722(0x228)](_0x594922,_0x543366);}try{_0x38e567[_0x3f7922(0x2d5)]++,_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x262)]['push'](_0x5ed867);var _0x946d76,_0x272312,_0x2a5d69,_0x3b2a6d,_0x9536ba=[],_0x402813=[],_0xba98fd,_0x813322=this[_0x3f7922(0x2b5)](_0x5ed867),_0x46b8eb=_0x813322===_0x3f7922(0x2a6),_0x37c552=!0x1,_0x435d39=_0x813322===_0x3f7922(0x2a2),_0x97b195=this[_0x3f7922(0x258)](_0x813322),_0x190c40=this['_isPrimitiveWrapperType'](_0x813322),_0x15f00e=_0x97b195||_0x190c40,_0xe2d20d={},_0x501a34=0x0,_0x188067=!0x1,_0x5aacf3,_0x55053d=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38e567[_0x3f7922(0x201)]){if(_0x46b8eb){if(_0x272312=_0x5ed867['length'],_0x272312>_0x38e567['elements']){for(_0x2a5d69=0x0,_0x3b2a6d=_0x38e567[_0x3f7922(0x222)],_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813['push'](_0x519cdf[_0x3f7922(0x200)](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));_0x430997[_0x3f7922(0x27c)]=!0x0;}else{for(_0x2a5d69=0x0,_0x3b2a6d=_0x272312,_0x946d76=_0x2a5d69;_0x946d76<_0x3b2a6d;_0x946d76++)_0x402813[_0x3f7922(0x246)](_0x519cdf['_addProperty'](_0x9536ba,_0x5ed867,_0x813322,_0x946d76,_0x38e567));}_0x38e567['autoExpandPropertyCount']+=_0x402813['length'];}if(!(_0x813322===_0x3f7922(0x2ac)||_0x813322==='undefined')&&!_0x97b195&&_0x813322!=='String'&&_0x813322!==_0x3f7922(0x216)&&_0x813322!==_0x3f7922(0x2a4)){var _0x35bcd1=_0x29b4f2['props']||_0x38e567[_0x3f7922(0x2c5)];if(this[_0x3f7922(0x293)](_0x5ed867)?(_0x946d76=0x0,_0x5ed867[_0x3f7922(0x23b)](function(_0xa8d979){var _0xa3115a=_0x3f7922;if(_0x501a34++,_0x38e567[_0xa3115a(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567[_0xa3115a(0x281)]&&_0x38e567[_0xa3115a(0x2af)]&&_0x38e567[_0xa3115a(0x1f9)]>_0x38e567[_0xa3115a(0x274)]){_0x188067=!0x0;return;}_0x402813[_0xa3115a(0x246)](_0x519cdf[_0xa3115a(0x200)](_0x9536ba,_0x5ed867,_0xa3115a(0x233),_0x946d76++,_0x38e567,function(_0x33bd9d){return function(){return _0x33bd9d;};}(_0xa8d979)));})):this[_0x3f7922(0x27b)](_0x5ed867)&&_0x5ed867[_0x3f7922(0x23b)](function(_0x4a5ed6,_0x1099c1){var _0x792007=_0x3f7922;if(_0x501a34++,_0x38e567[_0x792007(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;return;}if(!_0x38e567['isExpressionToEvaluate']&&_0x38e567[_0x792007(0x2af)]&&_0x38e567[_0x792007(0x1f9)]>_0x38e567['autoExpandLimit']){_0x188067=!0x0;return;}var _0x192cec=_0x1099c1[_0x792007(0x232)]();_0x192cec[_0x792007(0x25f)]>0x64&&(_0x192cec=_0x192cec[_0x792007(0x23c)](0x0,0x64)+_0x792007(0x275)),_0x402813[_0x792007(0x246)](_0x519cdf[_0x792007(0x200)](_0x9536ba,_0x5ed867,_0x792007(0x266),_0x192cec,_0x38e567,function(_0x26f73a){return function(){return _0x26f73a;};}(_0x4a5ed6)));}),!_0x37c552){try{for(_0xba98fd in _0x5ed867)if(!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567[_0x3f7922(0x1f9)]>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}catch{}if(_0xe2d20d['_p_length']=!0x0,_0x435d39&&(_0xe2d20d[_0x3f7922(0x2b6)]=!0x0),!_0x188067){var _0x1a1b9d=[][_0x3f7922(0x26e)](this[_0x3f7922(0x2c8)](_0x5ed867))[_0x3f7922(0x26e)](this[_0x3f7922(0x278)](_0x5ed867));for(_0x946d76=0x0,_0x272312=_0x1a1b9d[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)if(_0xba98fd=_0x1a1b9d[_0x946d76],!(_0x46b8eb&&_0x55053d[_0x3f7922(0x2b4)](_0xba98fd[_0x3f7922(0x232)]()))&&!this[_0x3f7922(0x27a)](_0x5ed867,_0xba98fd,_0x38e567)&&!_0xe2d20d['_p_'+_0xba98fd[_0x3f7922(0x232)]()]){if(_0x501a34++,_0x38e567[_0x3f7922(0x1f9)]++,_0x501a34>_0x35bcd1){_0x188067=!0x0;break;}if(!_0x38e567[_0x3f7922(0x281)]&&_0x38e567[_0x3f7922(0x2af)]&&_0x38e567['autoExpandPropertyCount']>_0x38e567[_0x3f7922(0x274)]){_0x188067=!0x0;break;}_0x402813[_0x3f7922(0x246)](_0x519cdf[_0x3f7922(0x28a)](_0x9536ba,_0xe2d20d,_0x5ed867,_0x813322,_0xba98fd,_0x38e567));}}}}}if(_0x430997[_0x3f7922(0x22c)]=_0x813322,_0x15f00e?(_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x1f5)](),this[_0x3f7922(0x22f)](_0x813322,_0x430997,_0x38e567,_0x29b4f2)):_0x813322==='date'?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x229)][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x2a4)?_0x430997[_0x3f7922(0x2bd)]=_0x5ed867[_0x3f7922(0x232)]():_0x813322===_0x3f7922(0x28e)?_0x430997[_0x3f7922(0x2bd)]=this['_regExpToString'][_0x3f7922(0x2c4)](_0x5ed867):_0x813322===_0x3f7922(0x1fe)&&this[_0x3f7922(0x1fc)]?_0x430997[_0x3f7922(0x2bd)]=this[_0x3f7922(0x1fc)][_0x3f7922(0x231)]['toString'][_0x3f7922(0x2c4)](_0x5ed867):!_0x38e567[_0x3f7922(0x201)]&&!(_0x813322===_0x3f7922(0x2ac)||_0x813322===_0x3f7922(0x273))&&(delete _0x430997[_0x3f7922(0x2bd)],_0x430997[_0x3f7922(0x205)]=!0x0),_0x188067&&(_0x430997['cappedProps']=!0x0),_0x5aacf3=_0x38e567[_0x3f7922(0x217)][_0x3f7922(0x29c)],_0x38e567[_0x3f7922(0x217)]['current']=_0x430997,this[_0x3f7922(0x228)](_0x430997,_0x38e567),_0x402813[_0x3f7922(0x25f)]){for(_0x946d76=0x0,_0x272312=_0x402813[_0x3f7922(0x25f)];_0x946d76<_0x272312;_0x946d76++)_0x402813[_0x946d76](_0x946d76);}_0x9536ba[_0x3f7922(0x25f)]&&(_0x430997[_0x3f7922(0x2c5)]=_0x9536ba);}catch(_0x43b2a9){_0x4d3a44(_0x43b2a9,_0x430997,_0x38e567);}return this[_0x3f7922(0x26d)](_0x5ed867,_0x430997),this['_treeNodePropertiesAfterFullValue'](_0x430997,_0x38e567),_0x38e567['node'][_0x3f7922(0x29c)]=_0x5aacf3,_0x38e567[_0x3f7922(0x2d5)]--,_0x38e567[_0x3f7922(0x2af)]=_0x17fb1f,_0x38e567['autoExpand']&&_0x38e567[_0x3f7922(0x262)][_0x3f7922(0x2ca)](),_0x430997;}['_getOwnPropertySymbols'](_0x366a9c){var _0x585266=_0x82d3ef;return Object[_0x585266(0x248)]?Object[_0x585266(0x248)](_0x366a9c):[];}[_0x82d3ef(0x293)](_0x5140c0){var _0x9cd60e=_0x82d3ef;return!!(_0x5140c0&&_0x283aea[_0x9cd60e(0x233)]&&this[_0x9cd60e(0x1fd)](_0x5140c0)===_0x9cd60e(0x1f3)&&_0x5140c0[_0x9cd60e(0x23b)]);}[_0x82d3ef(0x27a)](_0xf45399,_0xf2b8af,_0x2b9a1e){var _0x4c2f38=_0x82d3ef;return _0x2b9a1e[_0x4c2f38(0x1f6)]?typeof _0xf45399[_0xf2b8af]=='function':!0x1;}[_0x82d3ef(0x2b5)](_0xba0824){var _0x4aa215=_0x82d3ef,_0x21a20d='';return _0x21a20d=typeof _0xba0824,_0x21a20d==='object'?this[_0x4aa215(0x1fd)](_0xba0824)===_0x4aa215(0x26a)?_0x21a20d=_0x4aa215(0x2a6):this['_objectToString'](_0xba0824)===_0x4aa215(0x296)?_0x21a20d=_0x4aa215(0x2b1):this[_0x4aa215(0x1fd)](_0xba0824)==='[object\\x20BigInt]'?_0x21a20d='bigint':_0xba0824===null?_0x21a20d=_0x4aa215(0x2ac):_0xba0824['constructor']&&(_0x21a20d=_0xba0824[_0x4aa215(0x287)][_0x4aa215(0x253)]||_0x21a20d):_0x21a20d===_0x4aa215(0x273)&&this['_HTMLAllCollection']&&_0xba0824 instanceof this[_0x4aa215(0x292)]&&(_0x21a20d=_0x4aa215(0x21f)),_0x21a20d;}[_0x82d3ef(0x1fd)](_0x5eac21){var _0x279535=_0x82d3ef;return Object[_0x279535(0x231)]['toString'][_0x279535(0x2c4)](_0x5eac21);}[_0x82d3ef(0x258)](_0x2bea3c){var _0x42a112=_0x82d3ef;return _0x2bea3c===_0x42a112(0x237)||_0x2bea3c===_0x42a112(0x282)||_0x2bea3c==='number';}[_0x82d3ef(0x26b)](_0x2a2b90){var _0x493ad6=_0x82d3ef;return _0x2a2b90===_0x493ad6(0x2b7)||_0x2a2b90===_0x493ad6(0x286)||_0x2a2b90===_0x493ad6(0x238);}[_0x82d3ef(0x200)](_0x3d05fd,_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a){var _0xfcb414=this;return function(_0x337419){var _0x41a52f=_0x141d,_0x152f0e=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x29c)],_0x49324f=_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)],_0x317843=_0x57063a[_0x41a52f(0x217)]['parent'];_0x57063a['node'][_0x41a52f(0x2a8)]=_0x152f0e,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=typeof _0x501eb4==_0x41a52f(0x225)?_0x501eb4:_0x337419,_0x3d05fd['push'](_0xfcb414['_property'](_0x4b96fd,_0x30d4f1,_0x501eb4,_0x57063a,_0x4b831a)),_0x57063a[_0x41a52f(0x217)]['parent']=_0x317843,_0x57063a[_0x41a52f(0x217)][_0x41a52f(0x235)]=_0x49324f;};}[_0x82d3ef(0x28a)](_0x2a9560,_0x3c147e,_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed){var _0x44bf9c=_0x82d3ef,_0x28ea12=this;return _0x3c147e['_p_'+_0x17da26[_0x44bf9c(0x232)]()]=!0x0,function(_0x1db51e){var _0x3337c8=_0x44bf9c,_0x4f79c3=_0x5a1822[_0x3337c8(0x217)]['current'],_0x5017b2=_0x5a1822['node'][_0x3337c8(0x235)],_0x55242c=_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)];_0x5a1822['node'][_0x3337c8(0x2a8)]=_0x4f79c3,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x1db51e,_0x2a9560[_0x3337c8(0x246)](_0x28ea12[_0x3337c8(0x236)](_0x46feb8,_0x28ae1e,_0x17da26,_0x5a1822,_0x3906ed)),_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x2a8)]=_0x55242c,_0x5a1822[_0x3337c8(0x217)][_0x3337c8(0x235)]=_0x5017b2;};}[_0x82d3ef(0x236)](_0x4096b8,_0x385f4d,_0x542397,_0x49771e,_0x45c7e6){var _0x150a08=_0x82d3ef,_0x4fdf64=this;_0x45c7e6||(_0x45c7e6=function(_0x27c1dc,_0x299b14){return _0x27c1dc[_0x299b14];});var _0x15810a=_0x542397[_0x150a08(0x232)](),_0x4650d8=_0x49771e[_0x150a08(0x267)]||{},_0x1375ca=_0x49771e[_0x150a08(0x201)],_0x1b5ac9=_0x49771e[_0x150a08(0x281)];try{var _0xcbac97=this['_isMap'](_0x4096b8),_0x2e4d81=_0x15810a;_0xcbac97&&_0x2e4d81[0x0]==='\\x27'&&(_0x2e4d81=_0x2e4d81[_0x150a08(0x241)](0x1,_0x2e4d81['length']-0x2));var _0xa4f4c9=_0x49771e['expressionsToEvaluate']=_0x4650d8[_0x150a08(0x213)+_0x2e4d81];_0xa4f4c9&&(_0x49771e[_0x150a08(0x201)]=_0x49771e[_0x150a08(0x201)]+0x1),_0x49771e[_0x150a08(0x281)]=!!_0xa4f4c9;var _0x430b32=typeof _0x542397==_0x150a08(0x1fe),_0x55fb91={'name':_0x430b32||_0xcbac97?_0x15810a:this[_0x150a08(0x207)](_0x15810a)};if(_0x430b32&&(_0x55fb91['symbol']=!0x0),!(_0x385f4d===_0x150a08(0x2a6)||_0x385f4d===_0x150a08(0x2cb))){var _0x1e9d6a=this[_0x150a08(0x20e)](_0x4096b8,_0x542397);if(_0x1e9d6a&&(_0x1e9d6a[_0x150a08(0x247)]&&(_0x55fb91[_0x150a08(0x214)]=!0x0),_0x1e9d6a[_0x150a08(0x259)]&&!_0xa4f4c9&&!_0x49771e['resolveGetters']))return _0x55fb91['getter']=!0x0,this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e),_0x55fb91;}var _0x386380;try{_0x386380=_0x45c7e6(_0x4096b8,_0x542397);}catch(_0x349a0f){return _0x55fb91={'name':_0x15810a,'type':_0x150a08(0x269),'error':_0x349a0f[_0x150a08(0x24c)]},this['_processTreeNodeResult'](_0x55fb91,_0x49771e),_0x55fb91;}var _0x11f10e=this[_0x150a08(0x2b5)](_0x386380),_0x4ba23f=this[_0x150a08(0x258)](_0x11f10e);if(_0x55fb91[_0x150a08(0x22c)]=_0x11f10e,_0x4ba23f)this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){_0x55fb91['value']=_0x386380['valueOf'](),!_0xa4f4c9&&_0x4fdf64['_capIfString'](_0x11f10e,_0x55fb91,_0x49771e,{});});else{var _0x1813ce=_0x49771e['autoExpand']&&_0x49771e['level']<_0x49771e[_0x150a08(0x24f)]&&_0x49771e[_0x150a08(0x262)][_0x150a08(0x21c)](_0x386380)<0x0&&_0x11f10e!==_0x150a08(0x2a2)&&_0x49771e[_0x150a08(0x1f9)]<_0x49771e[_0x150a08(0x274)];_0x1813ce||_0x49771e[_0x150a08(0x2d5)]<_0x1375ca||_0xa4f4c9?(this[_0x150a08(0x2ce)](_0x55fb91,_0x386380,_0x49771e,_0xa4f4c9||{}),this[_0x150a08(0x26d)](_0x386380,_0x55fb91)):this[_0x150a08(0x2c6)](_0x55fb91,_0x49771e,_0x386380,function(){var _0x26a900=_0x150a08;_0x11f10e===_0x26a900(0x2ac)||_0x11f10e===_0x26a900(0x273)||(delete _0x55fb91['value'],_0x55fb91['capped']=!0x0);});}return _0x55fb91;}finally{_0x49771e[_0x150a08(0x267)]=_0x4650d8,_0x49771e[_0x150a08(0x201)]=_0x1375ca,_0x49771e['isExpressionToEvaluate']=_0x1b5ac9;}}['_capIfString'](_0x2264ea,_0x5da6a3,_0x58e8b4,_0x43bece){var _0x2c13b5=_0x82d3ef,_0x4e27a8=_0x43bece[_0x2c13b5(0x279)]||_0x58e8b4[_0x2c13b5(0x279)];if((_0x2264ea==='string'||_0x2264ea==='String')&&_0x5da6a3[_0x2c13b5(0x2bd)]){let _0x5b5c75=_0x5da6a3[_0x2c13b5(0x2bd)][_0x2c13b5(0x25f)];_0x58e8b4[_0x2c13b5(0x2d4)]+=_0x5b5c75,_0x58e8b4[_0x2c13b5(0x2d4)]>_0x58e8b4[_0x2c13b5(0x208)]?(_0x5da6a3[_0x2c13b5(0x205)]='',delete _0x5da6a3[_0x2c13b5(0x2bd)]):_0x5b5c75>_0x4e27a8&&(_0x5da6a3[_0x2c13b5(0x205)]=_0x5da6a3['value'][_0x2c13b5(0x241)](0x0,_0x4e27a8),delete _0x5da6a3[_0x2c13b5(0x2bd)]);}}[_0x82d3ef(0x27b)](_0x36efce){var _0x162ae2=_0x82d3ef;return!!(_0x36efce&&_0x283aea[_0x162ae2(0x266)]&&this[_0x162ae2(0x1fd)](_0x36efce)===_0x162ae2(0x224)&&_0x36efce[_0x162ae2(0x23b)]);}['_propertyName'](_0x414219){var _0x3fe189=_0x82d3ef;if(_0x414219[_0x3fe189(0x20a)](/^\\d+$/))return _0x414219;var _0x3c2b8f;try{_0x3c2b8f=JSON['stringify'](''+_0x414219);}catch{_0x3c2b8f='\\x22'+this['_objectToString'](_0x414219)+'\\x22';}return _0x3c2b8f['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x241)](0x1,_0x3c2b8f[_0x3fe189(0x25f)]-0x2):_0x3c2b8f=_0x3c2b8f[_0x3fe189(0x254)](/'/g,'\\x5c\\x27')[_0x3fe189(0x254)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3c2b8f;}[_0x82d3ef(0x2c6)](_0xf30c35,_0x46dea0,_0x5f14fe,_0x25d67c){var _0x16c886=_0x82d3ef;this[_0x16c886(0x228)](_0xf30c35,_0x46dea0),_0x25d67c&&_0x25d67c(),this['_additionalMetadata'](_0x5f14fe,_0xf30c35),this[_0x16c886(0x240)](_0xf30c35,_0x46dea0);}[_0x82d3ef(0x228)](_0x186259,_0x219a92){var _0x1e8d13=_0x82d3ef;this[_0x1e8d13(0x28f)](_0x186259,_0x219a92),this[_0x1e8d13(0x1f7)](_0x186259,_0x219a92),this[_0x1e8d13(0x227)](_0x186259,_0x219a92),this[_0x1e8d13(0x265)](_0x186259,_0x219a92);}['_setNodeId'](_0x5f2afc,_0x330b7c){}[_0x82d3ef(0x1f7)](_0x4786f8,_0x5e5301){}[_0x82d3ef(0x298)](_0x586b9e,_0x5e62f3){}[_0x82d3ef(0x29d)](_0x2e0a84){var _0x420aa1=_0x82d3ef;return _0x2e0a84===this[_0x420aa1(0x20f)];}['_treeNodePropertiesAfterFullValue'](_0x46ac19,_0x54b762){var _0x2f2625=_0x82d3ef;this['_setNodeLabel'](_0x46ac19,_0x54b762),this[_0x2f2625(0x283)](_0x46ac19),_0x54b762[_0x2f2625(0x252)]&&this[_0x2f2625(0x280)](_0x46ac19),this[_0x2f2625(0x2c2)](_0x46ac19,_0x54b762),this[_0x2f2625(0x28c)](_0x46ac19,_0x54b762),this[_0x2f2625(0x24a)](_0x46ac19);}[_0x82d3ef(0x26d)](_0x450fbe,_0x38f13b){var _0x1bab72=_0x82d3ef;let _0x3a36d5;try{_0x283aea[_0x1bab72(0x244)]&&(_0x3a36d5=_0x283aea['console'][_0x1bab72(0x234)],_0x283aea[_0x1bab72(0x244)][_0x1bab72(0x234)]=function(){}),_0x450fbe&&typeof _0x450fbe[_0x1bab72(0x25f)]==_0x1bab72(0x225)&&(_0x38f13b[_0x1bab72(0x25f)]=_0x450fbe['length']);}catch{}finally{_0x3a36d5&&(_0x283aea['console'][_0x1bab72(0x234)]=_0x3a36d5);}if(_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x225)||_0x38f13b[_0x1bab72(0x22c)]===_0x1bab72(0x238)){if(isNaN(_0x38f13b[_0x1bab72(0x2bd)]))_0x38f13b[_0x1bab72(0x25b)]=!0x0,delete _0x38f13b['value'];else switch(_0x38f13b[_0x1bab72(0x2bd)]){case Number['POSITIVE_INFINITY']:_0x38f13b[_0x1bab72(0x268)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case Number[_0x1bab72(0x270)]:_0x38f13b[_0x1bab72(0x29b)]=!0x0,delete _0x38f13b[_0x1bab72(0x2bd)];break;case 0x0:this['_isNegativeZero'](_0x38f13b[_0x1bab72(0x2bd)])&&(_0x38f13b['negativeZero']=!0x0);break;}}else _0x38f13b['type']===_0x1bab72(0x2a2)&&typeof _0x450fbe['name']==_0x1bab72(0x282)&&_0x450fbe[_0x1bab72(0x253)]&&_0x38f13b['name']&&_0x450fbe['name']!==_0x38f13b['name']&&(_0x38f13b['funcName']=_0x450fbe[_0x1bab72(0x253)]);}[_0x82d3ef(0x209)](_0x120d09){var _0x44f14c=_0x82d3ef;return 0x1/_0x120d09===Number[_0x44f14c(0x270)];}['_sortProps'](_0x1bb666){var _0x51b398=_0x82d3ef;!_0x1bb666['props']||!_0x1bb666[_0x51b398(0x2c5)]['length']||_0x1bb666['type']===_0x51b398(0x2a6)||_0x1bb666[_0x51b398(0x22c)]==='Map'||_0x1bb666['type']===_0x51b398(0x233)||_0x1bb666[_0x51b398(0x2c5)][_0x51b398(0x250)](function(_0x38b0a6,_0x1c6fe5){var _0xb48cb7=_0x51b398,_0x4a8acb=_0x38b0a6['name'][_0xb48cb7(0x2c7)](),_0x441d7a=_0x1c6fe5[_0xb48cb7(0x253)][_0xb48cb7(0x2c7)]();return _0x4a8acb<_0x441d7a?-0x1:_0x4a8acb>_0x441d7a?0x1:0x0;});}[_0x82d3ef(0x2c2)](_0x4440ac,_0x60290f){var _0x3663e2=_0x82d3ef;if(!(_0x60290f[_0x3663e2(0x1f6)]||!_0x4440ac[_0x3663e2(0x2c5)]||!_0x4440ac['props'][_0x3663e2(0x25f)])){for(var _0x1473c8=[],_0x31a8a8=[],_0x262b12=0x0,_0x186c01=_0x4440ac['props']['length'];_0x262b12<_0x186c01;_0x262b12++){var _0x86c2b5=_0x4440ac[_0x3663e2(0x2c5)][_0x262b12];_0x86c2b5[_0x3663e2(0x22c)]===_0x3663e2(0x2a2)?_0x1473c8[_0x3663e2(0x246)](_0x86c2b5):_0x31a8a8['push'](_0x86c2b5);}if(!(!_0x31a8a8[_0x3663e2(0x25f)]||_0x1473c8[_0x3663e2(0x25f)]<=0x1)){_0x4440ac[_0x3663e2(0x2c5)]=_0x31a8a8;var _0x1ac39a={'functionsNode':!0x0,'props':_0x1473c8};this['_setNodeId'](_0x1ac39a,_0x60290f),this[_0x3663e2(0x298)](_0x1ac39a,_0x60290f),this[_0x3663e2(0x283)](_0x1ac39a),this[_0x3663e2(0x265)](_0x1ac39a,_0x60290f),_0x1ac39a['id']+='\\x20f',_0x4440ac['props'][_0x3663e2(0x218)](_0x1ac39a);}}}[_0x82d3ef(0x28c)](_0x592cf3,_0x236116){}['_setNodeExpandableState'](_0x291664){}['_isArray'](_0x7f2133){var _0x396994=_0x82d3ef;return Array[_0x396994(0x22a)](_0x7f2133)||typeof _0x7f2133==_0x396994(0x24e)&&this[_0x396994(0x1fd)](_0x7f2133)===_0x396994(0x26a);}[_0x82d3ef(0x265)](_0x53ecb2,_0x3011df){}['_cleanNode'](_0x4095c4){var _0x36091a=_0x82d3ef;delete _0x4095c4[_0x36091a(0x22e)],delete _0x4095c4['_hasSetOnItsPath'],delete _0x4095c4[_0x36091a(0x215)];}[_0x82d3ef(0x227)](_0x1722d6,_0x397b43){}}let _0x337799=new _0x376622(),_0x1740c6={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x324a27={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23f2a1(_0xc61d77,_0x548d43,_0x29c197,_0x4add74,_0x2fcd07,_0x3ddcd1){var _0xc3597a=_0x82d3ef;let _0x1001c2,_0x5c5f94;try{_0x5c5f94=_0x160e79(),_0x1001c2=_0x124182[_0x548d43],!_0x1001c2||_0x5c5f94-_0x1001c2['ts']>0x1f4&&_0x1001c2[_0xc3597a(0x21e)]&&_0x1001c2[_0xc3597a(0x2ad)]/_0x1001c2[_0xc3597a(0x21e)]<0x64?(_0x124182[_0x548d43]=_0x1001c2={'count':0x0,'time':0x0,'ts':_0x5c5f94},_0x124182[_0xc3597a(0x2b3)]={}):_0x5c5f94-_0x124182[_0xc3597a(0x2b3)]['ts']>0x32&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]&&_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]/_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]<0x64&&(_0x124182[_0xc3597a(0x2b3)]={});let _0x2a42e8=[],_0xb1dda1=_0x1001c2[_0xc3597a(0x242)]||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x242)]?_0x324a27:_0x1740c6,_0x18aff5=_0x396226=>{var _0x45ca4e=_0xc3597a;let _0x288eec={};return _0x288eec[_0x45ca4e(0x2c5)]=_0x396226[_0x45ca4e(0x2c5)],_0x288eec[_0x45ca4e(0x222)]=_0x396226[_0x45ca4e(0x222)],_0x288eec[_0x45ca4e(0x279)]=_0x396226[_0x45ca4e(0x279)],_0x288eec[_0x45ca4e(0x208)]=_0x396226['totalStrLength'],_0x288eec[_0x45ca4e(0x274)]=_0x396226['autoExpandLimit'],_0x288eec[_0x45ca4e(0x24f)]=_0x396226[_0x45ca4e(0x24f)],_0x288eec['sortProps']=!0x1,_0x288eec[_0x45ca4e(0x1f6)]=!_0x39cf15,_0x288eec[_0x45ca4e(0x201)]=0x1,_0x288eec[_0x45ca4e(0x2d5)]=0x0,_0x288eec['expId']=_0x45ca4e(0x297),_0x288eec['rootExpression']='root_exp',_0x288eec['autoExpand']=!0x0,_0x288eec[_0x45ca4e(0x262)]=[],_0x288eec[_0x45ca4e(0x1f9)]=0x0,_0x288eec[_0x45ca4e(0x260)]=!0x0,_0x288eec[_0x45ca4e(0x2d4)]=0x0,_0x288eec[_0x45ca4e(0x217)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x288eec;};for(var _0x5d5bd7=0x0;_0x5d5bd7<_0x2fcd07['length'];_0x5d5bd7++)_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'timeNode':_0xc61d77===_0xc3597a(0x2ad)||void 0x0},_0x2fcd07[_0x5d5bd7],_0x18aff5(_0xb1dda1),{}));if(_0xc61d77===_0xc3597a(0x284)){let _0x2131b1=Error['stackTraceLimit'];try{Error[_0xc3597a(0x21b)]=0x1/0x0,_0x2a42e8[_0xc3597a(0x246)](_0x337799[_0xc3597a(0x2ce)]({'stackNode':!0x0},new Error()['stack'],_0x18aff5(_0xb1dda1),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x2131b1;}}return{'method':_0xc3597a(0x23a),'version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':_0x2a42e8,'id':_0x548d43,'context':_0x3ddcd1}]};}catch(_0x9ea483){return{'method':'log','version':_0x573e84,'args':[{'ts':_0x29c197,'session':_0x4add74,'args':[{'type':_0xc3597a(0x269),'error':_0x9ea483&&_0x9ea483[_0xc3597a(0x24c)]}],'id':_0x548d43,'context':_0x3ddcd1}]};}finally{try{if(_0x1001c2&&_0x5c5f94){let _0x279239=_0x160e79();_0x1001c2[_0xc3597a(0x21e)]++,_0x1001c2[_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x1001c2['ts']=_0x279239,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]++,_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]+=_0x1da085(_0x5c5f94,_0x279239),_0x124182[_0xc3597a(0x2b3)]['ts']=_0x279239,(_0x1001c2[_0xc3597a(0x21e)]>0x32||_0x1001c2[_0xc3597a(0x2ad)]>0x64)&&(_0x1001c2[_0xc3597a(0x242)]=!0x0),(_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x21e)]>0x3e8||_0x124182[_0xc3597a(0x2b3)][_0xc3597a(0x2ad)]>0x12c)&&(_0x124182[_0xc3597a(0x2b3)]['reduceLimits']=!0x0);}}catch{}}}return _0x23f2a1;}((_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5410ef,_0x82de96,_0x353f0a,_0x44228c,_0x5087cf)=>{var _0x3e67cb=_0x3c9133;if(_0x24201d[_0x3e67cb(0x202)])return _0x24201d[_0x3e67cb(0x202)];if(!Y(_0x24201d,_0x353f0a,_0x7a16be))return _0x24201d['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x24201d[_0x3e67cb(0x202)];let _0x1e6e8e=W(_0x24201d),_0x1d3237=_0x1e6e8e[_0x3e67cb(0x2a0)],_0x21509f=_0x1e6e8e[_0x3e67cb(0x2c0)],_0x3e1850=_0x1e6e8e[_0x3e67cb(0x2b2)],_0x2c8b38={'hits':{},'ts':{}},_0x275983=Q(_0x24201d,_0x44228c,_0x2c8b38,_0x5410ef),_0x127295=_0x459189=>{_0x2c8b38['ts'][_0x459189]=_0x21509f();},_0x2b165a=(_0x44840e,_0x4c980b)=>{var _0x2d8b84=_0x3e67cb;let _0x36dee7=_0x2c8b38['ts'][_0x4c980b];if(delete _0x2c8b38['ts'][_0x4c980b],_0x36dee7){let _0x1e2eb3=_0x1d3237(_0x36dee7,_0x21509f());_0x1666dc(_0x275983(_0x2d8b84(0x2ad),_0x44840e,_0x3e1850(),_0xce6c91,[_0x1e2eb3],_0x4c980b));}},_0x39bf76=_0x4c030d=>_0x42b2f4=>{var _0x596a7c=_0x3e67cb;try{_0x127295(_0x42b2f4),_0x4c030d(_0x42b2f4);}finally{_0x24201d['console'][_0x596a7c(0x2ad)]=_0x4c030d;}},_0x150705=_0x6c9dc9=>_0x1aaf9b=>{var _0x25a43c=_0x3e67cb;try{let [_0x54747e,_0x1c9789]=_0x1aaf9b[_0x25a43c(0x2d0)](_0x25a43c(0x27e));_0x2b165a(_0x1c9789,_0x54747e),_0x6c9dc9(_0x54747e);}finally{_0x24201d[_0x25a43c(0x244)][_0x25a43c(0x2cd)]=_0x6c9dc9;}};_0x24201d[_0x3e67cb(0x202)]={'consoleLog':(_0x7a1191,_0x19286e)=>{var _0x59f4ac=_0x3e67cb;_0x24201d[_0x59f4ac(0x244)][_0x59f4ac(0x23a)]['name']!==_0x59f4ac(0x22d)&&_0x1666dc(_0x275983('log',_0x7a1191,_0x3e1850(),_0xce6c91,_0x19286e));},'consoleTrace':(_0x34d58b,_0x1b81f5)=>{var _0x1c1864=_0x3e67cb;_0x24201d[_0x1c1864(0x244)][_0x1c1864(0x23a)]['name']!==_0x1c1864(0x1f2)&&_0x1666dc(_0x275983(_0x1c1864(0x284),_0x34d58b,_0x3e1850(),_0xce6c91,_0x1b81f5));},'consoleTime':()=>{var _0x3008ff=_0x3e67cb;_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]=_0x39bf76(_0x24201d[_0x3008ff(0x244)][_0x3008ff(0x2ad)]);},'consoleTimeEnd':()=>{var _0x7ed41f=_0x3e67cb;_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]=_0x150705(_0x24201d[_0x7ed41f(0x244)][_0x7ed41f(0x2cd)]);},'autoLog':(_0x186c8b,_0x1a2a53)=>{var _0x3a01b9=_0x3e67cb;_0x1666dc(_0x275983(_0x3a01b9(0x23a),_0x1a2a53,_0x3e1850(),_0xce6c91,[_0x186c8b]));},'autoLogMany':(_0x9d29d8,_0x218cb6)=>{var _0x5b9a81=_0x3e67cb;_0x1666dc(_0x275983(_0x5b9a81(0x23a),_0x9d29d8,_0x3e1850(),_0xce6c91,_0x218cb6));},'autoTrace':(_0x4d7c27,_0x4ce12b)=>{var _0xe1b054=_0x3e67cb;_0x1666dc(_0x275983(_0xe1b054(0x284),_0x4ce12b,_0x3e1850(),_0xce6c91,[_0x4d7c27]));},'autoTraceMany':(_0x4dd34e,_0x4033b3)=>{var _0x40542c=_0x3e67cb;_0x1666dc(_0x275983(_0x40542c(0x284),_0x4dd34e,_0x3e1850(),_0xce6c91,_0x4033b3));},'autoTime':(_0x5255bb,_0x284f65,_0x38a502)=>{_0x127295(_0x38a502);},'autoTimeEnd':(_0x4f2eef,_0x39435a,_0x1e3399)=>{_0x2b165a(_0x39435a,_0x1e3399);},'coverage':_0x49c495=>{var _0x368e28=_0x3e67cb;_0x1666dc({'method':_0x368e28(0x299),'version':_0x5410ef,'args':[{'id':_0x49c495}]});}};let _0x1666dc=J(_0x24201d,_0x3ebaed,_0x2dfeb7,_0x44e637,_0x7a16be,_0x5087cf),_0xce6c91=_0x24201d['_console_ninja_session'];return _0x24201d[_0x3e67cb(0x202)];})(globalThis,_0x3c9133(0x2ab),'63933',_0x3c9133(0x2aa),'remix',_0x3c9133(0x23e),_0x3c9133(0x251),_0x3c9133(0x2d2),_0x3c9133(0x204),'');`);
  } catch {
  }
}
function oo_oo3(i, ...v) {
  try {
    oo_cm3().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader3
});

// app/component/Dashboard.tsx
var import_react16 = __toESM(require("react")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Dashboard() {
  let iframeRef = import_react16.default.useRef(null), [loading, setLoading] = import_react16.default.useState(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "loading" }, void 0, !1, {
      fileName: "app/component/Dashboard.tsx",
      lineNumber: 8,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "iframe",
      {
        src: "https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10",
        style: { border: "0" },
        className: "w-full h-screen",
        allowTransparency: !0,
        ref: iframeRef,
        onLoad: () => setLoading(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/component/Dashboard.tsx",
        lineNumber: 9,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/component/Dashboard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var Dashboard_default = Dashboard;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let user = await getUserSession(request), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return {
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
    user
  };
};
function dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Dashboard_default, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var dashboard_default = dashboard;

// app/routes/api.user.tsx
var api_user_exports = {};
__export(api_user_exports, {
  loader: () => loader4
});

// app/services/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/modal/user.ts
async function getUser(email) {
  return await db.user.findFirst({
    where: { email }
  });
}

// app/routes/api.user.tsx
var loader4 = async ({ request }) => {
  let email = new URL(request.url).searchParams.get("email");
  return getUser(email);
};

// app/routes/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action,
  default: () => callback_default,
  loader: () => loader5
});
var import_node4 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_react18 = require("react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = process.env;
  return { AUTH0_DOMAIN, AUTH0_CLIENT_ID };
}, action = async ({ request }) => {
  let userValue = (await request.formData()).get("user"), user = JSON.parse(userValue), session = await getSession(request.headers.get("Cookie"));
  if (user) {
    let userdata = await db.user.upsert({
      where: {
        email: user.email
      },
      create: {
        picture: user.picture,
        username: user.name,
        email: user.email
      },
      update: {
        picture: user.picture,
        username: user.name,
        email: user.email
      }
    });
    return session.set("user", user), (0, import_node4.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return null;
};
function callback() {
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = (0, import_react17.useLoaderData)(), location = (0, import_react17.useLocation)(), auth0Config = {
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: location + "callback",
    responseType: "token id_token"
  }, { handleAuthentication } = useAuth0(auth0Config), startAuth = async () => {
    await handleAuthentication();
  };
  return (0, import_react18.useEffect)(() => {
    startAuth();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: "redirecting ..." }, void 0, !1, {
    fileName: "app/routes/callback.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
var callback_default = callback;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader6
});
var import_node5 = require("@remix-run/node");
var loader6 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node5.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader7,
  meta: () => meta3
});
var import_node6 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_react23 = require("react");

// app/component/Main.tsx
var import_react19 = require("@remix-run/react"), import_react20 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), timer;
function Main({ tools }) {
  let { user } = (0, import_react19.useLoaderData)(), [showMessage, setShowMessage] = (0, import_react20.useState)(!1);
  function checkAuth() {
    timer && clearTimeout(timer), user || (setShowMessage(!0), timer = setTimeout(() => {
      setShowMessage(!1);
    }, 3e3));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        className: "toast toast-start capitalize",
        style: {
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          alignItems: "center",
          height: "50px",
          zIndex: 1e3,
          transform: showMessage ? "translateY(0)" : "translateY(110%)"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "alert alert-info", children: "Login to access the tools" }, void 0, !1, {
          fileName: "app/component/Main.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/component/Main.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px]", children: tools.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { onClick: checkAuth, className: " rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tool3, { list }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Main.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function Tool3({ list }) {
  let { user } = (0, import_react19.useLoaderData)(), navigate = (0, import_react19.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      onClick: () => {
        list.url && user && navigate("/tool/" + list.name.replace(" ", "_")), list.url || alert("you are not assigned to this tool");
      },
      className: "tool cursor-pointer text-center w-full relative overflow-hidden ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "  w-full bg-white border-2 border-gray-300  dark:bg-slate-500 dark:text-white rounded  shadow-xl hover:scale-95 transition-all duration-300 ease-in-out", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "div",
            {
              className: "p-2 rounded bg-transparent bg-no-repeat bg-center bg-contain mb-2 mx-auto grid place-items-center h-[110px] w-[110px]",
              style: { backgroundImage: `url("${list == null ? void 0 : list.ICON}")` }
            },
            void 0,
            !1,
            {
              fileName: "app/component/Main.tsx",
              lineNumber: 69,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/component/Main.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-[2vw] py-4 uppercase text-center", children: list.name.replaceAll("_", " ") }, void 0, !1, {
            fileName: "app/component/Main.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Main.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this),
        list.demo && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react19.Link,
          {
            to: "/demo/" + list.name,
            className: "link absolute -bottom-5 right-0  uppercase text-sm text-gray-400 dark:bg-slate-600  dark:text-gray-200  font-light hover:text-black bg-gray-100  px-2 ",
            children: "demo"
          },
          void 0,
          !1,
          {
            fileName: "app/component/Main.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/component/Main.tsx",
      lineNumber: 63,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var Main_default = Main;

// app/component/hook/useOnlineUsersDetail.ts
var import_react21 = require("react");
function useOnlineUsersDetail() {
  let [online, setOnline] = (0, import_react21.useState)([]), socket = useSocket();
  return (0, import_react21.useEffect)(() => {
    if (socket)
      return online.length === 0 && socket.on("connect", () => {
        socket.emit("get_online_users");
      }), socket.on("user_online", (users) => {
        setOnline(users);
      }), socket.on("user_offline", (users) => {
        setOnline(users);
      }), () => {
        socket.off("user_online"), socket.off("user_offline");
      };
  }, [socket]), online;
}

// app/routes/_index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let user = await getUserSession(request), toolList2 = await getCombineTools(user == null ? void 0 : user.email), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return (0, import_node6.defer)({
    user,
    tools: toolList2,
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV }
  });
}, meta3 = () => [
  { title: "Pecha_tools" },
  {
    name: "description",
    content: "pecha tools is collection of tool used for mt"
  }
];
function Index() {
  let data = (0, import_react22.useLoaderData)(), user = data == null ? void 0 : data.user, socket = useSocket(), onlineUsers = useOnlineUsersDetail();
  return (0, import_react23.useEffect)(() => {
    socket && (user && (socket == null || socket.emit("user_login", user == null ? void 0 : user.email)), !user && socket.id && (socket == null || socket.emit("user_logout", socket.id)));
  }, [user, socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-xl font-bold ", children: "Tools " }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Link, { to: "/dashboard", className: "btn btn-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "sm:truncate   sm:tracking-tight", children: "Dashboard" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Loading package location..." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react22.Await,
        {
          resolve: data.tools,
          errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 27
          }, this),
          children: (tools) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Main_default, { tools }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 70,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4YUXGF5F.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SYSHMECJ.js", "/build/_shared/chunk-7BQCVHR7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F5QRZA4L.js", imports: ["/build/_shared/chunk-QYFAPC3G.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FDM22YBB.js", imports: ["/build/_shared/chunk-TMSVDGFY.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CIGROJGP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/callback": { id: "routes/callback", parentId: "root", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/callback-OOZJ7NNM.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CIGROJGP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-YDSNRVEE.js", imports: ["/build/_shared/chunk-TMSVDGFY.js", "/build/_shared/chunk-CIGROJGP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo.$tool": { id: "routes/demo.$tool", parentId: "root", path: "demo/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.$tool-4SHDKSAH.js", imports: ["/build/_shared/chunk-TMSVDGFY.js", "/build/_shared/chunk-CIGROJGP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tool.$tool": { id: "routes/tool.$tool", parentId: "root", path: "tool/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$tool-U6EE5DBN.js", imports: ["/build/_shared/chunk-TMSVDGFY.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CIGROJGP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "bab06c2a", hmr: { runtime: "/build/_shared\\chunk-7BQCVHR7.js", timestamp: 1695378661608 }, url: "/build/manifest-BAB06C2A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demo.$tool": {
    id: "routes/demo.$tool",
    parentId: "root",
    path: "demo/:tool",
    index: void 0,
    caseSensitive: void 0,
    module: demo_tool_exports
  },
  "routes/tool.$tool": {
    id: "routes/tool.$tool",
    parentId: "root",
    path: "tool/:tool",
    index: void 0,
    caseSensitive: void 0,
    module: tool_tool_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/api.user": {
    id: "routes/api.user",
    parentId: "root",
    path: "api/user",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_exports
  },
  "routes/callback": {
    id: "routes/callback",
    parentId: "root",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
