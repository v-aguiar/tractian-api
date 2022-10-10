import { Router } from "express";

import { createAssets, getByAlias } from "@/controllers";
import { validateAssetAlias, validateBody } from "@/middlewares";
import { createAssetsSchema } from "@/schemas";

export const assetRouter = Router();

assetRouter.post("/", validateBody(createAssetsSchema), createAssets).get("/", validateAssetAlias, getByAlias);
