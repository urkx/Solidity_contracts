// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

import "./Ownable.sol";

/**
 * @title Storage
 * @dev Store & retrieve value in a variable. Extends from Ownable
 */
contract Storage is Ownable {

    uint256 private number;
    
    // Implemented in Ownable
    //address private owner;
    
    /**
     *@dev Implemented in Ownable
    constructor() {
        owner = msg.sender;
    }
    */

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
        @dev implemented in Ownable
    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }
    */
}