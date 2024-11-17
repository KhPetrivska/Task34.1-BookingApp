import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { setDestinationList, fetchDestinationList } from "../slices/destinationSlice";

function* destinationHandler() {
    try {
        const destinationList = yield call(async () => {
            //const resp = await axios.get("https://bookingapp.free.beeceptor.com/destination");
            const resp = await axios.get("https://bookup.free.beeceptor.com/destination"); //temporary

            return resp.data;
        });
        yield put(setDestinationList(destinationList));
    } catch (err) {
        console.error("Error fetching destination list:", err);
    }
}

export function* DestinationListSaga() {
    yield takeLatest(fetchDestinationList, destinationHandler);
}
