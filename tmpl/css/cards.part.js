module.exports = () => `
.cards {
}
.cards a.card {
  display: inline-block;
  width: 250px;
  height: 280px;
  border: 1px solid #ccc;
  margin: 6px;
  vertical-align: top;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  text-align: justify;
  font-weight: 300;
  color: #333;
  text-decoration: none;
  background: #fff;
  transition: box-shadow 0.2s, background 0.2s;
}
.cards a.card:hover {
  background: #fdfdfd;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
}
.cards h4, .cards p {
  padding: 0 1em;
}
`