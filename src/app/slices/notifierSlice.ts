import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotification } from "../../interface/interface";
import { generateUniqueKey } from "../../utils/key";
import { RootState } from "../store";

interface IInitialState {
  notifications: Array<INotification>;
}

const initialState: IInitialState = {
  notifications: [],
};

export const notifierSlice = createSlice({
  name: "notifier",
  initialState,
  reducers: {
    enqueueSnackbar: (state, action: PayloadAction<INotification>) => {
      state.notifications = [
        ...state.notifications,
        {
          ...action.payload,
          key: action.payload.key || generateUniqueKey(),
        },
      ];
    },
    closeSnackbar: (state, action: PayloadAction<{ key: number | string }>) => {
      state.notifications = state.notifications.map(
        (notification: INotification) =>
          !action.payload.key || notification.key === action.payload.key
            ? { ...notification, dismissed: true }
            : { ...notification }
      );
    },
    removeSnackbar: (
      state,
      action: PayloadAction<{ key: number | string }>
    ) => {
      state.notifications = state.notifications.filter(
        (notification: INotification) => notification.key !== action.payload.key
      );
    },
  },
});

export const { enqueueSnackbar, closeSnackbar, removeSnackbar } =
  notifierSlice.actions;

export const notifications = (state: RootState) => state.notifier.notifications;

export default notifierSlice.reducer;
