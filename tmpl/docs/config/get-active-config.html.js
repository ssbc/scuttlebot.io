var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Get active config',
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/get-active-config.html',
  content: md.doc(__dirname+'/get-active-config.md'),
  next: ['/docs/config/creating-test-databases.html', 'Creating test databases']
})
