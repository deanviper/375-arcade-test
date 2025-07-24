import { ethers } from 'ethers';

export const handlePayment = async (gameType: string) => {
  const ethereum = (window as any).ethereum;
  if (!ethereum) throw new Error('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');

  // Ensure environment variables are available
  const walletAddress = process.env.NEXT_PUBLIC_GAME_WALLET_ADDRESS;
  const gameFee = process.env.NEXT_PUBLIC_GAME_FEE;
  
  if (!walletAddress) {
    throw new Error('Game wallet address not configured');
  }
  
  if (!gameFee) {
    throw new Error('Game fee not configured');
  }

  console.log('Payment details:', { walletAddress, gameFee }); // Debug log

  const provider = new ethers.BrowserProvider(ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = await provider.getSigner();
  
  // Convert fee to wei with proper validation
  const feeInWei = ethers.parseEther(gameFee.toString());
  
  const tx = await signer.sendTransaction({
    to: walletAddress,
    value: feeInWei
  });
  
  await tx.wait();
};

export const authenticateUser = async (signMessageAsync: any) => {
  const message = `Authenticate @375 Arcade at ${Date.now()}`;
  await signMessageAsync({ message });
};