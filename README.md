# linnia-json-validator

#endpoints:

POST - https://3h867xtb9a.execute-api.us-east-1.amazonaws.com/dev2/validateJSON


# Test command

```curl -X POST \
     'https://3h867xtb9a.execute-api.us-east-1.amazonaws.com/dev2/validateJSON?dataHash=0xa1fe2d5ed0ac4e35be7b62a436a4dc4b4568f997dce06ed57e0f7fda900f8916' \
     -H 'cache-control: no-cache' \
     -H 'content-type: application/json' \
     -d '{"foo":"bar"}'
```

# Node client

```
var request = require("request");

var options = { method: 'POST',
  url: 'https://3h867xtb9a.execute-api.us-east-1.amazonaws.com/dev2/validateJSON',
  qs: { dataHash: '0xa1fe2d5ed0ac4e35be7b62a436a4dc4b4568f997dce06ed57e0f7fda900f8916' },
  headers: 
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: { "foo": "bar" },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```

# A sample contract has been deployed 

Ropsten contract address: [0xBaE08285e604529A379bd46E4A4B2Cc9f0bd5515](https://ropsten.etherscan.io/address/0xbae08285e604529a379bd46e4a4b2cc9f0bd5515)


