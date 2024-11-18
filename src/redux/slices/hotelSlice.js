import { createSlice, createAction } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: [],
  reducers: {
    setHotelList: (_, action) => action.payload,
  },
});

export const { setHotelList } = hotelSlice.actions;

export const fetchHotelList = createAction("FETCH_HOTEL_LIST");

export default hotelSlice.reducer;
