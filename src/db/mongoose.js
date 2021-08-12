const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})