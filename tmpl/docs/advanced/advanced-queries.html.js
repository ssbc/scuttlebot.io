var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/advanced-queries.html',
  content: md.doc(__dirname+'/advanced-queries.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/message-schemas.html', 'Message schemas']
})