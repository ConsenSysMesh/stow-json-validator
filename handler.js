'use strict';

const updateContract = require('./updateContract.js');

module.exports.validateJSON = (event, context, callback) => {
  // TODO: validate that the JSON matches what is on-chain for the given datahash
  // TODO: consider reading JSON or metadata hash from on-chain data this require contract addess and abi
  let response = {
    statusCode: 400,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Couldn\'t Parse JSON.'
  };
  console.log('parameters [' + JSON.stringify(event.queryStringParameters) + ']');
  console.log(JSON.stringify(event));

  if (event.body) {
    // Validate
    try {
      console.log('parsing [' + JSON.stringify(event.body) + ']');

      JSON.parse(event.body);

      updateContract.update(event.queryStringParameters.dataHash, '1');

      response = {
        statusCode: 200,
        headers: { 'Content-Type': 'text/plain' },
        body: 'JSON parse successful'
      }
    } catch (e) {
      console.error('Validation Failed [' + e + ']');
    }
  }
  callback(null, response);
};
