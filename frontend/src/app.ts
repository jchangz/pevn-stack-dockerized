import express from "express"
import path from "path"
import homeRouter from "./routes/homepage.js"
import assetsRouter from "./routes/assets.ts"
import { createProxyMiddleware } from "http-proxy-middleware"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const port = process.env.PORT || 3000
const publicPath = path.join(path.resolve(), "public")
const distPath = path.join(path.resolve(), "dist")

const app = express()

app.set("views", path.join(__dirname, "/views"))

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

app.use(homeRouter)

app.listen(port, () => {
  console.log("Server listening on port", port)
})
