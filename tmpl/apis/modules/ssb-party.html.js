var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Party',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-party.html',
  content: md.doc(__dirname+'/ssb-party.md')
})
