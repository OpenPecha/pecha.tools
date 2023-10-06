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
var tailwind_default = "/build/_assets/tailwind-JX25XTGN.css";

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
var import_react4 = require("react"), import_nprogress = __toESM(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-A223XL3B.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: nprogress_default }
];
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      "visit work.pecha.tools for old version,if error persist please contact",
      error,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function App() {
  let transition = (0, import_react3.useNavigation)(), fetchers = (0, import_react3.useFetchers)(), [socket, setSocket] = (0, import_react4.useState)();
  (0, import_react4.useEffect)(() => {
    let socket2 = connect();
    return setSocket(socket2), () => {
      socket2.close();
    };
  }, []);
  let state = (0, import_react4.useMemo)(
    function() {
      return [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state)
      ].every((state2) => state2 === "idle") ? "idle" : "loading";
    },
    [transition.state, fetchers]
  );
  return (0, import_react4.useEffect)(() => {
    state === "loading" && import_nprogress.default.start(), state === "idle" && import_nprogress.default.done();
  }, [transition.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_recoil.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 78,
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
          err ? reject(err) : (console.log(res), resolve(res));
        }
      );
    })
  };
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
      console.log("err: ", err);
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
      console.log(res);
    } catch (err) {
      console.log("code verification error : ", err);
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
    name: "word_segmenter",
    url: "https://word.pecha.tools",
    demo: "https://word.pecha.tools/demo",
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.d{fill:none}.a,.c,.d{stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.c,.d{stroke-width:.75px}.c{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ccircle cx='73.734' cy='34.889' r='3'/%3E%3Cpath class='a' d='M74.234 43.389v-6'/%3E%3Ccircle cx='85.562' cy='55.081' r='2.928'/%3E%3Cpath d='M63.398 55.08s-7.361 7.956-16.442 7.956-16.441-7.955-16.441-7.955 7.361-7.956 16.441-7.956 16.442 7.956 16.442 7.956Z' style='stroke-width:.75px;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Ccircle class='c' cx='73.883' cy='55.081' r='11.874'/%3E%3Cpath class='c' d='m42.488 21.288 5.366 30.873c-3.8 1.006-9.534-4.706-11.016-13.232s1.85-16.635 5.65-17.64Z'/%3E%3Cpath class='c' d='m51.34 21.288-5.365 30.873c3.8 1.006 9.534-4.706 11.015-13.232s-1.848-16.635-5.65-17.64Z'/%3E%3Ccircle cx='43.734' cy='47.889' r='1'/%3E%3Cpath class='c' d='m51.425 88.712-5.366-30.873c3.8-1.006 9.534 4.706 11.015 13.232s-1.848 16.635-5.65 17.64Z'/%3E%3Cpath class='c' d='m42.572 88.712 5.366-30.873c-3.8-1.006-9.534 4.706-11.016 13.232s1.85 16.635 5.65 17.64Z'/%3E%3Ccircle cx='49.734' cy='61.889' r='1'/%3E%3Ccircle cx='73.734' cy='54.889' r='2'/%3E%3Cpath class='d' d='M81.765 55.08s-3.529 3.814-7.882 3.814-7.881-3.813-7.881-3.813 3.528-3.814 7.881-3.814 7.882 3.814 7.882 3.814Z'/%3E%3Cpath class='a' d='M88.234 55.389h10'/%3E%3Cpath class='d' d='m23.425 47.776 4.799-4.798 9.078 9.078M23.425 62.385l4.799 4.799 9.078-9.079M79.706 34.545l3.161-3.741 3.336 8.784 5.794-12.525 3.863 8.946 2.634-4.392'/%3E%3C/svg%3E"
  },
  {
    name: "sentence_segmenter",
    url: "https://sentence.pecha.tools",
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.b{fill:%23fff;stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.b{fill:none}%3C/style%3E%3C/defs%3E%3Ccircle class='a' cx='55.234' cy='55.389' r='3'/%3E%3Cpath class='b' d='m64.466 79.791 7.091 9.409 2.872-2.471M41.767 89.2l-2.51-2.838 8.304-8.358M55.234 62.389v-4'/%3E%3Cpath d='M82.234 49.389v13.88a10.12 10.12 0 0 1-10.12 10.12h-33.76a10.12 10.12 0 0 1-10.12-10.12v-13.88' style='stroke-width:.75px;fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Cpath class='a' d='M21.544 46.106A15.141 15.141 0 0 0 44.03 25.824Z'/%3E%3Cpath class='a' d='M32.234 51.081a15.09 15.09 0 0 1-15.272-15.01c.01-9.682 7.01-15.682 15.272-15.271Z'/%3E%3Ccircle cx='27.734' cy='46.889' r='1'/%3E%3Cpath class='a' d='M88.456 46.106A15.141 15.141 0 0 1 65.97 25.824Z'/%3E%3Cpath class='a' d='M77.234 51.081a15.141 15.141 0 0 0 15.272-15.01c.072-8.361-6.01-15.682-15.272-15.271Z'/%3E%3Ccircle cx='81.734' cy='46.889' r='1'/%3E%3Cpath d='M72.373 79.889a17.416 17.416 0 0 0-34.832 0Z'/%3E%3Cpath d='M65.656 72.178s-4.756 5.14-10.624 5.14-10.624-5.14-10.624-5.14 4.757-5.141 10.624-5.141 10.624 5.14 10.624 5.14Z' style='fill:%23fff'/%3E%3Ccircle cx='58.734' cy='70.889' r='3'/%3E%3C/svg%3E"
  },
  {
    name: "BO-EN_post_editor",
    url: "https://post-editor.pecha.tools/bo_en",
    ICON: "/svg/bo-en-translate.png"
  },
  {
    name: "EN-BO_post_editor",
    url: "https://post-editor.pecha.tools/en_bo",
    ICON: "/svg/en-bo-translate.png"
  },
  {
    name: "Speech_To_Text",
    url: null,
    department: ["stt"],
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.c{fill:%23fff}.a,.b,.c,.d,.e{stroke:%23000}.a,.b,.c,.e{stroke-linecap:round;stroke-linejoin:round}.b,.e{fill:none}.b,.c{stroke-width:.75px}.d{stroke-miterlimit:10}%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M19.234 81.766V60.853a7.465 7.465 0 0 1 7.465-7.464h8.535v7h-3.729a3.271 3.271 0 0 0-3.271 3.27v9.107a9 9 0 0 1-9 9Z'/%3E%3Cpath class='a' d='M19.234 29.011v20.913a7.465 7.465 0 0 0 7.465 7.465h8.535v-7h-3.729a3.271 3.271 0 0 1-3.271-3.272v-9.106a9 9 0 0 0-9-9Z'/%3E%3Ccircle class='b' cx='24.818' cy='51.209' r='2.357'/%3E%3Cpath class='b' d='m23.151 52.876 3.333-3.333'/%3E%3Cpath class='c' d='M55.92 25.3a7.828 7.828 0 0 1 7.829 7.828v15.425h-5.065V33.128a7.828 7.828 0 0 0-7.828-7.828h5.065Z'/%3E%3Cpath class='a' d='M79.781 52.389h-.588A23.557 23.557 0 0 0 48.99 32.867a22.863 22.863 0 0 0-15.73 16.072 23.508 23.508 0 1 0 45.928 9.45h.593a6.453 6.453 0 0 1 6.453 6.452V45.936a6.453 6.453 0 0 1-6.453 6.453Z'/%3E%3Crect class='d' x='85.234' y='44.389' width='4' height='21' rx='1.88' transform='rotate(180 87.234 54.889)'/%3E%3Cpath class='e' d='M87.234 74.389v3.827a6.173 6.173 0 0 1-6.173 6.173H52.406a6.173 6.173 0 0 1-6.172-6.173V63.389'/%3E%3Crect class='d' x='84.234' y='68.389' width='6' height='6' rx='2.235'/%3E%3Cpath class='c' d='M76.316 55.324s-4.176 4.424-9.272 4.373-9.183-4.558-9.183-4.558 4.176-4.423 9.272-4.372 9.183 4.557 9.183 4.557Z'/%3E%3Ccircle cx='69.234' cy='56.388' r='2.5'/%3E%3Cpath class='e' d='M53.234 67.389v6M56.234 67.389v6M59.234 67.389v6'/%3E%3Cpath class='a' d='M44.234 33.116v15.273h5V33.13a7.735 7.735 0 0 1 7.727-7.742h-5a7.727 7.727 0 0 0-7.727 7.727Z'/%3E%3Ccircle cx='46.734' cy='54.889' r='9' style='stroke-miterlimit:10;stroke-width:.75px;stroke:%23000'/%3E%3Ccircle cx='46.136' cy='55.115' r='4.95' style='stroke:%23fff;stroke-width:.5px;fill:none;stroke-linecap:round;stroke-linejoin:round'/%3E%3C/svg%3E",
    demo: "https://work.pecha.tools/stt_cs_gb_review/?session=spsither@gmail.com"
  },
  {
    name: "OCR",
    url: null,
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
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/api/getUserToolInfo.ts
var import_node3 = require("@remix-run/node");
async function fetchToolInfo(email) {
  try {
    let data = await (await fetch(`https://stt.pecha.tools/api/mapping/${email}`)).json();
    return data.error && (0, import_node3.redirect)("/"), data;
  } catch (err) {
    return err;
  }
}

// app/utils/combineTools.ts
async function getCombineTools(email) {
  if (!email)
    return toolList;
  try {
    let updatedTool = await fetchToolInfo(email);
    return toolList.forEach((tool) => {
      var _a;
      (_a = tool.department) != null && _a.includes(updatedTool.department) && (tool.url = updatedTool.url);
    }), toolList;
  } catch (error) {
    throw error;
  }
}

// app/routes/tool.$tool.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let user = await getUserSession(request);
  user || (0, import_node4.redirect)("/");
  let toolname = params.tool, toolList2 = await getCombineTools(user == null ? void 0 : user.email);
  if (toolList2.find((d) => d.name === toolname)) {
    let filtered = toolList2.filter((tool) => tool.name === toolname), url = filtered[0].url;
    return filtered[0].url.includes("session") || (console.log(url), url = filtered[0].url + "?session=" + (user == null ? void 0 : user.email)), {
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

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader3
});

// app/component/Dashboard.tsx
var import_react16 = __toESM(require("react"));

// app/component/Loader.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Loader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      role: "status",
      className: "w-full flex justify-center items-center mt-28",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "svg",
          {
            "aria-hidden": "true",
            className: "w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "path",
                {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor"
                },
                void 0,
                !1,
                {
                  fileName: "app/component/Loader.tsx",
                  lineNumber: 16,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "path",
                {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill"
                },
                void 0,
                !1,
                {
                  fileName: "app/component/Loader.tsx",
                  lineNumber: 20,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/Loader.tsx",
            lineNumber: 9,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
          fileName: "app/component/Loader.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/component/Loader.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}
var Loader_default = Loader;

// app/component/Dashboard.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Dashboard() {
  let iframeRef = import_react16.default.useRef(null), [loading, setLoading] = import_react16.default.useState(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Loader_default, {}, void 0, !1, {
      fileName: "app/component/Dashboard.tsx",
      lineNumber: 10,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "iframe",
      {
        src: "https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10",
        className: "w-full h-[150vh]",
        allowTransparency: !0,
        ref: iframeRef,
        onLoad: () => setLoading(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/component/Dashboard.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/component/Dashboard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var Dashboard_default = Dashboard;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let user = await getUserSession(request), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return {
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
    user
  };
};
function dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Dashboard_default, {}, void 0, !1, {
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
var import_node5 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_react18 = require("react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
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
    return session.set("user", user), (0, import_node5.redirect)("/", {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "redirecting ..." }, void 0, !1, {
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
var import_node6 = require("@remix-run/node");
var loader6 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node6.redirect)("/", {
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
var import_node7 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_react23 = require("react");

// app/component/Main.tsx
var import_react19 = require("@remix-run/react"), import_react20 = require("react");

// app/utils/getRandomColor.ts
function getRandomLightColor(index) {
  return [
    "bg-yellow-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-pink-300",
    "bg-purple-300",
    "bg-indigo-300",
    "bg-red-300",
    "bg-amber-300",
    "bg-lime-300",
    "bg-cyan-300",
    "bg-sky-300",
    "bg-violet-300"
  ][index];
}

// app/component/Main.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), timer;
function Main({ tools }) {
  let { user } = (0, import_react19.useLoaderData)(), [showMessage, setShowMessage] = (0, import_react20.useState)(!1);
  function checkAuth() {
    timer && clearTimeout(timer), user || (setShowMessage(!0), timer = setTimeout(() => {
      setShowMessage(!1);
    }, 3e3));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "alert alert-info", children: "Login to access the tools" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px]", children: tools.map((list, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { onClick: checkAuth, className: " rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Tool3, { list, index }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) }, list.name, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 38,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Main.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Main.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function Tool3({ list, index }) {
  let { user } = (0, import_react19.useLoaderData)(), navigate = (0, import_react19.useNavigate)(), getColor = getRandomLightColor(index);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      onClick: () => {
        list.url && user && navigate("/tool/" + list.name.replace(" ", "_")), list.url || alert("you are not assigned to this tool");
      },
      className: "tool cursor-pointer text-center w-full relative overflow-hidden ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "div",
          {
            className: `${getColor}  w-full  border-2 border-gray-300  dark:bg-slate-500 dark:text-white rounded  hover:shadow-sm hover:scale-95 hover:text-xl transition-all duration-300 ease-in-out`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "div",
                {
                  className: "p-2 rounded bg-transparent bg-no-repeat bg-center bg-contain mb-2 mx-auto grid place-items-center h-[110px] w-[110px]",
                  style: { backgroundImage: `url("${list == null ? void 0 : list.ICON}")` }
                },
                void 0,
                !1,
                {
                  fileName: "app/component/Main.tsx",
                  lineNumber: 71,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/component/Main.tsx",
                lineNumber: 70,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "px-[2vw] py-4 uppercase text-center", children: list.name.replaceAll("_", " ") }, void 0, !1, {
                fileName: "app/component/Main.tsx",
                lineNumber: 76,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/Main.tsx",
            lineNumber: 67,
            columnNumber: 9
          },
          this
        ),
        list.demo && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
            lineNumber: 81,
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
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  let user = await getUserSession(request), toolList2 = await getCombineTools(user == null ? void 0 : user.email), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return (0, import_node7.defer)({
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
  }, [user, socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-xl font-bold ", children: "Tools " }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Link, { to: "/dashboard", className: "btn btn-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "sm:truncate   sm:tracking-tight", children: "Dashboard" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Loading package location..." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react22.Await,
        {
          resolve: data.tools,
          errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 27
          }, this),
          children: (tools) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Main_default, { tools }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-4YUXGF5F.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SYSHMECJ.js", "/build/_shared/chunk-7BQCVHR7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DBXQ466Q.js", imports: ["/build/_shared/chunk-QYFAPC3G.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LU7DE7NE.js", imports: ["/build/_shared/chunk-3GY57ZBO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-QMHTOLXR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/callback": { id: "routes/callback", parentId: "root", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/callback-VLF5MM4M.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-QMHTOLXR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-PDZE2JPO.js", imports: ["/build/_shared/chunk-3GY57ZBO.js", "/build/_shared/chunk-QMHTOLXR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo.$tool": { id: "routes/demo.$tool", parentId: "root", path: "demo/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.$tool-YNGGIEOV.js", imports: ["/build/_shared/chunk-3GY57ZBO.js", "/build/_shared/chunk-QMHTOLXR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tool.$tool": { id: "routes/tool.$tool", parentId: "root", path: "tool/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$tool-OV3GJMRI.js", imports: ["/build/_shared/chunk-3GY57ZBO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-QMHTOLXR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cc08ed12", hmr: { runtime: "/build/_shared\\chunk-7BQCVHR7.js", timestamp: 1696586115401 }, url: "/build/manifest-CC08ED12.js" };

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
