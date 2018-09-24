import { combineReducers } from "redux";
import tracks from "./tracks";
import admin from "./admin";

export default combineReducers({
  tracks,
  admin
});
