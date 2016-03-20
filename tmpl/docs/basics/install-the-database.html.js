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
      <h2>Applications</h2>
      <p>
        Choose a UI for Scuttlebot.
      </p>
    </a>
    <a href="/docs/basics/publish-a-message.html">
      <h2>Read more</h2>
      <p>
        Learn about the API.
      </p>
    </a>
  </div>
`