import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useNavigation,
} from "@remix-run/react";
import { RecoilRoot } from "recoil";
import globalStyle from "~/style/global.css";
import tailwindStyle from "~/style/tailwind.css";
import { useState, useEffect, useMemo } from "react";
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";
import { Toaster } from "./shadComponent/ui/toaster";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStyle,
  },
  { rel: "stylesheet", href: tailwindStyle },
  { rel: "stylesheet", href: nProgressStyles },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon/favicon.png",
  },
];

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        visit work.pecha.tools for old version,if error persist please contact
        {error}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  let transition = useNavigation();
  let fetchers = useFetchers();

  let state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      let states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [transition.state, fetchers]
  );

  useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === "loading") NProgress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") NProgress.done();
  }, [transition.state]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <Outlet />
          <Toaster />
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
