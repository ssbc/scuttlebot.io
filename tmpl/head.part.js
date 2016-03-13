module.exports = (opts) => {
  opts = opts || {}
  if (opts.title)
    opts.title += ' - Scuttlebot.io'
  else
    opts.title = 'Scuttlebot.io'

  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="/css/index.css">
  </head>`
}