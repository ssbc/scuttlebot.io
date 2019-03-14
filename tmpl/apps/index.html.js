var page = require('../page.part')

// this page is the same as the first guide in basics, but with the big hero
module.exports = () => page({
  section: 'apps',
  path: '/apps/index.html',
  content: listing([
    { id: 'patchwork', title: 'Patchwork', desc: 'Inbox, social feed, and profiles.', url: 'https://github.com/ssbc/patchwork' },
    { id: 'patchbay', title: 'Patchbay', desc: 'An alternative Secure Scuttlebutt client interface', url: 'https://github.com/ssbc/patchbay' },
    { id: 'manyverse', title: 'Manyverse', desc: 'Beta Android client', url: 'https://www.manyver.se' },
    { id: 'patchfoo', title: 'Patchfoo', desc: 'Plain SSB web UI. Uses HTML forms instead of client-side JS.', url: 'https://git.scuttlebot.io/%25YAg1hicat%2B2GELjE2QJzDwlAWcx0ML%2B1sXEdsWwvdt8%3D.sha256' },
    { id: 'ferment', title: 'Ferment', desc: 'Peer-to-peer audio publishing and streaming.', url: 'http://ferment.audio' },
    { id: 'ssb-cli-dashboard', title: 'CLI Dashboard', desc: 'Browse the database state.', url: 'https://github.com/ssbc/ssb-cli-dashboard' },
    { id: 'ssb-simple-whois', title: 'CLI Whois', desc: 'Very simple petname->pubkey lookup.', url: 'https://github.com/ssbc/ssb-simple-whois' },
    { id: 'ssb-client-cli', title: 'ssb-client-cli', desc: 'Command Line interface to do basic things with SSB', url: 'https://github.com/qypea/ssb-client-cli' },
    { id: 'sbotc', title: 'sbotc', desc: 'A command-line SSB client in C. Use like the sbot command.', url: 'https://git.scuttlebot.io/%25133ulDgs%2FoC1DXjoK04vDFy6DgVBB%2FZok15YJmuhD5Q%3D.sha256' },
    { id: 'git-ssb', title: 'git ssb', desc: 'git repos and issue tracking', url: 'https://git.scuttlebot.io/%25n92DiQh7ietE%2BR%2BX%2FI403LQoyf2DtR3WQfCkDKlheQU%3D.sha256' },
    { id: 'dnssb', title: 'dnssb', desc: 'publish, distribute and query dns records', url: 'https://git.scuttlebot.io/%25aVOBlkoiDbK99ROZPIaiiDk%2B4q2P4%2BG7MGul4UxkBBM%3D.sha256' },
    { id: 'add-new', title: 'Add an application', url: 'https://github.com/ssbc/scuttlebot.io/blob/master/add-an-application.md' }
  ])
})

function listing (items) {
  return `<div class="cards">
    ${ items.map(item => {
      return `<a class="card" href="${item.url}" target="_blank">
        <img src="/img/${item.id}.png">
        <h4>${item.title}</h4>
        <p>${item.desc||''}</p>
      </a>`
    }).join('') }
  </div>`
}
