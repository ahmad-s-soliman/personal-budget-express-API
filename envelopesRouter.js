const express = require('express');

const envelopesRouter = express.Router();

let envelopes = [
    {
        id: 0,
        total_budget: 1500,
        title: "total budget"
    },
    {
        id: 1,
        budget: 500,
        title: "envelope 1"
    },
    {
        id: 2,
        budget: 500,
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

envelopesRouter.put('/:id/subtract/:value', (req, res) => {
    const idToFind = req.params.id;
    const foundEnvelope = envelopes.find((envelope) => envelope.id === parseInt(idToFind));
    if(req.params.value > foundEnvelope.budget) {
        res.send('value is bigger than the envelope budget');
    } else{
        //subtract value from envelope:
        foundEnvelope.budget -= req.params.value;
        //subtract value from total budget:
        envelopes[0].total_budget -= req.params.value;
        //send message to the use.
        res.send(`You have withdrawn ${req.params.value} from ${foundEnvelope.title}. The remaining is ${foundEnvelope.budget} and total remaining budget is ${envelopes[0].total_budget}`)
    }
});

envelopesRouter.delete('/:id', (req, res) => {
    const idToFind = req.params.id;
    const foundEnvelope = envelopes.find((envelope) => envelope.id === parseInt(idToFind));
    if (!foundEnvelope) {
        res.send('wrong ID.');
    } 

    const indexToDelete = envelopes.findIndex((item) => item.id === parseInt(idToFind));
    envelopes.splice(indexToDelete, 1);
    //console.log(indexToDelete);
    res.send(envelopes);
    //const updatedEnvelopes = envelopes.filter(e => e.id !== parseInt(foundEnvelope.id));
    //res.send(updatedEnvelopes);

});

envelopesRouter.post('/transfer/:fromId/:toId', (req, res) => {
    const fromId = req.params.fromId;
    const toId = req.params.toId;
    const amount = req.body.amount;
    const foundEnvelopeFrom = envelopes.find((envelope) => envelope.id === parseInt(fromId));
    if (!foundEnvelopeFrom) {
        res.send('wrong from ID.');
    } 

    const foundEnvelopeTo = envelopes.find((envelope) => envelope.id === parseInt(toId));
    if (!foundEnvelopeTo) {
        res.send('wrong to ID.');
    } 

    foundEnvelopeFrom.budget -= amount;
    foundEnvelopeTo.budget += amount;

    res.send(`you have transfered the amount of ${amount} from ${foundEnvelopeFrom.title} and is now ${foundEnvelopeFrom.budget} to ${foundEnvelopeTo.title} and is now ${foundEnvelopeTo.budget}. `)

});

module.exports = envelopesRouter;