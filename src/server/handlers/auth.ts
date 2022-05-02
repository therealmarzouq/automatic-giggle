import { Request, Response } from "express";
import axios from "axios";
import * as dotenv from "dotenv";

import { thirtyDayCookie } from "../utils/constants";
import { SDK } from "../utils/helpers";
import { Method } from "../utils/enums";

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

export default {
  callback: async (request: Request, response: Response) => {
    const { code } = request.query;

    try {
      // Obtain access token
      const { data } = await axios({
        method: "post",
        url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
        headers: {
          accept: "application/json",
        },
      });

      const accessToken = data.access_token;

      // Set cookie
      response.cookie("githubAccessToken", accessToken, thirtyDayCookie);

      // Redirect to the app when logged in
      response.redirect("/app");
    } catch (error) {
      console.log(error); // eslint-disable-line
      // Redirect to the main page if something went wrong
      response.redirect("/");
    }
  },

  login: async (request: Request, response: Response) => {
    const { accessToken } = response.locals;

    try {
      const { data } = await SDK(Method.GET, "/user", accessToken);
      const username = data.login;

      response.status(200).send(data);
    } catch (error: any) {
      response.status(400).send({ message: error.message });
    }
  },

  logout: async (request: Request, response: Response) => {
    response.clearCookie("githubAccessToken");

    response.status(200).send({ message: "Logged out" });
  },
};
