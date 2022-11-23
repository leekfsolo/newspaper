import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import categoryApi from "api/categoryApi";
import { ICategory } from "components/interface";

const initialState: { data: ICategory[] } = {
  data: [],
};

export const getCategories = createAsyncThunk("header/categories", async () => {
  const res = await categoryApi.getCategories();
  return res;
});

const header = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = action.payload.data;
      }
    );
  },
});

const { reducer } = header;
export default reducer;
