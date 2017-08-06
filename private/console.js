var repl = require('repl')
var replHistory = require('repl.history')
var fs = require('fs')
var path = require('path')
var glob = require('glob')

// Load ENV vars from ecosystem-dev.json
try {
  console.log('Loading enviroment variables from "../environments/development.json"')
  var filePath = path.join(__dirname, '../environments/development.json')
  var fileContent = fs.readFileSync(filePath, 'utf8')
  var envVars = JSON.parse(fileContent)
  Object.keys(envVars).forEach(function (key) {
    process.env[key] = envVars[key]
  })
} catch (e) {
  console.log('Unable to find "../environments/development.json", loading directly from environment')
}
// All variables are loaded

// Load all modules in src
function loadVariables () {
  var AllJsFilesPattern = path.join(__dirname, '../src/**/*.js')
  var allSrcFiles = glob.sync(AllJsFilesPattern)
  return allSrcFiles.reduce((contextSum, file) => {
    var module = path.basename(file, '.js')
    contextSum[module] = require(file)
    return contextSum
  }, {})
}

var initialContext = loadVariables()

var replServer = repl.start({
  prompt: 'Api > '
})

replHistory(replServer, path.join(__dirname, '../.console_history'))

Object.assign(replServer.context, initialContext)

function reload () {
  Object.assign(replServer.context, loadVariables())
}

replServer.context.reload = reload
