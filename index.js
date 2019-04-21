const http2 = require("http2");
const http = require("http");
const fs = require("fs");
const response = `<h1>Hello World</h1>`;
http.createServer((req, res) => {
    console.log("handling http/1.1");
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Cache-Control",
        "private, no-cache, no-store, must-revalidate"
    );
    res.setHeader("Expires", "-1");
    setTimeout(() => {
        res.end(`${response}${Math.random()}`);
    }, 2000);
}).listen(3001);

http2
    .createSecureServer({
        key: fs.readFileSync("localhost-privkey.pem"),
        cert: fs.readFileSync("localhost-cert.pem")
    })
    .on("error", err => console.error(err))
    .on("stream", stream => {
        console.log("handling http/2");
        setTimeout(() => {
            stream.respond({
                ":status": 200,
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "private, no-cache, no-store, must-revalidate",
                Expires: "-1"
            });
            stream.end(`${response}${Math.random()}`);
        }, 2000);
    })
    .listen(8443);
