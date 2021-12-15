pragma solidity >=0.4.22 <0.9.0;

contract ChessMate{

    function get_balance(address add) public view returns (uint256) {
            return add.balance;
    }

    function transaction(address payable add1, uint256 val) public payable {
            add1.transfer(val);
    }

}