const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/particles.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'particles.json'));
});

app.get('/portfolio-data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio-data.json'));
});

app.get('/images/:image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'images', req.params.image));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});