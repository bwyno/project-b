import express, { Express } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { router } from "./routes";
import { AppDataSource } from "./data-source";
import morgan from "morgan";
import cors from "cors"
dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });