'use client'

import React from 'react'
import { gradientBtnStyle } from './styles/style.css'

interface WalletConnectedBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string,
  onClickFunc?: ()=> void;
}

const WalletConnectedBtn: React.FC<WalletConnectedBtnProps> = ({value, onClickFunc}) => {
  return (
    <div onClick={onClickFunc} className={`${gradientBtnStyle} px-[32px] py-[14px]`}>{value}</div>
  )
}

export default WalletConnectedBtn