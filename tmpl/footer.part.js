function item (current, path, label) {
  var cls = ''
  if (current == path)
    cls = 'class="current"'
  return `<li ${cls}><a href="${path}" title="${label}">${label}</a></li>`
}

module.exports = (c) => `<div class="footer">
  <ul class="footer-section">
    <li>Community</li>
    <li><p>#scuttlebutt on freenode</p></li>
    <li><a href="https://github.com/ssbc">GitHub Org</a></li>
    <li><a href="https://github.com/ssbc/ssb-server">GitHub Repo</a></li>
  </ul>
</div>`