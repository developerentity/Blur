import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IBlurOrder } from "../../interface/Blur";

// Define a type for the slice state
interface CounterState {
  orderList: Array<IBlurOrder>;
}

// Define the initial state using that type
const initialState: CounterState = {
  orderList: [],
};

export const counterSlice = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProduct: (state, action: PayloadAction<IBlurOrder>) => {
      state.orderList.some((item) => item.id === action.payload.id)
        ? (state.orderList = [
            ...state.orderList.map((item) => {
              if (item.id === action.payload.id) {
                return item.quantity
                  ? { ...item, quantity: (item.quantity += 1) }
                  : { ...item, quantity: 1 };
              } else {
                return item;
              }
            }),
          ])
        : (state.orderList = [
            ...state.orderList,
            { ...action.payload, quantity: 1 },
          ]);
    },
    removeProduct: (state, action: PayloadAction<number | string>) => {
      state.orderList = [
        ...state.orderList.filter((item) => item.id !== action.payload),
      ];
    },
    increaseItemQuantity: (state, action: PayloadAction<number | string>) => {
      state.orderList = [
        ...state.orderList.map((item) => {
          return item.id === action.payload
            ? { ...item, quantity: (item.quantity += 1) }
            : item;
        }),
      ];
    },
    decreaseItemQuantity: (state, action: PayloadAction<number | string>) => {
      state.orderList = [
        ...state.orderList.map((item) => {
          return item.id === action.payload
            ? { ...item, quantity: (item.quantity -= 1) }
            : item;
        }),
      ];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  decreaseItemQuantity,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order.orderList;

export default counterSlice.reducer;
