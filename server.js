const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist/landing-page')));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + "/dist/landing-page" })
});


app.listen(port, () => {
  console.log('Server started on ' + port)
});
