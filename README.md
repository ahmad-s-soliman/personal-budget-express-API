# personal-budget

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app
To run locally, run `npm install`, then `node app.js`

Once the app is running locally, you can access the API at `http://localhost:3000/`

## How to use the app

To test:
 - Retrieve envelopes using `GET /api/envelopes`
 - Retrieve a single envelope using `GET /api/envelopes/:id`
 - Create an envelope using `POST /api/envelopes`
 - Update an envelope using `PUT /api/envelope/:id`
 - Delete an envelope using `DELETE /api/envelope/:id`
 - Transfer money between envelopes using `POST /api/envelope/transfer/:fromId/:toId`
