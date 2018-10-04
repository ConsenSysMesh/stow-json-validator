'use strict';

module.exports.validateJSON = (event, context, callback) => {

  let response = {
    statusCode: 400,
    headers: {'Content-Type': 'text/plain'},
    body: 'Couldn\'t Parse JSON.',
  };
  //Validate
  try {
    JSON.parse(event.body);
    response = {
      statusCode: 200,
      headers: {'Content-Type': 'text/plain'},
      body: 'JSON parse successful',
    }
  } catch (e) {
    console.error('Validation Failed [' + e + ']');
  }

  callback(null, response);
  return;
};
