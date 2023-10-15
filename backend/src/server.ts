import * as dotenv from 'dotenv'
import express from 'express'
import { workouts } from './workouts'

dotenv.config()

// express app
const app = express()
// middleware
app.use((req, _, next) => {
  console.log(`${req.method} ${req.hostname}:${process.env.PORT}${req.path}`)
  next()
})

// routes
app.use('/api/workouts', workouts)

// listeners
app.listen(process.env.PORT, () => {
  console.log(`Listing on port ${process.env.PORT}`)
})
