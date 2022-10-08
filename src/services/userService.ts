import { alreadyExistsError, notFoundError } from "@/errors";
import { CreateUserParams, userRepository } from "@/repositories";

export const userService = {
  create: async (data: CreateUserParams) => {
    const user = await userRepository.getByCpf(data.cpf);
    if (user) throw alreadyExistsError("⚠ User already exists!");

    await userRepository.create(data);
  },

  getByCpf: async (cpf: string) => {
    const user = await userRepository.getByCpf(cpf);
    if (!user) throw notFoundError("⚠ User not found!");

    return user;
  },
};
