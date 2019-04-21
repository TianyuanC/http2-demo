# Http/1.1 vs Http/2 Demo

## Launch Script

```sh
# Generate localhost certificates
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj /CN=localhost -keyout localhost-privkey.pem -out localhost-cert.pem

# Launch http/1.1 and http/2 server
npm run start
```

## Endpoints

-   [http://localhost:3001/](http://localhost:3000/)
-   [https://localhost:8443/](https://localhost:8443/)

## Results

**15 times** performance boost by using HTTP/2

```javascript
// ping http/1.1 endpoint
// 34182.370361328125ms
Promise.all(
    [...Array(100)].map(() => fetch(`http://localhost:3001/${Math.random()}`))
);

// ping http/2 endpoint
// 2269.68505859375ms
Promise.all(
    [...Array(100)].map(() => fetch(`https://localhost:8443/${Math.random()}`))
);
```

### HTTP/1.1

Concurrent connection is limit to 6 by default in Chrome

![http1](https://raw.githubusercontent.com/TianyuanC/http2-demo/master/img/http1.png)

### HTTP/2

All requests shared the same connection

![http1](https://raw.githubusercontent.com/TianyuanC/http2-demo/master/img/http2.png)
