var com = require('../../com.part')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/install-the-database.html',
  content: module.exports.content()
})

// put content in a separate function so that index.html can reuse it
module.exports.content = () => `
  <h2>Install the database</h2>
  ${ com.code({ bash: `npm install -g scuttlebot` }) }
  <h2>Start the server</h2>
  ${ com.code({ bash: `sbot server` }) }
  <p class="next"><a href="/docs/basics/open-a-client.html">Open a client</a></p>
`
  // <h2>Autostart the server (OSX)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Ubuntu)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Windows)</h2>
  // <p>todo</p>