import { Router } from "express";

import { validateBody, validateParams, validateCompanyId } from "@/middlewares";
import { createUnitSchema, unitNameParamSchema } from "@/schemas";
import { createUnit, getUnitByName, getUnitsByCompanyId } from "@/controllers";

export const unitRouter = Router();

unitRouter
  .post("/", validateBody(createUnitSchema), createUnit)
  .get("/company", validateCompanyId, getUnitsByCompanyId)
  .get("/:name", validateParams(unitNameParamSchema), getUnitByName);
