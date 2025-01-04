import React from 'react'
import { toggleParent, toggleSpan, gradientToggleBar } from './styles/style.css'
import { ToggleStakeProps } from '../features/stake/Stake'
import { motion } from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowBreakpoint'

const ToggleStake = ({stake, handleToggleState}: ToggleStakeProps) => {

  const width = useWindowSize()

  const toggleXPosition = stake === 'stake' ? 0 : (width < 980 ? 118 : 145);
  return (
    <>
        <div className={toggleParent}>
            <motion.div
              className={`${gradientToggleBar}`}
              initial={{ x: 0 }}
              animate={{ x: toggleXPosition }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
            </motion.div>
            <span onClick={()=>handleToggleState('stake')} className={toggleSpan}>Stake</span>
            <span onClick={()=>handleToggleState('unstake')} className={toggleSpan}>Unstake</span>
        </div>
    </>
  )
}

export default ToggleStake