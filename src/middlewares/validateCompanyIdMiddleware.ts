import { NextFunction, Request, Response } from "express";

import { notFoundError, unprocessableEntityError } from "@/errors";
import { companyIdHeaderSchema } from "@/schemas";

export const validateCompanyId = (req: ValidatedRequest, res: Response, next: NextFunction) => {
  const companyId = req.headers["company-id"];
  if (!companyId) throw notFoundError("⚠ Company ID not found!");

  const { error } = companyIdHeaderSchema.validate({ companyId }, { abortEarly: false });
  if (error) throw unprocessableEntityError(error.details.map((detail) => detail.message));

  req.companyId = companyId.toString();
  next();
};

type CompanyId = { companyId: string };
export type ValidatedRequest = Request & CompanyId;
