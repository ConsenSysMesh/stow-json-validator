var IrisScoreJSONProvider = artifacts.require("./IrisScoreJSONProvider.sol");

module.exports = function(deployer) {
  deployer.deploy(IrisScoreJSONProvider);
};
