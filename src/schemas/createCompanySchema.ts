import { CreateCompanyParams } from "@/repositories/companyRepository.js";
import Joi from "joi";

export const createCompanySchema = Joi.object<CreateCompanyParams>({
  name: Joi.string().required().messages({
    "string.empty": "⚠ Nome da empresa é obrigatório",
    "string.base": "⚠ Nome da empresa deve ser uma string",
  }),
  cnpj: Joi.string()
    .regex(/^\d{14}$/)
    .required()
    .messages({
      "string.empty": "⚠ CNPJ da empresa é obrigatório",
      "string.base":
        "⚠ CNPJ da empresa deve ser uma string de números, sem pontos, hífens, barras ou outros caracteres",
      "string.pattern.base": "⚠ CNPJ da empresa deve ter 14 dígitos",
    }),
});
