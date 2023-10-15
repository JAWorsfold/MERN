import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()

// middleware
app.use((req, _, next) => {
  console.log(`${req.method} ${req.hostname}:${process.env.PORT}${req.path}`)
  next()
})

app.get('/', (_, res) => {
  res.json({ msg: 'Welcome to the app' })
})

app.listen(process.env.PORT, () => {
  console.log(`Listing on port ${process.env.PORT}`)
})
