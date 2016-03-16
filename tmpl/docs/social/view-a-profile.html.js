var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/view-a-profile.html',
  content: md.doc(__dirname+'/view-a-profile.md'),
  seeAlso: [
    ['/docs/message-types/about.html', 'About messages']
  ],
  next: ['/docs/social/join-a-pub.html', 'Join a pub']
})