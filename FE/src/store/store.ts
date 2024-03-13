import { createStore, combineReducers } from "redux";
import usersReducer from "./reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
