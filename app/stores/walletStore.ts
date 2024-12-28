import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type WalletState = {
  walletAddress: string | null;
  setWalletAddress: (address: string | null)=> void;
  connected: boolean;
  connecting: boolean;
  setIsConnecting: (connecting: boolean) => void;
  setConnected: (connected: boolean)=> void;
  resetState: ()=> void;
};

const initialState = {
    walletAddress: null,
    connected: false,
    isConnecting: false,
    connecting: false,
}



export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
    ...initialState,
    account: null,
    connected: false,
    isConnecting: false,
    setWalletAddress: (address) => set({ walletAddress : address }),
    setConnected: (connected)=> ({ connected }),
    setIsConnecting: (connecting)=> ({ connecting }), 
    resetState: ()=> set(initialState)
  }),
  {
      name: 'wallet-store', 
      storage: createJSONStorage(() => localStorage),
    }
  )
  );
