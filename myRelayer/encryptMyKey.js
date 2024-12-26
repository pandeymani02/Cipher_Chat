const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  // Replace with your private key
  const wallet = new ethers.Wallet(process.env.MY_PRIVATE_KEY);

  // Prompt for a new password (hardcode for now or fetch securely)
  const NEW_PASSWORD = "Prem@1234"; // Replace with a strong password

  // Encrypt the wallet with the new password
  const encryptedJsonKey = await wallet.encrypt(NEW_PASSWORD);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);

  console.log("✅ New .encryptedKey.json created successfully with the new password!");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
