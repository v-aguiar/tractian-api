import { companyRepository, CreateCompanyParams } from "@/repositories";
import { alreadyExistsError } from "@/errors";

export const companyService = {
  create: async (data: CreateCompanyParams) => {
    const company = await companyRepository.getByCNPJ(data.cnpj);
    if (company) throw alreadyExistsError("⚠ Company already exists");

    await companyRepository.create(data);
  },
};
