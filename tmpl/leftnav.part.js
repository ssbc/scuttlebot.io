function item (current, path, label) {
  var cls = ''
  if (current == path)
    cls = 'class="current"'
  return `<li ${cls}><a href="${path}" title="${label}">${label}</a></li>`
}

module.exports.basics = (c) => `<ul class="nav">
  ${item(c, '/basics/install-the-database.html', 'Install the database')}
  ${item(c, '/basics/open-a-client.html', 'Open a client')}
  ${item(c, '/basics/read-the-log.html', 'Read the log')}
  ${item(c, '/basics/publish-a-message.html', 'Publish a message')}
  ${item(c, '/basics/encryption.html', 'Encryption')}
  ${item(c, '/basics/read-a-file.html', 'Read a file')}
  ${item(c, '/basics/publish-a-file.html', 'Publish a file')}
</ul>`