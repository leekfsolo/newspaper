import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "components/Header/headerSlice";
import globalReducer from "./globalSlice";
import homeReducer from "pages/home/homePageSlice";
import newsDetailReducer from "pages/NewsDetail/newsDetailSlice";

const rootReducer = {
  header: headerReducer,
  global: globalReducer,
  home: homeReducer,
  newsDetail: newsDetailReducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
