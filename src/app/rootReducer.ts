import { combineReducers } from "redux";
import orderSlice from "./slices/orderSlice";

const rootReducer = combineReducers({
    order: orderSlice,
})

export default rootReducer;