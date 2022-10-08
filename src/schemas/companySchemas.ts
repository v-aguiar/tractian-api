import Joi from "joi";

import type { CreateCompanyParams } from "@/repositories";

interface Cnpj {
  cnpj: string;
}

export const createCompanySchema = Joi.object<CreateCompanyParams>({
  name: Joi.string().required().messages({
    "string.empty": "⚠ Name is required!",
    "string.base": "⚠ Name must be a string!",
  }),
  cnpj: Joi.string()
    .regex(/^\d{14}$/)
    .required()
    .messages({
      "string.empty": "⚠ CNPJ is required!",
      "string.base": "⚠ CNPJ must be a string!",
      "string.pattern.base": "⚠ CNPJ must have 14 digits, only numbers!",
    }),
});

export const cnpjParamSchema = Joi.object<Cnpj>({
  cnpj: Joi.string()
    .regex(/^\d{14}$/)
    .required()
    .messages({
      "string.base": "⚠ CNPJ must be a string!",
      "string.empty": "⚠ CNPJ cannot be an empty field!",
      "string.pattern.base": "⚠ CNPJ must have 14 digits, only numbers!",
    }),
});
