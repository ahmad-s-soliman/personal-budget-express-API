const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const envelopesRouter = require('./envelopesRouter.js');
app.use(bodyParser.json());

app.use('/envelopes', envelopesRouter);

module.exports = app;



const PORT = 3000;

app.listen(PORT, ()=>{console.log(`Server is listening on http://localhost:${PORT}`)});