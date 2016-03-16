var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/create-new-users.html',
  content: md.doc(__dirname+'/create-new-users.md'),
  seeAlso: [
    ['/apis/modules/ssb-feed.html', 'SSB-Feed API'],
    ['/apis/modules/ssb-keys.html', 'SSB-Keys API']
  ],
  next: ['/docs/social/join-a-pub.html', 'Join a pub']
})