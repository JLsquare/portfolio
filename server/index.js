const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 443;

app.use(cors());
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] New connection from ${req.ip}`);
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

// SSL/TLS certificate and key
const privateKey = fs.readFileSync('localhost-key.pem', 'utf8');
const certificate = fs.readFileSync('localhost.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
