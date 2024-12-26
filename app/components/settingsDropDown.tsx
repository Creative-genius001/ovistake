import React from 'react'
import { iconsStyle, iconsStyleSM, settingsDropDown, subLinkDividerStyle } from './styles/style.css'
import { BiChevronLeft } from 'react-icons/bi'

interface SettingsMenuProps {
  menuData: Array<{
    id: string,
    primaryIcon: React.ReactNode,
    secondaryIcon: React.ReactNode,
    primaryName: string,
    selected: string,
    subMenu: Array<{
        id: string,
        name: string
    }>,
    }>,
  onUpdateSelection: (menuId: string, subItemName: string) => void;
  onClose: () => void;
}

const SettingsDropDown = ({ menuData, onUpdateSelection }: SettingsMenuProps) => {

    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const handleMenuItemClick = (menuId: string) => {
        const hasSubMenu = menuData.find((menu) => menu.id === menuId)?.subMenu;
        if (hasSubMenu) {
        setActiveMenu(menuId); // Show submenu
        }
    };

    const handleSubItemClick = (menuId: string, subItemName: string) => {
        onUpdateSelection(menuId, subItemName); // Update parent with selected value
        setActiveMenu(null); // Go back to main menu
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
                            <div onClick={() => handleSubItemClick(currentMenu.id, subItem.name)} className='py-2  hover:cursor-pointer hover:bg-[#ffffff1e]' key={subItem.id}>
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
                                <div className='bg-[#80808090] rounded-[50%] p-[4px]'>
                                    {menu.primaryIcon && React.cloneElement(menu.primaryIcon as React.ReactElement, { className: iconsStyle })}
                                </div>
                                <div className='flex flex-col ml-4 w-[80%]'>
                                    <span className='text-base font-medium flex items-center justify-between w-full'>{menu.primaryName}
                                    {menu.secondaryIcon && React.cloneElement(menu.secondaryIcon as React.ReactElement, { className: iconsStyleSM })} 
                                    </span>
                                    <span className='text-sm font-normal text-[#d7d7d7]'>{menu.selected}</span>
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