const express = require('express');

const envelopesRouter = express.Router();

let envelopes = [
    {
        id: 0,
        budget: 0,
        title: "envelope 1"
    },
    {
        id: 1,
        budget: 0,
        title: "envelope 2"
    }
]

//all routes here are already at /envelopes

envelopesRouter.post('/', (req, res) => {
    if(req.body){
        envelopes.push(req.body);
        res.status(200).send(envelopes);
    } else {
        res.status(400).send(envelopes);
    }
    
});

envelopesRouter.get('/', (req, res) => {
    res.status(200).send(envelopes)
});

envelopesRouter.get('/:id', (req, res) => {
    const idToFind = req.params.id;

    const foundEnvelope = envelopes.find((envelope) => envelope.id === parseInt(idToFind));
        
    res.send(foundEnvelope);
    
});

module.exports = envelopesRouter;