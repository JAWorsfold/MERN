import express from 'express'

export const workouts = express.Router()

workouts.get('/', (_, res) => {
  res.json({ msg: 'Welcome to the app' })
})
