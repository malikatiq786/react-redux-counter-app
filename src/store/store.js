import { createStore, combineReducers, compose } from "redux";
import Count from "./reducer/count";
const rootReducer = combineReducers({
    c:Count
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer , composeEnhancers());
export default store;