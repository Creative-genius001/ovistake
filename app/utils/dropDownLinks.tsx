import { TbWorld } from "react-icons/tb";
import { BiChevronRight } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";

export interface dropDownLinksProp {
    id: string,
    primaryIcon: React.ReactNode,
    secondaryIcon: React.ReactNode,
    primaryName: string,
    selected: string,
    subMenu: {
        id: string,
        name: string
    }[]
}

export const dropDownLinks: dropDownLinksProp[] = [
    {
        id: 'language',
        primaryIcon: <TbWorld />,
        primaryName: 'Language',
        selected: 'English',
        subMenu: [{
            id: 'en',
            name: 'English'
        },
        {
            id: 'es',
            name: 'Spanish'
        },
        {
            id: 'fr',
            name: 'French'
        }
        ],
        secondaryIcon: <BiChevronRight />
    },
    {
        id: 'theme',
        primaryIcon: <IoColorPaletteOutline />,
        primaryName: 'Theme',
        selected: 'Dark',
        subMenu: [{
            id: 'darktheme',
            name: 'Dark'
        },
        {
            id: 'lightheme',
            name: 'Light'
        }
    ],
        secondaryIcon: <BiChevronRight />
    },

]