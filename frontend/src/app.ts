import express from "express"
import path from "path"
import pageRouter from "./routes/pageRoutes.ts"
import assetsRouter from "./routes/assets.ts"
import parseManifest from "./utils/manifest.ts"
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

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath))
} else {
  app.use("/", express.static(publicPath))
  app.use("/src", assetsRouter)
}

app.use(pageRouter)

app.use(async (_req, res, next) => {
  const environment = process.env.NODE_ENV
  res.status(404).render("index.ejs", {
    environment,
    manifest: await parseManifest(),
    script: "src/components/404.ts",
    title: "Page Not Found",
  })
  next()
})

app.listen(port, () => {
  console.log("Server listening on port", port)
})
