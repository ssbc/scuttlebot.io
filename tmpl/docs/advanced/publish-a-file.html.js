var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Publish a file',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/publish-a-file.html',
  content: md.doc(__dirname+'/publish-a-file.md'),
  seeAlso: [
    ['/apis/scuttlebot/blobs.html', 'Scuttlebot.Blobs API'],
    ['/docs/advanced/links.html', 'Linking messages'],
    ['/apis/pull-stream/pull-stream.html', 'Pull streams']
  ],
  next: ['/docs/advanced/read-a-file.html', 'Read a file']
})



