var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Creating test users',
  section: 'docs',
  tab: 'docs-config',
  path: '/docs/config/creating-test-users.html',
  content: md.doc(__dirname+'/creating-test-users.md')
})
