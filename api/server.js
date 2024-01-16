const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

router.get('/api/projects', (req, res, next) =>{

});

router.get('/api/projects/:id', (req, res, next) =>{

});

router.post('/api/projects', (req, res, next) =>{

});

router.put('/api/projects/:id', (req, res, next) =>{

});

router.delete('/api/projects/:id', async (req, res, next) =>{

});

router.get('/api/projects/:id/actions', (req, res, next) =>{

});

module.exports = server;
