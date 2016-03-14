var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'basics',
  path: '/basics/publish-a-message.html',
  content: `
    <h2>Publish a message</h2>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <p class="next"><a href="/basics/read-the-log.html">Read the log</a></p>
    <ul class="see-also">
      <li><a href="/advanced/message-schemas.html">Message schemas</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
    </ul>
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