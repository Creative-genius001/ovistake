import React from 'react'
import { stakeButtomDiv, stakeInput, stakeInputContainer, stakeTopDiv } from './style/stake.css'
import GradientBtn from '../../components/GradientBtn'
import ETHLogo from '../../assets/staking/ethereum-eth-logo.svg'
import Image from 'next/image'
import { ETHLogoStyle } from '../../app.css'
import Slider from '../../components/Slider'
import { useStakeStore } from '../../stores/stakeStore'


const StakeSection = () => {

  const { count , onMoveSlider, annualReward, ethereumPriceInDollars } = useStakeStore();

  return (
    <div className='w-[38%] flex flex-col'>
        <div className='flex justify-between'>
            <div className={stakeTopDiv}>
              <span className='text-sm mb-1'>APY</span>
              <span className='text-2xl font-bold'>2.84%</span>
            </div>
            <div className={stakeTopDiv}>
              <span className='text-sm mb-1'>Annual Reward</span>
              <span className='text-2xl font-bold flex items-center'><Image alt='ETHLogo' className={ETHLogoStyle} src={ETHLogo} />{annualReward}</span>
            </div>
        </div>
        <div className={stakeButtomDiv}>
            <div className={stakeInputContainer}>
              <div className='flex justify-between mb-2'>
                <input type='text' placeholder='0' value={count} inputMode='numeric' 
                  pattern='[0-9]*' 
                  onChange={e => onMoveSlider(Number(e.target.value))}
                  onInput={(e: any) => {e.target.value = e.target.value.replace(/[^0-9]/g, '')}} 
                  name='amountToStake' className={stakeInput} 
                />
                <div className='flex'><Image alt='ETHLogo' className={ETHLogoStyle} src={ETHLogo} /><span className='text-xl font-bold'>ETH</span></div>
              </div>
              <span className='text-sm'>$ {ethereumPriceInDollars}</span>
              <div className='mt-4' id='slider'>
                <Slider />
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-sm'>You will recieve</p>
              <span className='text-sm font-bold'>0.0003ovETH</span>
            </div>
            <div className='mt-6'>
              <GradientBtn value='Stake' />
            </div>
        </div>
    </div>
  )
}

export default StakeSection