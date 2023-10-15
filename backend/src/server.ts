import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { workouts } from './workouts'
import { Credentials, makeMongoDBConnector } from './utils'

dotenv.config()

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, _, next) => {
  console.log(`${req.method} ${req.hostname}:${process.env.PORT}${req.path}`)
  next()
})

// routes
app.use('/api/workouts', workouts)

// database connection
const credentials: Credentials = {
  user: process.env.DB_USER ?? 'user',
  password: process.env.DB_PASSWORD ?? 'password',
}
const host: string = process.env.DB_HOST ?? 'localhost'
const port: string = process.env.DB_PORT ?? 'port'
const mongoDBURI = makeMongoDBConnector(credentials)(host)(port)
console.log(mongoDBURI)

mongoose
  .connect(mongoDBURI)
  .then(() => {
    // listeners
    app.listen(process.env.PORT, () => {
      console.log(`Listing on port ${process.env.PORT}`)
    })
  })
  .catch((err) => console.log(err))

