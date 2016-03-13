var head = require('./head.part')
var tabs = require('./tabs.part')
var leftnav = require('./leftnav.part')
var footer = require('./footer.part')

module.exports = (opts) => {

  // render the hero
  var title = ''
  if (opts.bigHero) {
    title = `<div class="hero big">
      <img src="/img/hermies-256.png">
      <h1>Scuttlebot<br><small>peer-to-peer mesh database</small></h1>
    </div>`
  } else {
    title = `<div class="hero small">
      <h1><a href="/"><img src="/img/hermies-256.png"></a> Scuttlebot<br><small>peer-to-peer mesh database</small></h1>
    </div>`
  }

  // pick the nav
  var leftnavFn = leftnav[opts.tab || 'basics']

  // render the page
  return `<html>
    ${head()}
    <body>
      ${title}
      ${tabs(opts.tab)}
      <div class="nav-content-unit">
        ${leftnavFn(opts.path)}
        <div class="content">
          ${opts.content}
        </div>
      </div>
      ${footer(opts.path)}
    </body>
  </html>`
}