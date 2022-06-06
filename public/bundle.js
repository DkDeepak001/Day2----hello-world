let contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "displayHelloWorld",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function",
    "signature": "0xc05608e2"
  }
];
let contractAddress = '0xa9FE9da43358B374a25F69759903c04ab4A2fa3B';

const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
var helloWorld = new web3.eth.Contract(contractABI, '0xa9FE9da43358B374a25F69759903c04ab4A2fa3B');

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.displayHelloWorld().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});