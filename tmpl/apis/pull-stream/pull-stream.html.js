var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-Stream',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-stream.html',
  content: md.doc(__dirname+'/pull-stream.md')
})