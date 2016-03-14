var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'basics',
  path: '/basics/open-a-client.html',
  content: `
    <h2>Open a client</h2>
    ${ com.code({ js: ssbClientSnippet }) }
    <p>See <a href="/modules/ssb-client.html">ssb-client API</a> for config options.</p>
  `
})

var ssbClientSnippet = `
var ssbClient = require('ssb-client')
ssbClient(function (err, ssb) {
  if (err)
    throw err

  // ssb is now ready
})`