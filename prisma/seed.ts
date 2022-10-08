import { PrismaClient, Unit, User } from "@prisma/client";

import { CreateUserParams, CreateUnitParams } from "@/repositories";

const users: CreateUserParams[] = [
  {
    phoneNumber: "11999999999",
    name: "Emerson José Pereira",
    cpf: "123.456.789-00",
    role: "Maintenece Manager",
    companyId: null,
  },
  {
    phoneNumber: "11999999998",
    name: "Roberta dos Anjos",
    cpf: "987.654.321-00",
    role: "Maintenece Manager",
    companyId: null,
  },
];

const company = {
  name: "Freios Supremos",
  cnpj: "01234567000199",
};

const units: CreateUnitParams[] = [
  {
    name: "Unidade 1",
    address: "Rio de Janeiro, RJ",
    companyId: null,
  },
  {
    name: "Unidade 2",
    address: "Salvador, BA",
    companyId: null,
  },
];

const prisma = new PrismaClient();

const seed = async () => {
  const createdCompany = await prisma.company.upsert({ create: company, update: {}, where: { cnpj: company.cnpj } });

  users.forEach(async (user) => {
    user.companyId = createdCompany.id;
    await prisma.user.upsert({ create: user, update: {}, where: { cpf: user.cpf } });
  });

  units.forEach(async (unit) => {
    unit.companyId = createdCompany.id;
    await prisma.unit.upsert({ create: unit, update: {}, where: { name: unit.name } });
  });
};

seed().then(() => prisma.$disconnect());
