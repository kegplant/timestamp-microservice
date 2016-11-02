const express = require('express');
const app = express();

app.get('/:time', function(req, res) {
    'use strict';
    
    let input = req.params.time;
    if (/^(\+|-)?\d+/.test(input)) {
        input = Number.parseInt(input, 10);
    }

    const date = new Date(input);
    const output = {
        unix: null,
        natural: null
    };

    if (!Number.isNaN(date.getTime())) {
        output.unix = date.getTime();
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
