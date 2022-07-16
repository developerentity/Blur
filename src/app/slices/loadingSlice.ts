import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  mainLoading: boolean;
}

const initialState: IInitialState = {
  mainLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.mainLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
