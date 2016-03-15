var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/open-a-client.html',
  content: `
    <h2>Open a client</h2>
    ${ com.code({ js: jsSnippet }) }
    <p class="next"><a href="/docs/basics/publish-a-message.html">Publish a message</a></p>
    <ul class="see-also">
      <li><a href="/modules/ssb-client.html">SSB-Client API</a> for config options.</li>
    </ul>
  `
})

var jsSnippet = `
var ssbClient = require('ssb-client')
ssbClient(function (err, sbot) {
  if (err)
    throw err

  // sbot is now ready. when done:
  sbot.close()
})`