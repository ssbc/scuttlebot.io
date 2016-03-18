var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'User files',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/user-files.html',
  content: md.doc(__dirname+'/user-files.md'),
  seeAlso: [
    ['/apis/pull-stream/pull-stream.html', 'Pull-stream API'],
    ['/apis/scuttlebot/ssb.html', 'Scuttlebot API']
  ],
  next: ['/docs/advanced/links-between-users.html', 'Links between users']
})