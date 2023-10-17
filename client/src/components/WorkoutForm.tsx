import { FormEvent, useState } from 'react'
import { IWorkout } from '../../../server/src/models/workout'

export const WorkoutForm = () => {
  const [title, setTitle] = useState<string>('')
  const [load, setLoad] = useState<number>(0)
  const [reps, setReps] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const workout: IWorkout = { title, load, reps }
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    !response.ok ? setError(json.message) : setError(null)
    if (response.ok) {
      console.log('new workout added', json)
      setTitle('')
      setLoad(0)
      setReps(0)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load:</label>
      <input
        type="number"
        onChange={(e) => setLoad(Number(e.target.value))}
        value={load}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(Number(e.target.value))}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
