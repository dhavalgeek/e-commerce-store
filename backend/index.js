const express = require('express');
const mongoose = require('mongoose');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
	return res.send('Hello');
});

app.listen(PORT, () => {
	console.log('Server is listening on PORT: ' + PORT);
});
