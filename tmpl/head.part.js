module.exports = (opts) => {
  opts = opts || {}
  if (opts.title)
    opts.title += ' - Scuttlebot'
  else
    opts.title = 'Scuttlebot p2p database'

  return `<head>
    <title>${opts.title}</title>
    <link rel="icon" href="/img/icon.png">
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/prism.css">
    <script src="/js/prism.js"></script>
    <script src="/js/code-examples.js"></script>
    <script src="/js/table-of-contents.js"></script>
  </head>`
}