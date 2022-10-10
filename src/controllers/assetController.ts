import { Request, Response } from "express";
import httpStatus from "http-status";

import type { CreateAssetsParams } from "@/repositories";
import { assetService } from "@/services";

export const createAssets = async (req: Request, res: Response) => {
  const data: CreateAssetsParams[] = req.body;
  await assetService.create(data);

  res.status(httpStatus.CREATED).send("✔ Assets created!");
};
