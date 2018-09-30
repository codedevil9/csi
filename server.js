console.log('Server-side code running');

const express = require('express');
const request = require("request");
const app = express();

// Serve files from the public directory.
app.use(express.static('public'));

// Receive session token with a json post to the CSI login service.
app.get('/token', (req, res, next) => {
    request({
        method: 'POST',
        url: 'http://localhost:10001/login/1',
        body: 'dGpFakBafjJkPUdPWlE4VU5yMTJ8emg/TUM3QH43Q1o8P2VFent4fUh6RFAyWzBKOkJBcys2ME1xWD8tMiVdXg=='
    }, function (error, response, body) {
        if (error) {
            next(new Error(error));
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(body);
    });
});

// Start the express web server listening on 8080.
app.listen(8080, () => {
    console.log('listening on 8080');
});
