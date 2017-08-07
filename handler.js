require('./load_env_vars')
const Mongoose = require('mongoose')
const connectOptions = { user: process.env.MONGO_USER, pass: process.env.MONGO_PASS, useMongoClient: true }
Mongoose.connect(process.env.MONGO_URL, connectOptions)

// Load handlers
const helloHandlers = require('./src/services/hello')

const allHandlers = Object.assign({}, helloHandlers)
module.exports = allHandlers
