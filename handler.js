'use strict';

const updateContract = require('./updateContract');

module.exports.validateJSON = (event, context, callback) => {

  //TODO: integrate updateContract
  let response = {
    statusCode: 400,
    headers: {'Content-Type': 'text/plain'},
    body: 'Couldn\'t Parse JSON.',
  };
  console.log('parameters [' + JSON.stringify(event.queryStringParameters) + ']');
  console.log(JSON.stringify(event));
  if (event.queryStringParameters.json) {
    //Validate
    try {
      console.log('parsing [' + JSON.stringify(event.queryStringParameters.json) + ']');

      JSON.parse(event.queryStringParameters.json);

      updateContract.update(event.queryStringParameters.dataHash,'1');

      response = {
        statusCode: 200,
        headers: {'Content-Type': 'text/plain'},
        body: 'JSON parse successful',
      }
    } catch (e) {
      console.error('Validation Failed [' + e + ']');
    }
  }
  callback(null, response);
  return;
};
