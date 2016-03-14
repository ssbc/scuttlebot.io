module.exports = () => `
.columns {
  display: flex;
  width: 800px;
  margin: 0px auto 100px;
}
.columns > div {
  flex: 1;
  text-align: justify;
  font-weight: 300;
  border-right: 1px dashed #ccc;
  margin-right: 1em;
  padding-right: 1em;
}
.columns > div:last-child {
  margin: 0;
  padding: 0;
  border: 0;
}
.columns h3 {
  text-align: center;
  font-weight: normal;
}
`