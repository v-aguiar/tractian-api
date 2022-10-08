import { Router } from "express";

import { createUser, getCompanyByUserCpf, getUserByCpf, updateUserData } from "@/controllers";
import { validateBody, validateParams } from "@/middlewares";
import { cpfParamSchema, createUserSchema, updateUserSchema } from "@/schemas";

export const userRouter = Router();

userRouter
  .post("/", validateBody(createUserSchema), createUser)
  .use("/:cpf", validateParams(cpfParamSchema))
  .get("/:cpf", getUserByCpf)
  .get("/:cpf/company", getCompanyByUserCpf)
  .put("/:cpf", validateBody(updateUserSchema), updateUserData);
