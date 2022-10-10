import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { connectDb, disconnectDB } from "@/config";
import { handleApplicationErrors } from "@/middlewares";
import { assetRouter, companyRouter, unitRouter, userRouter } from "@/routers";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/companies", companyRouter)
  .use("/users", userRouter)
  .use("/units", unitRouter)
  .use("/assets", assetRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
