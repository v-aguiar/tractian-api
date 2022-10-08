import { Router } from "express";

import { createUser, getCompanyByUserCpf, getUserByCpf } from "@/controllers";
import { validateBody, validateParams } from "@/middlewares";
import { cpfParamSchema, createUserSchema } from "@/schemas";

export const userRouter = Router();

userRouter
  .post("/", validateBody(createUserSchema), createUser)
  .get("/:cpf", validateParams(cpfParamSchema), getUserByCpf)
  .get("/:cpf/company", validateParams(cpfParamSchema), getCompanyByUserCpf);
