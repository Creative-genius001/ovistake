'use client'

import React from 'react'
import GradientBtn from './GradientBtn'
import WalletConnectedBtn from './walletConnectedBtn';
import { useWalletStore } from '../stores/walletStore';
import { truncateAddress } from '../utils/truncateWalletAddress';
import { useSDK } from '@metamask/sdk-react';



const ConnectWalletBtn = () => {
  const { walletAddress, setWalletAddress, setIsConnecting, setConnected } = useWalletStore();
  const { sdk, connected, connecting } = useSDK();

  const connectWallet = async() => {
    try {
        setIsConnecting(connecting)
        const accounts = await sdk?.connect();
        if(!accounts) {
          console.error('Error connecting wallet');
          return;
        }
        setWalletAddress(accounts?.[0]);
        setConnected(connected)
        setIsConnecting(connecting)
      } catch (error) {
        setIsConnecting(connecting)
        console.error('Error connecting wallet:', error);
      }
  }
  
  const truncatedAddress = truncateAddress(walletAddress);

  return (
    <>
      {truncatedAddress ? <WalletConnectedBtn value={truncatedAddress} /> : <GradientBtn onClickFunc={connectWallet} value='Connect Wallet' />}
    </>
  )
}

// onClickFunc={connectWallet} 

export default ConnectWalletBtn