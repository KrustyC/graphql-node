import _ from 'lodash'
import mongoose from 'mongoose'
import config from './config'

mongoose.Promise = global.Promise

export default function connectToDb() {
  const dbUser = config('dbConfig.user')
  const dbPass = config('dbConfig.pass')
  const dbName = config('dbConfig.name')
  const dbPort = config('dbConfig.port')

  const credentialString = dbUser && dbPass ? `${dbUser}:${dbPass}@` : ''

  const opts = dbUser && dbPass ? {
    user: config.dbuser,
    pass: config.dbpass,
    auth: {
      authdb: 'admin'
    }
  } : {}

  if (!_.isNull(config('dbConfig.connectionString'))) {
    mongoose.connect(config('dbConfig.connectionString'))
  } else {
    mongoose.connect(`mongodb://${credentialString}localhost:${dbPort}/${dbName}`, opts)
  }
}
