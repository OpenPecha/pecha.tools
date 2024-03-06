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
import FeedBucket from "./component/Feedbucket";
import { getUserSession } from "./services/session.server";
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

export async function loader({ request }) {
  let user = await getUserSession(request);
  let feedbucketToken = process.env?.FEEDBUCKET_TOKEN;
  return { user, feedbucketToken };
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
    if (state === "loading") NProgress.start();
    if (state === "idle") NProgress.done();
  }, [transition.state]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <FeedBucket />
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
