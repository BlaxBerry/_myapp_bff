import { type Express } from "express";
import {
  deleteScenarioById,
  getScenarioById,
  getScenarioList,
  updateScenarioById,
} from "../../handlers/scenarios";

/**
 * @description 设置路由组 Scenario
 * @param app Express.js 实例
 *
 * - GET  api/others/scenario/list
 * - GET  api/others/scenario/:id
 * - DELETE  api/others/scenario/:id
 * - PATCH  api/others/scenario/:id
 * - POST  api/others/scenario/register
 */
export default function setupRoutesScenario(
  app: Express,
  path: string = "/api/scenario",
) {
  app.get(`${path}/list`, getScenarioList);
  app.get(`${path}/:id`, getScenarioById);
  app.delete(`${path}/:id`, deleteScenarioById);
  app.patch(`${path}/:id`, updateScenarioById);
  // app.post(`${path}/register`);
}
