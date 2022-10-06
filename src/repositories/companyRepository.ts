import { prisma } from "@/config/db";

export interface CreateCompanyParams {
  name: string;
  cnpj: string;
}

export const companyRepository = {
  create: async (data: CreateCompanyParams) => {
    await prisma.company.create({
      data,
    });
  },

  getAll: async () => {
    return await prisma.company.findMany({});
  },
};
