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
var tailwind_default = "/build/_assets/tailwind-NOUAU37S.css";

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

// app/shadComponent/ui/toast.tsx
var React = __toESM(require("react")), import_react_icons = require("@radix-ui/react-icons"), ToastPrimitives = __toESM(require("@radix-ui/react-toast")), import_class_variance_authority = require("class-variance-authority");

// app/utils/utils.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/shadComponent/ui/toast.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ToastProvider = ToastPrimitives.Provider, ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-slate-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",
  {
    variants: {
      variant: {
        default: "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 47,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_icons.Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/shadComponent/ui/toast.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/toast.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/shadComponent/ui/use-toast.ts
var React2 = __toESM(require("react")), TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_VALUE, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action2) => {
  switch (action2.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action2.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action2.toast.id ? { ...t, ...action2.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action2;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action2.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action2.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action2) {
  memoryState = reducer(memoryState, action2), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React2.useState(memoryState);
  return React2.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/shadComponent/ui/toaster.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action2, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToastTitle, { children: title }, void 0, !1, {
            fileName: "app/shadComponent/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToastDescription, { children: description }, void 0, !1, {
            fileName: "app/shadComponent/ui/toaster.tsx",
            lineNumber: 24,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/shadComponent/ui/toaster.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        action2,
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToastClose, {}, void 0, !1, {
          fileName: "app/shadComponent/ui/toaster.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "app/shadComponent/ui/toaster.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToastViewport, {}, void 0, !1, {
      fileName: "app/shadComponent/ui/toaster.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shadComponent/ui/toaster.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: nprogress_default },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon/favicon.png"
  }
];
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      "visit work.pecha.tools for old version,if error persist please contact",
      error,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
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
  }, [transition.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_recoil.RecoilRoot, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Toaster, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 84,
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
          err ? reject(err) : (console.log(...oo_oo("3561830106_62_12_62_28_4", res)), resolve(res));
        }
      );
    })
  };
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x8758(){var _0x116b2f=['276OjdwrJ','\\x20server','method','_isPrimitiveType','_setNodeId','timeStamp','next.js','_disposeWebsocket','indexOf','props','number','sortProps','getPrototypeOf','_getOwnPropertyNames','default','map','stack','global','test','hrtime','_attemptToReconnectShortly','data','_allowedToConnectOnSend','expId','toString','parent','stackTraceLimit','_p_','_inNextEdge','_quotedRegExp','node','timeEnd','ws://','expressionsToEvaluate','onerror','autoExpandMaxDepth','HTMLAllCollection','84EOetaM','_setNodePermissions','getter','symbol','getOwnPropertySymbols','127.0.0.1','','4220358ybUlOI','unref','valueOf','prototype',':logPointId:','versions','log','\\x20browser','undefined','console','time','noFunctions','String','16ZevhMD','object','_connecting','ws/index.js','substr','Number',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.250\\\\node_modules",'gateway.docker.internal','Set','serialize','_inBrowser','now','root_exp','_consoleNinjaAllowedToStart','toLowerCase','get','constructor','63933','perf_hooks','_sendErrorMessage','_additionalMetadata','_propertyName','15300950fCDtmX','autoExpand','bigint','_cleanNode','_hasMapOnItsPath','then','performance','strLength','_maxConnectAttemptCount','location','NEXT_RUNTIME','nodeModules','1242XeaCrh','pathToFileURL','slice','_blacklistedProperty','isExpressionToEvaluate','level','getWebSocketClass','reload','call','_HTMLAllCollection','cappedElements','astro','length','Error','function','includes','autoExpandPropertyCount','port','dockerizedApp','remix','negativeZero','unshift','_reconnectTimeout','coverage','_setNodeExpandableState','_console_ninja','_console_ninja_session','stringify','autoExpandLimit','[object\\x20Set]','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_undefined','env','warn','unknown','autoExpandPreviousObjects','_isArray','join','pop','cappedProps','array','depth','_setNodeLabel','_connectToHostNow','1699002254970','_processTreeNodeResult','close','negativeInfinity','_addFunctionsNode','process','getOwnPropertyDescriptor','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','disabledLog','_WebSocketClass','_p_name','hits','4535063cotkug','Symbol','_setNodeExpressionPath','elements','create','NEGATIVE_INFINITY','error','allStrLength','defineProperty','string','host','_hasSetOnItsPath','4157920JnmBUb','date','onclose','_addProperty','name','_p_length','_setNodeQueryPath','_numberRegExp','_capIfString','split','isArray','Buffer','[object\\x20Array]','reduceLimits','bind','_connectAttemptCount','_isSet','_isUndefined','_allowedToSend','replace','[object\\x20Map]','current','resolveGetters','_property','_connected','concat','type','enumerable','hostname',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.72.223"],'match','','set','_isMap','_keyStrRegExp','11vZqoow','sort','_sortProps','edge','_socket','send','_type','index','_webSocketErrorDocsLink','4kUNdku','trace','onopen','value','_regExpToString','null','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','nan','totalStrLength','_Symbol','__es'+'Module','hasOwnProperty','_addObjectProperty','catch','4771593FCAHrq','push','500436qgsoCG','capped','_objectToString','elapsed','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_WebSocket','message','Map','path','...','WebSocket','_isNegativeZero','_isPrimitiveWrapperType','forEach','count','readyState','_treeNodePropertiesAfterFullValue','_treeNodePropertiesBeforeFullValue','rootExpression','_ws','24AWcTkA','_dateToString'];_0x8758=function(){return _0x116b2f;};return _0x8758();}var _0x468ae4=_0x5e0f;(function(_0x19c35e,_0x513952){var _0x388241=_0x5e0f,_0x2b9961=_0x19c35e();while(!![]){try{var _0x133c38=-parseInt(_0x388241(0x178))/0x1*(-parseInt(_0x388241(0x20e))/0x2)+parseInt(_0x388241(0x149))/0x3*(-parseInt(_0x388241(0x1e8))/0x4)+parseInt(_0x388241(0x1bc))/0x5+parseInt(_0x388241(0x1f8))/0x6*(parseInt(_0x388241(0x142))/0x7)+-parseInt(_0x388241(0x156))/0x8*(-parseInt(_0x388241(0x1f6))/0x9)+parseInt(_0x388241(0x16c))/0xa*(-parseInt(_0x388241(0x1df))/0xb)+-parseInt(_0x388241(0x20c))/0xc*(-parseInt(_0x388241(0x1b0))/0xd);if(_0x133c38===_0x513952)break;else _0x2b9961['push'](_0x2b9961['shift']());}catch(_0xfab22e){_0x2b9961['push'](_0x2b9961['shift']());}}}(_0x8758,0xc96c3));function _0x5e0f(_0x1ca9e4,_0x2d35f4){var _0x87582c=_0x8758();return _0x5e0f=function(_0x5e0fa9,_0x46d96f){_0x5e0fa9=_0x5e0fa9-0x136;var _0x4ae24e=_0x87582c[_0x5e0fa9];return _0x4ae24e;},_0x5e0f(_0x1ca9e4,_0x2d35f4);}var j=Object[_0x468ae4(0x1b4)],H=Object[_0x468ae4(0x1b8)],G=Object['getOwnPropertyDescriptor'],ee=Object['getOwnPropertyNames'],te=Object[_0x468ae4(0x21a)],ne=Object[_0x468ae4(0x14c)][_0x468ae4(0x1f3)],re=(_0x3aed5c,_0x1ec488,_0x43434a,_0x3ee091)=>{var _0x2359dd=_0x468ae4;if(_0x1ec488&&typeof _0x1ec488==_0x2359dd(0x157)||typeof _0x1ec488==_0x2359dd(0x186)){for(let _0x51d089 of ee(_0x1ec488))!ne[_0x2359dd(0x180)](_0x3aed5c,_0x51d089)&&_0x51d089!==_0x43434a&&H(_0x3aed5c,_0x51d089,{'get':()=>_0x1ec488[_0x51d089],'enumerable':!(_0x3ee091=G(_0x1ec488,_0x51d089))||_0x3ee091[_0x2359dd(0x1d7)]});}return _0x3aed5c;},x=(_0x628118,_0x4f9ba5,_0x272a4b)=>(_0x272a4b=_0x628118!=null?j(te(_0x628118)):{},re(_0x4f9ba5||!_0x628118||!_0x628118[_0x468ae4(0x1f2)]?H(_0x272a4b,_0x468ae4(0x21c),{'value':_0x628118,'enumerable':!0x0}):_0x272a4b,_0x628118)),X=class{constructor(_0xdb0769,_0x37c952,_0x36f4d1,_0x5f0fed,_0x134033){var _0x30979a=_0x468ae4;this[_0x30979a(0x21f)]=_0xdb0769,this[_0x30979a(0x1ba)]=_0x37c952,this[_0x30979a(0x189)]=_0x36f4d1,this[_0x30979a(0x177)]=_0x5f0fed,this[_0x30979a(0x18a)]=_0x134033,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x30979a(0x1d4)]=!0x1,this[_0x30979a(0x158)]=!0x1,this['_inNextEdge']=_0xdb0769[_0x30979a(0x1a9)]?.[_0x30979a(0x198)]?.['NEXT_RUNTIME']===_0x30979a(0x1e2),this[_0x30979a(0x160)]=!this['global'][_0x30979a(0x1a9)]?.[_0x30979a(0x14e)]?.[_0x30979a(0x13b)]&&!this[_0x30979a(0x139)],this[_0x30979a(0x1ad)]=null,this['_connectAttemptCount']=0x0,this[_0x30979a(0x174)]=0x14,this[_0x30979a(0x1e7)]='https://tinyurl.com/37x8b79t',this[_0x30979a(0x169)]=(this['_inBrowser']?_0x30979a(0x1ab):_0x30979a(0x1ee))+this[_0x30979a(0x1e7)];}async[_0x468ae4(0x17e)](){var _0x262165=_0x468ae4;if(this[_0x262165(0x1ad)])return this[_0x262165(0x1ad)];let _0x31bef4;if(this[_0x262165(0x160)]||this[_0x262165(0x139)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x202)];else{if(this[_0x262165(0x21f)][_0x262165(0x1a9)]?.[_0x262165(0x1fd)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x1a9)]?.['_WebSocket'];else try{let _0x46e5b1=await import(_0x262165(0x200));_0x31bef4=(await import((await import('url'))[_0x262165(0x179)](_0x46e5b1[_0x262165(0x19d)](this[_0x262165(0x177)],_0x262165(0x159)))[_0x262165(0x226)]()))[_0x262165(0x21c)];}catch{try{_0x31bef4=require(require(_0x262165(0x200))[_0x262165(0x19d)](this['nodeModules'],'ws'));}catch{throw new Error(_0x262165(0x1fc));}}}return this[_0x262165(0x1ad)]=_0x31bef4,_0x31bef4;}[_0x468ae4(0x1a3)](){var _0x50f7f1=_0x468ae4;this[_0x50f7f1(0x158)]||this[_0x50f7f1(0x1d4)]||this[_0x50f7f1(0x1cb)]>=this[_0x50f7f1(0x174)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x50f7f1(0x158)]=!0x0,this[_0x50f7f1(0x1cb)]++,this[_0x50f7f1(0x20b)]=new Promise((_0x2c6b01,_0x94cee8)=>{var _0x2aacad=_0x50f7f1;this['getWebSocketClass']()['then'](_0x2a20e1=>{var _0x60acb3=_0x5e0f;let _0x3953b0=new _0x2a20e1(_0x60acb3(0x13d)+(!this['_inBrowser']&&this['dockerizedApp']?_0x60acb3(0x15d):this[_0x60acb3(0x1ba)])+':'+this[_0x60acb3(0x189)]);_0x3953b0[_0x60acb3(0x13f)]=()=>{var _0x17553a=_0x60acb3;this[_0x17553a(0x1ce)]=!0x1,this['_disposeWebsocket'](_0x3953b0),this[_0x17553a(0x222)](),_0x94cee8(new Error('logger\\x20websocket\\x20error'));},_0x3953b0['onopen']=()=>{var _0x41664d=_0x60acb3;this[_0x41664d(0x160)]||_0x3953b0[_0x41664d(0x1e3)]&&_0x3953b0[_0x41664d(0x1e3)][_0x41664d(0x14a)]&&_0x3953b0['_socket']['unref'](),_0x2c6b01(_0x3953b0);},_0x3953b0[_0x60acb3(0x1be)]=()=>{var _0x2386b3=_0x60acb3;this[_0x2386b3(0x224)]=!0x0,this[_0x2386b3(0x215)](_0x3953b0),this['_attemptToReconnectShortly']();},_0x3953b0['onmessage']=_0x427fe2=>{var _0x4a5bed=_0x60acb3;try{_0x427fe2&&_0x427fe2[_0x4a5bed(0x223)]&&this[_0x4a5bed(0x160)]&&JSON['parse'](_0x427fe2[_0x4a5bed(0x223)])[_0x4a5bed(0x210)]===_0x4a5bed(0x17f)&&this[_0x4a5bed(0x21f)]['location'][_0x4a5bed(0x17f)]();}catch{}};})[_0x2aacad(0x171)](_0x25fede=>(this[_0x2aacad(0x1d4)]=!0x0,this[_0x2aacad(0x158)]=!0x1,this[_0x2aacad(0x224)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x25fede))[_0x2aacad(0x1f5)](_0x54cd53=>(this['_connected']=!0x1,this[_0x2aacad(0x158)]=!0x1,console[_0x2aacad(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x2aacad(0x1e7)]),_0x94cee8(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x54cd53&&_0x54cd53[_0x2aacad(0x1fe)])))));}));}['_disposeWebsocket'](_0x5b8bea){var _0x42c2b1=_0x468ae4;this[_0x42c2b1(0x1d4)]=!0x1,this['_connecting']=!0x1;try{_0x5b8bea[_0x42c2b1(0x1be)]=null,_0x5b8bea[_0x42c2b1(0x13f)]=null,_0x5b8bea[_0x42c2b1(0x1ea)]=null;}catch{}try{_0x5b8bea[_0x42c2b1(0x207)]<0x2&&_0x5b8bea[_0x42c2b1(0x1a6)]();}catch{}}[_0x468ae4(0x222)](){var _0xb6f8f8=_0x468ae4;clearTimeout(this[_0xb6f8f8(0x18e)]),!(this[_0xb6f8f8(0x1cb)]>=this['_maxConnectAttemptCount'])&&(this[_0xb6f8f8(0x18e)]=setTimeout(()=>{var _0x460439=_0xb6f8f8;this[_0x460439(0x1d4)]||this[_0x460439(0x158)]||(this[_0x460439(0x1a3)](),this['_ws']?.[_0x460439(0x1f5)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this['_reconnectTimeout'][_0xb6f8f8(0x14a)]&&this[_0xb6f8f8(0x18e)][_0xb6f8f8(0x14a)]());}async[_0x468ae4(0x1e4)](_0x4ac0a8){var _0x52ec70=_0x468ae4;try{if(!this[_0x52ec70(0x1ce)])return;this[_0x52ec70(0x224)]&&this['_connectToHostNow'](),(await this[_0x52ec70(0x20b)])[_0x52ec70(0x1e4)](JSON[_0x52ec70(0x193)](_0x4ac0a8));}catch(_0x2a22ed){console[_0x52ec70(0x199)](this[_0x52ec70(0x169)]+':\\x20'+(_0x2a22ed&&_0x2a22ed['message'])),this[_0x52ec70(0x1ce)]=!0x1,this[_0x52ec70(0x222)]();}}};function b(_0xbef482,_0x3eebc6,_0x3c4145,_0x57826e,_0x2cd8a0,_0x1146e6){var _0x3bc4e9=_0x468ae4;let _0x5bad4f=_0x3c4145[_0x3bc4e9(0x1c5)](',')[_0x3bc4e9(0x21d)](_0x1b7d39=>{var _0x5beb3b=_0x3bc4e9;try{_0xbef482[_0x5beb3b(0x192)]||((_0x2cd8a0===_0x5beb3b(0x214)||_0x2cd8a0===_0x5beb3b(0x18b)||_0x2cd8a0===_0x5beb3b(0x183))&&(_0x2cd8a0+=!_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x14e)]?.[_0x5beb3b(0x13b)]&&_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x198)]?.[_0x5beb3b(0x176)]!==_0x5beb3b(0x1e2)?_0x5beb3b(0x150):_0x5beb3b(0x20f)),_0xbef482[_0x5beb3b(0x192)]={'id':+new Date(),'tool':_0x2cd8a0});let _0x22adac=new X(_0xbef482,_0x3eebc6,_0x1b7d39,_0x57826e,_0x1146e6);return _0x22adac[_0x5beb3b(0x1e4)][_0x5beb3b(0x1ca)](_0x22adac);}catch(_0x436f9f){return console['warn'](_0x5beb3b(0x196),_0x436f9f&&_0x436f9f[_0x5beb3b(0x1fe)]),()=>{};}});return _0x17941f=>_0x5bad4f['forEach'](_0x43f965=>_0x43f965(_0x17941f));}function W(_0x338ea5){var _0x245c65=_0x468ae4;let _0x8eb306=function(_0x6dc48d,_0x53d411){return _0x53d411-_0x6dc48d;},_0x373a8b;if(_0x338ea5[_0x245c65(0x172)])_0x373a8b=function(){var _0x4e251f=_0x245c65;return _0x338ea5[_0x4e251f(0x172)][_0x4e251f(0x161)]();};else{if(_0x338ea5['process']&&_0x338ea5[_0x245c65(0x1a9)][_0x245c65(0x221)]&&_0x338ea5[_0x245c65(0x1a9)]?.['env']?.[_0x245c65(0x176)]!==_0x245c65(0x1e2))_0x373a8b=function(){var _0x2dfe9b=_0x245c65;return _0x338ea5[_0x2dfe9b(0x1a9)][_0x2dfe9b(0x221)]();},_0x8eb306=function(_0x2941b4,_0x253864){return 0x3e8*(_0x253864[0x0]-_0x2941b4[0x0])+(_0x253864[0x1]-_0x2941b4[0x1])/0xf4240;};else try{let {performance:_0x41bf49}=require(_0x245c65(0x168));_0x373a8b=function(){var _0x13082a=_0x245c65;return _0x41bf49[_0x13082a(0x161)]();};}catch{_0x373a8b=function(){return+new Date();};}}return{'elapsed':_0x8eb306,'timeStamp':_0x373a8b,'now':()=>Date[_0x245c65(0x161)]()};}function J(_0x2e41b8,_0x5329cb,_0x3b1635){var _0x4f9742=_0x468ae4;if(_0x2e41b8['_consoleNinjaAllowedToStart']!==void 0x0)return _0x2e41b8[_0x4f9742(0x163)];let _0x2b27b8=_0x2e41b8[_0x4f9742(0x1a9)]?.['versions']?.['node']||_0x2e41b8[_0x4f9742(0x1a9)]?.[_0x4f9742(0x198)]?.['NEXT_RUNTIME']===_0x4f9742(0x1e2);return _0x2b27b8&&_0x3b1635==='nuxt'?_0x2e41b8[_0x4f9742(0x163)]=!0x1:_0x2e41b8[_0x4f9742(0x163)]=_0x2b27b8||!_0x5329cb||_0x2e41b8[_0x4f9742(0x175)]?.[_0x4f9742(0x1d8)]&&_0x5329cb[_0x4f9742(0x187)](_0x2e41b8[_0x4f9742(0x175)][_0x4f9742(0x1d8)]),_0x2e41b8[_0x4f9742(0x163)];}function Y(_0x525130,_0x3de134,_0x3e0747,_0x191371){var _0x41497b=_0x468ae4;_0x525130=_0x525130,_0x3de134=_0x3de134,_0x3e0747=_0x3e0747,_0x191371=_0x191371;let _0x3207ca=W(_0x525130),_0x4d3537=_0x3207ca[_0x41497b(0x1fb)],_0x4972a5=_0x3207ca[_0x41497b(0x213)];class _0x16108b{constructor(){var _0x438069=_0x41497b;this[_0x438069(0x1de)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x438069(0x1c3)]=/^(0|[1-9][0-9]*)$/,this[_0x438069(0x13a)]=/'([^\\\\']|\\\\')*'/,this[_0x438069(0x197)]=_0x525130[_0x438069(0x151)],this['_HTMLAllCollection']=_0x525130[_0x438069(0x141)],this['_getOwnPropertyDescriptor']=Object[_0x438069(0x1aa)],this[_0x438069(0x21b)]=Object['getOwnPropertyNames'],this[_0x438069(0x1f1)]=_0x525130[_0x438069(0x1b1)],this['_regExpToString']=RegExp['prototype'][_0x438069(0x226)],this['_dateToString']=Date[_0x438069(0x14c)]['toString'];}['serialize'](_0x446828,_0x30733a,_0x2ae22d,_0x53dc69){var _0x2b360b=_0x41497b,_0x21d02c=this,_0x470947=_0x2ae22d[_0x2b360b(0x16d)];function _0x140217(_0x181c34,_0x4f2899,_0x37e772){var _0x422f76=_0x2b360b;_0x4f2899['type']=_0x422f76(0x19a),_0x4f2899[_0x422f76(0x1b6)]=_0x181c34['message'],_0x284d12=_0x37e772['node'][_0x422f76(0x1d1)],_0x37e772[_0x422f76(0x13b)][_0x422f76(0x1d1)]=_0x4f2899,_0x21d02c[_0x422f76(0x209)](_0x4f2899,_0x37e772);}try{_0x2ae22d[_0x2b360b(0x17d)]++,_0x2ae22d['autoExpand']&&_0x2ae22d['autoExpandPreviousObjects']['push'](_0x30733a);var _0x276736,_0x56c740,_0x5c3443,_0xec81b5,_0x2c9ec8=[],_0x137f9e=[],_0x2342f7,_0xa29e94=this[_0x2b360b(0x1e5)](_0x30733a),_0x12ae1d=_0xa29e94==='array',_0x488add=!0x1,_0x45bb8f=_0xa29e94===_0x2b360b(0x186),_0x2219ef=this[_0x2b360b(0x211)](_0xa29e94),_0x8670ee=this[_0x2b360b(0x204)](_0xa29e94),_0x3ccf0d=_0x2219ef||_0x8670ee,_0x486b40={},_0x259d7b=0x0,_0x161888=!0x1,_0x284d12,_0x57bb95=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2ae22d['depth']){if(_0x12ae1d){if(_0x56c740=_0x30733a[_0x2b360b(0x184)],_0x56c740>_0x2ae22d[_0x2b360b(0x1b3)]){for(_0x5c3443=0x0,_0xec81b5=_0x2ae22d[_0x2b360b(0x1b3)],_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e['push'](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));_0x446828[_0x2b360b(0x182)]=!0x0;}else{for(_0x5c3443=0x0,_0xec81b5=_0x56c740,_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));}_0x2ae22d['autoExpandPropertyCount']+=_0x137f9e['length'];}if(!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94==='undefined')&&!_0x2219ef&&_0xa29e94!=='String'&&_0xa29e94!==_0x2b360b(0x1c7)&&_0xa29e94!==_0x2b360b(0x16e)){var _0x281453=_0x53dc69[_0x2b360b(0x217)]||_0x2ae22d['props'];if(this[_0x2b360b(0x1cc)](_0x30733a)?(_0x276736=0x0,_0x30733a[_0x2b360b(0x205)](function(_0x3606a1){var _0x3a1288=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x3a1288(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x3a1288(0x17c)]&&_0x2ae22d[_0x3a1288(0x16d)]&&_0x2ae22d[_0x3a1288(0x188)]>_0x2ae22d['autoExpandLimit']){_0x161888=!0x0;return;}_0x137f9e[_0x3a1288(0x1f7)](_0x21d02c['_addProperty'](_0x2c9ec8,_0x30733a,_0x3a1288(0x15e),_0x276736++,_0x2ae22d,function(_0x24ad52){return function(){return _0x24ad52;};}(_0x3606a1)));})):this[_0x2b360b(0x1dd)](_0x30733a)&&_0x30733a['forEach'](function(_0xf59664,_0x5d81b2){var _0x2b8ffe=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x2b8ffe(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x2b8ffe(0x17c)]&&_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b8ffe(0x188)]>_0x2ae22d[_0x2b8ffe(0x194)]){_0x161888=!0x0;return;}var _0x18d716=_0x5d81b2[_0x2b8ffe(0x226)]();_0x18d716[_0x2b8ffe(0x184)]>0x64&&(_0x18d716=_0x18d716[_0x2b8ffe(0x17a)](0x0,0x64)+_0x2b8ffe(0x201)),_0x137f9e[_0x2b8ffe(0x1f7)](_0x21d02c[_0x2b8ffe(0x1bf)](_0x2c9ec8,_0x30733a,_0x2b8ffe(0x1ff),_0x18d716,_0x2ae22d,function(_0x59153d){return function(){return _0x59153d;};}(_0xf59664)));}),!_0x488add){try{for(_0x2342f7 in _0x30733a)if(!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7))&&!this[_0x2b360b(0x17b)](_0x30733a,_0x2342f7,_0x2ae22d)){if(_0x259d7b++,_0x2ae22d['autoExpandPropertyCount']++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d['isExpressionToEvaluate']&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d[_0x2b360b(0x188)]>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c['_addObjectProperty'](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}catch{}if(_0x486b40[_0x2b360b(0x1c1)]=!0x0,_0x45bb8f&&(_0x486b40[_0x2b360b(0x1ae)]=!0x0),!_0x161888){var _0x2a9a58=[][_0x2b360b(0x1d5)](this[_0x2b360b(0x21b)](_0x30733a))[_0x2b360b(0x1d5)](this['_getOwnPropertySymbols'](_0x30733a));for(_0x276736=0x0,_0x56c740=_0x2a9a58['length'];_0x276736<_0x56c740;_0x276736++)if(_0x2342f7=_0x2a9a58[_0x276736],!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7[_0x2b360b(0x226)]()))&&!this['_blacklistedProperty'](_0x30733a,_0x2342f7,_0x2ae22d)&&!_0x486b40[_0x2b360b(0x138)+_0x2342f7[_0x2b360b(0x226)]()]){if(_0x259d7b++,_0x2ae22d[_0x2b360b(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d[_0x2b360b(0x17c)]&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d['autoExpandPropertyCount']>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1f4)](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}}}}if(_0x446828[_0x2b360b(0x1d6)]=_0xa29e94,_0x3ccf0d?(_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x14b)](),this['_capIfString'](_0xa29e94,_0x446828,_0x2ae22d,_0x53dc69)):_0xa29e94===_0x2b360b(0x1bd)?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x20d)][_0x2b360b(0x180)](_0x30733a):_0xa29e94==='bigint'?_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x226)]():_0xa29e94==='RegExp'?_0x446828['value']=this[_0x2b360b(0x1ec)]['call'](_0x30733a):_0xa29e94==='symbol'&&this['_Symbol']?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x1f1)][_0x2b360b(0x14c)][_0x2b360b(0x226)]['call'](_0x30733a):!_0x2ae22d[_0x2b360b(0x1a1)]&&!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94===_0x2b360b(0x151))&&(delete _0x446828[_0x2b360b(0x1eb)],_0x446828[_0x2b360b(0x1f9)]=!0x0),_0x161888&&(_0x446828[_0x2b360b(0x19f)]=!0x0),_0x284d12=_0x2ae22d[_0x2b360b(0x13b)][_0x2b360b(0x1d1)],_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x446828,this[_0x2b360b(0x209)](_0x446828,_0x2ae22d),_0x137f9e[_0x2b360b(0x184)]){for(_0x276736=0x0,_0x56c740=_0x137f9e[_0x2b360b(0x184)];_0x276736<_0x56c740;_0x276736++)_0x137f9e[_0x276736](_0x276736);}_0x2c9ec8[_0x2b360b(0x184)]&&(_0x446828['props']=_0x2c9ec8);}catch(_0x330646){_0x140217(_0x330646,_0x446828,_0x2ae22d);}return this[_0x2b360b(0x16a)](_0x30733a,_0x446828),this[_0x2b360b(0x208)](_0x446828,_0x2ae22d),_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x284d12,_0x2ae22d['level']--,_0x2ae22d[_0x2b360b(0x16d)]=_0x470947,_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b360b(0x19b)][_0x2b360b(0x19e)](),_0x446828;}['_getOwnPropertySymbols'](_0x3bd6cc){var _0x2aabad=_0x41497b;return Object[_0x2aabad(0x146)]?Object[_0x2aabad(0x146)](_0x3bd6cc):[];}['_isSet'](_0x30dd32){var _0x358a39=_0x41497b;return!!(_0x30dd32&&_0x525130[_0x358a39(0x15e)]&&this[_0x358a39(0x1fa)](_0x30dd32)===_0x358a39(0x195)&&_0x30dd32['forEach']);}[_0x41497b(0x17b)](_0x20acd5,_0xef50d6,_0x208ddb){var _0x40c71e=_0x41497b;return _0x208ddb[_0x40c71e(0x154)]?typeof _0x20acd5[_0xef50d6]=='function':!0x1;}[_0x41497b(0x1e5)](_0x40567e){var _0xbbe9fb=_0x41497b,_0x103bf4='';return _0x103bf4=typeof _0x40567e,_0x103bf4===_0xbbe9fb(0x157)?this[_0xbbe9fb(0x1fa)](_0x40567e)===_0xbbe9fb(0x1c8)?_0x103bf4='array':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20Date]'?_0x103bf4='date':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20BigInt]'?_0x103bf4=_0xbbe9fb(0x16e):_0x40567e===null?_0x103bf4=_0xbbe9fb(0x1ed):_0x40567e[_0xbbe9fb(0x166)]&&(_0x103bf4=_0x40567e[_0xbbe9fb(0x166)][_0xbbe9fb(0x1c0)]||_0x103bf4):_0x103bf4===_0xbbe9fb(0x151)&&this[_0xbbe9fb(0x181)]&&_0x40567e instanceof this[_0xbbe9fb(0x181)]&&(_0x103bf4=_0xbbe9fb(0x141)),_0x103bf4;}[_0x41497b(0x1fa)](_0x591fa8){var _0x193ba2=_0x41497b;return Object[_0x193ba2(0x14c)][_0x193ba2(0x226)][_0x193ba2(0x180)](_0x591fa8);}[_0x41497b(0x211)](_0x2d794b){var _0x9202ee=_0x41497b;return _0x2d794b==='boolean'||_0x2d794b===_0x9202ee(0x1b9)||_0x2d794b==='number';}[_0x41497b(0x204)](_0x8e0351){var _0x481fda=_0x41497b;return _0x8e0351==='Boolean'||_0x8e0351===_0x481fda(0x155)||_0x8e0351==='Number';}['_addProperty'](_0xc0b08c,_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4){var _0x44c68f=this;return function(_0xb4d76d){var _0x43a249=_0x5e0f,_0x56e822=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1d1)],_0x52f605=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)],_0x107c77=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)];_0x41b47f['node'][_0x43a249(0x136)]=_0x56e822,_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)]=typeof _0x688eff==_0x43a249(0x218)?_0x688eff:_0xb4d76d,_0xc0b08c[_0x43a249(0x1f7)](_0x44c68f['_property'](_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4)),_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)]=_0x107c77,_0x41b47f['node'][_0x43a249(0x1e6)]=_0x52f605;};}['_addObjectProperty'](_0x7740eb,_0x17f789,_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f){var _0x539e4e=_0x41497b,_0x22d1d9=this;return _0x17f789[_0x539e4e(0x138)+_0x339830['toString']()]=!0x0,function(_0x4eca77){var _0x5c2716=_0x539e4e,_0x5a7313=_0x781188['node'][_0x5c2716(0x1d1)],_0x19fa02=_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)],_0x4dc904=_0x781188['node'][_0x5c2716(0x136)];_0x781188['node']['parent']=_0x5a7313,_0x781188['node'][_0x5c2716(0x1e6)]=_0x4eca77,_0x7740eb[_0x5c2716(0x1f7)](_0x22d1d9[_0x5c2716(0x1d3)](_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f)),_0x781188['node'][_0x5c2716(0x136)]=_0x4dc904,_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)]=_0x19fa02;};}['_property'](_0x449db4,_0x3cf735,_0x4ae1e6,_0x4d1363,_0xd6c90a){var _0x367c8e=_0x41497b,_0x5840e3=this;_0xd6c90a||(_0xd6c90a=function(_0x2d1a8c,_0xe71020){return _0x2d1a8c[_0xe71020];});var _0x16329=_0x4ae1e6[_0x367c8e(0x226)](),_0x28a0d3=_0x4d1363[_0x367c8e(0x13e)]||{},_0x1eec82=_0x4d1363[_0x367c8e(0x1a1)],_0x5b35b3=_0x4d1363[_0x367c8e(0x17c)];try{var _0x1c7dac=this[_0x367c8e(0x1dd)](_0x449db4),_0x12de51=_0x16329;_0x1c7dac&&_0x12de51[0x0]==='\\x27'&&(_0x12de51=_0x12de51[_0x367c8e(0x15a)](0x1,_0x12de51[_0x367c8e(0x184)]-0x2));var _0x964819=_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3['_p_'+_0x12de51];_0x964819&&(_0x4d1363['depth']=_0x4d1363[_0x367c8e(0x1a1)]+0x1),_0x4d1363[_0x367c8e(0x17c)]=!!_0x964819;var _0x44d980=typeof _0x4ae1e6=='symbol',_0x1b96f4={'name':_0x44d980||_0x1c7dac?_0x16329:this[_0x367c8e(0x16b)](_0x16329)};if(_0x44d980&&(_0x1b96f4[_0x367c8e(0x145)]=!0x0),!(_0x3cf735===_0x367c8e(0x1a0)||_0x3cf735===_0x367c8e(0x185))){var _0x4f2270=this['_getOwnPropertyDescriptor'](_0x449db4,_0x4ae1e6);if(_0x4f2270&&(_0x4f2270[_0x367c8e(0x1dc)]&&(_0x1b96f4['setter']=!0x0),_0x4f2270[_0x367c8e(0x165)]&&!_0x964819&&!_0x4d1363[_0x367c8e(0x1d2)]))return _0x1b96f4[_0x367c8e(0x144)]=!0x0,this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x44b192;try{_0x44b192=_0xd6c90a(_0x449db4,_0x4ae1e6);}catch(_0x5a13e2){return _0x1b96f4={'name':_0x16329,'type':_0x367c8e(0x19a),'error':_0x5a13e2[_0x367c8e(0x1fe)]},this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x247cc9=this[_0x367c8e(0x1e5)](_0x44b192),_0x11bc37=this['_isPrimitiveType'](_0x247cc9);if(_0x1b96f4[_0x367c8e(0x1d6)]=_0x247cc9,_0x11bc37)this[_0x367c8e(0x1a5)](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0xf8b9b5=_0x367c8e;_0x1b96f4[_0xf8b9b5(0x1eb)]=_0x44b192[_0xf8b9b5(0x14b)](),!_0x964819&&_0x5840e3[_0xf8b9b5(0x1c4)](_0x247cc9,_0x1b96f4,_0x4d1363,{});});else{var _0x2cc5ec=_0x4d1363['autoExpand']&&_0x4d1363[_0x367c8e(0x17d)]<_0x4d1363[_0x367c8e(0x140)]&&_0x4d1363[_0x367c8e(0x19b)][_0x367c8e(0x216)](_0x44b192)<0x0&&_0x247cc9!==_0x367c8e(0x186)&&_0x4d1363[_0x367c8e(0x188)]<_0x4d1363[_0x367c8e(0x194)];_0x2cc5ec||_0x4d1363[_0x367c8e(0x17d)]<_0x1eec82||_0x964819?(this[_0x367c8e(0x15f)](_0x1b96f4,_0x44b192,_0x4d1363,_0x964819||{}),this[_0x367c8e(0x16a)](_0x44b192,_0x1b96f4)):this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0x4910dd=_0x367c8e;_0x247cc9===_0x4910dd(0x1ed)||_0x247cc9==='undefined'||(delete _0x1b96f4[_0x4910dd(0x1eb)],_0x1b96f4[_0x4910dd(0x1f9)]=!0x0);});}return _0x1b96f4;}finally{_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3,_0x4d1363[_0x367c8e(0x1a1)]=_0x1eec82,_0x4d1363[_0x367c8e(0x17c)]=_0x5b35b3;}}[_0x41497b(0x1c4)](_0x138aeb,_0x1bdf22,_0x902338,_0x386dd9){var _0x443fd3=_0x41497b,_0x42ffe2=_0x386dd9['strLength']||_0x902338['strLength'];if((_0x138aeb===_0x443fd3(0x1b9)||_0x138aeb===_0x443fd3(0x155))&&_0x1bdf22[_0x443fd3(0x1eb)]){let _0x1bfed9=_0x1bdf22['value'][_0x443fd3(0x184)];_0x902338[_0x443fd3(0x1b7)]+=_0x1bfed9,_0x902338[_0x443fd3(0x1b7)]>_0x902338[_0x443fd3(0x1f0)]?(_0x1bdf22['capped']='',delete _0x1bdf22['value']):_0x1bfed9>_0x42ffe2&&(_0x1bdf22[_0x443fd3(0x1f9)]=_0x1bdf22[_0x443fd3(0x1eb)][_0x443fd3(0x15a)](0x0,_0x42ffe2),delete _0x1bdf22['value']);}}[_0x41497b(0x1dd)](_0x5dd1cf){var _0x4e6af9=_0x41497b;return!!(_0x5dd1cf&&_0x525130[_0x4e6af9(0x1ff)]&&this[_0x4e6af9(0x1fa)](_0x5dd1cf)===_0x4e6af9(0x1d0)&&_0x5dd1cf['forEach']);}[_0x41497b(0x16b)](_0x1f217b){var _0x235a09=_0x41497b;if(_0x1f217b[_0x235a09(0x1da)](/^\\d+$/))return _0x1f217b;var _0xc79036;try{_0xc79036=JSON[_0x235a09(0x193)](''+_0x1f217b);}catch{_0xc79036='\\x22'+this['_objectToString'](_0x1f217b)+'\\x22';}return _0xc79036[_0x235a09(0x1da)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xc79036=_0xc79036[_0x235a09(0x15a)](0x1,_0xc79036['length']-0x2):_0xc79036=_0xc79036[_0x235a09(0x1cf)](/'/g,'\\x5c\\x27')[_0x235a09(0x1cf)](/\\\\"/g,'\\x22')[_0x235a09(0x1cf)](/(^"|"$)/g,'\\x27'),_0xc79036;}[_0x41497b(0x1a5)](_0x1cb5c5,_0x18f336,_0x49fab1,_0x4b1ea5){var _0x186320=_0x41497b;this[_0x186320(0x209)](_0x1cb5c5,_0x18f336),_0x4b1ea5&&_0x4b1ea5(),this['_additionalMetadata'](_0x49fab1,_0x1cb5c5),this['_treeNodePropertiesAfterFullValue'](_0x1cb5c5,_0x18f336);}[_0x41497b(0x209)](_0x264f02,_0x38e634){var _0x5d44eb=_0x41497b;this[_0x5d44eb(0x212)](_0x264f02,_0x38e634),this[_0x5d44eb(0x1c2)](_0x264f02,_0x38e634),this['_setNodeExpressionPath'](_0x264f02,_0x38e634),this['_setNodePermissions'](_0x264f02,_0x38e634);}[_0x41497b(0x212)](_0x25af19,_0x14f38e){}[_0x41497b(0x1c2)](_0x5d77ea,_0xa38b0b){}[_0x41497b(0x1a2)](_0x1dd598,_0x36d7bb){}[_0x41497b(0x1cd)](_0x51064b){var _0x1c6615=_0x41497b;return _0x51064b===this[_0x1c6615(0x197)];}[_0x41497b(0x208)](_0x50abf2,_0x440584){var _0x124235=_0x41497b;this[_0x124235(0x1a2)](_0x50abf2,_0x440584),this[_0x124235(0x190)](_0x50abf2),_0x440584[_0x124235(0x219)]&&this[_0x124235(0x1e1)](_0x50abf2),this[_0x124235(0x1a8)](_0x50abf2,_0x440584),this['_addLoadNode'](_0x50abf2,_0x440584),this[_0x124235(0x16f)](_0x50abf2);}[_0x41497b(0x16a)](_0x149285,_0x5f4a23){var _0x14ba24=_0x41497b;let _0x306082;try{_0x525130[_0x14ba24(0x152)]&&(_0x306082=_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)],_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)]=function(){}),_0x149285&&typeof _0x149285[_0x14ba24(0x184)]=='number'&&(_0x5f4a23[_0x14ba24(0x184)]=_0x149285[_0x14ba24(0x184)]);}catch{}finally{_0x306082&&(_0x525130['console'][_0x14ba24(0x1b6)]=_0x306082);}if(_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x218)||_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x15b)){if(isNaN(_0x5f4a23['value']))_0x5f4a23[_0x14ba24(0x1ef)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];else switch(_0x5f4a23['value']){case Number['POSITIVE_INFINITY']:_0x5f4a23['positiveInfinity']=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case Number[_0x14ba24(0x1b5)]:_0x5f4a23[_0x14ba24(0x1a7)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case 0x0:this[_0x14ba24(0x203)](_0x5f4a23[_0x14ba24(0x1eb)])&&(_0x5f4a23[_0x14ba24(0x18c)]=!0x0);break;}}else _0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x186)&&typeof _0x149285[_0x14ba24(0x1c0)]==_0x14ba24(0x1b9)&&_0x149285[_0x14ba24(0x1c0)]&&_0x5f4a23[_0x14ba24(0x1c0)]&&_0x149285[_0x14ba24(0x1c0)]!==_0x5f4a23[_0x14ba24(0x1c0)]&&(_0x5f4a23['funcName']=_0x149285[_0x14ba24(0x1c0)]);}['_isNegativeZero'](_0x5b1353){var _0x4a752f=_0x41497b;return 0x1/_0x5b1353===Number[_0x4a752f(0x1b5)];}[_0x41497b(0x1e1)](_0x56cb22){var _0x2d9e52=_0x41497b;!_0x56cb22[_0x2d9e52(0x217)]||!_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x184)]||_0x56cb22['type']===_0x2d9e52(0x1a0)||_0x56cb22['type']===_0x2d9e52(0x1ff)||_0x56cb22[_0x2d9e52(0x1d6)]===_0x2d9e52(0x15e)||_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x1e0)](function(_0x348d85,_0x43558b){var _0x4e5041=_0x2d9e52,_0x4fe932=_0x348d85[_0x4e5041(0x1c0)][_0x4e5041(0x164)](),_0x16e14c=_0x43558b[_0x4e5041(0x1c0)]['toLowerCase']();return _0x4fe932<_0x16e14c?-0x1:_0x4fe932>_0x16e14c?0x1:0x0;});}['_addFunctionsNode'](_0x4a7887,_0x40201b){var _0x44116f=_0x41497b;if(!(_0x40201b[_0x44116f(0x154)]||!_0x4a7887['props']||!_0x4a7887[_0x44116f(0x217)]['length'])){for(var _0x1db19d=[],_0x29b4dd=[],_0x120e34=0x0,_0x2a7e9d=_0x4a7887[_0x44116f(0x217)][_0x44116f(0x184)];_0x120e34<_0x2a7e9d;_0x120e34++){var _0x5d53d0=_0x4a7887[_0x44116f(0x217)][_0x120e34];_0x5d53d0['type']==='function'?_0x1db19d[_0x44116f(0x1f7)](_0x5d53d0):_0x29b4dd[_0x44116f(0x1f7)](_0x5d53d0);}if(!(!_0x29b4dd['length']||_0x1db19d['length']<=0x1)){_0x4a7887[_0x44116f(0x217)]=_0x29b4dd;var _0x16d9b1={'functionsNode':!0x0,'props':_0x1db19d};this[_0x44116f(0x212)](_0x16d9b1,_0x40201b),this[_0x44116f(0x1a2)](_0x16d9b1,_0x40201b),this['_setNodeExpandableState'](_0x16d9b1),this[_0x44116f(0x143)](_0x16d9b1,_0x40201b),_0x16d9b1['id']+='\\x20f',_0x4a7887[_0x44116f(0x217)][_0x44116f(0x18d)](_0x16d9b1);}}}['_addLoadNode'](_0x4774d4,_0x50e0c9){}['_setNodeExpandableState'](_0x368709){}[_0x41497b(0x19c)](_0x14907c){var _0x6ad87a=_0x41497b;return Array[_0x6ad87a(0x1c6)](_0x14907c)||typeof _0x14907c=='object'&&this['_objectToString'](_0x14907c)===_0x6ad87a(0x1c8);}[_0x41497b(0x143)](_0x26716f,_0x467fae){}[_0x41497b(0x16f)](_0xfaa8f6){var _0x492341=_0x41497b;delete _0xfaa8f6['_hasSymbolPropertyOnItsPath'],delete _0xfaa8f6[_0x492341(0x1bb)],delete _0xfaa8f6[_0x492341(0x170)];}[_0x41497b(0x1b2)](_0x44160d,_0x5eca73){}}let _0x4e192b=new _0x16108b(),_0x22f72a={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x437449={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5dbd72(_0x438614,_0x1daab2,_0x2a8ba2,_0x327d8f,_0x7ad510,_0x126ab6){var _0x25bee5=_0x41497b;let _0x128d1a,_0x17066d;try{_0x17066d=_0x4972a5(),_0x128d1a=_0x3e0747[_0x1daab2],!_0x128d1a||_0x17066d-_0x128d1a['ts']>0x1f4&&_0x128d1a[_0x25bee5(0x206)]&&_0x128d1a['time']/_0x128d1a['count']<0x64?(_0x3e0747[_0x1daab2]=_0x128d1a={'count':0x0,'time':0x0,'ts':_0x17066d},_0x3e0747[_0x25bee5(0x1af)]={}):_0x17066d-_0x3e0747[_0x25bee5(0x1af)]['ts']>0x32&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x153)]/_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]<0x64&&(_0x3e0747[_0x25bee5(0x1af)]={});let _0x4b3d02=[],_0x27388c=_0x128d1a[_0x25bee5(0x1c9)]||_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]?_0x437449:_0x22f72a,_0x2adebe=_0x1c3da5=>{var _0xd98901=_0x25bee5;let _0x16b660={};return _0x16b660[_0xd98901(0x217)]=_0x1c3da5[_0xd98901(0x217)],_0x16b660[_0xd98901(0x1b3)]=_0x1c3da5['elements'],_0x16b660[_0xd98901(0x173)]=_0x1c3da5['strLength'],_0x16b660[_0xd98901(0x1f0)]=_0x1c3da5[_0xd98901(0x1f0)],_0x16b660[_0xd98901(0x194)]=_0x1c3da5['autoExpandLimit'],_0x16b660[_0xd98901(0x140)]=_0x1c3da5[_0xd98901(0x140)],_0x16b660['sortProps']=!0x1,_0x16b660['noFunctions']=!_0x3de134,_0x16b660[_0xd98901(0x1a1)]=0x1,_0x16b660[_0xd98901(0x17d)]=0x0,_0x16b660[_0xd98901(0x225)]='root_exp_id',_0x16b660[_0xd98901(0x20a)]=_0xd98901(0x162),_0x16b660[_0xd98901(0x16d)]=!0x0,_0x16b660[_0xd98901(0x19b)]=[],_0x16b660[_0xd98901(0x188)]=0x0,_0x16b660[_0xd98901(0x1d2)]=!0x0,_0x16b660[_0xd98901(0x1b7)]=0x0,_0x16b660['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x16b660;};for(var _0x2faef3=0x0;_0x2faef3<_0x7ad510[_0x25bee5(0x184)];_0x2faef3++)_0x4b3d02['push'](_0x4e192b[_0x25bee5(0x15f)]({'timeNode':_0x438614===_0x25bee5(0x153)||void 0x0},_0x7ad510[_0x2faef3],_0x2adebe(_0x27388c),{}));if(_0x438614===_0x25bee5(0x1e9)){let _0x3bf8d2=Error['stackTraceLimit'];try{Error[_0x25bee5(0x137)]=0x1/0x0,_0x4b3d02[_0x25bee5(0x1f7)](_0x4e192b[_0x25bee5(0x15f)]({'stackNode':!0x0},new Error()[_0x25bee5(0x21e)],_0x2adebe(_0x27388c),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3bf8d2;}}return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':_0x4b3d02,'id':_0x1daab2,'context':_0x126ab6}]};}catch(_0x4e713a){return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':[{'type':_0x25bee5(0x19a),'error':_0x4e713a&&_0x4e713a[_0x25bee5(0x1fe)]}],'id':_0x1daab2,'context':_0x126ab6}]};}finally{try{if(_0x128d1a&&_0x17066d){let _0x118727=_0x4972a5();_0x128d1a['count']++,_0x128d1a[_0x25bee5(0x153)]+=_0x4d3537(_0x17066d,_0x118727),_0x128d1a['ts']=_0x118727,_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]++,_0x3e0747['hits']['time']+=_0x4d3537(_0x17066d,_0x118727),_0x3e0747[_0x25bee5(0x1af)]['ts']=_0x118727,(_0x128d1a[_0x25bee5(0x206)]>0x32||_0x128d1a[_0x25bee5(0x153)]>0x64)&&(_0x128d1a[_0x25bee5(0x1c9)]=!0x0),(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]>0x3e8||_0x3e0747[_0x25bee5(0x1af)]['time']>0x12c)&&(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]=!0x0);}}catch{}}}return _0x5dbd72;}((_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x42ded8,_0x119988,_0x351f5d,_0x3c71d2,_0x599f1f)=>{var _0x4879a8=_0x468ae4;if(_0x3438aa[_0x4879a8(0x191)])return _0x3438aa[_0x4879a8(0x191)];if(!J(_0x3438aa,_0x351f5d,_0x10e2cd))return _0x3438aa[_0x4879a8(0x191)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3438aa[_0x4879a8(0x191)];let _0x415dbe=W(_0x3438aa),_0x4c54fc=_0x415dbe[_0x4879a8(0x1fb)],_0x46d3b7=_0x415dbe['timeStamp'],_0x474dcb=_0x415dbe[_0x4879a8(0x161)],_0x44cf82={'hits':{},'ts':{}},_0x38e5f5=Y(_0x3438aa,_0x3c71d2,_0x44cf82,_0x42ded8),_0x31da8e=_0x2056e1=>{_0x44cf82['ts'][_0x2056e1]=_0x46d3b7();},_0x6c8078=(_0x4e0052,_0x17a019)=>{var _0x3061d4=_0x4879a8;let _0x5a32fc=_0x44cf82['ts'][_0x17a019];if(delete _0x44cf82['ts'][_0x17a019],_0x5a32fc){let _0x1c412e=_0x4c54fc(_0x5a32fc,_0x46d3b7());_0x18783d(_0x38e5f5(_0x3061d4(0x153),_0x4e0052,_0x474dcb(),_0xd23236,[_0x1c412e],_0x17a019));}},_0x13d552=_0x45a62f=>_0xf5a5a5=>{var _0xa4f039=_0x4879a8;try{_0x31da8e(_0xf5a5a5),_0x45a62f(_0xf5a5a5);}finally{_0x3438aa[_0xa4f039(0x152)]['time']=_0x45a62f;}},_0x133c7e=_0x59e399=>_0x53d059=>{var _0x2495c1=_0x4879a8;try{let [_0x1c40fe,_0xb50c66]=_0x53d059[_0x2495c1(0x1c5)](_0x2495c1(0x14d));_0x6c8078(_0xb50c66,_0x1c40fe),_0x59e399(_0x1c40fe);}finally{_0x3438aa['console'][_0x2495c1(0x13c)]=_0x59e399;}};_0x3438aa[_0x4879a8(0x191)]={'consoleLog':(_0x14d09b,_0x44b315)=>{var _0x3f47dd=_0x4879a8;_0x3438aa[_0x3f47dd(0x152)][_0x3f47dd(0x14f)]['name']!==_0x3f47dd(0x1ac)&&_0x18783d(_0x38e5f5(_0x3f47dd(0x14f),_0x14d09b,_0x474dcb(),_0xd23236,_0x44b315));},'consoleTrace':(_0x1463c7,_0x391847)=>{var _0x599589=_0x4879a8;_0x3438aa[_0x599589(0x152)][_0x599589(0x14f)][_0x599589(0x1c0)]!=='disabledTrace'&&_0x18783d(_0x38e5f5(_0x599589(0x1e9),_0x1463c7,_0x474dcb(),_0xd23236,_0x391847));},'consoleTime':()=>{var _0x21c121=_0x4879a8;_0x3438aa['console'][_0x21c121(0x153)]=_0x13d552(_0x3438aa[_0x21c121(0x152)][_0x21c121(0x153)]);},'consoleTimeEnd':()=>{var _0x424c49=_0x4879a8;_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]=_0x133c7e(_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]);},'autoLog':(_0x503de2,_0x26ac93)=>{var _0x49b701=_0x4879a8;_0x18783d(_0x38e5f5(_0x49b701(0x14f),_0x26ac93,_0x474dcb(),_0xd23236,[_0x503de2]));},'autoLogMany':(_0x5d3be8,_0x2b33a5)=>{_0x18783d(_0x38e5f5('log',_0x5d3be8,_0x474dcb(),_0xd23236,_0x2b33a5));},'autoTrace':(_0x45771f,_0xa46292)=>{var _0x1edfa6=_0x4879a8;_0x18783d(_0x38e5f5(_0x1edfa6(0x1e9),_0xa46292,_0x474dcb(),_0xd23236,[_0x45771f]));},'autoTraceMany':(_0x58a524,_0x4309ca)=>{var _0xfdebab=_0x4879a8;_0x18783d(_0x38e5f5(_0xfdebab(0x1e9),_0x58a524,_0x474dcb(),_0xd23236,_0x4309ca));},'autoTime':(_0x2ec472,_0x3e8497,_0x557ad3)=>{_0x31da8e(_0x557ad3);},'autoTimeEnd':(_0x590e39,_0x477199,_0x1178b4)=>{_0x6c8078(_0x477199,_0x1178b4);},'coverage':_0x40869a=>{var _0x431076=_0x4879a8;_0x18783d({'method':_0x431076(0x18f),'version':_0x42ded8,'args':[{'id':_0x40869a}]});}};let _0x18783d=b(_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x599f1f),_0xd23236=_0x3438aa['_console_ninja_session'];return _0x3438aa[_0x4879a8(0x191)];})(globalThis,_0x468ae4(0x147),_0x468ae4(0x167),_0x468ae4(0x15c),'remix','1.0.0',_0x468ae4(0x1a4),_0x468ae4(0x1d9),_0x468ae4(0x148),_0x468ae4(0x1db));`);
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
var import_react8 = require("react"), import_fc = require("react-icons/fc");

// app/shadComponent/ui/button.tsx
var React3 = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React3.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/shadComponent/ui/button.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/shadComponent/ui/dialog.tsx
var React4 = __toESM(require("react")), DialogPrimitive = __toESM(require("@radix-ui/react-dialog")), import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 21,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogOverlay, {}, void 0, !1, {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_icons2.Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/shadComponent/ui/dialog.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "app/shadComponent/ui/dialog.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/shadComponent/ui/dialog.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/shadComponent/ui/dialog.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/shadComponent/ui/dialog.tsx",
  lineNumber: 36,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/dialog.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/component/Login.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogTrigger, { asChild: !0, className: "btn btn-sm btn-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { className: "bg-blue-700 hover:bg-blue-600", id: "login-btn", children: "LOG IN" }, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogContent, { className: "modal m-auto max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LoginForm, {}, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Login.tsx",
    lineNumber: 22,
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
      console.log(...oo_oo2("3782423257_64_6_64_31_4", "err: ", err));
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
      console.log(...oo_oo2("3782423257_78_6_78_22_4", res));
    } catch (err) {
      console.log(...oo_oo2("3782423257_80_6_80_52_4", "code verification error : ", err));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/favicon/favicon.png",
          className: "mx-auto w-auto",
          style: { height: "15vh" }
        },
        void 0,
        !1,
        {
          fileName: "app/component/Login.tsx",
          lineNumber: 86,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogTitle, { className: "mx-auto", children: "Pecha tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogDescription, { className: "mx-auto", children: "Log in to Pecha tools to continue using tools" }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    redirectEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/component/Login.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Button,
        {
          onClick: handleGoogleLogin,
          className: "text-white w-fit mx-auto bg-blue-600 hover:bg-blue-700 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fc.FcGoogle, { className: "text-xl" }, void 0, !1, {
              fileName: "app/component/Login.tsx",
              lineNumber: 105,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-lg font-semibold leading-6 ml-3", children: "Google" }, void 0, !1, {
              fileName: "app/component/Login.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/component/Login.tsx",
          lineNumber: 101,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative mt-3 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "div",
          {
            className: "absolute inset-0 flex items-center",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full border-t border-stone-200" }, void 0, !1, {
              fileName: "app/component/Login.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/component/Login.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative flex justify-center text-sm font-regular leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-white px-6 text-stone-500", children: "Or sign in with" }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    showOtpField ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "font-semibold mb-2 text-primary-800", children: "Check your inbox" }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-sm text-stone-700/70", children: [
          "We have sent you a magic link. If you did not receive the email,",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 164,
              columnNumber: 15
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { onSubmit: handleLoginPassword, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 177,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 184,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/component/Login.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 196,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 202,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/component/Login.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { onSubmit: handlePasswordlessLogin, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-8 mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            lineNumber: 126,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            lineNumber: 133,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Login.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Login.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          lineNumber: 147,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/component/Login.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Login.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Login.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x8758(){var _0x116b2f=['276OjdwrJ','\\x20server','method','_isPrimitiveType','_setNodeId','timeStamp','next.js','_disposeWebsocket','indexOf','props','number','sortProps','getPrototypeOf','_getOwnPropertyNames','default','map','stack','global','test','hrtime','_attemptToReconnectShortly','data','_allowedToConnectOnSend','expId','toString','parent','stackTraceLimit','_p_','_inNextEdge','_quotedRegExp','node','timeEnd','ws://','expressionsToEvaluate','onerror','autoExpandMaxDepth','HTMLAllCollection','84EOetaM','_setNodePermissions','getter','symbol','getOwnPropertySymbols','127.0.0.1','','4220358ybUlOI','unref','valueOf','prototype',':logPointId:','versions','log','\\x20browser','undefined','console','time','noFunctions','String','16ZevhMD','object','_connecting','ws/index.js','substr','Number',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.250\\\\node_modules",'gateway.docker.internal','Set','serialize','_inBrowser','now','root_exp','_consoleNinjaAllowedToStart','toLowerCase','get','constructor','63933','perf_hooks','_sendErrorMessage','_additionalMetadata','_propertyName','15300950fCDtmX','autoExpand','bigint','_cleanNode','_hasMapOnItsPath','then','performance','strLength','_maxConnectAttemptCount','location','NEXT_RUNTIME','nodeModules','1242XeaCrh','pathToFileURL','slice','_blacklistedProperty','isExpressionToEvaluate','level','getWebSocketClass','reload','call','_HTMLAllCollection','cappedElements','astro','length','Error','function','includes','autoExpandPropertyCount','port','dockerizedApp','remix','negativeZero','unshift','_reconnectTimeout','coverage','_setNodeExpandableState','_console_ninja','_console_ninja_session','stringify','autoExpandLimit','[object\\x20Set]','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_undefined','env','warn','unknown','autoExpandPreviousObjects','_isArray','join','pop','cappedProps','array','depth','_setNodeLabel','_connectToHostNow','1699002254970','_processTreeNodeResult','close','negativeInfinity','_addFunctionsNode','process','getOwnPropertyDescriptor','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','disabledLog','_WebSocketClass','_p_name','hits','4535063cotkug','Symbol','_setNodeExpressionPath','elements','create','NEGATIVE_INFINITY','error','allStrLength','defineProperty','string','host','_hasSetOnItsPath','4157920JnmBUb','date','onclose','_addProperty','name','_p_length','_setNodeQueryPath','_numberRegExp','_capIfString','split','isArray','Buffer','[object\\x20Array]','reduceLimits','bind','_connectAttemptCount','_isSet','_isUndefined','_allowedToSend','replace','[object\\x20Map]','current','resolveGetters','_property','_connected','concat','type','enumerable','hostname',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.72.223"],'match','','set','_isMap','_keyStrRegExp','11vZqoow','sort','_sortProps','edge','_socket','send','_type','index','_webSocketErrorDocsLink','4kUNdku','trace','onopen','value','_regExpToString','null','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','nan','totalStrLength','_Symbol','__es'+'Module','hasOwnProperty','_addObjectProperty','catch','4771593FCAHrq','push','500436qgsoCG','capped','_objectToString','elapsed','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_WebSocket','message','Map','path','...','WebSocket','_isNegativeZero','_isPrimitiveWrapperType','forEach','count','readyState','_treeNodePropertiesAfterFullValue','_treeNodePropertiesBeforeFullValue','rootExpression','_ws','24AWcTkA','_dateToString'];_0x8758=function(){return _0x116b2f;};return _0x8758();}var _0x468ae4=_0x5e0f;(function(_0x19c35e,_0x513952){var _0x388241=_0x5e0f,_0x2b9961=_0x19c35e();while(!![]){try{var _0x133c38=-parseInt(_0x388241(0x178))/0x1*(-parseInt(_0x388241(0x20e))/0x2)+parseInt(_0x388241(0x149))/0x3*(-parseInt(_0x388241(0x1e8))/0x4)+parseInt(_0x388241(0x1bc))/0x5+parseInt(_0x388241(0x1f8))/0x6*(parseInt(_0x388241(0x142))/0x7)+-parseInt(_0x388241(0x156))/0x8*(-parseInt(_0x388241(0x1f6))/0x9)+parseInt(_0x388241(0x16c))/0xa*(-parseInt(_0x388241(0x1df))/0xb)+-parseInt(_0x388241(0x20c))/0xc*(-parseInt(_0x388241(0x1b0))/0xd);if(_0x133c38===_0x513952)break;else _0x2b9961['push'](_0x2b9961['shift']());}catch(_0xfab22e){_0x2b9961['push'](_0x2b9961['shift']());}}}(_0x8758,0xc96c3));function _0x5e0f(_0x1ca9e4,_0x2d35f4){var _0x87582c=_0x8758();return _0x5e0f=function(_0x5e0fa9,_0x46d96f){_0x5e0fa9=_0x5e0fa9-0x136;var _0x4ae24e=_0x87582c[_0x5e0fa9];return _0x4ae24e;},_0x5e0f(_0x1ca9e4,_0x2d35f4);}var j=Object[_0x468ae4(0x1b4)],H=Object[_0x468ae4(0x1b8)],G=Object['getOwnPropertyDescriptor'],ee=Object['getOwnPropertyNames'],te=Object[_0x468ae4(0x21a)],ne=Object[_0x468ae4(0x14c)][_0x468ae4(0x1f3)],re=(_0x3aed5c,_0x1ec488,_0x43434a,_0x3ee091)=>{var _0x2359dd=_0x468ae4;if(_0x1ec488&&typeof _0x1ec488==_0x2359dd(0x157)||typeof _0x1ec488==_0x2359dd(0x186)){for(let _0x51d089 of ee(_0x1ec488))!ne[_0x2359dd(0x180)](_0x3aed5c,_0x51d089)&&_0x51d089!==_0x43434a&&H(_0x3aed5c,_0x51d089,{'get':()=>_0x1ec488[_0x51d089],'enumerable':!(_0x3ee091=G(_0x1ec488,_0x51d089))||_0x3ee091[_0x2359dd(0x1d7)]});}return _0x3aed5c;},x=(_0x628118,_0x4f9ba5,_0x272a4b)=>(_0x272a4b=_0x628118!=null?j(te(_0x628118)):{},re(_0x4f9ba5||!_0x628118||!_0x628118[_0x468ae4(0x1f2)]?H(_0x272a4b,_0x468ae4(0x21c),{'value':_0x628118,'enumerable':!0x0}):_0x272a4b,_0x628118)),X=class{constructor(_0xdb0769,_0x37c952,_0x36f4d1,_0x5f0fed,_0x134033){var _0x30979a=_0x468ae4;this[_0x30979a(0x21f)]=_0xdb0769,this[_0x30979a(0x1ba)]=_0x37c952,this[_0x30979a(0x189)]=_0x36f4d1,this[_0x30979a(0x177)]=_0x5f0fed,this[_0x30979a(0x18a)]=_0x134033,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x30979a(0x1d4)]=!0x1,this[_0x30979a(0x158)]=!0x1,this['_inNextEdge']=_0xdb0769[_0x30979a(0x1a9)]?.[_0x30979a(0x198)]?.['NEXT_RUNTIME']===_0x30979a(0x1e2),this[_0x30979a(0x160)]=!this['global'][_0x30979a(0x1a9)]?.[_0x30979a(0x14e)]?.[_0x30979a(0x13b)]&&!this[_0x30979a(0x139)],this[_0x30979a(0x1ad)]=null,this['_connectAttemptCount']=0x0,this[_0x30979a(0x174)]=0x14,this[_0x30979a(0x1e7)]='https://tinyurl.com/37x8b79t',this[_0x30979a(0x169)]=(this['_inBrowser']?_0x30979a(0x1ab):_0x30979a(0x1ee))+this[_0x30979a(0x1e7)];}async[_0x468ae4(0x17e)](){var _0x262165=_0x468ae4;if(this[_0x262165(0x1ad)])return this[_0x262165(0x1ad)];let _0x31bef4;if(this[_0x262165(0x160)]||this[_0x262165(0x139)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x202)];else{if(this[_0x262165(0x21f)][_0x262165(0x1a9)]?.[_0x262165(0x1fd)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x1a9)]?.['_WebSocket'];else try{let _0x46e5b1=await import(_0x262165(0x200));_0x31bef4=(await import((await import('url'))[_0x262165(0x179)](_0x46e5b1[_0x262165(0x19d)](this[_0x262165(0x177)],_0x262165(0x159)))[_0x262165(0x226)]()))[_0x262165(0x21c)];}catch{try{_0x31bef4=require(require(_0x262165(0x200))[_0x262165(0x19d)](this['nodeModules'],'ws'));}catch{throw new Error(_0x262165(0x1fc));}}}return this[_0x262165(0x1ad)]=_0x31bef4,_0x31bef4;}[_0x468ae4(0x1a3)](){var _0x50f7f1=_0x468ae4;this[_0x50f7f1(0x158)]||this[_0x50f7f1(0x1d4)]||this[_0x50f7f1(0x1cb)]>=this[_0x50f7f1(0x174)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x50f7f1(0x158)]=!0x0,this[_0x50f7f1(0x1cb)]++,this[_0x50f7f1(0x20b)]=new Promise((_0x2c6b01,_0x94cee8)=>{var _0x2aacad=_0x50f7f1;this['getWebSocketClass']()['then'](_0x2a20e1=>{var _0x60acb3=_0x5e0f;let _0x3953b0=new _0x2a20e1(_0x60acb3(0x13d)+(!this['_inBrowser']&&this['dockerizedApp']?_0x60acb3(0x15d):this[_0x60acb3(0x1ba)])+':'+this[_0x60acb3(0x189)]);_0x3953b0[_0x60acb3(0x13f)]=()=>{var _0x17553a=_0x60acb3;this[_0x17553a(0x1ce)]=!0x1,this['_disposeWebsocket'](_0x3953b0),this[_0x17553a(0x222)](),_0x94cee8(new Error('logger\\x20websocket\\x20error'));},_0x3953b0['onopen']=()=>{var _0x41664d=_0x60acb3;this[_0x41664d(0x160)]||_0x3953b0[_0x41664d(0x1e3)]&&_0x3953b0[_0x41664d(0x1e3)][_0x41664d(0x14a)]&&_0x3953b0['_socket']['unref'](),_0x2c6b01(_0x3953b0);},_0x3953b0[_0x60acb3(0x1be)]=()=>{var _0x2386b3=_0x60acb3;this[_0x2386b3(0x224)]=!0x0,this[_0x2386b3(0x215)](_0x3953b0),this['_attemptToReconnectShortly']();},_0x3953b0['onmessage']=_0x427fe2=>{var _0x4a5bed=_0x60acb3;try{_0x427fe2&&_0x427fe2[_0x4a5bed(0x223)]&&this[_0x4a5bed(0x160)]&&JSON['parse'](_0x427fe2[_0x4a5bed(0x223)])[_0x4a5bed(0x210)]===_0x4a5bed(0x17f)&&this[_0x4a5bed(0x21f)]['location'][_0x4a5bed(0x17f)]();}catch{}};})[_0x2aacad(0x171)](_0x25fede=>(this[_0x2aacad(0x1d4)]=!0x0,this[_0x2aacad(0x158)]=!0x1,this[_0x2aacad(0x224)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x25fede))[_0x2aacad(0x1f5)](_0x54cd53=>(this['_connected']=!0x1,this[_0x2aacad(0x158)]=!0x1,console[_0x2aacad(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x2aacad(0x1e7)]),_0x94cee8(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x54cd53&&_0x54cd53[_0x2aacad(0x1fe)])))));}));}['_disposeWebsocket'](_0x5b8bea){var _0x42c2b1=_0x468ae4;this[_0x42c2b1(0x1d4)]=!0x1,this['_connecting']=!0x1;try{_0x5b8bea[_0x42c2b1(0x1be)]=null,_0x5b8bea[_0x42c2b1(0x13f)]=null,_0x5b8bea[_0x42c2b1(0x1ea)]=null;}catch{}try{_0x5b8bea[_0x42c2b1(0x207)]<0x2&&_0x5b8bea[_0x42c2b1(0x1a6)]();}catch{}}[_0x468ae4(0x222)](){var _0xb6f8f8=_0x468ae4;clearTimeout(this[_0xb6f8f8(0x18e)]),!(this[_0xb6f8f8(0x1cb)]>=this['_maxConnectAttemptCount'])&&(this[_0xb6f8f8(0x18e)]=setTimeout(()=>{var _0x460439=_0xb6f8f8;this[_0x460439(0x1d4)]||this[_0x460439(0x158)]||(this[_0x460439(0x1a3)](),this['_ws']?.[_0x460439(0x1f5)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this['_reconnectTimeout'][_0xb6f8f8(0x14a)]&&this[_0xb6f8f8(0x18e)][_0xb6f8f8(0x14a)]());}async[_0x468ae4(0x1e4)](_0x4ac0a8){var _0x52ec70=_0x468ae4;try{if(!this[_0x52ec70(0x1ce)])return;this[_0x52ec70(0x224)]&&this['_connectToHostNow'](),(await this[_0x52ec70(0x20b)])[_0x52ec70(0x1e4)](JSON[_0x52ec70(0x193)](_0x4ac0a8));}catch(_0x2a22ed){console[_0x52ec70(0x199)](this[_0x52ec70(0x169)]+':\\x20'+(_0x2a22ed&&_0x2a22ed['message'])),this[_0x52ec70(0x1ce)]=!0x1,this[_0x52ec70(0x222)]();}}};function b(_0xbef482,_0x3eebc6,_0x3c4145,_0x57826e,_0x2cd8a0,_0x1146e6){var _0x3bc4e9=_0x468ae4;let _0x5bad4f=_0x3c4145[_0x3bc4e9(0x1c5)](',')[_0x3bc4e9(0x21d)](_0x1b7d39=>{var _0x5beb3b=_0x3bc4e9;try{_0xbef482[_0x5beb3b(0x192)]||((_0x2cd8a0===_0x5beb3b(0x214)||_0x2cd8a0===_0x5beb3b(0x18b)||_0x2cd8a0===_0x5beb3b(0x183))&&(_0x2cd8a0+=!_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x14e)]?.[_0x5beb3b(0x13b)]&&_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x198)]?.[_0x5beb3b(0x176)]!==_0x5beb3b(0x1e2)?_0x5beb3b(0x150):_0x5beb3b(0x20f)),_0xbef482[_0x5beb3b(0x192)]={'id':+new Date(),'tool':_0x2cd8a0});let _0x22adac=new X(_0xbef482,_0x3eebc6,_0x1b7d39,_0x57826e,_0x1146e6);return _0x22adac[_0x5beb3b(0x1e4)][_0x5beb3b(0x1ca)](_0x22adac);}catch(_0x436f9f){return console['warn'](_0x5beb3b(0x196),_0x436f9f&&_0x436f9f[_0x5beb3b(0x1fe)]),()=>{};}});return _0x17941f=>_0x5bad4f['forEach'](_0x43f965=>_0x43f965(_0x17941f));}function W(_0x338ea5){var _0x245c65=_0x468ae4;let _0x8eb306=function(_0x6dc48d,_0x53d411){return _0x53d411-_0x6dc48d;},_0x373a8b;if(_0x338ea5[_0x245c65(0x172)])_0x373a8b=function(){var _0x4e251f=_0x245c65;return _0x338ea5[_0x4e251f(0x172)][_0x4e251f(0x161)]();};else{if(_0x338ea5['process']&&_0x338ea5[_0x245c65(0x1a9)][_0x245c65(0x221)]&&_0x338ea5[_0x245c65(0x1a9)]?.['env']?.[_0x245c65(0x176)]!==_0x245c65(0x1e2))_0x373a8b=function(){var _0x2dfe9b=_0x245c65;return _0x338ea5[_0x2dfe9b(0x1a9)][_0x2dfe9b(0x221)]();},_0x8eb306=function(_0x2941b4,_0x253864){return 0x3e8*(_0x253864[0x0]-_0x2941b4[0x0])+(_0x253864[0x1]-_0x2941b4[0x1])/0xf4240;};else try{let {performance:_0x41bf49}=require(_0x245c65(0x168));_0x373a8b=function(){var _0x13082a=_0x245c65;return _0x41bf49[_0x13082a(0x161)]();};}catch{_0x373a8b=function(){return+new Date();};}}return{'elapsed':_0x8eb306,'timeStamp':_0x373a8b,'now':()=>Date[_0x245c65(0x161)]()};}function J(_0x2e41b8,_0x5329cb,_0x3b1635){var _0x4f9742=_0x468ae4;if(_0x2e41b8['_consoleNinjaAllowedToStart']!==void 0x0)return _0x2e41b8[_0x4f9742(0x163)];let _0x2b27b8=_0x2e41b8[_0x4f9742(0x1a9)]?.['versions']?.['node']||_0x2e41b8[_0x4f9742(0x1a9)]?.[_0x4f9742(0x198)]?.['NEXT_RUNTIME']===_0x4f9742(0x1e2);return _0x2b27b8&&_0x3b1635==='nuxt'?_0x2e41b8[_0x4f9742(0x163)]=!0x1:_0x2e41b8[_0x4f9742(0x163)]=_0x2b27b8||!_0x5329cb||_0x2e41b8[_0x4f9742(0x175)]?.[_0x4f9742(0x1d8)]&&_0x5329cb[_0x4f9742(0x187)](_0x2e41b8[_0x4f9742(0x175)][_0x4f9742(0x1d8)]),_0x2e41b8[_0x4f9742(0x163)];}function Y(_0x525130,_0x3de134,_0x3e0747,_0x191371){var _0x41497b=_0x468ae4;_0x525130=_0x525130,_0x3de134=_0x3de134,_0x3e0747=_0x3e0747,_0x191371=_0x191371;let _0x3207ca=W(_0x525130),_0x4d3537=_0x3207ca[_0x41497b(0x1fb)],_0x4972a5=_0x3207ca[_0x41497b(0x213)];class _0x16108b{constructor(){var _0x438069=_0x41497b;this[_0x438069(0x1de)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x438069(0x1c3)]=/^(0|[1-9][0-9]*)$/,this[_0x438069(0x13a)]=/'([^\\\\']|\\\\')*'/,this[_0x438069(0x197)]=_0x525130[_0x438069(0x151)],this['_HTMLAllCollection']=_0x525130[_0x438069(0x141)],this['_getOwnPropertyDescriptor']=Object[_0x438069(0x1aa)],this[_0x438069(0x21b)]=Object['getOwnPropertyNames'],this[_0x438069(0x1f1)]=_0x525130[_0x438069(0x1b1)],this['_regExpToString']=RegExp['prototype'][_0x438069(0x226)],this['_dateToString']=Date[_0x438069(0x14c)]['toString'];}['serialize'](_0x446828,_0x30733a,_0x2ae22d,_0x53dc69){var _0x2b360b=_0x41497b,_0x21d02c=this,_0x470947=_0x2ae22d[_0x2b360b(0x16d)];function _0x140217(_0x181c34,_0x4f2899,_0x37e772){var _0x422f76=_0x2b360b;_0x4f2899['type']=_0x422f76(0x19a),_0x4f2899[_0x422f76(0x1b6)]=_0x181c34['message'],_0x284d12=_0x37e772['node'][_0x422f76(0x1d1)],_0x37e772[_0x422f76(0x13b)][_0x422f76(0x1d1)]=_0x4f2899,_0x21d02c[_0x422f76(0x209)](_0x4f2899,_0x37e772);}try{_0x2ae22d[_0x2b360b(0x17d)]++,_0x2ae22d['autoExpand']&&_0x2ae22d['autoExpandPreviousObjects']['push'](_0x30733a);var _0x276736,_0x56c740,_0x5c3443,_0xec81b5,_0x2c9ec8=[],_0x137f9e=[],_0x2342f7,_0xa29e94=this[_0x2b360b(0x1e5)](_0x30733a),_0x12ae1d=_0xa29e94==='array',_0x488add=!0x1,_0x45bb8f=_0xa29e94===_0x2b360b(0x186),_0x2219ef=this[_0x2b360b(0x211)](_0xa29e94),_0x8670ee=this[_0x2b360b(0x204)](_0xa29e94),_0x3ccf0d=_0x2219ef||_0x8670ee,_0x486b40={},_0x259d7b=0x0,_0x161888=!0x1,_0x284d12,_0x57bb95=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2ae22d['depth']){if(_0x12ae1d){if(_0x56c740=_0x30733a[_0x2b360b(0x184)],_0x56c740>_0x2ae22d[_0x2b360b(0x1b3)]){for(_0x5c3443=0x0,_0xec81b5=_0x2ae22d[_0x2b360b(0x1b3)],_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e['push'](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));_0x446828[_0x2b360b(0x182)]=!0x0;}else{for(_0x5c3443=0x0,_0xec81b5=_0x56c740,_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));}_0x2ae22d['autoExpandPropertyCount']+=_0x137f9e['length'];}if(!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94==='undefined')&&!_0x2219ef&&_0xa29e94!=='String'&&_0xa29e94!==_0x2b360b(0x1c7)&&_0xa29e94!==_0x2b360b(0x16e)){var _0x281453=_0x53dc69[_0x2b360b(0x217)]||_0x2ae22d['props'];if(this[_0x2b360b(0x1cc)](_0x30733a)?(_0x276736=0x0,_0x30733a[_0x2b360b(0x205)](function(_0x3606a1){var _0x3a1288=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x3a1288(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x3a1288(0x17c)]&&_0x2ae22d[_0x3a1288(0x16d)]&&_0x2ae22d[_0x3a1288(0x188)]>_0x2ae22d['autoExpandLimit']){_0x161888=!0x0;return;}_0x137f9e[_0x3a1288(0x1f7)](_0x21d02c['_addProperty'](_0x2c9ec8,_0x30733a,_0x3a1288(0x15e),_0x276736++,_0x2ae22d,function(_0x24ad52){return function(){return _0x24ad52;};}(_0x3606a1)));})):this[_0x2b360b(0x1dd)](_0x30733a)&&_0x30733a['forEach'](function(_0xf59664,_0x5d81b2){var _0x2b8ffe=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x2b8ffe(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x2b8ffe(0x17c)]&&_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b8ffe(0x188)]>_0x2ae22d[_0x2b8ffe(0x194)]){_0x161888=!0x0;return;}var _0x18d716=_0x5d81b2[_0x2b8ffe(0x226)]();_0x18d716[_0x2b8ffe(0x184)]>0x64&&(_0x18d716=_0x18d716[_0x2b8ffe(0x17a)](0x0,0x64)+_0x2b8ffe(0x201)),_0x137f9e[_0x2b8ffe(0x1f7)](_0x21d02c[_0x2b8ffe(0x1bf)](_0x2c9ec8,_0x30733a,_0x2b8ffe(0x1ff),_0x18d716,_0x2ae22d,function(_0x59153d){return function(){return _0x59153d;};}(_0xf59664)));}),!_0x488add){try{for(_0x2342f7 in _0x30733a)if(!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7))&&!this[_0x2b360b(0x17b)](_0x30733a,_0x2342f7,_0x2ae22d)){if(_0x259d7b++,_0x2ae22d['autoExpandPropertyCount']++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d['isExpressionToEvaluate']&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d[_0x2b360b(0x188)]>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c['_addObjectProperty'](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}catch{}if(_0x486b40[_0x2b360b(0x1c1)]=!0x0,_0x45bb8f&&(_0x486b40[_0x2b360b(0x1ae)]=!0x0),!_0x161888){var _0x2a9a58=[][_0x2b360b(0x1d5)](this[_0x2b360b(0x21b)](_0x30733a))[_0x2b360b(0x1d5)](this['_getOwnPropertySymbols'](_0x30733a));for(_0x276736=0x0,_0x56c740=_0x2a9a58['length'];_0x276736<_0x56c740;_0x276736++)if(_0x2342f7=_0x2a9a58[_0x276736],!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7[_0x2b360b(0x226)]()))&&!this['_blacklistedProperty'](_0x30733a,_0x2342f7,_0x2ae22d)&&!_0x486b40[_0x2b360b(0x138)+_0x2342f7[_0x2b360b(0x226)]()]){if(_0x259d7b++,_0x2ae22d[_0x2b360b(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d[_0x2b360b(0x17c)]&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d['autoExpandPropertyCount']>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1f4)](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}}}}if(_0x446828[_0x2b360b(0x1d6)]=_0xa29e94,_0x3ccf0d?(_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x14b)](),this['_capIfString'](_0xa29e94,_0x446828,_0x2ae22d,_0x53dc69)):_0xa29e94===_0x2b360b(0x1bd)?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x20d)][_0x2b360b(0x180)](_0x30733a):_0xa29e94==='bigint'?_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x226)]():_0xa29e94==='RegExp'?_0x446828['value']=this[_0x2b360b(0x1ec)]['call'](_0x30733a):_0xa29e94==='symbol'&&this['_Symbol']?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x1f1)][_0x2b360b(0x14c)][_0x2b360b(0x226)]['call'](_0x30733a):!_0x2ae22d[_0x2b360b(0x1a1)]&&!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94===_0x2b360b(0x151))&&(delete _0x446828[_0x2b360b(0x1eb)],_0x446828[_0x2b360b(0x1f9)]=!0x0),_0x161888&&(_0x446828[_0x2b360b(0x19f)]=!0x0),_0x284d12=_0x2ae22d[_0x2b360b(0x13b)][_0x2b360b(0x1d1)],_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x446828,this[_0x2b360b(0x209)](_0x446828,_0x2ae22d),_0x137f9e[_0x2b360b(0x184)]){for(_0x276736=0x0,_0x56c740=_0x137f9e[_0x2b360b(0x184)];_0x276736<_0x56c740;_0x276736++)_0x137f9e[_0x276736](_0x276736);}_0x2c9ec8[_0x2b360b(0x184)]&&(_0x446828['props']=_0x2c9ec8);}catch(_0x330646){_0x140217(_0x330646,_0x446828,_0x2ae22d);}return this[_0x2b360b(0x16a)](_0x30733a,_0x446828),this[_0x2b360b(0x208)](_0x446828,_0x2ae22d),_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x284d12,_0x2ae22d['level']--,_0x2ae22d[_0x2b360b(0x16d)]=_0x470947,_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b360b(0x19b)][_0x2b360b(0x19e)](),_0x446828;}['_getOwnPropertySymbols'](_0x3bd6cc){var _0x2aabad=_0x41497b;return Object[_0x2aabad(0x146)]?Object[_0x2aabad(0x146)](_0x3bd6cc):[];}['_isSet'](_0x30dd32){var _0x358a39=_0x41497b;return!!(_0x30dd32&&_0x525130[_0x358a39(0x15e)]&&this[_0x358a39(0x1fa)](_0x30dd32)===_0x358a39(0x195)&&_0x30dd32['forEach']);}[_0x41497b(0x17b)](_0x20acd5,_0xef50d6,_0x208ddb){var _0x40c71e=_0x41497b;return _0x208ddb[_0x40c71e(0x154)]?typeof _0x20acd5[_0xef50d6]=='function':!0x1;}[_0x41497b(0x1e5)](_0x40567e){var _0xbbe9fb=_0x41497b,_0x103bf4='';return _0x103bf4=typeof _0x40567e,_0x103bf4===_0xbbe9fb(0x157)?this[_0xbbe9fb(0x1fa)](_0x40567e)===_0xbbe9fb(0x1c8)?_0x103bf4='array':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20Date]'?_0x103bf4='date':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20BigInt]'?_0x103bf4=_0xbbe9fb(0x16e):_0x40567e===null?_0x103bf4=_0xbbe9fb(0x1ed):_0x40567e[_0xbbe9fb(0x166)]&&(_0x103bf4=_0x40567e[_0xbbe9fb(0x166)][_0xbbe9fb(0x1c0)]||_0x103bf4):_0x103bf4===_0xbbe9fb(0x151)&&this[_0xbbe9fb(0x181)]&&_0x40567e instanceof this[_0xbbe9fb(0x181)]&&(_0x103bf4=_0xbbe9fb(0x141)),_0x103bf4;}[_0x41497b(0x1fa)](_0x591fa8){var _0x193ba2=_0x41497b;return Object[_0x193ba2(0x14c)][_0x193ba2(0x226)][_0x193ba2(0x180)](_0x591fa8);}[_0x41497b(0x211)](_0x2d794b){var _0x9202ee=_0x41497b;return _0x2d794b==='boolean'||_0x2d794b===_0x9202ee(0x1b9)||_0x2d794b==='number';}[_0x41497b(0x204)](_0x8e0351){var _0x481fda=_0x41497b;return _0x8e0351==='Boolean'||_0x8e0351===_0x481fda(0x155)||_0x8e0351==='Number';}['_addProperty'](_0xc0b08c,_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4){var _0x44c68f=this;return function(_0xb4d76d){var _0x43a249=_0x5e0f,_0x56e822=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1d1)],_0x52f605=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)],_0x107c77=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)];_0x41b47f['node'][_0x43a249(0x136)]=_0x56e822,_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)]=typeof _0x688eff==_0x43a249(0x218)?_0x688eff:_0xb4d76d,_0xc0b08c[_0x43a249(0x1f7)](_0x44c68f['_property'](_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4)),_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)]=_0x107c77,_0x41b47f['node'][_0x43a249(0x1e6)]=_0x52f605;};}['_addObjectProperty'](_0x7740eb,_0x17f789,_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f){var _0x539e4e=_0x41497b,_0x22d1d9=this;return _0x17f789[_0x539e4e(0x138)+_0x339830['toString']()]=!0x0,function(_0x4eca77){var _0x5c2716=_0x539e4e,_0x5a7313=_0x781188['node'][_0x5c2716(0x1d1)],_0x19fa02=_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)],_0x4dc904=_0x781188['node'][_0x5c2716(0x136)];_0x781188['node']['parent']=_0x5a7313,_0x781188['node'][_0x5c2716(0x1e6)]=_0x4eca77,_0x7740eb[_0x5c2716(0x1f7)](_0x22d1d9[_0x5c2716(0x1d3)](_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f)),_0x781188['node'][_0x5c2716(0x136)]=_0x4dc904,_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)]=_0x19fa02;};}['_property'](_0x449db4,_0x3cf735,_0x4ae1e6,_0x4d1363,_0xd6c90a){var _0x367c8e=_0x41497b,_0x5840e3=this;_0xd6c90a||(_0xd6c90a=function(_0x2d1a8c,_0xe71020){return _0x2d1a8c[_0xe71020];});var _0x16329=_0x4ae1e6[_0x367c8e(0x226)](),_0x28a0d3=_0x4d1363[_0x367c8e(0x13e)]||{},_0x1eec82=_0x4d1363[_0x367c8e(0x1a1)],_0x5b35b3=_0x4d1363[_0x367c8e(0x17c)];try{var _0x1c7dac=this[_0x367c8e(0x1dd)](_0x449db4),_0x12de51=_0x16329;_0x1c7dac&&_0x12de51[0x0]==='\\x27'&&(_0x12de51=_0x12de51[_0x367c8e(0x15a)](0x1,_0x12de51[_0x367c8e(0x184)]-0x2));var _0x964819=_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3['_p_'+_0x12de51];_0x964819&&(_0x4d1363['depth']=_0x4d1363[_0x367c8e(0x1a1)]+0x1),_0x4d1363[_0x367c8e(0x17c)]=!!_0x964819;var _0x44d980=typeof _0x4ae1e6=='symbol',_0x1b96f4={'name':_0x44d980||_0x1c7dac?_0x16329:this[_0x367c8e(0x16b)](_0x16329)};if(_0x44d980&&(_0x1b96f4[_0x367c8e(0x145)]=!0x0),!(_0x3cf735===_0x367c8e(0x1a0)||_0x3cf735===_0x367c8e(0x185))){var _0x4f2270=this['_getOwnPropertyDescriptor'](_0x449db4,_0x4ae1e6);if(_0x4f2270&&(_0x4f2270[_0x367c8e(0x1dc)]&&(_0x1b96f4['setter']=!0x0),_0x4f2270[_0x367c8e(0x165)]&&!_0x964819&&!_0x4d1363[_0x367c8e(0x1d2)]))return _0x1b96f4[_0x367c8e(0x144)]=!0x0,this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x44b192;try{_0x44b192=_0xd6c90a(_0x449db4,_0x4ae1e6);}catch(_0x5a13e2){return _0x1b96f4={'name':_0x16329,'type':_0x367c8e(0x19a),'error':_0x5a13e2[_0x367c8e(0x1fe)]},this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x247cc9=this[_0x367c8e(0x1e5)](_0x44b192),_0x11bc37=this['_isPrimitiveType'](_0x247cc9);if(_0x1b96f4[_0x367c8e(0x1d6)]=_0x247cc9,_0x11bc37)this[_0x367c8e(0x1a5)](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0xf8b9b5=_0x367c8e;_0x1b96f4[_0xf8b9b5(0x1eb)]=_0x44b192[_0xf8b9b5(0x14b)](),!_0x964819&&_0x5840e3[_0xf8b9b5(0x1c4)](_0x247cc9,_0x1b96f4,_0x4d1363,{});});else{var _0x2cc5ec=_0x4d1363['autoExpand']&&_0x4d1363[_0x367c8e(0x17d)]<_0x4d1363[_0x367c8e(0x140)]&&_0x4d1363[_0x367c8e(0x19b)][_0x367c8e(0x216)](_0x44b192)<0x0&&_0x247cc9!==_0x367c8e(0x186)&&_0x4d1363[_0x367c8e(0x188)]<_0x4d1363[_0x367c8e(0x194)];_0x2cc5ec||_0x4d1363[_0x367c8e(0x17d)]<_0x1eec82||_0x964819?(this[_0x367c8e(0x15f)](_0x1b96f4,_0x44b192,_0x4d1363,_0x964819||{}),this[_0x367c8e(0x16a)](_0x44b192,_0x1b96f4)):this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0x4910dd=_0x367c8e;_0x247cc9===_0x4910dd(0x1ed)||_0x247cc9==='undefined'||(delete _0x1b96f4[_0x4910dd(0x1eb)],_0x1b96f4[_0x4910dd(0x1f9)]=!0x0);});}return _0x1b96f4;}finally{_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3,_0x4d1363[_0x367c8e(0x1a1)]=_0x1eec82,_0x4d1363[_0x367c8e(0x17c)]=_0x5b35b3;}}[_0x41497b(0x1c4)](_0x138aeb,_0x1bdf22,_0x902338,_0x386dd9){var _0x443fd3=_0x41497b,_0x42ffe2=_0x386dd9['strLength']||_0x902338['strLength'];if((_0x138aeb===_0x443fd3(0x1b9)||_0x138aeb===_0x443fd3(0x155))&&_0x1bdf22[_0x443fd3(0x1eb)]){let _0x1bfed9=_0x1bdf22['value'][_0x443fd3(0x184)];_0x902338[_0x443fd3(0x1b7)]+=_0x1bfed9,_0x902338[_0x443fd3(0x1b7)]>_0x902338[_0x443fd3(0x1f0)]?(_0x1bdf22['capped']='',delete _0x1bdf22['value']):_0x1bfed9>_0x42ffe2&&(_0x1bdf22[_0x443fd3(0x1f9)]=_0x1bdf22[_0x443fd3(0x1eb)][_0x443fd3(0x15a)](0x0,_0x42ffe2),delete _0x1bdf22['value']);}}[_0x41497b(0x1dd)](_0x5dd1cf){var _0x4e6af9=_0x41497b;return!!(_0x5dd1cf&&_0x525130[_0x4e6af9(0x1ff)]&&this[_0x4e6af9(0x1fa)](_0x5dd1cf)===_0x4e6af9(0x1d0)&&_0x5dd1cf['forEach']);}[_0x41497b(0x16b)](_0x1f217b){var _0x235a09=_0x41497b;if(_0x1f217b[_0x235a09(0x1da)](/^\\d+$/))return _0x1f217b;var _0xc79036;try{_0xc79036=JSON[_0x235a09(0x193)](''+_0x1f217b);}catch{_0xc79036='\\x22'+this['_objectToString'](_0x1f217b)+'\\x22';}return _0xc79036[_0x235a09(0x1da)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xc79036=_0xc79036[_0x235a09(0x15a)](0x1,_0xc79036['length']-0x2):_0xc79036=_0xc79036[_0x235a09(0x1cf)](/'/g,'\\x5c\\x27')[_0x235a09(0x1cf)](/\\\\"/g,'\\x22')[_0x235a09(0x1cf)](/(^"|"$)/g,'\\x27'),_0xc79036;}[_0x41497b(0x1a5)](_0x1cb5c5,_0x18f336,_0x49fab1,_0x4b1ea5){var _0x186320=_0x41497b;this[_0x186320(0x209)](_0x1cb5c5,_0x18f336),_0x4b1ea5&&_0x4b1ea5(),this['_additionalMetadata'](_0x49fab1,_0x1cb5c5),this['_treeNodePropertiesAfterFullValue'](_0x1cb5c5,_0x18f336);}[_0x41497b(0x209)](_0x264f02,_0x38e634){var _0x5d44eb=_0x41497b;this[_0x5d44eb(0x212)](_0x264f02,_0x38e634),this[_0x5d44eb(0x1c2)](_0x264f02,_0x38e634),this['_setNodeExpressionPath'](_0x264f02,_0x38e634),this['_setNodePermissions'](_0x264f02,_0x38e634);}[_0x41497b(0x212)](_0x25af19,_0x14f38e){}[_0x41497b(0x1c2)](_0x5d77ea,_0xa38b0b){}[_0x41497b(0x1a2)](_0x1dd598,_0x36d7bb){}[_0x41497b(0x1cd)](_0x51064b){var _0x1c6615=_0x41497b;return _0x51064b===this[_0x1c6615(0x197)];}[_0x41497b(0x208)](_0x50abf2,_0x440584){var _0x124235=_0x41497b;this[_0x124235(0x1a2)](_0x50abf2,_0x440584),this[_0x124235(0x190)](_0x50abf2),_0x440584[_0x124235(0x219)]&&this[_0x124235(0x1e1)](_0x50abf2),this[_0x124235(0x1a8)](_0x50abf2,_0x440584),this['_addLoadNode'](_0x50abf2,_0x440584),this[_0x124235(0x16f)](_0x50abf2);}[_0x41497b(0x16a)](_0x149285,_0x5f4a23){var _0x14ba24=_0x41497b;let _0x306082;try{_0x525130[_0x14ba24(0x152)]&&(_0x306082=_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)],_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)]=function(){}),_0x149285&&typeof _0x149285[_0x14ba24(0x184)]=='number'&&(_0x5f4a23[_0x14ba24(0x184)]=_0x149285[_0x14ba24(0x184)]);}catch{}finally{_0x306082&&(_0x525130['console'][_0x14ba24(0x1b6)]=_0x306082);}if(_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x218)||_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x15b)){if(isNaN(_0x5f4a23['value']))_0x5f4a23[_0x14ba24(0x1ef)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];else switch(_0x5f4a23['value']){case Number['POSITIVE_INFINITY']:_0x5f4a23['positiveInfinity']=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case Number[_0x14ba24(0x1b5)]:_0x5f4a23[_0x14ba24(0x1a7)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case 0x0:this[_0x14ba24(0x203)](_0x5f4a23[_0x14ba24(0x1eb)])&&(_0x5f4a23[_0x14ba24(0x18c)]=!0x0);break;}}else _0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x186)&&typeof _0x149285[_0x14ba24(0x1c0)]==_0x14ba24(0x1b9)&&_0x149285[_0x14ba24(0x1c0)]&&_0x5f4a23[_0x14ba24(0x1c0)]&&_0x149285[_0x14ba24(0x1c0)]!==_0x5f4a23[_0x14ba24(0x1c0)]&&(_0x5f4a23['funcName']=_0x149285[_0x14ba24(0x1c0)]);}['_isNegativeZero'](_0x5b1353){var _0x4a752f=_0x41497b;return 0x1/_0x5b1353===Number[_0x4a752f(0x1b5)];}[_0x41497b(0x1e1)](_0x56cb22){var _0x2d9e52=_0x41497b;!_0x56cb22[_0x2d9e52(0x217)]||!_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x184)]||_0x56cb22['type']===_0x2d9e52(0x1a0)||_0x56cb22['type']===_0x2d9e52(0x1ff)||_0x56cb22[_0x2d9e52(0x1d6)]===_0x2d9e52(0x15e)||_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x1e0)](function(_0x348d85,_0x43558b){var _0x4e5041=_0x2d9e52,_0x4fe932=_0x348d85[_0x4e5041(0x1c0)][_0x4e5041(0x164)](),_0x16e14c=_0x43558b[_0x4e5041(0x1c0)]['toLowerCase']();return _0x4fe932<_0x16e14c?-0x1:_0x4fe932>_0x16e14c?0x1:0x0;});}['_addFunctionsNode'](_0x4a7887,_0x40201b){var _0x44116f=_0x41497b;if(!(_0x40201b[_0x44116f(0x154)]||!_0x4a7887['props']||!_0x4a7887[_0x44116f(0x217)]['length'])){for(var _0x1db19d=[],_0x29b4dd=[],_0x120e34=0x0,_0x2a7e9d=_0x4a7887[_0x44116f(0x217)][_0x44116f(0x184)];_0x120e34<_0x2a7e9d;_0x120e34++){var _0x5d53d0=_0x4a7887[_0x44116f(0x217)][_0x120e34];_0x5d53d0['type']==='function'?_0x1db19d[_0x44116f(0x1f7)](_0x5d53d0):_0x29b4dd[_0x44116f(0x1f7)](_0x5d53d0);}if(!(!_0x29b4dd['length']||_0x1db19d['length']<=0x1)){_0x4a7887[_0x44116f(0x217)]=_0x29b4dd;var _0x16d9b1={'functionsNode':!0x0,'props':_0x1db19d};this[_0x44116f(0x212)](_0x16d9b1,_0x40201b),this[_0x44116f(0x1a2)](_0x16d9b1,_0x40201b),this['_setNodeExpandableState'](_0x16d9b1),this[_0x44116f(0x143)](_0x16d9b1,_0x40201b),_0x16d9b1['id']+='\\x20f',_0x4a7887[_0x44116f(0x217)][_0x44116f(0x18d)](_0x16d9b1);}}}['_addLoadNode'](_0x4774d4,_0x50e0c9){}['_setNodeExpandableState'](_0x368709){}[_0x41497b(0x19c)](_0x14907c){var _0x6ad87a=_0x41497b;return Array[_0x6ad87a(0x1c6)](_0x14907c)||typeof _0x14907c=='object'&&this['_objectToString'](_0x14907c)===_0x6ad87a(0x1c8);}[_0x41497b(0x143)](_0x26716f,_0x467fae){}[_0x41497b(0x16f)](_0xfaa8f6){var _0x492341=_0x41497b;delete _0xfaa8f6['_hasSymbolPropertyOnItsPath'],delete _0xfaa8f6[_0x492341(0x1bb)],delete _0xfaa8f6[_0x492341(0x170)];}[_0x41497b(0x1b2)](_0x44160d,_0x5eca73){}}let _0x4e192b=new _0x16108b(),_0x22f72a={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x437449={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5dbd72(_0x438614,_0x1daab2,_0x2a8ba2,_0x327d8f,_0x7ad510,_0x126ab6){var _0x25bee5=_0x41497b;let _0x128d1a,_0x17066d;try{_0x17066d=_0x4972a5(),_0x128d1a=_0x3e0747[_0x1daab2],!_0x128d1a||_0x17066d-_0x128d1a['ts']>0x1f4&&_0x128d1a[_0x25bee5(0x206)]&&_0x128d1a['time']/_0x128d1a['count']<0x64?(_0x3e0747[_0x1daab2]=_0x128d1a={'count':0x0,'time':0x0,'ts':_0x17066d},_0x3e0747[_0x25bee5(0x1af)]={}):_0x17066d-_0x3e0747[_0x25bee5(0x1af)]['ts']>0x32&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x153)]/_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]<0x64&&(_0x3e0747[_0x25bee5(0x1af)]={});let _0x4b3d02=[],_0x27388c=_0x128d1a[_0x25bee5(0x1c9)]||_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]?_0x437449:_0x22f72a,_0x2adebe=_0x1c3da5=>{var _0xd98901=_0x25bee5;let _0x16b660={};return _0x16b660[_0xd98901(0x217)]=_0x1c3da5[_0xd98901(0x217)],_0x16b660[_0xd98901(0x1b3)]=_0x1c3da5['elements'],_0x16b660[_0xd98901(0x173)]=_0x1c3da5['strLength'],_0x16b660[_0xd98901(0x1f0)]=_0x1c3da5[_0xd98901(0x1f0)],_0x16b660[_0xd98901(0x194)]=_0x1c3da5['autoExpandLimit'],_0x16b660[_0xd98901(0x140)]=_0x1c3da5[_0xd98901(0x140)],_0x16b660['sortProps']=!0x1,_0x16b660['noFunctions']=!_0x3de134,_0x16b660[_0xd98901(0x1a1)]=0x1,_0x16b660[_0xd98901(0x17d)]=0x0,_0x16b660[_0xd98901(0x225)]='root_exp_id',_0x16b660[_0xd98901(0x20a)]=_0xd98901(0x162),_0x16b660[_0xd98901(0x16d)]=!0x0,_0x16b660[_0xd98901(0x19b)]=[],_0x16b660[_0xd98901(0x188)]=0x0,_0x16b660[_0xd98901(0x1d2)]=!0x0,_0x16b660[_0xd98901(0x1b7)]=0x0,_0x16b660['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x16b660;};for(var _0x2faef3=0x0;_0x2faef3<_0x7ad510[_0x25bee5(0x184)];_0x2faef3++)_0x4b3d02['push'](_0x4e192b[_0x25bee5(0x15f)]({'timeNode':_0x438614===_0x25bee5(0x153)||void 0x0},_0x7ad510[_0x2faef3],_0x2adebe(_0x27388c),{}));if(_0x438614===_0x25bee5(0x1e9)){let _0x3bf8d2=Error['stackTraceLimit'];try{Error[_0x25bee5(0x137)]=0x1/0x0,_0x4b3d02[_0x25bee5(0x1f7)](_0x4e192b[_0x25bee5(0x15f)]({'stackNode':!0x0},new Error()[_0x25bee5(0x21e)],_0x2adebe(_0x27388c),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3bf8d2;}}return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':_0x4b3d02,'id':_0x1daab2,'context':_0x126ab6}]};}catch(_0x4e713a){return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':[{'type':_0x25bee5(0x19a),'error':_0x4e713a&&_0x4e713a[_0x25bee5(0x1fe)]}],'id':_0x1daab2,'context':_0x126ab6}]};}finally{try{if(_0x128d1a&&_0x17066d){let _0x118727=_0x4972a5();_0x128d1a['count']++,_0x128d1a[_0x25bee5(0x153)]+=_0x4d3537(_0x17066d,_0x118727),_0x128d1a['ts']=_0x118727,_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]++,_0x3e0747['hits']['time']+=_0x4d3537(_0x17066d,_0x118727),_0x3e0747[_0x25bee5(0x1af)]['ts']=_0x118727,(_0x128d1a[_0x25bee5(0x206)]>0x32||_0x128d1a[_0x25bee5(0x153)]>0x64)&&(_0x128d1a[_0x25bee5(0x1c9)]=!0x0),(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]>0x3e8||_0x3e0747[_0x25bee5(0x1af)]['time']>0x12c)&&(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]=!0x0);}}catch{}}}return _0x5dbd72;}((_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x42ded8,_0x119988,_0x351f5d,_0x3c71d2,_0x599f1f)=>{var _0x4879a8=_0x468ae4;if(_0x3438aa[_0x4879a8(0x191)])return _0x3438aa[_0x4879a8(0x191)];if(!J(_0x3438aa,_0x351f5d,_0x10e2cd))return _0x3438aa[_0x4879a8(0x191)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3438aa[_0x4879a8(0x191)];let _0x415dbe=W(_0x3438aa),_0x4c54fc=_0x415dbe[_0x4879a8(0x1fb)],_0x46d3b7=_0x415dbe['timeStamp'],_0x474dcb=_0x415dbe[_0x4879a8(0x161)],_0x44cf82={'hits':{},'ts':{}},_0x38e5f5=Y(_0x3438aa,_0x3c71d2,_0x44cf82,_0x42ded8),_0x31da8e=_0x2056e1=>{_0x44cf82['ts'][_0x2056e1]=_0x46d3b7();},_0x6c8078=(_0x4e0052,_0x17a019)=>{var _0x3061d4=_0x4879a8;let _0x5a32fc=_0x44cf82['ts'][_0x17a019];if(delete _0x44cf82['ts'][_0x17a019],_0x5a32fc){let _0x1c412e=_0x4c54fc(_0x5a32fc,_0x46d3b7());_0x18783d(_0x38e5f5(_0x3061d4(0x153),_0x4e0052,_0x474dcb(),_0xd23236,[_0x1c412e],_0x17a019));}},_0x13d552=_0x45a62f=>_0xf5a5a5=>{var _0xa4f039=_0x4879a8;try{_0x31da8e(_0xf5a5a5),_0x45a62f(_0xf5a5a5);}finally{_0x3438aa[_0xa4f039(0x152)]['time']=_0x45a62f;}},_0x133c7e=_0x59e399=>_0x53d059=>{var _0x2495c1=_0x4879a8;try{let [_0x1c40fe,_0xb50c66]=_0x53d059[_0x2495c1(0x1c5)](_0x2495c1(0x14d));_0x6c8078(_0xb50c66,_0x1c40fe),_0x59e399(_0x1c40fe);}finally{_0x3438aa['console'][_0x2495c1(0x13c)]=_0x59e399;}};_0x3438aa[_0x4879a8(0x191)]={'consoleLog':(_0x14d09b,_0x44b315)=>{var _0x3f47dd=_0x4879a8;_0x3438aa[_0x3f47dd(0x152)][_0x3f47dd(0x14f)]['name']!==_0x3f47dd(0x1ac)&&_0x18783d(_0x38e5f5(_0x3f47dd(0x14f),_0x14d09b,_0x474dcb(),_0xd23236,_0x44b315));},'consoleTrace':(_0x1463c7,_0x391847)=>{var _0x599589=_0x4879a8;_0x3438aa[_0x599589(0x152)][_0x599589(0x14f)][_0x599589(0x1c0)]!=='disabledTrace'&&_0x18783d(_0x38e5f5(_0x599589(0x1e9),_0x1463c7,_0x474dcb(),_0xd23236,_0x391847));},'consoleTime':()=>{var _0x21c121=_0x4879a8;_0x3438aa['console'][_0x21c121(0x153)]=_0x13d552(_0x3438aa[_0x21c121(0x152)][_0x21c121(0x153)]);},'consoleTimeEnd':()=>{var _0x424c49=_0x4879a8;_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]=_0x133c7e(_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]);},'autoLog':(_0x503de2,_0x26ac93)=>{var _0x49b701=_0x4879a8;_0x18783d(_0x38e5f5(_0x49b701(0x14f),_0x26ac93,_0x474dcb(),_0xd23236,[_0x503de2]));},'autoLogMany':(_0x5d3be8,_0x2b33a5)=>{_0x18783d(_0x38e5f5('log',_0x5d3be8,_0x474dcb(),_0xd23236,_0x2b33a5));},'autoTrace':(_0x45771f,_0xa46292)=>{var _0x1edfa6=_0x4879a8;_0x18783d(_0x38e5f5(_0x1edfa6(0x1e9),_0xa46292,_0x474dcb(),_0xd23236,[_0x45771f]));},'autoTraceMany':(_0x58a524,_0x4309ca)=>{var _0xfdebab=_0x4879a8;_0x18783d(_0x38e5f5(_0xfdebab(0x1e9),_0x58a524,_0x474dcb(),_0xd23236,_0x4309ca));},'autoTime':(_0x2ec472,_0x3e8497,_0x557ad3)=>{_0x31da8e(_0x557ad3);},'autoTimeEnd':(_0x590e39,_0x477199,_0x1178b4)=>{_0x6c8078(_0x477199,_0x1178b4);},'coverage':_0x40869a=>{var _0x431076=_0x4879a8;_0x18783d({'method':_0x431076(0x18f),'version':_0x42ded8,'args':[{'id':_0x40869a}]});}};let _0x18783d=b(_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x599f1f),_0xd23236=_0x3438aa['_console_ninja_session'];return _0x3438aa[_0x4879a8(0x191)];})(globalThis,_0x468ae4(0x147),_0x468ae4(0x167),_0x468ae4(0x15c),'remix','1.0.0',_0x468ae4(0x1a4),_0x468ae4(0x1d9),_0x468ae4(0x148),_0x468ae4(0x1db));`);
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), navigation = [];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  let { user } = (0, import_react11.useLoaderData)(), isAdmin = (user == null ? void 0 : user.role) === "admin";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react10.Disclosure,
    {
      as: "nav",
      className: "bg-white dark:bg-gray-900  w-full z-20  border-b border-gray-200 dark:border-gray-600  header",
      children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto  px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-1 items-center gap-2 sm:items-stretch sm:justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_react11.NavLink,
              {
                to: "/",
                className: ({ isActive, isPending }) => "h-8 w-auto text-gray-300 flex gap-2 items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "img",
                    {
                      src: "/favicon/favicon.png",
                      className: "h-full object-contain",
                      alt: "logo"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/component/Header.tsx",
                      lineNumber: 35,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 dark:text-white text-slate-600 sm:truncate sm:text-3xl sm:tracking-tight", children: "Pecha Tools" }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex space-x-4", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                lineNumber: 49,
                columnNumber: 23
              },
              this
            )) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/component/Header.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu.Button, { className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 71,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                fileName: "app/component/Header.tsx",
                lineNumber: 72,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                  lineNumber: 73,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/component/Header.tsx",
              lineNumber: 70,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/component/Header.tsx",
              lineNumber: 69,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_react10.Transition,
              {
                as: import_react9.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                      lineNumber: 93,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 91,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                      lineNumber: 104,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 102,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                      lineNumber: 118,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/component/Header.tsx",
                    lineNumber: 116,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/component/Header.tsx",
                  lineNumber: 90,
                  columnNumber: 23
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/component/Header.tsx",
                lineNumber: 81,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/component/Header.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Login, {}, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/component/Header.tsx",
            lineNumber: 66,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            lineNumber: 142,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/Header.tsx",
          lineNumber: 139,
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader = async ({ request, params }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/demo.$tool.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "iframe-container", children: [
      !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Loading, {}, void 0, !1, {
        fileName: "app/routes/demo.$tool.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("iframe", { src: url, onLoad: onLoadFunction, ref: iframeRef }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let user = await getUserSession(request);
  user || (0, import_node4.redirect)("/");
  let toolname = params.tool, toolList2 = await getCombineTools(user == null ? void 0 : user.email);
  if (toolList2.find((d) => d.name === toolname)) {
    let filtered = toolList2.filter((tool) => tool.name === toolname), url = filtered[0].url;
    return filtered[0].url.includes("session") || (console.log(...oo_oo3("632208850_18_6_18_22_4", url)), url = filtered[0].url + "?session=" + (user == null ? void 0 : user.email)), {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/tool.$tool.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "iframe-container", children: [
      !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Loading2, {}, void 0, !1, {
        fileName: "app/routes/tool.$tool.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("iframe", { src: url, onLoad: onLoadFunction, ref: iframeRef }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x8758(){var _0x116b2f=['276OjdwrJ','\\x20server','method','_isPrimitiveType','_setNodeId','timeStamp','next.js','_disposeWebsocket','indexOf','props','number','sortProps','getPrototypeOf','_getOwnPropertyNames','default','map','stack','global','test','hrtime','_attemptToReconnectShortly','data','_allowedToConnectOnSend','expId','toString','parent','stackTraceLimit','_p_','_inNextEdge','_quotedRegExp','node','timeEnd','ws://','expressionsToEvaluate','onerror','autoExpandMaxDepth','HTMLAllCollection','84EOetaM','_setNodePermissions','getter','symbol','getOwnPropertySymbols','127.0.0.1','','4220358ybUlOI','unref','valueOf','prototype',':logPointId:','versions','log','\\x20browser','undefined','console','time','noFunctions','String','16ZevhMD','object','_connecting','ws/index.js','substr','Number',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.250\\\\node_modules",'gateway.docker.internal','Set','serialize','_inBrowser','now','root_exp','_consoleNinjaAllowedToStart','toLowerCase','get','constructor','63933','perf_hooks','_sendErrorMessage','_additionalMetadata','_propertyName','15300950fCDtmX','autoExpand','bigint','_cleanNode','_hasMapOnItsPath','then','performance','strLength','_maxConnectAttemptCount','location','NEXT_RUNTIME','nodeModules','1242XeaCrh','pathToFileURL','slice','_blacklistedProperty','isExpressionToEvaluate','level','getWebSocketClass','reload','call','_HTMLAllCollection','cappedElements','astro','length','Error','function','includes','autoExpandPropertyCount','port','dockerizedApp','remix','negativeZero','unshift','_reconnectTimeout','coverage','_setNodeExpandableState','_console_ninja','_console_ninja_session','stringify','autoExpandLimit','[object\\x20Set]','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_undefined','env','warn','unknown','autoExpandPreviousObjects','_isArray','join','pop','cappedProps','array','depth','_setNodeLabel','_connectToHostNow','1699002254970','_processTreeNodeResult','close','negativeInfinity','_addFunctionsNode','process','getOwnPropertyDescriptor','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','disabledLog','_WebSocketClass','_p_name','hits','4535063cotkug','Symbol','_setNodeExpressionPath','elements','create','NEGATIVE_INFINITY','error','allStrLength','defineProperty','string','host','_hasSetOnItsPath','4157920JnmBUb','date','onclose','_addProperty','name','_p_length','_setNodeQueryPath','_numberRegExp','_capIfString','split','isArray','Buffer','[object\\x20Array]','reduceLimits','bind','_connectAttemptCount','_isSet','_isUndefined','_allowedToSend','replace','[object\\x20Map]','current','resolveGetters','_property','_connected','concat','type','enumerable','hostname',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.72.223"],'match','','set','_isMap','_keyStrRegExp','11vZqoow','sort','_sortProps','edge','_socket','send','_type','index','_webSocketErrorDocsLink','4kUNdku','trace','onopen','value','_regExpToString','null','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','nan','totalStrLength','_Symbol','__es'+'Module','hasOwnProperty','_addObjectProperty','catch','4771593FCAHrq','push','500436qgsoCG','capped','_objectToString','elapsed','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_WebSocket','message','Map','path','...','WebSocket','_isNegativeZero','_isPrimitiveWrapperType','forEach','count','readyState','_treeNodePropertiesAfterFullValue','_treeNodePropertiesBeforeFullValue','rootExpression','_ws','24AWcTkA','_dateToString'];_0x8758=function(){return _0x116b2f;};return _0x8758();}var _0x468ae4=_0x5e0f;(function(_0x19c35e,_0x513952){var _0x388241=_0x5e0f,_0x2b9961=_0x19c35e();while(!![]){try{var _0x133c38=-parseInt(_0x388241(0x178))/0x1*(-parseInt(_0x388241(0x20e))/0x2)+parseInt(_0x388241(0x149))/0x3*(-parseInt(_0x388241(0x1e8))/0x4)+parseInt(_0x388241(0x1bc))/0x5+parseInt(_0x388241(0x1f8))/0x6*(parseInt(_0x388241(0x142))/0x7)+-parseInt(_0x388241(0x156))/0x8*(-parseInt(_0x388241(0x1f6))/0x9)+parseInt(_0x388241(0x16c))/0xa*(-parseInt(_0x388241(0x1df))/0xb)+-parseInt(_0x388241(0x20c))/0xc*(-parseInt(_0x388241(0x1b0))/0xd);if(_0x133c38===_0x513952)break;else _0x2b9961['push'](_0x2b9961['shift']());}catch(_0xfab22e){_0x2b9961['push'](_0x2b9961['shift']());}}}(_0x8758,0xc96c3));function _0x5e0f(_0x1ca9e4,_0x2d35f4){var _0x87582c=_0x8758();return _0x5e0f=function(_0x5e0fa9,_0x46d96f){_0x5e0fa9=_0x5e0fa9-0x136;var _0x4ae24e=_0x87582c[_0x5e0fa9];return _0x4ae24e;},_0x5e0f(_0x1ca9e4,_0x2d35f4);}var j=Object[_0x468ae4(0x1b4)],H=Object[_0x468ae4(0x1b8)],G=Object['getOwnPropertyDescriptor'],ee=Object['getOwnPropertyNames'],te=Object[_0x468ae4(0x21a)],ne=Object[_0x468ae4(0x14c)][_0x468ae4(0x1f3)],re=(_0x3aed5c,_0x1ec488,_0x43434a,_0x3ee091)=>{var _0x2359dd=_0x468ae4;if(_0x1ec488&&typeof _0x1ec488==_0x2359dd(0x157)||typeof _0x1ec488==_0x2359dd(0x186)){for(let _0x51d089 of ee(_0x1ec488))!ne[_0x2359dd(0x180)](_0x3aed5c,_0x51d089)&&_0x51d089!==_0x43434a&&H(_0x3aed5c,_0x51d089,{'get':()=>_0x1ec488[_0x51d089],'enumerable':!(_0x3ee091=G(_0x1ec488,_0x51d089))||_0x3ee091[_0x2359dd(0x1d7)]});}return _0x3aed5c;},x=(_0x628118,_0x4f9ba5,_0x272a4b)=>(_0x272a4b=_0x628118!=null?j(te(_0x628118)):{},re(_0x4f9ba5||!_0x628118||!_0x628118[_0x468ae4(0x1f2)]?H(_0x272a4b,_0x468ae4(0x21c),{'value':_0x628118,'enumerable':!0x0}):_0x272a4b,_0x628118)),X=class{constructor(_0xdb0769,_0x37c952,_0x36f4d1,_0x5f0fed,_0x134033){var _0x30979a=_0x468ae4;this[_0x30979a(0x21f)]=_0xdb0769,this[_0x30979a(0x1ba)]=_0x37c952,this[_0x30979a(0x189)]=_0x36f4d1,this[_0x30979a(0x177)]=_0x5f0fed,this[_0x30979a(0x18a)]=_0x134033,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x30979a(0x1d4)]=!0x1,this[_0x30979a(0x158)]=!0x1,this['_inNextEdge']=_0xdb0769[_0x30979a(0x1a9)]?.[_0x30979a(0x198)]?.['NEXT_RUNTIME']===_0x30979a(0x1e2),this[_0x30979a(0x160)]=!this['global'][_0x30979a(0x1a9)]?.[_0x30979a(0x14e)]?.[_0x30979a(0x13b)]&&!this[_0x30979a(0x139)],this[_0x30979a(0x1ad)]=null,this['_connectAttemptCount']=0x0,this[_0x30979a(0x174)]=0x14,this[_0x30979a(0x1e7)]='https://tinyurl.com/37x8b79t',this[_0x30979a(0x169)]=(this['_inBrowser']?_0x30979a(0x1ab):_0x30979a(0x1ee))+this[_0x30979a(0x1e7)];}async[_0x468ae4(0x17e)](){var _0x262165=_0x468ae4;if(this[_0x262165(0x1ad)])return this[_0x262165(0x1ad)];let _0x31bef4;if(this[_0x262165(0x160)]||this[_0x262165(0x139)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x202)];else{if(this[_0x262165(0x21f)][_0x262165(0x1a9)]?.[_0x262165(0x1fd)])_0x31bef4=this[_0x262165(0x21f)][_0x262165(0x1a9)]?.['_WebSocket'];else try{let _0x46e5b1=await import(_0x262165(0x200));_0x31bef4=(await import((await import('url'))[_0x262165(0x179)](_0x46e5b1[_0x262165(0x19d)](this[_0x262165(0x177)],_0x262165(0x159)))[_0x262165(0x226)]()))[_0x262165(0x21c)];}catch{try{_0x31bef4=require(require(_0x262165(0x200))[_0x262165(0x19d)](this['nodeModules'],'ws'));}catch{throw new Error(_0x262165(0x1fc));}}}return this[_0x262165(0x1ad)]=_0x31bef4,_0x31bef4;}[_0x468ae4(0x1a3)](){var _0x50f7f1=_0x468ae4;this[_0x50f7f1(0x158)]||this[_0x50f7f1(0x1d4)]||this[_0x50f7f1(0x1cb)]>=this[_0x50f7f1(0x174)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x50f7f1(0x158)]=!0x0,this[_0x50f7f1(0x1cb)]++,this[_0x50f7f1(0x20b)]=new Promise((_0x2c6b01,_0x94cee8)=>{var _0x2aacad=_0x50f7f1;this['getWebSocketClass']()['then'](_0x2a20e1=>{var _0x60acb3=_0x5e0f;let _0x3953b0=new _0x2a20e1(_0x60acb3(0x13d)+(!this['_inBrowser']&&this['dockerizedApp']?_0x60acb3(0x15d):this[_0x60acb3(0x1ba)])+':'+this[_0x60acb3(0x189)]);_0x3953b0[_0x60acb3(0x13f)]=()=>{var _0x17553a=_0x60acb3;this[_0x17553a(0x1ce)]=!0x1,this['_disposeWebsocket'](_0x3953b0),this[_0x17553a(0x222)](),_0x94cee8(new Error('logger\\x20websocket\\x20error'));},_0x3953b0['onopen']=()=>{var _0x41664d=_0x60acb3;this[_0x41664d(0x160)]||_0x3953b0[_0x41664d(0x1e3)]&&_0x3953b0[_0x41664d(0x1e3)][_0x41664d(0x14a)]&&_0x3953b0['_socket']['unref'](),_0x2c6b01(_0x3953b0);},_0x3953b0[_0x60acb3(0x1be)]=()=>{var _0x2386b3=_0x60acb3;this[_0x2386b3(0x224)]=!0x0,this[_0x2386b3(0x215)](_0x3953b0),this['_attemptToReconnectShortly']();},_0x3953b0['onmessage']=_0x427fe2=>{var _0x4a5bed=_0x60acb3;try{_0x427fe2&&_0x427fe2[_0x4a5bed(0x223)]&&this[_0x4a5bed(0x160)]&&JSON['parse'](_0x427fe2[_0x4a5bed(0x223)])[_0x4a5bed(0x210)]===_0x4a5bed(0x17f)&&this[_0x4a5bed(0x21f)]['location'][_0x4a5bed(0x17f)]();}catch{}};})[_0x2aacad(0x171)](_0x25fede=>(this[_0x2aacad(0x1d4)]=!0x0,this[_0x2aacad(0x158)]=!0x1,this[_0x2aacad(0x224)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x25fede))[_0x2aacad(0x1f5)](_0x54cd53=>(this['_connected']=!0x1,this[_0x2aacad(0x158)]=!0x1,console[_0x2aacad(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x2aacad(0x1e7)]),_0x94cee8(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x54cd53&&_0x54cd53[_0x2aacad(0x1fe)])))));}));}['_disposeWebsocket'](_0x5b8bea){var _0x42c2b1=_0x468ae4;this[_0x42c2b1(0x1d4)]=!0x1,this['_connecting']=!0x1;try{_0x5b8bea[_0x42c2b1(0x1be)]=null,_0x5b8bea[_0x42c2b1(0x13f)]=null,_0x5b8bea[_0x42c2b1(0x1ea)]=null;}catch{}try{_0x5b8bea[_0x42c2b1(0x207)]<0x2&&_0x5b8bea[_0x42c2b1(0x1a6)]();}catch{}}[_0x468ae4(0x222)](){var _0xb6f8f8=_0x468ae4;clearTimeout(this[_0xb6f8f8(0x18e)]),!(this[_0xb6f8f8(0x1cb)]>=this['_maxConnectAttemptCount'])&&(this[_0xb6f8f8(0x18e)]=setTimeout(()=>{var _0x460439=_0xb6f8f8;this[_0x460439(0x1d4)]||this[_0x460439(0x158)]||(this[_0x460439(0x1a3)](),this['_ws']?.[_0x460439(0x1f5)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this['_reconnectTimeout'][_0xb6f8f8(0x14a)]&&this[_0xb6f8f8(0x18e)][_0xb6f8f8(0x14a)]());}async[_0x468ae4(0x1e4)](_0x4ac0a8){var _0x52ec70=_0x468ae4;try{if(!this[_0x52ec70(0x1ce)])return;this[_0x52ec70(0x224)]&&this['_connectToHostNow'](),(await this[_0x52ec70(0x20b)])[_0x52ec70(0x1e4)](JSON[_0x52ec70(0x193)](_0x4ac0a8));}catch(_0x2a22ed){console[_0x52ec70(0x199)](this[_0x52ec70(0x169)]+':\\x20'+(_0x2a22ed&&_0x2a22ed['message'])),this[_0x52ec70(0x1ce)]=!0x1,this[_0x52ec70(0x222)]();}}};function b(_0xbef482,_0x3eebc6,_0x3c4145,_0x57826e,_0x2cd8a0,_0x1146e6){var _0x3bc4e9=_0x468ae4;let _0x5bad4f=_0x3c4145[_0x3bc4e9(0x1c5)](',')[_0x3bc4e9(0x21d)](_0x1b7d39=>{var _0x5beb3b=_0x3bc4e9;try{_0xbef482[_0x5beb3b(0x192)]||((_0x2cd8a0===_0x5beb3b(0x214)||_0x2cd8a0===_0x5beb3b(0x18b)||_0x2cd8a0===_0x5beb3b(0x183))&&(_0x2cd8a0+=!_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x14e)]?.[_0x5beb3b(0x13b)]&&_0xbef482[_0x5beb3b(0x1a9)]?.[_0x5beb3b(0x198)]?.[_0x5beb3b(0x176)]!==_0x5beb3b(0x1e2)?_0x5beb3b(0x150):_0x5beb3b(0x20f)),_0xbef482[_0x5beb3b(0x192)]={'id':+new Date(),'tool':_0x2cd8a0});let _0x22adac=new X(_0xbef482,_0x3eebc6,_0x1b7d39,_0x57826e,_0x1146e6);return _0x22adac[_0x5beb3b(0x1e4)][_0x5beb3b(0x1ca)](_0x22adac);}catch(_0x436f9f){return console['warn'](_0x5beb3b(0x196),_0x436f9f&&_0x436f9f[_0x5beb3b(0x1fe)]),()=>{};}});return _0x17941f=>_0x5bad4f['forEach'](_0x43f965=>_0x43f965(_0x17941f));}function W(_0x338ea5){var _0x245c65=_0x468ae4;let _0x8eb306=function(_0x6dc48d,_0x53d411){return _0x53d411-_0x6dc48d;},_0x373a8b;if(_0x338ea5[_0x245c65(0x172)])_0x373a8b=function(){var _0x4e251f=_0x245c65;return _0x338ea5[_0x4e251f(0x172)][_0x4e251f(0x161)]();};else{if(_0x338ea5['process']&&_0x338ea5[_0x245c65(0x1a9)][_0x245c65(0x221)]&&_0x338ea5[_0x245c65(0x1a9)]?.['env']?.[_0x245c65(0x176)]!==_0x245c65(0x1e2))_0x373a8b=function(){var _0x2dfe9b=_0x245c65;return _0x338ea5[_0x2dfe9b(0x1a9)][_0x2dfe9b(0x221)]();},_0x8eb306=function(_0x2941b4,_0x253864){return 0x3e8*(_0x253864[0x0]-_0x2941b4[0x0])+(_0x253864[0x1]-_0x2941b4[0x1])/0xf4240;};else try{let {performance:_0x41bf49}=require(_0x245c65(0x168));_0x373a8b=function(){var _0x13082a=_0x245c65;return _0x41bf49[_0x13082a(0x161)]();};}catch{_0x373a8b=function(){return+new Date();};}}return{'elapsed':_0x8eb306,'timeStamp':_0x373a8b,'now':()=>Date[_0x245c65(0x161)]()};}function J(_0x2e41b8,_0x5329cb,_0x3b1635){var _0x4f9742=_0x468ae4;if(_0x2e41b8['_consoleNinjaAllowedToStart']!==void 0x0)return _0x2e41b8[_0x4f9742(0x163)];let _0x2b27b8=_0x2e41b8[_0x4f9742(0x1a9)]?.['versions']?.['node']||_0x2e41b8[_0x4f9742(0x1a9)]?.[_0x4f9742(0x198)]?.['NEXT_RUNTIME']===_0x4f9742(0x1e2);return _0x2b27b8&&_0x3b1635==='nuxt'?_0x2e41b8[_0x4f9742(0x163)]=!0x1:_0x2e41b8[_0x4f9742(0x163)]=_0x2b27b8||!_0x5329cb||_0x2e41b8[_0x4f9742(0x175)]?.[_0x4f9742(0x1d8)]&&_0x5329cb[_0x4f9742(0x187)](_0x2e41b8[_0x4f9742(0x175)][_0x4f9742(0x1d8)]),_0x2e41b8[_0x4f9742(0x163)];}function Y(_0x525130,_0x3de134,_0x3e0747,_0x191371){var _0x41497b=_0x468ae4;_0x525130=_0x525130,_0x3de134=_0x3de134,_0x3e0747=_0x3e0747,_0x191371=_0x191371;let _0x3207ca=W(_0x525130),_0x4d3537=_0x3207ca[_0x41497b(0x1fb)],_0x4972a5=_0x3207ca[_0x41497b(0x213)];class _0x16108b{constructor(){var _0x438069=_0x41497b;this[_0x438069(0x1de)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x438069(0x1c3)]=/^(0|[1-9][0-9]*)$/,this[_0x438069(0x13a)]=/'([^\\\\']|\\\\')*'/,this[_0x438069(0x197)]=_0x525130[_0x438069(0x151)],this['_HTMLAllCollection']=_0x525130[_0x438069(0x141)],this['_getOwnPropertyDescriptor']=Object[_0x438069(0x1aa)],this[_0x438069(0x21b)]=Object['getOwnPropertyNames'],this[_0x438069(0x1f1)]=_0x525130[_0x438069(0x1b1)],this['_regExpToString']=RegExp['prototype'][_0x438069(0x226)],this['_dateToString']=Date[_0x438069(0x14c)]['toString'];}['serialize'](_0x446828,_0x30733a,_0x2ae22d,_0x53dc69){var _0x2b360b=_0x41497b,_0x21d02c=this,_0x470947=_0x2ae22d[_0x2b360b(0x16d)];function _0x140217(_0x181c34,_0x4f2899,_0x37e772){var _0x422f76=_0x2b360b;_0x4f2899['type']=_0x422f76(0x19a),_0x4f2899[_0x422f76(0x1b6)]=_0x181c34['message'],_0x284d12=_0x37e772['node'][_0x422f76(0x1d1)],_0x37e772[_0x422f76(0x13b)][_0x422f76(0x1d1)]=_0x4f2899,_0x21d02c[_0x422f76(0x209)](_0x4f2899,_0x37e772);}try{_0x2ae22d[_0x2b360b(0x17d)]++,_0x2ae22d['autoExpand']&&_0x2ae22d['autoExpandPreviousObjects']['push'](_0x30733a);var _0x276736,_0x56c740,_0x5c3443,_0xec81b5,_0x2c9ec8=[],_0x137f9e=[],_0x2342f7,_0xa29e94=this[_0x2b360b(0x1e5)](_0x30733a),_0x12ae1d=_0xa29e94==='array',_0x488add=!0x1,_0x45bb8f=_0xa29e94===_0x2b360b(0x186),_0x2219ef=this[_0x2b360b(0x211)](_0xa29e94),_0x8670ee=this[_0x2b360b(0x204)](_0xa29e94),_0x3ccf0d=_0x2219ef||_0x8670ee,_0x486b40={},_0x259d7b=0x0,_0x161888=!0x1,_0x284d12,_0x57bb95=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2ae22d['depth']){if(_0x12ae1d){if(_0x56c740=_0x30733a[_0x2b360b(0x184)],_0x56c740>_0x2ae22d[_0x2b360b(0x1b3)]){for(_0x5c3443=0x0,_0xec81b5=_0x2ae22d[_0x2b360b(0x1b3)],_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e['push'](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));_0x446828[_0x2b360b(0x182)]=!0x0;}else{for(_0x5c3443=0x0,_0xec81b5=_0x56c740,_0x276736=_0x5c3443;_0x276736<_0xec81b5;_0x276736++)_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1bf)](_0x2c9ec8,_0x30733a,_0xa29e94,_0x276736,_0x2ae22d));}_0x2ae22d['autoExpandPropertyCount']+=_0x137f9e['length'];}if(!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94==='undefined')&&!_0x2219ef&&_0xa29e94!=='String'&&_0xa29e94!==_0x2b360b(0x1c7)&&_0xa29e94!==_0x2b360b(0x16e)){var _0x281453=_0x53dc69[_0x2b360b(0x217)]||_0x2ae22d['props'];if(this[_0x2b360b(0x1cc)](_0x30733a)?(_0x276736=0x0,_0x30733a[_0x2b360b(0x205)](function(_0x3606a1){var _0x3a1288=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x3a1288(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x3a1288(0x17c)]&&_0x2ae22d[_0x3a1288(0x16d)]&&_0x2ae22d[_0x3a1288(0x188)]>_0x2ae22d['autoExpandLimit']){_0x161888=!0x0;return;}_0x137f9e[_0x3a1288(0x1f7)](_0x21d02c['_addProperty'](_0x2c9ec8,_0x30733a,_0x3a1288(0x15e),_0x276736++,_0x2ae22d,function(_0x24ad52){return function(){return _0x24ad52;};}(_0x3606a1)));})):this[_0x2b360b(0x1dd)](_0x30733a)&&_0x30733a['forEach'](function(_0xf59664,_0x5d81b2){var _0x2b8ffe=_0x2b360b;if(_0x259d7b++,_0x2ae22d[_0x2b8ffe(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;return;}if(!_0x2ae22d[_0x2b8ffe(0x17c)]&&_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b8ffe(0x188)]>_0x2ae22d[_0x2b8ffe(0x194)]){_0x161888=!0x0;return;}var _0x18d716=_0x5d81b2[_0x2b8ffe(0x226)]();_0x18d716[_0x2b8ffe(0x184)]>0x64&&(_0x18d716=_0x18d716[_0x2b8ffe(0x17a)](0x0,0x64)+_0x2b8ffe(0x201)),_0x137f9e[_0x2b8ffe(0x1f7)](_0x21d02c[_0x2b8ffe(0x1bf)](_0x2c9ec8,_0x30733a,_0x2b8ffe(0x1ff),_0x18d716,_0x2ae22d,function(_0x59153d){return function(){return _0x59153d;};}(_0xf59664)));}),!_0x488add){try{for(_0x2342f7 in _0x30733a)if(!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7))&&!this[_0x2b360b(0x17b)](_0x30733a,_0x2342f7,_0x2ae22d)){if(_0x259d7b++,_0x2ae22d['autoExpandPropertyCount']++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d['isExpressionToEvaluate']&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d[_0x2b360b(0x188)]>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c['_addObjectProperty'](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}catch{}if(_0x486b40[_0x2b360b(0x1c1)]=!0x0,_0x45bb8f&&(_0x486b40[_0x2b360b(0x1ae)]=!0x0),!_0x161888){var _0x2a9a58=[][_0x2b360b(0x1d5)](this[_0x2b360b(0x21b)](_0x30733a))[_0x2b360b(0x1d5)](this['_getOwnPropertySymbols'](_0x30733a));for(_0x276736=0x0,_0x56c740=_0x2a9a58['length'];_0x276736<_0x56c740;_0x276736++)if(_0x2342f7=_0x2a9a58[_0x276736],!(_0x12ae1d&&_0x57bb95[_0x2b360b(0x220)](_0x2342f7[_0x2b360b(0x226)]()))&&!this['_blacklistedProperty'](_0x30733a,_0x2342f7,_0x2ae22d)&&!_0x486b40[_0x2b360b(0x138)+_0x2342f7[_0x2b360b(0x226)]()]){if(_0x259d7b++,_0x2ae22d[_0x2b360b(0x188)]++,_0x259d7b>_0x281453){_0x161888=!0x0;break;}if(!_0x2ae22d[_0x2b360b(0x17c)]&&_0x2ae22d[_0x2b360b(0x16d)]&&_0x2ae22d['autoExpandPropertyCount']>_0x2ae22d[_0x2b360b(0x194)]){_0x161888=!0x0;break;}_0x137f9e[_0x2b360b(0x1f7)](_0x21d02c[_0x2b360b(0x1f4)](_0x2c9ec8,_0x486b40,_0x30733a,_0xa29e94,_0x2342f7,_0x2ae22d));}}}}}if(_0x446828[_0x2b360b(0x1d6)]=_0xa29e94,_0x3ccf0d?(_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x14b)](),this['_capIfString'](_0xa29e94,_0x446828,_0x2ae22d,_0x53dc69)):_0xa29e94===_0x2b360b(0x1bd)?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x20d)][_0x2b360b(0x180)](_0x30733a):_0xa29e94==='bigint'?_0x446828[_0x2b360b(0x1eb)]=_0x30733a[_0x2b360b(0x226)]():_0xa29e94==='RegExp'?_0x446828['value']=this[_0x2b360b(0x1ec)]['call'](_0x30733a):_0xa29e94==='symbol'&&this['_Symbol']?_0x446828[_0x2b360b(0x1eb)]=this[_0x2b360b(0x1f1)][_0x2b360b(0x14c)][_0x2b360b(0x226)]['call'](_0x30733a):!_0x2ae22d[_0x2b360b(0x1a1)]&&!(_0xa29e94===_0x2b360b(0x1ed)||_0xa29e94===_0x2b360b(0x151))&&(delete _0x446828[_0x2b360b(0x1eb)],_0x446828[_0x2b360b(0x1f9)]=!0x0),_0x161888&&(_0x446828[_0x2b360b(0x19f)]=!0x0),_0x284d12=_0x2ae22d[_0x2b360b(0x13b)][_0x2b360b(0x1d1)],_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x446828,this[_0x2b360b(0x209)](_0x446828,_0x2ae22d),_0x137f9e[_0x2b360b(0x184)]){for(_0x276736=0x0,_0x56c740=_0x137f9e[_0x2b360b(0x184)];_0x276736<_0x56c740;_0x276736++)_0x137f9e[_0x276736](_0x276736);}_0x2c9ec8[_0x2b360b(0x184)]&&(_0x446828['props']=_0x2c9ec8);}catch(_0x330646){_0x140217(_0x330646,_0x446828,_0x2ae22d);}return this[_0x2b360b(0x16a)](_0x30733a,_0x446828),this[_0x2b360b(0x208)](_0x446828,_0x2ae22d),_0x2ae22d['node'][_0x2b360b(0x1d1)]=_0x284d12,_0x2ae22d['level']--,_0x2ae22d[_0x2b360b(0x16d)]=_0x470947,_0x2ae22d['autoExpand']&&_0x2ae22d[_0x2b360b(0x19b)][_0x2b360b(0x19e)](),_0x446828;}['_getOwnPropertySymbols'](_0x3bd6cc){var _0x2aabad=_0x41497b;return Object[_0x2aabad(0x146)]?Object[_0x2aabad(0x146)](_0x3bd6cc):[];}['_isSet'](_0x30dd32){var _0x358a39=_0x41497b;return!!(_0x30dd32&&_0x525130[_0x358a39(0x15e)]&&this[_0x358a39(0x1fa)](_0x30dd32)===_0x358a39(0x195)&&_0x30dd32['forEach']);}[_0x41497b(0x17b)](_0x20acd5,_0xef50d6,_0x208ddb){var _0x40c71e=_0x41497b;return _0x208ddb[_0x40c71e(0x154)]?typeof _0x20acd5[_0xef50d6]=='function':!0x1;}[_0x41497b(0x1e5)](_0x40567e){var _0xbbe9fb=_0x41497b,_0x103bf4='';return _0x103bf4=typeof _0x40567e,_0x103bf4===_0xbbe9fb(0x157)?this[_0xbbe9fb(0x1fa)](_0x40567e)===_0xbbe9fb(0x1c8)?_0x103bf4='array':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20Date]'?_0x103bf4='date':this[_0xbbe9fb(0x1fa)](_0x40567e)==='[object\\x20BigInt]'?_0x103bf4=_0xbbe9fb(0x16e):_0x40567e===null?_0x103bf4=_0xbbe9fb(0x1ed):_0x40567e[_0xbbe9fb(0x166)]&&(_0x103bf4=_0x40567e[_0xbbe9fb(0x166)][_0xbbe9fb(0x1c0)]||_0x103bf4):_0x103bf4===_0xbbe9fb(0x151)&&this[_0xbbe9fb(0x181)]&&_0x40567e instanceof this[_0xbbe9fb(0x181)]&&(_0x103bf4=_0xbbe9fb(0x141)),_0x103bf4;}[_0x41497b(0x1fa)](_0x591fa8){var _0x193ba2=_0x41497b;return Object[_0x193ba2(0x14c)][_0x193ba2(0x226)][_0x193ba2(0x180)](_0x591fa8);}[_0x41497b(0x211)](_0x2d794b){var _0x9202ee=_0x41497b;return _0x2d794b==='boolean'||_0x2d794b===_0x9202ee(0x1b9)||_0x2d794b==='number';}[_0x41497b(0x204)](_0x8e0351){var _0x481fda=_0x41497b;return _0x8e0351==='Boolean'||_0x8e0351===_0x481fda(0x155)||_0x8e0351==='Number';}['_addProperty'](_0xc0b08c,_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4){var _0x44c68f=this;return function(_0xb4d76d){var _0x43a249=_0x5e0f,_0x56e822=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1d1)],_0x52f605=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)],_0x107c77=_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)];_0x41b47f['node'][_0x43a249(0x136)]=_0x56e822,_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x1e6)]=typeof _0x688eff==_0x43a249(0x218)?_0x688eff:_0xb4d76d,_0xc0b08c[_0x43a249(0x1f7)](_0x44c68f['_property'](_0x363846,_0xa26512,_0x688eff,_0x41b47f,_0xe9fda4)),_0x41b47f[_0x43a249(0x13b)][_0x43a249(0x136)]=_0x107c77,_0x41b47f['node'][_0x43a249(0x1e6)]=_0x52f605;};}['_addObjectProperty'](_0x7740eb,_0x17f789,_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f){var _0x539e4e=_0x41497b,_0x22d1d9=this;return _0x17f789[_0x539e4e(0x138)+_0x339830['toString']()]=!0x0,function(_0x4eca77){var _0x5c2716=_0x539e4e,_0x5a7313=_0x781188['node'][_0x5c2716(0x1d1)],_0x19fa02=_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)],_0x4dc904=_0x781188['node'][_0x5c2716(0x136)];_0x781188['node']['parent']=_0x5a7313,_0x781188['node'][_0x5c2716(0x1e6)]=_0x4eca77,_0x7740eb[_0x5c2716(0x1f7)](_0x22d1d9[_0x5c2716(0x1d3)](_0x54640f,_0x27124f,_0x339830,_0x781188,_0x2c2a1f)),_0x781188['node'][_0x5c2716(0x136)]=_0x4dc904,_0x781188[_0x5c2716(0x13b)][_0x5c2716(0x1e6)]=_0x19fa02;};}['_property'](_0x449db4,_0x3cf735,_0x4ae1e6,_0x4d1363,_0xd6c90a){var _0x367c8e=_0x41497b,_0x5840e3=this;_0xd6c90a||(_0xd6c90a=function(_0x2d1a8c,_0xe71020){return _0x2d1a8c[_0xe71020];});var _0x16329=_0x4ae1e6[_0x367c8e(0x226)](),_0x28a0d3=_0x4d1363[_0x367c8e(0x13e)]||{},_0x1eec82=_0x4d1363[_0x367c8e(0x1a1)],_0x5b35b3=_0x4d1363[_0x367c8e(0x17c)];try{var _0x1c7dac=this[_0x367c8e(0x1dd)](_0x449db4),_0x12de51=_0x16329;_0x1c7dac&&_0x12de51[0x0]==='\\x27'&&(_0x12de51=_0x12de51[_0x367c8e(0x15a)](0x1,_0x12de51[_0x367c8e(0x184)]-0x2));var _0x964819=_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3['_p_'+_0x12de51];_0x964819&&(_0x4d1363['depth']=_0x4d1363[_0x367c8e(0x1a1)]+0x1),_0x4d1363[_0x367c8e(0x17c)]=!!_0x964819;var _0x44d980=typeof _0x4ae1e6=='symbol',_0x1b96f4={'name':_0x44d980||_0x1c7dac?_0x16329:this[_0x367c8e(0x16b)](_0x16329)};if(_0x44d980&&(_0x1b96f4[_0x367c8e(0x145)]=!0x0),!(_0x3cf735===_0x367c8e(0x1a0)||_0x3cf735===_0x367c8e(0x185))){var _0x4f2270=this['_getOwnPropertyDescriptor'](_0x449db4,_0x4ae1e6);if(_0x4f2270&&(_0x4f2270[_0x367c8e(0x1dc)]&&(_0x1b96f4['setter']=!0x0),_0x4f2270[_0x367c8e(0x165)]&&!_0x964819&&!_0x4d1363[_0x367c8e(0x1d2)]))return _0x1b96f4[_0x367c8e(0x144)]=!0x0,this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x44b192;try{_0x44b192=_0xd6c90a(_0x449db4,_0x4ae1e6);}catch(_0x5a13e2){return _0x1b96f4={'name':_0x16329,'type':_0x367c8e(0x19a),'error':_0x5a13e2[_0x367c8e(0x1fe)]},this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363),_0x1b96f4;}var _0x247cc9=this[_0x367c8e(0x1e5)](_0x44b192),_0x11bc37=this['_isPrimitiveType'](_0x247cc9);if(_0x1b96f4[_0x367c8e(0x1d6)]=_0x247cc9,_0x11bc37)this[_0x367c8e(0x1a5)](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0xf8b9b5=_0x367c8e;_0x1b96f4[_0xf8b9b5(0x1eb)]=_0x44b192[_0xf8b9b5(0x14b)](),!_0x964819&&_0x5840e3[_0xf8b9b5(0x1c4)](_0x247cc9,_0x1b96f4,_0x4d1363,{});});else{var _0x2cc5ec=_0x4d1363['autoExpand']&&_0x4d1363[_0x367c8e(0x17d)]<_0x4d1363[_0x367c8e(0x140)]&&_0x4d1363[_0x367c8e(0x19b)][_0x367c8e(0x216)](_0x44b192)<0x0&&_0x247cc9!==_0x367c8e(0x186)&&_0x4d1363[_0x367c8e(0x188)]<_0x4d1363[_0x367c8e(0x194)];_0x2cc5ec||_0x4d1363[_0x367c8e(0x17d)]<_0x1eec82||_0x964819?(this[_0x367c8e(0x15f)](_0x1b96f4,_0x44b192,_0x4d1363,_0x964819||{}),this[_0x367c8e(0x16a)](_0x44b192,_0x1b96f4)):this['_processTreeNodeResult'](_0x1b96f4,_0x4d1363,_0x44b192,function(){var _0x4910dd=_0x367c8e;_0x247cc9===_0x4910dd(0x1ed)||_0x247cc9==='undefined'||(delete _0x1b96f4[_0x4910dd(0x1eb)],_0x1b96f4[_0x4910dd(0x1f9)]=!0x0);});}return _0x1b96f4;}finally{_0x4d1363[_0x367c8e(0x13e)]=_0x28a0d3,_0x4d1363[_0x367c8e(0x1a1)]=_0x1eec82,_0x4d1363[_0x367c8e(0x17c)]=_0x5b35b3;}}[_0x41497b(0x1c4)](_0x138aeb,_0x1bdf22,_0x902338,_0x386dd9){var _0x443fd3=_0x41497b,_0x42ffe2=_0x386dd9['strLength']||_0x902338['strLength'];if((_0x138aeb===_0x443fd3(0x1b9)||_0x138aeb===_0x443fd3(0x155))&&_0x1bdf22[_0x443fd3(0x1eb)]){let _0x1bfed9=_0x1bdf22['value'][_0x443fd3(0x184)];_0x902338[_0x443fd3(0x1b7)]+=_0x1bfed9,_0x902338[_0x443fd3(0x1b7)]>_0x902338[_0x443fd3(0x1f0)]?(_0x1bdf22['capped']='',delete _0x1bdf22['value']):_0x1bfed9>_0x42ffe2&&(_0x1bdf22[_0x443fd3(0x1f9)]=_0x1bdf22[_0x443fd3(0x1eb)][_0x443fd3(0x15a)](0x0,_0x42ffe2),delete _0x1bdf22['value']);}}[_0x41497b(0x1dd)](_0x5dd1cf){var _0x4e6af9=_0x41497b;return!!(_0x5dd1cf&&_0x525130[_0x4e6af9(0x1ff)]&&this[_0x4e6af9(0x1fa)](_0x5dd1cf)===_0x4e6af9(0x1d0)&&_0x5dd1cf['forEach']);}[_0x41497b(0x16b)](_0x1f217b){var _0x235a09=_0x41497b;if(_0x1f217b[_0x235a09(0x1da)](/^\\d+$/))return _0x1f217b;var _0xc79036;try{_0xc79036=JSON[_0x235a09(0x193)](''+_0x1f217b);}catch{_0xc79036='\\x22'+this['_objectToString'](_0x1f217b)+'\\x22';}return _0xc79036[_0x235a09(0x1da)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xc79036=_0xc79036[_0x235a09(0x15a)](0x1,_0xc79036['length']-0x2):_0xc79036=_0xc79036[_0x235a09(0x1cf)](/'/g,'\\x5c\\x27')[_0x235a09(0x1cf)](/\\\\"/g,'\\x22')[_0x235a09(0x1cf)](/(^"|"$)/g,'\\x27'),_0xc79036;}[_0x41497b(0x1a5)](_0x1cb5c5,_0x18f336,_0x49fab1,_0x4b1ea5){var _0x186320=_0x41497b;this[_0x186320(0x209)](_0x1cb5c5,_0x18f336),_0x4b1ea5&&_0x4b1ea5(),this['_additionalMetadata'](_0x49fab1,_0x1cb5c5),this['_treeNodePropertiesAfterFullValue'](_0x1cb5c5,_0x18f336);}[_0x41497b(0x209)](_0x264f02,_0x38e634){var _0x5d44eb=_0x41497b;this[_0x5d44eb(0x212)](_0x264f02,_0x38e634),this[_0x5d44eb(0x1c2)](_0x264f02,_0x38e634),this['_setNodeExpressionPath'](_0x264f02,_0x38e634),this['_setNodePermissions'](_0x264f02,_0x38e634);}[_0x41497b(0x212)](_0x25af19,_0x14f38e){}[_0x41497b(0x1c2)](_0x5d77ea,_0xa38b0b){}[_0x41497b(0x1a2)](_0x1dd598,_0x36d7bb){}[_0x41497b(0x1cd)](_0x51064b){var _0x1c6615=_0x41497b;return _0x51064b===this[_0x1c6615(0x197)];}[_0x41497b(0x208)](_0x50abf2,_0x440584){var _0x124235=_0x41497b;this[_0x124235(0x1a2)](_0x50abf2,_0x440584),this[_0x124235(0x190)](_0x50abf2),_0x440584[_0x124235(0x219)]&&this[_0x124235(0x1e1)](_0x50abf2),this[_0x124235(0x1a8)](_0x50abf2,_0x440584),this['_addLoadNode'](_0x50abf2,_0x440584),this[_0x124235(0x16f)](_0x50abf2);}[_0x41497b(0x16a)](_0x149285,_0x5f4a23){var _0x14ba24=_0x41497b;let _0x306082;try{_0x525130[_0x14ba24(0x152)]&&(_0x306082=_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)],_0x525130[_0x14ba24(0x152)][_0x14ba24(0x1b6)]=function(){}),_0x149285&&typeof _0x149285[_0x14ba24(0x184)]=='number'&&(_0x5f4a23[_0x14ba24(0x184)]=_0x149285[_0x14ba24(0x184)]);}catch{}finally{_0x306082&&(_0x525130['console'][_0x14ba24(0x1b6)]=_0x306082);}if(_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x218)||_0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x15b)){if(isNaN(_0x5f4a23['value']))_0x5f4a23[_0x14ba24(0x1ef)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];else switch(_0x5f4a23['value']){case Number['POSITIVE_INFINITY']:_0x5f4a23['positiveInfinity']=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case Number[_0x14ba24(0x1b5)]:_0x5f4a23[_0x14ba24(0x1a7)]=!0x0,delete _0x5f4a23[_0x14ba24(0x1eb)];break;case 0x0:this[_0x14ba24(0x203)](_0x5f4a23[_0x14ba24(0x1eb)])&&(_0x5f4a23[_0x14ba24(0x18c)]=!0x0);break;}}else _0x5f4a23[_0x14ba24(0x1d6)]===_0x14ba24(0x186)&&typeof _0x149285[_0x14ba24(0x1c0)]==_0x14ba24(0x1b9)&&_0x149285[_0x14ba24(0x1c0)]&&_0x5f4a23[_0x14ba24(0x1c0)]&&_0x149285[_0x14ba24(0x1c0)]!==_0x5f4a23[_0x14ba24(0x1c0)]&&(_0x5f4a23['funcName']=_0x149285[_0x14ba24(0x1c0)]);}['_isNegativeZero'](_0x5b1353){var _0x4a752f=_0x41497b;return 0x1/_0x5b1353===Number[_0x4a752f(0x1b5)];}[_0x41497b(0x1e1)](_0x56cb22){var _0x2d9e52=_0x41497b;!_0x56cb22[_0x2d9e52(0x217)]||!_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x184)]||_0x56cb22['type']===_0x2d9e52(0x1a0)||_0x56cb22['type']===_0x2d9e52(0x1ff)||_0x56cb22[_0x2d9e52(0x1d6)]===_0x2d9e52(0x15e)||_0x56cb22[_0x2d9e52(0x217)][_0x2d9e52(0x1e0)](function(_0x348d85,_0x43558b){var _0x4e5041=_0x2d9e52,_0x4fe932=_0x348d85[_0x4e5041(0x1c0)][_0x4e5041(0x164)](),_0x16e14c=_0x43558b[_0x4e5041(0x1c0)]['toLowerCase']();return _0x4fe932<_0x16e14c?-0x1:_0x4fe932>_0x16e14c?0x1:0x0;});}['_addFunctionsNode'](_0x4a7887,_0x40201b){var _0x44116f=_0x41497b;if(!(_0x40201b[_0x44116f(0x154)]||!_0x4a7887['props']||!_0x4a7887[_0x44116f(0x217)]['length'])){for(var _0x1db19d=[],_0x29b4dd=[],_0x120e34=0x0,_0x2a7e9d=_0x4a7887[_0x44116f(0x217)][_0x44116f(0x184)];_0x120e34<_0x2a7e9d;_0x120e34++){var _0x5d53d0=_0x4a7887[_0x44116f(0x217)][_0x120e34];_0x5d53d0['type']==='function'?_0x1db19d[_0x44116f(0x1f7)](_0x5d53d0):_0x29b4dd[_0x44116f(0x1f7)](_0x5d53d0);}if(!(!_0x29b4dd['length']||_0x1db19d['length']<=0x1)){_0x4a7887[_0x44116f(0x217)]=_0x29b4dd;var _0x16d9b1={'functionsNode':!0x0,'props':_0x1db19d};this[_0x44116f(0x212)](_0x16d9b1,_0x40201b),this[_0x44116f(0x1a2)](_0x16d9b1,_0x40201b),this['_setNodeExpandableState'](_0x16d9b1),this[_0x44116f(0x143)](_0x16d9b1,_0x40201b),_0x16d9b1['id']+='\\x20f',_0x4a7887[_0x44116f(0x217)][_0x44116f(0x18d)](_0x16d9b1);}}}['_addLoadNode'](_0x4774d4,_0x50e0c9){}['_setNodeExpandableState'](_0x368709){}[_0x41497b(0x19c)](_0x14907c){var _0x6ad87a=_0x41497b;return Array[_0x6ad87a(0x1c6)](_0x14907c)||typeof _0x14907c=='object'&&this['_objectToString'](_0x14907c)===_0x6ad87a(0x1c8);}[_0x41497b(0x143)](_0x26716f,_0x467fae){}[_0x41497b(0x16f)](_0xfaa8f6){var _0x492341=_0x41497b;delete _0xfaa8f6['_hasSymbolPropertyOnItsPath'],delete _0xfaa8f6[_0x492341(0x1bb)],delete _0xfaa8f6[_0x492341(0x170)];}[_0x41497b(0x1b2)](_0x44160d,_0x5eca73){}}let _0x4e192b=new _0x16108b(),_0x22f72a={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x437449={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5dbd72(_0x438614,_0x1daab2,_0x2a8ba2,_0x327d8f,_0x7ad510,_0x126ab6){var _0x25bee5=_0x41497b;let _0x128d1a,_0x17066d;try{_0x17066d=_0x4972a5(),_0x128d1a=_0x3e0747[_0x1daab2],!_0x128d1a||_0x17066d-_0x128d1a['ts']>0x1f4&&_0x128d1a[_0x25bee5(0x206)]&&_0x128d1a['time']/_0x128d1a['count']<0x64?(_0x3e0747[_0x1daab2]=_0x128d1a={'count':0x0,'time':0x0,'ts':_0x17066d},_0x3e0747[_0x25bee5(0x1af)]={}):_0x17066d-_0x3e0747[_0x25bee5(0x1af)]['ts']>0x32&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]&&_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x153)]/_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]<0x64&&(_0x3e0747[_0x25bee5(0x1af)]={});let _0x4b3d02=[],_0x27388c=_0x128d1a[_0x25bee5(0x1c9)]||_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]?_0x437449:_0x22f72a,_0x2adebe=_0x1c3da5=>{var _0xd98901=_0x25bee5;let _0x16b660={};return _0x16b660[_0xd98901(0x217)]=_0x1c3da5[_0xd98901(0x217)],_0x16b660[_0xd98901(0x1b3)]=_0x1c3da5['elements'],_0x16b660[_0xd98901(0x173)]=_0x1c3da5['strLength'],_0x16b660[_0xd98901(0x1f0)]=_0x1c3da5[_0xd98901(0x1f0)],_0x16b660[_0xd98901(0x194)]=_0x1c3da5['autoExpandLimit'],_0x16b660[_0xd98901(0x140)]=_0x1c3da5[_0xd98901(0x140)],_0x16b660['sortProps']=!0x1,_0x16b660['noFunctions']=!_0x3de134,_0x16b660[_0xd98901(0x1a1)]=0x1,_0x16b660[_0xd98901(0x17d)]=0x0,_0x16b660[_0xd98901(0x225)]='root_exp_id',_0x16b660[_0xd98901(0x20a)]=_0xd98901(0x162),_0x16b660[_0xd98901(0x16d)]=!0x0,_0x16b660[_0xd98901(0x19b)]=[],_0x16b660[_0xd98901(0x188)]=0x0,_0x16b660[_0xd98901(0x1d2)]=!0x0,_0x16b660[_0xd98901(0x1b7)]=0x0,_0x16b660['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x16b660;};for(var _0x2faef3=0x0;_0x2faef3<_0x7ad510[_0x25bee5(0x184)];_0x2faef3++)_0x4b3d02['push'](_0x4e192b[_0x25bee5(0x15f)]({'timeNode':_0x438614===_0x25bee5(0x153)||void 0x0},_0x7ad510[_0x2faef3],_0x2adebe(_0x27388c),{}));if(_0x438614===_0x25bee5(0x1e9)){let _0x3bf8d2=Error['stackTraceLimit'];try{Error[_0x25bee5(0x137)]=0x1/0x0,_0x4b3d02[_0x25bee5(0x1f7)](_0x4e192b[_0x25bee5(0x15f)]({'stackNode':!0x0},new Error()[_0x25bee5(0x21e)],_0x2adebe(_0x27388c),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x3bf8d2;}}return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':_0x4b3d02,'id':_0x1daab2,'context':_0x126ab6}]};}catch(_0x4e713a){return{'method':_0x25bee5(0x14f),'version':_0x191371,'args':[{'ts':_0x2a8ba2,'session':_0x327d8f,'args':[{'type':_0x25bee5(0x19a),'error':_0x4e713a&&_0x4e713a[_0x25bee5(0x1fe)]}],'id':_0x1daab2,'context':_0x126ab6}]};}finally{try{if(_0x128d1a&&_0x17066d){let _0x118727=_0x4972a5();_0x128d1a['count']++,_0x128d1a[_0x25bee5(0x153)]+=_0x4d3537(_0x17066d,_0x118727),_0x128d1a['ts']=_0x118727,_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]++,_0x3e0747['hits']['time']+=_0x4d3537(_0x17066d,_0x118727),_0x3e0747[_0x25bee5(0x1af)]['ts']=_0x118727,(_0x128d1a[_0x25bee5(0x206)]>0x32||_0x128d1a[_0x25bee5(0x153)]>0x64)&&(_0x128d1a[_0x25bee5(0x1c9)]=!0x0),(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x206)]>0x3e8||_0x3e0747[_0x25bee5(0x1af)]['time']>0x12c)&&(_0x3e0747[_0x25bee5(0x1af)][_0x25bee5(0x1c9)]=!0x0);}}catch{}}}return _0x5dbd72;}((_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x42ded8,_0x119988,_0x351f5d,_0x3c71d2,_0x599f1f)=>{var _0x4879a8=_0x468ae4;if(_0x3438aa[_0x4879a8(0x191)])return _0x3438aa[_0x4879a8(0x191)];if(!J(_0x3438aa,_0x351f5d,_0x10e2cd))return _0x3438aa[_0x4879a8(0x191)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3438aa[_0x4879a8(0x191)];let _0x415dbe=W(_0x3438aa),_0x4c54fc=_0x415dbe[_0x4879a8(0x1fb)],_0x46d3b7=_0x415dbe['timeStamp'],_0x474dcb=_0x415dbe[_0x4879a8(0x161)],_0x44cf82={'hits':{},'ts':{}},_0x38e5f5=Y(_0x3438aa,_0x3c71d2,_0x44cf82,_0x42ded8),_0x31da8e=_0x2056e1=>{_0x44cf82['ts'][_0x2056e1]=_0x46d3b7();},_0x6c8078=(_0x4e0052,_0x17a019)=>{var _0x3061d4=_0x4879a8;let _0x5a32fc=_0x44cf82['ts'][_0x17a019];if(delete _0x44cf82['ts'][_0x17a019],_0x5a32fc){let _0x1c412e=_0x4c54fc(_0x5a32fc,_0x46d3b7());_0x18783d(_0x38e5f5(_0x3061d4(0x153),_0x4e0052,_0x474dcb(),_0xd23236,[_0x1c412e],_0x17a019));}},_0x13d552=_0x45a62f=>_0xf5a5a5=>{var _0xa4f039=_0x4879a8;try{_0x31da8e(_0xf5a5a5),_0x45a62f(_0xf5a5a5);}finally{_0x3438aa[_0xa4f039(0x152)]['time']=_0x45a62f;}},_0x133c7e=_0x59e399=>_0x53d059=>{var _0x2495c1=_0x4879a8;try{let [_0x1c40fe,_0xb50c66]=_0x53d059[_0x2495c1(0x1c5)](_0x2495c1(0x14d));_0x6c8078(_0xb50c66,_0x1c40fe),_0x59e399(_0x1c40fe);}finally{_0x3438aa['console'][_0x2495c1(0x13c)]=_0x59e399;}};_0x3438aa[_0x4879a8(0x191)]={'consoleLog':(_0x14d09b,_0x44b315)=>{var _0x3f47dd=_0x4879a8;_0x3438aa[_0x3f47dd(0x152)][_0x3f47dd(0x14f)]['name']!==_0x3f47dd(0x1ac)&&_0x18783d(_0x38e5f5(_0x3f47dd(0x14f),_0x14d09b,_0x474dcb(),_0xd23236,_0x44b315));},'consoleTrace':(_0x1463c7,_0x391847)=>{var _0x599589=_0x4879a8;_0x3438aa[_0x599589(0x152)][_0x599589(0x14f)][_0x599589(0x1c0)]!=='disabledTrace'&&_0x18783d(_0x38e5f5(_0x599589(0x1e9),_0x1463c7,_0x474dcb(),_0xd23236,_0x391847));},'consoleTime':()=>{var _0x21c121=_0x4879a8;_0x3438aa['console'][_0x21c121(0x153)]=_0x13d552(_0x3438aa[_0x21c121(0x152)][_0x21c121(0x153)]);},'consoleTimeEnd':()=>{var _0x424c49=_0x4879a8;_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]=_0x133c7e(_0x3438aa[_0x424c49(0x152)][_0x424c49(0x13c)]);},'autoLog':(_0x503de2,_0x26ac93)=>{var _0x49b701=_0x4879a8;_0x18783d(_0x38e5f5(_0x49b701(0x14f),_0x26ac93,_0x474dcb(),_0xd23236,[_0x503de2]));},'autoLogMany':(_0x5d3be8,_0x2b33a5)=>{_0x18783d(_0x38e5f5('log',_0x5d3be8,_0x474dcb(),_0xd23236,_0x2b33a5));},'autoTrace':(_0x45771f,_0xa46292)=>{var _0x1edfa6=_0x4879a8;_0x18783d(_0x38e5f5(_0x1edfa6(0x1e9),_0xa46292,_0x474dcb(),_0xd23236,[_0x45771f]));},'autoTraceMany':(_0x58a524,_0x4309ca)=>{var _0xfdebab=_0x4879a8;_0x18783d(_0x38e5f5(_0xfdebab(0x1e9),_0x58a524,_0x474dcb(),_0xd23236,_0x4309ca));},'autoTime':(_0x2ec472,_0x3e8497,_0x557ad3)=>{_0x31da8e(_0x557ad3);},'autoTimeEnd':(_0x590e39,_0x477199,_0x1178b4)=>{_0x6c8078(_0x477199,_0x1178b4);},'coverage':_0x40869a=>{var _0x431076=_0x4879a8;_0x18783d({'method':_0x431076(0x18f),'version':_0x42ded8,'args':[{'id':_0x40869a}]});}};let _0x18783d=b(_0x3438aa,_0xcb8f4c,_0x2869b1,_0x4a0208,_0x10e2cd,_0x599f1f),_0xd23236=_0x3438aa['_console_ninja_session'];return _0x3438aa[_0x4879a8(0x191)];})(globalThis,_0x468ae4(0x147),_0x468ae4(0x167),_0x468ae4(0x15c),'remix','1.0.0',_0x468ae4(0x1a4),_0x468ae4(0x1d9),_0x468ae4(0x148),_0x468ae4(0x1db));`);
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
var import_react16 = __toESM(require("react"));

// app/component/Loader.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Loader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "div",
    {
      role: "status",
      className: "w-full flex justify-center items-center mt-28",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "svg",
          {
            "aria-hidden": "true",
            className: "w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
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
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Dashboard() {
  let iframeRef = import_react16.default.useRef(null), [loading, setLoading] = import_react16.default.useState(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Loader_default, {}, void 0, !1, {
      fileName: "app/component/Dashboard.tsx",
      lineNumber: 10,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let user = await getUserSession(request), { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return {
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
    user
  };
};
function dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dashboard_default, {}, void 0, !1, {
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
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "redirecting ..." }, void 0, !1, {
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
var import_node7 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_react21 = require("react");

// app/component/Main.tsx
var import_react19 = require("@remix-run/react");

// app/shadComponent/ui/card.tsx
var React7 = __toESM(require("react"));
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Card = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/card.tsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/shadComponent/ui/card.tsx",
  lineNumber: 60,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/shadComponent/ui/card.tsx",
    lineNumber: 68,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

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
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Main({ tools }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px] ", children: tools.map((list, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Tool3, { list, index }, list.name, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, list.name, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 14,
    columnNumber: 15
  }, this)) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function Tool3({ list, index }) {
  let { user } = (0, import_react19.useLoaderData)(), navigate = (0, import_react19.useNavigate)(), getColor = getRandomLightColor(index), toast2 = useToast();
  function login() {
    let loginBtn = document.getElementById("login-btn");
    loginBtn == null || loginBtn.click();
  }
  function checkAuth() {
    user || toast2.toast({
      title: "Login !",
      description: "please login to use this tool",
      action: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ToastAction, { altText: "Try again", onClick: login, children: "Login" }, void 0, !1, {
        fileName: "app/component/Main.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    Card,
    {
      onClick: () => {
        checkAuth(), user && (list.url && user && navigate("/tool/" + list.name.replace(" ", "_")), list.url || alert("you are not assigned to this tool"));
      },
      className: `tool ${getColor} cursor-pointer text-center w-full relative overflow-hidden hover:scale-95 transition-all duration-500 `,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "img",
          {
            src: list == null ? void 0 : list.ICON,
            alt: "card-icon",
            className: "w-20 h-20 mx-auto object-contain"
          },
          void 0,
          !1,
          {
            fileName: "app/component/Main.tsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/Main.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " uppercase text-center text-slate-700 font-semibold", children: list.name.replaceAll("_", " ") }, void 0, !1, {
          fileName: "app/component/Main.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/component/Main.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this),
        list.demo && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      lineNumber: 62,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/component/Main.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
var Main_default = Main;

// app/routes/_index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
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
  let data = (0, import_react20.useLoaderData)(), user = data == null ? void 0 : data.user, socket = useSocket();
  return (0, import_react21.useEffect)(() => {
    socket && (user && (socket == null || socket.emit("user_login", user == null ? void 0 : user.email)), !user && socket.id && (socket == null || socket.emit("user_logout", socket.id)));
  }, [user, socket]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "h1",
          {
            className: "text-2xl ml-4 font-semibold ",
            style: {
              fontFamily: '"Rubik","Open Sans",sans-serif'
            },
            children: [
              "Tools",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react20.Link, { to: "/dashboard", className: "btn btn-sm mr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, { className: "sm:truncate bg-white text-slate-500 hover:bg-white hover:text-slate-600  sm:tracking-tight", children: "Dashboard" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Loading package location..." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react20.Await,
        {
          resolve: data.tools,
          errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 27
          }, this),
          children: (tools) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Main_default, { tools }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 77,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4YUXGF5F.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SYSHMECJ.js", "/build/_shared/chunk-7BQCVHR7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SKRCQBYC.js", imports: ["/build/_shared/chunk-B2UZFMTG.js", "/build/_shared/chunk-YB7BQXO2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PLJTW72G.js", imports: ["/build/_shared/chunk-W3NPP5AK.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-X3PVQTW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user": { id: "routes/api.user", parentId: "root", path: "api/user", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user-7BYWHH7L.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/callback": { id: "routes/callback", parentId: "root", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/callback-MCFKYWN7.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-X3PVQTW7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-46RKURSH.js", imports: ["/build/_shared/chunk-W3NPP5AK.js", "/build/_shared/chunk-X3PVQTW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo.$tool": { id: "routes/demo.$tool", parentId: "root", path: "demo/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.$tool-H2ZZADBK.js", imports: ["/build/_shared/chunk-W3NPP5AK.js", "/build/_shared/chunk-X3PVQTW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tool.$tool": { id: "routes/tool.$tool", parentId: "root", path: "tool/:tool", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$tool-QMZSAN2Q.js", imports: ["/build/_shared/chunk-W3NPP5AK.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-X3PVQTW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "4c837c79", hmr: { runtime: "/build/_shared\\chunk-7BQCVHR7.js", timestamp: 1699007401068 }, url: "/build/manifest-4C837C79.js" };

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
