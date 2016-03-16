var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/watch-for-messages.html',
  content: md.doc(__dirname+'/watch-for-messages.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/votes-on-a-message.html', 'Votes on a messsage']
})