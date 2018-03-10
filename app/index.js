import express from 'express'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
// import { Engine } from 'apollo-engine'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import schema from './schema'
import connectToDb from './config/db'

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
app.use(bodyParser.json())

app.use('/graphql', graphqlExpress({
  schema,
  tracing: true
}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

if (config('env') === 'development') {
  app.use(morgan('dev'))
}

export default function runApi() {
  connectToDb()

  const port = config('apiPort')
  app.listen(port, () => {
    // eslint-disable-next-line
    console.info(`\n\nExpress listen at http://localhost:${port} \n`)
  })
}

