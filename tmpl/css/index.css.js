var fonts = require('./fonts.part.js')

module.exports = () => `
${fonts.sourceCodePro()}
${fonts.sourceSansPro()}

body {
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
}

h1, h2, h3, h4, h5 {
  font-weight: normal;
}
h1 small {
  font-weight: 300;
}

code, pre {
  font-family: 'Source Code Pro', monospace;
  color: #555;
}

.hero {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
.hero.small img {
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.hero.big {
  margin-bottom: 80px;
}

.tabs {
  display: flex;
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-bottom: 0;
}
.tabs > div {
  position: relative;
  flex: 1;
  text-align: center;
  border-right: 1px solid #ddd;
}
.tabs > div a {
  display: inline-block;
  font-weight: 300;
  color: #777;
  padding: 0.4em 1.2em;
  text-decoration: none;
}
.tabs > div.current a {
  border-bottom: 3px solid gray;
  padding-bottom: 2px;
  color: #444;
}
.tabs > div a:hover {
  color: #aaa;
}

.nav-content-unit {
  display: flex;
  width: 800px;
  margin: 0px auto 80px;
  border: 1px solid #ddd;
}

.nav {
  background: #eee;
  flex: 0 0 210px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  margin: 0.5em;
  border-bottom: 1px solid #ddd;
}
.nav li.current:before {
  content: '\\2022';
  padding-left: 0.5em;
}
.nav li:last-child {
  border-bottom: 0
}
.nav li a {
  display: inline-block;
  color: #555;
  padding: 0.5em 0.5em 1em 0.5em;
  text-decoration: none;
}
.nav li a:hover {
  color: #999;
}

.content {
  padding: 2em 1em 2em 2em;
}
.content > :first-child {
  padding-top: 0;
  margin-top: 0;
}
`