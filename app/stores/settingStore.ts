import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SettingState = {
  theme: { id: string, name: string },
  language: { id: string, name: string },
  setTheme: (theme: { id: string, name: string })=> void,
};

const initialState = {
    theme: { id: 'darktheme', name: 'Dark' },
    language: { id: 'en', name: 'English' },
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
