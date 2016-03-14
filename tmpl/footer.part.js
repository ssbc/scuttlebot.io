function item (current, path, label) {
  var cls = ''
  if (current == path)
    cls = 'class="current"'
  return `<li ${cls}><a href="${path}" title="${label}">${label}</a></li>`
}

module.exports = (c) => `<div class="footer">
  <ul class="footer-section">
    <li>Guides</li>
    ${item(c, '/guides/lets-write-a-todo-list-app/intro.html', 'Let\'s Write: a Todo-List app')}
    ${item(c, '/guides/lets-write-a-private-messaging-app/intro.html', 'Let\'s Write: a Private Messaging app')}
    ${item(c, '/guides/lets-write-a-file-sharing-app/intro.html', 'Let\'s Write: a File-Sharing app')}
    ${item(c, '/guides/how-to-use-pull-streams/intro.html', 'How to use Pull Streams')}
  </ul>
  <ul class="footer-section">
    <li>Applications</li>
    <li><a href="https://github.com/ssbc/patchwork" title="Patchwork">Patchwork</a>
    <li><a href="https://github.com/ssbc/ssb-blessed-dashboard" title="CLI Dashboard">CLI Dashboard</a>
    <li><a href="https://github.com/ssbc/ssb-example-pm" title="CLI Private Msg">CLI Private Msg</a>
  </ul>
  <ul class="footer-section">
    <li>Community</li>
    <li><p>#scuttlebutt on freenode</p></li>
    <li><a href="https://github.com/ssbc">GitHub Org</a></li>
  </ul>
</div>`