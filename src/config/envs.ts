import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  MONGO_DB_NAME: get("MONGO_DB_NAME").required().asString(),
  MONGO_URL_CONNECTION: get("MONGO_URL_CONNECTION").required().asString(),
  JWT_SECRET: get("JWT_SECRET").required().asString(),
};
