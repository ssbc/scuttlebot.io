var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Patchwork-Threads',
  section: 'apis',
  tab: 'apis-community',
  path: '/apis/community/patchwork-threads.html',
  content: md.doc(__dirname+'/patchwork-threads.md')
})