const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, "../contracts", "UserContract.sol");
const source = fs.readFileSync(contractPath, 'utf8');

const {interface, bytecode} = solc.compile(source, 1).contracts[':UserContract'];

console.log(bytecode);
console.log(interface);