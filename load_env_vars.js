var fs = require('fs')
var path = require('path')

// Load ENV vars from ecosystem-dev.json
try {
  console.log('Loading enviroment variables from "./environments/development.json"')
  var filePath = path.join(__dirname, './environments/development.json')
  var fileContent = fs.readFileSync(filePath, 'utf8')
  var envVars = JSON.parse(fileContent)
  Object.keys(envVars).forEach(function (key) {
    process.env[key] = envVars[key]
  })
} catch (e) {
  console.log(e)
  console.log('Unable to find "./environments/development.json", loading directly from environment')
}