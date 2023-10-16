import { Schema, model } from 'mongoose'

export interface IWorkout {
  title: string
  reps: number
  load: number
}

const workoutSchema: Schema<IWorkout> = new Schema<IWorkout>(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export const Workout = model<IWorkout>('Workout', workoutSchema)
