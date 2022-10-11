import Joi from "joi";

import type { CreateUnitParams } from "@/repositories";

export const createUnitSchema = Joi.object<CreateUnitParams>({
  name: Joi.string().required().messages({
    "string.base": "⚠ Name must be a string!",
    "string.empty": "⚠ Name cannot be an empty field!",
  }),
  address: Joi.string().required().messages({
    "string.base": "⚠ Address must be a string!",
    "string.empty": "⚠ Address cannot be an empty field!",
  }),
  companyId: Joi.string().required().messages({
    "string.base": "⚠ Company ID must be a string!",
    "string.empty": "⚠ Company ID cannot be an empty field!",
  }),
});

type Name = {
  name: string;
};

export const unitNameParamSchema = Joi.object<Name>({
  name: Joi.string().required().messages({
    "string.base": "⚠ Name must be a string!",
    "string.empty": "⚠ Name cannot be an empty field!",
  }),
});

type UnitId = {
  unitId: string;
};

export const unitIdParamSchema = Joi.object<UnitId>({
  unitId: Joi.string().required().messages({
    "string.base": "⚠ Unit ID must be a string!",
    "string.empty": "⚠ Unit ID cannot be an empty field!",
  }),
});
