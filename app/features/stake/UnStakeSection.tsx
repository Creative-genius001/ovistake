import React from 'react'
import { stakeButtomDiv, stakeInput, stakeInputContainer } from './style/stake.css'
import GradientBtn from '../../components/GradientBtn'
import ETHLogo from '../../assets/staking/ethereum-eth-logo.svg'
import Image from 'next/image'
import { ETHLogoStyle } from '../../app.css'
import SpinnerLoader from '../../components/SpinnerLoader'
import toast, { Toaster } from 'react-hot-toast';
import { useStakeStore } from '../../stores/stakeStore'
import { motion } from 'framer-motion'
import { useWalletStore } from '@/app/stores/walletStore'


const UnStakeSection = () => {

  const { resetState, ETHUnstake, onUnstakeInputChange, ethereumPriceInDollars } = useStakeStore();
  const { walletAddress } = useWalletStore()

  const [loading, setLoading] = React.useState<boolean>(false)
  const onUnStakeBtnClicked = () => {
    const ln = Number(ETHUnstake)
    if(!walletAddress){
      toast('Connect Metamask')
      return
    }
    if(ln <= 0){
      return
    }
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      toast.success(`Successfully unstaked ${ETHUnstake}`)
    }, 7000)
  }
  React.useEffect(()=>{
    resetState()
  },[resetState])

  const handleValueChange = (arg: any) =>{
      onUnstakeInputChange(arg)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='lg:w-[38%] sm:w-[100%] flex flex-col'>
        <div className={stakeButtomDiv}>
            <div className={stakeInputContainer}>
              <div className='flex justify-between items-center mb-2'>
                <input type='text' placeholder='0' inputMode="numeric" pattern="[0-9]*" 
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {e.target.value = e.target.value.replace(/[^0-9.]/g, '')}} 
                  name='amountToStake' className={stakeInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(e.target.value)}/>
                <div className='flex'><Image alt='ETHLogo' className={ETHLogoStyle} src={ETHLogo} /><span className='sm:text-lg lg:text-xl font-bold'>ovETH</span></div>
              </div>
              <span className='text-sm'>$ {ethereumPriceInDollars}</span>
              <div id='slider'>

              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-sm'>You will recieve</p>
              <span className='text-sm font-bold'>{ETHUnstake} ETH</span>
            </div>
            <div className='mt-6'>
              { loading ? <SpinnerLoader /> : <GradientBtn onClickFunc={onUnStakeBtnClicked} value='Untake' /> }
            </div>
        </div>
        <Toaster />
    </motion.div>
  )
}

export default UnStakeSection