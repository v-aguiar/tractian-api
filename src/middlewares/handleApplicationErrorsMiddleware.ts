import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import type { ApplicationError } from "@/protocols";

export const handleApplicationErrors = (err: ApplicationError | Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.name === "UnprocessableEntityError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: err.message, details: err });
  }

  if (err.name === "AlreadyExistsError") {
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }

  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    name: "Internal Server Error",
    message: err?.message || `Internal Server Error: ${err}`,
  });
};
