require('./load_env_vars')
const Mongoose = require('mongoose')
const connectOptions = { useMongoClient: true }
const MONGO_URL = process.env.MONGO_URL || ''
Mongoose.connect(MONGO_URL, connectOptions)

// Load handlers
const signinHandler = require('./src/auth/signin')

const allHandlers = Object.assign({}, signinHandler)

module.exports = allHandlers
