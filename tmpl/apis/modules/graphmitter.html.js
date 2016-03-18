var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Graphmitter',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/graphmitter.html',
  content: md.doc(__dirname+'/graphmitter.md')
})