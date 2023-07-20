const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/auth', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
});

app.get('/oauth-callback', ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  };

  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      console.log("TOKEN", token);
      // Redirect to redirect.html passing the token as a query parameter
      res.redirect(`/redirect.html?token=${token}`);
    })
    .catch((err) => {
      console.error('Error exchanging code for access token:', err.message);
      res.status(500).send('Error');
    });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
