import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  makerdata: {
    title: "",
    tabledata: [],
  },
};

export const MakerandCheckerSlice = createSlice({
  name: "makerandchecker`",
  initialState,
  reducers: {
    makeSaveData: (state, { payload }) => {
      if (payload?.title) {
        state.makerdata.title = payload;
      } else {
        console.log(payload);
        state.makerdata.tabledata = payload;
      }
    },
  },
});

export const { makeSaveData } = MakerandCheckerSlice.actions;

export default MakerandCheckerSlice.reducer;
