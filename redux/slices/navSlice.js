import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfoRmation: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfoRmation: (state, action) => {
            state.travelTimeInfoRmation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInfoRmation } =
    navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfoRmation = (state) =>
    state.nav.travelTimeInfoRmation;

export default navSlice.reducer;
