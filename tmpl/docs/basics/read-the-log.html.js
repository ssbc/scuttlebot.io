var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Read the log',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/read-the-log.html',
  content: `
    <h2>Read the log</h2>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <p class="next"><a href="/docs/basics/publish-a-file.html">Publish a file</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot.html"><code>createLogStream()</code> API</a></li>
      <li><a href="/advanced/advanced-queries.html">Advanced queries</a></li>
      <li><a href="/advanced/pull-streams.html">Pull streams</a></li>
    </ul>
  `
})

var jsSnippet = `
var pull = require('pull-stream')
pull(
  sbot.createLogStream({ limit: 100 }),
  pull.collect(err, msgs) {
    if (err)
      throw err
    console.log(msgs)
  })
)
`

var bashSnippet = `
sbot log --limit 100
`