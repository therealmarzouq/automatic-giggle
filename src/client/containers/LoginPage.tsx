import React from "react";

import { Github } from "@/components/icons";
const clientId = process.env.CLIENT_ID;
const path = "/app";

const loginButton = (text: string) => (
  <a
    className="button button--primary m-auto d-flex flex-items-center"
    href={`https://github.com/login/oauth/authorize?client_id=${clientId}&path=${path}&scope=user:public_repo%20read:user`}>
    <Github className="mr-2" fill="#ffffff" />
    {text}
  </a>
);

export const LoginPage: React.FC = () => {
  return <div className="link__auth">{loginButton("Sign In with GitHub")}</div>;
};
