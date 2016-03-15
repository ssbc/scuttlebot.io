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
  display: flex;
  background: #fff;
}
.nav li.current:before {
  content: '\\2022';
  padding: 0.5em 0 0.5em 0.5em;
}
.nav li a {
  display: block;
  color: #555;
  padding: 0.5em;
  text-decoration: none;
}
.nav li a:hover {
  color: #999;
}
`