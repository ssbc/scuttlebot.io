var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-client.html',
  content: md.doc(__dirname+'/ssb-client.md')
})