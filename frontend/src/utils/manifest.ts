import fs from "fs/promises"
import path from "path"

const environment = process.env.NODE_ENV

const parseManifest = async () => {
  if (environment !== "production") return {}

  const manifestPath = path.join(path.resolve(), "dist", "manifest.json")
  const manifestFile = await fs.readFile(manifestPath)
// @ts-ignore
  return JSON.parse(manifestFile)
}

export default parseManifest
