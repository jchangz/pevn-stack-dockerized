import express from "express"
import path from "path"
import homepageRouter from "./homepageRouter.js"
import assetsRouter from "./assetsRouter.js"
import { createProxyMiddleware } from "http-proxy-middleware"

const port = process.env.PORT || 3000
const publicPath = path.join(path.resolve(), "public")
const distPath = path.join(path.resolve(), "dist")

const app = express()

app.use(
  "/api",
  createProxyMiddleware({
    target: process.env.REST_API_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
)

if (process.env.NODE_ENV === "PROD") {
  app.use("/", express.static(distPath))
} else {
  app.use("/", express.static(publicPath))
  app.use("/src", assetsRouter)
}

app.use(homepageRouter)

app.listen(port, () => {
  console.log("Server listening on port", port)
})
