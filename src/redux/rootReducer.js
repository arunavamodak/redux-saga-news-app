import { combineReducers } from "redux";
import newsReducer from "./reducer";

const rootReducer = combineReducers({
    data: newsReducer
});

export default rootReducer;