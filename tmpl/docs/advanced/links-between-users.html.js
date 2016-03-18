var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Links between users',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/links-between-users.html',
  content: md.doc(__dirname+'/links-between-users.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/post-threads.html', 'Post threads']
})