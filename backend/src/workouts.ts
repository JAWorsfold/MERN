import express from 'express'

export const workouts = express.Router()

workouts.get('/', (_, res) => {
  res.json({ msg: 'GET all workouts' })
})

workouts.get('/:id', (_, res) => {
  res.json({ msg: 'GET a single workout' })
})

workouts.post('/', (_, res) => {
  res.json({ msg: 'POST a new workout' })
})

workouts.delete('/:id', (_, res) => {
  res.json({ msg: 'DELETE a new workout' })
})

workouts.patch('/:id', (_, res) => {
  res.json({ msg: 'PATCH a new workout' })
})
