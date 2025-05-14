const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Generera 5 slumpmässiga kort
app.get('/cards', (req, res) => {
  const suits = ['Hjärter', 'Ruter', 'Spader', 'Klöver'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'D', 'K', 'E'];
  const deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank} ${suit}`);
    }
  }
  deck.sort(() => 0.5 - Math.random());
  res.json(deck.slice(0, 5));
});

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
