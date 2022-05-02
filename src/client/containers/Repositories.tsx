import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "@/selectors";
import { getUserPublicRepos } from "@/slices/repos";
import Repository from "@/components/Repository";

export const Repositories: React.FC<any> = ({ ...props }) => {
  const { repos } = useSelector(getRepos);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch<any>();
  const filteredRepos = useMemo(
    () =>
      repos.filter((repo) =>
        repo.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, repos]
  );

  const _getRepos = () => dispatch(getUserPublicRepos());
  useEffect(() => {
    _getRepos();
  }, []);
  let allRepos = filteredRepos.map((repo: any) => (
    <Repository key={repo.id} data={repo} />
  ));
  const searchPublicRepos = (e: any) => {
    setFilter(e);
  };
  return (
    <>
      <div className="border-bottom color-border-muted py-3">
        <div className="d-flex flex-items-start">
          <form className="width-full" role="search">
            <div className="d-flex flex-column flex-lg-row flex-auto">
              <div className="mb-1 mb-md-0 mr-md-3 flex-auto">
                <input type="hidden" name="tab" defaultValue="repositories" />
                <input
                  type="search"
                  id="your-repos-filter"
                  name="searchRepos"
                  className="form__control width-full"
                  placeholder="Find a repository…"
                  autoComplete="off"
                  aria-label="Find a repository…"
                  onChange={(e: any) => {
                    searchPublicRepos(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-wrap">
                <button
                  type="button"
                  className="button mt-1 mt-lg-0 ml-1 relative">
                  Type
                  <span className="dropdown__caret" />
                </button>
                <button
                  type="button"
                  className="button mt-1 mt-lg-0 ml-1 relative">
                  Language
                  <span className="dropdown__caret" />
                </button>
                <button
                  type="button"
                  className="button mt-1 mt-lg-0 ml-1 relative">
                  Sort
                  <span className="dropdown__caret" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="user-repositories-list">
        <ul>{allRepos}</ul>
        {/* <div className="paginate-container">
          <div className="button-group">
            <button
              className="button button-outline button-group__item"
              disabled>
              Previous
            </button>
            <a className="button button-outline button-group__item">Next</a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Repositories;
