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

.anchor {
  visibility: hidden;
  margin-left: -23px;
  padding: 0 3px;
}
h1:hover .anchor,
h2:hover .anchor,
h3:hover .anchor,
h4:hover .anchor,
h5:hover .anchor {
  visibility: visible;
} 

blockquote {
  color: gray;
  border-left: 8px solid #ddd;
  margin-left: 0;
  padding-left: 1em;
}

code, pre {
  font-family: 'Source Code Pro', monospace;
  background: #F5F2F0;
  border-radius: 2px;
}
pre {
  font-size: 14px;
  padding: 0.5em;
}
code {
  color: #555;
  padding: 0 0.5em;
  font-size: 0.9em;
}
pre code {
  white-space: pre-wrap;
  padding: 0;
}

p {
  line-height: 1.5;
}
ul p {
  margin: 0;
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
  box-sizing: border-box;
}
.nav-content-unit:not(.nonav) {
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
}

.content {
  max-width: 540px;
  flex: 1;
  padding: 2em 1em 2em 2em;
}
.nonav .content {
  max-width: 800px;
  padding: 0;
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
${ require('./cards.part')() }
`