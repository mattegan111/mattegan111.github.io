const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'node_modules/three/build')));
app.use(express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(3000, () =>
    console.log('http://127.0.0.01:3000')
);