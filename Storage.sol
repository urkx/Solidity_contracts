// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

import "./Ownable.sol";

/**
 * @title Storage
 * @dev Store & retrieve value in a variable. Extends from Ownable
 */
contract Storage is Ownable {

    uint256 private number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public payable{
        require(msg.value == 3 ether);
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
    
    /**
     * @dev Return contract balance in wei
     */
    function getBalance() public view returns (uint){
        return address(this).balance;
    }
    
    /**
     * @dev Return contract balance in ether
     */
    function getBalanceInEther() public view returns (uint){
        return getBalance() / 1e18; // Convert from wei to ether
    }
    
    /**
     * @dev Transfer an amount in wei to contract owner account. The balance is taken from the contract balance.
     */ 
    function transfer(uint amount) public isOwner{
        require(address(this).balance >= amount);
        owner.transfer(amount);
    }
    
    /**
     * @dev Transfer an amount in wei to an account.
     */ 
    function transferTo(uint amount, address payable to) public isOwner{
        require(address(this).balance >= amount);
        require(to != address(0)); //Check if to account is valid (not empty)
        to.transfer(amount);
    }
}