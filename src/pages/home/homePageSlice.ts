import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import newsApi from "api/newsApi";
import { INewspaper, IPagination } from "pages/interface";

const initialState: { newsData: INewspaper[]; currentPage: number } = {
  newsData: [],
  currentPage: 0,
};

export const getNews = createAsyncThunk(
  "home/news",
  async (params: IPagination) => {
    const res = await newsApi.getNews(params);
    return res;
  }
);

const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    handleResetNews: (state) => {
      return initialState;
    },
    loadPages: (state) => {
      state.currentPage++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      const { collection } = action.payload.data;

      if (collection.length > 0) {
        state.currentPage++;
        state.newsData = [...state.newsData, ...collection];
      }
    });
  },
});

const { reducer, actions } = home;
export const { handleResetNews, loadPages } = actions;
export default reducer;
