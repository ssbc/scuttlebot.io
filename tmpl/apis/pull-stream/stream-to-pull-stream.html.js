var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Stream-To-Pull-Stream',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/stream-to-pull-stream.html',
  content: md.doc(__dirname+'/stream-to-pull-stream.md')
})