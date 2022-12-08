import { RootState } from "./store";

export const homeSelector = (state: RootState) => state.home;

export const globalSelector = (state: RootState) => state.global;

export const headerSelector = (state: RootState) => state.header;

export const newsDetailSelector = (state: RootState) => state.newsDetail;
