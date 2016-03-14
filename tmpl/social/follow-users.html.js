var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'social',
  path: '/social/follow-users.html',
  content: `
    <p>
      Following is controlled by <code>type:contact</code> messages that are published on the user${"'"}s feed.
    </p>

    <h2>Follow users</h2>
    ${ com.code({ js: jsSnippet1, bash: bashSnippet1 }) }

    <h2>Unfollow users</h2>
    ${ com.code({ js: jsSnippet2, bash: bashSnippet2 }) }

    <p class="next"><a href="/social/query-the-social-graph.html">Query the social graph</a></p>
    <ul class="see-also">
      <li><a href="/advanced/message-schemas.html">Message schemas</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
    </ul>
  `
})

var jsSnippet1 = `
sbot.publish({
  type: 'contact',
  contact: feedId,
  following: true 
}, cb)
`

var bashSnippet1 = `
sbot publish --type contact --contact {feedId} --following
`

var jsSnippet2 = `
sbot.publish({
  type: 'contact',
  contact: feedId,
  following: false
}, cb)
`

var bashSnippet2 = `
sbot publish --type contact --contact {feedId} --no-following
`