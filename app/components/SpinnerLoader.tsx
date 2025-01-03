import React from 'react'
import { gradientBtnStyle } from './styles/style.css'

const SpinnerLoader = () => {
  return (
    <button disabled className={`${gradientBtnStyle} w-full px-[32px] py-[14px]`}>
        <div className='loader'></div>
    </button>
  )
}

export default SpinnerLoader