var page = require('../../page.part')
var markdown = require('../../../markdown')

module.exports = () => page({
  title: 'Query the social graph',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/query-the-social-graph.html',
  content: markdown.doc(__dirname+'/query-the-social-graph.md'),
  next: ["/docs/social/join-a-pub.html", 'Join a Pub'],
  seeAlso: [
    ["/apis/scuttlebot/friends.html", 'Scuttlebot.Friends API'],
    ["/docs/social/follow-users.html", 'Follow users']
  ]
})