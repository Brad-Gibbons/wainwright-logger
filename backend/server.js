require('dotenv').config()

const express = require('express');

const mongoose = require('mongoose')
const fellRoutes = require('./routes/fells')
const userRoutes = require('./routes/user')
// load express
const app = express();

// middle
app.use((req, res, next) => {
    console.log(req.path, req.method)
    // move it on
    next()
})
// checks body and parses it to req object
app.use(express.json())

// routes
app.use('/api/fells', fellRoutes)
app.use('/api/user', userRoutes)


// connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!')
    console.log(process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })
