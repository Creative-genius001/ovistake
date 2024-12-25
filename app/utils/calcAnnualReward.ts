const averageProjectYeild = 0.0289;
const EthereumPrice = 3323;


export const projectAnnualReward = (selectedEthereumAmount: number) => {
    const result = averageProjectYeild * selectedEthereumAmount;
    return(result.toFixed(2));
};

export const convertEthereumPriceToDollars =(selectedEthereumAmount: number) => {
    const result = EthereumPrice * selectedEthereumAmount;
    const resultToString = result.toString();
    const numberOfCharacters =  resultToString.length
    if(numberOfCharacters === 6){
        const scaledNumber = Number(resultToString) / 1000;
        return(`${scaledNumber.toFixed(2)}k`)
    }
    else if(numberOfCharacters === 7){
        const scaledNumber = Number(resultToString) / 1000000;
        return(`${scaledNumber.toFixed(2)}m`)
    }
    else if(numberOfCharacters === 8){
        const scaledNumber = Number(resultToString) / 1000000;
        return(`${scaledNumber.toFixed(2)}m`)
    }
    else {
        return(result.toFixed(2));
    }
};
