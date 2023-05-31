import express from "express"
import { homeView } from "../controller/homepageController.ts"

const pageRouter = express.Router()

pageRouter.get("/", homeView)

export default pageRouter
