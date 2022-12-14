import Joi from "joi";
import type { CreateUserParams, UpdateUserParams } from "@/repositories";

interface Cpf {
  cpf: string;
}

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().required().messages({
    "string.base": "⚠ Name must be a string!",
    "string.empty": "⚠ Name cannot be empty!",
  }),
  cpf: Joi.string()
    .regex(/^\d{11}$/)
    .required()
    .messages({
      "string.base": "⚠ CPF must be a string!",
      "string.empty": "⚠ CPF cannot be empty!",
      "string.pattern.base": "⚠ CPF must have 11 digits, without special characters!",
    }),
  phoneNumber: Joi.string()
    .regex(/^\d{11}$/)
    .required()
    .messages({
      "string.base": "⚠ Phone number must be a string!",
      "string.empty": "⚠ Phone number cannot be empty!",
      "string.pattern.base": "⚠ Phone number must have 11 digits, without special characters!",
    }),
  role: Joi.string().required().messages({
    "string.base": "⚠ Role must be a string!",
    "string.empty": "⚠ Role cannot be empty!",
  }),
  companyId: Joi.string().required().messages({
    "string.base": "⚠ Company ID must be a string!",
    "string.empty": "⚠ Company ID cannot be empty!",
  }),
});

export const updateUserSchema = Joi.object<UpdateUserParams>({
  name: Joi.string().messages({
    "string.base": "⚠ Name must be a string!",
  }),
  phoneNumber: Joi.string()
    .regex(/^\d{11}$/)
    .messages({
      "string.base": "⚠ Phone number must be a string!",
      "string.pattern.base": "⚠ Phone number must have 11 digits, without special characters!",
    }),
  role: Joi.string().messages({
    "string.base": "⚠ Role must be a string!",
  }),
  companyId: Joi.string().messages({
    "string.base": "⚠ Company ID must be a string!",
  }),
});

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
