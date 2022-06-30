import { COUNT_UP, RESET_COUNTER } from '../actionTypes';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { CounterPayload } from '../actions/counterAction';

const initialState: CounterState = {
    count: 0,
    lastModified: new Date()
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        countUp: (state:Draft<CounterState>, action: PayloadAction<CounterPayload>) => {
            state.lastModified = action.payload.date;
            state.count += 1;
        },
        resetCounter: (state: Draft<CounterState>, action: PayloadAction<CounterPayload>) => {
            state.lastModified = new Date();
            state.count = 0;
        }
    }
});

export const {countUp, resetCounter} = counterSlice.actions;
export default counterSlice.reducer;

export type CounterState = {
    count: number;
    lastModified?: Date;
}
