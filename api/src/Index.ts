import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import connect from './Database';
var { graphqlHTTP } = require('express-graphql');
import Schema from './graphql/Schema'




// INITIALIZATION
const app = express()
connect()


// MIDELWARE
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// CONFIGURATION

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  context: {
    messageId: 'test'
  }
}));


app.listen(3000,()=>{ console.log('conected on Port 3000')})