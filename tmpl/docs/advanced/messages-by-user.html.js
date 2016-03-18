var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Messages by user',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/messages-by-user.html',
  content: md.doc(__dirname+'/messages-by-user.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/watch-for-messages.html', 'Watch for messages']
})