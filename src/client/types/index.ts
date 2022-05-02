export interface GithubUser {
  [anyProp: string]: any;
}

//==============================================================================
// State
//==============================================================================

export interface AuthState {
  loading: boolean;
  currentUser: GithubUser;
  isAuthenticated: boolean;
  error?: string;
}
export interface RepoState {
  loading: boolean;
  repos: any[];
  error?: string;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
}

export interface RootState {
  authState: AuthState;
  reposState: RepoState;
}
