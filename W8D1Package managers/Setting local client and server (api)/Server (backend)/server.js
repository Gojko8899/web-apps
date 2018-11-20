const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const postGenerator = require('./post-generator');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'aplication/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const postList = postGenerator.createPosts(5);

    res.end(JSON.stringify(postList));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
