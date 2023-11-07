import React from 'react'
import stylesheet from "../styles/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

import {
    Links,
    Meta,
    Outlet,
    LiveReload,
    Scripts,
  } from "@remix-run/react";
import { LinksFunction } from '@remix-run/node';
  
  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
      
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  