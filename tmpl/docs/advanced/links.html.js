var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Links',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/links.html',
  content: md.doc(__dirname+'/links.md'),
  seeAlso: [
    ['/docs/message-types/custom-types.html', 'Custom types']
  ],
  next: ['/docs/advanced/feed-send-time-sort.html', 'Feed (send time sort)']
})