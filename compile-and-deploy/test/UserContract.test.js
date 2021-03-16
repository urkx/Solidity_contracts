const assert = require('assert');
const AssertionError = require('assert').AssertionError;
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
        console.log(userContract.options.address);
        assert.ok(userContract.options.address);
    });

    it('should join a user', async() => {
        let name = "Urko";
        let surName = "Lopez";

        userContract.methods.join(name, surName)
        .send({from: accounts[0], gas: '1000000'});
    });

    it('should retrieve a user', async() => {
        let name = "Oscar";
        let surName = "Lopez";

        await userContract.methods.join(name, surName)
        .send({from: accounts[0], gas: '1000000'});

        let user = await userContract.methods.getUser(accounts[0]).call();

        assert.strictEqual(name, user[0]);
        assert.strictEqual(surName, user[1]);
    });

    it('should not allow joining an account twice', async() => {
        await userContract.methods.join("Urko", "Lopez")
        .send({from: accounts[1], gas: '1000000'});

        try{

            await userContract.methods.join("Oscar", "Lopez")
            .send({from: accounts[1], gas: '1000000'});

            assert.fail('Same account cant join twice');
            
        } catch(e) {
            if(e instanceof AssertionError){
                assert.fail(e.message);
            }
        }
    });

    
});