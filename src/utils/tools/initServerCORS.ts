import cors from "cors";
import { type Express } from "express";

/**
 * @description 利用 cors 设置 CORS
 */
export default function initServerCORS(app: Express, allowedOrigins: string[]) {
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    }),
  );
}
