import { HydratedDocument } from 'mongoose'
import { IWorkout } from '../../../server/src/models/workout'

interface WorkoutType {
  workout: HydratedDocument<IWorkout>
}
export const Workout = ({ workout }: WorkoutType) => {
  const workoutCreatedAt = new Date(workout.createdAt ?? '').toDateString()

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workoutCreatedAt}</p>
    </div>
  )
}
