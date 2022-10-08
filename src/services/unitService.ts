﻿import { alreadyExistsError } from "@/errors";
import { CreateUnitParams, unitRepository } from "@/repositories";

export const unitService = {
  create: async (data: CreateUnitParams) => {
    const unit = await unitRepository.getbyName(data.name);
    if (unit) throw alreadyExistsError("⚠ Unit already exists!");

    await unitRepository.create(data);
  },
};