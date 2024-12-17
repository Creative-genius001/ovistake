'use client'

import React from 'react'
import GradientBtn from './GradientBtn'
import { useSDK } from "@metamask/sdk-react";


const ConnectWalletBtn = () => {
  const [account, setAccount] = React.useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    console.log("clicked connect button")
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn('failed to connect..', err);
    }
  };

  return (
    <GradientBtn onClickFunc={connect} value={account ? account : 'Connect Wallet'} />
  )
}

export default ConnectWalletBtn