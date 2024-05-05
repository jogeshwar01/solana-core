import * as web3 from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const transaction = new web3.Transaction();

const PROGRAM_ID = 'qnfktpqv94TUY9ScuNXXZZNB77CQTJMVrRyfXThHsBo';

// const keypair = web3.Keypair.generate();
const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new web3.Connection("http://localhost:8899");

// add a program instruction to the transaction
transaction.add(
  new web3.TransactionInstruction({
    keys: [],
    programId: new web3.PublicKey(PROGRAM_ID),
  }),
);

// send the transaction to the Solana cluster
console.log("Sending transaction...");

const send = async () => {
  const txHash = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [keypair],
  );
  console.log("Transaction sent with hash:", txHash);
};

send().catch((err) => {
  console.error(err);
  process.exit(1);
});

// transaction hash - 2MTs7fysF7Rzbr1zwJNvEVi5oGsUJU8LktoVmmp4p1hd9QKYyc83hnc3CJDsDL8ebCZjKuKu6BYPTPyLceLXyHek