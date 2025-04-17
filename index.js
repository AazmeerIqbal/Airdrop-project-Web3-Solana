const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const wallet = Keypair.generate();

const publicKey = new PublicKey(wallet.publicKey.toBase58());
const secretKey = wallet.secretKey;

const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const walletBalance = await connection.getBalance(publicKey);
    console.log(`Wallet balance: ${walletBalance} SOL`);
  } catch (err) {
    console.log("Error getting balance:", err);
  }
};

const airDropSol = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromAirDropSignature = await connection.requestAirdrop(
      publicKey,
      2 * LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(fromAirDropSignature);
  } catch (err) {
    console.log("Error getting balance:", err);
  }
};

const main = async () => {
  //   await getWalletBalance();
    await airDropSol();
  await getWalletBalance();
};

main();
