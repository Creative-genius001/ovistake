import { create } from 'zustand';
import { projectAnnualReward, convertEthereumPriceToDollars } from '../utils/calcAnnualReward';

type StakeState = {
  count: number;
  onMoveSlider: (value: number)=> void;
  annualReward: string | undefined;
  ethereumPriceInDollars: string;
  resetState: ()=> void
};

const initialState = {
  count: 0,
  annualReward: '0.00',
  ethereumPriceInDollars: '0.00'
}


export const useStakeStore = create<StakeState>()(
    (set) => ({
    ...initialState,
    count: 0,
    onMoveSlider: (value: number)=> {
        const result = projectAnnualReward(value)
        const priceInDollars = convertEthereumPriceToDollars(value)
        set(()=> ({ annualReward: result }))
        set(()=> ({ ethereumPriceInDollars: priceInDollars }))
        set(() => ({ count: value }))
    },
    resetState: ()=> set(initialState),
    annualReward: '0.00',
    ethereumPriceInDollars: '0.00' 
  }),
  );
 