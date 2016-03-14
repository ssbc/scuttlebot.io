var page = require('../page.part')
module.exports = () => page({
  tab: 'whitepapers',
  path: '/whitepapers/secret-handshake.html',
  content: `
    <h2>Secret Handshake</h1>
    <p>
      Secret Handshake is an encrypted channel protocol based on a mutually authenticating key agreement handshake, with forward secure identity metadata.
      It&#39;s used by Scuttlebot to authenticate and encrypt peer connections.
    </p>
    <p><a href="/whitepapers/shs.pdf">Read the White Paper</a></p>

    <p class="next"><a href="/whitepapers/private-box.html">Private Box</a></p>
  `
})