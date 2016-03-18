var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'MuxRPCli',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/muxrpcli.html',
  content: md.doc(__dirname+'/muxrpcli.md')
})