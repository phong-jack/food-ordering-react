import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
