var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Open a client',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/open-a-client.html',
  content: md.doc(__dirname+'/open-a-client.md'),
  seeAlso: [["/apis/modules/ssb-client.html", 'SSB-Client API']],
  next: ["/docs/basics/publish-a-message.html", 'Publish a message']
})