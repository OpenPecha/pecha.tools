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
var tailwind_default = "/build/_assets/tailwind-SFXDJUFJ.css";

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
          err ? reject(err) : resolve(res.email);
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
          err ? reject(err) : (console.log(...oo_oo("1385112547_0", res)), resolve(res));
        }
      );
    })
  };
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43a543=_0x15e3;(function(_0x32ecad,_0x4225a4){var _0x3645a8=_0x15e3,_0x3ae322=_0x32ecad();while(!![]){try{var _0x498c64=-parseInt(_0x3645a8(0x19b))/0x1*(parseInt(_0x3645a8(0x1a3))/0x2)+-parseInt(_0x3645a8(0x1d5))/0x3+-parseInt(_0x3645a8(0x112))/0x4*(parseInt(_0x3645a8(0x150))/0x5)+parseInt(_0x3645a8(0x19e))/0x6*(-parseInt(_0x3645a8(0x1fa))/0x7)+-parseInt(_0x3645a8(0x1bd))/0x8*(parseInt(_0x3645a8(0x1e0))/0x9)+-parseInt(_0x3645a8(0x1c7))/0xa*(-parseInt(_0x3645a8(0x1af))/0xb)+parseInt(_0x3645a8(0x132))/0xc;if(_0x498c64===_0x4225a4)break;else _0x3ae322['push'](_0x3ae322['shift']());}catch(_0x3afb16){_0x3ae322['push'](_0x3ae322['shift']());}}}(_0x87d0,0x8c989));function _0x15e3(_0x112a07,_0x13317a){var _0x15e3a8=_0x87d0();return _0x15e3=function(_0x4e9a8a,_0x21add4){_0x4e9a8a=_0x4e9a8a-0x110;var _0x42146e=_0x15e3a8[_0x4e9a8a];return _0x42146e;},_0x15e3(_0x112a07,_0x13317a);}var j=Object[_0x43a543(0x155)],X=Object[_0x43a543(0x1b1)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x43a543(0x1fc)],te=Object[_0x43a543(0x138)],ne=Object[_0x43a543(0x18e)][_0x43a543(0x1ec)],re=(_0x54c671,_0x145a94,_0x13174b,_0x4bfcc6)=>{var _0x4f929f=_0x43a543;if(_0x145a94&&typeof _0x145a94==_0x4f929f(0x1cd)||typeof _0x145a94=='function'){for(let _0x18280f of ee(_0x145a94))!ne[_0x4f929f(0x1e2)](_0x54c671,_0x18280f)&&_0x18280f!==_0x13174b&&X(_0x54c671,_0x18280f,{'get':()=>_0x145a94[_0x18280f],'enumerable':!(_0x4bfcc6=G(_0x145a94,_0x18280f))||_0x4bfcc6[_0x4f929f(0x1c0)]});}return _0x54c671;},K=(_0x338af9,_0x4279be,_0x176c39)=>(_0x176c39=_0x338af9!=null?j(te(_0x338af9)):{},re(_0x4279be||!_0x338af9||!_0x338af9['__es'+'Module']?X(_0x176c39,'default',{'value':_0x338af9,'enumerable':!0x0}):_0x176c39,_0x338af9)),q=class{constructor(_0x30b9b7,_0x4ddc50,_0x3b3329,_0x221b92,_0xd92f29){var _0x6e22a9=_0x43a543;this[_0x6e22a9(0x172)]=_0x30b9b7,this[_0x6e22a9(0x1f1)]=_0x4ddc50,this[_0x6e22a9(0x18a)]=_0x3b3329,this['nodeModules']=_0x221b92,this[_0x6e22a9(0x188)]=_0xd92f29,this[_0x6e22a9(0x1ac)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x6e22a9(0x193)]=!0x1,this[_0x6e22a9(0x179)]=!0x1,this['_inBrowser']=!this[_0x6e22a9(0x172)][_0x6e22a9(0x1c2)]?.[_0x6e22a9(0x18c)]?.[_0x6e22a9(0x1a6)],this['_WebSocketClass']=null,this[_0x6e22a9(0x178)]=0x0,this[_0x6e22a9(0x14d)]=0x14,this[_0x6e22a9(0x1ee)]='https://tinyurl.com/37x8b79t',this[_0x6e22a9(0x116)]=(this[_0x6e22a9(0x1f9)]?_0x6e22a9(0x1a8):_0x6e22a9(0x1d3))+this[_0x6e22a9(0x1ee)];}async[_0x43a543(0x113)](){var _0x15e7e3=_0x43a543;if(this[_0x15e7e3(0x117)])return this[_0x15e7e3(0x117)];let _0x38e7bf;if(this[_0x15e7e3(0x1f9)])_0x38e7bf=this['global'][_0x15e7e3(0x196)];else{if(this['global'][_0x15e7e3(0x1c2)]?.[_0x15e7e3(0x114)])_0x38e7bf=this[_0x15e7e3(0x172)]['process']?.['_WebSocket'];else try{let _0x5718ef=await import(_0x15e7e3(0x1a7));_0x38e7bf=(await import((await import(_0x15e7e3(0x182)))[_0x15e7e3(0x1c9)](_0x5718ef[_0x15e7e3(0x1e3)](this[_0x15e7e3(0x1dc)],'ws/index.js'))[_0x15e7e3(0x149)]()))[_0x15e7e3(0x123)];}catch{try{_0x38e7bf=require(require(_0x15e7e3(0x1a7))['join'](this[_0x15e7e3(0x1dc)],'ws'));}catch{throw new Error(_0x15e7e3(0x1bf));}}}return this[_0x15e7e3(0x117)]=_0x38e7bf,_0x38e7bf;}[_0x43a543(0x1d1)](){var _0x264fb3=_0x43a543;this[_0x264fb3(0x179)]||this['_connected']||this[_0x264fb3(0x178)]>=this[_0x264fb3(0x14d)]||(this[_0x264fb3(0x15f)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x264fb3(0x12a)]=new Promise((_0x4186df,_0x681501)=>{var _0x2ebc2c=_0x264fb3;this[_0x2ebc2c(0x113)]()[_0x2ebc2c(0x156)](_0x1f4672=>{var _0x3ed9c0=_0x2ebc2c;let _0x14af06=new _0x1f4672(_0x3ed9c0(0x192)+(!this[_0x3ed9c0(0x1f9)]&&this[_0x3ed9c0(0x188)]?_0x3ed9c0(0x165):this[_0x3ed9c0(0x1f1)])+':'+this[_0x3ed9c0(0x18a)]);_0x14af06[_0x3ed9c0(0x167)]=()=>{var _0x2b49f8=_0x3ed9c0;this[_0x2b49f8(0x1ac)]=!0x1,this[_0x2b49f8(0x1e6)](_0x14af06),this[_0x2b49f8(0x19d)](),_0x681501(new Error(_0x2b49f8(0x147)));},_0x14af06['onopen']=()=>{var _0x2ea352=_0x3ed9c0;this['_inBrowser']||_0x14af06[_0x2ea352(0x183)]&&_0x14af06[_0x2ea352(0x183)][_0x2ea352(0x1eb)]&&_0x14af06[_0x2ea352(0x183)]['unref'](),_0x4186df(_0x14af06);},_0x14af06[_0x3ed9c0(0x1da)]=()=>{var _0x5359f5=_0x3ed9c0;this[_0x5359f5(0x15f)]=!0x0,this[_0x5359f5(0x1e6)](_0x14af06),this['_attemptToReconnectShortly']();},_0x14af06['onmessage']=_0xa518a9=>{var _0x393f61=_0x3ed9c0;try{_0xa518a9&&_0xa518a9[_0x393f61(0x18b)]&&this[_0x393f61(0x1f9)]&&JSON[_0x393f61(0x1c6)](_0xa518a9[_0x393f61(0x18b)])['method']==='reload'&&this[_0x393f61(0x172)][_0x393f61(0x184)][_0x393f61(0x185)]();}catch{}};})['then'](_0x21bab2=>(this['_connected']=!0x0,this[_0x2ebc2c(0x179)]=!0x1,this[_0x2ebc2c(0x15f)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2ebc2c(0x178)]=0x0,_0x21bab2))[_0x2ebc2c(0x1b3)](_0x3e393b=>(this['_connected']=!0x1,this[_0x2ebc2c(0x179)]=!0x1,console[_0x2ebc2c(0x1d8)](_0x2ebc2c(0x1df)+this['_webSocketErrorDocsLink']),_0x681501(new Error(_0x2ebc2c(0x1f5)+(_0x3e393b&&_0x3e393b[_0x2ebc2c(0x177)])))));}));}[_0x43a543(0x1e6)](_0x3edf14){var _0x3280ec=_0x43a543;this['_connected']=!0x1,this[_0x3280ec(0x179)]=!0x1;try{_0x3edf14[_0x3280ec(0x1da)]=null,_0x3edf14[_0x3280ec(0x167)]=null,_0x3edf14[_0x3280ec(0x11c)]=null;}catch{}try{_0x3edf14[_0x3280ec(0x189)]<0x2&&_0x3edf14[_0x3280ec(0x146)]();}catch{}}['_attemptToReconnectShortly'](){var _0x52a1d0=_0x43a543;clearTimeout(this['_reconnectTimeout']),!(this[_0x52a1d0(0x178)]>=this[_0x52a1d0(0x14d)])&&(this[_0x52a1d0(0x176)]=setTimeout(()=>{var _0x252df7=_0x52a1d0;this['_connected']||this[_0x252df7(0x179)]||(this[_0x252df7(0x1d1)](),this[_0x252df7(0x12a)]?.[_0x252df7(0x1b3)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]&&this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]());}async[_0x43a543(0x11b)](_0x54e6c1){var _0x1ad97f=_0x43a543;try{if(!this[_0x1ad97f(0x1ac)])return;this[_0x1ad97f(0x15f)]&&this[_0x1ad97f(0x1d1)](),(await this[_0x1ad97f(0x12a)])[_0x1ad97f(0x11b)](JSON[_0x1ad97f(0x14b)](_0x54e6c1));}catch(_0x1f5e2b){console[_0x1ad97f(0x1d8)](this[_0x1ad97f(0x116)]+':\\x20'+(_0x1f5e2b&&_0x1f5e2b[_0x1ad97f(0x177)])),this['_allowedToSend']=!0x1,this[_0x1ad97f(0x19d)]();}}};function J(_0x434156,_0x226963,_0x3e5227,_0xf0d922,_0x3d3edf,_0x1d9a2d){var _0x1d2b40=_0x43a543;let _0x3b4857=_0x3e5227['split'](',')[_0x1d2b40(0x1d4)](_0x229fec=>{var _0x1e26b3=_0x1d2b40;try{_0x434156[_0x1e26b3(0x126)]||((_0x3d3edf===_0x1e26b3(0x15a)||_0x3d3edf===_0x1e26b3(0x127)||_0x3d3edf==='astro')&&(_0x3d3edf+=_0x434156[_0x1e26b3(0x1c2)]?.[_0x1e26b3(0x18c)]?.[_0x1e26b3(0x1a6)]?_0x1e26b3(0x130):_0x1e26b3(0x16e)),_0x434156[_0x1e26b3(0x126)]={'id':+new Date(),'tool':_0x3d3edf});let _0x3f8189=new q(_0x434156,_0x226963,_0x229fec,_0xf0d922,_0x1d9a2d);return _0x3f8189[_0x1e26b3(0x11b)][_0x1e26b3(0x125)](_0x3f8189);}catch(_0x182932){return console[_0x1e26b3(0x1d8)](_0x1e26b3(0x171),_0x182932&&_0x182932['message']),()=>{};}});return _0x4027ca=>_0x3b4857[_0x1d2b40(0x14f)](_0x45866d=>_0x45866d(_0x4027ca));}function W(_0x1a8aa1){var _0xf6a0cd=_0x43a543;let _0x5c576d=function(_0x1751bd,_0xcb62be){return _0xcb62be-_0x1751bd;},_0x559eb4;if(_0x1a8aa1['performance'])_0x559eb4=function(){var _0x15a1a5=_0x15e3;return _0x1a8aa1[_0x15a1a5(0x1fd)][_0x15a1a5(0x136)]();};else{if(_0x1a8aa1['process']&&_0x1a8aa1[_0xf6a0cd(0x1c2)][_0xf6a0cd(0x173)])_0x559eb4=function(){var _0x31a347=_0xf6a0cd;return _0x1a8aa1['process'][_0x31a347(0x173)]();},_0x5c576d=function(_0x3bff3d,_0xdadf55){return 0x3e8*(_0xdadf55[0x0]-_0x3bff3d[0x0])+(_0xdadf55[0x1]-_0x3bff3d[0x1])/0xf4240;};else try{let {performance:_0x417602}=require(_0xf6a0cd(0x195));_0x559eb4=function(){var _0x281dd2=_0xf6a0cd;return _0x417602[_0x281dd2(0x136)]();};}catch{_0x559eb4=function(){return+new Date();};}}return{'elapsed':_0x5c576d,'timeStamp':_0x559eb4,'now':()=>Date[_0xf6a0cd(0x136)]()};}function _0x87d0(){var _0x3111ab=['_allowedToConnectOnSend','match','autoExpandPropertyCount','_capIfString','127.0.0.1','toLowerCase','gateway.docker.internal','date','onerror',':logPointId:','log','_hasSymbolPropertyOnItsPath','POSITIVE_INFINITY','NEGATIVE_INFINITY','_propertyName','\\x20browser','push','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','global','hrtime','depth','[object\\x20Set]','_reconnectTimeout','message','_connectAttemptCount','_connecting','noFunctions','level','_hasMapOnItsPath','autoExpandPreviousObjects','replace','_processTreeNodeResult','_isSet','_isPrimitiveWrapperType','url','_socket','location','reload','_isNegativeZero','_addObjectProperty','dockerizedApp','readyState','port','data','versions','isExpressionToEvaluate','prototype','_treeNodePropertiesAfterFullValue','set','_p_name','ws://','_connected','negativeInfinity','perf_hooks','WebSocket','number','reduceLimits','hostname','isArray','10RcACza','_isPrimitiveType','_attemptToReconnectShortly','39048mcLhWw','_console_ninja','RegExp','substr','expressionsToEvaluate','140152CPbjuj','_setNodePermissions','Symbol','node','path','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_consoleNinjaAllowedToStart','_setNodeQueryPath','_numberRegExp','_allowedToSend','_getOwnPropertyNames','_getOwnPropertySymbols','11rIorlN','undefined','defineProperty','autoExpandMaxDepth','catch','split','value','pop','_addFunctionsNode','count','getOwnPropertySymbols','index','cappedProps','cappedElements','538528FhyPFw','elements','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','enumerable','_setNodeLabel','process','Number','rootExpression','function','parse','8277370ctUkPc','_p_length','pathToFileURL','resolveGetters','console','includes','object','_sortProps','_p_','boolean','_connectToHostNow','totalStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','map','785946tKReKN','_property','...','warn','symbol','onclose','_isArray','nodeModules','props','capped','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','63uGlcKA','valueOf','call','join','nan','stack','_disposeWebsocket','array','elapsed','length','timeStamp','unref','hasOwnProperty','serialize','_webSocketErrorDocsLink','[object\\x20Map]','root_exp_id','host','concat','HTMLAllCollection','Set','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Boolean','hits','trace','_inBrowser','224yVoYLn','timeEnd','getOwnPropertyNames','performance','nuxt','[object\\x20Array]','name','3267424EsDUvn','getWebSocketClass','_WebSocket','_dateToString','_sendErrorMessage','_WebSocketClass','time','_addProperty','parent','send','onopen','constructor','[object\\x20BigInt]','_additionalMetadata','stackTraceLimit','unknown','slice','default','_blacklistedProperty','bind','_console_ninja_session','remix','remix','_cleanNode','_ws','sort','unshift','root_exp','_hasSetOnItsPath','autoExpandLimit','\\x20server','error','26486520SacVXf','63933','_setNodeExpandableState','_type','now','string','getPrototypeOf','current','_Symbol',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.8","172.18.64.1"],'_isUndefined','_undefined','getOwnPropertyDescriptor','1.0.0','type','null','[object\\x20Date]','coverage','funcName','_isMap','close','logger\\x20websocket\\x20error','sortProps','toString','String','stringify','_objectToString','_maxConnectAttemptCount','allStrLength','forEach','5KadxxX','_keyStrRegExp','_regExpToString','_treeNodePropertiesBeforeFullValue','getter','create','then','disabledTrace','strLength','autoExpand','next.js','Map',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.225\\\\node_modules",'test','_setNodeExpressionPath'];_0x87d0=function(){return _0x3111ab;};return _0x87d0();}function Y(_0x1f675c,_0x277485,_0x133b71){var _0x45d4bb=_0x43a543;if(_0x1f675c[_0x45d4bb(0x1a9)]!==void 0x0)return _0x1f675c[_0x45d4bb(0x1a9)];let _0x53c150=_0x1f675c[_0x45d4bb(0x1c2)]?.[_0x45d4bb(0x18c)]?.[_0x45d4bb(0x1a6)];return _0x53c150&&_0x133b71===_0x45d4bb(0x1fe)?_0x1f675c[_0x45d4bb(0x1a9)]=!0x1:_0x1f675c[_0x45d4bb(0x1a9)]=_0x53c150||!_0x277485||_0x1f675c[_0x45d4bb(0x184)]?.[_0x45d4bb(0x199)]&&_0x277485[_0x45d4bb(0x1cc)](_0x1f675c['location'][_0x45d4bb(0x199)]),_0x1f675c[_0x45d4bb(0x1a9)];}function Q(_0xb6dc95,_0x4bcc89,_0x4862bf,_0x14a800){var _0x1d300d=_0x43a543;_0xb6dc95=_0xb6dc95,_0x4bcc89=_0x4bcc89,_0x4862bf=_0x4862bf,_0x14a800=_0x14a800;let _0x226747=W(_0xb6dc95),_0x834e9d=_0x226747['elapsed'],_0x7ab5fc=_0x226747[_0x1d300d(0x1ea)];class _0x5796fc{constructor(){var _0x5e3a77=_0x1d300d;this[_0x5e3a77(0x151)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5e3a77(0x1ab)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x5e3a77(0x13d)]=_0xb6dc95[_0x5e3a77(0x1b0)],this['_HTMLAllCollection']=_0xb6dc95['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x5e3a77(0x13e)],this['_getOwnPropertyNames']=Object[_0x5e3a77(0x1fc)],this[_0x5e3a77(0x13a)]=_0xb6dc95[_0x5e3a77(0x1a5)],this[_0x5e3a77(0x152)]=RegExp[_0x5e3a77(0x18e)][_0x5e3a77(0x149)],this['_dateToString']=Date[_0x5e3a77(0x18e)][_0x5e3a77(0x149)];}[_0x1d300d(0x1ed)](_0x10dbf0,_0x1ceb39,_0x586b8f,_0x238620){var _0x3edbdc=_0x1d300d,_0x42549e=this,_0x307332=_0x586b8f[_0x3edbdc(0x159)];function _0x9e5505(_0x12bb31,_0x2bd01a,_0x352f91){var _0x10f6e2=_0x3edbdc;_0x2bd01a[_0x10f6e2(0x140)]='unknown',_0x2bd01a['error']=_0x12bb31[_0x10f6e2(0x177)],_0x46264a=_0x352f91['node'][_0x10f6e2(0x139)],_0x352f91['node'][_0x10f6e2(0x139)]=_0x2bd01a,_0x42549e['_treeNodePropertiesBeforeFullValue'](_0x2bd01a,_0x352f91);}try{_0x586b8f[_0x3edbdc(0x17b)]++,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x16f)](_0x1ceb39);var _0x3f33fd,_0x544fda,_0x1503e9,_0xbcd6bf,_0x452b42=[],_0x438811=[],_0x50ddbd,_0x1d13ce=this['_type'](_0x1ceb39),_0xec5737=_0x1d13ce===_0x3edbdc(0x1e7),_0x3a59a7=!0x1,_0x12b1bb=_0x1d13ce===_0x3edbdc(0x1c5),_0x44ca6f=this['_isPrimitiveType'](_0x1d13ce),_0x81d63d=this[_0x3edbdc(0x181)](_0x1d13ce),_0x14b8d3=_0x44ca6f||_0x81d63d,_0x3d9fc2={},_0x501f8a=0x0,_0x3b765a=!0x1,_0x46264a,_0x5829fd=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x586b8f[_0x3edbdc(0x174)]){if(_0xec5737){if(_0x544fda=_0x1ceb39[_0x3edbdc(0x1e9)],_0x544fda>_0x586b8f[_0x3edbdc(0x1be)]){for(_0x1503e9=0x0,_0xbcd6bf=_0x586b8f[_0x3edbdc(0x1be)],_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811[_0x3edbdc(0x16f)](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));_0x10dbf0[_0x3edbdc(0x1bc)]=!0x0;}else{for(_0x1503e9=0x0,_0xbcd6bf=_0x544fda,_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811['push'](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));}_0x586b8f[_0x3edbdc(0x161)]+=_0x438811[_0x3edbdc(0x1e9)];}if(!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&!_0x44ca6f&&_0x1d13ce!=='String'&&_0x1d13ce!=='Buffer'&&_0x1d13ce!=='bigint'){var _0x270f7d=_0x238620['props']||_0x586b8f[_0x3edbdc(0x1dd)];if(this[_0x3edbdc(0x180)](_0x1ceb39)?(_0x3f33fd=0x0,_0x1ceb39['forEach'](function(_0x5089bb){var _0x427da8=_0x3edbdc;if(_0x501f8a++,_0x586b8f[_0x427da8(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x427da8(0x18d)]&&_0x586b8f[_0x427da8(0x159)]&&_0x586b8f[_0x427da8(0x161)]>_0x586b8f[_0x427da8(0x12f)]){_0x3b765a=!0x0;return;}_0x438811[_0x427da8(0x16f)](_0x42549e[_0x427da8(0x119)](_0x452b42,_0x1ceb39,'Set',_0x3f33fd++,_0x586b8f,function(_0x4fca16){return function(){return _0x4fca16;};}(_0x5089bb)));})):this[_0x3edbdc(0x145)](_0x1ceb39)&&_0x1ceb39[_0x3edbdc(0x14f)](function(_0x5b616a,_0x425d2e){var _0x434eab=_0x3edbdc;if(_0x501f8a++,_0x586b8f['autoExpandPropertyCount']++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x434eab(0x18d)]&&_0x586b8f[_0x434eab(0x159)]&&_0x586b8f[_0x434eab(0x161)]>_0x586b8f[_0x434eab(0x12f)]){_0x3b765a=!0x0;return;}var _0x29234f=_0x425d2e['toString']();_0x29234f[_0x434eab(0x1e9)]>0x64&&(_0x29234f=_0x29234f[_0x434eab(0x122)](0x0,0x64)+_0x434eab(0x1d7)),_0x438811[_0x434eab(0x16f)](_0x42549e[_0x434eab(0x119)](_0x452b42,_0x1ceb39,'Map',_0x29234f,_0x586b8f,function(_0x2a91df){return function(){return _0x2a91df;};}(_0x5b616a)));}),!_0x3a59a7){try{for(_0x50ddbd in _0x1ceb39)if(!(_0xec5737&&_0x5829fd['test'](_0x50ddbd))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f['autoExpand']&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f['autoExpandLimit']){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}catch{}if(_0x3d9fc2[_0x3edbdc(0x1c8)]=!0x0,_0x12b1bb&&(_0x3d9fc2[_0x3edbdc(0x191)]=!0x0),!_0x3b765a){var _0x597257=[][_0x3edbdc(0x1f2)](this[_0x3edbdc(0x1ad)](_0x1ceb39))['concat'](this[_0x3edbdc(0x1ae)](_0x1ceb39));for(_0x3f33fd=0x0,_0x544fda=_0x597257['length'];_0x3f33fd<_0x544fda;_0x3f33fd++)if(_0x50ddbd=_0x597257[_0x3f33fd],!(_0xec5737&&_0x5829fd[_0x3edbdc(0x15d)](_0x50ddbd[_0x3edbdc(0x149)]()))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)&&!_0x3d9fc2[_0x3edbdc(0x1cf)+_0x50ddbd['toString']()]){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f[_0x3edbdc(0x12f)]){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}}}}if(_0x10dbf0['type']=_0x1d13ce,_0x14b8d3?(_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x1e1)](),this[_0x3edbdc(0x162)](_0x1d13ce,_0x10dbf0,_0x586b8f,_0x238620)):_0x1d13ce===_0x3edbdc(0x166)?_0x10dbf0[_0x3edbdc(0x1b5)]=this[_0x3edbdc(0x115)]['call'](_0x1ceb39):_0x1d13ce==='bigint'?_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x149)]():_0x1d13ce===_0x3edbdc(0x1a0)?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_regExpToString'][_0x3edbdc(0x1e2)](_0x1ceb39):_0x1d13ce===_0x3edbdc(0x1d9)&&this[_0x3edbdc(0x13a)]?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_Symbol']['prototype'][_0x3edbdc(0x149)][_0x3edbdc(0x1e2)](_0x1ceb39):!_0x586b8f[_0x3edbdc(0x174)]&&!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&(delete _0x10dbf0[_0x3edbdc(0x1b5)],_0x10dbf0['capped']=!0x0),_0x3b765a&&(_0x10dbf0[_0x3edbdc(0x1bb)]=!0x0),_0x46264a=_0x586b8f[_0x3edbdc(0x1a6)]['current'],_0x586b8f['node'][_0x3edbdc(0x139)]=_0x10dbf0,this[_0x3edbdc(0x153)](_0x10dbf0,_0x586b8f),_0x438811['length']){for(_0x3f33fd=0x0,_0x544fda=_0x438811[_0x3edbdc(0x1e9)];_0x3f33fd<_0x544fda;_0x3f33fd++)_0x438811[_0x3f33fd](_0x3f33fd);}_0x452b42[_0x3edbdc(0x1e9)]&&(_0x10dbf0[_0x3edbdc(0x1dd)]=_0x452b42);}catch(_0x340cfb){_0x9e5505(_0x340cfb,_0x10dbf0,_0x586b8f);}return this['_additionalMetadata'](_0x1ceb39,_0x10dbf0),this['_treeNodePropertiesAfterFullValue'](_0x10dbf0,_0x586b8f),_0x586b8f[_0x3edbdc(0x1a6)][_0x3edbdc(0x139)]=_0x46264a,_0x586b8f['level']--,_0x586b8f['autoExpand']=_0x307332,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x1b6)](),_0x10dbf0;}[_0x1d300d(0x1ae)](_0x388498){var _0x4caf90=_0x1d300d;return Object[_0x4caf90(0x1b9)]?Object[_0x4caf90(0x1b9)](_0x388498):[];}[_0x1d300d(0x180)](_0x368417){var _0x1b6081=_0x1d300d;return!!(_0x368417&&_0xb6dc95[_0x1b6081(0x1f4)]&&this[_0x1b6081(0x14c)](_0x368417)===_0x1b6081(0x175)&&_0x368417[_0x1b6081(0x14f)]);}[_0x1d300d(0x124)](_0x45faf5,_0x42931b,_0x51f6ff){var _0x2bb08e=_0x1d300d;return _0x51f6ff[_0x2bb08e(0x17a)]?typeof _0x45faf5[_0x42931b]==_0x2bb08e(0x1c5):!0x1;}[_0x1d300d(0x135)](_0x12830d){var _0x24fe26=_0x1d300d,_0x3576cc='';return _0x3576cc=typeof _0x12830d,_0x3576cc===_0x24fe26(0x1cd)?this[_0x24fe26(0x14c)](_0x12830d)==='[object\\x20Array]'?_0x3576cc=_0x24fe26(0x1e7):this[_0x24fe26(0x14c)](_0x12830d)===_0x24fe26(0x142)?_0x3576cc=_0x24fe26(0x166):this['_objectToString'](_0x12830d)===_0x24fe26(0x11e)?_0x3576cc='bigint':_0x12830d===null?_0x3576cc=_0x24fe26(0x141):_0x12830d[_0x24fe26(0x11d)]&&(_0x3576cc=_0x12830d[_0x24fe26(0x11d)][_0x24fe26(0x111)]||_0x3576cc):_0x3576cc===_0x24fe26(0x1b0)&&this['_HTMLAllCollection']&&_0x12830d instanceof this['_HTMLAllCollection']&&(_0x3576cc=_0x24fe26(0x1f3)),_0x3576cc;}['_objectToString'](_0x50a89d){var _0x2b8162=_0x1d300d;return Object[_0x2b8162(0x18e)][_0x2b8162(0x149)][_0x2b8162(0x1e2)](_0x50a89d);}[_0x1d300d(0x19c)](_0x274bed){var _0x9c3df7=_0x1d300d;return _0x274bed===_0x9c3df7(0x1d0)||_0x274bed===_0x9c3df7(0x137)||_0x274bed===_0x9c3df7(0x197);}[_0x1d300d(0x181)](_0x407c03){var _0x45fa59=_0x1d300d;return _0x407c03===_0x45fa59(0x1f6)||_0x407c03===_0x45fa59(0x14a)||_0x407c03===_0x45fa59(0x1c3);}['_addProperty'](_0x1e1614,_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d){var _0x3cf7e2=this;return function(_0xbab26c){var _0x3d351a=_0x15e3,_0x58cb23=_0x200138['node'][_0x3d351a(0x139)],_0xf935a6=_0x200138['node'][_0x3d351a(0x1ba)],_0x37bf87=_0x200138['node']['parent'];_0x200138['node']['parent']=_0x58cb23,_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x1ba)]=typeof _0x51c304=='number'?_0x51c304:_0xbab26c,_0x1e1614['push'](_0x3cf7e2[_0x3d351a(0x1d6)](_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d)),_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x11a)]=_0x37bf87,_0x200138['node']['index']=_0xf935a6;};}[_0x1d300d(0x187)](_0x4b5dd7,_0x44c26e,_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32){var _0x5a4296=_0x1d300d,_0x54b7f9=this;return _0x44c26e[_0x5a4296(0x1cf)+_0x57b364[_0x5a4296(0x149)]()]=!0x0,function(_0x4abd60){var _0x4f7d33=_0x5a4296,_0x36cfb5=_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x139)],_0x2faa07=_0x39c28a['node'][_0x4f7d33(0x1ba)],_0x27bbd6=_0x39c28a['node'][_0x4f7d33(0x11a)];_0x39c28a['node']['parent']=_0x36cfb5,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x4abd60,_0x4b5dd7[_0x4f7d33(0x16f)](_0x54b7f9[_0x4f7d33(0x1d6)](_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32)),_0x39c28a['node']['parent']=_0x27bbd6,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x2faa07;};}[_0x1d300d(0x1d6)](_0x5d52ab,_0x5bff70,_0x3e3ee3,_0x1f2f32,_0x50e6a0){var _0x65fbab=_0x1d300d,_0x38249c=this;_0x50e6a0||(_0x50e6a0=function(_0x56426e,_0x1a78d8){return _0x56426e[_0x1a78d8];});var _0x4a1e4b=_0x3e3ee3['toString'](),_0x48428d=_0x1f2f32[_0x65fbab(0x1a2)]||{},_0x14631c=_0x1f2f32[_0x65fbab(0x174)],_0x29b921=_0x1f2f32[_0x65fbab(0x18d)];try{var _0x22c095=this['_isMap'](_0x5d52ab),_0x45899b=_0x4a1e4b;_0x22c095&&_0x45899b[0x0]==='\\x27'&&(_0x45899b=_0x45899b[_0x65fbab(0x1a1)](0x1,_0x45899b[_0x65fbab(0x1e9)]-0x2));var _0x40d94f=_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d[_0x65fbab(0x1cf)+_0x45899b];_0x40d94f&&(_0x1f2f32[_0x65fbab(0x174)]=_0x1f2f32[_0x65fbab(0x174)]+0x1),_0x1f2f32['isExpressionToEvaluate']=!!_0x40d94f;var _0x2f8a83=typeof _0x3e3ee3==_0x65fbab(0x1d9),_0x5a54d0={'name':_0x2f8a83||_0x22c095?_0x4a1e4b:this[_0x65fbab(0x16d)](_0x4a1e4b)};if(_0x2f8a83&&(_0x5a54d0[_0x65fbab(0x1d9)]=!0x0),!(_0x5bff70===_0x65fbab(0x1e7)||_0x5bff70==='Error')){var _0x436dad=this['_getOwnPropertyDescriptor'](_0x5d52ab,_0x3e3ee3);if(_0x436dad&&(_0x436dad[_0x65fbab(0x190)]&&(_0x5a54d0['setter']=!0x0),_0x436dad['get']&&!_0x40d94f&&!_0x1f2f32[_0x65fbab(0x1ca)]))return _0x5a54d0[_0x65fbab(0x154)]=!0x0,this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x198f90;try{_0x198f90=_0x50e6a0(_0x5d52ab,_0x3e3ee3);}catch(_0x303817){return _0x5a54d0={'name':_0x4a1e4b,'type':_0x65fbab(0x121),'error':_0x303817[_0x65fbab(0x177)]},this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x369814=this[_0x65fbab(0x135)](_0x198f90),_0x596959=this[_0x65fbab(0x19c)](_0x369814);if(_0x5a54d0[_0x65fbab(0x140)]=_0x369814,_0x596959)this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x1e4757=_0x65fbab;_0x5a54d0[_0x1e4757(0x1b5)]=_0x198f90[_0x1e4757(0x1e1)](),!_0x40d94f&&_0x38249c[_0x1e4757(0x162)](_0x369814,_0x5a54d0,_0x1f2f32,{});});else{var _0x194fd6=_0x1f2f32[_0x65fbab(0x159)]&&_0x1f2f32[_0x65fbab(0x17b)]<_0x1f2f32[_0x65fbab(0x1b2)]&&_0x1f2f32[_0x65fbab(0x17d)]['indexOf'](_0x198f90)<0x0&&_0x369814!==_0x65fbab(0x1c5)&&_0x1f2f32[_0x65fbab(0x161)]<_0x1f2f32[_0x65fbab(0x12f)];_0x194fd6||_0x1f2f32[_0x65fbab(0x17b)]<_0x14631c||_0x40d94f?(this[_0x65fbab(0x1ed)](_0x5a54d0,_0x198f90,_0x1f2f32,_0x40d94f||{}),this['_additionalMetadata'](_0x198f90,_0x5a54d0)):this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x5c46d0=_0x65fbab;_0x369814===_0x5c46d0(0x141)||_0x369814===_0x5c46d0(0x1b0)||(delete _0x5a54d0[_0x5c46d0(0x1b5)],_0x5a54d0[_0x5c46d0(0x1de)]=!0x0);});}return _0x5a54d0;}finally{_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d,_0x1f2f32['depth']=_0x14631c,_0x1f2f32['isExpressionToEvaluate']=_0x29b921;}}[_0x1d300d(0x162)](_0x62aaa4,_0x59e771,_0x37bb20,_0x6ec0e0){var _0x640cf1=_0x1d300d,_0x27aa85=_0x6ec0e0[_0x640cf1(0x158)]||_0x37bb20[_0x640cf1(0x158)];if((_0x62aaa4===_0x640cf1(0x137)||_0x62aaa4===_0x640cf1(0x14a))&&_0x59e771[_0x640cf1(0x1b5)]){let _0xa78f12=_0x59e771['value']['length'];_0x37bb20[_0x640cf1(0x14e)]+=_0xa78f12,_0x37bb20[_0x640cf1(0x14e)]>_0x37bb20[_0x640cf1(0x1d2)]?(_0x59e771[_0x640cf1(0x1de)]='',delete _0x59e771[_0x640cf1(0x1b5)]):_0xa78f12>_0x27aa85&&(_0x59e771[_0x640cf1(0x1de)]=_0x59e771[_0x640cf1(0x1b5)][_0x640cf1(0x1a1)](0x0,_0x27aa85),delete _0x59e771[_0x640cf1(0x1b5)]);}}[_0x1d300d(0x145)](_0x162847){var _0x5b1e94=_0x1d300d;return!!(_0x162847&&_0xb6dc95[_0x5b1e94(0x15b)]&&this['_objectToString'](_0x162847)===_0x5b1e94(0x1ef)&&_0x162847[_0x5b1e94(0x14f)]);}['_propertyName'](_0x272d62){var _0x1e5868=_0x1d300d;if(_0x272d62[_0x1e5868(0x160)](/^\\d+$/))return _0x272d62;var _0x149cad;try{_0x149cad=JSON['stringify'](''+_0x272d62);}catch{_0x149cad='\\x22'+this['_objectToString'](_0x272d62)+'\\x22';}return _0x149cad[_0x1e5868(0x160)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x149cad=_0x149cad[_0x1e5868(0x1a1)](0x1,_0x149cad[_0x1e5868(0x1e9)]-0x2):_0x149cad=_0x149cad[_0x1e5868(0x17e)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x149cad;}['_processTreeNodeResult'](_0x362ce5,_0x2a7264,_0x432370,_0x10f3b7){var _0x9583d4=_0x1d300d;this[_0x9583d4(0x153)](_0x362ce5,_0x2a7264),_0x10f3b7&&_0x10f3b7(),this[_0x9583d4(0x11f)](_0x432370,_0x362ce5),this[_0x9583d4(0x18f)](_0x362ce5,_0x2a7264);}[_0x1d300d(0x153)](_0x2b63e1,_0x5f4d68){var _0x51f5e1=_0x1d300d;this[_0x51f5e1(0x170)](_0x2b63e1,_0x5f4d68),this['_setNodeQueryPath'](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x15e)](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x1a4)](_0x2b63e1,_0x5f4d68);}[_0x1d300d(0x170)](_0x5c8499,_0x3e630d){}[_0x1d300d(0x1aa)](_0x1349e3,_0x3bb299){}[_0x1d300d(0x1c1)](_0x3d9350,_0x132c6b){}[_0x1d300d(0x13c)](_0x11fd87){return _0x11fd87===this['_undefined'];}[_0x1d300d(0x18f)](_0x1c9a53,_0x5d5a1a){var _0x5d7ed6=_0x1d300d;this['_setNodeLabel'](_0x1c9a53,_0x5d5a1a),this['_setNodeExpandableState'](_0x1c9a53),_0x5d5a1a[_0x5d7ed6(0x148)]&&this[_0x5d7ed6(0x1ce)](_0x1c9a53),this[_0x5d7ed6(0x1b7)](_0x1c9a53,_0x5d5a1a),this['_addLoadNode'](_0x1c9a53,_0x5d5a1a),this[_0x5d7ed6(0x129)](_0x1c9a53);}[_0x1d300d(0x11f)](_0x4efbd0,_0x10dd3d){var _0x5032e8=_0x1d300d;let _0x226eb6;try{_0xb6dc95[_0x5032e8(0x1cb)]&&(_0x226eb6=_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)],_0xb6dc95['console'][_0x5032e8(0x131)]=function(){}),_0x4efbd0&&typeof _0x4efbd0['length']==_0x5032e8(0x197)&&(_0x10dd3d[_0x5032e8(0x1e9)]=_0x4efbd0[_0x5032e8(0x1e9)]);}catch{}finally{_0x226eb6&&(_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)]=_0x226eb6);}if(_0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x197)||_0x10dd3d[_0x5032e8(0x140)]==='Number'){if(isNaN(_0x10dd3d[_0x5032e8(0x1b5)]))_0x10dd3d[_0x5032e8(0x1e4)]=!0x0,delete _0x10dd3d['value'];else switch(_0x10dd3d[_0x5032e8(0x1b5)]){case Number[_0x5032e8(0x16b)]:_0x10dd3d['positiveInfinity']=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case Number[_0x5032e8(0x16c)]:_0x10dd3d[_0x5032e8(0x194)]=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case 0x0:this[_0x5032e8(0x186)](_0x10dd3d[_0x5032e8(0x1b5)])&&(_0x10dd3d['negativeZero']=!0x0);break;}}else _0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x1c5)&&typeof _0x4efbd0[_0x5032e8(0x111)]=='string'&&_0x4efbd0[_0x5032e8(0x111)]&&_0x10dd3d[_0x5032e8(0x111)]&&_0x4efbd0['name']!==_0x10dd3d[_0x5032e8(0x111)]&&(_0x10dd3d[_0x5032e8(0x144)]=_0x4efbd0['name']);}['_isNegativeZero'](_0x130d3d){return 0x1/_0x130d3d===Number['NEGATIVE_INFINITY'];}[_0x1d300d(0x1ce)](_0x25b759){var _0x297173=_0x1d300d;!_0x25b759[_0x297173(0x1dd)]||!_0x25b759[_0x297173(0x1dd)]['length']||_0x25b759[_0x297173(0x140)]==='array'||_0x25b759[_0x297173(0x140)]===_0x297173(0x15b)||_0x25b759['type']==='Set'||_0x25b759[_0x297173(0x1dd)][_0x297173(0x12b)](function(_0x4a6eb5,_0x121f30){var _0x1a487c=_0x297173,_0x2a3c33=_0x4a6eb5[_0x1a487c(0x111)][_0x1a487c(0x164)](),_0x35982d=_0x121f30[_0x1a487c(0x111)][_0x1a487c(0x164)]();return _0x2a3c33<_0x35982d?-0x1:_0x2a3c33>_0x35982d?0x1:0x0;});}[_0x1d300d(0x1b7)](_0x3e076c,_0x4d7ea0){var _0xc9306f=_0x1d300d;if(!(_0x4d7ea0[_0xc9306f(0x17a)]||!_0x3e076c['props']||!_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)])){for(var _0xc31ac5=[],_0x205545=[],_0x404587=0x0,_0x4d96f4=_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)];_0x404587<_0x4d96f4;_0x404587++){var _0x405dd4=_0x3e076c['props'][_0x404587];_0x405dd4[_0xc9306f(0x140)]===_0xc9306f(0x1c5)?_0xc31ac5[_0xc9306f(0x16f)](_0x405dd4):_0x205545[_0xc9306f(0x16f)](_0x405dd4);}if(!(!_0x205545[_0xc9306f(0x1e9)]||_0xc31ac5[_0xc9306f(0x1e9)]<=0x1)){_0x3e076c[_0xc9306f(0x1dd)]=_0x205545;var _0x18f973={'functionsNode':!0x0,'props':_0xc31ac5};this[_0xc9306f(0x170)](_0x18f973,_0x4d7ea0),this['_setNodeLabel'](_0x18f973,_0x4d7ea0),this[_0xc9306f(0x134)](_0x18f973),this['_setNodePermissions'](_0x18f973,_0x4d7ea0),_0x18f973['id']+='\\x20f',_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x12c)](_0x18f973);}}}['_addLoadNode'](_0x48adba,_0x354896){}[_0x1d300d(0x134)](_0x8800fa){}[_0x1d300d(0x1db)](_0x27fdad){var _0x1ff63b=_0x1d300d;return Array[_0x1ff63b(0x19a)](_0x27fdad)||typeof _0x27fdad==_0x1ff63b(0x1cd)&&this['_objectToString'](_0x27fdad)===_0x1ff63b(0x110);}[_0x1d300d(0x1a4)](_0xedb925,_0x275e19){}[_0x1d300d(0x129)](_0x2f7d57){var _0x5c51c7=_0x1d300d;delete _0x2f7d57[_0x5c51c7(0x16a)],delete _0x2f7d57[_0x5c51c7(0x12e)],delete _0x2f7d57[_0x5c51c7(0x17c)];}['_setNodeExpressionPath'](_0x400985,_0x4ed591){}}let _0x575101=new _0x5796fc(),_0x317e62={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4a2414={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23706c(_0x3c0535,_0x16b8dc,_0x44036e,_0x3893af,_0x5f2ce1,_0x18eeb6){var _0x1d80f5=_0x1d300d;let _0x17ccf2,_0x578c02;try{_0x578c02=_0x7ab5fc(),_0x17ccf2=_0x4862bf[_0x16b8dc],!_0x17ccf2||_0x578c02-_0x17ccf2['ts']>0x1f4&&_0x17ccf2[_0x1d80f5(0x1b8)]&&_0x17ccf2[_0x1d80f5(0x118)]/_0x17ccf2['count']<0x64?(_0x4862bf[_0x16b8dc]=_0x17ccf2={'count':0x0,'time':0x0,'ts':_0x578c02},_0x4862bf[_0x1d80f5(0x1f7)]={}):_0x578c02-_0x4862bf[_0x1d80f5(0x1f7)]['ts']>0x32&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]/_0x4862bf['hits']['count']<0x64&&(_0x4862bf[_0x1d80f5(0x1f7)]={});let _0x2ecb7d=[],_0x3ecc3c=_0x17ccf2['reduceLimits']||_0x4862bf['hits'][_0x1d80f5(0x198)]?_0x4a2414:_0x317e62,_0x49ddd6=_0x37b5c9=>{var _0x167b05=_0x1d80f5;let _0x45f67f={};return _0x45f67f[_0x167b05(0x1dd)]=_0x37b5c9[_0x167b05(0x1dd)],_0x45f67f[_0x167b05(0x1be)]=_0x37b5c9[_0x167b05(0x1be)],_0x45f67f[_0x167b05(0x158)]=_0x37b5c9[_0x167b05(0x158)],_0x45f67f[_0x167b05(0x1d2)]=_0x37b5c9['totalStrLength'],_0x45f67f[_0x167b05(0x12f)]=_0x37b5c9[_0x167b05(0x12f)],_0x45f67f[_0x167b05(0x1b2)]=_0x37b5c9[_0x167b05(0x1b2)],_0x45f67f[_0x167b05(0x148)]=!0x1,_0x45f67f['noFunctions']=!_0x4bcc89,_0x45f67f['depth']=0x1,_0x45f67f[_0x167b05(0x17b)]=0x0,_0x45f67f['expId']=_0x167b05(0x1f0),_0x45f67f[_0x167b05(0x1c4)]=_0x167b05(0x12d),_0x45f67f[_0x167b05(0x159)]=!0x0,_0x45f67f[_0x167b05(0x17d)]=[],_0x45f67f[_0x167b05(0x161)]=0x0,_0x45f67f[_0x167b05(0x1ca)]=!0x0,_0x45f67f['allStrLength']=0x0,_0x45f67f['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45f67f;};for(var _0x3e5ecd=0x0;_0x3e5ecd<_0x5f2ce1[_0x1d80f5(0x1e9)];_0x3e5ecd++)_0x2ecb7d[_0x1d80f5(0x16f)](_0x575101['serialize']({'timeNode':_0x3c0535===_0x1d80f5(0x118)||void 0x0},_0x5f2ce1[_0x3e5ecd],_0x49ddd6(_0x3ecc3c),{}));if(_0x3c0535==='trace'){let _0x2b2098=Error[_0x1d80f5(0x120)];try{Error[_0x1d80f5(0x120)]=0x1/0x0,_0x2ecb7d['push'](_0x575101[_0x1d80f5(0x1ed)]({'stackNode':!0x0},new Error()[_0x1d80f5(0x1e5)],_0x49ddd6(_0x3ecc3c),{'strLength':0x1/0x0}));}finally{Error[_0x1d80f5(0x120)]=_0x2b2098;}}return{'method':'log','version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':_0x2ecb7d,'id':_0x16b8dc,'context':_0x18eeb6}]};}catch(_0x4e99d0){return{'method':_0x1d80f5(0x169),'version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':[{'type':_0x1d80f5(0x121),'error':_0x4e99d0&&_0x4e99d0[_0x1d80f5(0x177)]}],'id':_0x16b8dc,'context':_0x18eeb6}]};}finally{try{if(_0x17ccf2&&_0x578c02){let _0x10b2cd=_0x7ab5fc();_0x17ccf2['count']++,_0x17ccf2[_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x17ccf2['ts']=_0x10b2cd,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]++,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x4862bf[_0x1d80f5(0x1f7)]['ts']=_0x10b2cd,(_0x17ccf2['count']>0x32||_0x17ccf2[_0x1d80f5(0x118)]>0x64)&&(_0x17ccf2[_0x1d80f5(0x198)]=!0x0),(_0x4862bf['hits'][_0x1d80f5(0x1b8)]>0x3e8||_0x4862bf['hits'][_0x1d80f5(0x118)]>0x12c)&&(_0x4862bf[_0x1d80f5(0x1f7)]['reduceLimits']=!0x0);}}catch{}}}return _0x23706c;}((_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x2d7518,_0x477f3f,_0x49f77c,_0x67f0fb,_0x51ce8f)=>{var _0x17b4c9=_0x43a543;if(_0x1806cc[_0x17b4c9(0x19f)])return _0x1806cc[_0x17b4c9(0x19f)];if(!Y(_0x1806cc,_0x49f77c,_0x439a11))return _0x1806cc['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1806cc[_0x17b4c9(0x19f)];let _0x4540ce=W(_0x1806cc),_0x44e230=_0x4540ce[_0x17b4c9(0x1e8)],_0x130677=_0x4540ce[_0x17b4c9(0x1ea)],_0x1444c2=_0x4540ce[_0x17b4c9(0x136)],_0x2ca3fb={'hits':{},'ts':{}},_0x5e109e=Q(_0x1806cc,_0x67f0fb,_0x2ca3fb,_0x2d7518),_0x3e58ab=_0x1de792=>{_0x2ca3fb['ts'][_0x1de792]=_0x130677();},_0x1678a8=(_0xa3635f,_0x13a102)=>{var _0x1a4b22=_0x17b4c9;let _0x3eb140=_0x2ca3fb['ts'][_0x13a102];if(delete _0x2ca3fb['ts'][_0x13a102],_0x3eb140){let _0x484d76=_0x44e230(_0x3eb140,_0x130677());_0x37c63d(_0x5e109e(_0x1a4b22(0x118),_0xa3635f,_0x1444c2(),_0x21fc4a,[_0x484d76],_0x13a102));}},_0x1940b0=_0x183f01=>_0x127212=>{var _0x466f11=_0x17b4c9;try{_0x3e58ab(_0x127212),_0x183f01(_0x127212);}finally{_0x1806cc['console'][_0x466f11(0x118)]=_0x183f01;}},_0x1b4025=_0x302b67=>_0x593b14=>{var _0x3f7217=_0x17b4c9;try{let [_0x2ce050,_0x439151]=_0x593b14[_0x3f7217(0x1b4)](_0x3f7217(0x168));_0x1678a8(_0x439151,_0x2ce050),_0x302b67(_0x2ce050);}finally{_0x1806cc[_0x3f7217(0x1cb)][_0x3f7217(0x1fb)]=_0x302b67;}};_0x1806cc[_0x17b4c9(0x19f)]={'consoleLog':(_0x363879,_0x5c8485)=>{var _0xd8d52e=_0x17b4c9;_0x1806cc['console']['log'][_0xd8d52e(0x111)]!=='disabledLog'&&_0x37c63d(_0x5e109e(_0xd8d52e(0x169),_0x363879,_0x1444c2(),_0x21fc4a,_0x5c8485));},'consoleTrace':(_0x496aa9,_0x3345e4)=>{var _0x2f53c6=_0x17b4c9;_0x1806cc[_0x2f53c6(0x1cb)][_0x2f53c6(0x169)][_0x2f53c6(0x111)]!==_0x2f53c6(0x157)&&_0x37c63d(_0x5e109e(_0x2f53c6(0x1f8),_0x496aa9,_0x1444c2(),_0x21fc4a,_0x3345e4));},'consoleTime':()=>{var _0x1aa7b3=_0x17b4c9;_0x1806cc[_0x1aa7b3(0x1cb)]['time']=_0x1940b0(_0x1806cc[_0x1aa7b3(0x1cb)][_0x1aa7b3(0x118)]);},'consoleTimeEnd':()=>{var _0x51a24e=_0x17b4c9;_0x1806cc['console'][_0x51a24e(0x1fb)]=_0x1b4025(_0x1806cc['console']['timeEnd']);},'autoLog':(_0x2f565b,_0x537581)=>{var _0x2960a1=_0x17b4c9;_0x37c63d(_0x5e109e(_0x2960a1(0x169),_0x537581,_0x1444c2(),_0x21fc4a,[_0x2f565b]));},'autoLogMany':(_0x40b240,_0x2f2e6d)=>{var _0x44228c=_0x17b4c9;_0x37c63d(_0x5e109e(_0x44228c(0x169),_0x40b240,_0x1444c2(),_0x21fc4a,_0x2f2e6d));},'autoTrace':(_0x22c659,_0x27110d)=>{var _0x4d8684=_0x17b4c9;_0x37c63d(_0x5e109e(_0x4d8684(0x1f8),_0x27110d,_0x1444c2(),_0x21fc4a,[_0x22c659]));},'autoTraceMany':(_0x123518,_0x2e4878)=>{_0x37c63d(_0x5e109e('trace',_0x123518,_0x1444c2(),_0x21fc4a,_0x2e4878));},'autoTime':(_0x927205,_0x43e547,_0xdea416)=>{_0x3e58ab(_0xdea416);},'autoTimeEnd':(_0x3f3ce8,_0x3442bd,_0x2df5cc)=>{_0x1678a8(_0x3442bd,_0x2df5cc);},'coverage':_0x507b40=>{var _0x30461e=_0x17b4c9;_0x37c63d({'method':_0x30461e(0x143),'version':_0x2d7518,'args':[{'id':_0x507b40}]});}};let _0x37c63d=J(_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x51ce8f),_0x21fc4a=_0x1806cc[_0x17b4c9(0x126)];return _0x1806cc['_console_ninja'];})(globalThis,_0x43a543(0x163),_0x43a543(0x133),_0x43a543(0x15c),_0x43a543(0x128),_0x43a543(0x13f),'1695018583800',_0x43a543(0x13b),'','');`);
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
        className: "text-white w-full  bg-[#3b5681] hover:bg-[#3b5681]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/svg/login.png" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          "LOG IN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 20,
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
        lineNumber: 24,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "form",
        {
          method: "dialog",
          className: "transition-all duration-75 backdrop-blur-sm modal-backdrop  ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: "close" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Login.tsx",
          lineNumber: 26,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 22,
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
      console.log(...oo_oo2("2790033281_0", "err: ", err));
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
      console.log(...oo_oo2("2790033281_1", res));
    } catch (err) {
      console.log(...oo_oo2("2790033281_2", "code verification error : ", err));
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
          lineNumber: 89,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-stone-600", children: "Pecha tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto  mt-2 text-center text-sm  leading-9 tracking-tight text-stone-900", children: "Log in to Pecha tools to continue using tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 sm:mx-auto sm:w-full sm:max-w-[426px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "   sm:rounded-lg sm:px-12", children: [
      redirectEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 105,
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
                lineNumber: 114,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg font-semibold leading-6", children: "Google" }, void 0, !1, {
                fileName: "app/component/Login.tsx",
                lineNumber: 115,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/Login.tsx",
            lineNumber: 110,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 108,
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
                lineNumber: 126,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/component/Login.tsx",
              lineNumber: 122,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex justify-center text-sm font-regular leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-white px-6 text-stone-500", children: "Or sign in with" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 129,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 107,
        columnNumber: 15
      }, this),
      showOtpField ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "font-semibold mb-2 text-primary-800", children: "Check your inbox" }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 172,
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
                lineNumber: 178,
                columnNumber: 21
              },
              this
            ),
            "."
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 175,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 171,
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
                lineNumber: 191,
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
                lineNumber: 198,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/component/Login.tsx",
              lineNumber: 197,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 190,
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
                lineNumber: 210,
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
                lineNumber: 216,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/component/Login.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 189,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 170,
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
              lineNumber: 139,
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
              lineNumber: 146,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 138,
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
            lineNumber: 160,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 137,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Login.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Login.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43a543=_0x15e3;(function(_0x32ecad,_0x4225a4){var _0x3645a8=_0x15e3,_0x3ae322=_0x32ecad();while(!![]){try{var _0x498c64=-parseInt(_0x3645a8(0x19b))/0x1*(parseInt(_0x3645a8(0x1a3))/0x2)+-parseInt(_0x3645a8(0x1d5))/0x3+-parseInt(_0x3645a8(0x112))/0x4*(parseInt(_0x3645a8(0x150))/0x5)+parseInt(_0x3645a8(0x19e))/0x6*(-parseInt(_0x3645a8(0x1fa))/0x7)+-parseInt(_0x3645a8(0x1bd))/0x8*(parseInt(_0x3645a8(0x1e0))/0x9)+-parseInt(_0x3645a8(0x1c7))/0xa*(-parseInt(_0x3645a8(0x1af))/0xb)+parseInt(_0x3645a8(0x132))/0xc;if(_0x498c64===_0x4225a4)break;else _0x3ae322['push'](_0x3ae322['shift']());}catch(_0x3afb16){_0x3ae322['push'](_0x3ae322['shift']());}}}(_0x87d0,0x8c989));function _0x15e3(_0x112a07,_0x13317a){var _0x15e3a8=_0x87d0();return _0x15e3=function(_0x4e9a8a,_0x21add4){_0x4e9a8a=_0x4e9a8a-0x110;var _0x42146e=_0x15e3a8[_0x4e9a8a];return _0x42146e;},_0x15e3(_0x112a07,_0x13317a);}var j=Object[_0x43a543(0x155)],X=Object[_0x43a543(0x1b1)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x43a543(0x1fc)],te=Object[_0x43a543(0x138)],ne=Object[_0x43a543(0x18e)][_0x43a543(0x1ec)],re=(_0x54c671,_0x145a94,_0x13174b,_0x4bfcc6)=>{var _0x4f929f=_0x43a543;if(_0x145a94&&typeof _0x145a94==_0x4f929f(0x1cd)||typeof _0x145a94=='function'){for(let _0x18280f of ee(_0x145a94))!ne[_0x4f929f(0x1e2)](_0x54c671,_0x18280f)&&_0x18280f!==_0x13174b&&X(_0x54c671,_0x18280f,{'get':()=>_0x145a94[_0x18280f],'enumerable':!(_0x4bfcc6=G(_0x145a94,_0x18280f))||_0x4bfcc6[_0x4f929f(0x1c0)]});}return _0x54c671;},K=(_0x338af9,_0x4279be,_0x176c39)=>(_0x176c39=_0x338af9!=null?j(te(_0x338af9)):{},re(_0x4279be||!_0x338af9||!_0x338af9['__es'+'Module']?X(_0x176c39,'default',{'value':_0x338af9,'enumerable':!0x0}):_0x176c39,_0x338af9)),q=class{constructor(_0x30b9b7,_0x4ddc50,_0x3b3329,_0x221b92,_0xd92f29){var _0x6e22a9=_0x43a543;this[_0x6e22a9(0x172)]=_0x30b9b7,this[_0x6e22a9(0x1f1)]=_0x4ddc50,this[_0x6e22a9(0x18a)]=_0x3b3329,this['nodeModules']=_0x221b92,this[_0x6e22a9(0x188)]=_0xd92f29,this[_0x6e22a9(0x1ac)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x6e22a9(0x193)]=!0x1,this[_0x6e22a9(0x179)]=!0x1,this['_inBrowser']=!this[_0x6e22a9(0x172)][_0x6e22a9(0x1c2)]?.[_0x6e22a9(0x18c)]?.[_0x6e22a9(0x1a6)],this['_WebSocketClass']=null,this[_0x6e22a9(0x178)]=0x0,this[_0x6e22a9(0x14d)]=0x14,this[_0x6e22a9(0x1ee)]='https://tinyurl.com/37x8b79t',this[_0x6e22a9(0x116)]=(this[_0x6e22a9(0x1f9)]?_0x6e22a9(0x1a8):_0x6e22a9(0x1d3))+this[_0x6e22a9(0x1ee)];}async[_0x43a543(0x113)](){var _0x15e7e3=_0x43a543;if(this[_0x15e7e3(0x117)])return this[_0x15e7e3(0x117)];let _0x38e7bf;if(this[_0x15e7e3(0x1f9)])_0x38e7bf=this['global'][_0x15e7e3(0x196)];else{if(this['global'][_0x15e7e3(0x1c2)]?.[_0x15e7e3(0x114)])_0x38e7bf=this[_0x15e7e3(0x172)]['process']?.['_WebSocket'];else try{let _0x5718ef=await import(_0x15e7e3(0x1a7));_0x38e7bf=(await import((await import(_0x15e7e3(0x182)))[_0x15e7e3(0x1c9)](_0x5718ef[_0x15e7e3(0x1e3)](this[_0x15e7e3(0x1dc)],'ws/index.js'))[_0x15e7e3(0x149)]()))[_0x15e7e3(0x123)];}catch{try{_0x38e7bf=require(require(_0x15e7e3(0x1a7))['join'](this[_0x15e7e3(0x1dc)],'ws'));}catch{throw new Error(_0x15e7e3(0x1bf));}}}return this[_0x15e7e3(0x117)]=_0x38e7bf,_0x38e7bf;}[_0x43a543(0x1d1)](){var _0x264fb3=_0x43a543;this[_0x264fb3(0x179)]||this['_connected']||this[_0x264fb3(0x178)]>=this[_0x264fb3(0x14d)]||(this[_0x264fb3(0x15f)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x264fb3(0x12a)]=new Promise((_0x4186df,_0x681501)=>{var _0x2ebc2c=_0x264fb3;this[_0x2ebc2c(0x113)]()[_0x2ebc2c(0x156)](_0x1f4672=>{var _0x3ed9c0=_0x2ebc2c;let _0x14af06=new _0x1f4672(_0x3ed9c0(0x192)+(!this[_0x3ed9c0(0x1f9)]&&this[_0x3ed9c0(0x188)]?_0x3ed9c0(0x165):this[_0x3ed9c0(0x1f1)])+':'+this[_0x3ed9c0(0x18a)]);_0x14af06[_0x3ed9c0(0x167)]=()=>{var _0x2b49f8=_0x3ed9c0;this[_0x2b49f8(0x1ac)]=!0x1,this[_0x2b49f8(0x1e6)](_0x14af06),this[_0x2b49f8(0x19d)](),_0x681501(new Error(_0x2b49f8(0x147)));},_0x14af06['onopen']=()=>{var _0x2ea352=_0x3ed9c0;this['_inBrowser']||_0x14af06[_0x2ea352(0x183)]&&_0x14af06[_0x2ea352(0x183)][_0x2ea352(0x1eb)]&&_0x14af06[_0x2ea352(0x183)]['unref'](),_0x4186df(_0x14af06);},_0x14af06[_0x3ed9c0(0x1da)]=()=>{var _0x5359f5=_0x3ed9c0;this[_0x5359f5(0x15f)]=!0x0,this[_0x5359f5(0x1e6)](_0x14af06),this['_attemptToReconnectShortly']();},_0x14af06['onmessage']=_0xa518a9=>{var _0x393f61=_0x3ed9c0;try{_0xa518a9&&_0xa518a9[_0x393f61(0x18b)]&&this[_0x393f61(0x1f9)]&&JSON[_0x393f61(0x1c6)](_0xa518a9[_0x393f61(0x18b)])['method']==='reload'&&this[_0x393f61(0x172)][_0x393f61(0x184)][_0x393f61(0x185)]();}catch{}};})['then'](_0x21bab2=>(this['_connected']=!0x0,this[_0x2ebc2c(0x179)]=!0x1,this[_0x2ebc2c(0x15f)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2ebc2c(0x178)]=0x0,_0x21bab2))[_0x2ebc2c(0x1b3)](_0x3e393b=>(this['_connected']=!0x1,this[_0x2ebc2c(0x179)]=!0x1,console[_0x2ebc2c(0x1d8)](_0x2ebc2c(0x1df)+this['_webSocketErrorDocsLink']),_0x681501(new Error(_0x2ebc2c(0x1f5)+(_0x3e393b&&_0x3e393b[_0x2ebc2c(0x177)])))));}));}[_0x43a543(0x1e6)](_0x3edf14){var _0x3280ec=_0x43a543;this['_connected']=!0x1,this[_0x3280ec(0x179)]=!0x1;try{_0x3edf14[_0x3280ec(0x1da)]=null,_0x3edf14[_0x3280ec(0x167)]=null,_0x3edf14[_0x3280ec(0x11c)]=null;}catch{}try{_0x3edf14[_0x3280ec(0x189)]<0x2&&_0x3edf14[_0x3280ec(0x146)]();}catch{}}['_attemptToReconnectShortly'](){var _0x52a1d0=_0x43a543;clearTimeout(this['_reconnectTimeout']),!(this[_0x52a1d0(0x178)]>=this[_0x52a1d0(0x14d)])&&(this[_0x52a1d0(0x176)]=setTimeout(()=>{var _0x252df7=_0x52a1d0;this['_connected']||this[_0x252df7(0x179)]||(this[_0x252df7(0x1d1)](),this[_0x252df7(0x12a)]?.[_0x252df7(0x1b3)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]&&this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]());}async[_0x43a543(0x11b)](_0x54e6c1){var _0x1ad97f=_0x43a543;try{if(!this[_0x1ad97f(0x1ac)])return;this[_0x1ad97f(0x15f)]&&this[_0x1ad97f(0x1d1)](),(await this[_0x1ad97f(0x12a)])[_0x1ad97f(0x11b)](JSON[_0x1ad97f(0x14b)](_0x54e6c1));}catch(_0x1f5e2b){console[_0x1ad97f(0x1d8)](this[_0x1ad97f(0x116)]+':\\x20'+(_0x1f5e2b&&_0x1f5e2b[_0x1ad97f(0x177)])),this['_allowedToSend']=!0x1,this[_0x1ad97f(0x19d)]();}}};function J(_0x434156,_0x226963,_0x3e5227,_0xf0d922,_0x3d3edf,_0x1d9a2d){var _0x1d2b40=_0x43a543;let _0x3b4857=_0x3e5227['split'](',')[_0x1d2b40(0x1d4)](_0x229fec=>{var _0x1e26b3=_0x1d2b40;try{_0x434156[_0x1e26b3(0x126)]||((_0x3d3edf===_0x1e26b3(0x15a)||_0x3d3edf===_0x1e26b3(0x127)||_0x3d3edf==='astro')&&(_0x3d3edf+=_0x434156[_0x1e26b3(0x1c2)]?.[_0x1e26b3(0x18c)]?.[_0x1e26b3(0x1a6)]?_0x1e26b3(0x130):_0x1e26b3(0x16e)),_0x434156[_0x1e26b3(0x126)]={'id':+new Date(),'tool':_0x3d3edf});let _0x3f8189=new q(_0x434156,_0x226963,_0x229fec,_0xf0d922,_0x1d9a2d);return _0x3f8189[_0x1e26b3(0x11b)][_0x1e26b3(0x125)](_0x3f8189);}catch(_0x182932){return console[_0x1e26b3(0x1d8)](_0x1e26b3(0x171),_0x182932&&_0x182932['message']),()=>{};}});return _0x4027ca=>_0x3b4857[_0x1d2b40(0x14f)](_0x45866d=>_0x45866d(_0x4027ca));}function W(_0x1a8aa1){var _0xf6a0cd=_0x43a543;let _0x5c576d=function(_0x1751bd,_0xcb62be){return _0xcb62be-_0x1751bd;},_0x559eb4;if(_0x1a8aa1['performance'])_0x559eb4=function(){var _0x15a1a5=_0x15e3;return _0x1a8aa1[_0x15a1a5(0x1fd)][_0x15a1a5(0x136)]();};else{if(_0x1a8aa1['process']&&_0x1a8aa1[_0xf6a0cd(0x1c2)][_0xf6a0cd(0x173)])_0x559eb4=function(){var _0x31a347=_0xf6a0cd;return _0x1a8aa1['process'][_0x31a347(0x173)]();},_0x5c576d=function(_0x3bff3d,_0xdadf55){return 0x3e8*(_0xdadf55[0x0]-_0x3bff3d[0x0])+(_0xdadf55[0x1]-_0x3bff3d[0x1])/0xf4240;};else try{let {performance:_0x417602}=require(_0xf6a0cd(0x195));_0x559eb4=function(){var _0x281dd2=_0xf6a0cd;return _0x417602[_0x281dd2(0x136)]();};}catch{_0x559eb4=function(){return+new Date();};}}return{'elapsed':_0x5c576d,'timeStamp':_0x559eb4,'now':()=>Date[_0xf6a0cd(0x136)]()};}function _0x87d0(){var _0x3111ab=['_allowedToConnectOnSend','match','autoExpandPropertyCount','_capIfString','127.0.0.1','toLowerCase','gateway.docker.internal','date','onerror',':logPointId:','log','_hasSymbolPropertyOnItsPath','POSITIVE_INFINITY','NEGATIVE_INFINITY','_propertyName','\\x20browser','push','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','global','hrtime','depth','[object\\x20Set]','_reconnectTimeout','message','_connectAttemptCount','_connecting','noFunctions','level','_hasMapOnItsPath','autoExpandPreviousObjects','replace','_processTreeNodeResult','_isSet','_isPrimitiveWrapperType','url','_socket','location','reload','_isNegativeZero','_addObjectProperty','dockerizedApp','readyState','port','data','versions','isExpressionToEvaluate','prototype','_treeNodePropertiesAfterFullValue','set','_p_name','ws://','_connected','negativeInfinity','perf_hooks','WebSocket','number','reduceLimits','hostname','isArray','10RcACza','_isPrimitiveType','_attemptToReconnectShortly','39048mcLhWw','_console_ninja','RegExp','substr','expressionsToEvaluate','140152CPbjuj','_setNodePermissions','Symbol','node','path','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_consoleNinjaAllowedToStart','_setNodeQueryPath','_numberRegExp','_allowedToSend','_getOwnPropertyNames','_getOwnPropertySymbols','11rIorlN','undefined','defineProperty','autoExpandMaxDepth','catch','split','value','pop','_addFunctionsNode','count','getOwnPropertySymbols','index','cappedProps','cappedElements','538528FhyPFw','elements','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','enumerable','_setNodeLabel','process','Number','rootExpression','function','parse','8277370ctUkPc','_p_length','pathToFileURL','resolveGetters','console','includes','object','_sortProps','_p_','boolean','_connectToHostNow','totalStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','map','785946tKReKN','_property','...','warn','symbol','onclose','_isArray','nodeModules','props','capped','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','63uGlcKA','valueOf','call','join','nan','stack','_disposeWebsocket','array','elapsed','length','timeStamp','unref','hasOwnProperty','serialize','_webSocketErrorDocsLink','[object\\x20Map]','root_exp_id','host','concat','HTMLAllCollection','Set','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Boolean','hits','trace','_inBrowser','224yVoYLn','timeEnd','getOwnPropertyNames','performance','nuxt','[object\\x20Array]','name','3267424EsDUvn','getWebSocketClass','_WebSocket','_dateToString','_sendErrorMessage','_WebSocketClass','time','_addProperty','parent','send','onopen','constructor','[object\\x20BigInt]','_additionalMetadata','stackTraceLimit','unknown','slice','default','_blacklistedProperty','bind','_console_ninja_session','remix','remix','_cleanNode','_ws','sort','unshift','root_exp','_hasSetOnItsPath','autoExpandLimit','\\x20server','error','26486520SacVXf','63933','_setNodeExpandableState','_type','now','string','getPrototypeOf','current','_Symbol',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.8","172.18.64.1"],'_isUndefined','_undefined','getOwnPropertyDescriptor','1.0.0','type','null','[object\\x20Date]','coverage','funcName','_isMap','close','logger\\x20websocket\\x20error','sortProps','toString','String','stringify','_objectToString','_maxConnectAttemptCount','allStrLength','forEach','5KadxxX','_keyStrRegExp','_regExpToString','_treeNodePropertiesBeforeFullValue','getter','create','then','disabledTrace','strLength','autoExpand','next.js','Map',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.225\\\\node_modules",'test','_setNodeExpressionPath'];_0x87d0=function(){return _0x3111ab;};return _0x87d0();}function Y(_0x1f675c,_0x277485,_0x133b71){var _0x45d4bb=_0x43a543;if(_0x1f675c[_0x45d4bb(0x1a9)]!==void 0x0)return _0x1f675c[_0x45d4bb(0x1a9)];let _0x53c150=_0x1f675c[_0x45d4bb(0x1c2)]?.[_0x45d4bb(0x18c)]?.[_0x45d4bb(0x1a6)];return _0x53c150&&_0x133b71===_0x45d4bb(0x1fe)?_0x1f675c[_0x45d4bb(0x1a9)]=!0x1:_0x1f675c[_0x45d4bb(0x1a9)]=_0x53c150||!_0x277485||_0x1f675c[_0x45d4bb(0x184)]?.[_0x45d4bb(0x199)]&&_0x277485[_0x45d4bb(0x1cc)](_0x1f675c['location'][_0x45d4bb(0x199)]),_0x1f675c[_0x45d4bb(0x1a9)];}function Q(_0xb6dc95,_0x4bcc89,_0x4862bf,_0x14a800){var _0x1d300d=_0x43a543;_0xb6dc95=_0xb6dc95,_0x4bcc89=_0x4bcc89,_0x4862bf=_0x4862bf,_0x14a800=_0x14a800;let _0x226747=W(_0xb6dc95),_0x834e9d=_0x226747['elapsed'],_0x7ab5fc=_0x226747[_0x1d300d(0x1ea)];class _0x5796fc{constructor(){var _0x5e3a77=_0x1d300d;this[_0x5e3a77(0x151)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5e3a77(0x1ab)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x5e3a77(0x13d)]=_0xb6dc95[_0x5e3a77(0x1b0)],this['_HTMLAllCollection']=_0xb6dc95['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x5e3a77(0x13e)],this['_getOwnPropertyNames']=Object[_0x5e3a77(0x1fc)],this[_0x5e3a77(0x13a)]=_0xb6dc95[_0x5e3a77(0x1a5)],this[_0x5e3a77(0x152)]=RegExp[_0x5e3a77(0x18e)][_0x5e3a77(0x149)],this['_dateToString']=Date[_0x5e3a77(0x18e)][_0x5e3a77(0x149)];}[_0x1d300d(0x1ed)](_0x10dbf0,_0x1ceb39,_0x586b8f,_0x238620){var _0x3edbdc=_0x1d300d,_0x42549e=this,_0x307332=_0x586b8f[_0x3edbdc(0x159)];function _0x9e5505(_0x12bb31,_0x2bd01a,_0x352f91){var _0x10f6e2=_0x3edbdc;_0x2bd01a[_0x10f6e2(0x140)]='unknown',_0x2bd01a['error']=_0x12bb31[_0x10f6e2(0x177)],_0x46264a=_0x352f91['node'][_0x10f6e2(0x139)],_0x352f91['node'][_0x10f6e2(0x139)]=_0x2bd01a,_0x42549e['_treeNodePropertiesBeforeFullValue'](_0x2bd01a,_0x352f91);}try{_0x586b8f[_0x3edbdc(0x17b)]++,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x16f)](_0x1ceb39);var _0x3f33fd,_0x544fda,_0x1503e9,_0xbcd6bf,_0x452b42=[],_0x438811=[],_0x50ddbd,_0x1d13ce=this['_type'](_0x1ceb39),_0xec5737=_0x1d13ce===_0x3edbdc(0x1e7),_0x3a59a7=!0x1,_0x12b1bb=_0x1d13ce===_0x3edbdc(0x1c5),_0x44ca6f=this['_isPrimitiveType'](_0x1d13ce),_0x81d63d=this[_0x3edbdc(0x181)](_0x1d13ce),_0x14b8d3=_0x44ca6f||_0x81d63d,_0x3d9fc2={},_0x501f8a=0x0,_0x3b765a=!0x1,_0x46264a,_0x5829fd=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x586b8f[_0x3edbdc(0x174)]){if(_0xec5737){if(_0x544fda=_0x1ceb39[_0x3edbdc(0x1e9)],_0x544fda>_0x586b8f[_0x3edbdc(0x1be)]){for(_0x1503e9=0x0,_0xbcd6bf=_0x586b8f[_0x3edbdc(0x1be)],_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811[_0x3edbdc(0x16f)](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));_0x10dbf0[_0x3edbdc(0x1bc)]=!0x0;}else{for(_0x1503e9=0x0,_0xbcd6bf=_0x544fda,_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811['push'](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));}_0x586b8f[_0x3edbdc(0x161)]+=_0x438811[_0x3edbdc(0x1e9)];}if(!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&!_0x44ca6f&&_0x1d13ce!=='String'&&_0x1d13ce!=='Buffer'&&_0x1d13ce!=='bigint'){var _0x270f7d=_0x238620['props']||_0x586b8f[_0x3edbdc(0x1dd)];if(this[_0x3edbdc(0x180)](_0x1ceb39)?(_0x3f33fd=0x0,_0x1ceb39['forEach'](function(_0x5089bb){var _0x427da8=_0x3edbdc;if(_0x501f8a++,_0x586b8f[_0x427da8(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x427da8(0x18d)]&&_0x586b8f[_0x427da8(0x159)]&&_0x586b8f[_0x427da8(0x161)]>_0x586b8f[_0x427da8(0x12f)]){_0x3b765a=!0x0;return;}_0x438811[_0x427da8(0x16f)](_0x42549e[_0x427da8(0x119)](_0x452b42,_0x1ceb39,'Set',_0x3f33fd++,_0x586b8f,function(_0x4fca16){return function(){return _0x4fca16;};}(_0x5089bb)));})):this[_0x3edbdc(0x145)](_0x1ceb39)&&_0x1ceb39[_0x3edbdc(0x14f)](function(_0x5b616a,_0x425d2e){var _0x434eab=_0x3edbdc;if(_0x501f8a++,_0x586b8f['autoExpandPropertyCount']++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x434eab(0x18d)]&&_0x586b8f[_0x434eab(0x159)]&&_0x586b8f[_0x434eab(0x161)]>_0x586b8f[_0x434eab(0x12f)]){_0x3b765a=!0x0;return;}var _0x29234f=_0x425d2e['toString']();_0x29234f[_0x434eab(0x1e9)]>0x64&&(_0x29234f=_0x29234f[_0x434eab(0x122)](0x0,0x64)+_0x434eab(0x1d7)),_0x438811[_0x434eab(0x16f)](_0x42549e[_0x434eab(0x119)](_0x452b42,_0x1ceb39,'Map',_0x29234f,_0x586b8f,function(_0x2a91df){return function(){return _0x2a91df;};}(_0x5b616a)));}),!_0x3a59a7){try{for(_0x50ddbd in _0x1ceb39)if(!(_0xec5737&&_0x5829fd['test'](_0x50ddbd))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f['autoExpand']&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f['autoExpandLimit']){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}catch{}if(_0x3d9fc2[_0x3edbdc(0x1c8)]=!0x0,_0x12b1bb&&(_0x3d9fc2[_0x3edbdc(0x191)]=!0x0),!_0x3b765a){var _0x597257=[][_0x3edbdc(0x1f2)](this[_0x3edbdc(0x1ad)](_0x1ceb39))['concat'](this[_0x3edbdc(0x1ae)](_0x1ceb39));for(_0x3f33fd=0x0,_0x544fda=_0x597257['length'];_0x3f33fd<_0x544fda;_0x3f33fd++)if(_0x50ddbd=_0x597257[_0x3f33fd],!(_0xec5737&&_0x5829fd[_0x3edbdc(0x15d)](_0x50ddbd[_0x3edbdc(0x149)]()))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)&&!_0x3d9fc2[_0x3edbdc(0x1cf)+_0x50ddbd['toString']()]){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f[_0x3edbdc(0x12f)]){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}}}}if(_0x10dbf0['type']=_0x1d13ce,_0x14b8d3?(_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x1e1)](),this[_0x3edbdc(0x162)](_0x1d13ce,_0x10dbf0,_0x586b8f,_0x238620)):_0x1d13ce===_0x3edbdc(0x166)?_0x10dbf0[_0x3edbdc(0x1b5)]=this[_0x3edbdc(0x115)]['call'](_0x1ceb39):_0x1d13ce==='bigint'?_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x149)]():_0x1d13ce===_0x3edbdc(0x1a0)?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_regExpToString'][_0x3edbdc(0x1e2)](_0x1ceb39):_0x1d13ce===_0x3edbdc(0x1d9)&&this[_0x3edbdc(0x13a)]?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_Symbol']['prototype'][_0x3edbdc(0x149)][_0x3edbdc(0x1e2)](_0x1ceb39):!_0x586b8f[_0x3edbdc(0x174)]&&!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&(delete _0x10dbf0[_0x3edbdc(0x1b5)],_0x10dbf0['capped']=!0x0),_0x3b765a&&(_0x10dbf0[_0x3edbdc(0x1bb)]=!0x0),_0x46264a=_0x586b8f[_0x3edbdc(0x1a6)]['current'],_0x586b8f['node'][_0x3edbdc(0x139)]=_0x10dbf0,this[_0x3edbdc(0x153)](_0x10dbf0,_0x586b8f),_0x438811['length']){for(_0x3f33fd=0x0,_0x544fda=_0x438811[_0x3edbdc(0x1e9)];_0x3f33fd<_0x544fda;_0x3f33fd++)_0x438811[_0x3f33fd](_0x3f33fd);}_0x452b42[_0x3edbdc(0x1e9)]&&(_0x10dbf0[_0x3edbdc(0x1dd)]=_0x452b42);}catch(_0x340cfb){_0x9e5505(_0x340cfb,_0x10dbf0,_0x586b8f);}return this['_additionalMetadata'](_0x1ceb39,_0x10dbf0),this['_treeNodePropertiesAfterFullValue'](_0x10dbf0,_0x586b8f),_0x586b8f[_0x3edbdc(0x1a6)][_0x3edbdc(0x139)]=_0x46264a,_0x586b8f['level']--,_0x586b8f['autoExpand']=_0x307332,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x1b6)](),_0x10dbf0;}[_0x1d300d(0x1ae)](_0x388498){var _0x4caf90=_0x1d300d;return Object[_0x4caf90(0x1b9)]?Object[_0x4caf90(0x1b9)](_0x388498):[];}[_0x1d300d(0x180)](_0x368417){var _0x1b6081=_0x1d300d;return!!(_0x368417&&_0xb6dc95[_0x1b6081(0x1f4)]&&this[_0x1b6081(0x14c)](_0x368417)===_0x1b6081(0x175)&&_0x368417[_0x1b6081(0x14f)]);}[_0x1d300d(0x124)](_0x45faf5,_0x42931b,_0x51f6ff){var _0x2bb08e=_0x1d300d;return _0x51f6ff[_0x2bb08e(0x17a)]?typeof _0x45faf5[_0x42931b]==_0x2bb08e(0x1c5):!0x1;}[_0x1d300d(0x135)](_0x12830d){var _0x24fe26=_0x1d300d,_0x3576cc='';return _0x3576cc=typeof _0x12830d,_0x3576cc===_0x24fe26(0x1cd)?this[_0x24fe26(0x14c)](_0x12830d)==='[object\\x20Array]'?_0x3576cc=_0x24fe26(0x1e7):this[_0x24fe26(0x14c)](_0x12830d)===_0x24fe26(0x142)?_0x3576cc=_0x24fe26(0x166):this['_objectToString'](_0x12830d)===_0x24fe26(0x11e)?_0x3576cc='bigint':_0x12830d===null?_0x3576cc=_0x24fe26(0x141):_0x12830d[_0x24fe26(0x11d)]&&(_0x3576cc=_0x12830d[_0x24fe26(0x11d)][_0x24fe26(0x111)]||_0x3576cc):_0x3576cc===_0x24fe26(0x1b0)&&this['_HTMLAllCollection']&&_0x12830d instanceof this['_HTMLAllCollection']&&(_0x3576cc=_0x24fe26(0x1f3)),_0x3576cc;}['_objectToString'](_0x50a89d){var _0x2b8162=_0x1d300d;return Object[_0x2b8162(0x18e)][_0x2b8162(0x149)][_0x2b8162(0x1e2)](_0x50a89d);}[_0x1d300d(0x19c)](_0x274bed){var _0x9c3df7=_0x1d300d;return _0x274bed===_0x9c3df7(0x1d0)||_0x274bed===_0x9c3df7(0x137)||_0x274bed===_0x9c3df7(0x197);}[_0x1d300d(0x181)](_0x407c03){var _0x45fa59=_0x1d300d;return _0x407c03===_0x45fa59(0x1f6)||_0x407c03===_0x45fa59(0x14a)||_0x407c03===_0x45fa59(0x1c3);}['_addProperty'](_0x1e1614,_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d){var _0x3cf7e2=this;return function(_0xbab26c){var _0x3d351a=_0x15e3,_0x58cb23=_0x200138['node'][_0x3d351a(0x139)],_0xf935a6=_0x200138['node'][_0x3d351a(0x1ba)],_0x37bf87=_0x200138['node']['parent'];_0x200138['node']['parent']=_0x58cb23,_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x1ba)]=typeof _0x51c304=='number'?_0x51c304:_0xbab26c,_0x1e1614['push'](_0x3cf7e2[_0x3d351a(0x1d6)](_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d)),_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x11a)]=_0x37bf87,_0x200138['node']['index']=_0xf935a6;};}[_0x1d300d(0x187)](_0x4b5dd7,_0x44c26e,_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32){var _0x5a4296=_0x1d300d,_0x54b7f9=this;return _0x44c26e[_0x5a4296(0x1cf)+_0x57b364[_0x5a4296(0x149)]()]=!0x0,function(_0x4abd60){var _0x4f7d33=_0x5a4296,_0x36cfb5=_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x139)],_0x2faa07=_0x39c28a['node'][_0x4f7d33(0x1ba)],_0x27bbd6=_0x39c28a['node'][_0x4f7d33(0x11a)];_0x39c28a['node']['parent']=_0x36cfb5,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x4abd60,_0x4b5dd7[_0x4f7d33(0x16f)](_0x54b7f9[_0x4f7d33(0x1d6)](_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32)),_0x39c28a['node']['parent']=_0x27bbd6,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x2faa07;};}[_0x1d300d(0x1d6)](_0x5d52ab,_0x5bff70,_0x3e3ee3,_0x1f2f32,_0x50e6a0){var _0x65fbab=_0x1d300d,_0x38249c=this;_0x50e6a0||(_0x50e6a0=function(_0x56426e,_0x1a78d8){return _0x56426e[_0x1a78d8];});var _0x4a1e4b=_0x3e3ee3['toString'](),_0x48428d=_0x1f2f32[_0x65fbab(0x1a2)]||{},_0x14631c=_0x1f2f32[_0x65fbab(0x174)],_0x29b921=_0x1f2f32[_0x65fbab(0x18d)];try{var _0x22c095=this['_isMap'](_0x5d52ab),_0x45899b=_0x4a1e4b;_0x22c095&&_0x45899b[0x0]==='\\x27'&&(_0x45899b=_0x45899b[_0x65fbab(0x1a1)](0x1,_0x45899b[_0x65fbab(0x1e9)]-0x2));var _0x40d94f=_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d[_0x65fbab(0x1cf)+_0x45899b];_0x40d94f&&(_0x1f2f32[_0x65fbab(0x174)]=_0x1f2f32[_0x65fbab(0x174)]+0x1),_0x1f2f32['isExpressionToEvaluate']=!!_0x40d94f;var _0x2f8a83=typeof _0x3e3ee3==_0x65fbab(0x1d9),_0x5a54d0={'name':_0x2f8a83||_0x22c095?_0x4a1e4b:this[_0x65fbab(0x16d)](_0x4a1e4b)};if(_0x2f8a83&&(_0x5a54d0[_0x65fbab(0x1d9)]=!0x0),!(_0x5bff70===_0x65fbab(0x1e7)||_0x5bff70==='Error')){var _0x436dad=this['_getOwnPropertyDescriptor'](_0x5d52ab,_0x3e3ee3);if(_0x436dad&&(_0x436dad[_0x65fbab(0x190)]&&(_0x5a54d0['setter']=!0x0),_0x436dad['get']&&!_0x40d94f&&!_0x1f2f32[_0x65fbab(0x1ca)]))return _0x5a54d0[_0x65fbab(0x154)]=!0x0,this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x198f90;try{_0x198f90=_0x50e6a0(_0x5d52ab,_0x3e3ee3);}catch(_0x303817){return _0x5a54d0={'name':_0x4a1e4b,'type':_0x65fbab(0x121),'error':_0x303817[_0x65fbab(0x177)]},this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x369814=this[_0x65fbab(0x135)](_0x198f90),_0x596959=this[_0x65fbab(0x19c)](_0x369814);if(_0x5a54d0[_0x65fbab(0x140)]=_0x369814,_0x596959)this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x1e4757=_0x65fbab;_0x5a54d0[_0x1e4757(0x1b5)]=_0x198f90[_0x1e4757(0x1e1)](),!_0x40d94f&&_0x38249c[_0x1e4757(0x162)](_0x369814,_0x5a54d0,_0x1f2f32,{});});else{var _0x194fd6=_0x1f2f32[_0x65fbab(0x159)]&&_0x1f2f32[_0x65fbab(0x17b)]<_0x1f2f32[_0x65fbab(0x1b2)]&&_0x1f2f32[_0x65fbab(0x17d)]['indexOf'](_0x198f90)<0x0&&_0x369814!==_0x65fbab(0x1c5)&&_0x1f2f32[_0x65fbab(0x161)]<_0x1f2f32[_0x65fbab(0x12f)];_0x194fd6||_0x1f2f32[_0x65fbab(0x17b)]<_0x14631c||_0x40d94f?(this[_0x65fbab(0x1ed)](_0x5a54d0,_0x198f90,_0x1f2f32,_0x40d94f||{}),this['_additionalMetadata'](_0x198f90,_0x5a54d0)):this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x5c46d0=_0x65fbab;_0x369814===_0x5c46d0(0x141)||_0x369814===_0x5c46d0(0x1b0)||(delete _0x5a54d0[_0x5c46d0(0x1b5)],_0x5a54d0[_0x5c46d0(0x1de)]=!0x0);});}return _0x5a54d0;}finally{_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d,_0x1f2f32['depth']=_0x14631c,_0x1f2f32['isExpressionToEvaluate']=_0x29b921;}}[_0x1d300d(0x162)](_0x62aaa4,_0x59e771,_0x37bb20,_0x6ec0e0){var _0x640cf1=_0x1d300d,_0x27aa85=_0x6ec0e0[_0x640cf1(0x158)]||_0x37bb20[_0x640cf1(0x158)];if((_0x62aaa4===_0x640cf1(0x137)||_0x62aaa4===_0x640cf1(0x14a))&&_0x59e771[_0x640cf1(0x1b5)]){let _0xa78f12=_0x59e771['value']['length'];_0x37bb20[_0x640cf1(0x14e)]+=_0xa78f12,_0x37bb20[_0x640cf1(0x14e)]>_0x37bb20[_0x640cf1(0x1d2)]?(_0x59e771[_0x640cf1(0x1de)]='',delete _0x59e771[_0x640cf1(0x1b5)]):_0xa78f12>_0x27aa85&&(_0x59e771[_0x640cf1(0x1de)]=_0x59e771[_0x640cf1(0x1b5)][_0x640cf1(0x1a1)](0x0,_0x27aa85),delete _0x59e771[_0x640cf1(0x1b5)]);}}[_0x1d300d(0x145)](_0x162847){var _0x5b1e94=_0x1d300d;return!!(_0x162847&&_0xb6dc95[_0x5b1e94(0x15b)]&&this['_objectToString'](_0x162847)===_0x5b1e94(0x1ef)&&_0x162847[_0x5b1e94(0x14f)]);}['_propertyName'](_0x272d62){var _0x1e5868=_0x1d300d;if(_0x272d62[_0x1e5868(0x160)](/^\\d+$/))return _0x272d62;var _0x149cad;try{_0x149cad=JSON['stringify'](''+_0x272d62);}catch{_0x149cad='\\x22'+this['_objectToString'](_0x272d62)+'\\x22';}return _0x149cad[_0x1e5868(0x160)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x149cad=_0x149cad[_0x1e5868(0x1a1)](0x1,_0x149cad[_0x1e5868(0x1e9)]-0x2):_0x149cad=_0x149cad[_0x1e5868(0x17e)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x149cad;}['_processTreeNodeResult'](_0x362ce5,_0x2a7264,_0x432370,_0x10f3b7){var _0x9583d4=_0x1d300d;this[_0x9583d4(0x153)](_0x362ce5,_0x2a7264),_0x10f3b7&&_0x10f3b7(),this[_0x9583d4(0x11f)](_0x432370,_0x362ce5),this[_0x9583d4(0x18f)](_0x362ce5,_0x2a7264);}[_0x1d300d(0x153)](_0x2b63e1,_0x5f4d68){var _0x51f5e1=_0x1d300d;this[_0x51f5e1(0x170)](_0x2b63e1,_0x5f4d68),this['_setNodeQueryPath'](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x15e)](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x1a4)](_0x2b63e1,_0x5f4d68);}[_0x1d300d(0x170)](_0x5c8499,_0x3e630d){}[_0x1d300d(0x1aa)](_0x1349e3,_0x3bb299){}[_0x1d300d(0x1c1)](_0x3d9350,_0x132c6b){}[_0x1d300d(0x13c)](_0x11fd87){return _0x11fd87===this['_undefined'];}[_0x1d300d(0x18f)](_0x1c9a53,_0x5d5a1a){var _0x5d7ed6=_0x1d300d;this['_setNodeLabel'](_0x1c9a53,_0x5d5a1a),this['_setNodeExpandableState'](_0x1c9a53),_0x5d5a1a[_0x5d7ed6(0x148)]&&this[_0x5d7ed6(0x1ce)](_0x1c9a53),this[_0x5d7ed6(0x1b7)](_0x1c9a53,_0x5d5a1a),this['_addLoadNode'](_0x1c9a53,_0x5d5a1a),this[_0x5d7ed6(0x129)](_0x1c9a53);}[_0x1d300d(0x11f)](_0x4efbd0,_0x10dd3d){var _0x5032e8=_0x1d300d;let _0x226eb6;try{_0xb6dc95[_0x5032e8(0x1cb)]&&(_0x226eb6=_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)],_0xb6dc95['console'][_0x5032e8(0x131)]=function(){}),_0x4efbd0&&typeof _0x4efbd0['length']==_0x5032e8(0x197)&&(_0x10dd3d[_0x5032e8(0x1e9)]=_0x4efbd0[_0x5032e8(0x1e9)]);}catch{}finally{_0x226eb6&&(_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)]=_0x226eb6);}if(_0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x197)||_0x10dd3d[_0x5032e8(0x140)]==='Number'){if(isNaN(_0x10dd3d[_0x5032e8(0x1b5)]))_0x10dd3d[_0x5032e8(0x1e4)]=!0x0,delete _0x10dd3d['value'];else switch(_0x10dd3d[_0x5032e8(0x1b5)]){case Number[_0x5032e8(0x16b)]:_0x10dd3d['positiveInfinity']=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case Number[_0x5032e8(0x16c)]:_0x10dd3d[_0x5032e8(0x194)]=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case 0x0:this[_0x5032e8(0x186)](_0x10dd3d[_0x5032e8(0x1b5)])&&(_0x10dd3d['negativeZero']=!0x0);break;}}else _0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x1c5)&&typeof _0x4efbd0[_0x5032e8(0x111)]=='string'&&_0x4efbd0[_0x5032e8(0x111)]&&_0x10dd3d[_0x5032e8(0x111)]&&_0x4efbd0['name']!==_0x10dd3d[_0x5032e8(0x111)]&&(_0x10dd3d[_0x5032e8(0x144)]=_0x4efbd0['name']);}['_isNegativeZero'](_0x130d3d){return 0x1/_0x130d3d===Number['NEGATIVE_INFINITY'];}[_0x1d300d(0x1ce)](_0x25b759){var _0x297173=_0x1d300d;!_0x25b759[_0x297173(0x1dd)]||!_0x25b759[_0x297173(0x1dd)]['length']||_0x25b759[_0x297173(0x140)]==='array'||_0x25b759[_0x297173(0x140)]===_0x297173(0x15b)||_0x25b759['type']==='Set'||_0x25b759[_0x297173(0x1dd)][_0x297173(0x12b)](function(_0x4a6eb5,_0x121f30){var _0x1a487c=_0x297173,_0x2a3c33=_0x4a6eb5[_0x1a487c(0x111)][_0x1a487c(0x164)](),_0x35982d=_0x121f30[_0x1a487c(0x111)][_0x1a487c(0x164)]();return _0x2a3c33<_0x35982d?-0x1:_0x2a3c33>_0x35982d?0x1:0x0;});}[_0x1d300d(0x1b7)](_0x3e076c,_0x4d7ea0){var _0xc9306f=_0x1d300d;if(!(_0x4d7ea0[_0xc9306f(0x17a)]||!_0x3e076c['props']||!_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)])){for(var _0xc31ac5=[],_0x205545=[],_0x404587=0x0,_0x4d96f4=_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)];_0x404587<_0x4d96f4;_0x404587++){var _0x405dd4=_0x3e076c['props'][_0x404587];_0x405dd4[_0xc9306f(0x140)]===_0xc9306f(0x1c5)?_0xc31ac5[_0xc9306f(0x16f)](_0x405dd4):_0x205545[_0xc9306f(0x16f)](_0x405dd4);}if(!(!_0x205545[_0xc9306f(0x1e9)]||_0xc31ac5[_0xc9306f(0x1e9)]<=0x1)){_0x3e076c[_0xc9306f(0x1dd)]=_0x205545;var _0x18f973={'functionsNode':!0x0,'props':_0xc31ac5};this[_0xc9306f(0x170)](_0x18f973,_0x4d7ea0),this['_setNodeLabel'](_0x18f973,_0x4d7ea0),this[_0xc9306f(0x134)](_0x18f973),this['_setNodePermissions'](_0x18f973,_0x4d7ea0),_0x18f973['id']+='\\x20f',_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x12c)](_0x18f973);}}}['_addLoadNode'](_0x48adba,_0x354896){}[_0x1d300d(0x134)](_0x8800fa){}[_0x1d300d(0x1db)](_0x27fdad){var _0x1ff63b=_0x1d300d;return Array[_0x1ff63b(0x19a)](_0x27fdad)||typeof _0x27fdad==_0x1ff63b(0x1cd)&&this['_objectToString'](_0x27fdad)===_0x1ff63b(0x110);}[_0x1d300d(0x1a4)](_0xedb925,_0x275e19){}[_0x1d300d(0x129)](_0x2f7d57){var _0x5c51c7=_0x1d300d;delete _0x2f7d57[_0x5c51c7(0x16a)],delete _0x2f7d57[_0x5c51c7(0x12e)],delete _0x2f7d57[_0x5c51c7(0x17c)];}['_setNodeExpressionPath'](_0x400985,_0x4ed591){}}let _0x575101=new _0x5796fc(),_0x317e62={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4a2414={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23706c(_0x3c0535,_0x16b8dc,_0x44036e,_0x3893af,_0x5f2ce1,_0x18eeb6){var _0x1d80f5=_0x1d300d;let _0x17ccf2,_0x578c02;try{_0x578c02=_0x7ab5fc(),_0x17ccf2=_0x4862bf[_0x16b8dc],!_0x17ccf2||_0x578c02-_0x17ccf2['ts']>0x1f4&&_0x17ccf2[_0x1d80f5(0x1b8)]&&_0x17ccf2[_0x1d80f5(0x118)]/_0x17ccf2['count']<0x64?(_0x4862bf[_0x16b8dc]=_0x17ccf2={'count':0x0,'time':0x0,'ts':_0x578c02},_0x4862bf[_0x1d80f5(0x1f7)]={}):_0x578c02-_0x4862bf[_0x1d80f5(0x1f7)]['ts']>0x32&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]/_0x4862bf['hits']['count']<0x64&&(_0x4862bf[_0x1d80f5(0x1f7)]={});let _0x2ecb7d=[],_0x3ecc3c=_0x17ccf2['reduceLimits']||_0x4862bf['hits'][_0x1d80f5(0x198)]?_0x4a2414:_0x317e62,_0x49ddd6=_0x37b5c9=>{var _0x167b05=_0x1d80f5;let _0x45f67f={};return _0x45f67f[_0x167b05(0x1dd)]=_0x37b5c9[_0x167b05(0x1dd)],_0x45f67f[_0x167b05(0x1be)]=_0x37b5c9[_0x167b05(0x1be)],_0x45f67f[_0x167b05(0x158)]=_0x37b5c9[_0x167b05(0x158)],_0x45f67f[_0x167b05(0x1d2)]=_0x37b5c9['totalStrLength'],_0x45f67f[_0x167b05(0x12f)]=_0x37b5c9[_0x167b05(0x12f)],_0x45f67f[_0x167b05(0x1b2)]=_0x37b5c9[_0x167b05(0x1b2)],_0x45f67f[_0x167b05(0x148)]=!0x1,_0x45f67f['noFunctions']=!_0x4bcc89,_0x45f67f['depth']=0x1,_0x45f67f[_0x167b05(0x17b)]=0x0,_0x45f67f['expId']=_0x167b05(0x1f0),_0x45f67f[_0x167b05(0x1c4)]=_0x167b05(0x12d),_0x45f67f[_0x167b05(0x159)]=!0x0,_0x45f67f[_0x167b05(0x17d)]=[],_0x45f67f[_0x167b05(0x161)]=0x0,_0x45f67f[_0x167b05(0x1ca)]=!0x0,_0x45f67f['allStrLength']=0x0,_0x45f67f['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45f67f;};for(var _0x3e5ecd=0x0;_0x3e5ecd<_0x5f2ce1[_0x1d80f5(0x1e9)];_0x3e5ecd++)_0x2ecb7d[_0x1d80f5(0x16f)](_0x575101['serialize']({'timeNode':_0x3c0535===_0x1d80f5(0x118)||void 0x0},_0x5f2ce1[_0x3e5ecd],_0x49ddd6(_0x3ecc3c),{}));if(_0x3c0535==='trace'){let _0x2b2098=Error[_0x1d80f5(0x120)];try{Error[_0x1d80f5(0x120)]=0x1/0x0,_0x2ecb7d['push'](_0x575101[_0x1d80f5(0x1ed)]({'stackNode':!0x0},new Error()[_0x1d80f5(0x1e5)],_0x49ddd6(_0x3ecc3c),{'strLength':0x1/0x0}));}finally{Error[_0x1d80f5(0x120)]=_0x2b2098;}}return{'method':'log','version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':_0x2ecb7d,'id':_0x16b8dc,'context':_0x18eeb6}]};}catch(_0x4e99d0){return{'method':_0x1d80f5(0x169),'version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':[{'type':_0x1d80f5(0x121),'error':_0x4e99d0&&_0x4e99d0[_0x1d80f5(0x177)]}],'id':_0x16b8dc,'context':_0x18eeb6}]};}finally{try{if(_0x17ccf2&&_0x578c02){let _0x10b2cd=_0x7ab5fc();_0x17ccf2['count']++,_0x17ccf2[_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x17ccf2['ts']=_0x10b2cd,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]++,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x4862bf[_0x1d80f5(0x1f7)]['ts']=_0x10b2cd,(_0x17ccf2['count']>0x32||_0x17ccf2[_0x1d80f5(0x118)]>0x64)&&(_0x17ccf2[_0x1d80f5(0x198)]=!0x0),(_0x4862bf['hits'][_0x1d80f5(0x1b8)]>0x3e8||_0x4862bf['hits'][_0x1d80f5(0x118)]>0x12c)&&(_0x4862bf[_0x1d80f5(0x1f7)]['reduceLimits']=!0x0);}}catch{}}}return _0x23706c;}((_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x2d7518,_0x477f3f,_0x49f77c,_0x67f0fb,_0x51ce8f)=>{var _0x17b4c9=_0x43a543;if(_0x1806cc[_0x17b4c9(0x19f)])return _0x1806cc[_0x17b4c9(0x19f)];if(!Y(_0x1806cc,_0x49f77c,_0x439a11))return _0x1806cc['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1806cc[_0x17b4c9(0x19f)];let _0x4540ce=W(_0x1806cc),_0x44e230=_0x4540ce[_0x17b4c9(0x1e8)],_0x130677=_0x4540ce[_0x17b4c9(0x1ea)],_0x1444c2=_0x4540ce[_0x17b4c9(0x136)],_0x2ca3fb={'hits':{},'ts':{}},_0x5e109e=Q(_0x1806cc,_0x67f0fb,_0x2ca3fb,_0x2d7518),_0x3e58ab=_0x1de792=>{_0x2ca3fb['ts'][_0x1de792]=_0x130677();},_0x1678a8=(_0xa3635f,_0x13a102)=>{var _0x1a4b22=_0x17b4c9;let _0x3eb140=_0x2ca3fb['ts'][_0x13a102];if(delete _0x2ca3fb['ts'][_0x13a102],_0x3eb140){let _0x484d76=_0x44e230(_0x3eb140,_0x130677());_0x37c63d(_0x5e109e(_0x1a4b22(0x118),_0xa3635f,_0x1444c2(),_0x21fc4a,[_0x484d76],_0x13a102));}},_0x1940b0=_0x183f01=>_0x127212=>{var _0x466f11=_0x17b4c9;try{_0x3e58ab(_0x127212),_0x183f01(_0x127212);}finally{_0x1806cc['console'][_0x466f11(0x118)]=_0x183f01;}},_0x1b4025=_0x302b67=>_0x593b14=>{var _0x3f7217=_0x17b4c9;try{let [_0x2ce050,_0x439151]=_0x593b14[_0x3f7217(0x1b4)](_0x3f7217(0x168));_0x1678a8(_0x439151,_0x2ce050),_0x302b67(_0x2ce050);}finally{_0x1806cc[_0x3f7217(0x1cb)][_0x3f7217(0x1fb)]=_0x302b67;}};_0x1806cc[_0x17b4c9(0x19f)]={'consoleLog':(_0x363879,_0x5c8485)=>{var _0xd8d52e=_0x17b4c9;_0x1806cc['console']['log'][_0xd8d52e(0x111)]!=='disabledLog'&&_0x37c63d(_0x5e109e(_0xd8d52e(0x169),_0x363879,_0x1444c2(),_0x21fc4a,_0x5c8485));},'consoleTrace':(_0x496aa9,_0x3345e4)=>{var _0x2f53c6=_0x17b4c9;_0x1806cc[_0x2f53c6(0x1cb)][_0x2f53c6(0x169)][_0x2f53c6(0x111)]!==_0x2f53c6(0x157)&&_0x37c63d(_0x5e109e(_0x2f53c6(0x1f8),_0x496aa9,_0x1444c2(),_0x21fc4a,_0x3345e4));},'consoleTime':()=>{var _0x1aa7b3=_0x17b4c9;_0x1806cc[_0x1aa7b3(0x1cb)]['time']=_0x1940b0(_0x1806cc[_0x1aa7b3(0x1cb)][_0x1aa7b3(0x118)]);},'consoleTimeEnd':()=>{var _0x51a24e=_0x17b4c9;_0x1806cc['console'][_0x51a24e(0x1fb)]=_0x1b4025(_0x1806cc['console']['timeEnd']);},'autoLog':(_0x2f565b,_0x537581)=>{var _0x2960a1=_0x17b4c9;_0x37c63d(_0x5e109e(_0x2960a1(0x169),_0x537581,_0x1444c2(),_0x21fc4a,[_0x2f565b]));},'autoLogMany':(_0x40b240,_0x2f2e6d)=>{var _0x44228c=_0x17b4c9;_0x37c63d(_0x5e109e(_0x44228c(0x169),_0x40b240,_0x1444c2(),_0x21fc4a,_0x2f2e6d));},'autoTrace':(_0x22c659,_0x27110d)=>{var _0x4d8684=_0x17b4c9;_0x37c63d(_0x5e109e(_0x4d8684(0x1f8),_0x27110d,_0x1444c2(),_0x21fc4a,[_0x22c659]));},'autoTraceMany':(_0x123518,_0x2e4878)=>{_0x37c63d(_0x5e109e('trace',_0x123518,_0x1444c2(),_0x21fc4a,_0x2e4878));},'autoTime':(_0x927205,_0x43e547,_0xdea416)=>{_0x3e58ab(_0xdea416);},'autoTimeEnd':(_0x3f3ce8,_0x3442bd,_0x2df5cc)=>{_0x1678a8(_0x3442bd,_0x2df5cc);},'coverage':_0x507b40=>{var _0x30461e=_0x17b4c9;_0x37c63d({'method':_0x30461e(0x143),'version':_0x2d7518,'args':[{'id':_0x507b40}]});}};let _0x37c63d=J(_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x51ce8f),_0x21fc4a=_0x1806cc[_0x17b4c9(0x126)];return _0x1806cc['_console_ninja'];})(globalThis,_0x43a543(0x163),_0x43a543(0x133),_0x43a543(0x15c),_0x43a543(0x128),_0x43a543(0x13f),'1695018583800',_0x43a543(0x13b),'','');`);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Disclosure, { as: "nav", className: "bg-gray-800 header", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto  px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center  sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Link, { to: "/", className: "h-8 w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight", children: "Pecha Tools" }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 26,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 25,
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
            lineNumber: 35,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 33,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Header.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu, { as: "div", className: "relative ml-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Menu.Button, { className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 57,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 58,
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
              lineNumber: 59,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/component/Header.tsx",
          lineNumber: 56,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 55,
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
                  lineNumber: 79,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 77,
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
                  lineNumber: 90,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 88,
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
                  lineNumber: 104,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 102,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/component/Header.tsx",
              lineNumber: 76,
              columnNumber: 23
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/component/Header.tsx",
            lineNumber: 67,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/component/Header.tsx",
        lineNumber: 54,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Login, {}, void 0, !1, {
        fileName: "app/component/Header.tsx",
        lineNumber: 119,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/component/Header.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Header.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/component/Header.tsx",
      lineNumber: 22,
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
        lineNumber: 128,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/component/Header.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/component/Header.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Header.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/component/Header.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
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
    url: "https://post-editor.pecha.tools/bo2en",
    needUser: !1,
    ICON: "/svg/bo-en-translate.png"
  },
  {
    name: "EN-BO_post_editor",
    url: "https://post-editor.pecha.tools/en2bo",
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
  let toolname = params.tool, toolList2 = await getCombineTools("spsither@gmail.com");
  if (toolList2.find((d) => d.name === toolname)) {
    let filtered = toolList2.filter((tool) => tool.name === toolname), url = filtered[0].url;
    return filtered[0].url.includes("session") || (url = filtered[0].url + "?session=" + user.email), {
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
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "iframe-container", children: [
      !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Loading2, {}, void 0, !1, {
        fileName: "app/routes/tool.$tool.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("iframe", { src: url, onLoad: onLoadFunction, ref: iframeRef }, void 0, !1, {
        fileName: "app/routes/tool.$tool.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tool.$tool.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tool.$tool.tsx",
    lineNumber: 52,
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
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
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
  let iframeRef = import_react16.default.useRef(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-[calc(100dvh-90px)] w-screen overflow-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "iframe",
    {
      src: "https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10",
      style: { border: "0" },
      width: "800",
      height: "600",
      allowTransparency: !0,
      ref: iframeRef
    },
    void 0,
    !1,
    {
      fileName: "app/component/Dashboard.tsx",
      lineNumber: 7,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/component/Dashboard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Dashboard_default = Dashboard;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => ({
  user: await getUserSession(request)
});
function dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Dashboard_default, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 18,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-xl font-bold", children: "Annotation Tools " }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
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
          lineNumber: 33,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/component/Main.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px]", children: tools.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { onClick: checkAuth, className: " rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tool3, { list }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 36,
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
              lineNumber: 70,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/component/Main.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-[2vw] py-4 uppercase text-center", children: list.name.replaceAll("_", " ") }, void 0, !1, {
            fileName: "app/component/Main.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Main.tsx",
          lineNumber: 68,
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
            lineNumber: 80,
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
      lineNumber: 64,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 63,
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
    socket && (user && (socket == null || socket.emit("user_login", user.email)), !user && socket.id && (socket == null || socket.emit("user_logout", socket.id)));
  }, [user, socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Loading package location..." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react22.Await,
        {
          resolve: data.tools,
          errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 58,
            columnNumber: 27
          }, this),
          children: (tools) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Main_default, { tools }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 60,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-4", children: [
        "Active User : ",
        onlineUsers.length
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4YUXGF5F.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SYSHMECJ.js", "/build/_shared/chunk-7BQCVHR7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3M4ACC7Y.js", imports: ["/build/_shared/chunk-QYFAPC3G.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PWE52UCH.js", imports: ["/build/_shared/chunk-6JYTMWDU.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-66RGZ5XA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/callback": { id: "routes/callback", parentId: "root", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/callback-H7X24ZYG.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-66RGZ5XA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-4ANI3ZZC.js", imports: ["/build/_shared/chunk-6JYTMWDU.js", "/build/_shared/chunk-66RGZ5XA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo.$tool": { id: "routes/demo.$tool", parentId: "root", path: "demo/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.$tool-SSZIYYNA.js", imports: ["/build/_shared/chunk-6JYTMWDU.js", "/build/_shared/chunk-66RGZ5XA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tool.$tool": { id: "routes/tool.$tool", parentId: "root", path: "tool/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$tool-7MJYC6BA.js", imports: ["/build/_shared/chunk-6JYTMWDU.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-66RGZ5XA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "6f16f854", hmr: { runtime: "/build/_shared\\chunk-7BQCVHR7.js", timestamp: 1695023182003 }, url: "/build/manifest-6F16F854.js" };

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
