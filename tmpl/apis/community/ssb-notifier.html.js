var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Notifier',
  section: 'apis',
  tab: 'apis-community',
  path: '/apis/community/ssb-notifier.html',
  content: md.doc(__dirname+'/ssb-notifier.md')
})