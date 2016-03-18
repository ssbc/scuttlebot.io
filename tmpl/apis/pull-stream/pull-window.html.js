var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-Window',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-window.html',
  content: md.doc(__dirname+'/pull-window.md')
})