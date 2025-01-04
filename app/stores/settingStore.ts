import { StaticImageData } from 'next/image';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import English from '../assets/icons/flags/uk.png';
import DarkIcon from '../assets/icons/darkmode.png';

type SettingState = {
  theme: { id: string, name: string, icon: StaticImageData },
  language: { id: string, name: string, icon: StaticImageData },
  setTheme: (theme: { id: string, name: string, icon: StaticImageData })=> void,
};

const initialState = {
    theme: { id: 'darktheme', name: 'Dark', icon: English  },
    language: { id: 'en', name: 'English', icon: DarkIcon },
}



export const useSettingStore = create<SettingState>()(
  persist(
    (set) => ({
    ...initialState,
    setTheme: (theme)=>{ 
        set({ theme })
    },
  }),
  {
      name: 'setting-store', 
      storage: createJSONStorage(() => localStorage),
    }
  )
  );