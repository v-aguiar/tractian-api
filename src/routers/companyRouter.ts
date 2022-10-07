import { Router } from "express";

import { createCompany, getCompanyByCnpj, getAllCompanies } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createCompanySchema } from "@/schemas";

export const companyRouter = Router();

companyRouter
  .post("/", validateBody(createCompanySchema), createCompany)
  .get("/", getAllCompanies)
  .get("/:cnpj", getCompanyByCnpj);
