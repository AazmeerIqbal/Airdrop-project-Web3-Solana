const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

// const wallet = new Keypair();
const wallet = Keypair.generate();

const publicKey = wallet.publicKey.toBase58();
const secretcKey = wallet.secretKey;

console.log("Public Key: ", publicKey);
console.log("Secret Key: ", secretcKey);
