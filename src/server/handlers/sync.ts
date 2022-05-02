import { Request, Response } from "express";

import { SDK } from "../utils/helpers";
import { Method } from "../utils/enums";

export default {
  sync: async (request: Request, response: Response) => {
    const { accessToken, userData } = response.locals;
    const username = userData.login;

    try {
      const ref = await SDK(
        Method.GET,
        `/users/${username}/repos?per_page=20&page=1`,
        accessToken
      );

      response.status(200).send({ message: "Success" });
    } catch (error: any) {
      response.status(400).send({
        message: error.message || "Something went wrong",
      });
    }
  },

  getPublicRepos: async (request: Request, response: Response) => {
    const { accessToken, userData } = response.locals;
    const username = userData.login;
    try {
      const { data } = await SDK(
        Method.GET,
        `/users/${username}/repos?per_page=20&page=1`,
        accessToken
      );

      response.status(200).send(data);
    } catch (error: any) {
      response.status(400).send({
        message:
          error.message ||
          "Something went wrong while fetching your repos data",
      });
    }
  },
};
