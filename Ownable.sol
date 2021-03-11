// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

/**
    @title Ownable
    @dev Base class for ownable contracts
 */
contract Ownable{
    
    address private owner;
    
    constructor(){
        owner = msg.sender;
    }
    
    modifier isOwner(){
        require(owner == msg.sender);
        _;
    }
    
}