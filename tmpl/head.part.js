module.exports = (opts) => {
  opts = opts || {}
  if (opts.title)
    opts.title += ' - Scuttlebot.io'
  else
    opts.title = 'Scuttlebot.io'

  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/prism.css">
    <script src="/js/prism.js"></script>
    <script src="/js/code-examples.js"></script>
  </head>`
}