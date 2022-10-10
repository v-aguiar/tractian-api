import { Asset } from "@prisma/client";
import { prisma } from "@/config";

export type CreateAssetsParams = Omit<Asset, "id" | "createdAt" | "updatedAt">;

export const assetRepository = {
  create: async (data: CreateAssetsParams[]) => {
    return await prisma.asset.createMany({
      data,
    });
  },

  getByAlias: async (alias: string) => {
    return await prisma.asset.findUnique({
      where: {
        alias,
      },
    });
  },
};
