import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { enqueueSnackbar } from "./notifierSlice";

interface IInitialState {
  messages: Array<string>,
}

const initialState: IInitialState = {
  messages: [],
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors(state, action) {
      state.messages = action.payload;
    },
  },
});

export const setRequestError =
  (err: any) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (err.data) {
      const message = Object.values(err.data).join("\n");
      dispatch(
        enqueueSnackbar({
          message,
          options: { variant: "error" },
        })
      );
    }
    const { errors } = getState();
    dispatch(errorsSlice.actions.setErrors([...errors.messages, err]));
  };

export default errorsSlice.reducer;
