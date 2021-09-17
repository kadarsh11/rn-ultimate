import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as BuyThunk from './buy.thunk';
interface BuyState {
  stateValue: string;
  results: any[]; // for example only
}

const buyInitialState: BuyState = {
  stateValue: '',
  results: [], //for example only
};

const buySlice = createSlice({
  name: 'buy',
  initialState: buyInitialState,
  reducers: {
    setStateVal: (state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    },
  },
  extraReducers: {
    [`${BuyThunk.fetchData?.fulfilled}`]: (state, { payload }: { payload: any[] }) => {
      state.results = payload;
      return state;
    },
  },
});

export { buySlice as BuySlice, BuyThunk };
