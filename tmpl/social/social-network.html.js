var page = require('../page.part')
module.exports = () => page({
  tab: 'social',
  path: '/social/social-network.html',
  content: `
    <h2>Cypherspace: the Cryptographic Social Network</h2>
    <p>
      Scuttlebot forms a global cryptographic social network with its peers.
      Each user is identified by a public key, and publishes a log of signed messages, which other users "follow."
    </p>
    <p>
      Scuttlebot searches the P2P mesh for new messages and files from followed users and from FoaFs.
      The messages and files are stored locally, indefinitely, for applications to read.
    </p>

    <h3>Identity</h3>
    <p>
      Users are identified by confirmations in the social graph.
      This is known as a Web-of-Trust.
      There is no global registry of usernames.
      Instead, users name themselves, and share petnames for each other.
    </p>
    <p>
      Discovery occurs by examining the social graph, or by out-of-band sharing.    
      Applications can analyze the follow-graph, and look for "flag" messages, to determine who is trust-worthy in the network.
    </p>

    <h3>Pub Servers</h3>
    <p>
      "Pubs" are bot-users that have public IPs.
      They follow users and rehost the messages to other peers, ensuring good uptime and no firewall blockage.
    </p>
    <p>
      Pubs have no special privileges, and are not trusted by users.
      However, because Scuttlebot has no DHT or NAT-traversal utilities, users must "join" a Pub to distribute their messages on the WAN.
    </p>
    <p>
      Scuttlebot can change Pubs, or join more than one, and sync directly over Wifi.
      Identity is not tied to the Pubs.
    </p>
    <p class="next"><a href="/social/follow-users.html">Follow users</a></p>
    <ul class="see-also">
      <li><a href="/whitepapers/secure-scuttlebutt.html">Secure Scuttlebutt</a></li>
    </ul>
  `
})