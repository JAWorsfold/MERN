import Express from 'express'
import { IWorkout, Workout } from '../models/workout'

type ControllerPattern = (
  req: Express.Request,
  res: Express.Response
) => Promise<Express.Response>

// get all workouts

// get single workout

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
