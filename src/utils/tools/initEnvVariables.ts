import dotenv from "dotenv";
import path from "path";

/**
 * @description
 * 利用 dotenv 读取`webpack build`时指定的不同环境对应的`.env.[mode]`文件中的环境变量
 */
export default function initEnvVariables(): void {
  dotenv.config({
    path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
  });
}
