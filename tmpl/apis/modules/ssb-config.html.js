var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Config',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-config.html',
  content: md.doc(__dirname+'/ssb-config.md')
})