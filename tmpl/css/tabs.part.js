module.exports = () => `
.tabs {
  display: flex;
  width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}
.tabs.big {
  margin-bottom: 1em;
}

.tabs > div {
  position: relative;
  flex: 1;
  text-align: center;
}
.tabs.big > div {
  border: 1px solid #ccc;
  border-right: 0;
  background: #F9F7F6;
}
.tabs.big > div:last-child {
  border-right: 1px solid #ccc;
}
.tabs.big > div.current {
  background: #fff;
}

.tabs > div a {
  display: inline-block;
  font-weight: 300;
  color: #777;
  padding: 0.4em 1.2em ;
  text-decoration: none;
}
.tabs.big > div a {
  display: block;
  font-size: 2em;
  color: gray;
}
.tabs > div.current a {
  color: #444;
}
.tabs.small > div.current a:before {
  content: '\\25b6 ';
  margin-right: 5px;
}
.tabs > div a:hover {
  color: #333;
}
`