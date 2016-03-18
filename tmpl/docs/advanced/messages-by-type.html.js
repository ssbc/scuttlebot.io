var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Messages by type',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/messages-by-type.html',
  content: md.doc(__dirname+'/messages-by-type.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/messages-by-user.html', 'Messages by user']
})