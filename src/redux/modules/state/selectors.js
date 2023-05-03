import { createSelector } from 'reselect';

const selectStateDomain = (state) => state.state;

export const selectActivePage = createSelector(
    selectStateDomain,
    (stateDomain) => stateDomain.activePage
);
export const selectAddReviewPopup = createSelector(
    selectStateDomain,
    (stateDomain) => stateDomain.isAddReviewPopupVisible
);

export const selectCurrencyList = createSelector(
    selectStateDomain,
    (stateDomain) => stateDomain.currencyList
);

export const selectWalletsList = createSelector(
    selectStateDomain,
    (stateDomain) => stateDomain.walletsList
);

export const isShowLoading = createSelector(
    selectStateDomain,
    (stateDomain) => stateDomain.loading
);