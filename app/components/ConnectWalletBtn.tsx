'use client'

import React from 'react'
import GradientBtn from './GradientBtn'
// import { useWalletStore } from '../stores/walletStore';


const ConnectWalletBtn = () => {
  // const { account, connectWallet } = useWalletStore();
  const account = null;

  return (
    <GradientBtn value={account ? account : 'Connect Wallet'} />
  )
}

// onClickFunc={connectWallet} 

export default ConnectWalletBtn