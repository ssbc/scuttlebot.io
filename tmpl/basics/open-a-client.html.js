var page = require('../page.part')
module.exports = () => page({
  tab: 'basics',
  path: '/basics/open-a-client.html',
  content: `
    <h2>Open a client</h2>
    <code><pre>npm install -g scuttlebot</pre></code>
  `
})