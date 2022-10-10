import { alreadyExistsError, notFoundError } from "@/errors";
import { assetRepository, CreateAssetsParams, unitRepository, userRepository } from "@/repositories";

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
};
