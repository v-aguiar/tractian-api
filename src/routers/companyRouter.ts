import { Router } from "express";
import httpStatus from "http-status";

import { companyRepository, CreateCompanyParams } from "@/repositories";

export const companyRouter = Router();

companyRouter
  .get("/", async (req, res) => {
    const companies = await companyRepository.getAll();

    res.status(httpStatus.OK).json(companies);
  })
  .post("/", async (req, res) => {
    const data: CreateCompanyParams = req.body;

    await companyRepository.create(data);

    res.status(httpStatus.CREATED).send("✔ Company created!");
  });

// TODO: refactor -> Implement schema validation, separate into controllers, services and repositories
