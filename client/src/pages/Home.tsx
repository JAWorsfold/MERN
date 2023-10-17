import { useEffect, useState } from 'react'
import { HydratedDocument } from 'mongoose'
import { IWorkout } from '../../../server/src/models/workout'
import { Workout } from '../components/Workout'

export const Home = () => {
  const [workouts, setWorkouts] = useState<HydratedDocument<IWorkout>[]>([])

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()
      if (response.ok) setWorkouts(json)
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <Workout key={workout.id} workout={workout} />
          ))}
      </div>
    </div>
  )
}
