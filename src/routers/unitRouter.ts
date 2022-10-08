import { Router } from "express";

import { validateBody, validateParams, validateCompanyId } from "@/middlewares";
import { createUnitSchema, unitNameParamSchema } from "@/schemas";
import { createUnit, getUnitByName, getUnitsByCompanyId, deleteUnitByName } from "@/controllers";

export const unitRouter = Router();

unitRouter
  .post("/", validateBody(createUnitSchema), createUnit)
  .get("/company", validateCompanyId, getUnitsByCompanyId)
  .use("/:name", validateParams(unitNameParamSchema))
  .get("/:name", getUnitByName)
  .delete("/:name", deleteUnitByName);
