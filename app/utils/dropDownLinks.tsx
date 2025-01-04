import { BiChevronRight } from "react-icons/bi";
import DarkIcon from '../assets/icons/darkmode.png';
import LightIcon from '../assets/icons/lightmode.png';
import LanguageIcon from '../assets/icons/languages.png';
import French from '../assets/icons/flags/france.png';
import Spanish from '../assets/icons/flags/spanish.png';
import English from '../assets/icons/flags/uk.png';
import ThemeIcon from '../assets/icons/themeIcon.png';
import { StaticImageData } from "next/image";

export interface dropDownLinksProp {
    id: string,
    primaryIcon: StaticImageData,
    secondaryIcon: React.ReactNode,
    primaryName: string,
    selectedName: string,
    selectedIcon: StaticImageData,
    subMenu: {
        id: string,
        name: string,
        icon?: StaticImageData
    }[]
}

export const dropDownLinks: dropDownLinksProp[] = [
    {
        id: 'language',
        primaryIcon: LanguageIcon,
        primaryName: 'Language',
        selectedName: 'English',
        selectedIcon: English,
        subMenu: [{
            id: 'en',
            name: 'English',
            icon: English
        },
        {
            id: 'es',
            name: 'Spanish',
            icon: Spanish
        },
        {
            id: 'fr',
            name: 'French',
            icon: French
        }
        ],
        secondaryIcon: <BiChevronRight />
    },
    {
        id: 'theme',
        primaryIcon: ThemeIcon,
        primaryName: 'Theme',
        selectedName: 'Dark',
        selectedIcon: DarkIcon,
        subMenu: [{
            id: 'darktheme',
            name: 'Dark',
            icon: DarkIcon
        },
        {
            id: 'lightheme',
            name: 'Light',
            icon: LightIcon
        }
    ],
        secondaryIcon: <BiChevronRight />
    },

]