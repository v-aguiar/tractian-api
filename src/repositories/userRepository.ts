import { User } from "@prisma/client";
import { prisma } from "@/config";

export type CreateUserParams = Omit<User, "id">;

export const userRepository = {
  create: async (data: CreateUserParams) => {
    await prisma.user.create({
      data,
    });
  },

  getByCpf: async (cpf: string) => {
    const user = await prisma.user.findUnique({
      where: { cpf },
    });

    return user;
  },
};
