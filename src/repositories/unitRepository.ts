import { Unit } from "@prisma/client";
import { prisma } from "@/config";

export type CreateUnitParams = Omit<Unit, "id" | "createdAt" | "updatedAt">;

export const unitRepository = {
  getbyName: async (name: string) => {
    return await prisma.unit.findUnique({
      where: { name },
    });
  },

  create: async (data: CreateUnitParams) => {
    await prisma.unit.create({
      data,
    });
  },

  getByCompanyId: async (companyId: string) => {
    return await prisma.unit.findMany({
      where: {
        companyId,
      },
    });
  },
};
