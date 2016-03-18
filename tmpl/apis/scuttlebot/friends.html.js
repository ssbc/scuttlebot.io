var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Friends API',
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/friends.html',
  content: md.doc(__dirname+'/friends.md')
})