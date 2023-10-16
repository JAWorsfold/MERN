import Express from 'express'
import { createWorkout, getWorkout, getWorkouts } from '../controllers/workouts'

export const workouts = Express.Router()

workouts.get('/', getWorkouts)

workouts.get('/:id', getWorkout)

workouts.post('/', createWorkout)

workouts.delete('/:id', (_, res) => {
  res.json({ msg: 'DELETE a new workout' })
})

workouts.patch('/:id', (_, res) => {
  res.json({ msg: 'PATCH a new workout' })
})
