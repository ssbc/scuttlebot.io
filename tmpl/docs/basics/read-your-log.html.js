var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Read your log',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/read-your-log.html',
  content: md.doc(__dirname+'/read-your-log.md'),
  seeAlso: [
    ['/apis/scuttlebot/ssb.html#createuserstream-source', 'createUserStream API'],
    ['/apis/pull-stream/pull-stream.html', 'Pull streams']
  ],
  next: ['./create-secondary-users.html', 'Create secondary users']
})
