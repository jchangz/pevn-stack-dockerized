import express from "express"
import { homeView } from "../controller/homepageController.ts"

const homeRouter = express.Router()

homeRouter.get("/", homeView)

export default homeRouter
