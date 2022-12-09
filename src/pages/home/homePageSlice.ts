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
      const { data } = action.payload;
      const sortedDataByDate = data.sort((a: INewspaper, b: INewspaper) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      state.newsData = sortedDataByDate;
    });
  },
});

const { reducer } = home;
export default reducer;
