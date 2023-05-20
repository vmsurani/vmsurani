import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";

import authReducer from "../Reducers/AuthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
