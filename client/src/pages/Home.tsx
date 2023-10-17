import { useEffect, useState } from 'react'
import { IWorkout } from '../../../server/src/models/workout'
import { HydratedDocument } from 'mongoose'

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
          workouts.map((workout) => <p key={workout.id}>{workout.title}</p>)}
      </div>
    </div>
  )
}
