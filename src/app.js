const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API funcionando correctamente'
    });
});

app.use('/api', routes);

module.exports = app;