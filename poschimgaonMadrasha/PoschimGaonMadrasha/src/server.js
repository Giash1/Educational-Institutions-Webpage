const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('src'));
app.listen(port, () => {
  console.log(`PoschimGaon Madrasha app listening at http://localhost:${port}`);
});
