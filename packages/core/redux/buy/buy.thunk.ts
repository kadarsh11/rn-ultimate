import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Dispatch } from 'react';
import axios from 'axios';

type thunkApi = {
  getState: () => RootState;
  dispatch: Dispatch<any>;
};

const fetchData = createAsyncThunk('buy/fetchBuy', async () => {
  const data = await axios.get('https://randomuser.me/api/'); // random api for showcasing use
  if (!!data && !!data.data) {
    return data.data.results;
  }
});

export { fetchData };
