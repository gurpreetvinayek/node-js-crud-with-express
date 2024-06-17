const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = 3000;
const routes = require('./routes');
app.use('/api', routes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});