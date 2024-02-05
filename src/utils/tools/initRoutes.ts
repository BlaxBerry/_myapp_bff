import { type Express } from "express";
import { setupRoutesOthers, setupRoutesScenario } from "../routes";

/**
 * @description 初始化路由组
 * - api/scenario/.../...
 * - api/others/.../...
 */
export default function initRoutes(app: Express) {
  setupRoutesScenario(app);
  setupRoutesOthers(app);
}
