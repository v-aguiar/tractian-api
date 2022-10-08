import { Router } from "express";

import { createCompany, getCompanyByCnpj, getAllCompanies } from "@/controllers";
import { validateBody, validateParams } from "@/middlewares";
import { cnpjParamSchema, createCompanySchema } from "@/schemas";

export const companyRouter = Router();

companyRouter
  .post("/", validateBody(createCompanySchema), createCompany)
  .get("/", getAllCompanies)
  .get("/:cnpj", validateParams(cnpjParamSchema), getCompanyByCnpj);
