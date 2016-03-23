var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Get current version',
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/get-current-version.html',
  content: md.doc(__dirname+'/get-current-version.md'),
  next: ['/docs/config/get-active-config.html', 'Get active config']
})
