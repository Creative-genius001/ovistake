'use client'

import SelectChainType from './SelectChainType'
import { navBox, linkDiv, iconsStyle } from './styles/style.css'
import { mdText as linkStyle, mdText, transparentDiv } from '../app.css'
import ConnectWalletBtn from './ConnectWalletBtn'
import { TbSettings } from "react-icons/tb";
import React, { useEffect } from 'react'
import SettingsDropDown from './SettingsDropDown'
// import SubSettingDropDown from './subSettingDropDown'
// import { useSettingStore } from '../stores/settingStore'
import { dropDownLinks as initialMenuData } from '../utils/dropDownLinks'
import { useSettingStore } from '../stores/settingStore'

const Navbar = () => {

    const links = ['Stake', 'Swap', 'Trade', 'Ecosystem']
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [menuData, setMenuData] = React.useState(initialMenuData); // Track selections
    const { theme } = useSettingStore();

    useEffect(()=>{
        const currentTheme = theme.name;
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === 'theme') {
            return { ...menu, selected: currentTheme }; // Update the theme to match the theme in the store
        }
        return menu;
        });
        setMenuData(updatedMenuData);
    },[])


    const updateMenuSelection = (menuId: string, subItemName: string) => {
        // Update selected value in menuData
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === menuId) {
            return { ...menu, selected: subItemName }; // Update the selected value
        }
        return menu;
        });

        setMenuData(updatedMenuData);
        setMenuVisible(false); // Optionally close the settings menu
    };


  return (
    <nav className={navBox}>
        <div id="logo" className='font-bold w-[100px]'><p className={mdText}>Ovistake</p></div>
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

export default Navbar