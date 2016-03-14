var com = require('../com.part')
var page = require('../page.part')

module.exports = () => page({
  tab: 'modules',
  path: '/modules/ssb-client.html',
  content: `
    <h1>SSB-Client</h1>
    ${ com.code({ js: `
var ssbClient = require('ssb-client')

// simplest usage, connect to localhost sbot
ssbClient(function (err, ssb) {
  // ...
})

// configuration:
var ssbKeys = require('ssb-keys')
var keys = ssbKeys.loadOrCreateSync('./app-private.key')
ssbClient(
  keys,                // optional, defaults to ~/.ssb/secret
  {
    host: 'localhost', // optional, defaults to localhost
    port: 8008,        // optional, defaults to 8008
    key: keys.id       // optional, defaults to keys.id
  },
  function (err, ssb) {
    // ...
  }
)` }) }
    <p><a href="https://github.com/ssbc/ssb-client">View on Github</a></p>
  `
})