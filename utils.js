const { Keypair } = require("@solana/web3.js");
const solanaWeb3 = require("@solana/web3.js");
function generateAddress() {
  let keypair = Keypair.generate();
  return keypair;
}

function getAccount(secretKey) {
  let account = Keypair.fromSecretKey(secretKey);
  console.log(account.publicKey.toBase58());
  console.log(account.secretKey.toString());
}
module.exports = { generateAddress, getAccount };
