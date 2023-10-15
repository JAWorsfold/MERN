import express from 'express'
import { Workout } from '../models/workout'

export const workouts = express.Router()

workouts.get('/', (_, res) => {
  res.json({ msg: 'GET all workouts' })
})

workouts.get('/:id', (_, res) => {
  res.json({ msg: 'GET a single workout' })
})

workouts.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  await Workout.create({ title, load, reps })
    .then((workout) => res.status(200).json(workout))
    .catch((err) =>
      res.status(400).json((({ name, message }) => ({ name, message }))(err))
    )
})

workouts.delete('/:id', (_, res) => {
  res.json({ msg: 'DELETE a new workout' })
})

workouts.patch('/:id', (_, res) => {
  res.json({ msg: 'PATCH a new workout' })
})
