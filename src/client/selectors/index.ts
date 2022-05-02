import { RootState } from "@/types";

export const getAuth = (state: RootState) => state.authState;
export const getRepos = (state: RootState) => state.reposState;
