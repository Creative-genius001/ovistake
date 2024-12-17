'use client'

import React from 'react'
import { gradientBtnStyle } from './styles/style.css'

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string,
  onClickFunc: ()=> void;
}

const GradientBtn: React.FC<GradientButtonProps> = ({value, onClickFunc}) => {
  return (
    <div onClick={onClickFunc} className={`${gradientBtnStyle} px-[32px] py-[14px]`}>{value}</div>
  )
}

export default GradientBtn