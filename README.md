# Http/1.1 vs Http/2 Demo

## Launch Script
```sh
# Generate localhost certificates
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj /CN=localhost -keyout localhost-privkey.pem -out localhost-cert.pem

# Launch http/1.1 and http/2 server
npm run start
```

## Endpoints
[http://localhost:3000/](http://localhost:3000/)
[https://localhost:8443/](https://localhost:8443/)

## Results
TBD