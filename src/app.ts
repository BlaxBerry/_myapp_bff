import express from "express";

import { initEnvVariables, initRoutes, initServerCORS } from "./utils/tools";

const app = express();

initServerCORS(app, [
  "https://myapp-admin.onrender.com",
  "http://localhost:3000",
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
