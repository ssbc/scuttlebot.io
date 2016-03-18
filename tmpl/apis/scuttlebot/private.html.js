var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Private API',
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/private.html',
  content: md.doc(__dirname+'/private.md')
})