var Mocha = require('mocha')
var fs = require('fs')
var path = require('path')
var glob = require('glob')

// Replay configuration
// var Replay = require('replay')
// console.log('Saving fixtures in:')
// console.log(Replay.fixtures)
// finish replay configuration

try {
  console.log('Loading enviroment variables from "../environments/test.json"')
  var filePath = path.join(__dirname, '../environments/test.json')
  var envVars = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  Object.keys(envVars).forEach(function (key) {
    process.env[key] = envVars[key]
  })
} catch (e) {
  console.log('Unable to find "../environments/test.json", loading directly from environment')
}

// Instantiate a Mocha instance.
var mocha = new Mocha({
  ui: 'bdd'
})

// Set test files directory
var testDir = path.join(__dirname, '../test/**/*.spec.js')

if (process.argv[2]) {
  testDir = process.argv[2]
}

// Add each .js file to the mocha instance
var allFiles = glob.sync(testDir)

allFiles.forEach(function (file) {
  mocha.addFile(file)
})

// Run the tests.
mocha.run(function (failures) {
  process.on('exit', function () {
    process.exit(failures) // exit with non-zero status if there were failures
  })
})
