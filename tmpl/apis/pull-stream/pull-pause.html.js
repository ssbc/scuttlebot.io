var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-Pause',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-pause.html',
  content: md.doc(__dirname+'/pull-pause.md')
})