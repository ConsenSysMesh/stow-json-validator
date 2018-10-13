require('dotenv').load();
const Web3 = require('web3');
const hdwallet = require('./truffle');
const TruffleContract = require('truffle-contract');
const IrisScoreJSONProvider = require('./build/contracts/IrisScoreJSONProvider.json');


const provider_host = process.env.ETH_PROVIDER;
const contractAddr = process.env.CONTRACT_ADDRESS;

let web3;
// If ropsten

const provider = hdwallet.networks[provider_host].provider();
web3 = new Web3(provider.engine);

module.exports.update = function (dataHash, newValue) {

  async function script(err, accounts) {
    const tempContract = TruffleContract(IrisScoreJSONProvider);
    tempContract.setProvider(web3.currentProvider)
    const instance = await tempContract.at(contractAddr);
    try {

      let result = await instance.report.call(dataHash);
      console.log('previous value for [' + dataHash + '] is [' + web3.utils.hexToNumber(result) + ']');


      const tx = await instance.setVal(dataHash, newValue,
         {
           from: accounts[0].toLowerCase(),
           gas: '200000',
           gasPrice: '200000000000'
         });
      console.log(JSON.stringify(tx));

      result = await instance.report.call(dataHash);
      console.log('previous value for [' + dataHash + '] is [' + web3.utils.hexToNumber(result) + ']');
    } catch (err) {
      console.log(err);
    }
  }

  web3.eth.getAccounts(script);
};
