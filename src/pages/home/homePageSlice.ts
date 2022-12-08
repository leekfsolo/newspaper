import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import newsApi from "api/newsApi";
import { INewspaper } from "pages/interface";

const initialState: { newsData: INewspaper[] } = {
  newsData: [],
};

export const getNews = createAsyncThunk("home/news", async () => {
  const res = await newsApi.getNews();
  return res;
});

const home = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      state.newsData = action.payload.data;
    });
  },
});

const { reducer } = home;
export default reducer;
