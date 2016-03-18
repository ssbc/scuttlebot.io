var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-Otherwise',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-otherwise.html',
  content: md.doc(__dirname+'/pull-otherwise.md')
})