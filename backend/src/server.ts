import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.hostname}:${process.env.PORT}${req.url}`)
  res.json({ msg: 'Welcome to the app' })
})

app.listen(process.env.PORT, () => {
  console.log('Listing on port 3000')
})
