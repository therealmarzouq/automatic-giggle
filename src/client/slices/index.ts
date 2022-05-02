import { combineReducers, Reducer } from "redux";

import authReducer from "@/slices/auth";
import reposReducer from "@/slices/repos";
import { RootState } from "@/types";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
  reposState: reposReducer,
});

export default rootReducer;
