module.exports = () => `
a.cta {
  display: inline-block;
  padding: 0.25em 0.75em;
  background: #4E9121;
  color: #fff;
  font-size: 1.5em;
  font-weight: 300;
  border-radius: 3px;
  margin: 1em 0;
}
a.cta:hover {
  text-decoration: none;
  background: #3E8111;
}

.code-examples .head {
  display: flex;
  color: #333;
}
.code-examples .tab {
  cursor: pointer;
  padding: 0.1em 0.75em;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.code-examples .tab:hover {
  background: #F9F7F6;
}
.code-examples .tab.current {
  background: #F3EFEC;
  color: black;
  text-shadow: 0 1px white;
}
.code-examples .body {
  border: 1px solid #ccc;
  padding: 1em;
  background: #F5F2F0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
}
.code-examples pre {
  display: none;
  margin: 0 !important;
  padding: 0 !important;
}
.code-examples pre.current {
  display: block;
}
`