import express from "express"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from './components/App.js'

const app = express()

//Serve the app with the public bundle.js
app.use(express.static("online/dist/"))

app.get("/", async(req, res, next) => {
  const css = new Set()
  const context = { insertCss: (...styles) =>
    styles.forEach(style => css.add(style._getCss()))}

    const route = await router.resolve(context);

  const markup = renderToString(
    <App context={context}>
      <App />
    </App>
  )

  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
    <style type="text/css">${[...css].join('')}</style>
</head>
<body>
    <!-- Root Element -->
    <div id="app">${markup}</div>
    <script src="bundle.js"></script>
</body>
</html>
    `
  )
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000\n`)
})
