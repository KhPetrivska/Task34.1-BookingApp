import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
//import rootReducer from "./reducers";
//import rootSaga from "./sagas";
//import logger from "redux-logger"
import { DestinationListSaga } from "./sagas/destinationSaga";
import destinationSlice from "./slices/destinationSlice";

import { hotelListSaga } from "./sagas/hotelSaga";
import hotelSlice from "./slices/hotelSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    destination: destinationSlice,
    hotel: hotelSlice,
  },
  preloadedState: {
    destination: [],
    hotel: [],
    //isLoading: false
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(DestinationListSaga);
sagaMiddleware.run(hotelListSaga);

export default store;