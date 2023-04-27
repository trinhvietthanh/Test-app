import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "db-postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "inventory",
  entities: ["src/entity/*.js"],
  logging: true,
  synchronize: true,
});