import { DataSource } from "typeorm";
import databaseConfig from "./database.config";

const appDataSource = new DataSource(databaseConfig);

export default appDataSource;
