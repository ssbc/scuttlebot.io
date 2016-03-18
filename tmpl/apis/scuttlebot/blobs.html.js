var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Blobs API',
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/blobs.html',
  content: md.doc(__dirname+'/blobs.md')
})