var page = require('./page.part')
var installTheDatabase = require('./basics/install-the-database.html')

// this page is the same as the first guide in basics, but with the big hero
module.exports = () => page({
  bigHero: true,
  tab: 'basics',
  path: '/basics/install-the-database.html',
  content: installTheDatabase.content() + `
    <p><a class="cta" href="todo">&#9654; See it in action</a></p>
  `
})