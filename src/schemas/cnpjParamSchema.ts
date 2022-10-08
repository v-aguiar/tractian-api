import Joi from "joi";

interface Cnpj {
  cnpj: string;
}

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
