pragma solidity >= 0.6.0;

contract Piggy {

	uint256 public total;
	
	function addFunds() external payable {
		total += address(this).balance;
	}

	function getBalance() external view returns(uint) {
		return total;
	}

	function getBalanceFromAccount(address addr) external view returns(uint) {
		return addr.balance;
	}

	function sum(uint a, uint b) external pure returns(uint){
		return a + b;
	} 
}
