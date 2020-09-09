const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/feb2020', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to DB')
    })
    .catch((error) => {
        console.log('Error connecting to DB')
    })
}

module.exports = configureDB
