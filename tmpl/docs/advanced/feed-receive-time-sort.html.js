var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/feed-receive-time-sort.html',
  content: md.doc(__dirname+'/feed-receive-time-sort.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/messages-by-type.html', 'Messages by type']
})