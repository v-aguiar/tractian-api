import { Router } from "express";

import { validateBody, validateParams } from "@/middlewares";
import { createUnitSchema, unitNameParamSchema } from "@/schemas";
import { createUnit, getUnitByName } from "@/controllers";

export const unitRouter = Router();

unitRouter
  .post("/", validateBody(createUnitSchema), createUnit)
  .get("/:name", validateParams(unitNameParamSchema), getUnitByName);
