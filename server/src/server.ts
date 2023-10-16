import * as dotenv from 'dotenv'
import Express from 'express'
import mongoose from 'mongoose'
import { workouts } from './routes/workouts'
import { Credentials, makeMongoDBConnector } from './utilities'

dotenv.config()

// express app
const app: Express.Application = Express()

// middleware
app.use(Express.json())
app.use((req: Express.Request, _, next: Express.NextFunction) => {
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
const port: string = process.env.DB_PORT ?? '27017'
const name: string = process.env.DB_NAME ?? ''
const mongoDBURI = makeMongoDBConnector(credentials)(host)(port)(name)
console.log(mongoDBURI)

const app_port: string = process.env.PORT ?? '3000'
mongoose
  .connect(mongoDBURI)
  .then(() => {
    // listeners
    app.listen(app_port, () => {
      console.log(`Listing on port ${app_port}`)
    })
  })
  .catch((err) => console.log(err))
