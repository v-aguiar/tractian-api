import { Request, Response } from "express";
import httpStatus from "http-status";

import { companyRepository, CreateCompanyParams } from "@/repositories";

export const createCompany = async (req: Request, res: Response) => {
  const data: CreateCompanyParams = req.body;

  await companyRepository.create(data);

  res.status(httpStatus.CREATED).send("✔ Company created!");
};
