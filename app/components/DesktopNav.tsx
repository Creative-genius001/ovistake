'use client'

import SelectChainType from './SelectChainType'
import { navBox, linkDiv, iconsStyle } from './styles/style.css'
import { mdText as linkStyle, LogoStyle, transparentDiv } from '../app.css'
import ConnectWalletBtn from './ConnectWalletBtn'
import { TbSettings } from "react-icons/tb";
import React from 'react'
import SettingsDropDown from './SettingsDropDown'
import Logo from '../assets/logo.png'
import { dropDownLinks as initialMenuData } from '../utils/dropDownLinks'
import { useSettingStore } from '../stores/settingStore'
import Image, { StaticImageData } from 'next/image'

const DesktopNav = () => {

    const links = ['Stake', 'Swap', 'Trade', 'Ecosystem']
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [menuData, setMenuData] = React.useState(initialMenuData); // Track selections
    const { theme, language } = useSettingStore();

    React.useEffect(()=>{
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === 'theme') {
            return { ...menu, selected: theme };
        }
        if (menu.id === 'language') {
            return { ...menu, selected: language };
        }
        return menu;
        });
        setMenuData(updatedMenuData);
    },[])


    const updateMenuSelection = (menuId: string, subMenuName: string, subMenuIcon: StaticImageData) => {
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === menuId) {
            return { ...menu, selectedName: subMenuName, selectedIcon: subMenuIcon}; 
        }
        return menu;
        });

        setMenuData(updatedMenuData);
        setMenuVisible(false);
    };


  return (
    <nav className={navBox}>
        <div id="logo" className='font-bold w-[100px]'><Image className={LogoStyle} alt='Ovistake' src={Logo} /></div>
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
            <div onClick={()=> setMenuVisible(!menuVisible)} className={`${transparentDiv} flex cursor-pointer justify-center items-center ml-[1rem] h-12 w-12`}><TbSettings className={iconsStyle} /></div>
        </div>
        { menuVisible && <SettingsDropDown  menuData={menuData} onUpdateSelection={updateMenuSelection} onClose={() => setMenuVisible(false)} />}
    </nav>
  )
}

export default DesktopNav