import { DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
import { join } from "path";

dotenv.config();

const databaseConfig: DataSourceOptions ={
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
}

export default databaseConfig;
