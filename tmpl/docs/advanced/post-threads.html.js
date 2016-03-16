var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/post-threads.html',
  content: md.doc(__dirname+'/post-threads.md'),
  seeAlso: [
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/config/configure-scuttlebot.html', 'Configure Scuttlebot']
})