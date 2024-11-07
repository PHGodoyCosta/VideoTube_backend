import express, { Request, Response } from 'express'

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Server ON")
})

app.listen(3001, () => {
    console.log("Server is runnig -> http://localhost:3001")
})