import Express from 'express'
import { createWorkout } from '../controllers/workouts'

export const workouts = Express.Router()

workouts.get('/', (_, res) => {
  res.json({ msg: 'GET all workouts' })
})

workouts.get('/:id', (_, res) => {
  res.json({ msg: 'GET a single workout' })
})

workouts.post('/', createWorkout)

workouts.delete('/:id', (_, res) => {
  res.json({ msg: 'DELETE a new workout' })
})

workouts.patch('/:id', (_, res) => {
  res.json({ msg: 'PATCH a new workout' })
})
