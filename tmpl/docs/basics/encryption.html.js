var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Encryption',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/encryption.html',
  content: `
    <h2>Publish an Encrypted Message</h2>
    ${ com.code({ js: jsSnippet1 }) }
    <h2>Decrypt a Message</h2>
    ${ com.code({ js: jsSnippet2 })}
    <h2>Is a message encrypted?</h2>
    ${ com.code({ js: jsSnippet3 })}
    <p class="next"><a href="/docs/social/follow-users.html">Follow users</a></p>
    <ul class="see-also">
      <li><a href="/advanced/private-box.html">Private Box</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
    </ul>
  `
})

var jsSnippet1 = `
sbot.private.publish(
  // message:
  {
    type: 'post',
    text: 'Hello, friend!'
  },
  // recipient PKs:
  [
    '@hxGxqPrplLjRG2vtj...wQpS730nNwE=.ed25519',
    '@EMovhfIrFk4NihAKn...8pTxJNgvCCY=.ed25519'
  ],
  // cb:
  function (err, privateMsg) {
    // privateMsg.value.content is
    // an encrypted string
  }
)
`

var jsSnippet2 = `
sbot.private.unbox(
  privateMsg.value.content,
  function (err, content) {
    // 'content' is now an object
    // (if you were a recipient)
  }
)
`

var jsSnippet3 = `
function isPlaintext (msg) {
  return (typeof msg.value.content == 'object')
}
function isEncrypted (msg) {
  return (typeof msg.value.content == 'string')
}
`