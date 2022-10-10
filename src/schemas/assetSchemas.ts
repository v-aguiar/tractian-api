import { Status } from "@prisma/client";
import Joi from "joi";
import { CreateAssetsParams } from "@/repositories";

const createAssetSchema = Joi.object<CreateAssetsParams>({
  name: Joi.string().required().messages({
    "string.base": "⚠ Name must be a string",
    "string.empty": "⚠ Name cannot be empty",
  }),
  alias: Joi.string().required().messages({
    "string.base": "⚠ Alias must be a string",
    "string.empty": "⚠ Alias cannot be empty",
  }),
  model: Joi.string().required().messages({
    "string.base": "⚠ Model must be a string",
    "string.empty": "⚠ Model cannot be empty",
  }),
  description: Joi.string().required().messages({
    "string.base": "⚠ Description must be a string",
    "string.empty": "⚠ Description cannot be empty",
  }),
  healthLevel: Joi.number().integer().min(0).max(100).required().messages({
    "number.base": "⚠ Health Level must be a number",
    "number.empty": "⚠ Health Level cannot be empty",
    "number.integer": "⚠ Health Level must be an integer",
    "number.min": "⚠ Health Level must be greater than or equal to 0",
    "number.max": "⚠ Health Level must be less than or equal to 100",
  }),
  images: Joi.array().items(Joi.string().uri()).required().messages({
    "array.base": "⚠ Images must be an array",
    "array.empty": "⚠ Images cannot be empty",
    "string.base": "⚠ Each image inside the array must be of type string",
  }),
  status: Joi.string()
    .valid(...Object.values(Status))
    .required()
    .messages({
      "string.base": "⚠ Status must be a string",
      "string.empty": "⚠ Status cannot be empty",
      "any.only": "⚠ Status must be one of the following: 'RUNNING', 'ALERTING', 'STOPPED'",
    }),
  ownerId: Joi.string().required().messages({
    "string.base": "⚠ Owner ID must be a string",
    "string.empty": "⚠ Owner ID cannot be empty",
  }),
  unitId: Joi.string().required().messages({
    "string.base": "⚠ Unit ID must be a string",
    "string.empty": "⚠ Unit ID cannot be empty",
  }),
  lastCheck: Joi.date().messages({
    "date.base": "⚠ Last check must be a date",
  }),
  nextCheck: Joi.date().messages({
    "date.base": "⚠ Next check must be a date",
  }),
});

export const createAssetsSchema = Joi.array().items(createAssetSchema).required().messages({
  "array.base": "⚠ Body must have an array of assets",
  "array.empty": "⚠ Body cannot be empty",
});
