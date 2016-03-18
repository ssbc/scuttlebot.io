var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Source Functions',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/core-sources.html',
  content: md.doc(__dirname+'/core-sources.md')
})