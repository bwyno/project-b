import express, { Express } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { router } from "./routes";
dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.use("api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
