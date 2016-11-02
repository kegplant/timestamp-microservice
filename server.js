const express = require('express');
const app = express();

app.get('/:time', function(req, res) {
    'use strict';

    const date = new Date(/^(\+|-)?\d+$/.test(req.params.time) ? req.params.time * 1000 : req.params.time);
    const output = {
        unix: null,
        natural: null
    };

    if (!Number.isNaN(date.getTime())) {
        output.unix = Math.floor(date.getTime() / 1000);
        output.natural = date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    res.send(output);
});

app.listen(8080, function() {
    console.log('Live on port 8080!');
});
