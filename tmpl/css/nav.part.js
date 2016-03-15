module.exports = () => `
.nav {
  flex: 0 0 210px;
  background: #F9F7F6;
  list-style: none;
  padding: 0;
  margin: 0;
  border-right: 1px solid #ccc;
}
.nav li {
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
}
.nav li.current {
  background: #fff;
}
.nav li.current:before {
  content: '\\2022';
  padding-left: 0.5em;
}
.nav li a {
  display: inline-block;
  color: #555;
  padding: 0.5em;
  text-decoration: none;
}
.nav li a:hover {
  color: #999;
}
`