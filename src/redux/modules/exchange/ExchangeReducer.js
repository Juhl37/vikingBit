import {SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE} from "./actions";

const initialState = {
    exchangeRate: {
        minSum: 0,
        reverse: 0,
        rate: 0
    },
    exchangeValue: {
        sendAmount: '',
        sendCurrency: '',
        getAmount: '',
        getCurrency: ''
    }
}

const ExchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_RATE:
            return {
                ...state,
                exchangeRate: {
                    minSum: action.value.minSum,
                    reverse: action.value.reverse,
                    rate: action.value.rate
                }
            };
        case SET_EXCHANGE_VALUE:
            return {
                ...state,
                exchangeValue: {
                    sendAmount: action.value.sendAmount,
                    sendCurrency: action.value.sendCurrency,
                    getAmount: action.value.getAmount,
                    getCurrency: action.value.getCurrency,
                }
            };
        default: {
            return state;
        }
    }
};

export default ExchangeReducer;