const express = require('express');
const app = express();

module.exports = app;

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Ahmed!')
});

app.listen(PORT, ()=>{console.log(`Server is listening on http://localhost:${PORT}`)});