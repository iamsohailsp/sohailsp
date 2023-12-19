const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/route');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(router); // Use your defined routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});

