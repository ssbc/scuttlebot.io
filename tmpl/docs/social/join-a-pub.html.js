var com = require('../../com.part')
var page = require('../../page.part')

module.exports = () => page({
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/join-a-pub.html',
  content: `
    <p>
      If you want to connect with users across the net, you need to be followed by a Pub server.
      This is sometimes called "joining" a Pub.
    </p>
    <h2>Join a Pub</h2>
    <p>
      First get an invite-code from a Pub operator, or <a href="/docs/social/create-a-pub.html">create your own pub.</a>
      Then:
    </p>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <p>
      Your Scuttlebot will now connect to, and sync with, the Pub. Other users can sync with the pub to receive your feed.
    </p>

    <p class="next"><a href="/docs/social/create-a-pub.html">Create a Pub</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot-invite.html">Scuttlebot.Invite API</a></li>
      <li><a href="/docs/social/social-network.html">Social Network</a></li>
    </ul>
  `
})


var jsSnippet = `
sbot.invite.accept(code, function (err) {
  // ...
})
`

var bashSnippet = `
sbot invite.accept {code}
`