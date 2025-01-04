import React from 'react'
import { iconsStyleSM, settingsDropDown, subLinkDividerStyle } from './styles/style.css'
import { BiChevronLeft } from 'react-icons/bi'
import { useTheme } from '../context/themeProvider';
import { useSettingStore } from '../stores/settingStore';
import { StaticImageData } from 'next/image';
import Image from "next/image";

export interface SettingsMenuProps {
  menuData: Array<{
    id: string,
    primaryIcon: StaticImageData,
    secondaryIcon: React.ReactNode,
    primaryName: string,
    selectedName: string,
    selectedIcon: StaticImageData,
    subMenu: Array<{
        id: string,
        name: string,
        icon?: StaticImageData
    }>,
    }>,
  onUpdateSelection: (menuId: string, subItemName: string, subMenuIcon: StaticImageData) => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const SettingsDropDown = ({ menuData, onUpdateSelection }: SettingsMenuProps) => {

    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const { toggleTheme } = useTheme(); 
    const { setTheme } = useSettingStore();

    
    const handleMenuItemClick = (menuId: string) => {
        const hasSubMenu = menuData.find((menu) => menu.id === menuId)?.subMenu;
        if (hasSubMenu) {
        setActiveMenu(menuId); 
        }
    };

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

    const currentMenu =  menuData.find((menu) => menu.id === activeMenu)

    
  return (
    <>
        { activeMenu ? (
            <div className={settingsDropDown}>
                <div onClick={() => setActiveMenu(null)} className=' px-3 flex items-center py-2 cursor-pointer'>
                    <BiChevronLeft className={iconsStyleSM} />
                    <span className='ml-2'>{currentMenu?.primaryName}</span>
                </div>
                <div className={subLinkDividerStyle}></div>
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
        ) : (
            <div className={settingsDropDown}>
                {menuData.map(menu=> {
                    return(
                        <div key={menu.id}>
                            <div onClick={() => handleMenuItemClick(menu.id)} className='p-[0.6rem] hover:bg-[#8080803e]'>
                            <div className='flex items-center cursor-pointer '>
                                <div className='bg-[#80808061] rounded-[50%] p-[4px] overflow-hidden'>
                                    <Image src={menu.selectedIcon} alt='' className='w-[30px] h-[30px] ' />                                
                                </div>
                                <div className='flex flex-col ml-4 w-[80%]'>
                                    <span className='text-base font-medium flex items-center justify-between w-full'>{menu.primaryName}
                                    {menu.secondaryIcon && React.cloneElement(menu.secondaryIcon as React.ReactElement, { className: iconsStyleSM })} 
                                    </span>
                                    <span className='text-sm font-normal text-[#cbcbcb]'>{menu.selectedName}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
    </>
  )
}


export default SettingsDropDown