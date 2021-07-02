const express = require('express');
const ejs = require('ejs');
const lessonDays = require('./lessonDays');
const app = express();
const PORT = 4000;

// CONFIGURATION
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('schedule', { lessonDays });
});

app.listen(PORT, () => {
  console.log(`your server is running on port: ${PORT}`);
});
