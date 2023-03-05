const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.listen(80, () => {
    console.log('Server running on port 80');
});