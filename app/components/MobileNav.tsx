import React from 'react'
import { hamburgerMenu, navBox } from './styles/style.css'
import Image, { StaticImageData } from 'next/image'
import { LogoStyle } from '../app.css'
import Logo from '../assets/logo.png'
import { CgMenuRight } from "react-icons/cg";
import MobileSettingsDropDown from './MobileSettingsDropDown'
import { dropDownLinks as initialMenuData } from '../utils/dropDownLinks'
import { useSettingStore } from '../stores/settingStore'
import ConnectWalletBtn from './ConnectWalletBtn'

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
    const [menuData, setMenuData] = React.useState(initialMenuData); 
    const { theme } = useSettingStore();

    React.useEffect(()=>{
        const currentTheme = theme.name;
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === 'theme') {
            return { ...menu, selected: currentTheme }; 
        }
        return menu;
        });
        setMenuData(updatedMenuData);
    },[])


    const updateMenuSelection = (menuId: string, subMenuName: string, subMenuIcon: StaticImageData) => {
        const updatedMenuData = menuData.map((menu) => {
        if (menu.id === menuId) {
            return{ ...menu, selectedName: subMenuName, selectedIcon: subMenuIcon}; 
        }
        return menu;
        });

        setMenuData(updatedMenuData);
    };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'visible' : 'hidden'; 
  };


  return (
    <nav className={navBox} >
      <div id="logo" className='font-bold w-1/2 flex justify-start'><Image className={LogoStyle} alt='Ovistake' src={Logo} /></div>
      <ConnectWalletBtn />
      <div  onClick={toggleMenu} className='w-1/2 flex justify-end'><CgMenuRight className={hamburgerMenu} /></div>
      {isOpen && <MobileSettingsDropDown menuData={menuData} isOpen={isOpen} onUpdateSelection={updateMenuSelection} onClose={toggleMenu} />}
    </nav>
  )
}

export default MobileNav