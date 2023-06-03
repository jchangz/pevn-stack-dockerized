import { Request, Response } from "express"
import parseManifest from "../utils/manifest.ts"

const environment = process.env.NODE_ENV

const homeView = async (_req: Request, res: Response) => {
  res.render("index.ejs", {
    environment,
    manifest: await parseManifest(),
    script: "src/components/main.ts",
  })
}

export { homeView }
