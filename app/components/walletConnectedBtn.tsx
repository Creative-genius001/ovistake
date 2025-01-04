'use client'

import React from 'react'
import { transparentBtnStyle } from './styles/style.css'
import ConnectedButtonTab from './ConnectedButtonTab'
import { useWalletStore } from '../stores/walletStore'
import { useSDK } from '@metamask/sdk-react'
import toast, { Toaster } from 'react-hot-toast'

interface WalletConnectedBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string,
}

const WalletConnectedBtn: React.FC<WalletConnectedBtnProps> = ({value}) => {

  const [toggleMenuActive , setToggleMenuActive] = React.useState<boolean>(false)
  const { sdk } = useSDK();
  const { resetState } = useWalletStore()
  const toggleMenu =()=> {
    setToggleMenuActive(!toggleMenuActive)
  }
  const disconnectWallet = async()=> {
      try {
        await sdk?.disconnect();
        resetState();
        setToggleMenuActive(false)
        
      } catch (error) {
        toast.error('Error: Could not disconnect!')
        console.log('Error disconnecting', error)
      }
  }

  return (
    <div className='relative'>
      <div onClick={toggleMenu} className={`${transparentBtnStyle} px-[32px] py-[14px]`}>{value}</div>
      {toggleMenuActive && <ConnectedButtonTab onClickDisconnectBtn={disconnectWallet}  />}
      <Toaster />
    </div>
  )
}

export default WalletConnectedBtn