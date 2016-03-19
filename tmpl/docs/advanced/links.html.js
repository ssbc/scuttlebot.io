var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Links',
  section: 'docs',
  tab: 'docs-advanced',
  path :'/docs/advanced/links.html',
  content: md.doc(__dirname+'/links.md'),
  next: ['/docs/advanced/publish-a-file.html', 'Publish a file']
})