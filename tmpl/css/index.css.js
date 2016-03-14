var fonts = require('./fonts.part')
var com = require('./com.part')

module.exports = () => `
${fonts.sourceCodePro()}
${fonts.sourceSansPro()}

body {
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
}

h1, h2 {
  font-weight: normal;
}
h1 small {
  font-weight: 300;
}

code, pre {
  font-family: 'Source Code Pro', monospace;
}

p {
  line-height: 1.5;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
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
  box-sizing: border-box;
}
.tabs > div {
  position: relative;
  flex: 1;
  text-align: center;
}
.tabs > div:last-child {
  border: 0;
}
.tabs > div a {
  display: inline-block;
  font-weight: 300;
  color: #777;
  padding: 0.4em 1.2em ;
  text-decoration: none;
}
.tabs > div.current a {
  color: #444;
}
.tabs > div.current a:before {
  content: '\\25b6 ';

  margin-right: 5px;
}
.tabs > div a:hover {
  color: #333;
}

.nav-content-unit {
  display: flex;
  width: 800px;
  margin: 0px auto;
  border: 1px solid #ddd;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.nav {
  background: #fafafa;
  flex: 0 0 210px;
  list-style: none;
  padding: 0;
  margin: 0;
  border-right: 1px solid #ccc;
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
  flex: 1;
  padding: 2em 1em 2em 2em;
}
.content > :first-child {
  padding-top: 0;
  margin-top: 0;
}

.footer {
  display: flex;
  width: 800px;
  margin: 0px auto 80px;  
}
.footer-section {
  list-style: none;
  padding: 1.5em 2em;
  margin: 0;
}
.footer-section li {
  line-height: 1.9;
}
.footer-section li:first-child {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  color: #555;
}
.footer-section p {
  color: gray;
  margin: 0;
}
.footer-section a {
  text-decoration: none;
  color: gray;
  font-weight: 300;
}
.footer-section a:hover {
  color: #555;
}

${ com() }
`