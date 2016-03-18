var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Query the social graph',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/query-the-social-graph.html',
  content: `
    <h2>Get the current user ID</h2>
    ${ com.code({ js: jsSnippet1, bash: bashSnippet1 }) }

    <h2>Fetch the social graph</h2>
    ${ com.code({ js: jsSnippet2, bash: bashSnippet2 }) }

    <h2>List degrees-of-connection between users</h2>
    ${ com.code({ js: jsSnippet3, bash: bashSnippet3 }) }

    <p class="next"><a href="/docs/social/update-your-profile.html">Update your profile</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot-friends.html">Scuttlebot.Friends API</a></li>
      <li><a href="/modules/scuttlebot-friends.html">Follow users</a></li>
    </ul>
  `
})

var jsSnippet1 = `
sbot.whoami(function (err, res) {
  // 'res.id' will have the pubkey id
})
`

var bashSnippet1 = `
sbot whoami
`


var jsSnippet2 = `
sbot.friends.all(function (err, graph) {
  // ...
})
`

var bashSnippet2 = `
sbot friends.all
`

var jsSnippet3 = `
sbot.friends.hops(userId, function (err, list) {
  // ...
})
`

var bashSnippet3 = `
sbot friends.hops {userId}
`