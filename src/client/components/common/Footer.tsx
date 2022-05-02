import React, { FC } from "react";
import { Github } from "@/components/icons";

const Footer: FC<any> = () => {
  return (
    <footer className="footer">
      <div className="footer__sub-container">
        <ul className="footer__ul  d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
          <li className="footer__li mt-2 mt-lg-0 d-flex flex-items-center">
            <a
              aria-label="GitHub"
              title="GitHub"
              className="footer__octicon"
              href="https://github.com">
              <Github fill={"#6e7781"} />
            </a>{" "}
            <span>© 2022 GitHub, Inc.</span>
          </li>
        </ul>
        <ul className="footer__ul  d-flex flex-wrap col-12 col-lg-8 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Terms</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Privacy</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Security</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Status</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Docs</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Contact GitHub</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Pricing</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">API</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Training</a>
          </li>
          <li className="footer__li mr-3 mr-lg-0">
            <a href="#">Blog</a>
          </li>
          <li className="footer__li">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
