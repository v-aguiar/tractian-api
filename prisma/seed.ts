import { PrismaClient, Unit, User } from "@prisma/client";

import { CreateUserParams, CreateUnitParams, CreateAssetsParams } from "@/repositories";

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

const assets: CreateAssetsParams[] = [
  {
    name: "CNC Milling",
    alias: "Milling Machine 01",
    model: "Kaibo Dc1417",
    images: [
      "https://www.kaibomachine.com/wp-content/uploads/2021/12/auto-parts-cnc-milling-machine-dc1417-1.jpg",
      "https://www.kaibomachine.com/wp-content/uploads/2021/12/auto-parts-cnc-milling-machine-dc1417-2.jpg",
    ],
    description: "CNC milling machine ",
    status: "RUNNING",
    healthLevel: 100,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "CNC Milling",
    alias: "Milling Machine 02",
    model: "Kaibo Dc1417",
    images: [
      "https://www.kaibomachine.com/wp-content/uploads/2021/12/auto-parts-cnc-milling-machine-dc1417-1.jpg",
      "https://www.kaibomachine.com/wp-content/uploads/2021/12/auto-parts-cnc-milling-machine-dc1417-2.jpg",
    ],
    description: "CNC milling machine ",
    status: "ALERTING",
    healthLevel: 85,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Lubricated Compressor",
    alias: "Compressor 01",
    model: "Mattei ERC 30-37-45-55",
    images: [
      "https://www.matteigroup.com/hs-fs/hubfs/MATTEI%20CORPORATE%20NEW%20WEBSITE/PRODOTTI/COMPRESSORI%20LUBRIFICATI/SERIE%20CLASSIC/T4_Pagina%20prodotto_ERC%2030-55.jpg?width=225&name=T4_Pagina%20prodotto_ERC%2030-55.jpg",
    ],
    description: "Mattei rotary vane compressor, small and medium-sized businesses",
    status: "RUNNING",
    healthLevel: 80,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Lubricated Compressor",
    alias: "Compressor 02",
    model: "Mattei ERC 30-37-45-55",
    images: [
      "https://www.matteigroup.com/hs-fs/hubfs/MATTEI%20CORPORATE%20NEW%20WEBSITE/PRODOTTI/COMPRESSORI%20LUBRIFICATI/SERIE%20CLASSIC/T4_Pagina%20prodotto_ERC%2030-55.jpg?width=225&name=T4_Pagina%20prodotto_ERC%2030-55.jpg",
    ],
    description: "Mattei rotary vane compressor, small and medium-sized businesses",
    status: "STOPPED",
    healthLevel: 30,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Lubricated Compressor",
    alias: "Compressor 03",
    model: "Mattei ERC 30-37-45-55",
    images: [
      "https://www.matteigroup.com/hs-fs/hubfs/MATTEI%20CORPORATE%20NEW%20WEBSITE/PRODOTTI/COMPRESSORI%20LUBRIFICATI/SERIE%20CLASSIC/T4_Pagina%20prodotto_ERC%2030-55.jpg?width=225&name=T4_Pagina%20prodotto_ERC%2030-55.jpg",
    ],
    description: "Mattei rotary vane compressor, small and medium-sized businesses",
    status: "ALERTING",
    healthLevel: 55,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Electric gear oil pump",
    alias: "Oil Pump 01",
    model: "bFlow O300",
    images: [
      "https://www.buehlermotor.com/fileadmin/templates/website/media/images/Produktdaten/Automotive/E-Pumpen/Getriebeoelpumpen/buehler_motor_Automotive_E_Pumpe_bFlow_O_Geely.png",
    ],
    description: "Power comsumption: 100W - 600W, Temp range: -40°C to +140°C, Working life> 10.000h",
    status: "RUNNING",
    healthLevel: 76,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Electric gear oil pump",
    alias: "Oil Pump 02",
    model: "bFlow O600",
    images: [
      "https://www.buehlermotor.com/fileadmin/templates/website/media/images/Produktdaten/Automotive/E-Pumpen/Getriebeoelpumpen/buehler_motor_Automotive_E_Pumpe_bFlow_O600.png",
    ],
    description: "Power comsumption: 100W - 600W, Temp range: -40°C to +140°C, Working life> 10.000h",
    status: "ALERTING",
    healthLevel: 66,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Electric gear oil pump",
    alias: "Oil Pump 03",
    model: "bFlow O20",
    images: [
      "https://www.buehlermotor.com/fileadmin/templates/website/media/images/Produktdaten/Automotive/E-Pumpen/Getriebeoelpumpen/buehler_motor_Automotive_E_Pumpe_bFlow_O20.png",
    ],
    description: "Power comsumption: 20W - 80W, Temp range: -40°C to +140°C, Working life> 10.000h",
    status: "STOPPED",
    healthLevel: 23,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Scroll Compressor",
    alias: "Scroll Compressor 01",
    model: "GL G03ZY",
    images: [
      "https://s.alicdn.com/@sc04/kf/H78c20a5a813848c194f03702a6a478c1U.jpg_960x960.jpg",
      "https://s.alicdn.com/@sc04/kf/H959bb584fd5048aca711f5b228149deaH.jpg_960x960.jpg",
    ],
    description: "AC Power scroll compressor, 380V, 50Hz, 8bar, air capacity: 230 L/min",
    status: "RUNNING",
    healthLevel: 97,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
  {
    name: "Electric Motor",
    alias: "Electric Motor 01",
    model: "ZBAO IE3-71M1-2",
    images: [
      "https://s.alicdn.com/@sc04/kf/H47311e0c0b3741c7ad3936e40bb7d58ci.jpg_960x960.jpg",
      "https://s.alicdn.com/@sc04/kf/Hf9cddd2f5d2d4c2f8aa4bd3f456eb129D.jpg_960x960.jpg",
    ],
    description: "Three phase asynchronous motor, 220V/380V, 50/60Hz, 0.18-7.5kW, 3000-7000rpm, IP55",
    status: "RUNNING",
    healthLevel: 88,
    ownerId: null,
    unitId: null,
    lastCheck: null,
    nextCheck: null,
  },
];

const getEntityId = (entity: User[] | Unit[]) => {
  return entity[Math.floor(Math.random() * entity.length)].id;
};

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

  const createdUsers = await prisma.user.findMany({ where: { companyId: createdCompany.id } });
  const createdUnits = await prisma.unit.findMany({ where: { companyId: createdCompany.id } });

  assets.forEach(async (asset) => {
    asset.ownerId = getEntityId(createdUsers);
    asset.unitId = getEntityId(createdUnits);
    await prisma.asset.upsert({ create: asset, update: {}, where: { alias: asset.alias } });
  });
};

seed().then(() => prisma.$disconnect());
