import { User } from "@prisma/client";
import { prisma } from "@/config";

export type CreateUserParams = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UpdateUserParams = Pick<CreateUserParams, "cpf"> & Partial<Omit<CreateUserParams, "cpf">>;

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

  update: async (data: UpdateUserParams) => {
    await prisma.user.update({
      where: { cpf: data.cpf },
      data,
    });
  },

  delete: async (cpf: string) => {
    await prisma.user.delete({
      where: { cpf },
    });
  },
};
