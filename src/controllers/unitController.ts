import { Request, Response } from "express";
import httpStatus from "http-status";

import { CreateUnitParams } from "@/repositories";
import { unitService } from "@/services";

export const createUnit = async (req: Request, res: Response) => {
  const data: CreateUnitParams = req.body;
  await unitService.create(data);
  res.status(httpStatus.CREATED).send("✔ Unit created!");
};

export const getUnitByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  const unit = await unitService.getByName(name);
  res.status(httpStatus.OK).send(unit);
};
