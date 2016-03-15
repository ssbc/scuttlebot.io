var page = require('./page.part')
var installTheDatabase = require('./basics/install-the-database.html')

// this page is the same as the first guide in basics, but with the big hero
module.exports = () => page({
  bigHero: true,
  tab: 'basics',
  path: '/basics/install-the-database.html',
  hero: `
    <div class="hero big">
      <img src="/img/hermies-256.png">
      <h1>Scuttlebot<br><small>a social p2p database<br>for cloud-free apps</small></h1>
      <p>
        <a class="cta" href="javascript:alert('TODO: This will popup to a youtube video demoing sbot install and usage, and then patchwork')">&#9654; See it in action</a>
        <a class="cta dark" href="/basics/install-the-database.html"><small>&#11015;</small> Download now</a>
      </p>
      <p class="description">
        Scuttlebot is an open source <strong>peer-to-peer log store</strong> used as a database, identity provider, and messaging system.
        It features global replication, file-syncronization, and end-to-end encryption.<br>
        <br>
        Scuttlebot behaves like any <a href="http://kappa-architecture.com">Kappa Architecture</a> DB.
        Applications read and write freely to the local instance, and, in the background, the database syncs with known peers.<br>
        <br>
        Users are identified by public keys, and follow each other socially to form a web-of-trust.
        Peers do not have to be trusted, and can share logs and files on behalf of other peers.
        <a href="/protocols/secure-scuttlebutt.html">Read about the protocol.</a>
      </p>
    </div>
  `,
  content: installTheDatabase.content()
})