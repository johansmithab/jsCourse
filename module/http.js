const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === '/') {
        res.write("Welcome to the main page!");
        return res.end();
    }

    if (req.url === '/about') {
        res.write("Welcome to about!");
        return res.end();
    }

    res.write(`
    <h1>Oops page not found!</h1>
    <p>This page was not found!</h1>
    <a href="/">Back to main.</a>
    `);
    return res.end();
}).listen(3000);