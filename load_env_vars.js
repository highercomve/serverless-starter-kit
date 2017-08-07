var fs = require('fs')
var path = require('path')

// Load ENV vars from ecosystem-dev.json
try {
  var env = process.env.NODE_ENV || 'development'
  console.log('Loading enviroment variables from "./environments/' + env + '.json"')
  var filePath = path.join(__dirname, './environments/' + env + '.json')
  var fileContent = fs.readFileSync(filePath, 'utf8')
  var envVars = JSON.parse(fileContent)
  Object.keys(envVars).forEach(function (key) {
    process.env[key] = envVars[key]
  })
} catch (e) {
  console.log(e)
  console.log('Unable to find "./environments/' + env + '.json", loading directly from environment')
}
