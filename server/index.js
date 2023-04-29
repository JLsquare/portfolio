const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] New connection from ${req.ip}`);
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});