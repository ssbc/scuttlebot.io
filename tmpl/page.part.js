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
  var tabFn = tabs[opts.section || 'docs'] || ()=>``
  var leftnavFn = leftnav[opts.tab || 'basics']

  // next and see-also
  var seeAlso = '', next = ''
  if (opts.seeAlso)
    seeAlso = `<ul class="see-also">` + opts.seeAlso.map(item => `<li><a href="${item[0]}">${item[1]}</a></li>`).join('') + `</ul>`
  if (opts.next)
    next = `<p class="next"><a href="${opts.next[0]}">${opts.next[1]}</a></p>`

  // render the page
  return `<html>
    ${head({ title: opts.title })}
    <body>
      ${hero}
      ${tabs.sections(opts.section)}
      ${tabFn(opts.tab)}
      <div class="nav-content-unit ${!leftnavFn?'nonav':''}">
        ${leftnavFn ? leftnavFn(opts.path) : ''}
        <div class="content">
          ${opts.content}
          ${seeAlso}
          ${next}
        </div>
      </div>
      ${footer(opts.path)}
    </body>
  </html>`
}