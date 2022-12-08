import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import newsApi from "api/newsApi";
import { INewspaper } from "pages/interface";

const initialState: { newsDetail?: INewspaper } = {};

export const getNewsDetail = createAsyncThunk(
  "news/detail",
  async (id: string) => {
    const res = await newsApi.getNewsDetail(id);
    return res;
  }
);

const news = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNewsDetail.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.newsDetail = action.payload.data;
      }
    );
  },
});

const { reducer } = news;
export default reducer;
