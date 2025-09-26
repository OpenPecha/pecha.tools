import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useLoaderData,
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

import { PostHogProvider } from 'posthog-js/react'
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
  let feedBucketAccess = process.env?.FEEDBUCKET_ACCESS;
  let posthogKey = process.env?.PUBLIC_POSTHOG_KEY;
  let posthogHost = process.env?.PUBLIC_POSTHOG_HOST;
  return { user, feedbucketToken, feedBucketAccess ,posthogKey, posthogHost};
}

export default function App() {
  let transition = useNavigation();
  let fetchers = useFetchers();
  const { posthogKey, posthogHost } = useLoaderData();
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
  const options = {
    api_host: posthogHost,
    defaults: '2025-05-24',
  }
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
    <PostHogProvider apiKey={posthogKey} options={options}>
          <Outlet />
    </PostHogProvider>
          <Toaster />
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
