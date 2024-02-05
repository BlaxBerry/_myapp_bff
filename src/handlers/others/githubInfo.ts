import { type RequestHandler } from "express";
import { logger } from "../../utils/tools";

/**
 * 获取个人 Github 账号的信息
 *
 * - GET  api/others/github/user
 */
export const getOthersGithubUser: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const url = "https://api.github.com/users/BlaxBerry";
    const re = await fetch(url);
    const data = await re.json();

    res.json({
      code: 200,
      error: null,
      data,
    });
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};

/**
 * 获取个人 Github 仓库的信息
 *
 * - GET  api/others/github/repos
 * - GET  api/others/github/repos?name=[repoName]
 */
export const getOthersGithubRepos: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const { name = "" } = req.query;
    const url = name
      ? `https://api.github.com/repos/BlaxBerry/${name}`
      : `https://api.github.com/users/BlaxBerry/repos`;
    const re = await fetch(url);
    const data = await re.json();

    res.json({
      code: 200,
      error: null,
      data,
    });
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};

/**
 * 获取个人 Github 指定仓库使用的所有语言
 *
 * - GET  api/others/github/:repo/languages
 */
export const getOthersGithubRepoLanguages: RequestHandler = async (
  req,
  res,
) => {
  logger(req, res);

  try {
    const { repo = "" } = req.params;
    const url = `https://api.github.com/repos/BlaxBerry/${repo}/languages`;
    const re = await fetch(url);
    const data = await re.json();

    res.json({
      code: 200,
      error: null,
      data,
    });
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};
