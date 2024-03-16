import express from "express";

import { initEnvVariables, initRoutes, initServerCORS } from "./utils/tools";

const app = express();

initServerCORS(app, [
  "http://localhost:3000",
  "https://myapp-admin.onrender.com",
  "https://myapp-admin.vercel.app",
]);

initEnvVariables();
const serverPort = process.env.BFF_SERVER_PORT;
const serverURL = process.env.BFF_SERVER_URL;

initRoutes(app);

app.listen(serverPort, () => {
  // TODO:
  /* eslint-disable-next-line no-console */
  console.log(`BFF Server running at: ${serverURL}`);
});
