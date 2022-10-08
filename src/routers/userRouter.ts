import { Router } from "express";

import { createUser } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createUserSchema } from "@/schemas";

export const userRouter = Router();

userRouter.post("/", validateBody(createUserSchema), createUser);
