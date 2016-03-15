function item (current, name, path, label) {
  var cls = ''
  if (current == name)
    cls = 'class="current"'
  return `<div ${cls}><a href="${path}" title="${label}">${label}</a></div>`
}

module.exports = (c) => `<div class="tabs">
  ${item(c, 'basics', '/basics/install-the-database.html', 'Basics')}
  ${item(c, 'social', '/social/social-network.html', 'Social')}
  ${item(c, 'advanced', '/advanced/writing-applications.html', 'Advanced')}
  ${item(c, 'protocols', '/protocols/secure-scuttlebutt.html', 'Protocols')}
  ${item(c, 'modules', '/modules/ssb-client.html', 'Modules')}
</div>`