import { type RequestHandler } from "express";
import { logger } from "../../utils/tools";

/**
 * 获取 Scenario 列表
 *
 * - GET api/scenario/list
 */
export const getScenarioList: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const url = `${process.env.API_SERVER_SCENARIO as string}/api/list`;

    const re = await fetch(url);
    const data = await re.json();

    res.json(data);
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};

/**
 * 获取指定 id 对应的
 *
 * - GET api/scenario/:id
 */
export const getScenarioById: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const { id = "" } = req.params;
    const url = `${process.env.API_SERVER_SCENARIO as string}/api/${id}`;
    const re = await fetch(url);
    const data = await re.json();

    res.json(data);
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};

/**
 * 删除指定 id 对应的
 *
 * - DELETE api/scenario/:id
 */
export const deleteScenarioById: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const { id = "" } = req.params;
    const url = `${process.env.API_SERVER_SCENARIO as string}/api/${id}`;
    const re = await fetch(url, { method: "delete" });
    const data = await re.json();

    res.json(data);
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};

/**
 * 更新指定 id 对应的
 *
 * - PATCH api/scenario/:id
 */
export const updateScenarioById: RequestHandler = async (req, res) => {
  logger(req, res);

  try {
    const { id = "" } = req.params;
    const url = `${process.env.API_SERVER_SCENARIO as string}/api/${id}`;
    const re = await fetch(url, { method: "patch" });
    const data = await re.json();

    res.json(data);
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};
