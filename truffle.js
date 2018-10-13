require('dotenv').load();
const HDWalletProvider = require('truffle-hdwallet-provider');

const privateKey = process.env.LINNIA_ETH_INFURA_ROPSTEN_HUB_OWNER_PRIVATE_KEY;
const privKeys = [privateKey.toLowerCase()];


// console.log(privKeys);
module.exports = {
  networks: {
    ropsten: {
      provider() {
        return new HDWalletProvider(
           privKeys,
           `https://ropsten.infura.io/${process.env.LINNIA_ETH_INFURA_ROPSTEN_KEY}`,
        );
      },
      network_id: 3,
      gas: 5000000,
      gasPrice: 10000000000,
    },
  },
};
