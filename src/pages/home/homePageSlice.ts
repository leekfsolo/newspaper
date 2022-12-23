import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import newsApi from "api/newsApi";
import { INewspaper, IPagination } from "pages/interface";

const initialState: {
  newsData: INewspaper[];
  currentPage: number;
  isMaxPage: boolean;
} = {
  newsData: [],
  currentPage: 1,
  isMaxPage: false,
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
    handlePage: (state, action) => {
      state.currentPage += action.payload;
    },
    handleMaxPage: (state) => {
      state.isMaxPage = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      const { collection } = action.payload.data;

      if (collection.length > 0) {
        state.newsData = [...state.newsData, ...collection];
      }
    });
  },
});

const { reducer, actions } = home;
export const { handleResetNews, handlePage, handleMaxPage } = actions;
export default reducer;
