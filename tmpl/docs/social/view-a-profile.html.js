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
  next: ['/docs/social/create-new-users.html', 'Create new users']
})