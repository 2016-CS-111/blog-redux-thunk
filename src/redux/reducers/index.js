import { combineReducers } from "redux";
import authorsReducer from "./authorsReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
    // dummy: () => 'hi there',
    authors: authorsReducer,
    posts: postsReducer
});