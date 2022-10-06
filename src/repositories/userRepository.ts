import { prisma } from "@/config/db";

interface CreateCompanyParams {
  name: string;
  cnpj: string;
}

const userRepository = {
  create: async (data: CreateCompanyParams) => {
    await prisma.company.create({
      data,
    });
  },
};
