import Express from 'express'
import { IWorkout, Workout } from '../models/workout'
import { errorWithoutStack, workoutNotFound } from '../utilities/errors'
import mongoose from 'mongoose'

type ControllerPattern = (
  req: Express.Request,
  res: Express.Response
) => Promise<Express.Response<IWorkout> | void>

export const getWorkouts: ControllerPattern = async (_req, res) => {
  return await Workout.find({})
    .sort({ createdAt: -1 })
    .then((workouts) => res.status(200).json(workouts))
    .catch((err: Error) => res.status(400).json(errorWithoutStack(err)))
}

export const getWorkout: ControllerPattern = async (req, res) => {
  const { id } = req.params
  return await Workout.findById(id)
    .sort({ createdAt: -1 })
    .then((workout) => {
      mongoose.Types.ObjectId.isValid(id) && workout
        ? res.status(200).json(workout)
        : res.status(404).json(workoutNotFound(req))
    })
    .catch((err: Error) => res.status(400).json(errorWithoutStack(err)))
}

export const createWorkout: ControllerPattern = async (req, res) => {
  const { title, load, reps }: IWorkout = req.body
  return await Workout.create({ title, load, reps })
    .then((workout) => res.status(200).json(workout))
    .catch((err: Error) => res.status(400).json(errorWithoutStack(err)))
}

export const deleteWorkout: ControllerPattern = async (req, res) => {
  const { id } = req.params
  return await Workout.findOneAndDelete({ _id: id })
    .then((workout) => {
      mongoose.Types.ObjectId.isValid(id) && workout
        ? res.status(200).json(workout)
        : res.status(404).json(workoutNotFound(req))
    })
    .catch((err: Error) => res.status(400).json(errorWithoutStack(err)))
}

export const updateWorkout: ControllerPattern = async (req, res) => {
  const { id } = req.params
  return await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    .then((workout) => {
      mongoose.Types.ObjectId.isValid(id) && workout
        ? res.status(200).json(workout)
        : res.status(404).json(workoutNotFound(req))
    })
    .catch((err: Error) => res.status(400).json(errorWithoutStack(err)))
}
