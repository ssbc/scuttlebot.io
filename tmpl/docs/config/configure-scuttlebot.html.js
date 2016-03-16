var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/configure-scuttlebot.html',
  content: md.doc(__dirname+'/configure-scuttlebot.md'),
  next: ['/docs/config/creating-test-databases.html', 'Creating test databases']
})
