import express from "express";
import getEnv from "./utils/validateEnv.js";
import router from "./router/index.js";

const app = express();
const env = getEnv();
const PORT = env.PORT;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
