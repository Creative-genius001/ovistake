'use client'

import React from 'react'
import GradientBtn from './GradientBtn'
import WalletConnectedBtn from './walletConnectedBtn';
import { useWalletStore } from '../stores/walletStore';
import { truncateAddress } from '../utils/truncateWalletAddress';
import { useSDK } from '@metamask/sdk-react';
import toast, { Toaster } from 'react-hot-toast';
import { useWindowSize } from '../hooks/useWindowBreakpoint';



const ConnectWalletBtn = () => {
  const { walletAddress, setWalletAddress, setIsConnecting, setConnected } = useWalletStore();
  const width = useWindowSize();
  const { sdk, connected, connecting } = useSDK();

  const connectWallet = async() => {
    try {
        setIsConnecting(connecting)
        const accounts = await sdk?.connect();
        if(!accounts) {
          toast.error('Error connecting wallet!')
          return;
        }
        setWalletAddress(accounts?.[0]);
        setConnected(connected)
        setIsConnecting(connecting)
        toast.success('Wallet connected successfully')
      } catch (error) {
        setIsConnecting(connecting)
        toast.error('Error connecting wallet!')
        console.log('Error connecting wallet:', error);
      }
  }
  
  const truncatedAddress = truncateAddress(walletAddress);

  return (
    <>
      {truncatedAddress ? <WalletConnectedBtn value={truncatedAddress} /> : <GradientBtn onClickFunc={connectWallet} value={ width < 980 ? 'Connect' : 'Connect Wallet' } />}
      <Toaster />
    </>
  )
}

// onClickFunc={connectWallet} 

export default ConnectWalletBtn