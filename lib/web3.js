import Web3 from 'web3'
import Planetary from './Planetary.json'

let web3 = new Web3("https://goerli.infura.io/v3/cccea4b851024c1496c2460865290ddd")

const contractAddress = "0x2123576ab1eF10d85e36a038c18b1B8882B7a358"
const contract = new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress }