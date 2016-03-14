module.exports = () => `
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
`