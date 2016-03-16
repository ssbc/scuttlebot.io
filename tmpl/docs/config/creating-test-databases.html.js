var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/creating-test-databases.html',
  content: md.doc(__dirname+'/creating-test-databases.md'),
  next: ['/docs/config/creating-test-users.html', 'Creating test users']
})
