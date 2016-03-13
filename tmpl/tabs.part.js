function item (current, name, path, label) {
  var cls = ''
  if (current == name)
    cls = 'class="current"'
  return `<div ${cls}><a href="${path}" title="${label}">${label}</a></div>`
}

module.exports = (c) => `<div class="tabs">
  ${item(c, 'basics', '/basics/install-the-database.html', 'Basics')}
  ${item(c, 'advanced', '/advanced/todo', 'Advanced')}
  ${item(c, 'whitepapers', '/whitepapers/todo', 'Whitepapers')}
  ${item(c, 'modules', '/modules/todo', 'Modules')}
</div>`