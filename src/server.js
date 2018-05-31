import express from 'express'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Layout from './components/Layout'

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))
app.disable('x-powered-by')

app.get('/*', (req, res) => {
  const context = {}
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  )
  const reactDom = renderToString(jsx)

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(htmlTemplate(reactDom))
})

app.listen(2048)

function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>React Starter</title>
      </head>

      <body>
          <div id="app">${reactDom}</div>
          <script src="./app.bundle.js"></script>
      </body>
      </html>
    `
}