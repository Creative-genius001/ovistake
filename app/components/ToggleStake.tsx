import React from 'react'
import { toggleParent, toggleSpan, gradientToggleBar } from './styles/style.css'
import { ToggleStakeProps } from '../features/stake/Stake'

const ToggleStake = ({stake, handleToggleState}: ToggleStakeProps) => {
  return (
    <>
        <div className={toggleParent}>
            <div className={`${gradientToggleBar} ${stake === 'stake' ? 'left-1' : 'right-1'  }`}></div>
            <span onClick={()=>handleToggleState('stake')} className={toggleSpan}>Stake</span>
            <span onClick={()=>handleToggleState('unstake')} className={toggleSpan}>Unstake</span>
        </div>
    </>
  )
}

export default ToggleStake