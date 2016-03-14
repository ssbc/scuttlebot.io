module.exports = () => `
.hero {
  width: 650px;
  margin: 0 auto;
  text-align: center;
}
.hero.small img {
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.hero .description {
  text-align: justify;
  font-weight: 300;
  font-size: 1.4em;
  margin: 2em 0;
  padding: 1em 0;
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
  color: #555;
}
`