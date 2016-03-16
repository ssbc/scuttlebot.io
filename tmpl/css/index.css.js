module.exports = () => `
${require('./fonts.part').sourceCodePro()}
${require('./fonts.part').sourceSansPro()}

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
pre {
  font-size: 14px;
}
pre code {
  white-space: pre-wrap;
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

hr {
  border: 0;
  border-bottom: 1px solid #ddd;
}

.nav-content-unit {
  display: flex;
  width: 800px;
  margin: 0px auto;
  border: 1px solid #ddd;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.content {
  max-width: 540px;
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

${ require('./com.part')() }
${ require('./hero.part')() }
${ require('./tabs.part')() }
${ require('./nav.part')() }
${ require('./columns.part')() }
`