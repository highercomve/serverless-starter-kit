const helloHandler = (event, context, callback) => {
  const test = Object.assign({}, { MONGO_URL: process.env.MONGO_URL }, event)
  const response = {
    statusCode: 200,
    body: JSON.stringify(test)
  }

  callback(null, response)
}

// Handlers names must be unique
module.exports = {
  helloHandler: helloHandler
}
