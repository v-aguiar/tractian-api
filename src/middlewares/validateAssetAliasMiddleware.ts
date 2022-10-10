import { NextFunction, Request, Response } from "express";

import { notFoundError, unprocessableEntityError } from "@/errors";
import { assetAliasHeaderSchema } from "@/schemas";

export type RequestWithAlias = Request & { alias: string };

export const validateAssetAlias = (req: RequestWithAlias, _res: Response, next: NextFunction) => {
  const alias = req.headers["asset-alias"];
  if (!alias) throw notFoundError("⚠ Alias must be passed through headers, alias not found!");

  const { error } = assetAliasHeaderSchema.validate({ alias }, { abortEarly: false });
  if (error) throw unprocessableEntityError(error.details.map((detail) => detail.message));

  req.alias = alias.toString();
  next();
};
