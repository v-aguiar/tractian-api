import { Router } from "express";

import { createCompany } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createCompanySchema } from "@/schemas";

export const companyRouter = Router();

companyRouter.post("/", validateBody(createCompanySchema), createCompany);

// TODO: refactor -> separate into controllers, services and repositories
