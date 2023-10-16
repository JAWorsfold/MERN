import Express from 'express'
import { IWorkout, Workout } from '../models/workout'

type ControllerPattern = (
  req: Express.Request,
  res: Express.Response
) => Promise<Express.Response>

// get all workouts
export const getWorkouts: ControllerPattern = async (_req, res) => {
  return await Workout.find({})
    .sort({ createdAt: -1 })
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) =>
      res.status(400).json((({ name, message }) => ({ name, message }))(err))
    )
}

// get single workout
export const getWorkout: ControllerPattern = async (req, res) => {
  const { id } = req.params
  return await Workout.findById({ id })
    .sort({ createdAt: -1 })
    .then((workout) => res.status(200).json(workout))
    .catch((err) =>
      res.status(400).json((({ name, message }) => ({ name, message }))(err))
    )
}

// create a new workout

export const createWorkout: ControllerPattern = async (req, res) => {
  const { title, load, reps }: IWorkout = req.body
  return await Workout.create({ title, load, reps })
    .then((workout) => res.status(200).json(workout))
    .catch((err) =>
      res.status(400).json((({ name, message }) => ({ name, message }))(err))
    )
}

// app.get('/', function (_req: Express.Request, res: Express.Response) {

// delete a workout

// patch a workout
