var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'View a profile',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/view-a-profile.html',
  content: md.doc(__dirname+'/view-a-profile.md'),
  seeAlso: [
    ['/docs/message-types/about.html', 'About messages'],
    ['/apis/scuttlebot/ssb.html#links-source', 'links API']
  ],
  next: ['/docs/social/follow-users.html', 'Follow users']
})