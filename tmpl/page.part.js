var head = require('./head.part')
var tabs = require('./tabs.part')
var leftnav = require('./leftnav.part')
var footer = require('./footer.part')

module.exports = (opts) => {

  // render the hero
  var hero = ''
  if (opts.hero) {
    hero = opts.hero
  } else {
    hero = `<div class="hero small">
      <h1><a href="/"><img src="/img/hermies-256.png"></a> Scuttlebot</h1>
    </div>`
  }

  // pick the navs
  var tabFn = tabs[opts.section || 'docs']
  var leftnavFn = leftnav[opts.tab || 'basics']

  // render the page
  return `<html>
    ${head()}
    <body>
      ${hero}
      ${tabs.sections(opts.section)}
      ${tabFn(opts.tab)}
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