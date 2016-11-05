const express = require('express');
const timestamp = require('./app/timestamp');
const app = express();

app.use('/', express.static('./public'));

app.get('/:time', function(req, res) {
  'use strict';

  const output = timestamp(req.params.time);

  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.send(output);
});

app.listen(process.env.PORT || 8080, function() {
  console.log('App is live!');
});
