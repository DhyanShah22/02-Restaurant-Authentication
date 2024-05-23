const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')

require('dotenv').config()
const app = express()
app.use(morgan('dev'))

const userRoute = require('./Routes/userRoutes')

app.use(express.json())
app.use(helmet())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoute)
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log('Connected to DB and listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })