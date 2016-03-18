var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Votes on a message',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/votes-on-a-message.html',
  content: md.doc(__dirname+'/votes-on-a-message.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/user-files.html', 'User files']
})