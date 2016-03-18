var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Msgs',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-msgs.html',
  content: md.doc(__dirname+'/ssb-msgs.md')
})