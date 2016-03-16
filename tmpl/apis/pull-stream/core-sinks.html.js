var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/core-sinks.html',
  content: md.doc(__dirname+'/core-sinks.md')
})