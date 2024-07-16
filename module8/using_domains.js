const domain = require('domain');
const http = require('http');

const d = domain.create();

d.on('error', (err) => {
    console.error('Domain caught error:', err.message);
});

d.run(() => {
    const server = http.createServer((req, res) => {
        if (req.url === '/error') {
            throw new Error('Synchronous error!');
        } else {
            setTimeout(() => {
                throw new Error('Asynchronous error!');
            }, 1000);
        }
        res.end('Hello, world!');
    });

    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
});
