import express from "express";

import routes from "./routes.js";
import connectDatabase from "./database/db.js";

const app = express();

app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(3000), console.log("Server is running");
  })
  .catch((err) => console.log(err));
