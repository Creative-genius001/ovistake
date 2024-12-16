import { BiChevronDown } from "react-icons/bi";
import { ETHLogoStyle, mdText, transparentDiv } from '../app.css'
import { iconsStyle } from "./styles/style.css";
import EthereumLogo from '../assets/staking/ethereum-eth-logo.svg'
import Image from "next/image";

const SelectChainType = () => {
  return (
    <div className={`${transparentDiv} w-auto px-[24px] py-[12px] mr-8 flex items-center justify-center cursor-pointer`}>
        <span><Image alt="ethereum-logo" src={EthereumLogo} className={ETHLogoStyle} /></span>
        <span className={`${mdText} mr-1`}>Ethereum</span>
        <BiChevronDown className={iconsStyle} />
    </div>
  )
}

export default SelectChainType