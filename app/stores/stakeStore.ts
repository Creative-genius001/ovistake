import { create } from 'zustand';
import { projectAnnualReward, convertEthereumPriceToDollars } from '../utils/calcAnnualReward';

type StakeState = {
  count: number;
  onMoveSlider: (value: number)=> void;
  annualReward: string | undefined;
  ethereumPriceInDollars: string;
};


export const useStakeStore = create<StakeState>()(
    (set) => ({
    count: 0,
    onMoveSlider: (value: number)=> {
        const result = projectAnnualReward(value)
        const priceInDollars = convertEthereumPriceToDollars(value)
        set(()=> ({ annualReward: result }))
        set(()=> ({ ethereumPriceInDollars: priceInDollars }))
        set(() => ({ count: value }))
    },
    annualReward: '0.00',
    ethereumPriceInDollars: '0.00' 
  }),
  );
 