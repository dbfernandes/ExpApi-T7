import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

import getEnv from "./utils/validateEnv.js";
import router from "./router/index.js";
import setCookieLang from "./middleware/setCookieLang.js";

const app = express();
const env = getEnv();
const PORT = env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(setCookieLang);
app.use(
  session({
    genid: () => uuidv4(),
    name: "sid",
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 2 * 60 * 60 * 1000,
      httpOnly: true,
      secure: !!(process.env.NODE_ENV === "production"),
      // s%3A404ccdba-beb6-44a4-90ab-48e62221fd42.KCcSGt5FKzA8c5wSd8l72h%2BRWbnXVF6jRQMu2Js%2By9g
    },
  }),
);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
