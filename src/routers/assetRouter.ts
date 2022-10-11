import { Router } from "express";

import { createAssets, getByAlias, updateAsset } from "@/controllers";
import { validateAssetAlias, validateBody } from "@/middlewares";
import { createAssetsSchema, updateAssetSchema } from "@/schemas";

export const assetRouter = Router();

assetRouter
  .post("/", validateBody(createAssetsSchema), createAssets)
  .get("/", validateAssetAlias, getByAlias)
  .put("/", validateAssetAlias, validateBody(updateAssetSchema), updateAsset);
