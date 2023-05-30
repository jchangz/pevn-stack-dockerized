import express from "express"

const assetsRouter = express.Router()

const supportedAssets = ["svg", "png", "jpg", "png", "jpeg", "mp4", "ogv"]

const assetExtensionRegex = () => {
  const formattedExtensionList = supportedAssets.join("|")

  return new RegExp(`/.+\.(${formattedExtensionList})$`)
}

assetsRouter.get(assetExtensionRegex(), (req, res) => {
  res.redirect(303, `http://localhost:5173/src${req.path}`)
})

export default assetsRouter
