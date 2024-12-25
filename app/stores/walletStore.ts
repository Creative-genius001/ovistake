// 'use client'

// import { useSDK } from '@metamask/sdk-react';
// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';

// type WalletState = {
//   account: string | null;
//   connectWallet: () => Promise<void>;
// };

//  const { sdk, connected, connecting, provider, chainId } = useSDK();

// export const useWalletStore = create<WalletState>()(
//   persist(
//     (set) => ({
//     account: null,
//     connectWallet: async () => {
//       try {
//         const accounts = await sdk?.connect();
//         set({ account: accounts?.[0] });
//       } catch (error) {
//         console.error("Error connecting wallet:", error);
//       }
//     },
//   }),
//   {
//       name: 'wallet-store', 
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
//   );
