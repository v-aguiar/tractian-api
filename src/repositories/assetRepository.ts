import { Asset } from "@prisma/client";
import { prisma } from "@/config";

import type { UpdateAssetParams } from "@/schemas";

export type CreateAssetsParams = Omit<Asset, "id" | "createdAt" | "updatedAt">;

export const assetRepository = {
  create: async (data: CreateAssetsParams[]) => {
    return await prisma.asset.createMany({
      data,
    });
  },

  getByAlias: async (alias: string) => {
    return await prisma.asset.findUnique({
      where: { alias },
    });
  },

  getAssetsByUnitId: async (unitId: string) => {
    return await prisma.asset.findMany({
      where: { unitId },
    });
  },

  update: async ({ id, ...data }: UpdateAssetParams & { id: string }) => {
    return await prisma.asset.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.asset.delete({
      where: { id },
    });
  },
};
