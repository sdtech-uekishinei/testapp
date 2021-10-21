const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

console.log("ブラウザで localhost:3000 を表示してください。");
app.listen(3000);
