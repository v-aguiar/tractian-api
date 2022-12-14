import { alreadyExistsError, notFoundError } from "@/errors";
import { CreateUnitParams, unitRepository, companyRepository } from "@/repositories";

export const unitService = {
  create: async (data: CreateUnitParams) => {
    const unit = await unitRepository.getbyName(data.name);
    if (unit) throw alreadyExistsError("⚠ Unit already exists!");

    const company = await companyRepository.getById(data.companyId);
    if (!company) throw notFoundError("⚠ Company not found!");

    await unitRepository.create(data);
  },

  getByName: async (name: string) => {
    const unit = await unitRepository.getbyName(name);
    if (!unit) throw notFoundError("⚠ Unit not found!");

    return unit;
  },

  getByCompanyId: async (companyId: string) => {
    const company = await companyRepository.getById(companyId);
    if (!company) throw notFoundError("⚠ Company not found!");

    const units = await unitRepository.getByCompanyId(companyId);
    if (!units) throw notFoundError("⚠ No unit found for this company!");

    return units;
  },

  deleteByName: async (name: string) => {
    const unit = await unitRepository.getbyName(name);
    if (!unit) throw notFoundError("⚠ Unit not found!");

    await unitRepository.deleteByName(name);
  },
};
