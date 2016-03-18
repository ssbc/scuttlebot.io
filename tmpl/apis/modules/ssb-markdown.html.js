var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSB-Markdown',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/ssb-markdown.html',
  content: md.doc(__dirname+'/ssb-markdown.md')
})