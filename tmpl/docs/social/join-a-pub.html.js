var com = require('../../com.part')
var page = require('../../page.part')

module.exports = () => page({
  title: 'Join a Pub',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/join-a-pub.html',
  content: `
    <p>
      If you want to connect with users across the net, you need to be followed by a Pub server.
    </p>
    <h2>What are Pubs?</h2>
    <p>
      Some homes and offices can't accept peer-to-peer connections over the Internet.
      You can solve this with <a href="https://en.wikipedia.org/wiki/Hole_punching_(networking)">"NAT Hole-Punching,"</a> but it can be slow and sometimes fails.
      Instead, Scuttlebot solves this with Pubs.
    </p>
    <p>
      Pubs are bot-users that have public IP addresses, and who follow real users.
      They dont have any special authority, but they do keep your data backed up and easy-to-access.
      You can have more than one, and change pubs any time, but you need at least one to reach friends over the net.
    </p>
    <blockquote>
      If you want to only sync by Wifi, or dont want to sync with anyone at all, you can skip this step.
    </blockquote>
    <h2>Joining a Pub</h2>
    <p>
      First get an invite-code from a Pub operator, or <a href="/docs/config/create-a-pub.html">create your own Pub.</a>
      You can ask for invites via the #scuttlebutt channel, on Freenode.
    </p>
    <p>
      To use the invite, follow this command:
    </p>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <p>
      Your Scuttlebot will now connect to, and sync with, the Pub. Other users can then sync with the pub to receive your feed.
    </p>

    <ul class="see-also">
      <li><a href="/apis/scuttlebot/invite.html">Scuttlebot.Invite API</a></li>
    </ul>
    <p class="next"><a href="/docs/advanced/links.html">Links</a></p>
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