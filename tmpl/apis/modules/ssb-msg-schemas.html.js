var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Msg-Schemas',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-msg-schemas.html',
  content: md.doc(__dirname+'/ssb-msg-schemas.md')
})