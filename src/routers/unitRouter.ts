import { Router } from "express";

import { validateBody } from "@/middlewares";
import { createUnitSchema } from "@/schemas";
import { createUnit } from "@/controllers";

export const unitRouter = Router();

unitRouter.post("/", validateBody(createUnitSchema), createUnit);
