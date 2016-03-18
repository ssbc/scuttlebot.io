var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Secret-Stack',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/secret-stack.html',
  content: md.doc(__dirname+'/secret-stack.md')
})