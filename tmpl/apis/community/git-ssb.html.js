var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'apis',
  tab: 'apis-community',
  path: '/apis/community/git-ssb.html',
  content: md.doc(__dirname+'/git-ssb.md')
})