import React, { useEffect, useRef, useState } from "react";
import { getAuth } from "@/selectors";
import { useSelector } from "react-redux";

export interface TabPanelProps {
  type?: string;
  children?: any;
}

export const TabPanel: React.FC<TabPanelProps> = ({ ...props }) => {
  const stickyBar = useRef<HTMLDivElement>(null);
  const { type } = props;
  const { currentUser } = useSelector(getAuth);

  function toggleStickyBar() {
    if (window.pageYOffset > 374) {
      if (stickyBar?.current?.style.opacity !== undefined) {
        stickyBar.current.style.opacity = "1";
      }
    } else {
      if (stickyBar?.current?.style.opacity !== undefined) {
        stickyBar.current.style.opacity = "0";
      }
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", toggleStickyBar);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", toggleStickyBar);
    };
  }, []);
  return (
    <>
      {type === "md" && (
        <div
          className="mt-4 sticky z-3 t-0 pt-2 top-0 d-none d-md-block color-bg-default width-full border-bottom color-border-muted"
          style={{
            top: 0,
          }}>
          <div className="container-xl px-3 px-md-4 px-lg-5">
            <div className="Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start">
              <div className="Layout-sidebar">
                <div className="user-profile__sticky-bar" ref={stickyBar}>
                  <div className="user-profile__mini-vcard d-table">
                    <span className="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
                      <img
                        className="rounded-2 avatar-user"
                        src={currentUser.avatar_url}
                        width={32}
                        height={32}
                        alt={"@" + currentUser.login}
                      />
                    </span>
                    <span className="d-table-cell v-align-middle lh-condensed">
                      <strong>{currentUser.login}</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="Layout-main">
                <div className="nav-secondary width-full box-shadow-none overflow-md-x-hidden">
                  <nav
                    className="nav-secondary__body width-full p-responsive"
                    aria-label="User profile">
                    <a
                      className="nav-secondary__item "
                      href={"/" + currentUser.login}>
                      <svg
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        className="octicon octicon-book nav-secondary__octicon hide-sm">
                        <path
                          fillRule="evenodd"
                          d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                      </svg>
                      Overview
                    </a>
                    <a
                      aria-current="page"
                      className="nav-secondary__item nav-secondary__item--active"
                      href={"/" + currentUser.login + "?tab=repositories"}>
                      <svg
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        className="octicon octicon-repo nav-secondary__octicon hide-sm">
                        <path
                          fillRule="evenodd"
                          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                      </svg>
                      Repositories
                      <span className="nav-secondary__counter">
                        {currentUser.public_repos}
                      </span>
                    </a>
                    <a
                      className="nav-secondary__item "
                      href={
                        "/" + currentUser.login + "?tab=projects&type=beta"
                      }>
                      <svg
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        className="octicon octicon-table nav-secondary__octicon hide-sm">
                        <path
                          fillRule="evenodd"
                          d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                      </svg>
                      Projects
                      {/* <span
                        className="nav-secondary__counter">
                        0
                      </span> */}
                    </a>
                    <a className="nav-secondary__item ">
                      <svg
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        className="octicon octicon-package nav-secondary__octicon hide-sm">
                        <path
                          fillRule="evenodd"
                          d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
                      </svg>
                      Packages
                      {/* <span
                        className="nav-secondary__counter">
                        0
                      </span> */}
                    </a>
                    <a className="nav-secondary__item ">
                      <svg
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        className="octicon octicon-star nav-secondary__octicon hide-sm">
                        <path
                          fillRule="evenodd"
                          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                      </svg>
                      Stars
                      {/* <span
                        className="nav-secondary__counter">
                        0
                      </span> */}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {type !== "md" && (
        <div
          className="nav-secondary d-block d-md-none position-sticky top-0 pl-3 ml-n3 mr-n3 pr-3 color-bg-default"
          style={{ zIndex: 3 }}>
          <nav className="nav-secondary__body" aria-label="User profile">
            <a className="nav-secondary__item " href="#">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-book nav-secondary__octicon hide-sm">
                <path
                  fillRule="evenodd"
                  d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
              </svg>
              Overview
            </a>
            <a
              aria-current="page"
              className="nav-secondary__item nav-secondary__item--active"
              href="#">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-repo nav-secondary__octicon hide-sm">
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
              </svg>
              Repositories
              <span className="nav-secondary__counter">
                {currentUser.public_repos}
              </span>
            </a>
            <a className="nav-secondary__item " href="#">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-table nav-secondary__octicon hide-sm">
                <path
                  fillRule="evenodd"
                  d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
              </svg>
              Projects
              {/* <span className="nav-secondary__counter">0</span> */}
            </a>
            <a className="nav-secondary__item " href="#">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-package nav-secondary__octicon hide-sm">
                <path
                  fillRule="evenodd"
                  d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
              </svg>
              Packages
              {/* <span className="nav-secondary__counter">0</span> */}
            </a>
            <a className="nav-secondary__item " href="#">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-star nav-secondary__octicon hide-sm">
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              Stars
              {/* <span className="nav-secondary__counter">0</span> */}
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default TabPanel;
