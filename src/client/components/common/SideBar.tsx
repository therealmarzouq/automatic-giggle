import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getAuth } from "@/selectors";

const SideBar: FC<any> = ({ ...props }) => {
  const { currentUser } = useSelector(getAuth);
  return (
    <div {...props}>
      <div className="h-card mt-md-n5">
        <div className="user-profile__sticky-bar d-none d-md-block">
          <div className="user-profile__mini-vcard d-table">
            <span className="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
              <img
                className="rounded-2 avatar-user"
                src={currentUser.avatar_url}
                width={32}
                height={32}
                alt={currentUser.login}
              />
            </span>
            <span className="d-table-cell v-align-middle lh-condensed">
              <strong>{currentUser.login ? currentUser.login : ""}</strong>
            </span>
          </div>
        </div>
        <div className="">
          <div className="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
            <div
              className="relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0"
              style={{ zIndex: 4 }}>
              <a className="d-block" href="https://github.com/account">
                <img
                  style={{ height: "auto" }}
                  alt=""
                  width={260}
                  height={260}
                  className="avatar avatar--user width-full border color-bg-default"
                  src={currentUser.avatar_url}
                />
              </a>
              <div className="user-status__container relative hide-sm hide-md">
                <div className="user-status__emoji-container flex-shrink-0 p-1 d-flex flex-items-center flex-justify-center ">
                  🎯
                </div>
              </div>
            </div>
            {/* Name & Profile */}
            <div className="vcard__names-container">
              <h1 className="vcard__names">
                <span className="vcard__full-name">{currentUser.name}</span>
                <span className="vcard__user-name">{currentUser.login}</span>
              </h1>
            </div>
          </div>
          <div className="mb-2 user-status__container d-md-none d-flex">
            <div className="user-status__emoji">🎯</div>
            <div className="user-status__description">Focusing</div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column d-md-block">
              <div className="user-profile__bio">
                <div>{currentUser.bio ? currentUser.bio : ""}</div>
              </div>
              <div className="mb-3">
                <button
                  name="button"
                  type="button"
                  className="button button--block">
                  Follow
                </button>
              </div>
              <div className="flex-order-1 flex-md-order-none mt-2 mt-md-0">
                <div className="mb-3">
                  <a
                    className="link--secondary  d-inline-flex align-item-center"
                    href={
                      "https://github.com/" +
                      currentUser.login +
                      "?tab=followers"
                    }>
                    <svg
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      className="octicon octicon-people">
                      <path
                        fillRule="evenodd"
                        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                    </svg>
                    <span className="text-bold px-1 color-fg-default">
                      {currentUser.followers}
                    </span>
                    followers
                  </a>{" "}
                  ·{" "}
                  <a
                    className="link--secondary"
                    href={
                      "https://github.com/" +
                      currentUser.login +
                      "?tab=following"
                    }>
                    <span className="text-bold px-1 color-fg-default">
                      {currentUser.following}
                    </span>
                    following
                  </a>
                </div>
              </div>
              <ul className="vcard__details">
                {currentUser.company && (
                  <li
                    className="vcard__detail  hide-sm hide-md"
                    aria-label={"Organization: " + currentUser.company}>
                    <svg
                      className="octicon octicon-organization"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      height={16}
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
                    </svg>
                    <span className="p-org">
                      <div>{currentUser.company}</div>
                    </span>
                  </li>
                )}
                {currentUser.location && (
                  <li
                    className="vcard__detail hide-sm hide-md"
                    aria-label={"Home location: " + currentUser.location}>
                    <svg
                      className="octicon octicon-location"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      height={16}
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    <span className="p-label">{currentUser.location}</span>
                  </li>
                )}
                {currentUser.blog && (
                  <li className="vcard__detail">
                    <svg
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      className="octicon octicon-link">
                      <path
                        fillRule="evenodd"
                        d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                    </svg>
                    <a className="vcard__link" href={currentUser.blog}>
                      {currentUser.blog}
                    </a>
                  </li>
                )}
                {currentUser.twitter_username && (
                  <li className="vcard__detail hide-sm hide-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 273.5 222.3"
                      role="img"
                      aria-labelledby="twitter"
                      className="octicon">
                      <title id="twitter">Twitter</title>
                      <path
                        d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                        fill="currentColor"
                      />
                    </svg>
                    <a
                      className="vcard__link"
                      href={
                        "https://twitter.com/" + currentUser.twitter_username
                      }>
                      @{currentUser.twitter_username}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
