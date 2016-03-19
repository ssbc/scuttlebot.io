var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Update your profile',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/update-your-profile.html',
  content: md.doc(__dirname+'/update-your-profile.md'),
  next: ["/docs/social/view-a-profile.html", 'View a profile'],
  seeAlso: [
    ["/docs/message-types/about.html", 'About messages'],
    ["/docs/advanced/links.html", 'Links']
  ]
})