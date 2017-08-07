var repl = require('repl')
var replHistory = require('repl.history')
var path = require('path')
var glob = require('glob')

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
// Load handler and initializate mongo
initialContext['handlers'] = require('../handler.js')

var replServer = repl.start({
  prompt: 'Api > '
})

replHistory(replServer, path.join(__dirname, '../.console_history'))

Object.assign(replServer.context, initialContext)

function reload () {
  Object.assign(replServer.context, loadVariables())
}

replServer.context.reload = reload
