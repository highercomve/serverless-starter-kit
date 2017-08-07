
module.exports.helloHandler = (event, context, callback) => {
  const test = Object.assign({}, { MONGO_URL: process.env.MONGO_URL }, event)
  const response = {
    statusCode: 200,
    body: JSON.stringify(test)
  }

  callback(null, response)
}

module.exports.echoHandler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body)
  const test = { message: `${requestBody.greetings}: ${requestBody.name}` }
  const response = {
    statusCode: 200,
    body: JSON.stringify(test)
  }

  callback(null, response)
}
// Could be more than one handler to export
