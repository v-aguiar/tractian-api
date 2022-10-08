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

  getByCNPJ: async (cnpj: string) => {
    return await prisma.company.findUnique({
      where: {
        cnpj,
      },
    });
  },

  getAll: async () => {
    return await prisma.company.findMany();
  },

  getById: async (id: string) => {
    return await prisma.company.findUnique({
      where: {
        id,
      },
    });
  },
};
