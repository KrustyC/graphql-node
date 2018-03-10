import _ from 'lodash'

const { env } = process

const configValues = {
  env: env.ENVIRONMENT,
  apiPort: env.API_PORT,
  appUrl: env.APP_URL,
  jwtSecret: env.JWT_SECRET,
  dbConfig: {
    mock: env.DB_IS_MOCK || false,
    name: env.DB_NAME,
    port: env.DB_PORT,
    user: env.DB_USER,
    pass: env.DB_PASSWORD,
    connectionString: env.DB_CONNECTION_STRING || null
  }
}

/**
 * Returns a value for a given config key
 */
export default function config(key) {
  if (!key) {
    throw new Error('No key given')
  }

  if (!_.has(configValues, key)) {
    throw new Error(`Config has no key named ${key}`)
  }

  return _.get(configValues, key)
}
