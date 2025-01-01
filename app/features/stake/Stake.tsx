'use client'
import React from 'react'
import { heading01, mdText } from '../../app.css'
import ToggleStake from '../../components/ToggleStake'
import StakeSection from './StakeSection'
import UnStakeSection from './UnStakeSection'

export interface ToggleStakeProps {
    stake: string,
    handleToggleState: (value: string)=> void
    }

const Stake = () => {

    const [stake, setStake] = React.useState<string>('stake')
    const handleToggleState = (value: string) => {
        setStake(value)
    }


  return (
    <main className=' h-[900px] flex items-center flex-col'>
        <div className='w-[50%] flex flex-col justify-center items-center mt-12'>
            <h1 className={heading01}>Top and Secure Staking</h1>
            <p className={`${mdText} w-[70%] text-center`}>Earn staking rewards every second with osETH, a decentralized liquid staking token with slashing protection.</p>
        </div>
        <div className='mt-12'>
            <ToggleStake stake={stake} handleToggleState={handleToggleState} />
        </div>
        <div className='mt-12 w-full flex items-center justify-center'>
            {stake === 'stake' && <StakeSection /> }
            {stake === 'unstake' && <UnStakeSection />}
        </div>
    </main>
  )
}

export default Stake