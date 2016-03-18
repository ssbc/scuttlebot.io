var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'MDManifest',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/mdmanifest.html',
  content: md.doc(__dirname+'/mdmanifest.md')
})