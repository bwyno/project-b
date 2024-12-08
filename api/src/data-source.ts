import dotenv from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { Product } from "./entity/Product";

dotenv.config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_NAME || "test",
  entities: [Product]
});

export const productRepository = AppDataSource.getRepository(Product);
