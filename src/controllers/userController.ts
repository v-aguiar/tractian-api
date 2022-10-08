import { Request, Response } from "express";
import httpStatus from "http-status";

import type { CreateUserParams } from "@/repositories";
import { userService } from "@/services";

export const createUser = async (req: Request, res: Response) => {
  const data: CreateUserParams = req.body;
  await userService.create(data);
  res.status(httpStatus.CREATED).send("✔ User created!");
};

export const getUserByCpf = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const user = await userService.getByCpf(cpf);
  res.status(httpStatus.OK).send(user);
};
