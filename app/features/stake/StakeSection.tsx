import React from 'react'
import { stakeButtomDiv, stakeInput, stakeInputContainer, stakeTopDiv } from './style/stake.css'
import GradientBtn from '../../components/GradientBtn'
import ETHLogo from '../../assets/staking/ethereum-eth-logo.svg'
import Image from 'next/image'
import { ETHLogoStyle } from '../../app.css'
import Slider from '../../components/Slider'
import { useStakeStore } from '../../stores/stakeStore'
import toast, { Toaster } from 'react-hot-toast';
import SpinnerLoader from '../../components/SpinnerLoader'
import { useWalletStore } from '../../stores/walletStore'


const StakeSection = () => {

  const { count , onMoveSlider, annualReward, ethereumPriceInDollars, resetState } = useStakeStore();
  const { walletAddress } = useWalletStore();
  const [loading, setLoading] = React.useState<boolean>(false)
  const onStakeBtnClicked = () => {
    if(!walletAddress){
      toast('Connect to Metamask')
      return;
    }
    if(count === 0) return;
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      toast.success(`Successfully staked ${count} ETH`)
    }, 7000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!isNaN(Number(inputValue)) && Number(inputValue) <= 5000) {
      onMoveSlider(Number(e.target.value))
    }
  };

  React.useEffect(()=>{
    resetState()
  },[])

  return (
    <div className='lg:w-[38%] sm:w-[100%] flex flex-col'>
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
              <div className='flex justify-between items-center mb-2'>
                <input type='text' placeholder='0' value={count} inputMode='numeric' 
                  pattern='[0-9]*' 
                  onChange={handleChange}
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                  } 
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
              { loading ? <SpinnerLoader /> : <GradientBtn onClickFunc={onStakeBtnClicked} value='Stake' /> }
            </div>
        </div>
        <Toaster />
    </div>
  )
}

export default StakeSection