import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewear = [thunk];

const createStoreWithMiddlewear = applyMiddleware(...middlewear)(createStore);
export default createStoreWithMiddlewear(rootReducer);
