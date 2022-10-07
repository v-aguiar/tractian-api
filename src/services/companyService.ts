import { companyRepository, CreateCompanyParams } from "@/repositories";
import { alreadyExistsError, notFoundError } from "@/errors";

export const companyService = {
  create: async (data: CreateCompanyParams) => {
    const company = await companyRepository.getByCNPJ(data.cnpj);
    if (company) throw alreadyExistsError("⚠ Company already exists");

    await companyRepository.create(data);
  },

  getByCNPJ: async (cnpj: string) => {
    const company = await companyRepository.getByCNPJ(cnpj);
    if (!company) throw notFoundError("⚠ Company not found");

    return company;
  },

  getAll: async () => {
    const companies = await companyRepository.getAll();

    return companies;
  },
};
