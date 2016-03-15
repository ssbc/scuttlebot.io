var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'apis',
  tab: 'apis-common',
  path: '/apis/common/ssb-msg-schemas.html',
  content: md.doc(__dirname+'/ssb-msg-schemas.md')
})