var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'basics',
  path: '/basics/open-a-client.html',
  content: `
    <h2>Open a client</h2>
    ${ com.code({ js: jsSnippet }) }
    <p class="next"><a href="/basics/read-the-log.html">Read the log</a></p>
    <ul class="see-also">
      <li><a href="/modules/ssb-client.html">SSB-Client API</a> for config options.</li>
    </ul>
  `
})

var jsSnippet = `
var ssbClient = require('ssb-client')
ssbClient(function (err, ssb) {
  if (err)
    throw err

  // ssb is now ready. when done:
  ssb.close()
})`