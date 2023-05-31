import fs from "fs/promises"
import path from "path"

const environment = process.env.NODE_ENV

const parseManifest = async () => {
  if (environment !== "PROD") return {}

  const manifestPath = path.join(path.resolve(), "dist", "manifest.json")
  const manifestFile = await fs.readFile(manifestPath)

  return JSON.parse(manifestFile)
}

const data = {
  environment,
  manifest: await parseManifest(),
  script: "src/main.ts",
}

const homeView = async (req, res) => {
  res.render("index.ejs", data)
}

export { homeView }
