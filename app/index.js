import express from 'express'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import schema from './config/graphql'
import connectToDb from './config/db'

import config from './config/config'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: config('env') === 'development'
}))

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!')
})

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

