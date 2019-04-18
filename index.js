const http2 = require('http2');
const http = require('http');
const fs = require('fs');
const response = `<h1>Hello World</h1>`;
http.createServer((req, res) => {
        console.log("handling http/1.1")
        res.statusCode = 200;
        res.end(response);
    }).listen(3000);

http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')})
        .on('error', err => console.error(err))
        .on('stream', stream => {
            console.log("handling http/2")
            stream.respond({
                'content-type': 'text/html',
                ':status': 200
            });
            stream.end(response);
}).listen(8443);