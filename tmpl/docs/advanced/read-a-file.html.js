var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Read a file',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/read-a-file.html',
  content: md.doc(__dirname+'/read-a-file.md'),
  seeAlso: [
    ['/apis/scuttlebot/blobs.html', 'Scuttlebot.Blobs API'],
    ['/docs/advanced/links.html', 'Linking messages'],
    ['/apis/pull-stream/pull-stream.html', 'Pull streams']
  ],
  next: ['/docs/advanced/feed-send-time-sort.html', 'Feed (send time sort)']
})