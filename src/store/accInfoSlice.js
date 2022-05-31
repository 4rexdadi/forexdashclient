import { createSlice } from "@reduxjs/toolkit";
// Slice

const accInfoSlice = createSlice({
	name: "accInfo",
	initialState: {
		accInfoSlice: {
			getSession: null,
			accNumber: 0,
			accDataHistory: null,
			accDataDaily: null,
			accDataInfo: null,
		},
	},
	reducers: {
		setSession: (state, action) => {
			state.accInfoSlice.getSession = action.payload;
		},
		setAccNumber: (state, action) => {
			state.accInfoSlice.accNumber = action.payload;
		},
		setAccDataHistory: (state, action) => {
			state.accInfoSlice.accDataHistory = action.payload;
		},
		setAccDataDaily: (state, action) => {
			state.accInfoSlice.accDataDaily = action.payload;
		},
		setAccDataInfo: (state, action) => {
			state.accInfoSlice.accDataInfo = action.payload;
		},
	},
});

export const {
	setSession,
	setAccNumber,
	setAccDataHistory,
	setAccDataDaily,
	setAccDataInfo,
} = accInfoSlice.actions;
export default accInfoSlice.reducer;
