const express = require('express');
const server = express();

const router = require('./router');

server.use(express.json());

server.use('/api/recipes', router);

server.use('/', (req, res) => {
    res.json({
        message: 'Hello there!'
    })
});

module.exports = server;