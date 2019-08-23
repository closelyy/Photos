const express = require('express');

const app = express();

app.use(express.urlencoded(({ extended: true })));
app.use(express.static('dist'));

const PORT = 3000;

app.get('/', (req, res) => {
  res.end();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
