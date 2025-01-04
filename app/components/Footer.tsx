import React from 'react'
import { FooterDividerStyle, FooterSection } from './styles/style.css'

const Footer = () => {
  return (
    <div className={FooterSection}>
        <div className={FooterDividerStyle}></div>
        <div className='lg:w-[90%] w-full lg:flex sm:flex-col justify-between items-center mt-4 text-sm'>
            <div className='flex justify-between'>
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