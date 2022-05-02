import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "@/selectors";

const Header: React.FC = () => {
  const { currentUser } = useSelector(getAuth);
  return (
    <div className="relative">
      <header className="header  px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap">
        <div className="header__item mt-n1 mb-n1  d-none d-md-flex">
          <a
            className="header__link"
            href="https://github.com/"
            aria-label="Homepage ">
            <svg
              height={32}
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width={32}
              fill="currentColor"
              className="octicon octicon-mark-github v-align-middle">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
        <div className="header__item d-md-none">
          <button
            aria-label="Toggle navigation"
            aria-expanded="false"
            type="button"
            className="header__link button--link">
            <svg
              aria-hidden="true"
              height={24}
              viewBox="0 0 16 16"
              version="1.1"
              width={24}
              fill="currentColor"
              className="octicon octicon-three-bars">
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
            </svg>
          </button>
        </div>
        <div className="header__item header__item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0  d-md-flex">
          <div className="header__search flex-auto relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search">
            <div className="relative">
              <form className="" role="search">
                <label className="form__control input-sm header__search-wrapper p-0 header-search-wrapper-jump-to relative d-flex flex-justify-between flex-items-center">
                  <input
                    type="text"
                    className="form__control input-sm header__search-input jump-to-field is-clearable"
                    name="search"
                    placeholder="Search or jump to…"
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <input type="hidden" className="" />
                  <input type="hidden" className="" name="type" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={20}
                    aria-hidden="true"
                    className="mr-1 header__search-key-slash">
                    <path
                      fill="none"
                      stroke="#979A9C"
                      opacity=".4"
                      d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
                    <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z" />
                  </svg>
                </label>
              </form>
            </div>
          </div>
          <nav id="global-nav" className="nav__global" aria-label="Global">
            <a
              className=" header__link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Pull
              <span className="d-inline d-md-none d-lg-inline"> request</span>s
            </a>
            <a
              className=" header__link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Issues
            </a>
            <div className="d-flex relative">
              <a
                className=" header__link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
                href="#">
                Marketplace
              </a>
            </div>
            <a
              className=" header__link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Explore
            </a>
            <a
              className=" header__link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Codespaces
            </a>
            <a
              className=" header__link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Sponsors
            </a>
            <a
              className="header__link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              Settings
            </a>
            <a
              className="header__link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
              href="#">
              <img
                className="avatar avatar-user"
                loading="lazy"
                decoding="async"
                src={currentUser.avatar_url}
                width={20}
                height={20}
                alt={"@" + currentUser.login}
              />
              {currentUser.login}
            </a>
            <form
              action=""
              method="post"
              className="d-block d-md-none mr-0 mr-md-3">
              <input type="hidden" name="" />
              <button
                type="submit"
                className="header__link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade d-md-none button--link d-block width-full text-left"
                style={{ paddingLeft: 2 }}>
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  fill="currentColor"
                  className="octicon octicon-sign-out v-align-middle">
                  <path
                    fillRule="evenodd"
                    d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path>
                </svg>
                Sign out
              </button>
            </form>
          </nav>
        </div>
        <div className="header__item header__item--full flex-justify-center d-md-none relative">
          <a className="header__link " href="https://github.com/">
            <svg
              height={32}
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width={32}
              fill="currentColor"
              className="octicon octicon-mark-github v-align-middle">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
        <div className="header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
          <a
            href="#"
            className="header__link notification-indicator relative tooltipped tooltipped-sw">
            <span className="notification notification--unread" />
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              fill="#fff"
              className="octicon octicon-bell">
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z" />
              <path
                fillRule="evenodd"
                d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
              />
            </svg>
          </a>
        </div>

        <div className="header__item relative d-none d-md-flex">
          <div className="d-block">
            <a className="header__link" aria-label="Create new…">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                fill="#fff"
                className="octicon octicon-plus">
                <path
                  fillRule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
              </svg>{" "}
              <span className="dropdown__caret mb-3" />
            </a>
          </div>
        </div>
        <div className="header__item relative mr-0 d-none d-md-flex">
          <a
            className="header__link relative"
            aria-label="View profile and more">
            <img
              src={currentUser.avatar_url}
              alt={"@" + currentUser.login}
              height={20}
              width={20}
              className="avatar avatar--small avatar--circle"
            />
            <span className="feature-preview-indicator"></span>
            <span className="dropdown__caret ml-1" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
