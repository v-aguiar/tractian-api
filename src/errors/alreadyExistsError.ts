import type { ApplicationError } from "@/protocols.js";

export const alreadyExistsError = (message: string): ApplicationError => {
  return {
    name: "AlreadyExistsError",
    message,
  };
};
