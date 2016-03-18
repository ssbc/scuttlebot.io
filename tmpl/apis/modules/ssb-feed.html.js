var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Feed',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-feed.html',
  content: md.doc(__dirname+'/ssb-feed.md')
})