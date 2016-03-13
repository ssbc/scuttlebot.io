var page = require('../page.part')
module.exports = () => page({
  tab: 'basics',
  path: '/basics/install-the-database.html',
  content: module.exports.content()
})

// put content in a separate function so that index.html can reuse it
module.exports.content = () => `
  <h2>Install the database</h2>
  <code><pre>npm install -g scuttlebot</pre></code>
  <h2>Start the server</h2>
  <code><pre>sbot server</pre></code>
`
  // <h2>Autostart the server (OSX)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Ubuntu)</h2>
  // <p>todo</p>
  // <h2>Autostart the server (Windows)</h2>
  // <p>todo</p>