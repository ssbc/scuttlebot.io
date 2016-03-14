var com = require('../com.part')
var page = require('../page.part')
module.exports = () => page({
  tab: 'basics',
  path: '/basics/install-the-database.html',
  content: module.exports.content()
})

// put content in a separate function so that index.html can reuse it
module.exports.content = () => `
  <h2>Install the database</h2>
  ${ com.code({ bash: `npm install -g scuttlebot` }) }
  <h2>Start the server</h2>
  ${ com.code({ bash: `sbot server` }) }
  <p><a class="cta" href="javascript:alert('TODO: This will popup to a youtube video demoing sbot install and usage, and then patchwork')">&#9654; See it in action</a></p>
  <p class="next"><a href="/basics/open-a-client.html">Open a client</a></p>
`
  // <h2>Autostart the server (OSX)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Ubuntu)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Windows)</h2>
  // <p>todo</p>