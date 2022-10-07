import { Request, Response } from "express";
import httpStatus from "http-status";

import type { CreateCompanyParams } from "@/repositories";
import { companyService } from "@/services";

export const createCompany = async (req: Request, res: Response) => {
  const data: CreateCompanyParams = req.body;
  await companyService.create(data);

  res.status(httpStatus.CREATED).send("✔ Company created!");
};

export const getCompanyByCnpj = async (req: Request, res: Response) => {
  const { cnpj } = req.params;
  const company = await companyService.getByCNPJ(cnpj);

  res.status(httpStatus.OK).send(company);
};

export const getAllCompanies = async (_req: Request, res: Response) => {
  const companies = await companyService.getAll();

  res.status(httpStatus.OK).send(companies);
};
