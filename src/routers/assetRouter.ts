import { Router } from "express";

import { createAssets, getByAlias, updateAsset, deleteAsset, getAssetsByUnitId } from "@/controllers";
import { validateAssetAlias, validateBody, validateParams } from "@/middlewares";
import { createAssetsSchema, unitIdParamSchema, updateAssetSchema } from "@/schemas";

export const assetRouter = Router();

assetRouter
  .post("/", validateBody(createAssetsSchema), createAssets)
  .get("/", validateAssetAlias, getByAlias)
  .get("/:unitId", validateParams(unitIdParamSchema), getAssetsByUnitId)
  .put("/", validateAssetAlias, validateBody(updateAssetSchema), updateAsset)
  .delete("/", validateAssetAlias, deleteAsset);
