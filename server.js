const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));
const path = require('path');
app.get('*', (req, res) => {
	res.sendFile(
		path.resolve(__dirname, 'dist', 'index.html')
	);
});

app.listen(PORT, function () {
	console.log(`Messenger app listening on port ${PORT}!`);
});
