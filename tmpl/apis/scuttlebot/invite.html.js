var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Invite API',
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/invite.html',
  content: md.doc(__dirname+'/invite.md')
})