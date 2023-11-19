import React from 'react'
import stylesheet from '../styles/app.css'

import {
  Links,
  Meta,
  Outlet,
  LiveReload,
  Scripts
} from '@remix-run/react'
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => [
  // @ts-expect-error Need this for tailwindcss to work
  { rel: 'stylesheet', href: stylesheet }
]

export default function App (): JSX.Element {
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
        <body className='h-screen w-full'>
          <Outlet />

          <Scripts />
          <LiveReload />
        </body>
      </html>
  )
}
