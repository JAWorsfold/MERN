import Express from 'express'

interface SimpleResponse {
  name: string
  message: string
}

type HTTP404 = (req: Express.Request) => SimpleResponse
export const workoutNotFound: HTTP404 = (req) => ({
  name: 'WorkoutNotFound',
  message: `Find failed for value \"${req.params.id}\"`,
})

type HTTP400 = (err: Error) => SimpleResponse
export const errorWithoutStack: HTTP400 = (err) =>
  (({ name, message }) => ({ name, message }))(err)
