import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import mongoose from 'mongoose'
import schema from './schema/schema.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(5000, () => {
    mongoose.connect('mongodb://localhost/GraphQL-Tutorial', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    console.log('http://localhost:5000')
})
