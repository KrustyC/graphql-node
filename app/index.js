import express from 'express'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
// import { Engine } from 'apollo-engine'
import jwt from 'express-jwt'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import schema from './graphql/schema'
import connectToDb from './config/db'
import formatError from './config/formatError'

import config from './config/config'

const app = express()

// @TODO Get an Apollo Engine Key
// const engine = new Engine({
//   engineConfig: {
//     apiKey: config('engine.apiKey')
//   },
//   graphqlPort: config('apiPort')
// })

// engine.start()

// // This must be the first middleware
// app.use(engine.expressMiddleware())

app.use(cors())
app.use(compression())
// app.use(bodyParser.json())

const isDevelopment = config('env') === 'development'
// const jwtCheck = jwt({ secret: config('jwtSecret') })
// app.use(jwtCheck)


app.use(
  '/graphql',
  bodyParser.json(), // Maybe this and the one below can be movd outside
  jwt({ secret: config('jwtSecret'), credentialsRequired: false }),
  graphqlExpress(req => ({
    formatError,
    context: { user: req.user },
    schema,
    tracing: isDevelopment
  }))
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

if (isDevelopment) {
  app.use(morgan('dev'))
}

export default function runApi() {
  connectToDb()

  const port = config('apiPort')
  app.listen(port, () => {
    // eslint-disable-next-line
    console.info(`\n\nExpress server listening at http://localhost:${port} \n`)
  })
}

