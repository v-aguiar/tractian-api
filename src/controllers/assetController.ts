import { Request, Response } from "express";
import httpStatus from "http-status";

import type { RequestWithAlias } from "@/middlewares";
import type { CreateAssetsParams } from "@/repositories";
import type { UpdateAssetParams } from "@/schemas";
import { assetService } from "@/services";

export const createAssets = async (req: Request, res: Response) => {
  const data: CreateAssetsParams[] = req.body;
  await assetService.create(data);

  res.status(httpStatus.CREATED).send("✔ Assets created!");
};

export const getByAlias = async (req: RequestWithAlias, res: Response) => {
  const { alias } = req;
  const asset = await assetService.getByAlias(alias);

  res.status(httpStatus.OK).send(asset);
};

export const getAssetsByUnitId = async (req: Request, res: Response) => {
  const { unitId } = req.params;
  const assets = await assetService.getAssetsByUnitId(unitId);

  res.status(httpStatus.OK).send(assets);
};

export const updateAsset = async (req: RequestWithAlias, res: Response) => {
  const { alias } = req;
  const data: UpdateAssetParams = req.body;
  await assetService.update({ alias, ...data });

  res.status(httpStatus.OK).send("✔ Asset updated!");
};

export const deleteAsset = async (req: RequestWithAlias, res: Response) => {
  const { alias } = req;
  await assetService.delete(alias);

  res.status(httpStatus.OK).send("✔ Asset deleted!");
};
