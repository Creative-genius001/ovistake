import React from 'react'
import { stakeButtomDiv, stakeInput, stakeInputContainer } from './style/stake.css'
import GradientBtn from '../../components/GradientBtn'
import ETHLogo from '../../assets/staking/ethereum-eth-logo.svg'
import Image from 'next/image'
import { ETHLogoStyle } from '../../app.css'
import SpinnerLoader from '../../components/SpinnerLoader'
import toast, { Toaster } from 'react-hot-toast';
import { useStakeStore } from '../../stores/stakeStore'


const UnStakeSection = () => {

  const { resetState } = useStakeStore()

  const [loading, setLoading] = React.useState<boolean>(false)
  const onUnStakeBtnClicked = () => {
    // if(count === 0) return;
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      toast.success(`Successfull`)
    }, 7000)
  }
  React.useEffect(()=>{
    resetState()
  },[])

  return (
    <div className='lg:w-[38%] sm:w-[100%] flex flex-col'>
        <div className={stakeButtomDiv}>
            <div className={stakeInputContainer}>
              <div className='flex justify-between items-center mb-2'>
                <input type='text' placeholder='0' inputMode="numeric" pattern="[0-9]*" onInput={(e: any) => {e.target.value = e.target.value.replace(/[^0-9]/g, '')}} name='amountToStake' className={stakeInput} />
                <div className='flex'><Image alt='ETHLogo' className={ETHLogoStyle} src={ETHLogo} /><span className='text-xl font-bold'>ovETH</span></div>
              </div>
              <span className='text-sm'>$ 0.00</span>
              <div id='slider'>

              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-sm'>You will recieve</p>
              <span className='text-sm font-bold'>0 ETH</span>
            </div>
            <div className='mt-6'>
              { loading ? <SpinnerLoader /> : <GradientBtn onClickFunc={onUnStakeBtnClicked} value='Untake' /> }
            </div>
        </div>
        <Toaster />
    </div>
  )
}

export default UnStakeSection