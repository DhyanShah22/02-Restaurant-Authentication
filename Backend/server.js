const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')


require('dotenv').config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))

const corsOptions = {
  origin: 'http://18.118.110.8:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions))
app.use(helmet())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
const userRoute = require('./Routes/userRoutes')

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
