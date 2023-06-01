import parseManifest from "../utils/manifest.ts"

const environment = process.env.NODE_ENV

const homeView = async (req, res) => {
  res.render("index.ejs", {
    environment,
    manifest: await parseManifest(),
    script: "src/components/main.ts",
  })
}

export { homeView }
