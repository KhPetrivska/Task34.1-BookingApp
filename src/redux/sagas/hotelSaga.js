import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { setHotelList, fetchHotelList } from "../slices/hotelSlice";

function* hotelHandler() {
  try {
    const hotelList = yield call(async () => {
        const resp = await axios.get("https://bookingapp.free.beeceptor.com/hotels");
     //const resp = await axios.get("https://bookapp.free.beeceptor.com/hotels"); //temporary

      return resp.data;
    });
    yield put(setHotelList(hotelList));
  } catch (err) {
    console.error("Error fetching destination list:", err);
  }
}

export function* hotelListSaga() {
  yield takeLatest(fetchHotelList, hotelHandler);
}
