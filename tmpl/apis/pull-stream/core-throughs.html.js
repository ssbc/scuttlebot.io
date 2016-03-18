var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Through Functions',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/core-throughs.html',
  content: md.doc(__dirname+'/core-throughs.md')
})