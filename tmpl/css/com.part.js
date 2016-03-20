module.exports = () => `
a.cta {
  display: inline-block;
  padding: 0.25em 0.75em;
  background: #4E9121;
  background: linear-gradient(to bottom, #4E9121, #43801A);
  color: #fff;
  font-size: 1.5em;
  font-weight: 300;
  border-radius: 1px;
  margin: 0.5em 0;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  transition: opacity 0.2s, box-shadow 0.2s;
}
a.cta:hover {
  text-decoration: none;
  opacity: 0.95;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.4);
}
a.cta.dark {
  background: #666;
  background: linear-gradient(to bottom, #666, #555);
}

.next:before {
  content: 'Next: ';
}

.see-also {
  padding: 0;
  margin: 2em 0 0;
  list-style: none;
}
.see-also:before {
  content: 'See also';
  font-size: 0.8em;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
}
.see-also li {
  margin-left: 1em;
  padding: 0.25em 0.25em 0;
}

.code-examples {
  max-width: 540px;
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

.table-of-contents > a {
  display: inline-block;
  float: right;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fafafa;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #555;
}
.table-of-contents > a:hover,
.table-of-contents.expanded > a {
  background: #fff;
}
.table-of-contents ul {
  display: none;
  list-style: none;
}
.table-of-contents.expanded ul {
  display: block;
  padding: 0;
  margin: 0;
}
.table-of-contents ul li:nth-child(even) {
  background: #fafafa;
}
.table-of-contents ul li:hover {
  background: #eee;
}
.table-of-contents ul li a {
  display: block;
  padding: 0.5em;
  color: #555;
  text-decoration: none;
}

.choice-widget {
  display: flex;
  border: 1px solid #ccc;
  background: #F5F2F0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
}
.choice-widget a {
  flex: 1;
  display: block;
  color: #333;
  text-decoration: none;
  padding: 1em 0.5em;
  text-shadow: 0 1px white;
  text-align: center;
}
.choice-widget a:hover {
  background: #fff;
}
.choice-widget h2 {
  margin-top: 0;
}
.choice-widget p {
  margin-bottom: 0;
}
.choice-widget a:last-child {
  border-left: 1px solid #ccc;
}
`