// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create app
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Get all comments
app.get('/comments', (req, res) => {
  res.send([
    {
      title: 'Comment #1',
      description: 'This is the first comment!',
    },
    {
      title: 'Comment #2',
      description: 'This is the second comment!',
    },
  ]);
});

// Listen on port 8081
app.listen(process.env.PORT || 8081);
