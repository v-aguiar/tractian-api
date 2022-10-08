import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import type { ApplicationError } from "@/protocols";

export const handleApplicationErrors = (
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.name === "UnprocessableEntityError") {
    console.error("UnprocessableEntityError: ", err);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: err.message, details: err });
  }

  if (err.name === "AlreadyExistsError") {
    console.error("AlreadyExistsError: ", err);
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }

  console.error("Internal Server Error: ", err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    name: "Internal Server Error",
    message: err?.message || `Internal Server Error: ${err}`,
  });
};
