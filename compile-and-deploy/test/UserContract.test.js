const assert = require('assert');
const Web3 = require('web3');


const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
const web3 = new Web3(provider);

const {interface, bytecode} = require('../scripts/compile');

let accounts;
let userContract;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    userContract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '1000000'});
});

describe('The UserContract', async() => {

    it('should deploy', () => {
        //console.log(userContract.options.address);
        assert.ok(userContract.options.address);
    });

});