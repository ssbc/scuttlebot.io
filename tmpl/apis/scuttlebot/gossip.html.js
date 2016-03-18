var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Gossip API',
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/gossip.html',
  content: md.doc(__dirname+'/gossip.md')
})