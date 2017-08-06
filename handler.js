require('./load_env_vars')
const Mongoose = require('mongoose')
Mongoose.connect(process.env.MONGO_URL)

// Load handlers
const helloHandlers = require('./src/services/hello')

const allHandlers = Object.assign({}, helloHandlers)
console.log(allHandlers)
module.exports = allHandlers
