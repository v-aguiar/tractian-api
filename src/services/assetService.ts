import { alreadyExistsError, notFoundError } from "@/errors";
import { assetRepository, CreateAssetsParams, unitRepository, userRepository } from "@/repositories";
import type { UpdateAssetParams } from "@/schemas";

export const assetService = {
  create: async (data: CreateAssetsParams[]) => {
    for (let i = 0; i < data.length; i++) {
      const assetData = data[i];

      const asset = await assetRepository.getByAlias(assetData.alias);
      if (asset) throw alreadyExistsError("⚠ Asset already exists... Each asset must have a unique alias!");

      const unit = await unitRepository.getById(assetData.unitId);
      if (!unit) throw notFoundError("⚠ Unit not found!");

      const user = await userRepository.getById(assetData.ownerId);
      if (!user) throw notFoundError("⚠ User not found!");
    }

    await assetRepository.create(data);
  },

  getByAlias: async (alias: string) => {
    const asset = await assetRepository.getByAlias(alias);
    if (!asset) throw notFoundError("⚠ Asset not found!");

    return asset;
  },

  update: async ({ alias, ...data }: UpdateAssetParams & { alias: string }) => {
    const asset = await assetRepository.getByAlias(alias);
    if (!asset) throw notFoundError("⚠ Asset not found!");

    if (data?.ownerId) {
      try {
        await userRepository.getById(data.ownerId);
      } catch (error) {
        throw notFoundError("⚠ User not found... A valid ownerId must be provided! " + error);
      }
    }

    if (data?.unitId) {
      try {
        await unitRepository.getById(data.unitId);
      } catch (error) {
        throw notFoundError("⚠ Unit not found... A valid unitId must be provided! " + error);
      }
    }

    await assetRepository.update({ id: asset.id, ...data });
  },
};
