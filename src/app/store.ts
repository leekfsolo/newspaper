import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "components/Header/headerSlice";
import globalReducer from "./globalSlice";

const rootReducer = {
  header: headerReducer,
  global: globalReducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
