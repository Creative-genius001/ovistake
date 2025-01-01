import React from 'react'
import { FooterDividerStyle, FooterSection } from './styles/style.css'

const Footer = () => {
  return (
    <div className={FooterSection}>
        <div className={FooterDividerStyle}></div>
        <div className='w-[90%] flex justify-between mt-4 text-sm'>
            <div className='flex'>
                <span className='mr-4'>Terms of Policy</span>
                <span>Privacy Policy</span>
            </div>
            <div>
                Built by Ovie.dev
            </div>
        </div>
    </div>
  )
}

export default Footer