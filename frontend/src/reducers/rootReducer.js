import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});
