import React from 'react'
import { gradientBtnStyle } from './styles/style.css'

const GradientBtn = ({ value }: { value: string }) => {
  return (
    <div className={`${gradientBtnStyle} px-[32px] py-[14px]`}>{value}</div>
  )
}

export default GradientBtn