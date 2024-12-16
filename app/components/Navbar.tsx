import SelectChainType from './SelectChainType'
import { navBox, linkDiv, iconsStyle } from './styles/style.css'
import { mdText as linkStyle, transparentDiv } from '../app.css'
import ConnectWalletBtn from './ConnectWalletBtn'
import { TbSettings } from "react-icons/tb";

const Navbar = () => {

    const links = ['Stake', 'Swap', 'Trade', 'Ecosystem']
  return (
    <nav className={navBox}>
        <div id="logo" className='text-white font-bold w-[100px]'><p className='text-white'>LOGO</p></div>
        <div id="links">
            <ul className={linkDiv}>
                {links.map(link=>{
                    return(
                        <li key={link} className={`${linkStyle} mr-[3rem]`}>
                            {link}
                        </li>
                    )
                })}
            </ul>
        </div>
        <div id="cta-section" className='flex items-center '>
            <SelectChainType />
            <ConnectWalletBtn />
            <div className={`${transparentDiv} flex cursor-pointer justify-center items-center ml-[1rem] h-12 w-12`}><TbSettings className={iconsStyle} /></div>
        </div>
    </nav>
  )
}

export default Navbar