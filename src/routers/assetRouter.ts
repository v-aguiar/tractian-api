import { Router } from "express";

import { createAssets } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createAssetsSchema } from "@/schemas";

export const assetRouter = Router();

assetRouter.post("/", validateBody(createAssetsSchema), createAssets);
