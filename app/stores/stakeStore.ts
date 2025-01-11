import { create } from 'zustand';
import { projectAnnualReward, convertEthereumPriceToDollars, convertEthereumToOvETH, convertOvETHtoEthereum } from '../utils/calcAnnualReward';

type StakeState = {
  count: number;
  onMoveSlider: (value: number)=> void;
  onUnstakeInputChange: (value: number)=> void;
  annualReward: string | undefined;
  ethereumPriceInDollars: string;
  ovETHStake: string,
  ETHUnstake: string,
  resetState: ()=> void
};

const initialState = {
  count: 0,
  annualReward: '0.00',
  ovETHStake: '0.00',
  ETHUnstake: '0.00',
  ethereumPriceInDollars: '0.00'
}


export const useStakeStore = create<StakeState>()(
    (set) => ({
    ...initialState,
    count: 0,
    onUnstakeInputChange: (value: number)=> {
        const result = convertOvETHtoEthereum(value)
        const priceInDollars = convertEthereumPriceToDollars(Number(result))
        set(()=> ({ ethereumPriceInDollars: priceInDollars }))
        set(()=> ({ ETHUnstake: result }))
    },
    onMoveSlider: (value: number)=> {
        const result = projectAnnualReward(value)
        const priceInDollars = convertEthereumPriceToDollars(value)
        const ovETHStake = convertEthereumToOvETH(value)
        set(()=> ({ ovETHStake }))
        set(()=> ({ annualReward: result }))
        set(()=> ({ ethereumPriceInDollars: priceInDollars }))
        set(() => ({ count: value }))
    },
    resetState: ()=> set(initialState),
  }),
  );
 