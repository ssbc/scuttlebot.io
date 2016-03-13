var head = require('./head.part')
var tabs = require('./tabs.part')
var leftnav = require('./leftnav.part')
module.exports = (opts) => {
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

  return `<html>
    ${head()}
    <body>
      ${title}
      ${tabs(opts.tab)}
      <div class="nav-content-unit">
        ${leftnav.basics(opts.path)}
        <div class="content">
          ${opts.content}
        </div>
      </div>
    </body>
  </html>`
}