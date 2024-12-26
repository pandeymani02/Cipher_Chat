import { ethers } from "ethers";
import ensABI from "./ensAbi.json";
import chatAbi from "./chatAbi.json";

/**
 * Returns an ENS contract instance.
 * @param providerOrSigner - A provider (read-only) or a signer (read-write) instance.
 */
export const getENSContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
): ethers.Contract => {
  if (!import.meta.env.VITE_ENS_CONTRACT_ADDRESS) {
    throw new Error("ENS contract address is not defined in environment variables.");
  }

  return new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
    ensABI,
    providerOrSigner
  );
};

/**
 * Returns a Chat contract instance.
 * @param providerOrSigner - A provider (read-only) or a signer (read-write) instance.
 */
export const getChatContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
): ethers.Contract => {
  if (!import.meta.env.VITE_CHAT_CONTRACT_ADDRESS) {
    throw new Error("Chat contract address is not defined in environment variables.");
  }

  return new ethers.Contract(
    import.meta.env.VITE_CHAT_CONTRACT_ADDRESS,
    chatAbi,
    providerOrSigner
  );
};
