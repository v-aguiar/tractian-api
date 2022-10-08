import Joi from "joi";

interface Cpf {
  cpf: string;
}

export const cpfParamSchema = Joi.object<Cpf>({
  cpf: Joi.string()
    .regex(/^\d{11}$/)
    .required()
    .messages({
      "string.base": "⚠ CPF must be a string!",
      "string.empty": "⚠ CPF cannot be an empty field!",
      "string.pattern.base": "⚠ CPF must have 11 digits, only numbers!",
    }),
});
