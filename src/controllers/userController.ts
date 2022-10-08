import { Request, Response } from "express";
import httpStatus from "http-status";

import type { CreateUserParams, UpdateUserParams } from "@/repositories";
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

export const getCompanyByUserCpf = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const company = await userService.getCompanyByUserCpf(cpf);
  res.status(httpStatus.OK).send(company);
};

type UpdateUserBody = Omit<UpdateUserParams, "cpf">;

export const updateUserData = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  const data: UpdateUserBody = req.body;
  const updateUserData = { ...data, cpf };
  await userService.update(updateUserData);
  res.status(httpStatus.OK).send("✔ User data updated!");
};

export const deleteUserByCpf = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  await userService.delete(cpf);
  res.status(httpStatus.OK).send("✔ User deleted!");
};
