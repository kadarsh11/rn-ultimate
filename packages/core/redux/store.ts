import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { logger } from 'redux-logger';

export const reducer = combineReducers({
  buy: BuySlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: [ logger],
});

import { BuySlice } from './buy';

export type RootState = ReturnType<typeof reducer>;


export default store;
