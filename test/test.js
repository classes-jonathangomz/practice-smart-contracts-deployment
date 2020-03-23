const Piggy = artifacts.require("Piggy");
const web3 = require("web3");

contract('Piggy', accounts => {

	it("Sould sum two number", async () => {
		let instance = await Piggy.deployed();
		let result = await instance.sum(1, 1);
		
		assert.equal(result, 2, "Don't sum both numbers");
	});

	it("Get balance from account [7] address", async () => {
		let instance = await Piggy.deployed();
		let result = await instance.getBalanceFromAccount(accounts[7]);
		let ether = web3.utils.fromWei(result, 'ether');

		assert.equal(ether, 100, "Cannot get the balance from the account");
	});
});
