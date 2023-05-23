import express, { Application, Request, Response } from "express"

const app: Application = express()
const port: number = 3001

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!")
})

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/test", (_req, res) => {
  res.json({ message: "⚡ Backend Connected ⚡" })
})
