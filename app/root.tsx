import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { RecoilRoot } from "recoil";
import globalStyle from "~/style/global.css";
import tailwindStyle from "~/style/tailwind.css";
import { SocketProvider, connect } from "./component/context/socket";
import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStyle,
  },
  { rel: "stylesheet", href: tailwindStyle },
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
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    const socket = connect();
    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SocketProvider socket={socket}>
          <RecoilRoot>
            <Outlet />
          </RecoilRoot>
        </SocketProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
