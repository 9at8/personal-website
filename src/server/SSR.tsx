import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import App from '../client/App'

let assets: any

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
}

syncLoadAssets()

const SSR = express().get(
  '/*',
  (req: express.Request, res: express.Response) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    )

    res.send(
      `<!doctype html>
      <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Aditya Thakral's personal website" />

          <title>Aditya Thakral</title>

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
          ${
            assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}" />`
              : ''
          }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        </head>
        <body>
          <div id="root">${markup}</div>
        </body>
      </html>`,
    )
  },
)

export default SSR
