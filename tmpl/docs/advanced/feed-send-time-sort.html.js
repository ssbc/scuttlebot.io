var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Feed (send time sort)',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/feed-send-time-sort.html',
  content: md.doc(__dirname+'/feed-send-time-sort.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/feed-receive-time-sort.html', 'Feed (receive time sort)']
})