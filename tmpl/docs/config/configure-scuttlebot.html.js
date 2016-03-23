var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Configure Scuttlebot',
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/configure-scuttlebot.html',
  content: md.doc(__dirname+'/configure-scuttlebot.md'),
  next: ['/docs/config/get-current-version.html', 'Get current version']
})
