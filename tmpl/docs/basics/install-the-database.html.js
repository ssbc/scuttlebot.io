var com = require('../../com.part')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Install the database',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/install-the-database.html',
  content: module.exports.content()
})

// put content in a separate function so that index.html can reuse it
module.exports.content = () => `
  <h2>Install the database</h2>
  ${ com.code({ bash: `npm install -g scuttlebot` }) }
  <p>
    Install the database to your device, not to a host.
    Each user runs their own Scuttlebot.
  </p>
  <h2>Start the server</h2>
  ${ com.code({ bash: `sbot server` }) }
  <blockquote>
    Scuttlebot server must be running for any of its other commands, or apps, to work.
  </blockquote>
  <h2>Next:</h2>
  <div class="choice-widget">
    <a href="/apps/index.html">
      <h2>Choose an application</h2>
      <p>
        Find a UI for Scuttlebot with the existing applications.
      </p>
    </a>
    <a href="/docs/basics/open-a-client.html">
      <h2>Continue this guide</h2>
      <p>
        Learn how to build your own applications.
      </p>
    </a>
  </div>
`