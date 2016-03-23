var page = require('./page.part')
var installTheDatabase = require('./docs/basics/install-the-database.html')

// this page is the same as the first guide in basics, but with the big hero
module.exports = () => page({
  section: 'docs',
  tab: 'docs-basics',
  path: '/docs/basics/install-the-database.html',
  hero: `
    <div class="hero big">
      <img src="/img/hermies-256.png">
      <h1>Scuttlebot<br><small>a peer-to-peer messenger<br>for people tired of cloud software</small></h1>
      <p>
        ${''/*<a class="cta" href="javascript:alert('TODO: This will popup to a youtube video demoing sbot install and usage, and then patchwork')">&#9654; See it in action</a>*/}
        <a class="cta dark" href="/docs/basics/install-the-database.html"><small>&#11015;</small> Download now</a>
      </p>
      <p class="description">
        Scuttlebot is an open source <strong>peer-to-peer log store</strong> used as a database, identity provider, and messaging system.
        It features global replication, file-syncronization, and end-to-end encryption.<br>
        <br>
        <a href="/more/protocols/secure-scuttlebutt.html">Read about the protocol</a>.
      </p>
    </div>
  `,
  content: installTheDatabase.content()
})