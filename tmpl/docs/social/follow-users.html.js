var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Follow users',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/follow-users.html',
  content: md.doc(__dirname+'/follow-users.md'),
  seeAlso: [
    ['/docs/message-types/contact.html', 'Contact messages'],
    ['/docs/advanced/links.html', 'Links']
  ],
  next: ['/docs/social/query-the-social-graph.html', 'Query the social graph']
})