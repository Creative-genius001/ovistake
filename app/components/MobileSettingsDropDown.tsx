import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { closeDropDownIconStyle, dropdownMenuContainerStyle, mobileLinkStyle, MobileSettingsDropDownStyle } from './styles/style.css'
import { MdClose } from "react-icons/md";
import { SettingsMenuProps } from './settingsDropDown';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from '../context/themeProvider';
import { useSettingStore } from '../stores/settingStore';


const MobileSettingsDropDown = ({ onClose, menuData, onUpdateSelection, isOpen }: SettingsMenuProps) => {

    const links = ['Stake', 'Swap', 'Trade', 'Ecosystem']
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const [subMenuVisible, setSubMenuVisible] = React.useState(false)
    const currentMenu =  menuData.find((menu) => menu.id === activeMenu)
    const { toggleTheme } = useTheme();
    const { setTheme } = useSettingStore();

     const handleSubItemClick = (menuId: string, subItemName: string, subMenuIcon: StaticImageData | undefined) => {
        if(!subMenuIcon) return
        if(menuId === 'theme'){
            toggleTheme(subItemName);
            const theme = { id: menuId, name: subItemName, icon: subMenuIcon }
            setTheme(theme)
        }
        onUpdateSelection(menuId, subItemName, subMenuIcon);
        setActiveMenu(null); 
    };


    const handleMenuItemClick = (menuId: string) => {
            const hasSubMenu = menuData.find((menu) => menu.id === menuId)?.subMenu;
            if (hasSubMenu) {
                if (activeMenu === menuId) {
                    setActiveMenu(null);
                    setSubMenuVisible(false);
                    } else {
                    setActiveMenu(menuId);
                    setSubMenuVisible(true);
                    }
                }
    };

  return (
    <>
        <AnimatePresence>
            { isOpen ? <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={dropdownMenuContainerStyle}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5"
          >
           <MdClose className={closeDropDownIconStyle} />
          </button>
          <nav>
            <ul className='flex flex-col items-center'>
              { links.map((link, index)=> {
                return(
                  <li className={mobileLinkStyle} key={index}>{link}</li>
                )
              })}
            </ul>
            <div className='relative flex justify-around mt-[5rem] w-full'>
                { menuData.map(menu => {
                    return(
                        <div onClick={() => handleMenuItemClick(menu.id)} className=' bg-[#80808061] rounded-[50%] p-[8px] overflow-hidden mr-3 cursor-pointer' key={menu.id}>
                            <Image src={menu.selectedIcon} alt="" className='w-[30px] h-[30px]' />
                        </div>
                    )
                }) }
                { subMenuVisible &&  (
                    <div className={MobileSettingsDropDownStyle}>
                    <div className='flex flex-col'>
                        {currentMenu?.subMenu.map(subItem=>{
                            return(
                                <div onClick={() => handleSubItemClick(currentMenu.id, subItem.name, subItem.icon)} className='p-2 flex items-center hover:cursor-pointer hover:bg-[#ffffff1e]' key={subItem.id}>
                                    {subItem.icon && <div className='bg-[#80808061] rounded-[50%] p-[4px] overflow-hidden'><Image className='w-[30px] h-[30px]' src={subItem.icon} alt=''  /></div>}
                                    <span className='px-4'>{subItem.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                )}
            </div>
          </nav>
        </motion.div> : null }
        </AnimatePresence>
        
    </>
  )
}

export default MobileSettingsDropDown