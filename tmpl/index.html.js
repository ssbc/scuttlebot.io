var page = require('./page.part')
var installTheDatabase = require('./basics/install-the-database.html')
module.exports = () => page({
  tab: 'basics',
  path: '/basics/install-the-database.html',
  bigHero: true,
  content: installTheDatabase.content()
})