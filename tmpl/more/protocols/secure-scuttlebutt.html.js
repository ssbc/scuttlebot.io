var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Secure Scuttlebutt',
  section: 'more',
  tab: 'more-protocols',
  path: '/more/protocols/secure-scuttlebutt.html',
  content: `
    <h2>Secure Scuttlebutt</h2>
    <p>Secure Scuttlebutt is a database protocol for unforgeable append-only message feeds.</p>
    <p>
      &quot;Unforgeable&quot; means that only the owner of a feed can update that feed, as enforced by digital signing (see <a href="#security-properties">Security properties</a>).
      This property makes Secure Scuttlebutt useful for peer-to-peer applications.
      Secure Scuttlebutt also makes it easy to encrypt messages.
    </p>

    <hr>

    <h2>Overview</h2>
    <p>
      Scuttlebot forms a global cryptographic social network with its peers.
      Each user is identified by a public key, and publishes a log of signed messages, which other users follow socially.
    </p>
    <p>
      Scuttlebot searches the P2P mesh for new messages and files from followed users and from FoaFs (friend of a friend's).
      The messages and files are stored locally, indefinitely, for applications to read.
    </p>

    <h3>Identity</h3>
    <p>
      Users are identified by confirmations and signals in the social graph.
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

    <hr>

    <h2 id="concepts">Concepts in Depth</h2>
    <p>Building upon Secure Scuttlebutt requires understanding a few concepts that it uses to ensure the unforgeability of message feeds.</p>
    
    <h3 id="identities">Identities</h3>
    <p>
      An identity is simply a <a href="http://ed25519.cr.yp.to/">ed25519 key pair</a>.
      The public key is used as the identifier.
    </p>
    <p>
      There is no worldwide store of identities.
      Users must exchange pubkeys, either by publishing them on their feeds, or out-of-band.
    </p>

    <h3 id="feeds">Feeds</h3>
    <p>
      A feed is a signed append-only sequence of messages.
      Each identity has exactly one feed.
    </p>
    <p>
      Note that append-only means you cannot delete an existing message, or change your history.
      This is enforced by a per-feed blockchain.
      This is to ensure the entire network converges on the same state.
    </p>

    <h3 id="messages">Messages</h3>
    <p>Each message contains:</p>
    <ul>
      <li>A signature</li>
      <li>The signing public key</li>
      <li>A content-hash of the previous message</li>
      <li>A sequence number</li>
      <li>A timestamp</li>
      <li>An identifier of the hashing algorithm in use (currently only &quot;sha256&quot; is supported)</li>
      <li>A content object</li>
    </ul>
    <p>Here&#39;s an example message:</p>
    ${ com.code({ js: `{
  "previous": "%26AC+gU0t74jRGVeDY01...MnutGGHM=.sha256",
  "author": "@hxGxqPrplLjRG2vtjQL87...0nNwE=.ed25519",
  "sequence": 216,
  "timestamp": 1442590513298,
  "hash": "sha256",
  "content": {
    "type": "vote",
    "vote": {
      "link": "%WbQ4dq0m/zu5jxll9zUb...KjZ80JvI=.sha256",
      "value": 1
    }
  },
  "signature": "Sjq1C3yiKdmi1TWvNqxI...gmAQ==.sig.ed25519"
}` }) }

    <h3 id="entity-references-links-">Entity References (Links)</h3>
    <p>
      Messages can reference three types of Secure Scuttlebutt entities: messages, feeds, and blobs (i.e. files).
      Messages and blobs are referred to by their hashes, but a feed is referred to by its signing public key.
    </p>

    <h3 id="confidentiality">Confidentiality</h3>
    <p>
      For private sharing, Scuttlebot uses <a href="http://doc.libsodium.org/">libsodium</a> to encrypt confidential log-entries.
      Feed IDs are public keys, and so once two feeds are mutually following each other, they can exchange confidential data freely.
    </p>

    <h3 id="following">Following</h3>
    <p>
      Users choose which feeds to synchronize by following them.
      Presently, <a href="/modules/scuttlebot-replicate.html">Scuttlebot&#39;s replicate plugin</a>, which is enabled by default, looks on the master user&#39;s feed for <code>type:contact</code> messages to know which users are currently followed.
    </p>

    <h3 id="replication">Replication</h3>
    <p>
      Since feeds are append-only, replication is simple: request all messages in the feed that are newer than the latest message you know about.
      Scuttlebot maintains a table of known peers, which it cycles through, asking for updates for all followed feeds.
    </p>

    <h3 id="gossip">Gossip</h3>
    <p>
      The protocol creates a <a href="https://en.wikipedia.org/wiki/Gossip_protocol">global gossip network</a>.
      This means that information is able to distribute across multiple machines, without requiring direct connections between them.
    </p>
    <p><img src="/img/gossip-graph1.png" alt="Gossip graph"></p>
    <p>Even though Alice and Dan lack a direct connection, they can still exchange feeds:</p>
    <p><img src="/img/gossip-graph2.png" alt="Gossip graph 2"></p>
    <p>
      This is because gossip creates &quot;transitive&quot; connections between computers.
      Dan&#39;s messages travel through Carla and the Pub to reach Alice, and visa-versa.
    </p>

    <h3 id="lan-connectivity">LAN connectivity</h3>
    <p>
      SSB is hostless: each computer installs the same copy of software and has equal rights in the network.
      Devices discover each other over the LAN with multicast UDP and sync automatically.
    </p>

    <h3 id="pub-servers">Pub Servers</h3>
    <p>
      To sync across the Internet, &quot;Pub&quot; nodes run at public IPs and follow users.
      They are essentially mail-bots which improve uptime and availability.
      Users generate invite-codes to command Pubs to follow their friends.
      The Scuttlebot community runs some Pubs, and anybody can create and introduce their own.
    </p>

    <h2 id="security-properties">Security properties</h2>
    <p>
      Secure Scuttlebutt maintains useful security properties even when it is connected to a malicious Secure Scuttlebutt database.
      This makes it ideal as a store for peer-to-peer applications.
    </p>
    <p>
      Imagine that we want to read from a feed for which we know the identity, but we&#39;re connected to a malicious Secure Scuttlebutt instance.
      As long as the malicious database does not have the private key:
    </p>
    <ul>
      <li>The malicious database cannot create a new feed with the same identifier</li>
      <li>The malicious database cannot write new fake messages to the feed</li>
      <li>The malicious database cannot reorder the messages in the feed</li>
      <li>The malicious database cannot send us a new copy of the feed that omits messages from the middle</li>
      <li>The malicious database <em>can</em> refuse to send us the feed, or only send us the first <em>N</em> messages in the feed</li>
      <li>Messages may optionally be encrypted</li>
    </ul>
    <p>
      Additionally there is a protection from the feed owner, through the blockchain.
      The <code>previous</code> content-hash them from changing the feed history after publishing, as a newly-created message wouldn&#39;t match the hash of later messages which were already replicated.
      This ensures the append-only constraint, and thus safe network convergence.
    </p>
  `,
  next: ['/more/protocols/secret-handshake.html', 'Secret Handshake']
})
