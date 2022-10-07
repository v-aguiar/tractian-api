import { CreateCompanyParams } from "@/repositories/companyRepository.js";
import Joi from "joi";

export const createCompanySchema = Joi.object<CreateCompanyParams>({
  name: Joi.string().required().messages({
    "string.empty": "⚠ Nome da empresa é obrigatório",
    "string.base": "⚠ Nome da empresa deve ser uma string",
  }),
  cnpj: Joi.string()
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
    .required()
    .messages({
      "string.empty": "⚠ CNPJ da empresa é obrigatório",
      "string.base": "⚠ CNPJ da empresa deve ser uma string",
      "string.pattern.base": "⚠ CNPJ da empresa deve estar no formato 00.000.000/0000-00",
    }),
});
