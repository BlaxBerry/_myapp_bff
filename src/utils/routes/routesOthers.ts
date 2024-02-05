import { type Express } from "express";
import {
  getOthersGithubRepoLanguages,
  getOthersGithubRepos,
  getOthersGithubUser,
} from "../../handlers/others";

/**
 * @description 设置路由组 Others
 * @param app Express.js 实例
 *
 * - GET  api/others/github/repos
 * - GET  api/others/github/repos?name=[repoName]
 * - GET  api/others/github/user
 * - GET  api/others/github/:repo/languages
 */
export default function setupRoutesOthers(
  app: Express,
  path: string = "/api/others",
) {
  app.get(`${path}/github/user`, getOthersGithubUser);
  app.get(`${path}/github/repos`, getOthersGithubRepos);
  app.get(`${path}/github/:repo/languages`, getOthersGithubRepoLanguages);
}
