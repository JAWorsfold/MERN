// database
export interface Credentials {
  user: string
  password: string
}
type MongoDBConnector = (
  credentials: Credentials
) => (host: string) => (port: string) => string
export const makeMongoDBConnector: MongoDBConnector =
  (credentials) => (host) => (port) =>
    `mongodb://${credentials.user}:${credentials.password}@${host}:${port}`
