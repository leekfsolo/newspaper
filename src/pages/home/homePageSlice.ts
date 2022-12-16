import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import newsApi from "api/newsApi";
import { INewspaper, IPagination } from "pages/interface";

const initialState: { newsData: INewspaper[] } = {
  newsData: [],
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
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      const { collection } = action.payload.data;
      // const sortedDataByDate = data.sort((a: INewspaper, b: INewspaper) => {
      //   return (
      //     new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      //   );
      // });
      state.newsData = [...state.newsData, ...collection];
    });
  },
});

const { reducer, actions } = home;
export const { handleResetNews } = actions;
export default reducer;
