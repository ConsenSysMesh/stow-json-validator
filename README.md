# linnia-json-validator

#endpoints:

POST - https://r9rui2udt9.execute-api.us-east-1.amazonaws.com/dev/validateJSON


# Test command

```curl -X POST \
  https://r9rui2udt9.execute-api.us-east-1.amazonaws.com/dev/validateJSON \
  -H 'cache-control: no-cache' \
  -d '{"foo":"bar"}'```
```

# Node client

```
var request = require("request");

var options = { method: 'POST',
  url: 'https://r9rui2udt9.execute-api.us-east-1.amazonaws.com/dev/validateJSON',
  headers:
   { 'cache-control': 'no-cache' },
  body: '{"foo":"bar"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

# A sample contract has been deployed 

Ropsten contract address: [0xbae08285e604529a379bd46e4a4b2cc9f0bd5515](https://ropsten.etherscan.io/address/0xbae08285e604529a379bd46e4a4b2cc9f0bd5515)


