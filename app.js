const express = require('express');
const app = express();
const routes = require('./router/router');
const cors = require('cors');
const pool = require('./database');

// Use CORS middleware
app.use(cors());

app.use('/api', routes)

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});