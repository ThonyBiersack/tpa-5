const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const Todos = require('./models/todos')


mongoose.connect('mongodb://localhost:27017/learn-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('Hello World')
})



app.use('/api', require('./routes/api'))

app.listen(3001, () => {
    console.log('server started 0 http://localhost:3001')
})