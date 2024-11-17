import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
//import rootReducer from "./reducers"; 
//import rootSaga from "./sagas";
//import logger from "redux-logger"
import  {DestinationListSaga} from "./sagas/destinationSaga"
import  destinationSlice from "./slices/destinationSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        destination: destinationSlice, 
    },
    preloadedState:{
        destination: [], 
       //isLoading: false
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({thunk: false}).concat(sagaMiddleware)
  });

  sagaMiddleware.run(DestinationListSaga);

  export default store;