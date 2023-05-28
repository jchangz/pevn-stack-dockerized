import express, { Application, Request, Response } from "express"
import pg from "pg"

const app: Application = express()
const port: number = 3001
const Pool = pg.Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!")
})

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/test", (_req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})
