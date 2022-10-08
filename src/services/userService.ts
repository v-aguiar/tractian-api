import { alreadyExistsError } from "@/errors";
import { CreateUserParams, userRepository } from "@/repositories";

export const userService = {
  create: async (data: CreateUserParams) => {
    const user = await userRepository.getByCpf(data.cpf);
    if (user) throw alreadyExistsError("⚠ User already exists!");

    await userRepository.create(data);
  },
};
