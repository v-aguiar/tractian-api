import { NextFunction, Request, Response } from "express";

export type RequestWithAlias = Request & { alias: string };

export const validateAssetAlias = (req: RequestWithAlias, _res: Response, next: NextFunction) => {
  const alias = req.headers["asset-alias"];
};
