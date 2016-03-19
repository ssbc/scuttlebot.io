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
  <h2>Next: <a href="/apps/index.html">Choose an application</a></h2>
  <p>
    Find a nice UI for Scuttlebot.
    <a href="/apps/index.html">&rarr; Apps page</a>

  <h2>Or: <a href="/docs/basics/open-a-client.html">Continue this guide</a></h2>
  <p>
    Learn how to use Scuttlebot from the commandline, and how to build your own applications.
    <a href="/docs/basics/open-a-client.html">&rarr; Next step in the guide</a>
  </p>
`