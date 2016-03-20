var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Publish a message',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/publish-a-message.html',
  content: `
    <h2>Publish a message</h2>
    <p>
      Every user has an append-only log of JSON messages, called their feed.
    </p>
    <p>
      Use this command to publish your first message:
    </p>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <ul class="see-also">
      <li><a href="/apis/scuttlebot/ssb.html#publish-async">Publish API</a></li>
      <li><a href="/docs/message-types/post.html">Post messages</a></li>
    </ul>
    <p class="next"><a href="/docs/basics/read-your-log.html">Read your log</a></p>
  `
})

var jsSnippet = `
sbot.publish({
  type: 'post',
  text: 'Hello, world!'
}, function (err, msg) {
  // 'msg' includes the hash-id and headers
})
`

var bashSnippet = `
sbot publish --type post --text "Hello, world!"
`