/*const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL); 

const coinClient = new CoinClient(client); 

export const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
export const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";

const alice = new AptosAccount();
const bob = new AptosAccount(); 

await faucetClient.fundAccount(alice.address(), 100_000_000);
await faucetClient.fundAccount(bob.address(), 0); 

console.log(`Alice: ${await coinClient.checkBalance(alice)}`);
console.log(`Bob: ${await coinClient.checkBalance(bob)}`); 

let txnHash = await coinClient.transfer(alice, bob, 1_000, { gasUnitPrice: BigInt(100) }); */