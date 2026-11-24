const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let file = 'login.html';

    if (req.url === '/register') {
        file = 'register.html';
    }

    const filePath = path.join(__dirname, file);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Page not found');
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(content);
    });
});

server.listen(3000, '0.0.0.0', () => {
    console.log('WebApp running on port 3000');
});
